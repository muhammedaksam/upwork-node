/**
 * Auto-generated domain-grouped client from Upwork GraphQL API
 * Generated on: 2026-01-20T11:50:37.021Z
 */

import { UpworkGraphQLClient } from "../lib/graphql-client"
import { mutations, queries } from "./generated-operations"
import * as Types from "./generated-types"

/**
 * Jobs domain operations
 */
export class JobsDomain {
  constructor(private client: UpworkGraphQLClient) {}

  // Queries
  /**
   * jobPosting
   * @param variables - Operation variables
   * @returns Types.JobPosting
   */
  async jobPosting(variables: {
    jobPostingId: string
    loadAnnotation?: boolean
  }): Promise<Types.JobPosting> {
    return queries.jobPosting(this.client, variables)
  }

  /**
   * marketplaceJobPosting
   * @param variables - Operation variables
   * @returns Types.MarketplaceJobPosting | null
   */
  async marketplaceJobPosting(variables: {
    id: string
  }): Promise<Types.MarketplaceJobPosting | null> {
    return queries.marketplaceJobPosting(this.client, variables)
  }

  /**
   * marketplaceJobPostings
   * @param variables - Operation variables
   * @returns Types.MarketplaceJobPostingSearchConnection | null
   */
  async marketplaceJobPostings(
    variables: {
      marketPlaceJobFilter?: Types.MarketplaceJobFilter
      searchType?: Types.MarketplaceJobPostingSearchType
      sortAttributes?: Array<Types.MarketplaceJobPostingSearchSortAttribute>
    } = {}
  ): Promise<Types.MarketplaceJobPostingSearchConnection | null> {
    return queries.marketplaceJobPostings(this.client, variables)
  }

  /**
   * marketplaceJobPostingsContents
   * @param variables - Operation variables
   * @returns Array<Types.MarketplaceJobPostingsContents>
   */
  async marketplaceJobPostingsContents(variables: {
    ids: Array<string>
  }): Promise<Array<Types.MarketplaceJobPostingsContents>> {
    return queries.marketplaceJobPostingsContents(this.client, variables)
  }

  /**
   * marketplaceJobPostingsSearch
   * @param variables - Operation variables
   * @returns Types.MarketplaceJobPostingSearchConnection | null
   */
  async marketplaceJobPostingsSearch(
    variables: {
      marketPlaceJobFilter?: Types.MarketplaceJobPostingsSearchFilter
      searchType?: Types.MarketplaceJobPostingSearchType
      sortAttributes?: Array<Types.MarketplaceJobPostingSearchSortAttribute>
    } = {}
  ): Promise<Types.MarketplaceJobPostingSearchConnection | null> {
    return queries.marketplaceJobPostingsSearch(this.client, variables)
  }

  /**
   * publicMarketplaceJobPostingsSearch
   * @param variables - Operation variables
   * @returns Types.PublicMarketplaceJobPostingsSearchConnection | null
   */
  async publicMarketplaceJobPostingsSearch(variables: {
    marketPlaceJobFilter: Types.PublicMarketplaceJobPostingsSearchFilter
  }): Promise<Types.PublicMarketplaceJobPostingsSearchConnection | null> {
    return queries.publicMarketplaceJobPostingsSearch(this.client, variables)
  }

  // Mutations
  /**
   * createJobPosting
   * @param variables - Operation variables
   * @returns Types.JobPostingCreateResponse | null
   */
  async createJobPosting(variables: {
    jobPostingRequest: Types.JobPostingCreateRequest
  }): Promise<Types.JobPostingCreateResponse | null> {
    return mutations.createJobPosting(this.client, variables)
  }

  /**
   * updateJobPosting
   * @param variables - Operation variables
   * @returns Types.JobPostingUpdateResponse | null
   */
  async updateJobPosting(variables: {
    id: string
    jobPostingRequest: Types.JobPostingUpdateRequest
  }): Promise<Types.JobPostingUpdateResponse | null> {
    return mutations.updateJobPosting(this.client, variables)
  }

  /**
   * createClientJobInvitation
   * @param variables - Operation variables
   * @returns string
   */
  async createClientJobInvitation(variables: {
    clientJobInvitationCreateRequest: Types.ClientJobInvitationCreateRequestInput
  }): Promise<string> {
    return mutations.createClientJobInvitation(this.client, variables)
  }
}

/**
 * Other domain operations
 */
export class OtherDomain {
  constructor(private client: UpworkGraphQLClient) {}

  // Queries
  /**
   * countries
   * @returns Array<Types.Country>
   */
  async countries(variables?: Record<string, never>): Promise<Array<Types.Country>> {
    return queries.countries(this.client, variables)
  }

  /**
   * languages
   * @returns Array<Types.Language>
   */
  async languages(variables?: Record<string, never>): Promise<Array<Types.Language>> {
    return queries.languages(this.client, variables)
  }

  /**
   * reasons
   * @param variables - Operation variables
   * @returns Array<Types.ReasonsMetadata>
   */
  async reasons(variables: {
    reasonType: Types.ReasonType
    all?: boolean
  }): Promise<Array<Types.ReasonsMetadata>> {
    return queries.reasons(this.client, variables)
  }

  /**
   * regions
   * @returns Array<Types.Region>
   */
  async regions(variables?: Record<string, never>): Promise<Array<Types.Region>> {
    return queries.regions(this.client, variables)
  }

  /**
   * visitor
   * @returns Types.Visitor | null
   */
  async visitor(variables?: Record<string, never>): Promise<Types.Visitor | null> {
    return queries.visitor(this.client, variables)
  }

