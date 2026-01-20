/**
 * Upwork API Client
 *
 * Main client class that provides high-level access to Upwork API operations
 */

import { GeneratedUpworkClient } from "./generated/generated-client"
import { UpworkAuth } from "./lib/auth"
import { UpworkGraphQLClient } from "./lib/graphql-client"
import { AuthConfig, GraphQLClientOptions } from "./types"

export class UpworkClient {
  public auth: UpworkAuth
  public graphql: UpworkGraphQLClient
  public generated: GeneratedUpworkClient

  /**
   * Create an Upwork API client
   * @param authConfig - Authentication configuration
   * @param graphqlOptions - GraphQL client options
   */
  constructor(authConfig: AuthConfig, graphqlOptions?: GraphQLClientOptions) {
    this.auth = new UpworkAuth(authConfig)
    this.graphql = new UpworkGraphQLClient(this.auth, graphqlOptions)
    this.generated = new GeneratedUpworkClient(this.graphql)
  }

  /**
   * Job Postings API
   */
  jobs = {
    /**
     * Get a job posting by ID
     */
    getJobPosting: async (jobId: string) => {
      const query = `
        query GetJobPosting($id: ID!) {
          jobPosting(id: $id) {
            id
            title
            description
            category {
              name
            }
            contractorSelection {
              type
            }
            contractTerms {
              ... on HourlyContractTerms {
                hourlyBudgetType
                hourlyBudgetMin
                hourlyBudgetMax
              }
              ... on FixedPriceContractTerms {
                amount
              }
            }
            content {
              title
              description
            }
            classification {
              experienceLevel
              durationV3
            }
            location {
              country
              city
            }
            createdDateTime
            publishedDateTime
            status
          }
        }
      `

      return this.graphql.query(query, { id: jobId })
    },

    /**
     * Search marketplace job postings
     */
    searchJobs: async (params: {
      query?: string
      limit?: number
      offset?: number
      sort?: string
    }) => {
      const query = `
        query SearchJobs($query: String, $limit: Int, $offset: Int) {
          marketplaceJobPostingsSearch(
            searchParams: {
              query: $query
              pagination: { limit: $limit, offset: $offset }
            }
          ) {
            edges {
              node {
                id
                title
                createdDateTime
                classification {
                  experienceLevel
                }
                contractTerms {
                  ... on HourlyContractTerms {
                    hourlyBudgetType
                    hourlyBudgetMin
                    hourlyBudgetMax
                  }
                }
              }
            }
            totalCount
          }
        }
      `

      return this.graphql.query(query, params)
    },

    /**
     * Create a job posting
     */
    createJobPosting: async (input: any) => {
      const mutation = `
        mutation CreateJobPosting($input: JobPostingCreateRequest!) {
          createJobPosting(input: $input) {
            jobPosting {
              id
              title
              status
            }
          }
        }
      `

      return this.graphql.mutate(mutation, { input })
    },

    /**
     * Update a job posting
     */
    updateJobPosting: async (id: string, input: any) => {
      const mutation = `
        mutation UpdateJobPosting($id: ID!, $input: JobPostingUpdateRequest!) {
          updateJobPosting(id: $id, input: $input) {
            jobPosting {
              id
              title
              status
            }
          }
        }
      `

      return this.graphql.mutate(mutation, { id, input })
    },
  }

  /**
   * User and Profile API
   */
  users = {
    /**
     * Get current user information
     */
    getMe: async () => {
      const query = `
        query GetMe {
          user {
            id
            nid
            rid
            firstName
            lastName
            email
            location {
              country
              city
            }
          }
        }
      `

      return this.graphql.query(query)
    },

    /**
     * Get organization information
     */
    getOrganization: async (id: string) => {
      const query = `
        query GetOrganization($id: ID!) {
          organization(id: $id) {
            id
            name
            companyId
          }
        }
      `

      return this.graphql.query(query, { id })
    },

    /**
     * Get freelancer profile by key
     */
    getFreelancerProfile: async (profileKey: string) => {
      const query = `
        query GetFreelancerProfile($profileKey: String!) {
          freelancerProfileByProfileKey(profileKey: $profileKey) {
            id
            nid
            firstName
            lastName
            title
            overview
            skills {
              prettyName
            }
            hourlyRate
            location {
              country
              city
            }
          }
        }
      `

      return this.graphql.query(query, { profileKey })
    },
  }

