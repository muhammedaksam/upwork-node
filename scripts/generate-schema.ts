/**
 * GraphQL Schema Generator for Upwork API
 *
 * This script generates TypeScript types and client methods from the Upwork GraphQL schema.
 * It can introspect the GraphQL endpoint to get the complete schema.
 */

import * as fs from "fs"
import * as path from "path"

import axios from "axios"

interface GeneratorConfig {
  accessToken: string
  outputDir: string
  apiUrl?: string
}

class UpworkSchemaGenerator {
  private config: GeneratorConfig
  private schema: any

  constructor(config: GeneratorConfig) {
    this.config = {
      ...config,
      apiUrl: config.apiUrl || "https://api.upwork.com/graphql",
    }
  }

  /**
   * Fetch GraphQL schema using introspection query
   */
  async fetchSchema(): Promise<void> {
    const introspectionQuery = `
      query IntrospectionQuery {
        __schema {
          queryType { name }
          mutationType { name }
          subscriptionType { name }
          types {
            ...FullType
          }
          directives {
            name
            description
            locations
            args {
              ...InputValue
            }
          }
        }
      }

      fragment FullType on __Type {
        kind
        name
        description
        fields(includeDeprecated: true) {
          name
          description
          args {
            ...InputValue
          }
          type {
            ...TypeRef
          }
          isDeprecated
          deprecationReason
        }
        inputFields {
          ...InputValue
        }
        interfaces {
          ...TypeRef
        }
        enumValues(includeDeprecated: true) {
          name
          description
          isDeprecated
          deprecationReason
        }
        possibleTypes {
          ...TypeRef
        }
      }

      fragment InputValue on __InputValue {
        name
        description
        type { ...TypeRef }
        defaultValue
      }

      fragment TypeRef on __Type {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `

    try {
      const response = await axios.post(
        this.config.apiUrl || "https://api.upwork.com/graphql",
        { query: introspectionQuery },
        {
          headers: {
            Authorization: `Bearer ${this.config.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      )

      this.schema = response.data.data.__schema
      console.log("✓ Schema fetched successfully")

      // Save schema to file
      const schemaPath = path.join(this.config.outputDir, "schema.json")
      fs.writeFileSync(schemaPath, JSON.stringify(this.schema, null, 2))
      console.log(`✓ Schema saved to ${schemaPath}`)
    } catch (error: any) {
      throw new Error(`Failed to fetch schema: ${error.message}`)
    }
  }

  /**
   * Load schema from file
   */
  loadSchemaFromFile(filePath: string): void {
    const schemaData = fs.readFileSync(filePath, "utf-8")
    const parsed = JSON.parse(schemaData)
    this.schema = parsed.__schema || parsed
    console.log("✓ Schema loaded from file")
  }

  /**
   * Generate TypeScript types from schema
   */
  generateTypes(): string {
    if (!this.schema) {
      throw new Error("Schema not loaded")
    }

    let output =
      "/**\n * Auto-generated TypeScript types for Upwork GraphQL API\n * Generated on: " +
      new Date().toISOString() +
      "\n */\n\n"

    // Generate types for each type in schema
    const types = this.schema.types.filter(
      (type: any) =>
        !type.name.startsWith("__") && // Skip introspection types
        type.kind !== "SCALAR" // Skip scalar types (they're built-in)
    )

    for (const type of types) {
      if (type.kind === "OBJECT" || type.kind === "INTERFACE") {
        output += this.generateObjectType(type)
      } else if (type.kind === "INPUT_OBJECT") {
        output += this.generateInputType(type)
      } else if (type.kind === "ENUM") {
        output += this.generateEnumType(type)
      } else if (type.kind === "UNION") {
        output += this.generateUnionType(type)
      }
    }

    return output
  }

  private generateObjectType(type: any): string {
    let output = ""

    if (type.description) {
      output += `/**\n * ${type.description}\n */\n`
    }

    output += `export interface ${type.name} {\n`

    if (type.fields) {
      for (const field of type.fields) {
        if (field.description) {
          output += `  /** ${field.description} */\n`
        }
        if (field.isDeprecated) {
          output += `  /** @deprecated ${field.deprecationReason || "Deprecated"} */\n`
        }
        const fieldType = this.getTypeString(field.type)
        const optional = this.isOptionalField(field.type) ? "?" : ""
        output += `  ${field.name}${optional}: ${fieldType};\n`
      }
    }

    output += "}\n\n"
    return output
  }

  private generateInputType(type: any): string {
    let output = ""

    if (type.description) {
      output += `/**\n * ${type.description}\n */\n`
    }

    output += `export interface ${type.name} {\n`

    if (type.inputFields) {
      for (const field of type.inputFields) {
        if (field.description) {
          output += `  /** ${field.description} */\n`
        }
        const fieldType = this.getTypeString(field.type)
        const optional = this.isOptionalField(field.type) ? "?" : ""
        output += `  ${field.name}${optional}: ${fieldType};\n`
      }
    }

    output += "}\n\n"
    return output
  }

  private generateEnumType(type: any): string {
    let output = ""

    if (type.description) {
      output += `/**\n * ${type.description}\n */\n`
    }

    output += `export enum ${type.name} {\n`

    if (type.enumValues) {
      for (const value of type.enumValues) {
        if (value.description) {
          output += `  /** ${value.description} */\n`
        }
        if (value.isDeprecated) {
          output += `  /** @deprecated ${value.deprecationReason || "Deprecated"} */\n`
        }
        output += `  ${value.name} = '${value.name}',\n`
      }
    }

    output += "}\n\n"
    return output
  }

  private generateUnionType(type: any): string {
    let output = ""

    if (type.description) {
      output += `/**\n * ${type.description}\n */\n`
    }

    const types = type.possibleTypes?.map((t: any) => t.name).join(" | ") || "any"
    output += `export type ${type.name} = ${types};\n\n`

    return output
  }

  private getTypeString(type: any): string {
    if (type.kind === "NON_NULL") {
      return this.getTypeString(type.ofType)
    } else if (type.kind === "LIST") {
      return `Array<${this.getTypeString(type.ofType)}>`
    } else if (type.kind === "SCALAR") {
      return this.mapScalarType(type.name)
    } else {
      return type.name
    }
  }

  private isOptionalField(type: any): boolean {
    return type.kind !== "NON_NULL"
  }

  private mapScalarType(scalarName: string): string {
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

    return scalarMap[scalarName] || "any"
  }

  /**
   * Generate client methods for queries
   */
  generateQueryMethods(): string {
    const queryType = this.schema.types.find((t: any) => t.name === "Query")

    if (!queryType || !queryType.fields) {
      return ""
    }

    let output = "/**\n * Auto-generated query methods\n */\n\n"

    for (const field of queryType.fields) {
      output += this.generateMethodForField(field, "query")
    }

    return output
  }

  /**
   * Generate client methods for mutations
   */
  generateMutationMethods(): string {
    const mutationType = this.schema.types.find((t: any) => t.name === "Mutation")

    if (!mutationType || !mutationType.fields) {
      return ""
    }

    let output = "/**\n * Auto-generated mutation methods\n */\n\n"

    for (const field of mutationType.fields) {
      output += this.generateMethodForField(field, "mutation")
    }

    return output
  }

  private generateMethodForField(field: any, operationType: "query" | "mutation"): string {
    let output = ""

    if (field.description) {
      output += `/**\n * ${field.description}\n`
      if (field.args && field.args.length > 0) {
        output += " * @param args - Arguments\n"
        for (const arg of field.args) {
          output += ` * @param args.${arg.name} - ${arg.description || ""}\n`
        }
      }
      output += " */\n"
    }

    if (field.isDeprecated) {
      output += `/** @deprecated ${field.deprecationReason || "Deprecated"} */\n`
    }

    const methodName = field.name
    const hasArgs = field.args && field.args.length > 0
    const argsParam = hasArgs ? "args: any" : ""
    const returnType = this.getTypeString(field.type)

    output += `async ${methodName}(${argsParam}): Promise<${returnType}> {\n`
    output += `  const ${operationType} = \`\n`
    output += `    ${operationType} ${this.capitalize(methodName)}`

    if (hasArgs) {
      const argsList = field.args
        .map((arg: any) => `$${arg.name}: ${this.getGraphQLTypeString(arg.type)}`)
        .join(", ")
      output += `(${argsList})`
    }

    output += ` {\n`
    output += `      ${field.name}`

    if (hasArgs) {
      const argsString = field.args.map((arg: any) => `${arg.name}: $${arg.name}`).join(", ")
      output += `(${argsString})`
    }

    output += " {\n"
    output += "        # Add fields here based on return type\n"
    output += "      }\n"
    output += "    }\n"
    output += "  \`;\n\n"
    output += `  const result = await this.graphql.${operationType}(${operationType}`
    if (hasArgs) {
      output += ", args"
    }
    output += ");\n"
    output += "  return result.data;\n"
    output += "}\n\n"

    return output
  }

  private getGraphQLTypeString(type: any): string {
    if (type.kind === "NON_NULL") {
      return `${this.getGraphQLTypeString(type.ofType)}!`
    } else if (type.kind === "LIST") {
      return `[${this.getGraphQLTypeString(type.ofType)}]`
    } else {
      return type.name
    }
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  /**
   * Generate all files
   */
  async generate(): Promise<void> {
    console.log("Starting code generation...\n")

    // Generate types
    console.log("Generating TypeScript types...")
    const types = this.generateTypes()
    const typesPath = path.join(this.config.outputDir, "generated-types.ts")
    fs.writeFileSync(typesPath, types)
    console.log(`✓ Types saved to ${typesPath}\n`)

    // Generate query methods
    console.log("Generating query methods...")
    const queries = this.generateQueryMethods()
    const queriesPath = path.join(this.config.outputDir, "generated-queries.ts")
    fs.writeFileSync(queriesPath, queries)
    console.log(`✓ Query methods saved to ${queriesPath}\n`)

    // Generate mutation methods
    console.log("Generating mutation methods...")
    const mutations = this.generateMutationMethods()
    const mutationsPath = path.join(this.config.outputDir, "generated-mutations.ts")
    fs.writeFileSync(mutationsPath, mutations)
    console.log(`✓ Mutation methods saved to ${mutationsPath}\n`)

    console.log("✓ Code generation complete!")
  }
}

// CLI usage
if (require.main === module) {
  const accessToken = process.env.UPWORK_ACCESS_TOKEN
  const outputDir = process.argv[2] || "./src/generated"

  if (!accessToken) {
    console.error("Error: UPWORK_ACCESS_TOKEN environment variable is required")
    console.log("\nUsage:")
    console.log("  UPWORK_ACCESS_TOKEN=your_token ts-node scripts/generate-schema.ts [output_dir]")
    console.log("\nOr to use an existing schema file:")
    console.log("  ts-node scripts/generate-schema.ts [output_dir] --from-file schema.json")
    process.exit(1)
  }

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  const generator = new UpworkSchemaGenerator({
    accessToken,
    outputDir,
  })

  const fromFileArg = process.argv.indexOf("--from-file")

  ;(async () => {
    try {
      if (fromFileArg !== -1 && process.argv[fromFileArg + 1]) {
        // Load from file
        generator.loadSchemaFromFile(process.argv[fromFileArg + 1])
      } else {
        // Fetch from API
        await generator.fetchSchema()
      }

      await generator.generate()
    } catch (error: any) {
      console.error("Error:", error.message)
      process.exit(1)
    }
  })()
}

export default UpworkSchemaGenerator