  /**
   * customFields
   * @param variables - Operation variables
   * @returns Array<Types.CustomFields>
   */
  async customFields(variables: {
    input: Types.CustomFieldsInput
    offset?: number
    limit?: number
  }): Promise<Array<Types.CustomFields>> {
    return queries.customFields(this.client, variables)
  }

  /**
   * ontologyCategories
   * @returns Array<Types.OntologyCategory>
   */
  async ontologyCategories(
    variables?: Record<string, never>
  ): Promise<Array<Types.OntologyCategory>> {
    return queries.ontologyCategories(this.client, variables)
  }

  /**
   * ontologyEntities
   * @param variables - Operation variables
   * @returns Array<Types.OntologyEntityResult>
   */
  async ontologyEntities(variables: {
    ids: Array<string>
  }): Promise<Array<Types.OntologyEntityResult>> {
    return queries.ontologyEntities(this.client, variables)
  }

  /**
   * ontologyEntitiesFiltered
   * @param variables - Operation variables
   * @returns Types.OntologyConnection | null
   */
  async ontologyEntitiesFiltered(
    variables: {
      ontologyEntityFilter?: Types.OntologyEntityFilter
      pagination?: Types.Pagination
    } = {}
  ): Promise<Types.OntologyConnection | null> {
    return queries.ontologyEntitiesFiltered(this.client, variables)
  }

  /**
   * ontologyEntity
   * @param variables - Operation variables
   * @returns Types.OntologyEntityResult | null
   */
  async ontologyEntity(variables: { id: string }): Promise<Types.OntologyEntityResult | null> {
    return queries.ontologyEntity(this.client, variables)
  }

  /**
   * ontologyOccupationsCategoriesServices
   * @param variables - Operation variables
   * @returns Types.CategoryServicesResponse | null
   */
  async ontologyOccupationsCategoriesServices(variables: {
    categoryUids: Array<string>
  }): Promise<Types.CategoryServicesResponse | null> {
    return queries.ontologyOccupationsCategoriesServices(this.client, variables)
  }

  /**
   * talentCloudTasks
   * @param variables - Operation variables
   * @returns Array<Types.TalentCloudTask> | null
   */
  async talentCloudTasks(variables: {
    filter: Types.TalentCloudTasksInputFilter
  }): Promise<Array<Types.TalentCloudTask> | null> {
    return queries.talentCloudTasks(this.client, variables)
  }

  /**
   * talentWorkHistory
   * @param variables - Operation variables
   * @returns Types.TalentWorkHistoryConnection | null
   */
  async talentWorkHistory(
    variables: { filter?: Types.TalentWorkHistoryFilterInput } = {}
  ): Promise<Types.TalentWorkHistoryConnection | null> {
    return queries.talentWorkHistory(this.client, variables)
  }

  /**
   * company
   * @param variables - Operation variables
   * @returns Types.CompanyInfo | null
   */
  async company(variables: { id: string }): Promise<Types.CompanyInfo | null> {
    return queries.company(this.client, variables)
  }

  /**
   * companySelector
   * @returns Types.CompanySelector
   */
  async companySelector(variables?: Record<string, never>): Promise<Types.CompanySelector> {
    return queries.companySelector(this.client, variables)
  }

  /**
   * workDays
   * @param variables - Operation variables
   * @returns Types.WorkdayResult | null
   */
  async workDays(variables: {
    workdaysInput: Types.WorkdaysInput
  }): Promise<Types.WorkdayResult | null> {
    return queries.workDays(this.client, variables)
  }

  /**
   * accountAuditRecord
   * @param variables - Operation variables
   * @returns Types.AccountAuditRecord | null
   */
  async accountAuditRecord(variables: {
    processInstanceId: string
  }): Promise<Types.AccountAuditRecord | null> {
    return queries.accountAuditRecord(this.client, variables)
  }

  /**
   * staffsByPersonId
   * @param variables - Operation variables
   * @returns Types.StaffsConnection
   */
  async staffsByPersonId(variables: {
    personId: string
    status?: number
    staffType?: string
    affiliateContractor?: boolean
    hierarchy?: boolean
    orgLegacyType?: Types.OrgLegacyType
    orgType?: Types.OrgType
    hiddenOrg?: boolean
    activeOrg?: boolean
    eac?: boolean
    pagination?: Types.Pagination
  }): Promise<Types.StaffsConnection> {
    return queries.staffsByPersonId(this.client, variables)
  }

  /**
   * teamActivities
   * @param variables - Operation variables
   * @returns Types.ActivitiesConnection
   */
  async teamActivities(variables: {
    orgId: string
    teamId?: string
    page?: Types.PageFilterInput
    filter?: Types.ActivityFilterInput
  }): Promise<Types.ActivitiesConnection> {
    return queries.teamActivities(this.client, variables)
  }

  /**
   * workflowView
   * @param variables - Operation variables
   * @returns Types.WorkflowView | null
   */
  async workflowView(variables: {
    entityType: string
    entityId: string
  }): Promise<Types.WorkflowView | null> {
    return queries.workflowView(this.client, variables)
  }

  /**
   * accountingEntity
   * @returns Types.AccountingEntity
   */
  async accountingEntity(variables?: Record<string, never>): Promise<Types.AccountingEntity> {
    return queries.accountingEntity(this.client, variables)
  }

  // Mutations
  /**
   * activateMilestone
   * @param variables - Operation variables
   * @returns Types.Milestone
   */
  async activateMilestone(
    variables: { input?: Types.ActivateMilestoneInput } = {}
  ): Promise<Types.Milestone> {
    return mutations.activateMilestone(this.client, variables)
  }

