# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2024-01-20

### Added

- Initial release of `@muhammedaksam/upwork-node`
- Complete TypeScript implementation with full type definitions (642+ types)
- OAuth2 authentication support (Authorization Code, Client Credentials, Refresh Token, Implicit Grant)
- Native GraphQL API client with automatic token management
- Support for all 127 Upwork API operations (75 queries + 52 mutations)
- High-level API wrappers for common operations:
  - Jobs API (search, create, update, get)
  - Users & Profiles API (getMe, getOrganization, getFreelancerProfile)
  - Contracts & Offers API (get, list, create, end)
  - Proposals API (list for freelancers and clients)
  - Metadata API (countries, timezones, skills)
  - Search API (freelancers)
- Automatic token refresh functionality
- Organization ID support for enterprise features
- Comprehensive error handling with GraphQL and HTTP errors
- Code generation tools for extracting types and methods from:
  - Live GraphQL API introspection
  - Upwork API documentation HTML
- Complete documentation:
  - README.md with full API reference
  - QUICKSTART.md with Express.js integration example
  - SCOPES.md with OAuth2 permissions guide
  - PROJECT_SUMMARY.md with architecture overview
- Working examples in `examples/` directory
- MIT License with Upwork API Terms compliance

---

## Migration Guide: OAuth1 to OAuth2

If you're migrating from an older OAuth1-based library, here's what you need to know:

### Authentication

**OAuth1 (Old Approach):**

```javascript
const UpworkApi = require("upwork-api")
const config = {
  consumerKey: "key",
  consumerSecret: "secret",
  accessToken: "token",
  accessSecret: "secret",
}
```

**OAuth2 (This Library):**

```typescript
import { UpworkClient } from "@muhammedaksam/upwork-node"

const client = new UpworkClient({
  clientId: "your_client_id",
  clientSecret: "your_client_secret",
  redirectUri: "http://localhost:3000/callback",
})

// Get authorization URL
const authUrl = client.auth.getAuthorizationUrl()

// Exchange code for token
const tokens = await client.auth.getAccessToken(code)
```

### API Calls

**REST API (Old Approach):**

```javascript
const api = new UpworkApi(config)
const jobs = new api.routers.jobs.search(api)
jobs.find(params, callback)
```

**GraphQL (This Library - High-level):**

```typescript
const jobs = await client.jobs.searchJobs({
  query: "Node.js developer",
  limit: 10,
})

// Or use custom GraphQL queries
const result = await client.graphql.query(
  `
  query SearchJobs($query: String!, $limit: Int) {
    marketplaceJobPostingsSearch(searchParams: { q: $query, pagination: { limit: $limit } }) {
      totalCount
      edges {
        node {
          id
          title
          description
        }
      }
    }
  }
`,
  { query: "Node.js developer", limit: 10 }
)
```

### Key Differences

1. **Authentication**: OAuth1 → OAuth2
2. **API Type**: REST → GraphQL
3. **Style**: Callbacks → Async/Await
4. **Language**: JavaScript → TypeScript
5. **Token Management**: Manual → Automatic refresh
