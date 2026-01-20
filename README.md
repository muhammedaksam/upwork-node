# Upwork Node.js Client

[![npm version](https://badge.fury.io/js/@muhammedaksam%2Fupwork-node.svg)](https://www.npmjs.com/package/@muhammedaksam/upwork-node)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Modern TypeScript/Node.js client for the Upwork API v2 with OAuth2 and GraphQL support.

> **⚠️ Disclaimer:** This is an unofficial client library. This project is not affiliated with, endorsed by, or supported by Upwork. "Upwork" is a trademark of Upwork Global Inc. Use of the Upwork API through this library is subject to [Upwork's API Terms of Use](https://www.upwork.com/legal#api).

## Features

- ✅ **OAuth2 Authentication** - Full support for all OAuth2 grant types
- ✅ **GraphQL API** - Native GraphQL client with type-safe operations
- ✅ **TypeScript** - Written in TypeScript with full type definitions
- ✅ **Modern & Async** - Built with async/await and Promises
- ✅ **Easy to Use** - High-level API wrappers for common operations
- ✅ **Automatic Token Refresh** - Handles token expiration automatically

## Installation

```bash
# Using pnpm (recommended)
pnpm add @muhammedaksam/upwork-node

# Using npm
npm install @muhammedaksam/upwork-node

# Using yarn
yarn add @muhammedaksam/upwork-node
```

## Prerequisites

Before using this library, you need to:

1. Create an Upwork account
2. Register your application at [Upwork API Settings](https://www.upwork.com/ab/account-security/api)
3. Get your `Client ID` and `Client Secret`
4. Set up a redirect URI for OAuth2 callback

## Quick Start

### 1. Initialize the Client

```typescript
import { UpworkClient } from "@muhammedaksam/upwork-node"

const client = new UpworkClient({
  clientId: "YOUR_CLIENT_ID",
  clientSecret: "YOUR_CLIENT_SECRET",
  redirectUri: "http://localhost:3000/callback",
})
```

### 2. Authenticate Using Authorization Code Flow

```typescript
// Step 1: Generate authorization URL
const authUrl = client.auth.getAuthorizationUrl({
  state: "random-state-string",
  scope: "openid profile",
})

console.log("Visit this URL to authorize:", authUrl)

// Step 2: User authorizes and is redirected to your callback URL
// Extract the 'code' parameter from the callback URL

// Step 3: Exchange code for access token
const tokenResponse = await client.auth.getAccessToken(code)
console.log("Access Token:", tokenResponse.access_token)
```

### 3. Make API Calls

```typescript
// Get current user information
const user = await client.users.getMe()
console.log("User:", user.data)

// Search for jobs
const jobs = await client.jobs.searchJobs({
  query: "Node.js developer",
  limit: 10,
})
console.log("Jobs:", jobs.data)

// Get contracts
const contracts = await client.contracts.getContracts({ limit: 20 })
console.log("Contracts:", contracts.data)
```

## Authentication Methods

### Authorization Code Grant (Recommended for Web Apps)

```typescript
// Generate authorization URL
const authUrl = client.auth.getAuthorizationUrl({
  state: "csrf-protection-string",
})

// After user authorizes, exchange code for token
const tokens = await client.auth.getAccessToken(authorizationCode)
```

### Client Credentials Grant (For Server-to-Server)

```typescript
const tokens = await client.auth.getClientCredentialsToken({
  scope: "your-scopes",
})
```

### Refresh Token Grant

```typescript
// Automatically handled by the library
const newTokens = await client.auth.refreshAccessToken()

// Or manually with a specific refresh token
const newTokens = await client.auth.refreshAccessToken(refreshToken)
```

### Using Existing Tokens

```typescript
// If you already have tokens stored
client.auth.setAccessToken(
  "your_access_token",
  "your_refresh_token",
  3600 // expires_in seconds
)
```

## API Reference

### Jobs API

```typescript
// Get a specific job posting
const job = await client.jobs.getJobPosting("job-id")

// Search for jobs
const jobs = await client.jobs.searchJobs({
  query: "Python developer",
  limit: 20,
  offset: 0,
})

// Create a job posting
const newJob = await client.jobs.createJobPosting({
  title: "Looking for Node.js Developer",
  description: "We need an experienced developer...",
  // ... other fields
})

// Update a job posting
const updated = await client.jobs.updateJobPosting("job-id", {
  title: "Updated Title",
})
```

### Users & Profiles API

```typescript
// Get current user
const user = await client.users.getMe()

// Get organization
const org = await client.users.getOrganization("org-id")

// Get freelancer profile
const profile = await client.users.getFreelancerProfile("profile-key")
```

### Contracts & Offers API

```typescript
// Get contract details
const contract = await client.contracts.getContract("contract-id")

// List contracts
const contracts = await client.contracts.getContracts({
  limit: 10,
  offset: 0,
})

// End a contract (freelancer)
const result = await client.contracts.endContract("contract-id", "Project completed")

// Create an offer
const offer = await client.contracts.createOffer({
  // offer details
})
```

### Proposals API

```typescript
// Get freelancer proposals
const proposals = await client.proposals.getProposals({ limit: 20 })

// Get client proposals
const clientProposals = await client.proposals.getClientProposals()
```

### Metadata API

```typescript
// Get countries
const countries = await client.metadata.getCountries()

// Get time zones
const timeZones = await client.metadata.getTimeZones()

// Search skills
const skills = await client.metadata.getSkills({
  query: "javascript",
  limit: 10,
})
```

### Search API

```typescript
// Search freelancers
const freelancers = await client.search.searchFreelancers({
  query: "React developer",
  limit: 20,
})
```

## Custom GraphQL Queries

You can execute custom GraphQL queries directly:

```typescript
const query = `
  query GetCustomData($id: ID!) {
    jobPosting(id: $id) {
      id
      title
      description
      createdDateTime
    }
  }
`

const result = await client.graphql.query(query, { id: "job-id" })
console.log(result.data)
```

### Custom Mutations

```typescript
const mutation = `
  mutation UpdateJobPosting($id: ID!, $input: JobPostingUpdateRequest!) {
    updateJobPosting(id: $id, input: $input) {
      jobPosting {
        id
        title
      }
    }
  }
`

const result = await client.graphql.mutate(mutation, {
  id: "job-id",
  input: { title: "New Title" },
})
```

## Organization ID (Enterprise Features)

For enterprise features, you can set the organization ID:

```typescript
// Set during client initialization
const client = new UpworkClient(
  {
    clientId: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
  },
  {
    organizationId: "your-org-id",
  }
)

// Or set it later
client.graphql.setOrganizationId("your-org-id")

// Or override per request
await client.graphql.query(query, variables, {
  organizationId: "specific-org-id",
})
```

## Error Handling

```typescript
try {
  const result = await client.jobs.searchJobs({ query: "developer" })
  console.log(result.data)
} catch (error) {
  if (error.graphqlErrors) {
    // GraphQL errors
    console.error("GraphQL Errors:", error.graphqlErrors)
  } else if (error.status) {
    // HTTP errors
    console.error(`HTTP Error ${error.status}:`, error.message)
  } else {
    // Other errors
    console.error("Error:", error.message)
  }
}
```

## TypeScript Support

This library is written in TypeScript and includes full type definitions:

```typescript
import {
  AuthConfig,
  GraphQLResponse,
  TokenResponse,
  UpworkAuth,
  UpworkClient,
  UpworkGraphQLClient,
} from "@muhammedaksam/upwork-node"
```

## Examples

Check out the `examples` directory for complete working examples:

- `examples/basic-usage.ts` - Complete Express.js OAuth2 flow
- `examples/generated-client-usage.ts` - Using auto-generated types

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your credentials
# Then run the example
npm run example
```

## Code Generation

This library includes tools to automatically generate TypeScript types and methods from the Upwork GraphQL schema.

### Auto-Generate Full Type Support

You have two options to generate complete type definitions and API methods:

#### Option 1: From Live API (Requires Access Token)

```bash
# Set your access token
export UPWORK_ACCESS_TOKEN=your_token

# Generate complete types and methods
npm run generate
```

This will create:

- `src/generated/schema.json` - Full GraphQL schema
- `src/generated/generated-types.ts` - All TypeScript types (642+ types)
- `src/generated/generated-queries.ts` - All query methods (75+ queries)
- `src/generated/generated-mutations.ts` - All mutation methods (52+ mutations)

#### Option 2: Extract from Documentation HTML

```bash
# Extract operation names and type names from docs
npm run extract:html
```

This generates a scaffold with:

- `src/generated/OPERATIONS.md` - Complete list of all 127 operations
- `src/generated/extracted-methods.ts` - Method scaffolds for all operations
- `src/generated/extracted-types.ts` - Type name scaffolds for all 642 types

### Currently Supported Operations

The library manually implements the most commonly used operations. After running code generation, you'll have access to **ALL** 127 operations including:

**Queries (75)**: jobPosting, marketplaceJobPostings, contract, user, freelancerProfile, proposals, timeReport, and 68 more...

**Mutations (52)**: createJobPosting, updateJobPosting, createOffer, endContract, createMilestone, and 47 more...

See `src/generated/OPERATIONS.md` for the complete list after extraction.

## API Documentation

For detailed information about the Upwork API and available scopes, visit:

- [Upwork API Documentation](https://developers.upwork.com/)
- [GraphQL API Reference](https://www.upwork.com/developer/documentation/graphql/api/docs/index.html)
- [OAuth2 Scopes Reference](SCOPES.md) - Complete list of all available scopes

## Development

### Prerequisites

- Node.js >= 14.0.0
- pnpm >= 8.0.0 (recommended) or npm/yarn

### Setup

```bash
# Install dependencies
pnpm install

# Run type checking
pnpm run typecheck

# Run linting
pnpm run lint

# Fix linting issues
pnpm run lint:fix

# Format code
pnpm run format

# Check formatting
pnpm run format:check

# Run all checks
pnpm run check
```

### Build

```bash
pnpm run build
```

### Watch Mode

```bash
pnpm run build:watch
```

### Run Tests

```bash
pnpm test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This library is released under the MIT License - see the [LICENSE](LICENSE) file for details.

**Important:** This is a client library wrapper. Your use of the Upwork API itself is governed by Upwork's API Terms of Use. By using this library to access the Upwork API, you agree to comply with:

- [Upwork API Terms of Use](https://www.upwork.com/legal#api)
- [Upwork Terms of Service](https://www.upwork.com/legal)

The MIT license applies to this client library code only, not to the Upwork API or its data.

## Author

**Muhammed Mustafa AKŞAM**

- GitHub: [@muhammedaksam](https://github.com/muhammedaksam)
- Email: info@muhammedaksam.com.tr

## Changelog

### Version 0.1.0 (January 2024)

- Initial release
- Complete TypeScript implementation
- OAuth2 support (replacing deprecated OAuth1)
- GraphQL API support
- Modern async/await API
- Automatic token refresh
- Comprehensive error handling
- Full type definitions with 642+ types
- Support for all 127 API operations (75 queries + 52 mutations)
- Auto-generation tools for types and methods
- ESLint and Prettier configuration
- GitHub Actions CI/CD pipeline

For detailed changes and migration guide from OAuth1 libraries, see [CHANGELOG.md](CHANGELOG.md)

## Support

If you have any questions or need help:

- Open an issue on [GitHub](https://github.com/muhammedaksam/upwork-node/issues)
- Check the [Upwork API Documentation](https://developers.upwork.com/)
- Review the [Quick Start Guide](QUICKSTART.md)
- See [OAuth2 Scopes Reference](SCOPES.md) for permission details

## Acknowledgments

This library is a modern TypeScript implementation for the Upwork API v2, built to support OAuth2 and GraphQL. It's designed as a complete solution for developers who need to integrate with Upwork's platform.
