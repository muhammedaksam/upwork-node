# Quick Start Guide

## Getting Started with @muhammedaksam/upwork-node

Get up and running with the Upwork Node.js client in 5 minutes.

## Step 1: Install

```bash
npm install @muhammedaksam/upwork-node
```

## Step 2: Get API Credentials

1. Sign in to your Upwork account
2. Visit [Upwork API Settings](https://www.upwork.com/ab/account-security/api)
3. Click "Create a new app" or "Get API Keys"
4. Fill in your application details:
   - **Application Name**: Your app name
   - **Redirect URI**: `http://localhost:3000/callback` (for testing)
   - **Description**: Brief description of your app
5. Save and note your **Client ID** and **Client Secret**

## Step 3: Basic Setup

Create a file `app.ts`:

```typescript
import { UpworkClient } from "@muhammedaksam/upwork-node"

const client = new UpworkClient({
  clientId: "YOUR_CLIENT_ID",
  clientSecret: "YOUR_CLIENT_SECRET",
  redirectUri: "http://localhost:3000/callback",
})
```

## Step 4: Authenticate

### Option A: Authorization Code Flow (Web Apps)

```typescript
// 1. Get authorization URL
const authUrl = client.auth.getAuthorizationUrl({
  state: "random-csrf-token",
})

console.log("Visit:", authUrl)

// 2. User authorizes and is redirected back with a code
// 3. Exchange code for token
const tokens = await client.auth.getAccessToken(code)
console.log("Access Token:", tokens.access_token)
```

### Option B: Use Existing Token

```typescript
// If you already have a token (e.g., from previous authentication)
client.auth.setAccessToken(
  "your_access_token",
  "your_refresh_token", // optional
  3600 // expires_in seconds (optional)
)
```

## Step 5: Make Your First API Call

```typescript
// Get current user
const user = await client.users.getMe()
console.log("Hello,", user.data.user.firstName)

// Search for jobs
const jobs = await client.jobs.searchJobs({
  query: "Node.js",
  limit: 5,
})

console.log("Found jobs:", jobs.data.marketplaceJobPostingsSearch.totalCount)
```

## Complete Example with Express.js

```typescript
import { UpworkClient } from "@muhammedaksam/upwork-node"
import express from "express"

const app = express()
const client = new UpworkClient({
  clientId: process.env.UPWORK_CLIENT_ID!,
  clientSecret: process.env.UPWORK_CLIENT_SECRET!,
  redirectUri: "http://localhost:3000/callback",
})

// Step 1: Redirect to Upwork for authorization
app.get("/auth", (req, res) => {
  const authUrl = client.auth.getAuthorizationUrl({
    state: "random-state",
  })
  res.redirect(authUrl)
})

// Step 2: Handle callback
app.get("/callback", async (req, res) => {
  const code = req.query.code as string

  try {
    const tokens = await client.auth.getAccessToken(code)

    // Store tokens securely (e.g., in session or database)
    req.session.accessToken = tokens.access_token
    req.session.refreshToken = tokens.refresh_token

    res.redirect("/dashboard")
  } catch (error) {
    res.status(500).send("Authentication failed")
  }
})

// Step 3: Use the API
app.get("/dashboard", async (req, res) => {
  client.auth.setAccessToken(req.session.accessToken)

  try {
    const user = await client.users.getMe()
    res.json({ user: user.data })
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" })
  }
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
  console.log("Visit http://localhost:3000/auth to start")
})
```

## Common Operations

### Search Jobs

```typescript
const jobs = await client.jobs.searchJobs({
  query: "Python developer",
  limit: 10,
})
```

### Get Contracts

```typescript
const contracts = await client.contracts.getContracts({ limit: 20 })
```

### Search Freelancers

```typescript
const freelancers = await client.search.searchFreelancers({
  query: "React developer",
  limit: 10,
})
```

### Get Proposals

```typescript
const proposals = await client.proposals.getProposals({ limit: 10 })
```

### Custom GraphQL Query

```typescript
const result = await client.graphql.query(`
  query {
    user {
      id
      firstName
      lastName
    }
  }
`)
```

## Environment Variables

Create a `.env` file:

```env
UPWORK_CLIENT_ID=your_client_id
UPWORK_CLIENT_SECRET=your_client_secret
UPWORK_REDIRECT_URI=http://localhost:3000/callback
```

Load it with:

```typescript
import * as dotenv from "dotenv"

dotenv.config()
```

## Error Handling

```typescript
try {
  const result = await client.jobs.searchJobs({ query: "developer" })
  console.log(result.data)
} catch (error) {
  if (error.graphqlErrors) {
    console.error("GraphQL Errors:", error.graphqlErrors)
  } else if (error.status) {
    console.error(`HTTP ${error.status}:`, error.message)
  } else {
    console.error("Error:", error.message)
  }
}
```

## Next Steps

- Read the full [README.md](./README.md) for detailed API documentation
- Check out [OAuth2 Scopes Reference](./SCOPES.md) for permission details
- Explore the [examples directory](./examples/) for more use cases
- Review [Upwork API Documentation](https://developers.upwork.com/)
- Check the [CHANGELOG.md](./CHANGELOG.md) for migration from v1.x

## Support

- GitHub Issues: [Report issues](https://github.com/muhammedaksam/upwork-node/issues)
- Documentation: [Full API Reference](./README.md)
- Scopes: [OAuth2 Permissions Guide](./SCOPES.md)
- Upwork: [Official API Docs](https://developers.upwork.com/)

## Important Notes

1. **Rate Limits**: Upwork API has rate limits. Monitor response headers for limit information.
2. **Token Storage**: Store tokens securely in environment variables or encrypted storage. Never commit them to version control.
3. **Scopes**: Request only the scopes your application needs. See [SCOPES.md](./SCOPES.md) for details.
4. **Terms of Use**: Comply with [Upwork's API Terms](https://www.upwork.com/legal#api).
5. **Token Refresh**: The library handles token refresh automatically when using refresh tokens.

Happy coding! 🚀
