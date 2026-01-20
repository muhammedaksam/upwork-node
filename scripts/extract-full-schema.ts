/**
 * Advanced HTML Schema Extractor for Upwork API Documentation
 *
 * This script fully parses GraphQL schema information from the HTML including:
 * - Type definitions with all fields
 * - Query/Mutation definitions with arguments and return types
 * - Field types and descriptions
 */

import * as fs from "fs"
import * as path from "path"

import { parse } from "node-html-parser"

interface TypeField {
  name: string
  type: string
  description?: string
  isRequired: boolean
}

interface TypeDefinition {
  name: string
  kind: "type" | "enum" | "input" | "interface"
  description?: string
  fields: TypeField[]
  enumValues?: string[]
}

interface OperationArg {
  name: string
  type: string
  description?: string
  isRequired: boolean
}

interface Operation {
  name: string
  type: "query" | "mutation"
  description?: string
  args: OperationArg[]
  returnType?: string
  returnFields?: TypeField[]
}

class AdvancedHTMLExtractor {
  private htmlContent: string
  private root: any
  private types: Map<string, TypeDefinition> = new Map()
  private operations: Map<string, Operation> = new Map()

  constructor(htmlFilePath: string) {
    this.htmlContent = fs.readFileSync(htmlFilePath, "utf-8")
    this.root = parse(this.htmlContent)
  }

  /**
   * Extract all type definitions with fields
   */
  extractTypes(): void {
    console.log("Extracting type definitions...")

    const typeSections = this.root.querySelectorAll("section.definition")

    for (const section of typeSections) {
      const id = section.getAttribute("id")
      if (!id || !id.startsWith("definition-")) continue

      const typeName = id.replace("definition-", "")
      const heading = section.querySelector(".definition-heading")
      const descElement = section.querySelector(".definition-description p")

      const description = descElement?.text?.trim() || ""

      // Check if it's an enum
      const enumSection = section.querySelector(".definition-enumValues")
      if (enumSection) {
        this.extractEnumType(typeName, description, section)
        continue
      }

      // Extract fields
      const fields = this.extractFields(section)

      // Determine kind
      let kind: "type" | "enum" | "input" | "interface" = "type"
      if (typeName.endsWith("Input") || typeName.endsWith("Request")) {
        kind = "input"
      }

      this.types.set(typeName, {
        name: typeName,
        kind,
        description,
        fields,
      })
    }

    console.log(`✓ Extracted ${this.types.size} types with full field definitions`)
  }

  /**
   * Extract enum type
   */
  private extractEnumType(name: string, description: string, section: any): void {
    const enumValues: string[] = []
    const valueRows = section.querySelectorAll(".definition-enumValues tbody tr")

    for (const row of valueRows) {
      const valueName = row.querySelector(".enum-value code")?.text?.trim()
      if (valueName) {
        enumValues.push(valueName)
      }
    }

    this.types.set(name, {
      name,
      kind: "enum",
      description,
      fields: [],
      enumValues,
    })
  }

  /**
   * Extract fields from a type section
   */
  private extractFields(section: any): TypeField[] {
    const fields: TypeField[] = []
    const fieldMap = new Map<string, TypeField>() // For deduplication
    const fieldRows = section.querySelectorAll(
      ".definition-properties tbody tr, .definition-input-fields tbody tr"
    )

    for (const row of fieldRows) {
      const propertyNameSpan = row.querySelector(".property-name code")
      if (!propertyNameSpan) continue

      const fieldName = propertyNameSpan.text?.trim()
      if (!fieldName) continue

      // Skip if already processed (deduplication)
      if (fieldMap.has(fieldName)) continue

      // Extract type
      const propertyType = row.querySelector(".property-type")
      let fieldType = "any"
      let isRequired = false
      let typeText = ""

      if (propertyType) {
        typeText = propertyType.text?.trim() || ""
        fieldType = typeText.replace(/[[\]!]/g, "")
        isRequired = typeText.includes("!")
      }

      // Extract description
      const descCell = row.querySelectorAll("td")[1]
      const description = descCell?.text?.trim() || ""

      const field: TypeField = {
        name: fieldName,
        type: this.mapGraphQLTypeToTS(fieldType, typeText.includes("[")),
        description,
        isRequired,
      }

      fieldMap.set(fieldName, field)
      fields.push(field)
    }

    return fields
  }