  /**
   * approveMilestone
   * @param variables - Operation variables
   * @returns Types.Milestone
   */
  async approveMilestone(variables: {
    input: Types.ApproveMilestoneInput
  }): Promise<Types.Milestone> {
    return mutations.approveMilestone(this.client, variables)
  }

  /**
   * createMilestoneV2
   * @param variables - Operation variables
   * @returns Types.Milestone | null
   */
  async createMilestoneV2(variables: {
    input: Types.CreateMilestoneInput
  }): Promise<Types.Milestone | null> {
    return mutations.createMilestoneV2(this.client, variables)
  }

  /**
   * deleteMilestone
   * @param variables - Operation variables
   * @returns boolean
   */
  async deleteMilestone(variables: { input?: Types.DeleteMilestoneInput } = {}): Promise<boolean> {
    return mutations.deleteMilestone(this.client, variables)
  }

  /**
   * editMilestone
   * @param variables - Operation variables
   * @returns Types.Milestone
   */
  async editMilestone(
    variables: { input?: Types.EditMilestoneInput } = {}
  ): Promise<Types.Milestone> {
    return mutations.editMilestone(this.client, variables)
  }

  /**
   * rejectSubmittedMilestone
   * @param variables - Operation variables
   * @returns Types.MilestoneRejectionResponse | null
   */
  async rejectSubmittedMilestone(
    variables: { input?: Types.RejectMilestoneSubmissionInput } = {}
  ): Promise<Types.MilestoneRejectionResponse | null> {
    return mutations.rejectSubmittedMilestone(this.client, variables)
  }

  /**
   * confirmFiles
   * @param variables - Operation variables
   * @returns boolean | null
   */
  async confirmFiles(variables: {
    fileIds: Array<string>
    skipMissing?: boolean
  }): Promise<boolean | null> {
    return mutations.confirmFiles(this.client, variables)
  }

  /**
   * addTeamActivity
   * @param variables - Operation variables
   * @returns Types.ProcessAddResponse | null
   */
  async addTeamActivity(variables: {
    orgId: string
    teamId?: string
    request: Types.AddTeamActivityRequest
  }): Promise<Types.ProcessAddResponse | null> {
    return mutations.addTeamActivity(this.client, variables)
  }

  /**
   * archiveTeamActivity
   * @param variables - Operation variables
   * @returns Types.ProcessUpdateResponse | null
   */
  async archiveTeamActivity(variables: {
    orgId: string
    teamId?: string
    codes: Array<string>
  }): Promise<Types.ProcessUpdateResponse | null> {
    return mutations.archiveTeamActivity(this.client, variables)
  }

  /**
   * inviteToTeam
   * @param variables - Operation variables
   * @returns Types.InviteToTeamResponse
   */
  async inviteToTeam(variables: {
    invitations: Array<Types.InvitationToTeamInput>
  }): Promise<Types.InviteToTeamResponse> {
    return mutations.inviteToTeam(this.client, variables)
  }

  /**
   * unarchiveTeamActivity
   * @param variables - Operation variables
   * @returns Types.ProcessUpdateResponse | null
   */
  async unarchiveTeamActivity(variables: {
    orgId: string
    teamId?: string
    codes: Array<string>
  }): Promise<Types.ProcessUpdateResponse | null> {
    return mutations.unarchiveTeamActivity(this.client, variables)
  }

  /**
   * updateTeamActivity
   * @param variables - Operation variables
   * @returns Types.ProcessUpdateResponse | null
   */
  async updateTeamActivity(variables: {
    orgId: string
    teamId?: string
    request: Types.UpdateTeamActivityRequest
  }): Promise<Types.ProcessUpdateResponse | null> {
    return mutations.updateTeamActivity(this.client, variables)
  }

  /**
   * updateWorkflowTask
   * @param variables - Operation variables
   * @returns Types.UpdateWorkflowTaskResult
   */
  async updateWorkflowTask(
    variables: {
      workflowId?: string
      taskId?: string
      updateWorkflowTaskDetailsInput?: Types.UpdateWorkflowTaskDetailsInput
    } = {}
  ): Promise<Types.UpdateWorkflowTaskResult> {
    return mutations.updateWorkflowTask(this.client, variables)
  }
}

/**
 * Metadata domain operations
 */
export class MetadataDomain {
  constructor(private client: UpworkGraphQLClient) {}

  // Queries
  /**
   * requestMetadata
   * @returns Types.RequestMetadata
   */
  async requestMetadata(variables?: Record<string, never>): Promise<Types.RequestMetadata> {
    return queries.requestMetadata(this.client, variables)
  }

  /**
   * timeZones
   * @returns Array<Types.TimeZoneRecord>
   */
  async timeZones(variables?: Record<string, never>): Promise<Array<Types.TimeZoneRecord>> {
    return queries.timeZones(this.client, variables)
  }

  /**
   * ontologySkills
   * @param variables - Operation variables
   * @returns Array<Types.Skill>
   */
  async ontologySkills(variables: { limit: number; offset?: number }): Promise<Array<Types.Skill>> {
    return queries.ontologySkills(this.client, variables)
  }
}

/**
 * Contracts domain operations
 */
export class ContractsDomain {
  constructor(private client: UpworkGraphQLClient) {}

  // Queries
  /**
   * contract
   * @param variables - Operation variables
   * @returns Types.Contract | null
   */
  async contract(variables: { id: string }): Promise<Types.Contract | null> {
    return queries.contract(this.client, variables)
  }

