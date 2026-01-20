# OAuth2 Scopes Reference

This document lists all available OAuth2 scopes for the Upwork GraphQL API.

## What are Scopes?

OAuth2 scopes define what permissions your application has when accessing the Upwork API. When requesting authorization, you should only request the scopes your application actually needs.

## How to Use Scopes

```typescript
const authUrl = client.auth.getAuthorizationUrl({
  scope: "pub-commons:read:all pub-offer:read:all pub-contract:write:all",
  state: "random-state",
})
```

## Available Scopes

### Activity Entities

**`pub-activities:read:all`**

- **Description**: Grants read-only access to activity entities
- **Access**: Read-Only
- **Use for**: Reading team activities, time tracking data

**`pub-activities:write:all`**

- **Description**: Grants read and write access to activity entities
- **Access**: Read and Write
- **Use for**: Managing team activities, creating/updating time tracking entries

### Client Proposals

**`pub-client-proposals:write:all`**

- **Description**: Grants read/write access to client proposals
- **Access**: Read and Write
- **Use for**: Managing proposals from the client perspective

### Common Entities

**`pub-commons:read:all`**

- **Description**: The scope for types and fields related to common entities like City, Country, Organization, User, Money, etc.
- **Access**: Read-Only
- **Use for**: Reading metadata, user info, organization data

**`pub-commons:write:all`**

- **Description**: The scope for types and fields related to common entities like City, Country, Organization, User, Money, etc.
- **Access**: Read and Write
- **Use for**: Updating user profiles, organization settings

### Contracts

**`pub-contract:write:all`**

- **Description**: Grants read/write access to contracts
- **Access**: Read and Write
- **Use for**: Managing contracts, milestones, payments

### Freelancer Profiles

**`pub-freelancer-profiles:write:all`**

- **Description**: Grants read/write access to freelancer profile
- **Access**: Read and Write
- **Use for**: Managing freelancer profile information, skills, experience

### Job Postings

**`pub-management-job-postings:write:all`**

- **Description**: Functionality related to management job postings (client side)
- **Access**: Read and Write
- **Use for**: Creating and managing job postings from client perspective

**`pub-management-jobpostings:read:all`**

- **Description**: Grants read-only access to job postings related information from client point of view
- **Access**: Read-Only
- **Use for**: Reading job posting details from client perspective

**`pub-management-jobpostings:write:all`**

- **Description**: Grants read/write access to job postings
- **Access**: Read and Write
- **Use for**: Full job posting management

**`pub-marketplace-job-postings:read:all`**

- **Description**: Scope to read marketplace Job Postings for public user
- **Access**: Read-Only
- **Use for**: Browsing marketplace job postings as a freelancer

**`pub-public-marketplace-job-postings:read:all`**

- **Description**: Scope to read public marketplace Job Postings for public user
- **Access**: Read-Only
- **Use for**: Public job search functionality

### Messaging

**`pub-messages:read:all`**

- **Description**: Grants read-only access to rooms and messages
- **Access**: Read-Only
- **Use for**: Reading messages and conversation history

**`pub-messages:write:all`**

- **Description**: Grants read/write access to rooms and messages
- **Access**: Read and Write
- **Use for**: Sending messages, creating rooms, managing conversations

### Offers

**`pub-offer:read:all`**

- **Description**: Grants read-only access to offer's information
- **Access**: Read-Only
- **Use for**: Reading offer details

**`pub-offer:write:all`**

- **Description**: Grants read/write access to offers
- **Access**: Read and Write
- **Use for**: Creating and managing offers to freelancers

### Ontology (Skills, Categories)

**`pub-ontology:read:all`**

- **Description**: Grants read-only access to ontology's information
- **Access**: Read-Only
- **Use for**: Reading skills, categories, occupations taxonomy

### Organization

**`pub-management-organization:write:all`**

- **Description**: Grant read/write access to organization
- **Access**: Read and Write
- **Use for**: Managing organization settings and structure

### Payments

**`pub-payments:write:all`**

- **Description**: Grants read and write access to payment activities
- **Access**: Read and Write
- **Use for**: Processing payments, managing financial transactions

### Proposals (Freelancer)

**`pub-submit-proposal:write:all`**