  /**
   * Extract operations (queries and mutations) with full details
   */
  extractOperations(): void {
    console.log("Extracting operations...")

    // Extract queries
    const querySections = this.root.querySelectorAll('section[id^="query-"]')
    for (const section of querySections) {
      this.extractOperation(section, "query")
    }

    // Extract mutations
    const mutationSections = this.root.querySelectorAll('section[id^="mutation-"]')
    for (const section of mutationSections) {
      this.extractOperation(section, "mutation")
    }

    const queryCount = Array.from(this.operations.values()).filter((o) => o.type === "query").length
    const mutationCount = Array.from(this.operations.values()).filter(
      (o) => o.type === "mutation"
    ).length

    console.log(
      `✓ Extracted ${queryCount} queries and ${mutationCount} mutations with full signatures`
    )
  }

  /**
   * Extract single operation details
   */
  private extractOperation(section: any, type: "query" | "mutation"): void {
    const id = section.getAttribute("id")
    if (!id) return

    const operationName = id.replace(`${type}-`, "")
    const descElement = section.querySelector(".doc-copy > p")
    const description = descElement?.text?.trim() || ""

    // Extract arguments
    const args: OperationArg[] = []
    const argRows = section.querySelectorAll(".operation-arguments tbody tr")

    for (const row of argRows) {
      // Try both .argument-name and .property-name (HTML uses property-name)
      let argNameCode = row.querySelector(".argument-name code")
      if (!argNameCode) {
        argNameCode = row.querySelector(".property-name code")
      }
      if (!argNameCode) continue

      const argName = argNameCode.text?.trim()
      if (!argName) continue

      // Extract type from the same line (format: "name - TYPE")
      const firstTd = row.querySelector("td")
      const tdText = firstTd?.innerHTML || ""

      // Match pattern: <span class="property-type">TYPE</span>
      const typeMatch = tdText.match(/<span class="property-type">.*?<code>([^<]+)<\/code>/)
      let typeText = "any"

      if (typeMatch && typeMatch[1]) {
        typeText = typeMatch[1]
      } else {
        // Try alternative: look for .argument-type or .property-type
        const argTypeSpan = row.querySelector(".argument-type, .property-type")
        if (argTypeSpan) {
          typeText = argTypeSpan.text?.trim() || "any"
        }
      }

      const isRequired = typeText.includes("!")

      const argDescCell = row.querySelectorAll("td")[1]
      const argDesc = argDescCell?.text?.trim() || ""

      // Map type with proper Types. prefix for custom types
      const cleanType = typeText.replace(/[[\]!]/g, "").trim()
      const isList = typeText.includes("[")
      let mappedType = this.mapGraphQLTypeToTS(cleanType, isList)

      // Add Types. prefix for custom types (not primitives)
      const primitiveTypes = ["string", "number", "boolean", "any"]
      const baseType = mappedType.replace("Array<", "").replace(">", "")

      if (!primitiveTypes.includes(baseType) && this.types.has(cleanType)) {
        mappedType = isList ? `Array<Types.${cleanType}>` : `Types.${cleanType}`
      }

      args.push({
        name: argName,
        type: mappedType,
        description: argDesc,
        isRequired,
      })
    }

    // Extract return type from various possible locations
    let returnTypeRaw = "any"

    // Try to find return type in different locations
    const returnTypeElement = section.querySelector(".operation-type code")
    if (returnTypeElement) {
      returnTypeRaw = returnTypeElement.text?.trim() || "any"
    } else {
      // Look for "Returns a <type>" or "Returns <type>" pattern in all paragraph tags
      const allParagraphs = section.querySelectorAll("p")
      for (const p of allParagraphs) {
        // Try pattern with "a/an" first
        let returnMatch = p.innerHTML?.match(/Returns (?:a|an) <a[^>]*><code>([^<]+)<\/code><\/a>/)
        if (!returnMatch) {
          // Try pattern without "a/an" (e.g., "Returns [Country!]!")
          returnMatch = p.innerHTML?.match(/Returns <a[^>]*><code>([^<]+)<\/code><\/a>/)
        }
        if (returnMatch && returnMatch[1]) {
          returnTypeRaw = returnMatch[1]
          break
        }
      }
    }

    // Clean return type and check if it's an array or nullable
    const isArray = returnTypeRaw.includes("[")
    const isNullable = !returnTypeRaw.includes("!")
    const cleanReturnType = returnTypeRaw.replace(/[[\]!]/g, "").trim()

    // Map to TypeScript type with proper reference to generated types
    let mappedReturnType = this.mapGraphQLTypeToTS(cleanReturnType, isArray)

    // Add Types. prefix for custom types (not primitives) and add proper nullability
    const primitiveTypes = ["string", "number", "boolean", "any"]
    const baseType = mappedReturnType.replace("Array<", "").replace(">", "")

    if (cleanReturnType !== "any" && !primitiveTypes.includes(baseType)) {
      if (this.types.has(cleanReturnType)) {
        mappedReturnType = isArray ? `Array<Types.${cleanReturnType}>` : `Types.${cleanReturnType}`
      }
    }

    // Add null union if nullable
    if (isNullable && cleanReturnType !== "any") {
      mappedReturnType = `${mappedReturnType} | null`
    }

    this.operations.set(operationName, {
      name: operationName,
      type,
      description,
      args,
      returnType: mappedReturnType,
      returnFields: [],
    })
  }