  /**
   * contractByTerm
   * @param variables - Operation variables
   * @returns Types.ContractDetails
   */
  async contractByTerm(variables: {
    termId: string
    date?: string
  }): Promise<Types.ContractDetails> {
    return queries.contractByTerm(this.client, variables)
  }

  /**
   * contractDetails
   * @param variables - Operation variables
   * @returns Types.ContractDetails
   */
  async contractDetails(variables: { id: string; date?: string }): Promise<Types.ContractDetails> {
    return queries.contractDetails(this.client, variables)
  }

  /**
   * contractList
   * @param variables - Operation variables
   * @returns Types.ContractList | null
   */
  async contractList(variables: { ids: Array<string> }): Promise<Types.ContractList | null> {
    return queries.contractList(this.client, variables)
  }

  /**
   * contractProposal
   * @param variables - Operation variables
   * @returns Types.ContractProposal | null
   */
  async contractProposal(variables: { id: string }): Promise<Types.ContractProposal | null> {
    return queries.contractProposal(this.client, variables)
  }

  /**
   * contractTerm
   * @param variables - Operation variables
   * @returns Types.ContractDetails
   */
  async contractTerm(variables: { termId: string }): Promise<Types.ContractDetails> {
    return queries.contractTerm(this.client, variables)
  }

  /**
   * offer
   * @param variables - Operation variables
   * @returns Types.Offer | null
   */
  async offer(variables: { id: string }): Promise<Types.Offer | null> {
    return queries.offer(this.client, variables)
  }

  /**
   * offersByAttribute
   * @param variables - Operation variables
   * @returns Types.OfferList | null
   */
  async offersByAttribute(variables: {
    filter: Types.SearchOffersInput
  }): Promise<Types.OfferList | null> {
    return queries.offersByAttribute(this.client, variables)
  }

  /**
   * offersByAttributes
   * @param variables - Operation variables
   * @returns Types.ModernizedContractOfferList | null
   */
  async offersByAttributes(variables: {
    filter: Types.SearchOffersByAttributesInput
  }): Promise<Types.ModernizedContractOfferList | null> {
    return queries.offersByAttributes(this.client, variables)
  }

  /**
   * vendorContracts
   * @param variables - Operation variables
   * @returns Types.ContractSearchResults | null
   */
  async vendorContracts(variables: {
    filter: Types.VendorContractSearchFilter
    options?: Types.ContractOptionsInput
    paging?: Types.ContractPagingInput
  }): Promise<Types.ContractSearchResults | null> {
    return queries.vendorContracts(this.client, variables)
  }

  /**
   * contractTimeReport
   * @param variables - Operation variables
   * @returns Types.TimeReportConnection
   */
  async contractTimeReport(
    variables: { filter?: Types.TimeReportFilter; pagination?: Types.Pagination } = {}
  ): Promise<Types.TimeReportConnection> {
    return queries.contractTimeReport(this.client, variables)
  }

  /**
   * contractRoom
   * @param variables - Operation variables
   * @returns Types.Room | null
   */
  async contractRoom(variables: { contractId: string }): Promise<Types.Room | null> {
    return queries.contractRoom(this.client, variables)
  }

  /**
   * offerRoom
   * @param variables - Operation variables
   * @returns Types.Room | null
   */
  async offerRoom(variables: { offerId: string }): Promise<Types.Room | null> {
    return queries.offerRoom(this.client, variables)
  }

  /**
   * snapshotsByContractId
   * @param variables - Operation variables
   * @returns Array<Types.Snapshot> | null
   */
  async snapshotsByContractId(variables: {
    input: Types.SnapshotsByContractIdInput
  }): Promise<Array<Types.Snapshot> | null> {
    return queries.snapshotsByContractId(this.client, variables)
  }

  /**
   * workDiaryContract
   * @param variables - Operation variables
   * @returns Types.WorkDiaryContract | null
   */
  async workDiaryContract(variables: {
    workDiaryContractInput: Types.WorkDiaryContractInput
  }): Promise<Types.WorkDiaryContract | null> {
    return queries.workDiaryContract(this.client, variables)
  }

  // Mutations
  /**
   * withdrawOffer
   * @param variables - Operation variables
   * @returns boolean
   */
  async withdrawOffer(variables: { input: Types.WithdrawOfferInput }): Promise<boolean> {
    return mutations.withdrawOffer(this.client, variables)
  }

  /**
   * createOffer
   * @param variables - Operation variables
   * @returns Types.OfferCreationResponse | null
   */
  async createOffer(variables: {
    offerInput: Types.CreationOfferInput
  }): Promise<Types.OfferCreationResponse | null> {
    return mutations.createOffer(this.client, variables)
  }

  /**
   * pauseContract
   * @param variables - Operation variables
   * @returns Types.ContractActionResponse | null
   */
  async pauseContract(variables: {
    contractId: string
    message?: string
  }): Promise<Types.ContractActionResponse | null> {
    return mutations.pauseContract(this.client, variables)
  }

  /**
   * restartContract
   * @param variables - Operation variables
   * @returns Types.ContractActionResponse | null
   */
  async restartContract(variables: {
    contractId: string
    message?: string
  }): Promise<Types.ContractActionResponse | null> {
    return mutations.restartContract(this.client, variables)
  }