  /**
   * Contracts and Offers API
   */
  contracts = {
    /**
     * Get contract by ID
     */
    getContract: async (id: string) => {
      const query = `
        query GetContract($id: ID!) {
          contract(id: $id) {
            id
            jobTitle
            status
            buyer {
              id
              name
            }
            provider {
              id
              name
            }
            terms {
              ... on HourlyTerms {
                hourlyRate
                weeklyLimit
              }
              ... on FixedPriceTerm {
                amount
              }
            }
            createdDate
            startDate
            endDate
          }
        }
      `

      return this.graphql.query(query, { id })
    },

    /**
     * Get list of contracts
     */
    getContracts: async (params: { limit?: number; offset?: number } = {}) => {
      const query = `
        query GetContracts($limit: Int, $offset: Int) {
          contractList(
            paging: { limit: $limit, offset: $offset }
          ) {
            contracts {
              id
              jobTitle
              status
              buyer {
                id
                name
              }
              provider {
                id
                name
              }
            }
            totalCount
          }
        }
      `

      return this.graphql.query(query, params)
    },

    /**
     * End contract (freelancer)
     */
    endContract: async (contractId: string, reason: string) => {
      const mutation = `
        mutation EndContract($contractId: ID!, $reason: String!) {
          endContractByFreelancer(
            input: { contractId: $contractId, reason: $reason }
          ) {
            success
            message
          }
        }
      `

      return this.graphql.mutate(mutation, { contractId, reason })
    },

    /**
     * Create an offer
     */
    createOffer: async (input: any) => {
      const mutation = `
        mutation CreateOffer($input: CreationOfferInput!) {
          createOffer(input: $input) {
            offer {
              id
              status
            }
          }
        }
      `

      return this.graphql.mutate(mutation, { input })
    },
  }

  /**
   * Proposals API
   */
  proposals = {
    /**
     * Get freelancer proposals
     */
    getProposals: async (params: { limit?: number; offset?: number } = {}) => {
      const query = `
        query GetProposals($limit: Int, $offset: Int) {
          vendorProposals(
            paging: { limit: $limit, offset: $offset }
          ) {
            proposals {
              id
              job {
                id
                title
              }
              status
              createdDate
            }
            totalCount
          }
        }
      `

      return this.graphql.query(query, params)
    },

    /**
     * Get client proposals
     */
    getClientProposals: async (params: { limit?: number; offset?: number } = {}) => {
      const query = `
        query GetClientProposals($limit: Int, $offset: Int) {
          clientProposals(
            paging: { limit: $limit, offset: $offset }
          ) {
            proposals {
              id
              freelancer {
                id
                name
              }
              status
              createdDate
            }
            totalCount
          }
        }
      `

      return this.graphql.query(query, params)
    },
  }

  /**
   * Metadata API
   */
  metadata = {
    /**
     * Get countries list
     */
    getCountries: async () => {
      const query = `
        query GetCountries {
          countries {
            code
            name
          }
        }
      `

      return this.graphql.query(query)
    },

    /**
     * Get time zones
     */
    getTimeZones: async () => {
      const query = `
        query GetTimeZones {
          timeZones {
            id
            name
            offset
          }
        }
      `

      return this.graphql.query(query)
    },

    /**
     * Get ontology skills
     */
    getSkills: async (params: { query?: string; limit?: number } = {}) => {
      const query = `
        query GetSkills($query: String, $limit: Int) {
          ontologySkills(
            searchParams: { query: $query, limit: $limit }
          ) {
            edges {
              node {
                id
                prefLabel
              }
            }
          }
        }
      `

      return this.graphql.query(query, params)
    },
  }

  /**
   * Search API
   */
  search = {
    /**
     * Search freelancers
     */
    searchFreelancers: async (params: { query?: string; limit?: number; offset?: number }) => {
      const query = `
        query SearchFreelancers($query: String, $limit: Int, $offset: Int) {
          freelancerProfileSearchRecords(
            searchParams: {
              query: $query
              pagination: { limit: $limit, offset: $offset }
            }
          ) {
            edges {
              node {
                id
                profile {
                  id
                  firstName
                  lastName
                  title
                  hourlyRate
                }
              }
            }
            totalCount
          }
        }
      `

      return this.graphql.query(query, params)
    },
  }
}

// Export all types and classes
export * from "./types"
export { UpworkAuth } from "./lib/auth"
export { UpworkGraphQLClient } from "./lib/graphql-client"
export { GeneratedUpworkClient } from "./generated/generated-client"
export * as Types from "./generated/generated-types"
export { queries, mutations } from "./generated/generated-operations"
