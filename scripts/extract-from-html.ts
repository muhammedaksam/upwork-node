/**
 * HTML Schema Extractor for Upwork API Documentation
 *
 * This script extracts GraphQL schema information from the Upwork API documentation HTML
 * and generates TypeScript types.
 */

import * as fs from "fs"
import * as path from "path"

interface ExtractedType {
  name: string
  kind: "type" | "enum" | "input" | "interface"
  description?: string
  fields?: Array<{ name: string; type: string; description?: string }>
  values?: Array<{ name: string; description?: string }>
}

interface ExtractedOperation {
  name: string
  type: "query" | "mutation"
  description?: string
  args?: Array<{ name: string; type: string; description?: string }>
  returnType?: string
}

class HTMLSchemaExtractor {
  private htmlContent: string
  private types: Map<string, ExtractedType> = new Map()
  private operations: ExtractedOperation[] = []

  constructor(htmlFilePath: string) {
    this.htmlContent = fs.readFileSync(htmlFilePath, "utf-8")
  }

  /**
   * Extract query and mutation names from the navigation
   */
  extractOperations(): void {
    console.log("Extracting operations from HTML...")

    // Extract query names
    const queryMatches = this.htmlContent.matchAll(
      /<li class="list-item"><a href="#query-([^"]+)">([^<]+)<\/a><\/li>/g
    )

    for (const match of queryMatches) {
      const operationName = match[1]
      const displayName = match[2]
      this.operations.push({
        name: operationName,
        type: "query",
        description: displayName,
      })
    }

    // Extract mutation names
    const mutationMatches = this.htmlContent.matchAll(
      /<li class="list-item"><a href="#mutation-([^"]+)">([^<]+)<\/a><\/li>/g
    )

    for (const match of mutationMatches) {
      const operationName = match[1]
      const displayName = match[2]
      this.operations.push({
        name: operationName,
        type: "mutation",
        description: displayName,
      })
    }

    console.log(`✓ Found ${this.operations.filter((o) => o.type === "query").length} queries`)
    console.log(`✓ Found ${this.operations.filter((o) => o.type === "mutation").length} mutations`)
  }

  /**
   * Extract type names from the navigation
   */
  extractTypeNames(): void {
    console.log("Extracting type names from HTML...")

    const typeMatches = this.htmlContent.matchAll(
      /<li class="list-item"><a href="#definition-([^"]+)">([^<]+)<\/a><\/li>/g
    )

    for (const match of typeMatches) {
      const typeName = match[1]
      const displayName = match[2]

      // Infer type kind from naming conventions
      let kind: "type" | "enum" | "input" | "interface" = "type"
      if (typeName.endsWith("Input") || typeName.endsWith("Request")) {
        kind = "input"
      } else if (displayName.match(/^[A-Z_]+$/)) {
        kind = "enum"
      }

      this.types.set(typeName, {
        name: typeName,
        kind,
        description: displayName,
        fields: [],
      })
    }

    console.log(`✓ Found ${this.types.size} types`)
  }

  /**
   * Generate TypeScript code for extracted operations
   */
  generateOperationMethods(): string {
    let output = "/**\n * Auto-generated API methods from Upwork documentation\n"
    output += " * Generated on: " + new Date().toISOString() + "\n */\n\n"
    output += "import { UpworkGraphQLClient } from './graphql-client';\n\n"

    // Group by operation type
    const queries = this.operations.filter((o) => o.type === "query")
    const mutations = this.operations.filter((o) => o.type === "mutation")

    // Generate query methods
    output += "// Query Methods\n"
    output += "export const queryMethods = {\n"
    for (const op of queries) {
      output += this.generateMethod(op)
    }
    output += "};\n\n"

    // Generate mutation methods
    output += "// Mutation Methods\n"
    output += "export const mutationMethods = {\n"
    for (const op of mutations) {
      output += this.generateMethod(op)
    }
    output += "};\n"

    return output
  }

  private generateMethod(op: ExtractedOperation): string {
    let output = ""

    if (op.description) {
      output += `  /**\n   * ${op.description}\n   */\n`
    }

    const methodName = op.name
    const graphqlMethod = op.type === "mutation" ? "mutate" : "query"
    output += `  ${methodName}: async (client: UpworkGraphQLClient, variables: Record<string, any> = {}) => {\n`
    output += `    const ${op.type} = \`\n`
    output += `      ${op.type} ${this.capitalize(methodName)} {\n`
    output += `        ${methodName} {\n`
    output += `          # TODO: Add fields\n`
    output += `        }\n`
    output += `      }\n`
    output += `    \`;\n`
    output += `    return client.${graphqlMethod}(${op.type}, variables);\n`
    output += `  },\n\n`

    return output
  }

  /**
   * Generate TypeScript type definitions
   */
  generateTypes(): string {
    let output = "/**\n * Auto-generated TypeScript types from Upwork documentation\n"
    output += " * Generated on: " + new Date().toISOString() + "\n */\n\n"

    for (const [name, type] of this.types) {
      if (type.kind === "enum") {
        output += `export enum ${name} {\n`
        output += `  // TODO: Add enum values\n`
        output += `}\n\n`
      } else {
        output += `export interface ${name} {\n`
        output += `  // TODO: Add fields\n`
        output += `}\n\n`
      }
    }

    return output
  }

  /**
   * Generate list of all available operations
   */
  generateOperationsList(): string {
    let output = "# Upwork API Operations\n\n"
    output += "Auto-extracted from documentation\n\n"

    output += "## Queries (" + this.operations.filter((o) => o.type === "query").length + ")\n\n"
    for (const op of this.operations.filter((o) => o.type === "query")) {
      output += `- \`${op.name}\` - ${op.description}\n`
    }

    output +=
      "\n## Mutations (" + this.operations.filter((o) => o.type === "mutation").length + ")\n\n"
    for (const op of this.operations.filter((o) => o.type === "mutation")) {
      output += `- \`${op.name}\` - ${op.description}\n`
    }

    output += "\n## Types (" + this.types.size + ")\n\n"
    for (const [name, type] of this.types) {
      output += `- \`${name}\` (${type.kind})\n`
    }

    return output
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  /**
   * Extract and generate all
   */
  extractAll(outputDir: string): void {
    console.log("Starting HTML extraction...\n")

    // Create output directory
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // Extract data
    this.extractOperations()
    this.extractTypeNames()

    // Generate files
    console.log("\nGenerating files...")

    const methodsCode = this.generateOperationMethods()
    fs.writeFileSync(path.join(outputDir, "extracted-methods.ts"), methodsCode)
    console.log("✓ Methods saved to extracted-methods.ts")

    const typesCode = this.generateTypes()
    fs.writeFileSync(path.join(outputDir, "extracted-types.ts"), typesCode)
    console.log("✓ Types saved to extracted-types.ts")

    const operationsList = this.generateOperationsList()
    fs.writeFileSync(path.join(outputDir, "OPERATIONS.md"), operationsList)
    console.log("✓ Operations list saved to OPERATIONS.md")

    console.log("\n✓ HTML extraction complete!")
    console.log("\nNote: Generated code contains placeholders. You will need to:")
    console.log("1. Add proper type definitions for each type")
    console.log("2. Add GraphQL field selections for each operation")
    console.log("3. Add proper argument types")
    console.log(
      "\nFor complete type generation, use the schema introspection method with a valid access token."
    )
  }
}

// CLI usage
if (require.main === module) {
  const htmlFile = process.argv[2] || "../../index.html"
  const outputDir = process.argv[3] || "./src/generated"

  if (!fs.existsSync(htmlFile)) {
    console.error(`Error: HTML file not found: ${htmlFile}`)
    console.log("\nUsage:")
    console.log("  ts-node scripts/extract-from-html.ts <html-file> [output-dir]")
    process.exit(1)
  }

  const extractor = new HTMLSchemaExtractor(htmlFile)
  extractor.extractAll(outputDir)
}

export default HTMLSchemaExtractor