  /**
   * updateContractHourlyLimit
   * @param variables - Operation variables
   * @returns Types.ContractActionResponse | null
   */
  async updateContractHourlyLimit(variables: {
    contractId: string
    updateHourlyLimitRequest?: Types.UpdateHourlyLimitRequestInput
  }): Promise<Types.ContractActionResponse | null> {
    return mutations.updateContractHourlyLimit(this.client, variables)
  }

  /**
   * assignTeamActivityToTheContract
   * @param variables - Operation variables
   * @returns Types.ProcessUpdateResponse | null
   */
  async assignTeamActivityToTheContract(variables: {
    orgId: string
    teamId?: string
    contractId: string
    codes: Array<string>
  }): Promise<Types.ProcessUpdateResponse | null> {
    return mutations.assignTeamActivityToTheContract(this.client, variables)
  }
}

/**
 * Search domain operations
 */
export class SearchDomain {
  constructor(private client: UpworkGraphQLClient) {}

  // Queries
  /**
   * ontologyElementsSearchByPrefLabel
   * @param variables - Operation variables
   * @returns Array<Types.OntologyEntity>
   */
  async ontologyElementsSearchByPrefLabel(
    variables: { filter?: Types.OntologyElementsSearchByPrefLabelFilter } = {}
  ): Promise<Array<Types.OntologyEntity>> {
    return queries.ontologyElementsSearchByPrefLabel(this.client, variables)
  }

  /**
   * ontologyEntitySearchRecords
   * @param variables - Operation variables
   * @returns Array<Types.OntologyEntitySearchRecord>
   */
  async ontologyEntitySearchRecords(variables: {
    filter: Types.OntologyEntitySearchFilter
  }): Promise<Array<Types.OntologyEntitySearchRecord>> {
    return queries.ontologyEntitySearchRecords(this.client, variables)
  }

  /**
   * search
   * @returns Types.Search | null
   */
  async search(variables?: Record<string, never>): Promise<Types.Search | null> {
    return queries.search(this.client, variables)
  }
}

/**
 * Proposals domain operations
 */
export class ProposalsDomain {
  constructor(private client: UpworkGraphQLClient) {}

  // Queries
  /**
   * proposalMetadata
   * @returns Types.ProposalMetadata | null
   */
  async proposalMetadata(
    variables?: Record<string, never>
  ): Promise<Types.ProposalMetadata | null> {
    return queries.proposalMetadata(this.client, variables)
  }

  /**
   * vendorProposal
   * @param variables - Operation variables
   * @returns Types.VendorProposal | null
   */
  async vendorProposal(variables: { id: string }): Promise<Types.VendorProposal | null> {
    return queries.vendorProposal(this.client, variables)
  }

  /**
   * vendorProposals
   * @param variables - Operation variables
   * @returns Types.VendorProposalsConnection
   */
  async vendorProposals(variables: {
    filter: Types.VendorProposalFilter
    sortAttribute: Types.VendorProposalSortAttribute
    pagination: Types.Pagination
  }): Promise<Types.VendorProposalsConnection> {
    return queries.vendorProposals(this.client, variables)
  }

  /**
   * proposalRoom
   * @param variables - Operation variables
   * @returns Types.Room
   */
  async proposalRoom(variables: { vendorProposalId: string }): Promise<Types.Room> {
    return queries.proposalRoom(this.client, variables)
  }
}

/**
 * Users domain operations
 */
export class UsersDomain {
  constructor(private client: UpworkGraphQLClient) {}

  // Queries
  /**
   * clientProposal
   * @param variables - Operation variables
   * @returns Types.ClientProposal | null
   */
  async clientProposal(variables: { id: string }): Promise<Types.ClientProposal | null> {
    return queries.clientProposal(this.client, variables)
  }

  /**
   * clientProposals
   * @param variables - Operation variables
   * @returns Types.ClientProposalsConnection | null
   */
  async clientProposals(variables: {
    jobPostingId: string
    filter?: Types.ClientProposalFilter
    sortAttribute?: Types.ClientProposalSortAttribute
    pagination?: Types.Pagination
  }): Promise<Types.ClientProposalsConnection | null> {
    return queries.clientProposals(this.client, variables)
  }

  /**
   * freelancerProfileSearchRecords
   * @param variables - Operation variables
   * @returns Types.FreelancerProfilesSearchRecordsConnection | null
   */
  async freelancerProfileSearchRecords(variables: {
    searchFilter: Types.FreelancerProfileSearchFilter
    pagination: Types.Pagination
  }): Promise<Types.FreelancerProfilesSearchRecordsConnection | null> {
    return queries.freelancerProfileSearchRecords(this.client, variables)
  }

  /**
   * talentProfile
   * @param variables - Operation variables
   * @returns Types.TalentProfileList | null
   */
  async talentProfile(variables: {
    personId: string
    primary?: boolean
  }): Promise<Types.TalentProfileList | null> {
    return queries.talentProfile(this.client, variables)
  }

  /**
   * talentProfileByProfileKey
   * @param variables - Operation variables
   * @returns Types.TalentProfile | null
   */
  async talentProfileByProfileKey(variables: {
    profileKey: string
  }): Promise<Types.TalentProfile | null> {
    return queries.talentProfileByProfileKey(this.client, variables)
  }

  /**
   * talentProfiles
   * @param variables - Operation variables
   * @returns Types.TalentProfileList
   */
  async talentProfiles(variables: {
    personIds: Array<string>
    profileIds?: Array<string>
  }): Promise<Types.TalentProfileList> {
    return queries.talentProfiles(this.client, variables)
  }