  /**
   * Map GraphQL types to TypeScript types
   */
  private mapGraphQLTypeToTS(graphqlType: string, isList: boolean): string {
    const scalarMap: Record<string, string> = {
      String: "string",
      Int: "number",
      Float: "number",
      Boolean: "boolean",
      ID: "string",
      DateTime: "string",
      Date: "string",
      JSON: "any",
      Upload: "File",
    }

    let tsType = scalarMap[graphqlType] || graphqlType

    if (isList) {
      tsType = `Array<${tsType}>`
    }

    return tsType
  }

  /**
   * Generate complete TypeScript types
   */
  generateTypes(): string {
    let output = "/**\n * Auto-generated TypeScript types from Upwork GraphQL API\n"
    output += " * Generated on: " + new Date().toISOString() + "\n"
    output += " * Total types: " + this.types.size + "\n */\n\n"

    // Sort types alphabetically
    const sortedTypes = Array.from(this.types.values()).sort((a, b) => a.name.localeCompare(b.name))

    for (const type of sortedTypes) {
      if (type.kind === "enum") {
        output += this.generateEnum(type)
      } else {
        output += this.generateInterface(type)
      }
    }

    return output
  }

  private generateEnum(type: TypeDefinition): string {
    let output = ""

    if (type.description) {
      output += `/** ${type.description} */\n`
    }

    output += `export enum ${type.name} {\n`

    if (type.enumValues && type.enumValues.length > 0) {
      for (const value of type.enumValues) {
        output += `  ${value} = '${value}',\n`
      }
    }

    output += "}\n\n"
    return output
  }

  private generateInterface(type: TypeDefinition): string {
    let output = ""

    if (type.description) {
      output += `/** ${type.description} */\n`
    }

    output += `export interface ${type.name} {\n`

    if (type.fields.length > 0) {
      for (const field of type.fields) {
        if (field.description) {
          output += `  /** ${field.description} */\n`
        }
        const optional = field.isRequired ? "" : "?"
        output += `  ${field.name}${optional}: ${field.type};\n`
      }
    }

    output += "}\n\n"
    return output
  }

  /**
   * Generate complete operation methods
   */
  generateOperationMethods(): string {
    let output = "/**\n * Auto-generated operation methods from Upwork GraphQL API\n"
    output += " * Generated on: " + new Date().toISOString() + "\n */\n\n"
    output += "import { UpworkGraphQLClient } from '../lib/graphql-client';\n"
    output += "import * as Types from './generated-types';\n\n"

    // Separate queries and mutations
    const queries = Array.from(this.operations.values()).filter((o) => o.type === "query")
    const mutations = Array.from(this.operations.values()).filter((o) => o.type === "mutation")

    // Generate query methods
    output += "// ========================================\n"
    output += "// QUERY METHODS (" + queries.length + ")\n"
    output += "// ========================================\n\n"
    output += "export const queries = {\n"

    for (const op of queries) {
      output += this.generateOperationMethod(op)
    }

    output += "};\n\n"

    // Generate mutation methods
    output += "// ========================================\n"
    output += "// MUTATION METHODS (" + mutations.length + ")\n"
    output += "// ========================================\n\n"
    output += "export const mutations = {\n"

    for (const op of mutations) {
      output += this.generateOperationMethod(op)
    }

    output += "};\n"

    return output
  }

