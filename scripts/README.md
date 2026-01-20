# Schema Generator

This directory contains tools to automatically generate TypeScript types and client methods from the Upwork GraphQL API schema.

## How It Works

The generator uses GraphQL introspection to fetch the complete schema from Upwork's GraphQL endpoint and generates:

1. **TypeScript Types** - All GraphQL types, interfaces, enums, and unions
2. **Query Methods** - Auto-generated methods for all available queries
3. **Mutation Methods** - Auto-generated methods for all available mutations

## Usage

### Option 1: Generate from Live API (Recommended)

You need a valid Upwork API access token to fetch the schema:

```bash
# Set your access token
export UPWORK_ACCESS_TOKEN=your_token_here

# Generate all types and methods
npm run generate
```

This will:

1. Fetch the schema from `https://api.upwork.com/graphql`
2. Save it to `src/generated/schema.json`
3. Generate TypeScript types in `src/generated/generated-types.ts`
4. Generate query methods in `src/generated/generated-queries.ts`
5. Generate mutation methods in `src/generated/generated-mutations.ts`

### Option 2: Generate from Saved Schema File

If you already have a schema file (from a previous run or exported elsewhere):

```bash
npm run generate:from-file schema.json
```

## Getting an Access Token

To get an access token for schema generation:

1. Create a test application at https://www.upwork.com/ab/account-security/api
2. Use the authorization flow to get a token (see examples/basic-usage.ts)
3. Or use an existing token from your `.env` file

## Generated Files Structure

```
src/generated/
├── schema.json              # Raw GraphQL schema (introspection result)
├── generated-types.ts       # All TypeScript type definitions
├── generated-queries.ts     # Auto-generated query methods
└── generated-mutations.ts   # Auto-generated mutation methods
```

## Example Generated Code

### Types

```typescript
/**
 * Represents a job posting
 */
export interface JobPosting {
  /** Unique identifier */
  id: string
  /** Job title */
  title: string
  /** Job description */
  description?: string
  /** Job status */
  status: JobPostingStatus
  // ... more fields
}

export enum JobPostingStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
  DRAFT = "DRAFT",
}
```

### Query Methods

```typescript
/**
 * Get a job posting by ID
 * @param args - Arguments
 * @param args.id - Job posting ID
 */
async jobPosting(args: { id: string }): Promise<JobPosting> {
  const query = `
    query JobPosting($id: ID!) {
      jobPosting(id: $id) {
        id
        title
        description
        status
        // ... all available fields
      }
    }
  `;

  const result = await this.graphql.query(query, args);
  return result.data;
}
```

## Customization

You can modify the generator script (`generate-schema.ts`) to:

- Change the output directory
- Customize type names
- Add custom methods
- Filter which types/queries to generate
- Add custom documentation

## Integration with Main Client

After generation, you can integrate the generated types and methods into the main client:

```typescript
// In src/index.ts
import { JobPosting, JobPostingStatus } from "./generated/generated-types"

// Use the generated types
const client = new UpworkClient(config)
const job: JobPosting = await client.jobs.getJobPosting("123")
```

## Notes

- The generator requires a valid access token with appropriate scopes
- Generated code should be reviewed before committing
- You may need to manually edit some generated methods to select specific fields
- Run the generator whenever the Upwork API schema changes

## Troubleshooting

### "Schema not loaded" error

Make sure you have a valid access token and network connectivity to Upwork's API.

### TypeScript compilation errors in generated code

Some complex GraphQL types might need manual adjustment. Review and edit the generated files as needed.

### Rate limiting

If you hit rate limits, use a saved schema file instead of fetching from the API repeatedly.

## Future Improvements

- [ ] Automatic field selection optimization
- [ ] Generate query builders
- [ ] Add fragment generation
- [ ] Support for subscriptions
- [ ] Generate mock data for testing
- [ ] Add validation using schema