- **Description**: Grants access to submit proposal to jobs (coming soon)
- **Access**: Write
- **Use for**: Submitting proposals to job postings

### Snapshots

**`pub-snapshots:read:all`**

- **Description**: Scope to read snapshots information for Public clients
- **Access**: Read-Only
- **Use for**: Reading work diary snapshots

### Talent Profiles

**`pub-talent-profiles:write:all`**

- **Description**: Grants read/write access to Talent profile
- **Access**: Read and Write
- **Use for**: Managing talent cloud profiles

**`pub-talent-workhistory:read:all`**

- **Description**: Read work history information
- **Access**: Read-Only
- **Use for**: Reading freelancer work history

### Time Sheets

**`pub-time-sheet:read:all`**

- **Description**: Grants read-only access to time-sheet data
- **Access**: Read-Only
- **Use for**: Reading timesheet and work diary data

### Transactions

**`pub-transaction:read:all`**

- **Description**: Grants read-only access to Transaction records including history information
- **Access**: Read-Only
- **Use for**: Reading transaction history

### User Details

**`pub-userdetails:read:all`**

- **Description**: scope for public user to fetch user details
- **Access**: Read-Only
- **Use for**: Reading detailed user information

### Work Diary

**`pub-work-diary-company:read:all`**

- **Description**: Fetch workdiary snapshots information through for a input company
- **Access**: Read-Only
- **Use for**: Reading work diary data for company/team

## Common Scope Combinations

### For Freelancer Apps

```typescript
const freelancerScopes = [
  "pub-commons:read:all", // Read basic info
  "pub-marketplace-job-postings:read:all", // Browse jobs
  "pub-offer:read:all", // View offers
  "pub-contract:write:all", // Manage contracts
  "pub-messages:write:all", // Send messages
  "pub-freelancer-profiles:write:all", // Update profile
  "pub-time-sheet:read:all", // View timesheets
].join(" ")
```

### For Client Apps

```typescript
const clientScopes = [
  "pub-commons:read:all", // Read basic info
  "pub-management-jobpostings:write:all", // Manage job posts
  "pub-offer:write:all", // Send offers
  "pub-contract:write:all", // Manage contracts
  "pub-messages:write:all", // Send messages
  "pub-payments:write:all", // Process payments
  "pub-client-proposals:write:all", // Manage proposals
].join(" ")
```

### For Read-Only Analytics Apps

```typescript
const analyticsScopes = [
  "pub-commons:read:all", // Read basic info
  "pub-contract:write:all", // Read contracts (note: no read-only version)
  "pub-time-sheet:read:all", // Read timesheets
  "pub-transaction:read:all", // Read transactions
  "pub-work-diary-company:read:all", // Read work diary
].join(" ")
```

### For Messaging Apps

```typescript
const messagingScopes = [
  "pub-commons:read:all", // Read basic info
  "pub-messages:write:all", // Send/receive messages
].join(" ")
```

## OpenID Connect Scopes

In addition to Upwork-specific scopes, you can also request standard OpenID Connect scopes:

- **`openid`** - Required for OpenID Connect authentication
- **`profile`** - Access to user profile information
- **`email`** - Access to user email address

Example:

```typescript
const authUrl = client.auth.getAuthorizationUrl({
  scope: "openid profile email pub-commons:read:all",
})
```

## Important Notes

1. **Request Only What You Need**: Only request scopes your application actually uses
2. **User Consent**: Users will see what permissions you're requesting during authorization
3. **No Read-Only Contract Scope**: There's no separate read-only scope for contracts; use `pub-contract:write:all`
4. **Scope Naming**: All Upwork scopes start with `pub-`
5. **Multiple Scopes**: Separate multiple scopes with spaces

## Checking Required Scopes

Each operation in the generated code may require specific scopes. Check the Upwork API documentation or test your operations to determine which scopes are needed.

## Scope Errors

If you get a scope-related error:

```typescript
{
  "errors": [{
    "message": "Insufficient permissions",
    "extensions": {
      "requiredScope": "pub-contract:write:all"
    }
  }]
}
```

Add the required scope to your authorization request and re-authenticate.

## References

- [Upwork API Keys Management](https://www.upwork.com/developer/keys/apply)
- [OAuth2 Specification](https://oauth.net/2/)
- [OpenID Connect Specification](https://openid.net/connect/)
