/**
 * GraphQL Client Module for Upwork API
 *
 * This module provides a GraphQL client for interacting with Upwork's GraphQL API.
 * It handles authentication, request formatting, and error handling.
 */

import axios, { AxiosError } from "axios"

import { GraphQLClientOptions, GraphQLError, GraphQLResponse, QueryOptions } from "../types"
import { UpworkAuth } from "./auth"

export class UpworkGraphQLClient {
  private auth: UpworkAuth
  private baseUrl: string
  private graphqlUrl: string
  private organizationId?: string

  /**
   * Create a GraphQL client instance
   * @param auth - Authentication instance (UpworkAuth)
   * @param options - Additional options
   */
  constructor(auth: UpworkAuth, options: GraphQLClientOptions = {}) {
    if (!auth) {
      throw new Error("Authentication instance is required")
    }

    this.auth = auth
    this.baseUrl = options.baseUrl || "https://api.upwork.com"
    this.graphqlUrl = `${this.baseUrl}/graphql`
    this.organizationId = options.organizationId
  }

  /**
   * Execute a GraphQL query
   * @param query - GraphQL query string
   * @param variables - Query variables
   * @param options - Additional options
   * @returns Query response
   */
  async query<T = any>(
    query: string,
    variables: Record<string, any> = {},
    options: QueryOptions = {}
  ): Promise<GraphQLResponse<T>> {
    const token = await this.auth.getValidToken()

    const headers: Record<string, string> = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }

    // Add organization ID header if provided
    const orgId = options.organizationId || this.organizationId
    if (orgId) {
      headers["X-Upwork-API-TenantId"] = orgId
    }

    const requestBody = {
      query,
      variables,
    }

    try {
      const response = await axios.post<GraphQLResponse<T>>(this.graphqlUrl, requestBody, {
        headers,
      })

      if (response.data.errors) {
        throw this.handleGraphQLErrors(response.data.errors)
      }

      return response.data
    } catch (error) {
      throw this.handleRequestError(error as AxiosError)
    }
  }

  /**
   * Execute a GraphQL mutation
   * @param mutation - GraphQL mutation string
   * @param variables - Mutation variables
   * @param options - Additional options
   * @returns Mutation response
   */
  async mutate<T = any>(
    mutation: string,
    variables: Record<string, any> = {},
    options: QueryOptions = {}
  ): Promise<GraphQLResponse<T>> {
    return this.query<T>(mutation, variables, options)
  }

  /**
   * Set organization ID for requests
   * @param organizationId - Organization ID
   */
  setOrganizationId(organizationId: string): void {
    this.organizationId = organizationId
  }

  /**
   * Handle GraphQL errors
   * @param errors - Array of GraphQL errors
   * @returns Formatted error
   */
  private handleGraphQLErrors(errors: GraphQLError[]): Error {
    const mainError = errors[0]
    const error = new Error(`GraphQL Error: ${mainError.message}`) as any
    error.graphqlErrors = errors
    error.extensions = mainError.extensions
    return error
  }

  /**
   * Handle HTTP request errors
   * @param error - Error object
   * @returns Formatted error
   */
  private handleRequestError(error: AxiosError): Error {
    if (error.response) {
      const { status, data } = error.response
      const errorData = data as any
      const message = errorData.message || errorData.error || "Request failed"
      const requestError = new Error(`Upwork API Error (${status}): ${message}`) as any
      requestError.status = status
      requestError.data = data
      return requestError
    }
    return error
  }
}
