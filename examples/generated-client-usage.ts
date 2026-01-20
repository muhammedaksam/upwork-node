/**
 * Generated Client Usage Example
 *
 * This example shows how to use the auto-generated domain-grouped client
 */

import * as dotenv from "dotenv"

import { Types, UpworkClient } from "../src"

dotenv.config()

async function main() {
  // Initialize the client
  const client = new UpworkClient({
    clientId: process.env.UPWORK_CLIENT_ID!,
    clientSecret: process.env.UPWORK_CLIENT_SECRET!,
    redirectUri: process.env.UPWORK_REDIRECT_URI || "http://localhost:3000/callback",
  })

  // Set access token (assume you already have one)
  if (!process.env.UPWORK_ACCESS_TOKEN) {
    console.error("Please set UPWORK_ACCESS_TOKEN in .env file")
    process.exit(1)
  }

  client.auth.setAccessToken(process.env.UPWORK_ACCESS_TOKEN)

  console.log("=== Generated Client Usage Examples ===\n")

  // Example 1: Jobs Domain
  console.log("1. Jobs Domain - Search for jobs")
  try {
    // The generated client provides type-safe, domain-grouped methods
    const jobsResult = await client.generated.jobs.marketplaceJobPostingsSearch({
      // marketPlaceJobFilter: { ... },  // Add filter here
      // searchType: 'BEST_MATCH',
      // TypeScript will autocomplete available fields!
    })
    console.log("Found jobs:", jobsResult)
  } catch (error) {
    console.error("Error:", error)
  }

  // Example 2: Users Domain
  console.log("\n2. Users Domain - Get organization")
  try {
    const orgResult = await client.generated.users.organization({})
    console.log("Organization:", orgResult)
  } catch (error) {
    console.error("Error:", error)
  }

  // Example 3: Metadata Domain
  console.log("\n3. Metadata Domain - Get request metadata")
  try {
    const metadata = await client.generated.metadata.requestMetadata({})
    console.log("Request Metadata:", metadata)
  } catch (error) {
    console.error("Error:", error)
  }

  // Example 4: Messages Domain
  console.log("\n4. Messages Domain - Get room")
  try {
    // Note: This requires roomId parameter
    // const room = await client.generated.messages.room({ roomId: 'some-id' });
    console.log("(Skipped - requires roomId parameter)")
  } catch (error) {
    console.error("Error:", error)
  }

  // Example 5: Contracts Domain
  console.log("\n5. Contracts Domain - Get contract")
  try {
    // Note: This requires contractId parameter
    // const contract = await client.generated.contracts.contract({ contractId: 'some-id' });
    console.log("(Skipped - requires contractId parameter)")
  } catch (error) {
    console.error("Error:", error)
  }

  // Example 6: Direct operation access (alternative approach)
  console.log("\n6. Using raw queries/mutations (advanced)")
  try {
    const { queries } = await import("../src/generated/generated-operations")

    // You can also call operations directly
    const jobPosting = await queries.jobPosting(client.graphql, {
      jobPostingId: "example-job-id-123", // Required parameter
      loadAnnotation: true,
    })
    console.log("Job posting:", jobPosting)
  } catch (error) {
    console.error("Error:", error)
  }

  console.log("\n=== Benefits of Generated Client ===")
  console.log("✓ Full TypeScript type safety")
  console.log("✓ Domain-grouped organization (jobs, users, contracts, etc.)")
  console.log("✓ Auto-complete in your IDE")
  console.log("✓ 127 operations automatically generated")
  console.log("✓ 642 TypeScript types")
  console.log("✓ 10 domain classes for clean code organization")
}

main().catch(console.error)
