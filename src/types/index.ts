/**
 * Type definitions for Upwork API Client
 */

export interface AuthConfig {
  clientId: string
  clientSecret: string
  redirectUri?: string
  baseUrl?: string
}

export interface AuthorizationOptions {
  state?: string
  scope?: string
}

export interface TokenResponse {
  access_token: string
  token_type: string
  expires_in?: number
  refresh_token?: string
  scope?: string
}

export interface GraphQLError {
  message: string
  locations?: Array<{ line: number; column: number }>
  path?: string[]
  extensions?: Record<string, any>
}

export interface GraphQLResponse<T = any> {
  data?: T
  errors?: GraphQLError[]
}

export interface GraphQLClientOptions {
  baseUrl?: string
  organizationId?: string
}

export interface QueryOptions {
  organizationId?: string
}