  /**
   * talentSpecializedProfile
   * @param variables - Operation variables
   * @returns Types.TalentProfileList | null
   */
  async talentSpecializedProfile(variables: {
    personId: string
    profileId: string
  }): Promise<Types.TalentProfileList | null> {
    return queries.talentSpecializedProfile(this.client, variables)
  }

  /**
   * talentSpecializedProfiles
   * @param variables - Operation variables
   * @returns Types.TalentProfileList | null
   */
  async talentSpecializedProfiles(variables: {
    personIds: Array<string>
    profileIds: Array<string>
  }): Promise<Types.TalentProfileList | null> {
    return queries.talentSpecializedProfiles(this.client, variables)
  }

  /**
   * freelancerProfileByProfileKey
   * @param variables - Operation variables
   * @returns Types.FreelancerProfile
   */
  async freelancerProfileByProfileKey(variables: {
    profileKey: string
  }): Promise<Types.FreelancerProfile> {
    return queries.freelancerProfileByProfileKey(this.client, variables)
  }

  /**
   * freelancerVisibility
   * @param variables - Operation variables
   * @returns Types.FreelancerVisibility | null
   */
  async freelancerVisibility(
    variables: { id?: string } = {}
  ): Promise<Types.FreelancerVisibility | null> {
    return queries.freelancerVisibility(this.client, variables)
  }

  /**
   * organization
   * @returns Types.CurrentOrganization | null
   */
  async organization(variables?: Record<string, never>): Promise<Types.CurrentOrganization | null> {
    return queries.organization(this.client, variables)
  }

  /**
   * user
   * @returns Types.CurrentUser | null
   */
  async user(variables?: Record<string, never>): Promise<Types.CurrentUser | null> {
    return queries.user(this.client, variables)
  }

  /**
   * userDetails
   * @param variables - Operation variables
   * @returns Types.PiiUser
   */
  async userDetails(variables: { id: string }): Promise<Types.PiiUser> {
    return queries.userDetails(this.client, variables)
  }

  /**
   * userIdsByEmail
   * @param variables - Operation variables
   * @returns Types.UserIdsByEmailResponse | null
   */
  async userIdsByEmail(variables: { email: string }): Promise<Types.UserIdsByEmailResponse | null> {
    return queries.userIdsByEmail(this.client, variables)
  }

  // Mutations
  /**
   * endContractByFreelancer
   * @param variables - Operation variables
   * @returns Types.ContractActionResponse | null
   */
  async endContractByFreelancer(variables: {
    contractId: string
    input: Types.EndContractInput
  }): Promise<Types.ContractActionResponse | null> {
    return mutations.endContractByFreelancer(this.client, variables)
  }

  /**
   * endContractByClient
   * @param variables - Operation variables
   * @returns Types.ContractActionResponse | null
   */
  async endContractByClient(variables: {
    contractId: string
    input: Types.EndContractInput
  }): Promise<Types.ContractActionResponse | null> {
    return mutations.endContractByClient(this.client, variables)
  }

  /**
   * createDirectUploadLinkForJAClientProposal
   * @param variables - Operation variables
   * @returns Types.FileInfo
   */
  async createDirectUploadLinkForJAClientProposal(variables: {
    input: Types.CreateDirectUploadLinkInput
  }): Promise<Types.FileInfo> {
    return mutations.createDirectUploadLinkForJAClientProposal(this.client, variables)
  }

  /**
   * declineClientProposal
   * @param variables - Operation variables
   * @returns Types.UpdateClientProposalResult
   */
  async declineClientProposal(
    variables: { clientProposalDeclineRequest?: Types.ClientProposalDeclineRequest } = {}
  ): Promise<Types.UpdateClientProposalResult> {
    return mutations.declineClientProposal(this.client, variables)
  }

  /**
   * hideClientProposal
   * @param variables - Operation variables
   * @returns Types.UpdateClientProposalResult
   */
  async hideClientProposal(variables: {
    clientProposalHideRequest: Types.ClientProposalHideRequest
  }): Promise<Types.UpdateClientProposalResult> {
    return mutations.hideClientProposal(this.client, variables)
  }

  /**
   * markClientProposalAsRead
   * @param variables - Operation variables
   * @returns Types.UpdateClientProposalResult
   */
  async markClientProposalAsRead(
    variables: { clientProposalReadRequest?: Types.ClientProposalReadRequest } = {}
  ): Promise<Types.UpdateClientProposalResult> {
    return mutations.markClientProposalAsRead(this.client, variables)
  }

  /**
   * messageClientProposal
   * @param variables - Operation variables
   * @returns Types.UpdateClientProposalResult
   */
  async messageClientProposal(
    variables: { clientProposalMessageRequest?: Types.ClientProposalMessageRequest } = {}
  ): Promise<Types.UpdateClientProposalResult> {
    return mutations.messageClientProposal(this.client, variables)
  }

  /**
   * shortlistClientProposal
   * @param variables - Operation variables
   * @returns Types.UpdateClientProposalResult
   */
  async shortlistClientProposal(
    variables: { clientProposalShortlistRequest?: Types.ClientProposalShortlistRequest } = {}
  ): Promise<Types.UpdateClientProposalResult> {
    return mutations.shortlistClientProposal(this.client, variables)
  }

  /**
   * addFreelancerEmploymentRecord
   * @param variables - Operation variables
   * @returns Types.FreelancerProfileEmploymentRecord | null
   */
  async addFreelancerEmploymentRecord(variables: {
    input: Types.CreateEmploymentRecordInput
  }): Promise<Types.FreelancerProfileEmploymentRecord | null> {
    return mutations.addFreelancerEmploymentRecord(this.client, variables)
  }