  private generateOperationMethod(op: Operation): string {
    let output = ""

    // Generate JSDoc
    output += `  /**\n   * ${op.description || op.name}\n`

    if (op.args.length > 0) {
      output += "   * @param variables - Operation variables\n"
      for (const arg of op.args) {
        output += `   * @param variables.${arg.name} - ${arg.description || arg.type}\n`
      }
    }

    output += `   * @returns ${op.returnType}\n   */\n`

    // Generate method signature with proper parameter handling
    const hasRequiredArgs = op.args.some((a) => a.isRequired)
    const hasAnyArgs = op.args.length > 0

    let methodSignature = ""
    if (!hasAnyArgs) {
      // No parameters at all - make variables optional
      methodSignature = `  ${op.name}: async (client: UpworkGraphQLClient, variables?: Record<string, never>): Promise<${op.returnType}> => {\n`
    } else {
      const argsType = `{ ${op.args.map((a) => `${a.name}${a.isRequired ? "" : "?"}: ${a.type}`).join(", ")} }`
      // Only add default value if all arguments are optional
      const defaultValue = hasRequiredArgs ? "" : " = {}"
      methodSignature = `  ${op.name}: async (client: UpworkGraphQLClient, variables: ${argsType}${defaultValue}): Promise<${op.returnType}> => {\n`
    }
    output += methodSignature

    // Generate GraphQL query/mutation string
    const operationType = op.type
    const capitalizedName = op.name.charAt(0).toUpperCase() + op.name.slice(1)

    output += `    const ${operationType}String = \`\n`
    output += `      ${operationType} ${capitalizedName}`

    // Add variables to query signature
    if (op.args.length > 0) {
      const argsList = op.args
        .map((arg) => `$${arg.name}: ${this.getGraphQLType(arg.type, arg.isRequired)}`)
        .join(", ")
      output += `(${argsList})`
    }

    output += ` {\n`
    output += `        ${op.name}`

    // Add arguments to operation call
    if (op.args.length > 0) {
      const argsCall = op.args.map((arg) => `${arg.name}: $${arg.name}`).join(", ")
      output += `(${argsCall})`
    }

    // Check if return type is scalar/primitive (no fields needed)
    const returnTypeName = op.returnType
      ?.replace(/Array<|>/g, "")
      .replace(/Types\.|null|\|/g, "")
      .trim()
    const isScalar = ["string", "number", "boolean"].includes(returnTypeName || "")

    if (isScalar) {
      // Scalar types don't have fields - just close the operation
      output += "\n"
      output += "      }\n"
      output += "    \`;\n\n"
    } else {
      output += " {\n"

      // Try to add return fields if type is known
      const returnTypeObj = this.types.get(returnTypeName || "")

      if (returnTypeObj && returnTypeObj.fields.length > 0) {
        // Generate fields recursively with proper nesting
        output += this.generateFieldSelection(returnTypeName || "", "          ", 0, new Set())
      } else {
        output += "          # Add return fields here\n"
      }

      output += "        }\n"
      output += "      }\n"
      output += "    \`;\n\n"
    }

    // Generate method call
    const methodName = operationType === "mutation" ? "mutate" : "query"
    output += `    const result = await client.${methodName}(${operationType}String, variables);\n`
    output += `    return result.data.${op.name};\n`
    output += "  },\n\n"

    return output
  }

  private generateFieldSelection(
    typeName: string,
    indent: string = "          ",
    depth: number = 0,
    visited: Set<string> = new Set()
  ): string {
    // Prevent infinite recursion (depth limit reduced to 3 to keep queries manageable)
    if (depth > 3 || visited.has(typeName)) {
      return ""
    }

    visited.add(typeName)

    // Get the type definition
    const typeObj = this.types.get(typeName)
    if (!typeObj || typeObj.fields.length === 0) {
      return ""
    }

    let output = ""

    for (const field of typeObj.fields) {
      // Get the field type without Array<>, Types., | null, etc.
      const fieldTypeName = field.type
        .replace(/Array<|>/g, "")
        .replace(/Types\./g, "")
        .replace(/\s*\|\s*null/g, "")
        .trim()

      // Check if this is a scalar type
      const isScalar = ["string", "number", "boolean"].includes(fieldTypeName.toLowerCase())

      // Check if this type exists in our types map (meaning it's a complex object)
      const fieldTypeObj = this.types.get(fieldTypeName)
      const hasNestedFields = fieldTypeObj && fieldTypeObj.fields.length > 0

      if (isScalar || !hasNestedFields) {
        // Simple scalar field - just add the name
        output += `${indent}${field.name}\n`
      } else {
        // Complex object - try to recursively generate its fields
        const nestedFields = this.generateFieldSelection(
          fieldTypeName,
          indent + "  ",
          depth + 1,
          visited
        )

        // Only include this field if we got non-empty content
        if (nestedFields.trim().length > 0) {
          output += `${indent}${field.name} {\n`
          output += nestedFields
          output += `${indent}}\n`
        }
        // If nestedFields is empty (due to depth/circular ref), skip this field entirely
      }
    }

    return output
  }

