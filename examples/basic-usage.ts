/**
 * Basic Usage Example for Upwork Node.js Client
 *
 * This example demonstrates how to authenticate and make API calls
 */

import * as dotenv from "dotenv"

import { UpworkClient } from "../src"

// Load environment variables
dotenv.config()

async function main() {
  // Initialize the client with your credentials
  const client = new UpworkClient({
    clientId: process.env.UPWORK_CLIENT_ID!,
    clientSecret: process.env.UPWORK_CLIENT_SECRET!,
    redirectUri: process.env.UPWORK_REDIRECT_URI || "http://localhost:3000/callback",
  })

  console.log("Upwork API Client Example\n")

  // Example 1: Authorization Code Flow
  console.log("=== Authorization Code Flow ===")
  const authUrl = client.auth.getAuthorizationUrl({
    state: "random-state-string",
    scope: "openid profile",
  })
  console.log("1. Visit this URL to authorize:")
  console.log(authUrl)
  console.log(
    "\n2. After authorization, you will be redirected to your callback URL with a code parameter"
  )
  console.log("3. Exchange the code for an access token:\n")

  // After getting the code from callback, exchange it for a token
  // const code = 'AUTHORIZATION_CODE_FROM_CALLBACK';
  // const tokenResponse = await client.auth.getAccessToken(code);
  // console.log('Token Response:', tokenResponse);

  // Example 2: Using an existing access token
  console.log("\n=== Using Existing Access Token ===")
  if (process.env.UPWORK_ACCESS_TOKEN) {
    client.auth.setAccessToken(process.env.UPWORK_ACCESS_TOKEN, process.env.UPWORK_REFRESH_TOKEN)
    console.log("✓ Access token set")

    try {
      // Get current user info
      console.log("\n--- Getting Current User ---")
      const userResult = await client.users.getMe()
      console.log("User:", JSON.stringify(userResult.data, null, 2))

      // Search for jobs
      console.log("\n--- Searching Jobs ---")
      const jobsResult = await client.jobs.searchJobs({
        query: "Node.js developer",
        limit: 5,
      })
      console.log("Jobs found:", JSON.stringify(jobsResult.data, null, 2))

      // Get metadata - countries
      console.log("\n--- Getting Countries ---")
      const countriesResult = await client.metadata.getCountries()
      console.log("Countries:", JSON.stringify(countriesResult.data, null, 2))
    } catch (error: any) {
      console.error("Error:", error.message)
      if (error.graphqlErrors) {
        console.error("GraphQL Errors:", error.graphqlErrors)
      }
    }
  } else {
    console.log("Set UPWORK_ACCESS_TOKEN in .env file to run API examples")
  }

  // Example 3: Custom GraphQL Query
  console.log("\n=== Custom GraphQL Query ===")
  if (process.env.UPWORK_ACCESS_TOKEN) {
    try {
      const customQuery = `
        query {
          requestMetadata {
            activeApiVersion
          }
        }
      `

      const result = await client.graphql.query(customQuery)
      console.log("API Metadata:", JSON.stringify(result.data, null, 2))
    } catch (error: any) {
      console.error("Error:", error.message)
    }
  }

  console.log("\n=== Example Complete ===")
}

// Run the example
main().catch(console.error)