  /**
   * addFreelancerLanguage
   * @param variables - Operation variables
   * @returns Types.FreelancerProfileLanguage | null
   */
  async addFreelancerLanguage(variables: {
    input: Types.FreelancerLanguageInput
  }): Promise<Types.FreelancerProfileLanguage | null> {
    return mutations.addFreelancerLanguage(this.client, variables)
  }

  /**
   * addFreelancerOtherExperience
   * @param variables - Operation variables
   * @returns Types.FreelancerProfileOtherExperience | null
   */
  async addFreelancerOtherExperience(variables: {
    input: Types.OtherExperienceInput
  }): Promise<Types.FreelancerProfileOtherExperience | null> {
    return mutations.addFreelancerOtherExperience(this.client, variables)
  }

  /**
   * addUserToRoom
   * @param variables - Operation variables
   * @returns boolean
   */
  async addUserToRoom(variables: {
    roomId: string
    roomUsers: Array<Types.RoomUserInput>
  }): Promise<boolean> {
    return mutations.addUserToRoom(this.client, variables)
  }

  /**
   * createOrganization
   * @param variables - Operation variables
   * @returns Types.AccountProcessInstance
   */
  async createOrganization(variables: {
    input: Types.CreateOrganizationInput
  }): Promise<Types.AccountProcessInstance> {
    return mutations.createOrganization(this.client, variables)
  }

  /**
   * removeFreelancerEmploymentRecord
   * @param variables - Operation variables
   * @returns boolean | null
   */
  async removeFreelancerEmploymentRecord(variables: {
    id: string
    userId: string
  }): Promise<boolean | null> {
    return mutations.removeFreelancerEmploymentRecord(this.client, variables)
  }

  /**
   * removeFreelancerLanguage
   * @param variables - Operation variables
   * @returns boolean | null
   */
  async removeFreelancerLanguage(variables: {
    userId: string
    iso639Code: string
  }): Promise<boolean | null> {
    return mutations.removeFreelancerLanguage(this.client, variables)
  }

  /**
   * removeFreelancerOtherExperience
   * @param variables - Operation variables
   * @returns boolean | null
   */
  async removeFreelancerOtherExperience(variables: { id: string }): Promise<boolean | null> {
    return mutations.removeFreelancerOtherExperience(this.client, variables)
  }

  /**
   * removeUserFromRoom
   * @param variables - Operation variables
   * @returns boolean
   */
  async removeUserFromRoom(variables: {
    roomId: string
    userId: string
    orgId: string
  }): Promise<boolean> {
    return mutations.removeUserFromRoom(this.client, variables)
  }

  /**
   * updateFreelancerAvailability
   * @param variables - Operation variables
   * @returns Types.FreelancerProfileAvailability | null
   */
  async updateFreelancerAvailability(variables: {
    input: Types.FreelancerProfileAvailabilityInput
  }): Promise<Types.FreelancerProfileAvailability | null> {
    return mutations.updateFreelancerAvailability(this.client, variables)
  }

  /**
   * updateFreelancerEmploymentRecord
   * @param variables - Operation variables
   * @returns Types.FreelancerProfileEmploymentRecord | null
   */
  async updateFreelancerEmploymentRecord(variables: {
    input: Types.UpdateEmploymentRecordInput
  }): Promise<Types.FreelancerProfileEmploymentRecord | null> {
    return mutations.updateFreelancerEmploymentRecord(this.client, variables)
  }

  /**
   * updateFreelancerOtherExperience
   * @param variables - Operation variables
   * @returns Types.FreelancerProfileOtherExperience | null
   */
  async updateFreelancerOtherExperience(variables: {
    input: Types.UpdateOtherExperienceInput
  }): Promise<Types.FreelancerProfileOtherExperience | null> {
    return mutations.updateFreelancerOtherExperience(this.client, variables)
  }

  /**
   * updateOrganization
   * @param variables - Operation variables
   * @returns Types.AccountProcessInstance
   */
  async updateOrganization(variables: {
    input: Types.UpdateOrganizationInput
  }): Promise<Types.AccountProcessInstance> {
    return mutations.updateOrganization(this.client, variables)
  }
}

/**
 * Timesheets domain operations
 */
export class TimesheetsDomain {
  constructor(private client: UpworkGraphQLClient) {}

  // Queries
  /**
   * timeReport
   * @param variables - Operation variables
   * @returns Array<Types.TimeReport>
   */
  async timeReport(
    variables: { filter?: Types.TimeReportFilter } = {}
  ): Promise<Array<Types.TimeReport>> {
    return queries.timeReport(this.client, variables)
  }

  /**
   * workDiaryCompany
   * @param variables - Operation variables
   * @returns Types.WorkDiaryCompany | null
   */
  async workDiaryCompany(variables: {
    workDiaryCompanyInput: Types.WorkDiaryCompanyInput
  }): Promise<Types.WorkDiaryCompany | null> {
    return queries.workDiaryCompany(this.client, variables)
  }
}

/**
 * Payments domain operations
 */
export class PaymentsDomain {
  constructor(private client: UpworkGraphQLClient) {}

  // Queries
  /**
   * transactionHistory
   * @param variables - Operation variables
   * @returns Types.TransactionHistory | null
   */
  async transactionHistory(
    variables: { transactionHistoryFilter?: Types.TransactionHistoryFilter } = {}
  ): Promise<Types.TransactionHistory | null> {
    return queries.transactionHistory(this.client, variables)
  }