  private getGraphQLType(tsType: string, isRequired: boolean): string {
    const typeMap: Record<string, string> = {
      string: "String",
      number: "Int",
      boolean: "Boolean",
    }

    // Strip Types. prefix for GraphQL (it's only for TypeScript)
    let gqlType = tsType.replace(/Types\./g, "")
    gqlType = typeMap[gqlType] || gqlType

    if (gqlType.startsWith("Array<")) {
      const innerType = gqlType
        .replace("Array<", "")
        .replace(">", "")
        .replace(/Types\./g, "")
      gqlType = `[${innerType}]`
    }

    if (isRequired && !gqlType.endsWith("!")) {
      gqlType += "!"
    }

    return gqlType
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  /**
   * Generate domain-grouped client code
   */
  generateDomainGroupedClient(): string {
    let output = "/**\n * Auto-generated domain-grouped client from Upwork GraphQL API\n"
    output += " * Generated on: " + new Date().toISOString() + "\n */\n\n"
    output += "import { UpworkGraphQLClient } from '../lib/graphql-client';\n"
    output += "import * as Types from './generated-types';\n"
    output += "import { queries, mutations } from './generated-operations';\n\n"

    // Group operations by domain
    const domains = this.groupOperationsByDomain()

    // Generate domain classes
    for (const [domainName, ops] of domains.entries()) {
      output += this.generateDomainClass(domainName, ops)
    }

    // Generate main generated client
    output += "/**\n * Generated Upwork API Client with domain-grouped methods\n */\n"
    output += "export class GeneratedUpworkClient {\n"
    output += "  private client: UpworkGraphQLClient;\n\n"

    // Add domain properties
    for (const domainName of domains.keys()) {
      output += `  public ${domainName}: ${this.capitalize(domainName)}Domain;\n`
    }

    output += "\n  constructor(client: UpworkGraphQLClient) {\n"
    output += "    this.client = client;\n"
    for (const domainName of domains.keys()) {
      output += `    this.${domainName} = new ${this.capitalize(domainName)}Domain(this.client);\n`
    }
    output += "  }\n"
    output += "}\n"

    return output
  }

  /**
   * Group operations by domain (jobs, users, contracts, etc.)
   */
  private groupOperationsByDomain(): Map<string, Operation[]> {
    const domains = new Map<string, Operation[]>()

    // Domain keywords mapping
    const domainKeywords: Record<string, string[]> = {
      jobs: ["job", "posting", "marketplace"],
      users: ["user", "freelancer", "client", "organization", "profile"],
      contracts: ["contract", "offer", "engagement"],
      proposals: ["proposal", "application"],
      messages: ["message", "thread", "room", "conversation"],
      payments: ["payment", "transaction", "billing", "invoice"],
      timesheets: ["timesheet", "workdiary", "timeReport"],
      search: ["search"],
      metadata: ["metadata", "skill", "category", "country", "timezone"],
    }

    for (const op of this.operations.values()) {
      let assigned = false

      // Try to match operation to domain
      for (const [domain, keywords] of Object.entries(domainKeywords)) {
        if (keywords.some((kw) => op.name.toLowerCase().includes(kw.toLowerCase()))) {
          if (!domains.has(domain)) {
            domains.set(domain, [])
          }
          domains.get(domain)!.push(op)
          assigned = true
          break
        }
      }

      // If not assigned, put in 'other'
      if (!assigned) {
        if (!domains.has("other")) {
          domains.set("other", [])
        }
        domains.get("other")!.push(op)
      }
    }

    return domains
  }

  /**
   * Generate a domain class
   */
  private generateDomainClass(domainName: string, operations: Operation[]): string {
    const className = this.capitalize(domainName) + "Domain"
    let output = `\n/**\n * ${this.capitalize(domainName)} domain operations\n */\n`
    output += `export class ${className} {\n`
    output += "  constructor(private client: UpworkGraphQLClient) {}\n\n"

    // Group by query/mutation
    const domainQueries = operations.filter((op) => op.type === "query")
    const domainMutations = operations.filter((op) => op.type === "mutation")

    // Generate query methods
    if (domainQueries.length > 0) {
      output += "  // Queries\n"
      for (const op of domainQueries) {
        output += this.generateDomainMethod(op)
      }
    }

    // Generate mutation methods
    if (domainMutations.length > 0) {
      output += "\n  // Mutations\n"
      for (const op of domainMutations) {
        output += this.generateDomainMethod(op)
      }
    }

    output += "}\n"
    return output
  }

  /**
   * Generate a method for a domain class
   */
  private generateDomainMethod(op: Operation): string {
    let output = ""

    // Generate JSDoc
    output += `  /**\n   * ${op.description || op.name}\n`
    if (op.args.length > 0) {
      output += "   * @param variables - Operation variables\n"
    }
    output += `   * @returns ${op.returnType}\n   */\n`

    // Generate method signature with proper parameter handling
    const hasRequiredArgs = op.args.some((a) => a.isRequired)
    const hasAnyArgs = op.args.length > 0

    let methodSignature = ""
    if (!hasAnyArgs) {
      // No parameters at all - make variables optional
      methodSignature = `  async ${op.name}(variables?: Record<string, never>): Promise<${op.returnType}> {\n`
    } else {
      const argsType = `{ ${op.args.map((a) => `${a.name}${a.isRequired ? "" : "?"}: ${a.type}`).join(", ")} }`
      // Only add default value if all arguments are optional
      const defaultValue = hasRequiredArgs ? "" : " = {}"
      methodSignature = `  async ${op.name}(variables: ${argsType}${defaultValue}): Promise<${op.returnType}> {\n`
    }
    output += methodSignature
    output += `    return ${op.type === "query" ? "queries" : "mutations"}.${op.name}(this.client, variables);\n`
    output += "  }\n\n"

    return output
  }

  /**
   * Extract and generate everything
   */
  extractAll(outputDir: string): void {
    console.log("╔══════════════════════════════════════════════════════╗")
    console.log("║   ADVANCED UPWORK API SCHEMA EXTRACTOR              ║")
    console.log("╚══════════════════════════════════════════════════════╝\n")

    // Create output directory
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // Extract data
    this.extractTypes()
    this.extractOperations()

    console.log("\n📝 Generating TypeScript files...\n")

    // Generate types
    const typesCode = this.generateTypes()
    const typesPath = path.join(outputDir, "generated-types.ts")
    fs.writeFileSync(typesPath, typesCode)
    console.log(`✓ Types: ${typesPath} (${this.types.size} types)`)

    // Generate methods
    const methodsCode = this.generateOperationMethods()
    const methodsPath = path.join(outputDir, "generated-operations.ts")
    fs.writeFileSync(methodsPath, methodsCode)
    const queryCount = Array.from(this.operations.values()).filter((o) => o.type === "query").length
    const mutationCount = Array.from(this.operations.values()).filter(
      (o) => o.type === "mutation"
    ).length
    console.log(`✓ Operations: ${methodsPath} (${queryCount} queries, ${mutationCount} mutations)`)

    // Generate domain-grouped client
    const clientCode = this.generateDomainGroupedClient()
    const clientPath = path.join(outputDir, "generated-client.ts")
    fs.writeFileSync(clientPath, clientCode)
    const domains = this.groupOperationsByDomain()
    console.log(`✓ Client: ${clientPath} (${domains.size} domains)`)

    console.log("\n✅ GENERATION COMPLETE!\n")
    console.log("Summary:")
    console.log(`  • ${this.types.size} fully-typed interfaces and enums`)
    console.log(`  • ${this.operations.size} operation methods with type-safe arguments`)
    console.log(`  • ${domains.size} domain-grouped client classes`)
    console.log(`  • All fields, descriptions, and types extracted`)
    console.log("\nYou can now import and use these in your client:\n")
    console.log("  import * as Types from './generated/generated-types';")
    console.log("  import { queries, mutations } from './generated/generated-operations';")
    console.log("  import { GeneratedUpworkClient } from './generated/generated-client';")
  }
}

// CLI usage
if (require.main === module) {
  const htmlFile = process.argv[2] || "../../index.html"
  const outputDir = process.argv[3] || "./src/generated"

  if (!fs.existsSync(htmlFile)) {
    console.error(`❌ Error: HTML file not found: ${htmlFile}`)
    console.log("\nUsage:")
    console.log("  npm install node-html-parser")
    console.log("  npx ts-node scripts/extract-full-schema.ts <html-file> [output-dir]")
    process.exit(1)
  }

  const extractor = new AdvancedHTMLExtractor(htmlFile)
  extractor.extractAll(outputDir)
}

export default AdvancedHTMLExtractor
