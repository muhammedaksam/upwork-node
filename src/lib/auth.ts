/**
 * OAuth2 Authentication Module for Upwork API
 *
 * This module handles OAuth2 authentication flows including:
 * - Authorization Code Grant
 * - Client Credentials Grant
 * - Refresh Token Grant
 * - Implicit Grant
 */

import axios, { AxiosError } from "axios"

import { AuthConfig, AuthorizationOptions, TokenResponse } from "../types"

export class UpworkAuth {
  private clientId: string
  private clientSecret: string
  private redirectUri?: string
  private baseUrl: string
  private tokenUrl: string
  private authUrl: string

  private accessToken: string | null = null
  private refreshToken: string | null = null
  private tokenExpiry: number | null = null

  /**
   * Create an authentication instance
   * @param config - Configuration object
   */
  constructor(config: AuthConfig) {
    if (!config.clientId) {
      throw new Error("clientId is required")
    }
    if (!config.clientSecret) {
      throw new Error("clientSecret is required")
    }

    this.clientId = config.clientId
    this.clientSecret = config.clientSecret
    this.redirectUri = config.redirectUri
    this.baseUrl = config.baseUrl || "https://www.upwork.com"
    this.tokenUrl = `${this.baseUrl}/api/v3/oauth2/token`
    this.authUrl = `${this.baseUrl}/ab/account-security/oauth2/authorize`
  }

  /**
   * Generate authorization URL for Authorization Code Grant
   * @param options - Authorization options
   * @returns Authorization URL
   */
  getAuthorizationUrl(options: AuthorizationOptions = {}): string {
    if (!this.redirectUri) {
      throw new Error("redirectUri is required for Authorization Code Grant")
    }

    const params = new URLSearchParams({
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      response_type: "code",
    })

    if (options.state) {
      params.append("state", options.state)
    }

    if (options.scope) {
      params.append("scope", options.scope)
    }

    return `${this.authUrl}?${params.toString()}`
  }

  /**
   * Get authorization URL for Implicit Grant
   * @param options - Authorization options
   * @returns Authorization URL
   */
  getImplicitGrantUrl(options: AuthorizationOptions = {}): string {
    if (!this.redirectUri) {
      throw new Error("redirectUri is required for Implicit Grant")
    }

    const params = new URLSearchParams({
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      response_type: "token",
    })

    if (options.state) {
      params.append("state", options.state)
    }

    if (options.scope) {
      params.append("scope", options.scope)
    }

    return `${this.authUrl}?${params.toString()}`
  }

  /**
   * Exchange authorization code for access token
   * @param code - Authorization code from callback
   * @returns Token response
   */
  async getAccessToken(code: string): Promise<TokenResponse> {
    if (!this.redirectUri) {
      throw new Error("redirectUri is required for Authorization Code Grant")
    }

    const params = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: this.redirectUri,
      client_id: this.clientId,
      client_secret: this.clientSecret,
    })

    try {
      const response = await axios.post<TokenResponse>(this.tokenUrl, params.toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })

      this.setTokens(response.data)
      return response.data
    } catch (error) {
      throw this.handleAuthError(error as AxiosError)
    }
  }

  /**
   * Get access token using Client Credentials Grant
   * @param options - Options
   * @returns Token response
   */
  async getClientCredentialsToken(options: AuthorizationOptions = {}): Promise<TokenResponse> {
    const params = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: this.clientId,
      client_secret: this.clientSecret,
    })

    if (options.scope) {
      params.append("scope", options.scope)
    }

    try {
      const response = await axios.post<TokenResponse>(this.tokenUrl, params.toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })

      this.setTokens(response.data)
      return response.data
    } catch (error) {
      throw this.handleAuthError(error as AxiosError)
    }
  }

  /**
   * Refresh access token using refresh token
   * @param refreshToken - Refresh token (uses stored token if not provided)
   * @returns Token response
   */
  async refreshAccessToken(refreshToken?: string): Promise<TokenResponse> {
    const token = refreshToken || this.refreshToken

    if (!token) {
      throw new Error("No refresh token available")
    }

    const params = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: token,
      client_id: this.clientId,
      client_secret: this.clientSecret,
    })

    try {
      const response = await axios.post<TokenResponse>(this.tokenUrl, params.toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })

      this.setTokens(response.data)
      return response.data
    } catch (error) {
      throw this.handleAuthError(error as AxiosError)
    }
  }

  /**
   * Set tokens from OAuth response
   * @param tokenData - Token response data
   */
  private setTokens(tokenData: TokenResponse): void {
    this.accessToken = tokenData.access_token
    this.refreshToken = tokenData.refresh_token || this.refreshToken

    if (tokenData.expires_in) {
      this.tokenExpiry = Date.now() + tokenData.expires_in * 1000
    }
  }

  /**
   * Check if access token is expired
   * @returns True if token is expired or about to expire
   */
  isTokenExpired(): boolean {
    if (!this.tokenExpiry) {
      return true
    }
    // Consider token expired if less than 5 minutes remaining
    return Date.now() >= this.tokenExpiry - 300000
  }

  /**
   * Get valid access token, refreshing if necessary
   * @returns Valid access token
   */
  async getValidToken(): Promise<string> {
    if (!this.accessToken) {
      throw new Error("No access token available. Please authenticate first.")
    }

    if (this.isTokenExpired() && this.refreshToken) {
      await this.refreshAccessToken()
    }

    return this.accessToken
  }

  /**
   * Set access token manually (for tokens obtained outside this library)
   * @param accessToken - Access token
   * @param refreshToken - Refresh token
   * @param expiresIn - Expiry time in seconds
   */
  setAccessToken(accessToken: string, refreshToken?: string, expiresIn?: number): void {
    this.accessToken = accessToken

    if (refreshToken) {
      this.refreshToken = refreshToken
    }

    if (expiresIn) {
      this.tokenExpiry = Date.now() + expiresIn * 1000
    }
  }

  /**
   * Get current access token without validation
   * @returns Current access token or null
   */
  getCurrentAccessToken(): string | null {
    return this.accessToken
  }

  /**
   * Get current refresh token
   * @returns Current refresh token or null
   */
  getCurrentRefreshToken(): string | null {
    return this.refreshToken
  }

  /**
   * Handle authentication errors
   * @param error - Error object
   * @returns Formatted error
   */
  private handleAuthError(error: AxiosError): Error {
    if (error.response) {
      const { status, data } = error.response
      const errorData = data as any
      const message =
        errorData.error_description ||
        errorData.error ||
        errorData.message ||
        "Authentication failed"
      const authError = new Error(`Upwork Auth Error (${status}): ${message}`) as any
      authError.status = status
      authError.data = data
      return authError
    }
    return error
  }
}