  // Mutations
  /**
   * sendCustomPayment
   * @param variables - Operation variables
   * @returns Types.CustomPaymentResponse | null
   */
  async sendCustomPayment(
    variables: { input?: Types.CustomPaymentInput } = {}
  ): Promise<Types.CustomPaymentResponse | null> {
    return mutations.sendCustomPayment(this.client, variables)
  }
}

/**
 * Messages domain operations
 */
export class MessagesDomain {
  constructor(private client: UpworkGraphQLClient) {}

  // Queries
  /**
   * oneOnOneRoom
   * @param variables - Operation variables
   * @returns Types.Room | null
   */
  async oneOnOneRoom(variables: {
    userId: string
    organizationId: string
  }): Promise<Types.Room | null> {
    return queries.oneOnOneRoom(this.client, variables)
  }

  /**
   * publicRooms
   * @param variables - Operation variables
   * @returns Types.RoomConnection
   */
  async publicRooms(
    variables: { pagination?: Types.Pagination } = {}
  ): Promise<Types.RoomConnection> {
    return queries.publicRooms(this.client, variables)
  }

  /**
   * room
   * @param variables - Operation variables
   * @returns Types.Room
   */
  async room(variables: { id: string }): Promise<Types.Room> {
    return queries.room(this.client, variables)
  }

  /**
   * roomList
   * @param variables - Operation variables
   * @returns Types.RoomConnection
   */
  async roomList(
    variables: {
      filter?: Types.RoomFilter
      pagination?: Types.Pagination
      sortOrder?: Types.SortOrder
    } = {}
  ): Promise<Types.RoomConnection> {
    return queries.roomList(this.client, variables)
  }

  /**
   * roomStories
   * @param variables - Operation variables
   * @returns Types.RoomStoryConnection | null
   */
  async roomStories(
    variables: { filter?: Types.RoomStoryFilter } = {}
  ): Promise<Types.RoomStoryConnection | null> {
    return queries.roomStories(this.client, variables)
  }

  /**
   * roomStory
   * @param variables - Operation variables
   * @returns Types.RoomStory | null
   */
  async roomStory(variables: { roomId: string; storyId: string }): Promise<Types.RoomStory | null> {
    return queries.roomStory(this.client, variables)
  }

  // Mutations
  /**
   * archiveRoom
   * @param variables - Operation variables
   * @returns Types.Room
   */
  async archiveRoom(variables: { roomId: string }): Promise<Types.Room> {
    return mutations.archiveRoom(this.client, variables)
  }

  /**
   * createRoomStoryV2
   * @param variables - Operation variables
   * @returns Types.RoomStory
   */
  async createRoomStoryV2(variables: {
    input: Types.RoomStoryCreateInputV2
  }): Promise<Types.RoomStory> {
    return mutations.createRoomStoryV2(this.client, variables)
  }

  /**
   * createRoomV2
   * @param variables - Operation variables
   * @returns Types.Room
   */
  async createRoomV2(variables: { input: Types.RoomCreateInputV2 }): Promise<Types.Room> {
    return mutations.createRoomV2(this.client, variables)
  }

  /**
   * removeRoom
   * @param variables - Operation variables
   * @returns string
   */
  async removeRoom(variables: { roomId: string }): Promise<string> {
    return mutations.removeRoom(this.client, variables)
  }

  /**
   * removeRoomStory
   * @param variables - Operation variables
   * @returns string
   */
  async removeRoomStory(variables: { roomId: string; storyId: string }): Promise<string> {
    return mutations.removeRoomStory(this.client, variables)
  }

  /**
   * roomCreate1on1IfNotExists
   * @param variables - Operation variables
   * @returns Types.Room
   */
  async roomCreate1on1IfNotExists(variables: {
    userId: string
    orgId: string
  }): Promise<Types.Room> {
    return mutations.roomCreate1on1IfNotExists(this.client, variables)
  }

  /**
   * updateRoomStoryV2
   * @param variables - Operation variables
   * @returns Types.UpdateRoomStoryResponse
   */
  async updateRoomStoryV2(variables: {
    input: Types.RoomStoryUpdateInputV2
  }): Promise<Types.UpdateRoomStoryResponse> {
    return mutations.updateRoomStoryV2(this.client, variables)
  }

  /**
   * updateRoomV2
   * @param variables - Operation variables
   * @returns Types.Room
   */
  async updateRoomV2(variables: { input?: Types.RoomUpdateInputV2 } = {}): Promise<Types.Room> {
    return mutations.updateRoomV2(this.client, variables)
  }
}
/**
 * Generated Upwork API Client with domain-grouped methods
 */
export class GeneratedUpworkClient {
  private client: UpworkGraphQLClient

  public jobs: JobsDomain
  public other: OtherDomain
  public metadata: MetadataDomain
  public contracts: ContractsDomain
  public search: SearchDomain
  public proposals: ProposalsDomain
  public users: UsersDomain
  public timesheets: TimesheetsDomain
  public payments: PaymentsDomain
  public messages: MessagesDomain

  constructor(client: UpworkGraphQLClient) {
    this.client = client
    this.jobs = new JobsDomain(this.client)
    this.other = new OtherDomain(this.client)
    this.metadata = new MetadataDomain(this.client)
    this.contracts = new ContractsDomain(this.client)
    this.search = new SearchDomain(this.client)
    this.proposals = new ProposalsDomain(this.client)
    this.users = new UsersDomain(this.client)
    this.timesheets = new TimesheetsDomain(this.client)
    this.payments = new PaymentsDomain(this.client)
    this.messages = new MessagesDomain(this.client)
  }
}
