/**
 * Auto-generated TypeScript types from Upwork GraphQL API
 * Generated on: 2026-01-20T11:50:36.991Z
 * Total types: 642
 */

/** Reason why access is restricted for a user */
export interface AccessRestictionReason {}

/** Access type for job posting visibility */
export interface AccessType {}

/** Account audit record */
export interface AccountAuditRecord {
  /** Process instace Id */
  processInstanceId: string
  /** Status */
  status?: string
  /** Metadata */
  metadata: Array<StringMapElement>
}

/** Account entity */
export interface AccountingEntity {
  /** Unique identifier for the accounting entity */
  id: string
}

/** Account process instance */
export interface AccountProcessInstance {
  /** Unique Id */
  id?: string
  /** Success flag */
  success: boolean
}

/** Input for activating a milestone */
export interface ActivateMilestoneInput {
  /** Milestone ID */
  id: string
  /** Attached message */
  message?: string
}

/** Paginated collection of activities */
export interface ActivitiesConnection {
  /** Defines total amount of activities */
  totalCount?: number
  /** Defines list of activities */
  edges: Array<ActivityEdge>
  /** Defines page information */
  page?: Page
}

/** Represents a task/activity available for time tracking */
export interface Activity {
  /** Defines the total number of associated contracts
                          Example: "0" */
  totalContracts: number
  /** Defines associated URL */
  url?: string
  /** Defines code order
                          Example: "team_task_01" */
  codeOrder?: string
  /** Defines activity status
                          Example: "active" */
  status: string
  /** Defines activity level
                          Example: "team" */
  level?: string
  /** Defines list of related contracts
                          Example: "[12345, 67890]" */
  contracts?: Array<ActivityContract>
  /** Defines the user, which the activity is assigned to */
  userId?: string
  /** Defines activity code */
  code: string
  /** Defines the exact time when the activity was created
                          Example: "2023-01-16 09:12:57" */
  createdTime?: string
  /** Defines the company ID, which the activity belongs to
                          Example: "mycompanyid" */
  companyId?: string
  /** Defines unique record ID */
  recordId: string
  /** Defines the team ID, which the activity belongs to
                          Example: "myteamid" */
  teamId?: string
  /** Defines activity description
                          Example: "my test activity" */
  description?: string
}

/** Link between an activity and a contract */
export interface ActivityContract {
  /** Defines contract ID
                          Example: "12345" */
  contractId: string
}

/** Edge wrapper containing an activity node for pagination */
export interface ActivityEdge {
  /** Defines activity node */
  node?: Activity
}

export interface ActivityFilterInput {
  /** Filter activities assigned to a specific contract */
  contractId?: string
  /** Search term to filter tasks by code and description */
  search?: string
  /** Filter activities by status */
  status?: string
  /** Amount of contracts to return */
  detailsLimit?: number
}

/** Actor in the offer workflow */
export interface Actor {
  /** User unique identifier */
  user: string
  /** Team organization unique identifier */
  team?: string
  /** Type of the actor */
  actorType?: ActorType
}

/** Actor type in offer workflow */
export interface ActorType {}

/** Defines activity object that is going to be created */
export interface AddTeamActivityRequest {
  /** An activity tracking code (this defines the activity tracking code) */
  code: string
  /** The description of the code being added */
  description: string
  /** List of associated contracts */
  contractIds: Array<string>
  /** The budget for the activity */
  budget?: number
  /** The level of the activity */
  batchAssignment?: BatchAssignmentOptions
}

/** Agency profile details */
export interface AgencyDetails {
  /** Whether the agency is vetted */
  vetted?: boolean
  /** Top Rated status */
  topRatedStatus?: string
  /** Top Rated Plus status */
  topRatedPlusStatus?: string
}

/** Agreement kind */
export interface AgreementKind {}

/** Statistics of bids on a job posting */
export interface ApplicationsBidStats {
  /** Average bid rate */
  avgRateBid?: Money
  /** Minimum bid rate */
  minRateBid?: Money
  /** Maximum bid rate */
  maxRateBid?: Money
  /** Average bid rate for interviewed candidates */
  avgInterviewedRateBid?: Money
}

/** Input for approving a milestone */
export interface ApproveMilestoneInput {
  /** Milestone ID */
  id: string
  /** Amount is in cents. For example 1000 represents 10 USD */
  paidAmount: string
  /** Amount is in cents. For example 1000 represents 10 USD */
  bonusAmount?: string
  /** A comment attached to the payment */
  paymentComment?: string
  /** The reason for underpayment */
  underpaymentReason?: string
  /** Note to contractor */
  noteToContractor?: string
}

/** Geographic area element */
export interface Area {
  /** Area identifier */
  id: string
  /** Type of area (city, postal code, etc.) */
  areaType?: AreaType
  /** Area name */
  name?: string
}

/** Geographic area filter by coordinates */
export interface AreaFilter {
  /** Latitude coordinate */
  latitude: number
  /** Longitude coordinate */
  longitude: number
  /** Search radius in miles */
  radius: number
}

/** Geographic area type */
export interface AreaType {}

/** Type to represent both entity creation and modified time */
export interface AuditTime {
  /** Creation date time formatted according to ISO-8601 */
  createdDateTime?: string
  /** Modified date time formatted according to ISO-8601 */
  modifiedDateTime?: string
}

/** Auto review status for job postings */
export interface AutoReviewStatus {}

/** Sources of availability updates for a freelancer */
export interface AvailabilitySource {}

/** Scope availability levels for GraphQL fields and types */
export interface AvailableScope {}

/** Assignment scope options for activities */
export interface BatchAssignmentOptions {}

/** Billing relationship type for organizations */
export interface BillingType {}

/** Billing rate information for a time report */
export interface BillRate {
  /** Bill rate id */
  id: string
  /** Bill rate value */
  value: number
  /** Bill rate code */
  code: string
  /** Offer reference id of the bill rate */
  offerRef: string
}

/** Built-in Boolean */
export interface Boolean {}

/** Filter for BPA (Billing Platform API) private data */
export interface BPAPrivateDataFilter {
  /** Filter by service name */
  serviceName_eq?: string
  /** Filter by service version */
  serviceVersion_eq?: string
}

export interface CategoryServicesResponse {
  /** List of category occupations */
  categories: Array<Occupation>
  /** Map of categories to their services */
  categoryServices: Array<StringMapOccupation>
}

/** Individual time tracking cell representing a 10-minute work segment */
export interface Cell {
  /** Unix timestamp of the cell */
  timestamp: number
  /** Date of the cell */
  date: string
  /** Whether time was manually logged */
  manual: boolean
  /** Whether this is overtime work */
  overtime: boolean
  /** Optional memo or note for this time entry */
  memo?: string
}

/** Client's feedback details */
export interface ClientFeedback {
  /** Numeric rating provided by the client */
  score?: number
  /** Client's written comment */
  comment?: string
  /** Freelancer's response to the client's feedback */
  freelancerResponse?: string
}

/** Input for creating client job invitation */
export interface ClientJobInvitationCreateRequestInput {
  /** ID of the associated job */
  jobPostingId: string
  /** Invitation letter from client */
  invitationLetter?: string
  /** Freelancer ID */
  freelancerId: string
}

/** Client proposal */
export interface ClientProposal {
  /** implements Proposal { Client proposal identifier */
  id: string
  /** Vendor who will be physically working on the job if accepted */
  user: GenericUser
  /** Organization the vendor user belongs to */
  organization: GenericOrganization
  /** Job for which vendor has applied */
  job: MarketplaceJobPosting
  /** Terms on which vendor applied */
  terms?: ProposalTerms
  /** Cover letter to accompany the proposal */
  coverLetter?: string
  /** Project plan consisting of milestones defined by vendor */
  projectPlan?: ProposalProjectPlan
  /** Information used to audit changes in proposals */
  auditDetails: ProposalAuditDetails
  /** Status of the client proposal */
  status: ClientProposalStatus
  /** Annotations of the client proposal */
  annotations: Array<ClientProposalAnnotation>
}

/** Annotation tags for client proposals */
export interface ClientProposalAnnotation {}

/** Client proposal decline request */
export interface ClientProposalDeclineRequest {
  /** Proposal identifier to be declined */
  proposalId: string
  /** Job posting identifier of the proposal */
  jobPostingId: string
  /** Identifier of the reason from the available reasons */
  reason?: string
  /** Other reason if not available in the list */
  otherReason?: string
  /** Optional message to the freelancer */
  message?: string
}

/** Freelancer earnings amount filter options */
export interface ClientProposalEarnedAmount {}

/** English proficiency level filter options */
export interface ClientProposalEnglishProficiency {}

/** Filter criteria for searching client proposals */
export interface ClientProposalFilter {
  /** Filter by proposal status */
  status_eq?: ClientProposalStatusName
  /** Filter by annotation */
  annotations_eq?: ClientProposalAnnotation
  /** Filter by freelancer identifier */
  freelancerId_eq?: string
  /** Filter by hourly rate range */
  chargeRate_eq?: ClientProposalHourlyRate
  /** Filter by last activity period */
  activityDays_eq?: ClientProposalLastActivity
  /** Filter by category name */
  category_eq?: string
  /** Filter by job success score range */
  jobSuccessScore_eq?: ClientProposalJobSuccessSocre
  /** Filter by earnings amount range */
  earnings_eq?: ClientProposalEarnedAmount
  /** Filter by hours billed range */
  billedHours_eq?: ClientProposalHoursBilled
  /** Filter by talent type */
  applierType_eq?: ClientProposalTalentType
  /** Filter by top rated status */
  topRated_eq?: ClientProposalRatedType
  /** Filter by English proficiency level */
  englishLevel_eq?: ClientProposalEnglishProficiency
  /** Filter by freelancer title */
  title_eq?: string
  /** Full text search query */
  textQuery_eq?: string
  /** Filter by countries */
  country_any: Array<string>
  /** Filter by regions */
  region_any: Array<string>
  /** Filter by languages */
  languages_any: Array<string>
  /** Filter by ontology occupation identifier */
  occupationId?: string
}

/** Client proposal hide request */
export interface ClientProposalHideRequest {
  /** Client proposal identifier */
  proposalId: string
  /** Job posting identifier of the proposal */
  jobPostingId: string
  /** Whether to hide the proposal */
  hide: boolean
  /** Reason for hiding the proposal */
  hideReason?: string
  /** Hide by client reason identifier */
  hideByClientReasonId?: string
}

/** Freelancer hourly rate filter options */
export interface ClientProposalHourlyRate {}

/** Freelancer hours billed filter options */
export interface ClientProposalHoursBilled {}

/** Job success score filter options */
export interface ClientProposalJobSuccessSocre {}

/** Freelancer last activity period filter options */
export interface ClientProposalLastActivity {}

/** Client proposal message request */
export interface ClientProposalMessageRequest {
  /** Client proposal identifier */
  proposalId: string
  /** Job posting identifier of the proposal */
  jobPostingId: string
  /** Message to send to the freelancer */
  message: string
}

/** Freelancer rating tier filter options */
export interface ClientProposalRatedType {}

/** Client proposal read request */
export interface ClientProposalReadRequest {
  /** Client proposal identifier */
  proposalId: string
  /** Job posting identifier of the proposal */
  jobPostingId: string
}

/** Connection to the client proposal list */
export interface ClientProposalsConnection {
  /** Total number of client proposals matching filters */
  totalCount?: number
  /** Edges containing client proposals and cursors */
  edges?: Array<ClientProposalsEdge>
  pageInfo?: PageInfo
}

/** Edge in client proposals connection */
export interface ClientProposalsEdge {
  /** Cursor for pagination */
  cursor: string
  /** Client proposal node */
  node?: ClientProposal
}

/** Client proposal shortlist request */
export interface ClientProposalShortlistRequest {
  /** Client proposal identifier */
  proposalId: string
  /** Job posting identifier of the proposal */
  jobPostingId: string
  /** Whether the proposal is shortlisted */
  shortlisted: boolean
}

/** Sorting configuration for client proposals */
export interface ClientProposalSortAttribute {
  /** Attribute to sort client proposals by */
  field: ClientProposalSortAttributeType
  /** Sorting order */
  sortOrder: SortOrder
}

/** Sortable attributes for client proposals */
export interface ClientProposalSortAttributeType {}

/** Client proposal status */
export interface ClientProposalStatus {
  /** Status of the proposal */
  status: ClientProposalStatusName
  /** Reason for proposal to switch to current status. Applicable for declined or withdrawn proposals. */
  reason?: ProposalReason
}

/** Status names for client proposals */
export interface ClientProposalStatusName {}

/** Talent type filter options */
export interface ClientProposalTalentType {}

/** Client identity verification status codes */
export interface ClientVerificationStatus {}

/** Reason why a contract was closed */
export interface ClosingReason {
  /** Reason identifier (UID) */
  id: string
  /** External API reference code */
  apiRef?: string
  /** Human-readable reason text */
  reason?: string
}

/** Public and private company info bundle */
export interface CompanyInfo {
  /** Public-facing company information */
  public?: PublicCompanyInfo
  /** Private/internal company information */
  private?: PrivateCompanyInfo
}

/** Filter input based on status and access type for job search */
export interface CompanyJobPostingStatusAccess {
  /** Job posting statuses to filter by */
  statuses_any: Array<JobPostingStatus>
  /** Access types to filter by */
  accesses_any: Array<AccessType>
}

/** Company selector provides information on companies that user can select */
export interface CompanySelector {
  /** List of items available in company selector for the current user */
  items: Array<CompanySelectorItem>
}

/** Item available in company selector. Please, note that this structure uses terms that might be similar to terms used in other cases. However, fields of this structure are only used to build company selector and are not meant to be used otherwise. */
export interface CompanySelectorItem {
  /** The title of this item. May or may not be the same as the organization"s name. */
  title: string
  /** The URL of the thumbnail image for this item. May or may not be the same as the organization"s photo URL. */
  photoUrl?: string
  /** The UID of the organization this item refers to. Only used to construct links on UI */
  organizationId: string
  /** The RID of the organization. Used to construct links on the UI. */
  organizationRid?: string
  /** The type of the organization. */
  organizationType?: CompanySelectorOrganizationType
  /** The legacy type of the organization */
  organizationLegacyType?: CompanySelectorOrganizationLegacyType
  /** The enterprise type of the organization */
  organizationEnterpriseType?: CompanySelectorOrganizationEnterpriseType
  /** Is the organization a legacy enterprise organization. */
  legacyEnterpriseOrganization?: boolean
  /** Contains organization type like Agency or Client */
  typeTitle?: string
}

/** Enterprise type classification for organizations */
export interface CompanySelectorOrganizationEnterpriseType {}

/** Legacy organization type for company selector */
export interface CompanySelectorOrganizationLegacyType {}

/** Organization type for company selector */
export interface CompanySelectorOrganizationType {}

/** This schema represents contract data. Note: This is the legacy contract schema implementation, which has been modernized with the ContractDetails schema. */
export interface Contract {
  /** Primary key of the contract. Equivalent to the ID of the contract term in ContractDetails. */
  id: string
  /** Contract title */
  title?: string
  /** Type of contract (hourly, fixed, etc.) */
  contractType?: ContractType
  /** Job rid */
  job?: MarketplaceJobPosting
  /** Provider has agency */
  hasAgency?: boolean
  /** Associated offer */
  offer: Offer
  /** Client proposal associated with the contract */
  clientProposal?: ClientProposal
  /** Job Application associated with the contract */
  vendorProposal?: VendorProposal
  /** Weekly charge amount */
  weeklyChargeAmount?: Money
  /** Weekly hours limit */
  weeklyHoursLimit?: number
  /** Hourly charge rate */
  hourlyChargeRate?: Money
  /** Contract creation timestamp */
  createdDateTime?: string
  /** First contract start timestamp */
  firstContractStartDateTime?: string
  /** Last modification timestamp */
  modifiedDateTime?: string
  /** Contract start timestamp */
  startDateTime?: string
  /** Contract end timestamp */
  endDateTime?: string
  /** Whether manual time logging is allowed */
  manualTimeAllowed?: boolean
  /** Whether screenshots are hidden Will be removed in future release */
  hideScreenshots?: boolean
  /** Whether this is the last contract term */
  last?: boolean
  /** Weekly stipend hours */
  weeklyStipendHours?: number
  /** Estimated engagement duration Will be removed in future release */
  estimatedDuration?: ProposalEngagementDuration
  /** Current contract status */
  status?: ContractState
  /** Whether the contract is suspended Will be removed in future release, use developerSuspended/companySuspended in place */
  suspended?: boolean
  /** Freelancer profile */
  freelancer?: FreelancerProfile
  /** Whether the contract is paused */
  paused?: boolean
  /** Public company information */
  clientCompany?: PublicCompanyInfo
  /** Milestones associated with the offer */
  milestones?: Array<Milestone>
  /** Contract identifier */
  contractId?: string
  workDays: Array<WorkDay>
  timeRange: DateTimeRange
  /** work diary of the current contract */
  workDiaryTimeCells: Array<WorkDiaryTimeCell>
  date: string
  /** Contract feedback summary */
  feedback?: Feedback
}

export interface ContractActionResponse {
  /** Defines success status */
  success: boolean
}

/** Contract details including parties, terms, and metadata */
export interface ContractDetails {
  /** Unique contract identifier (UID) */
  id: string
  /** Contract title shown to users */
  title?: string
  /** Current lifecycle status of the contract */
  status?: ContractStatus
  /** Reason explaining why the contract was closed */
  closingReason?: ClosingReason
  /** Delivery model for this contract (e.g., marketplace, catalog) */
  deliveryModel?: DeliveryModel
  /** Contract kind/category (e.g., weekly retainer, payroll) */
  kind?: ContractKind
  /** Indicates if the contract belongs to a Private Talent Cloud */
  isPtc?: boolean
  /** Dates Contract creation date */
  createDate?: string
  /** Last modification date */
  modifyDate?: string
  /** Contract start date */
  startDate?: string
  /** Contract end date */
  endDate?: string
  /** Offer and opening Offer associated with the contract */
  offer?: Offer
  /** Offer identifier (UID) associated with the contract */
  offerId?: string
  /** Job posting associated with the contract */
  job: JobPosting
  /** Contract vendor/freelancer data Freelancer party on the contract */
  freelancer: ContractUser
  /** Vendor organization associated with the freelancer */
  vendorOrganization: GenericOrganization
  /** Vendor team organization associated with the freelancer */
  vendorTeam: GenericOrganization
  /** Contract client and agency data Client organization on the contract */
  clientOrganization: GenericOrganization
  /** Client team organization on the contract */
  clientTeam: GenericOrganization
  /** Hiring manager for the contract */
  hiringManager?: ContractUser
  /** Agency manager for the contract (if applicable) */
  agencyManager?: ContractUser
  /** Contract supervisor Current supervisor responsible for the contract */
  supervisor: ContractUser
  /** Contract changes Actor type of the last change (client, professional, system, etc.) */
  changingUserType?: CreatorType
  /** User who last changed the contract */
  changedBy?: ContractUser
  /** User who ended the contract (if ended) */
  endedBy?: ContractUser
  /** Additional metadata for the contract */
  metadata?: ContractMetadata
  /** Contract terms Weekly hourly limit history for the contract */
  hourlyLimits?: Array<HourlyLimit>
  /** Aggregated contract terms by engagement type */
  terms?: ContractTerms
  /** Project identifier (UID) associated with the contract */
  projectId?: string
}

/** Business model of the contract */
export interface ContractKind {}

/** List of contract details entries */
export interface ContractList {
  /** List of contract details */
  contracts?: Array<ContractDetails>
}

/** Additional metadata flags for a contract */
export interface ContractMetadata {
  /** Whether this is an agency contract */
  agencyContract?: boolean
}

/** Paginated collection of contract offers */
export interface ContractOfferConnection {
  /** Total number of results */
  totalCount?: number
  /** Connection edges */
  edges?: Array<ContractOfferEdge>
  /** Pagination information */
  pageInfo?: PageInfo
}

/** Edge wrapper containing a contract offer node */
export interface ContractOfferEdge {
  /** Pagination cursor */
  cursor: string
  /** Contract offer result node */
  node?: ContractOfferResult
}

/** Last event on contract offer */
export interface ContractOfferLastEvent {
  /** Reason identifier */
  reasonId?: string
  /** Event message */
  message?: string
  /** Last event timestamp */
  lastEventTime?: string
}

/** Legacy offer state values */
export interface ContractOfferLegacyState {}

/** An intermediate search result that contains common information about contract and offer. It contains connection to respective contract / offer additional fields. */
export interface ContractOfferResult {
  /** Result identifier */
  id: string
  /** Owner company */
  company: GenericOrganization
  /** Owner team */
  team: GenericOrganization
  /** Client side contact person for the offer */
  contactPerson: GenericUser
  /** Freelancer associated with the offer */
  freelancer: GenericUser
  /** Agency associated with the offer */
  agency?: GenericOrganization
  /** ContractOffer start date time */
  startDateTime: string
  /** ContractOffer end date time */
  endDateTime?: string
  /** Type of the offer */
  type: ContractOfferType
  /** Current state of the offer */
  state: ContractOfferState
  /** Current milestone state for fixed price offers */
  milestoneState?: OfferMilestoneState
  /** Status of the escrow refund */
  escrowRefundStatus?: EscrowRefundStatus
  /** Title of the offer */
  title: string
  /** Date Time when the offer updated for the last time */
  lastUpdatedDateTime: string
  /** Date Time when the offer was published */
  lastPublishedDateTime?: string
  /** Whether in PTC */
  inPrivateTalentCloud: boolean
  /** Date Time when the offer was created */
  offerCreatedDateTime: string
  /** Details of the associated Offer */
  offer?: Offer
  /** Details of the associated Contract. */
  contract?: Contract
  /** ContractDetails of the associated Contract */
  contractDetails?: ContractDetails
  /** Whether this is a catalog project */
  catalogProject?: boolean
}

/** Contract offer state */
export interface ContractOfferState {}

/** Contract offer terms version */
export interface ContractOfferTermsVersion {}

/** Contract offer type */
export interface ContractOfferType {}

/** Vendor type for contract offer */
export interface ContractOfferVendorType {}

/** Options controlling additional data in contract queries */
export interface ContractOptionsInput {
  /** Flag to add terms to result or not, default false, optional */
  addTerms?: boolean
  /** Flag to add hourly limits to results or not, default false, optional */
  addHourLimits?: boolean
}

export interface ContractorTier {}

/** Contractor type filter */
export interface ContractorType {}

/** Paging information for contract result lists */
export interface ContractPaging {
  /** Max number of records to return */
  limit?: number
  /** Number of records to skip */
  offset?: number
}

/** Offset/limit pagination options for contract lists */
export interface ContractPagingInput {
  /** Number of results, optional, default 10 */
  limit?: number
  /** Number of records to skip, optional, default 0 */
  offset?: number
  /** Flag to include total count in response, optional, default false */
  includeTotalCount?: boolean
}

/** Freelancers can propose a contract to a client */
export interface ContractProposal {
  /** Contract proposal identifier */
  id: string
  /** Proposal state */
  state: string
  /** Last updated timestamp */
  updatedDateTime: string
  /** Creation timestamp */
  createdDateTime: string
  /** Whether there is something that would prevent client offer from being accepted */
  canClientOfferBeAccepted: boolean
}

/** Results of a contract search with paging information */
export interface ContractSearchResults {
  /** Pagination details */
  paging?: ContractPaging
  /** Contracts returned by the search */
  contracts?: Array<ContractDetails>
}

/** Contract state values */
export interface ContractState {}

/** Current lifecycle status of a contract */
export interface ContractStatus {}

/** Contract terms grouped by engagement model */
export interface ContractTerms {
  /** Fixed-price terms history */
  fixedPriceTerms?: Array<FixedPriceContractTerm>
  /** Hourly terms history */
  hourlyTerms?: Array<HourlyContractTerm>
  /** Stipend terms history */
  stipendTerms?: Array<StipendContractTerm>
}

/** Type of contract payment model */
export interface ContractType {}

/** Person referenced in a contract context */
export interface ContractUser {
  /** User identifier (UID) */
  id: string
  /** User record identifier (RID) */
  rid: string
  /** Display name (e.g., John S.) */
  name?: string
  /** URL to the user's profile photo */
  photoUrl?: string
  /** First name */
  firstName?: string
  /** Last name */
  lastName?: string
  /** Postal address */
  address?: UserLocation
  /** Email address */
  email?: string
}

/** Information about a country */
export interface Country {
  /** Country identifier */
  id?: string
  /** Geographical name of a country */
  name?: string
  /** Official two-letter abbrevation of a country. i.e. iso2Code */
  twoLetterAbbreviation?: string
  /** Official three-letter abbreviation of a country, i.e. iso3Code */
  threeLetterAbbreviation?: string
  /** Region that country belongs to. Currently only EU is recognized */
  region: CountryRegion
  /** International phone code */
  phoneCode?: string
  /** Related geographic region */
  relatedRegion?: Region
  /** Related geographic sub-region */
  relatedSubRegion?: Region
  /** Whether country is active */
  active?: boolean
  /** Whether registration is allowed in this country */
  registrationAllowed?: boolean
}

/** Country region classification */
export interface CountryRegion {}

/** Input for creating a direct upload link */
export interface CreateDirectUploadLinkInput {
  /** File name */
  fileName: string
  /** Expiration date */
  expirationDate?: string
  /** Maximum file size */
  maxFileSize?: number
  /** Content type */
  contentType?: string
  /** Is SSL enabled */
  sslEnabled?: boolean
  /** file metadata */
  metaData?: string
}

/** Create employment record input */
export interface CreateEmploymentRecordInput {
  /** User identifier */
  userId?: string
  /** Company name */
  companyName: string
  /** Job title */
  jobTitle: string
  /** Standardized company identifier */
  standardizedCompanyId?: string
  /** Standardized job title identifier */
  standardizedJobTitleId?: string
  /** Role in the company */
  role: string
  /** start date - e.g: "1999-01-01" */
  startDate: string
  /** end date - e.g: "2002-01-01" */
  endDate?: string
  /** Role description */
  description?: string
  /** City name */
  city: string
  /** Country name */
  country: string
}

/** Input for creating a milestone */
export interface CreateMilestoneInput {
  /** Related offer ID */
  offerId?: string
  /** Related contract ID */
  contractId?: string
  /** Milestone description */
  description?: string
  /** Applicable instruction */
  instruction?: string
  /** Amount is in cents. For example 1000 represents 10 USD */
  depositAmount?: string
  /** Due date requirement */
  dueDate?: string
  /** The list of attachments' IDs (For Internal Usage Only) */
  attachmentIds: Array<string>
}

/** Delivery model options for offer creation */
export interface CreateOfferDeliveryModelInput {}

/** Input for creating a new organization */
export interface CreateOrganizationInput {
  /** Parent organization identifier */
  parentOrganizationId: string
  /** Name of the new organization */
  organizationName: string
  /** ACE record identifier */
  aceRid?: string
  /** Country code */
  country?: string
  /** Type of organization to create */
  type?: OrganizationRequestType
}

/** Input for creating an offer */
export interface CreationOfferInput {
  /** Whether offer creation is interactive. Default = true */
  interactive?: boolean
  /** Idempotency key for request deduplication */
  idempotencyKey?: string
  /** Whether to ignore test account checks */
  ignoreTestAccount?: boolean
  /** Kind of offer being created */
  kind: OfferKindInput
  /** Who is making the offer */
  offeror: OfferorInput
  /** Client team identifier */
  clientTeamId: string
  /** Vendor user information */
  vendorUser: VendorUserInput
  /** Offer metadata */
  metadata: OfferMetadataInput
  /** Attachment identifiers. Default = [] */
  attachments: Array<string>
  /** Offer title */
  title: string
  /** Offer description */
  description?: string
  /** required for Enterprise offers, optional for marketplace offers */
  contractStartDateTime?: string
  /** required for Enterprise Compliance offers (and must not be more than 180 days into the future from the start date); optional (and ignored) for others */
  contractEndDateTime?: string
  /** Hourly rate terms */
  hourlyRateTerms?: OfferHourlyRateTerms
  /** Stipend terms */
  stipendTerms?: OfferStipendTerms
  /** Milestone terms */
  milestoneTerms?: OfferMilestoneTerms
  /** Delivery model */
  deliveryModel: CreateOfferDeliveryModelInput
  /** False by default. Default = false */
  closeOnAccept?: boolean
  /** only allowed for Marketplace offers */
  scheduledRateIncrease?: OfferScheduledRateIncreaseInput
  /** Custom fields */
  customFields?: Array<StringMapElementInput>
  /** Offer location details */
  offerLocation?: OfferLocationInput
  /** Offer payroll details */
  offerPayroll?: OfferPayrollInput
}

/** Actor type associated with contract changes and events */
export interface CreatorType {}

/** Information about current Organization */
export interface CurrentOrganization {
  /** ID of the current organization */
  id: string
  /** Record ID of the organization */
  rid?: string
  /** Legacy organization identifier */
  legacyId?: string
  /** Name of the current organization */
  name?: string
  /** Type of the Organization. Possible values are BUSINESS / SOLE_PROPRIETOR */
  type?: OrganizationType
  /** Legacy type of the Organization. Possible values are CLIENT / VENDOR */
  legacyType?: OrganizationLegacyType
  /** Flag associated with the Organization */
  flag?: OrganizationFlag
  /** Information about the parent Organization, if any */
  parentOrganization?: CurrentOrganization
  /** Indicates whether this organization is active. Applicable to a team organization. */
  active?: boolean
  /** Indicates whether this organization/team is hidden. Applicable to a team organization. */
  hidden?: boolean
  /** List of teams within the root organization. Available only for the root organization (where parentOrganization is NULL). If userId is not provided, the current user will be used by default. */
  childOrganizations?: Array<CurrentOrganization>
  userId?: string
  /** Specific team within the root organization. Available only for the root organization (where parentOrganization is NULL). If userId is not provided, the current user will be used by default. */
  childOrganization?: CurrentOrganization
  /** Private information about current company */
  company?: PrivateCompanyInfo
  /** Photo URL/Logo for the organization */
  photoUrl?: string
  /** When the organization was created */
  creationDate?: string
  /** List of organization's staff, Offset is the UID of staff to start search from. Leave it blank or null when querying the first page. Use the UID of last returned staff for next page request. limit is the page size. If empty then default page limit (100 entries) would be applied. */
  staffs: StaffsConnection
  pagination?: Pagination
  /** Get user permissions under organization */
  userPermissions?: UserPermissions
  filter: OrgUserPermissionFilterV2
  /** List of offers for root agency organization */
  agencyOffers?: ContractOfferConnection
  offerByRootCompanyFilter?: OfferByRootCompanyFilter
  /** List of offers for the client organization The maximum page size is 50 */
  clientOffers?: ContractOfferConnection
  offerByClientFilter?: OfferByClientFilter
  /** List of client time reports for the given date time range, both inclusive use clientContractTimeReport instead */
  clientTimeReport: Array<TimeReport>
  timeReportDate_bt: DateTimeRange
  clientContractTimeReport: TimeReportConnection
  /** List of agency time reports for the given date time range, both inclusive use agencyContractTimeReport instead */
  agencyTimeReport: Array<TimeReport>
  agencyContractTimeReport?: TimeReportConnection
  privateTalentClouds: Array<PrivateTalentCloud>
  jobPosting?: JobPostingConnection
  jobPostingFilter: JobPostingsFilter
}

/** Information about a user as an entity */
export interface CurrentUser {
  /** Unique user identifier
                          Example: 1181921839933591552 */
  id: string
  /** Nickname ID of a user. Please, only use if really needed. Unique ID should be used when possible.
                          Example: foofreelancer */
  nid: string
  /** Record ID of a user. Please, only use if really needed. Unique ID should be used when possible.
                          Example: 2366358 */
  rid: string
  /** Email of user. */
  email?: string
  /** First name + abbreviated last name, e.g. John Smith -> John S. */
  name?: string
  /** Get user permissions */
  userPermissions?: UserPermissions
  filter: UserPermissionFilterV2
  /** Photo url of the user. */
  photoUrl?: string
  /** List of Offers available to the current user/freelancer Sort options: Team, StartDate, EndDate, ContractName, FreelancerName, ClientCompanyName, ClientName, State */
  offer?: ContractOfferConnection
  offerForFreelancerFilter?: OfferForFreelancerFilter
  /** List of time reports for the current user(freelancer) and given date range, both inclusive use contractTimeReport instead */
  timeReport: Array<TimeReport>
  timeReportDate_bt: DateTimeRange
  contractTimeReport: TimeReportConnection
  /** Freelancer profile for the current user */
  freelancerProfile?: FreelancerProfile
  /** Unique ciphertext identifier */
  ciphertext?: string
  /** User's i18n settings The input argument companyReferenceId is used in different checks for agencies, companies and independent contractors; For freelancers, the value shouldn't be provided. */
  i18NSettings: I18nSettings
  companyReferencedId?: string
  /** Current user's primary freelancer profile data */
  talentProfile?: TalentProfile
}

/** Custom field dropdown option */
export interface CustomFieldDropDown {
  /** Dropdown option identifier */
  id?: string
  /** Custom field identifier */
  customFieldId?: string
  /** Option value */
  value?: string
  /** Display value */
  displayValue?: string
  /** Sort order index */
  orderIndex?: number
  /** Option description */
  description?: string
  /** Whether option is in use */
  inUse?: boolean
  /** Whether option is active */
  active?: boolean
  /** Access control type */
  aclType?: DropdownAclType
  /** Team record identifiers with access */
  teamRids?: Array<string>
}

/** Custom field snapshot */
export interface CustomFields {
  /** Unique identification for the response */
  responseId?: string
  /** Unique identification for the custom field */
  id?: string
  /** If the response belongs to a dropdown type, item id refers to the custom field dropdown item primary key, Unique identification for the dropdown item */
  itemId?: string
  /** Type snap */
  typeSnap?: CustomFieldsTypeSnap
  /** Label snap */
  labelSnap?: string
  /** Display value snap */
  displayValueSnap?: string
  /** Custom field creator */
  creator?: GenericUser
  /** Creation date time */
  createdDateTime?: string
  /** Top level (first contract in chain of contracts) contract. Rate changes on this contract will preserve the rollup in the new contract use firstContractId instead */
  rollupAssignmentId?: string
  /** Top level (first contract in chain of contracts) contract. Rate changes on this contract will preserve the rollup in the new contract */
  firstContractId?: string
  /** Offer ID */
  offerId?: string
  /** Job posting ID */
  jobPostingId?: string
  /** For bringYourOwnFreelancer - since the offer doesn't exist yet at time of invite, it's stored against the byo invite and saved to the offer, Then contract by the byo service when the invitation has been responded to */
  byoInvitationId?: string
  /** For buy it now - the predefined work package */
  buyItNowId?: string
  /** For classif and fl/cl questionnaires which use custom fields as their storage backend */
  questionnaireResponsesId?: string
  /** Stale flag */
  stale?: boolean
  /** For default terms - used by the default terms system within enterprise */
  termSectionId?: string
  /** acl Snapshot indiciating the custom field access level. Possible values are 1. COMPANY, 2. TEAM: for eg: TEAM:13343888. COMPANY indicates the custom field has an acces level at the root organization. And TEAM: indicates access only under a specific team with that */
  aclSnap?: string
}

/** Custom field connection */
export interface CustomFieldsConnection {
  /** Connection edges for paginated results */
  edges?: Array<CustomFieldsEdge>
  /** Pagination information */
  pageInfo?: PageInfo
}

/** Custom field connection edge */
export interface CustomFieldsEdge {
  /** Cursor for the edge */
  cursor: string
  /** Node containing a custom field snapshot */
  node?: CustomFields
}

/** custom fields input parameters */
export interface CustomFieldsInput {
  /** Each id is a unique identification for the response */
  responseIds: Array<string>
  /** Each id is a unique identification for the custom field */
  ids: Array<string>
  /** For each id if the response belongs to a dropdown type, item id refers to the custom field dropdown item primary key, Unique identification for the dropdown item */
  itemIds: Array<string>
  /** Each id points to top level (first contract in chain of contracts) contract. Rate changes on this contract will preserve the rollup in the new contract Deprecated(reason: "use firstContractIds") */
  rollupAssignmentIds: Array<string>
  /** Offers ids */
  offerIds: Array<string>
  /** Job posting ids */
  jobPostingIds: Array<string>
  /** Each id is for bringYourOwnFreelancer. Since the offer doesn't exist yet at time of invite, it's stored against the byo invite and saved to the offer, then contract by the byo service when the invitation has been responded to */
  byoInvitationIds: Array<string>
  /** Each id is for buy it now - the predefined work package */
  buyItNowIds: Array<string>
  /** Each id points to classif and fl/cl questionnaires which use custom fields as their storage backend */
  questionnaireResponsesIds: Array<string>
  /** If organizationIds are specified, only responses belonging to custom fields accessible by hiring managers in the specified teams will be returned. These organizationIds can be 'team OrganizationIds' or 'root organizationId'. Custom fields that are accessible/visible through out the COMPANY are always included in the response. */
  organizationIds: Array<string>
}

/** Custom field response value */
export interface CustomFieldsResponse {
  /** Response identifier */
  id?: string
  /** Custom field identifier */
  customFieldId?: string
  /** Response value */
  value?: string
  /** Display value */
  displayValue?: string
}

/** Snapshot of custom field type metadata */
export interface CustomFieldsTypeSnap {}

/** Custom skill entry for a job post */
export interface CustomJobPostSkill {
  /** Parent ontology skill identifier */
  parentSkillId?: string
  /** Free-text skill name */
  freeText?: string
}

/** Input for creating a custom payment (e.g., bonus) */
export interface CustomPaymentInput {
  /** Contract identifier for the payment */
  contractId: string
  /** Payment amount */
  amount: number
  /** Payment comment visible to recipient */
  comment: string
  /** Internal notes about the payment */
  notes: string
  /** Type of custom payment (default: BONUS). Default = BONUS */
  type?: CustomPaymentType
  /** Whether to allow subsequent payments. Default = true */
  allowSubsequent?: boolean
}

/** Custom Payment Response */
export interface CustomPaymentResponse {
  /** Invoice ID */
  invoiceId: string
}

/** Types of custom payments */
export interface CustomPaymentType {}

/** Time of day with raw seconds and display value */
export interface DateTime {
  /** Number of seconds since beginning of the day (since 00:00:00 same day) */
  rawValue: string
  /** Time in format HH:MM */
  displayValue: string
}

/** Input range for date-time values (ISO-8601 strings) */
export interface DateTimeRange {
  /** Start timestamp */
  rangeStart?: string
  /** End timestamp */
  rangeEnd?: string
}

/** Days of the week */
export interface Day {}

/** Input for deleting a milestone */
export interface DeleteMilestoneInput {
  /** Milestone ID */
  id: string
}

/** Delivery models supported for contracts */
export interface DeliveryModel {}

/** Access control type for dropdown options */
export interface DropdownAclType {}

/** Minimum earnings requirement */
export interface Earning {}

/** Input for editing a milestone */
export interface EditMilestoneInput {
  /** Milestone ID */
  id: string
  /** Milestone description */
  description?: string
  /** Application instructions */
  instructions?: string
  /** Amount is in cents. For example 1000 represents 10 USD */
  depositAmount?: string
  /** Due date requirement */
  dueDate?: string
  /** The list of attachments' IDs (For Internal Usage Only) */
  attachments: Array<string>
  /** Attached message */
  message?: string
  /** Sequence ID */
  sequenceId?: number
}

export interface EndContractInput {
  /** End contract date (timestamp) defaults to the current day */
  endDate?: string
  /** Feedback provided as part of end-of-contract action */
  feedbackInfo?: FeedbackInfoInput
  /** Contract end reason ID. Optional. See Query.reasons(reasonType: CONTRACT_END_HOURLY) and Query.reasons(reasonType: CONTRACT_END_FIXED) for the list of possible reasons. */
  reasonRef: string
}

/** Engagement duration option with label and weeks */
export interface EngagementDuration {
  /** Unique identifier */
  id: string
  /** Label */
  label: string
  /** Amount of weeks needed for the engagement */
  weeks: number
}

/** Engagement type for hourly contracts */
export interface EngagementType {}

/** English proficiency levels */
export interface EnglishProficiency {}

/** English proficiency levels */
export interface EnglishSkill {}

/** Escrow refund status */
export interface EscrowRefundStatus {}

/** Experience level requirements */
export interface ExperienceLevel {}

/** @description: Input for individual credit data transaction */
export interface ExternalPayoutAdjTrxInput {
  /** External transaction reference ID */
  extTrxRefId: string
  /** Transaction amount */
  amount: string
  /** Transaction type (e.g., APInvoice/APAdjustment) */
  type: string
  /** Transaction subtype (e.g., Adjustment/Bonus/Fixed Price/Hourly etc) */
  subtype: string
  /** General ledger account */
  glAccount?: string
  /** Transaction description */
  description?: string
  /** VAT country code */
  vatCountry?: string
  /** List of fee transactions */
  fees: Array<ExternalPayoutAdjTrxInput>
  /** List of tax transactions */
  taxes: Array<ExternalPayoutAdjTrxInput>
}

/** Failed invitation */
export interface FailedInvitation {
  /** Invitee email */
  email?: string
  /** Invitee username */
  username?: string
}

/** Client and freelancer feedback for a contract */
export interface Feedback {
  /** Feedback provided by the client about the freelancer */
  clientFeedback?: ClientFeedback
  /** Feedback provided by the freelancer about the client */
  freelancerFeedback?: FreelancerFeedback
}

export interface FeedbackInfoInput {
  /** Availability score */
  availabilityScore?: number
  /** Comment */
  comment?: string
  /** Communication score */
  communicationScore?: number
  /** Cooperation score */
  cooperationScore?: number
  /** Deadlines score */
  deadlinesScore?: number
  /** Quality score */
  qualityScore?: number
  /** Skills score */
  skillsScore?: number
}

/** Location information for the client */
export interface FeedJobLocation {
  /** Country name */
  country?: string
  /** City name */
  city?: string
  /** State or region */
  state?: string
  /** Country timezone */
  countryTimezone?: string
  /** World region */
  worldRegion?: string
}

/** Represents a generic file resource */
export interface File {
  /** The file name */
  name: string
  /** Location of file */
  uri: string
  /** File encoding */
  encoding?: string
  /** File size in bytes */
  size?: number
  /** File upload date in the format 'yyyy-mm-ddThh:MM:ss.SSSZ', e.g. '2022-06-14T08:49:03.325Z' */
  createdDateTime?: string
}

/** File info */
export interface FileInfo {
  /** file uid Ex: "1120653822065278976" */
  id: string
  /** Created using bucket */
  uploadUrl: string
  /** formKeyValues holds following attributes ......... key Generated from UrlInfoInput- keyPrefix("api/gql/domain/") Ex: "api/gql/domain/77987***********" acl Ex: "private" Content-Disposition Generated from UrlInfoInput- "content-type,fileName,downloadBehaviour("inline | attachment")" Ex: "attachment; filename="abc.txt";filename*=utf-8''abc.txt" AWSAccessKeyId Ex: "ASI**************" policy Generated from UrlInfoInput- "bucket, key, timestamp, maxFileSize, contentType, contentDisposition" signature Generated from formKeyValues' "policy" Content-Type Ex: "application/octet-stream" Form key-values */
  formKeyValues: Array<StringMapElement>
}

/** Fixed price contract term including amounts and milestones */
export interface FixedPriceContractTerm {
  /** Term identifier (UID) */
  id: string
  /** Fixed price charge amount */
  fpCharge?: Money
  /** Fixed amount agreed for the term */
  fixedAmount?: Money
  /** Creation date of the term */
  createDate?: string
  /** Last modification date of the term */
  modifyDate?: string
  /** Effective change date */
  changeDate?: string
  /** User who created the term */
  createdBy?: ContractUser
  /** Actor type for the creator */
  creatorUserType?: CreatorType
  /** User who last changed the term */
  changedBy?: ContractUser
  /** Start date of the term */
  startDate?: string
  /** Actor type for the last change */
  changingUserType?: CreatorType
  /** Indicates usage of FP2 */
  isFP2?: boolean
  /** End date of the term */
  endDate?: string
  /** Engagement payment type for the term */
  jobType?: JobType
  /** Protected time calculation period */
  ptcData?: PtcData
  /** Milestones under this fixed-price term */
  milestones?: Array<Milestone>
}

/** Fixed-price contract terms */
export interface FixedPriceContractTerms {
  /** Fixed budget amount */
  amount: Money
  /** Maximum budget amount (if range) */
  maxAmount?: Money
  /** Expected project duration */
  engagementDuration?: EngagementDuration
}

/** Terms for fixed priced offer */
export interface FixedPriceTerm {
  /** Fixed price budget */
  budget?: Money
}

/** Built-in Float */
export interface Float {}

/** Input range for floating point values */
export interface FloatRange {
  /** Start of range */
  rangeStart?: number
  /** End of range */
  rangeEnd?: number
}

/** Relationship between a freelancer and a client */
export interface FreelancerClientRelation {
  /** Client company record identifier */
  companyRid: string
  /** Client company name */
  companyName: string
  /** EDC user identifier */
  edcUserId: string
  /** Platform of last contract */
  lastContractPlatform: string
  /** Last contract record identifier */
  lastContractRid: string
  /** Title of the last contract */
  lastContractTitle: string
}

/** Freelancer's feedback details */
export interface FreelancerFeedback {
  /** Numeric rating provided by the freelancer */
  score?: number
  /** Freelancer's written comment */
  comment?: string
  /** Client's response to the freelancer's feedback */
  clientResponse?: string
  /** Likelihood to recommend working with the client */
  recommendScore?: number
}

/** Create freelancer language input */
export interface FreelancerLanguageInput {
  /** User identifier */
  userId?: string
  /** ISO 639 language code */
  iso639Code?: string
  /** Language details */
  language: LanguageDataInput
}

/** Location of the freelancer */
export interface FreelancerLocation {
  /** Country name */
  countryName?: string
  /** City name */
  cityName?: string
  /** Postal or ZIP code */
  zip?: string
  /** IANA timezone identifier (e.g., America/Los_Angeles) */
  timezone: string
  /** Street address */
  street?: string
}

/** Freelancer Profile details. */
export interface FreelancerProfile {
  /** The user (freelancer) who owns this profile (must be used only for current user use case) */
  user: CurrentUser
  /** The user (freelancer) who owns this profile (can be used for any user use case) */
  userDetails: GenericUser
  /** Personal data of the profile (firstName, lastName, etc) */
  personalData: FreelancerProfilePersonalData
  /** User preferences of the profile (e.g., profileAccess, hideEarnings, etc) */
  userPreferences: FreelancerProfileUserPreferences
  /** List of other experiences (e.g., otherExperiences with subject eq 'Web Development') */
  otherExperiences: FreelancerProfileOtherExperiencesConnection
  filter?: FreelancerProfileOtherExperiencesFilter
  /** List of languages that freelancer can speak */
  languages: FreelancerProfileLanguagesConnection
  /** List of education records (e.g., educationRecords where areaOfStudy eq Computer Engineering) */
  educationRecords: Array<FreelancerProfileEducationRecord>
  /** List of certificates earned by freelancer */
  certificates?: Array<FreelancerProfileCertificate>
  /** List of employment records (e.g., employmentRecords where country eq US) */
  employmentRecords: Array<FreelancerProfileEmploymentRecord>
  /** Freelancer's availability */
  availability?: FreelancerProfileAvailability
  /** Response times committed by Freelancer (can be immediate, soon or never) */
  committedResponseTime?: FreelancerProfileCommittedResponseTime
  /** Project of the profile by its ID */
  project?: FreelancerProfileProject
  id: string
  /** List of freelancer skills */
  skills: FreelancerSkillsConnection
  /** Freelancer profile aggregates */
  aggregates: FreelancerProfileAggregates
  /** Job categories selected by the freelancer on their profile */
  jobCategories?: FreelancerProfileJobCategoriesConnection
  /** Profile completeness summary */
  profileCompletenessSummary?: FreelancerProfileCompletenessSummary
  /** List of external social network accounts */
  linkedExternalAccountsList: FreelancerProfileLinkedExternalAccountsConnection
  /** Verification data (phone verified, webcam verified) of the profile */
  verifications?: FreelancerProfileVerifications
  /** Freelancer first name + last name */
  fullName: string
  /** Freelancer first name */
  firstName: string
  /** Freelancer last name */
  lastName: string
  /** Country details */
  countryDetails?: Country
  /** Email address */
  email?: string
  /** Profile portrait */
  portrait?: Portrait
  /** Phone number visible only for the current user */
  phoneNumber?: PhoneNumber
  /** Talent clouds that the freelancer is part of */
  privateTalentCloud: PrivateTalentCloudConnection
}

/** Freelancer Profile aggregates */
export interface FreelancerProfileAggregates {
  /** User who owns this aggregate data */
  user: GenericUser
  /** It's the latest timestamp between the worked hours logged and the Last payment date from the most recent contract */
  lastWorkedDateTime?: string
  /** Date when the user applied last time for a job */
  lastApplicationDate?: string
  /** Total hourly jobs. */
  totalHourlyJobs?: number
  /** Total hourly jobs done for last 180 days */
  totalHourlyJobsRecent?: number
  /** Total fixed price jobs. */
  totalFixedJobs?: number
  /** Total fixed price jobs performed in the last 180 days */
  totalFixedJobsRecent?: number
  /** Freelancer's responsiveness to client's invites */
  responsiveness?: string
  /** Total Revenue. The actual amount, freelancer has received. */
  totalRevenue?: Money
  /** Total no of interviews in progress. */
  activeInterviews?: number
  /** Total no of active contracts. */
  currentContracts?: number
  /** Job Success Score calculated Biweekly */
  jobSuccessScore?: number
  /** Top rated status */
  topRatedStatus?: string
  /** Top rated plus status */
  topRatedPlusStatus?: string
  /** Flag that indicates if freelancer is expert-vetted */
  vetted?: boolean
  /** Total hours calculated by total charges divided by hourly rate */
  totalHoursActual?: number
  /** Total Billed Hours. A summation of billed hours with total charges >= $1. */
  totalHours?: number
  /** Total Hours worked for last 180 days */
  totalHoursRecent?: number
  /** Total Feedback score received */
  totalFeedback?: number
  /** Total Feedback score received for last 180 days */
  totalFeedbackRecent?: number
  /** Number of contracts with total charges >= $1. */
  billedContracts?: number
  /** Number of contracts with total charges >= $1 for last 180 days */
  billedContractsRecent?: number
  /** Freelancer Adjusted Score - a 5-star rating score the platform gives to each freelancer Based on the feedback scores received in each completed contract */
  adjustedFeedbackScore?: number
  /** Freelancer adjusted average feedback score for the last 180 days */
  adjustedFeedbackScoreRecent?: number
  /** Freelancer profile stats */
  profileStats?: FreelancerProfileStats
  /** Last Activity Timestamp captured by the platform from these activities: Last job application submitted, last exam taken, last date worked, last date being hired, last payment date */
  lastActivityDateTime?: string
  /** Life time Total Freelancer Earnings. The same value as Total Charge. */
  totalEarnings?: Money
  /** The most recent timestamp when a freelancer being granted with a Top Rated status. */
  topRatedStatusDatetime?: string
  /** Recent earnings for the last 180 days */
  recentEarnings?: Money
  /** Average recent earnings per contract */
  averageRecentEarnings?: Money
  /** Recent charges for the last 180 days */
  recentCharge?: Money
  /** Average recent charge per contract */
  averageRecentCharge?: Money
  /** Overall quality score for the freelancer */
  qualityScore?: number
  /** Total hours from Assignment table's "Hours" column */
  totalHoursRounded?: number
}

/** Freelancer's Availability */
export interface FreelancerProfileAvailability {
  /** Availability record identifier */
  id: string
  /** User this availability belongs to */
  user: GenericUser
  /** Availability capacity (e.g., More than 30 hours/week, less than 30 hours, As needed - Open to Offers) */
  capacity?: FreelancerProfileAvailabilityCapacity
  /** If freelancer's not available, their next availability date */
  availabilityDateTime?: string
  /** Availability status name */
  name: string
  /** Creation timestamp */
  createdDateTime: string
}

export interface FreelancerProfileAvailabilityCapacity {}

/** Create freelancer availability input */
export interface FreelancerProfileAvailabilityInput {
  /** This field must be deprecated(@unused). id will be extracted from current user context */
  userId: string
  /** Updated availability payload */
  availability: FreelancerProfileCapacityInput
}

/** Input for updating freelancer availability */
export interface FreelancerProfileCapacityInput {
  /** Availability capacity selection */
  capacity?: FreelancerProfileAvailabilityCapacity
  /** Next availability date */
  availabilityDateTime?: string
  /** Creation timestamp */
  creationDateTime: string
  /** Source of the availability update */
  sourceInput?: AvailabilitySource
}

/** Freelancer's Certificates */
export interface FreelancerProfileCertificate {
  /** Certificate record identifier */
  id: string
  /** Date the certificate was earned (ISO-8601 format) */
  earnedDate?: string
  /** Submission code for verification sensitive information. */
  submissionCode?: string
  /** Additional notes about the certificate */
  notes?: string
  /** Score achieved for the certificate */
  score?: string
  /** Whether the certificate is currently active */
  active?: boolean
  /** Whether the certificate has been verified */
  verified?: boolean
  /** External URL for the certificate */
  url?: string
  /** Creation timestamp (ISO-8601 format) */
  createdDateTime?: string
  /** Last update timestamp (ISO-8601 format) */
  lastUpdatedDateTime?: string
  /** Expiration date of the certificate (ISO-8601 format) */
  expirationDate?: string
  /** External identifier for the certificate */
  externalId?: string
}

/** Freelancer's CommittedResponseTime */
export interface FreelancerProfileCommittedResponseTime {
  /** Committed response time record identifier */
  id: string
  /** Response times committed by Freelancer (can be immediate, soon or never) */
  committedResponseTime?: FreelancerProfileResponseTime
  /** Display name: Immediate (30 min) or Soon (12 hours) or Never */
  name?: string
  /** Creation timestamp */
  createdDateTime: string
  /** Last update timestamp */
  updatedDateTime?: string
}

/** Freelancer Profile Completeness Summary */
export interface FreelancerProfileCompletenessSummary {
  /** User who owns this profile */
  user: GenericUser
  /** Actual percentage completed */
  actual: number
  /** Display value of percentage complete */
  display: number
  /** Action message that needs to be displayed */
  action?: string
  /** Percentage that gets added to the total percent complete if action is taken */
  actionCredit?: number
  /** Action for empty section */
  actionForEmptySection?: string
  /** Skills count */
  skillsCount: number
  /** Number of employment experiences */
  employmentRecordCount: number
  /** Number of portraits in the profile */
  portraitRecordCount: number
  /** Number of overviews in the profile */
  overviewRecordCount: number
  /** Number of videos in the profile */
  videoRecordCount: number
  /** Number of education records entered in the profile */
  educationRecordCount: number
  /** Number of certificates added against this profile */
  certificatesCount: number
  /** Count of other experiences */
  otherExperiencesCount: number
  /** Count of portfolio project items */
  portfolioCount: number
  /** Number of external accounts that have been linked to this profile */
  linkedExternalAccountsCount: number
  /** Creation timestamp */
  createdDateTime: string
}

/** Freelancer's Contracts */
export interface FreelancerProfileContract {
  /** Contract identifier */
  id: string
  /** Contract description */
  description?: string
  /** Contract title */
  title: string
  /** The client organization involved in this contract */
  clientOrganization: GenericOrganization
  /** Fixed or hourly contract */
  type: FreelancerProfileContractType
  /** Public or private */
  accessType: FreelancerProfileContractAccessType
  /** Whether the contract is private */
  private: boolean
  /** The job opening/posting that is associated with the contract */
  job: JobPosting
  /** When did the contract start */
  startDateTime: string
  /** When will the contract end */
  endDateTime?: string
  /** Total money that was invoiced in this contract */
  totalCharges?: Money
  /** Number of total hours spent on this contract */
  totalHours?: number
  /** Hourly rate used by the freelancer for this contract */
  hourlyRate?: Money
  /** Initial amount agreed for the contract */
  initialAmount?: Money
  /** Feedback provided by the freelancer when the contract ended */
  feedbackToTheClient?: FreelancerProfileContractFeedback
  /** Feedback provided by the client to the freelancer when the contract ended */
  feedbackToTheFreelancer?: FreelancerProfileContractFeedback
  /** This flag determines where this contract is from (either Elance or ODesk) */
  isFromElance?: boolean
}

export interface FreelancerProfileContractAccessType {}

/** Contract feedback */
export interface FreelancerProfileContractFeedback {
  /** Overall feedback score */
  score: number
  /** Optional comment from the rater */
  comment?: string
  /** Whether the comment is public */
  publicComment: boolean
  /** Response from the recipient */
  response?: string
  /** Detailed category scores */
  scoreDetails: Array<FreelancerProfileContractFeedbackScore>
}

/** Contract feedback score */
export interface FreelancerProfileContractFeedbackScore {
  /** Value of the category score */
  score: number
  /** Category label */
  label: string
  /** Optional description */
  description?: string
}

export interface FreelancerProfileContractType {}

/** Connection to the EducationRecords list */
export interface FreelancerProfileEducationRecord {
  /** Education record identifier */
  id: string
  /** User linked to this education record */
  user?: GenericUser
  /** Name of the educational institution */
  institutionName: string
  /** Standardized institution identifier */
  standardizedInstitutionId?: string
  /** Area of study or major */
  areaOfStudy?: string
  /** Standardized area of study identifier */
  standardizedAreaOfStudyId?: string
  /** Degree or diploma earned */
  degree?: string
  /** Standardized degree identifier */
  standardizedDegreeId?: string
  /** Start date - formatted according to ISO-8601 */
  startDate?: string
  /** End date - formatted according to ISO-8601 */
  endDate?: string
  /** Additional description or notes about the education */
  description?: string
}

/** EducationRecords related filters */
export interface FreelancerProfileEducationRecordsFilter {
  /** Filter by institution name */
  institutionName_eq?: string
  /** Filter by degree name */
  degree_eq?: string
}

/** Freelancer's Employment Record */
export interface FreelancerProfileEmploymentRecord {
  /** Employment record identifier */
  id: string
  /** User who owns this record */
  user: GenericUser
  /** Company name */
  companyName: string
  /** Job title */
  jobTitle: string
  /** Standardized company identifier */
  standardizedCompanyId?: string
  /** Standardized job title identifier */
  standardizedJobTitleId?: string
  /** Role or position held */
  role?: string
  /** Start date formatted according to ISO-8601 */
  startDate: string
  /** End date - e.g: "2002-01-01" */
  endDate?: string
  /** Role description */
  description?: string
  /** City where employed */
  city: string
  /** Country where employed */
  country: string
}

/** Classification of the freelancer's experience level in the profile */
export interface FreelancerProfileExperienceLevel {}

/** Connection to the Job Categories list */
export interface FreelancerProfileJobCategoriesConnection {
  /** Edges in the job categories connection */
  edges: Array<FreelancerProfileJobCategoryEdge>
}

/** Selected job categories */
export interface FreelancerProfileJobCategory {
  /** Top-level job category */
  category?: JobCategory
  /** Selected subcategories for this category */
  selectedSubCategories: Array<JobCategory>
}

/** Job category connection edge */
export interface FreelancerProfileJobCategoryEdge {
  /** Job category node */
  node: FreelancerProfileJobCategory
}

/** Freelancer language with proficiency and verification */
export interface FreelancerProfileLanguage {
  /** Language record identifier */
  id: string
  /** Language details */
  language: Language
  /** Whether the language is verified */
  verified?: boolean
  /** Verified via certificate */
  verifiedByCertificate?: boolean
  /** Verified via feedback */
  verifiedByFeedback?: boolean
}

/** Language connection edge */
export interface FreelancerProfileLanguageEdge {
  /** Language item node */
  node: FreelancerProfileLanguage
}

export interface FreelancerProfileLanguageProficiencyTitle {}

/** Connection to the FreelancerLanguages list */
export interface FreelancerProfileLanguagesConnection {
  /** Edges in the languages connection */
  edges: Array<FreelancerProfileLanguageEdge>
}

/** Linked external account details for a freelancer profile */
export interface FreelancerProfileLinkedExternalAccounts {
  /** Linked external account identifier */
  id: string
  /** Name of the social network (e.g., facebook, github, twitter etc) */
  name: string
  /** Expires on */
  expiryDateTime?: string
  /** Revoked on */
  revokedDateTime?: string
  /** Authorization done on */
  authorizedDateTime: string
  /** Link to the user profile on that social network */
  userProfile: string
}

/** Connection to the Linked External Accounts */
export interface FreelancerProfileLinkedExternalAccountsConnection {
  /** Edges in the linked external accounts connection */
  edges: Array<FreelancerProfileLinkedExternalAccountsEdge>
}

/** Linked external accounts connection edge */
export interface FreelancerProfileLinkedExternalAccountsEdge {
  /** Linked external account node */
  node: FreelancerProfileLinkedExternalAccounts
}

/** Other experience record for a freelancer */
export interface FreelancerProfileOtherExperience {
  /** Other experience record identifier */
  id: string
  /** User who owns this experience record */
  user: GenericUser
  /** Subject of the experience */
  subject: string
  /** Description of experience */
  description: string
  /** If this experience is still active */
  active?: boolean
  /** Date time formatted according to ISO-8601 */
  createdDateTime: string
  /** Date time formatted according to ISO-8601 */
  updatedDateTime: string
}

/** Other experience connection edge */
export interface FreelancerProfileOtherExperienceEdge {
  /** Other experience node */
  node: FreelancerProfileOtherExperience
  /** Cursor for pagination */
  cursor: string
}

/** Connection to the Other Experiences list */
export interface FreelancerProfileOtherExperiencesConnection {
  /** Total number of other experiences */
  totalCount?: number
  /** Edges in the connection */
  edges: Array<FreelancerProfileOtherExperienceEdge>
  /** Pagination information */
  pageInfo?: PageInfo
}

/** OtherExperiences related filters */
export interface FreelancerProfileOtherExperiencesFilter {
  /** Filter by subject */
  subject_eq?: string
}

/** Attributes of personal data. */
export interface FreelancerProfilePersonalData {
  /** First name */
  firstName: string
  /** Last name */
  lastName: string
  /** Profile portrait image */
  portrait?: Portrait
  /** Profile Title */
  title?: string
  /** Profile Description */
  description?: string
  /** Freelancer address */
  address?: FreelancerLocation
  /** Freelancer's typical billing rate */
  chargeRate: Money
  /** Work phone number */
  workPhone?: string
  /** Link to the freelancer's profile */
  profileUrl?: string
  /** Under review, auto rejected, rejected, accepted etc. */
  profileState?: PersonalDataProfileState
}

/** Portfolio projects of the Freelancer */
export interface FreelancerProfileProject {
  /** Project identifier */
  id: string
  /** Portfolio project title */
  title?: string
  /** Description of the portfolio project */
  description?: string
  /** Connection to the Upwork contract if the project is done on Upwork */
  contractLink?: FreelancerProfileProjectContractLink
  /** Pointer to the thumbnail */
  thumbnailId?: string
  /** Pointer to the thumbnail in original */
  thumbnailOriginalId?: string
  /** Link to the thumbnail */
  thumbnail?: string
  /** Link to the original thumbnail */
  thumbnailOriginal?: string
  /** URL if exists for the portfolio project */
  projectUrl?: string
  /** The date when this project was completed */
  completionDateTime?: string
  /** If this project is visible for Upwork users or publicly */
  public?: boolean
  /** Order of this portfolio project in all of the portfolio projects */
  rank?: number
  /** Filtered list of project attachments (e.g., type eq JPG) */
  attachments: Array<FreelancerProfileProjectAttachment>
  /** List of skills associated with this freelancer's project */
  skills?: FreelancerSkillsConnection
  /** The top level category associated to this portfolio project */
  category?: JobCategory
  /** Level 2 category associated with this portfolio project */
  subCategory?: JobCategory
  /** Associated occupation from the ontology for this portfolio project */
  occupationId?: string
  /** Case study, gallery or general */
  projectType?: FreelancerProfileProjectType
  /** Role played by the freelancer on this project */
  role?: string
  /** Project goal */
  projectGoal?: string
  /** Project solution in case study for example */
  solution?: string
  /** Primary image file identifier */
  primaryImageId?: string
  /** Creation timestamp */
  createdDateTime: string
}

/** Project attachment */
export interface FreelancerProfileProjectAttachment {
  /** Attachment identifier */
  id?: string
  /** Public URL to the attachment */
  link?: string
  /** Original file name */
  fileName?: string
  /** File size in bytes */
  fileSize?: number
  /** Display order of the attachment */
  rank?: number
  /** Video URL if attachment is a video */
  videoUrl?: string
  /** Attachment type (e.g., IMAGE, VIDEO) */
  type?: string
  /** Attachment title */
  title?: string
  /** Attachment description */
  description?: string
  /** Small image URL */
  imageSmall?: string
  /** Medium image URL */
  imageMiddle?: string
  /** Large image URL */
  imageLarge?: string
}

/** Project Contract link */
export interface FreelancerProfileProjectContractLink {
  /** Unique identifier of the project-contract link */
  id: string
  contract?: FreelancerProfileContract
  /** State of the link */
  state?: string
  /** Related project */
  project?: FreelancerProfileProject
  /** Client user */
  client?: GenericUser
  /** Freelancer user */
  freelancer?: GenericUser
  /** Notification timestamp */
  notificationDateTime?: string
  /** Creation timestamp */
  createdDateTime: string
}

export interface FreelancerProfileProjectType {}

export interface FreelancerProfileResponseTime {}

export interface FreelancerProfileSearchAreaInput {
  /** Latitude coordinate */
  latitude: number
  /** Longitude coordinate */
  longitude: number
}

/** Filter for searching freelancer profiles */
export interface FreelancerProfileSearchFilter {
  /** Type of user to search (freelancer or client) */
  userType: FreelancerProfileSearchUserTypeEnum
  /** Weighted ontology identifiers */
  weightedOntologyIds?: Array<FreelancerProfileSearchWeightedOntologyIdInput>
  /** Modifier which provides a boost to the search */
  keyword?: string
  /** Occupation identifiers that need to be selected */
  occupationIds?: Array<string>
  /** Location of the freelancer */
  location?: FreelancerProfileSearchLocationInput
}

export interface FreelancerProfileSearchLocationInput {
  /** Country name or code */
  country?: string
  /** State or region */
  state?: string
  /** City name */
  city?: string
  /** Geographic area to narrow the search */
  area?: FreelancerProfileSearchAreaInput
}

export interface FreelancerProfileSearchUserTypeEnum {}

export interface FreelancerProfileSearchWeightedOntologyIdInput {
  /** Ontology identifier (e.g., upwork:Skill) */
  ontologyId: string
  /** Boost weight to apply for the ontology element */
  weight: number
}

/** Freelancer profile search result record */
export interface FreelancerProfilesSearchRecord {
  /** Record identifier */
  id?: string
  /** Title of the freelancer profile */
  title?: string
  /** Description of the freelancer's profile */
  description?: string
  /** Short name of the freelancer */
  shortName?: string
  /** Freelancer's ciphertext */
  ciphertext?: string
  /** Portrait URL of the freelancer */
  portrait?: string
  /** Date and time when the freelancer was last active on the platform */
  lastActiveDateTime?: string
  /** Total count of hourly jobs */
  totalHourlyJobs?: number
  /** Total count of fixed price jobs */
  totalFixedPriceJobs?: number
  /** Skills of the freelancer */
  skills?: Array<Skill>
  /** Hourly rate of the freelancer */
  hourlyRate?: Money
  /** Top rated status */
  topRatedStatus?: string
  /** Average feedback score across all contracts */
  avgFeedbackScore?: number
  /** Boolean indicating if the earnings are hidden from the profile */
  hideEarnings?: boolean
  /** User details of the freelancer */
  freelancer?: CurrentUser
  /** Freelancer's location */
  location?: FreelancerSearchResultLocation
  /** Contracts executed by the freelancer */
  contracts?: Array<FreelancerSearchResultContractSummary>
}

/** Interface for freelancer profile search records Interface for freelancer profiles search record */
export interface FreelancerProfilesSearchRecordInterface {
  /** Short name of the freelancer */
  shortName?: string
  /** Freelancer's ciphertext */
  ciphertext?: string
}

/** The connection type for SearchResult. */
export interface FreelancerProfilesSearchRecordsConnection {
  /** List of edges */
  edges: Array<FreelancerProfilesSearchResultEdge>
  /** Information that aids in pagination. */
  pageInfo?: PageInfo
  /** Total number of matching records */
  totalCount?: number
}

export interface FreelancerProfilesSearchRecordType {}

/** An edge in a connection. */
export interface FreelancerProfilesSearchResultEdge {
  /** The item at the end of the edge. */
  node?: FreelancerProfilesSearchRecordType
  /** A cursor for use in pagination. */
  cursor: string
}

/** Aggregated freelancer performance stats */
export interface FreelancerProfileStats {
  /** The sum of total charges from the last 360 days */
  totalCharge360?: Money
  /** The sum of total charges from the last 360 days, excluding agency contracts */
  totalCharge360NoAgency?: Money
  /** This is the feedback score calculated using the contracts completed in the last 360 days */
  adjustedScore360?: number
  /** Number of long-term clients (multiple contracts) */
  longTermClients?: number
  /** The total suspension count */
  suspensions?: number
  /** The total suspension count recorded in last 360 days */
  suspensions360?: number
  /** Recent account holds */
  suspensions90limited?: number
  /** The main job category (Level-1 job category) a freelancer has applied to in the last 90 days. */
  topLevelJobCategoryApplied90Days?: string
  /** The count of job applications a freelancer has submitted in last 90 days */
  proposalsCount90Days?: number
  /** The median for the number of job applications in the main category prior to the first hire for the last 365 days */
  medianProposalsForTheTopLevelCategory365?: number
  /** Ratio of number of fit job applications viewed over number of job applications submitted in last 90 days */
  fitProposalsViewRatio90Days?: number
  /** Ratio of number of hidden job applications viewed over number of job applications submitted in last 90 days */
  hiddenProposalsViewedRatio90Days?: number
  /** Ratio of number of job applications viewed over number of job applications submitted in last 90 days */
  totalProposalsViewedRatio90Days?: number
  /** Ratio of number of job applications that were interviewed by client over number of job applications submitted in last 90 days. */
  proposalInterviewedRation90Days?: number
  /** Ratio of number of hired over number of job applications submitted in last 90 days */
  proposalsHiredRatio90Days?: number
  /** 3 most commonly cited reasons for clients hiding the application */
  hideReasonsForProposals?: Array<string>
  /** The number of invitations received in last 90 days */
  totalInvites90Days?: number
  /** The number of responses of invitations received in last 90 days */
  totalInviteResponses90Days?: number
  /** The count on how many invitations a contractor had responded within a day in last 90 days. */
  inviteResponsesPerDay90Days?: number
  /** 12-month earnings, based on earnings in the last 365 days including today */
  totalCharge365NoPending?: Money
  /** 3-month earnings */
  totalCharge90?: Money
  /** Top Rated eligible weeks for the last 16 weeks. */
  weeksEligibleWithin16wks?: number
}

/** User preferences of the profile */
export interface FreelancerProfileUserPreferences {
  /** Public, private or Upwork only */
  visibilityLevel: FreelancerProfileVisibility
  /** Should the agency earnings be displayed on the freelancer's profile */
  hideAgencyEarnings?: boolean
  /** Should the freelancer earnings on their profile be hidden */
  hideEarnings?: boolean
  /** Are both first and last name displayed? */
  exposeFullName: boolean
  /** Do we force the client to provide feedback? */
  clientFeedbackOptional?: boolean
  /** Project type preference */
  projectTypePreference?: FreelancerProjectTypePreference
  /** Is the Job Success Score hidden on the freelancer's profile? */
  hideJss: boolean
}

/** Freelancer Profile Verifications */
export interface FreelancerProfileVerifications {
  /** If the freelancer's ID is verified */
  idVerified: boolean
  /** If the freelancer's phone number is verified */
  phoneVerified: boolean
  /** If the identification through webcam is done */
  webcamVerified: boolean
  /** ID badge status */
  idBadgeStatus?: string
}

export interface FreelancerProfileVisibility {}

export interface FreelancerProjectTypePreference {}

/** Contract feedback summary in freelancer search results */
export interface FreelancerSearchResultContractFeedbackSummary {
  /** Boolean indicating if the feedback is public */
  publicComment?: boolean
  /** Comment provided by the client */
  comment?: string
  /** Feedback score */
  score?: number
}

/** Contract summary in freelancer search results */
export interface FreelancerSearchResultContractSummary {
  /** Description of the contract */
  description?: string
  /** Feedback given at the end of the contract by the client */
  feedback?: FreelancerSearchResultContractFeedbackSummary
  /** Title of the contract */
  title?: string
  /** Hourly rate on this contract */
  hourlyRate?: Money
  /** Total number of hours spent on this contract */
  totalHours?: number
  /** Total charges incurred on this contract */
  totalCharges?: Money
  /** Start date of the contract */
  startedDateTime?: string
  /** End date of the contract */
  endDateTime?: string
}

/** Freelancer search result location */
export interface FreelancerSearchResultLocation {
  /** Country name */
  country?: string
  /** City name */
  city?: string
  /** State or region */
  state?: string
}

/** Skill connection edge */
export interface FreeLancerSkillEdge {
  /** Skill node */
  node: Skill
}

/** Connection to the Freelancer Skills list */
export interface FreelancerSkillsConnection {
  /** Edges in the skills connection */
  edges: Array<FreeLancerSkillEdge>
}

/** Freelancer type */
export interface FreelancerType {}

/** Freelancer visibility settings */
export interface FreelancerVisibility {
  /** Whether visibility is locked by policy or hold */
  locked?: boolean
  /** Whether the profile is flagged as risky */
  risky?: boolean
  /** Current visibility selection */
  currentVisibility?: string
  /** Original visibility before changes */
  originalVisibility?: string
}

/** Information about regular organization */
export interface GenericOrganization {
  /** ID of the current organization */
  id: string
  /** Record ID of the organization */
  rid?: string
  /** Legacy organization identifier */
  legacyId?: string
  /** Name of the current organization */
  name?: string
  /** Type of the Organization. Possible values are BUSINESS / SOLE_PROPRIETOR */
  type?: OrganizationType
  /** Legacy type of the Organization. Possible values are CLIENT / VENDOR */
  legacyType?: OrganizationLegacyType
  /** Flag associated with the Organization */
  flag?: OrganizationFlag
  /** Information about the parent Organization, if any */
  parentOrganization?: GenericOrganization
  /** Indicates whether this organization is active. Applicable to a team organization. */
  active?: boolean
  /** Indicates whether this organization/team is hidden. Applicable to a team organization. */
  hidden?: boolean
  /** Private information about current company */
  company?: PrivateCompanyInfo
  /** Photo URL/Logo for the organization, if any and if user has access to it, otherwise null */
  photoUrl?: string
  /** When the organization was created */
  creationDate?: string
  /** List of offers for root agency organization */
  agencyOffers?: ContractOfferConnection
  offerByRootCompanyFilter?: OfferByRootCompanyFilter
  /** List of offers for the client organization The maximum page size is 50 */
  clientOffers?: ContractOfferConnection
  offerByClientFilter?: OfferByClientFilter
  jobPosting?: JobPostingConnection
  jobPostingFilter: JobPostingsFilter
}

/** Information about regular user */
export interface GenericUser {
  /** Unique user identifier
                          Example: 1181921839933591552 */
  id: string
  /** Nickname ID of a user. Please, only use if really needed. Unique ID should be used when possible.
                          Example: foofreelancer */
  nid: string
  /** Record ID of a user. Please, only use if really needed. Unique ID should be used when possible.
                          Example: 2366358 */
  rid: string
  /** First name + abbreviated last name, e.g. John Smith -> John S. */
  name?: string
  /** First name of the user. */
  firstName?: string
  /** Last name of the user. */
  lastName?: string
  /** Photo URL of the user. */
  photoUrl?: string
  /** The public user url */
  publicUrl?: string
  /** email of user */
  email?: string
  location?: UserLocation
  /** Freelancer profile for the specified user */
  freelancerProfile?: FreelancerProfile
  /** Unique ciphertext identifier */
  ciphertext?: string
  /** Get talent profile for the user */
  talentProfile?: TalentProfile
}

/** Hourly contract term including rate and dates */
export interface HourlyContractTerm {
  /** Term identifier (UID) */
  id: string
  /** Hourly rate applied during the term */
  hourlyRate?: Money
  /** Creation date of the term */
  createDate?: string
  /** Last modification date of the term */
  modifyDate?: string
  /** Effective change date */
  changeDate?: string
  /** User who created the term */
  createdBy?: ContractUser
  /** Actor type for the creator */
  creatorUserType?: CreatorType
  /** User who last changed the term */
  changedBy?: ContractUser
  /** Start date of the term */
  startDate?: string
  /** Actor type for the last change */
  changingUserType?: CreatorType
  /** Whether manual time is allowed during the term */
  manualTimeAllowed?: boolean
  /** End date of the term */
  endDate?: string
  /** Engagement payment type for the term */
  jobType?: JobType
  /** Protected time calculation period */
  ptcData?: PtcData
}

/** Hourly contract terms */
export interface HourlyContractTerms {
  /** Expected engagement duration */
  engagementDuration?: EngagementDuration
  /** Type of engagement (full-time, part-time, etc.) */
  engagementType: EngagementType
  /** Client is unsure about project duration */
  notSureProjectDuration?: boolean
  /** Hourly budget type */
  hourlyBudgetType?: JobPostingHourlyBudgetType
  /** Minimum hourly rate */
  hourlyBudgetMin?: number
  /** Maximum hourly rate */
  hourlyBudgetMax?: number
}

/** Weekly hourly limit period and identifiers */
export interface HourlyLimit {
  /** Hourly limit record identifier (UID) */
  id: string
  /** Maximum weekly hours permitted */
  weeklyLimit?: string
  /** Record creation date */
  createDate?: string
  /** Last modification date */
  modifyDate?: string
  /** Period start date */
  startDate?: string
  /** Period end date */
  endDate?: string
  /** Legacy identifier (integer) */
  legacyId?: number
}

/** Terms for hourly rate offer */
export interface HourlyTerms {
  /** Hourly rate amount */
  rate?: Money
  /** Max hours can be worked for a week */
  weeklyHoursLimit?: number
  /** Weekly stipend amount, if in stipened mode Will be removed in future release, use modernized StipendTerms */
  weeklyStipend?: Money
  /** Flag to indicate whether manual time log is allowed */
  manualTimeAllowed?: boolean
}

/** Contains location information used in i18n settings */
export interface I18nLocation {
  /** Country information for the user's location */
  country?: Country
}

/** User's i18n entity */
export interface I18nSettings {
  /** Whether the user's country is supported for i18n features */
  countrySupported?: boolean
  /** Location information for i18n settings */
  location?: I18nLocation
  /** Current i18n eligibility status */
  status?: I18nSettingsStatus
  /** How location should be displayed to the user */
  locationViewType?: LocationViewType
  /** User's preferred location type preference */
  userPreferredLocationType?: UserPreferredLocationType
  /** Collection of i18n feature flags */
  settingsFlags?: I18nSettingsFlags
}

/** A set of i18n flags/checks */
export interface I18nSettingsFlags {
  /** Whether to show domestic location filter on freelancer search */
  showDomesticLocationFilterOnFLSearch?: boolean
  /** Whether to show job search functionality */
  showJobSearch?: boolean
  /** Whether to show phone verification option */
  showPhoneVerification?: boolean
  /** Whether to show site message to update address */
  showSmfToUpdateAddress?: boolean
  /** Whether to show personal address autocomplete */
  showPersonalAddressAutocomplete?: boolean
  /** Whether to show message container */
  showMessageContainer?: boolean
  /** Whether to show location preference on job post */
  showLocationPreferenceOnJobPost?: boolean
  /** Whether domestic filtering is enabled by default */
  defaultDomesticEnabled?: boolean
  /** Whether job search is defaulted to ON */
  jobSearchDefaultedToON?: boolean
  /** Whether to show location verification on find work home */
  showLocationVerificationOnFWH?: boolean
  /** Whether domestic is enabled for freelancers on freelancer search */
  domesticEnabledForFreelancersOnFLSearch?: boolean
}

/** I18n eligibility status */
export interface I18nSettingsStatus {}

/** Built-in ID */
export interface ID {}

/** Built-in Int */
export interface Int {}

/** Input range for integer values */
export interface IntRange {
  /** Start of range */
  rangeStart?: number
  /** End of range */
  rangeEnd?: number
}

/** Input for inviting a user to a team */
export interface InvitationToTeamInput {
  /** Invite flow type */
  flow: InviteToTeamFlow
  /** Email of the invitee */
  inviteeEmail?: string
  /** Top level organization ID to which invitee is invited (deprecated, argument is not used anymore) */
  invitedToTopLevelOrganizationId?: string
  /** List of team IDs to which invitee is invited (optional, invitedToTopLevelOrganizationId could be enough) */
  invitedToOrganizationsIds: Array<string>
  /** Inviter user ID (personUid) */
  inviterUserId?: string
  /** Landing URL (to which user will be redirected after accepting invitation) */
  landingUrl: string
  /** Parameters that will be attached to email template */
  emailParams?: InviteToTeamEmailParams
  /** Map of metadata */
  metadata: Array<StringMapElementInput>
  /** List of roles to be granted to invitee */
  frankoRolesToBeAssigned?: Array<string>
  /** Flag to assign roles to org and all its descendant teams */
  hierarchical?: boolean
  /** flag to include first org uid from invitedToOrganizationsIds as participant in IDBC check */
  includeFirstOrgIdAsParticipant?: boolean
}

/** Input for email parameters */
export interface InviteToTeamEmailParams {
  /** Message to be sent to invitee */
  message: string
}

/** Failed response for invite to team */
export interface InviteToTeamFailedResponse {
  /** Failure code */
  code?: string
  /** Human-readable failure message */
  message?: string
  /** Failed invitation payload */
  invitation?: FailedInvitation
}

export interface InviteToTeamFlow {}

/** Invite to team response details */
export interface InviteToTeamResponse {
  /** Successfully processed invitations */
  succeeded: Array<InviteToTeamSucceededResponse>
  /** Failed invitations with reasons */
  failed: Array<InviteToTeamFailedResponse>
}

/** Success response for invite to team */
export interface InviteToTeamSucceededResponse {
  /** Invitation identifier */
  id: string
  /** Invitation token */
  token?: string
}

/** Activity metrics for a job posting */
export interface JobActivity {
  /** Last client activity timestamp */
  lastClientActivity?: string
  /** Number of invites sent */
  invitesSent: number
  /** Total invited to interview */
  totalInvitedToInterview: number
  /** Total hired */
  totalHired: number
  /** Total unanswered invites */
  totalUnansweredInvites: number
  /** Total offers made */
  totalOffered: number
  /** Total recommended candidates */
  totalRecommended?: number
}

/** Job category ontology entity */
export interface JobCategory {
  /** Unique identifier for the job category */
  id: string
  /** ontologyId is a semantic identifier that unqiuely identifies an ontology element
                          Its value doesn't depend on the environment (same for dev, staging, prod)
                          Example: upwork:AdministrationSoftware */
  ontologyId: string
  /** Types of ontology entity this category represents */
  type: Array<OntologyEntityType>
  /** Defines the status of an occupation.
                          
                            Active: Skill is active and available for use
                            Deprecated: Skill has been deprecated
                            Pending: Skill has been created recently and is not active yet */
  entityStatus: OntologyEntityStatus
  /** Defines the label of the entity that is displayed across Upwork. It must be a unique value. */
  preferredLabel: string
  /** Definition or description of this job category */
  definition?: string
  /** Defines (when available) the date (timestamp) of creation for the entity. */
  createdDateTime?: string
  /** Defines (when available) the date (timestamp) of update for the entity. */
  modifiedDateTime?: string
}

/** Job duration categories */
export interface JobDuration {}

/** Bill rate configuration for a job posting */
export interface JobPostBillRate {
  /** Bill rate code identifier */
  billRateCode: string
}

/** Defines the duration of the job post */
export interface JobPostDurationType {}

/** Custom field key-value pair for enterprise job postings */
export interface JobPostEnterpriseCustomFields {
  /** Custom field key */
  key: string
  /** Custom field value */
  value: string
}

/** Management side JobPosting information */
export interface JobPosting {
  /** Job posting identifier */
  id: string
  /** Optimistic locking version */
  version?: number
  /** Core posting information block */
  info?: JobPostingInfo
  /** Visibility/access level */
  visibility?: AccessType
  /** Ownership details */
  ownership?: JobPostingOwnership
  /** Title and description */
  content?: JobPostingContent
  /** Attached files */
  attachment: Array<JobPostingAttachment>
  /** Classification attributes */
  classification?: JobPostingClassification
  /** Segmentation metadata */
  segmentationData?: JobPostingSegmentationData
  /** Contract information of the Posting */
  contractTerms?: JobPostingContractTerms
  /** Contractor selection criteria */
  contractorSelection?: JobPostingContractorSelection
  /** Additional information */
  additionalInfo?: JobPostingAdditionalInfo
  /** Private Talent Cloud info */
  ptcInfo?: JobPostingPtcInfo
  /** Proposal statistics */
  proposalsStatistics?: ProposalsStatistics
  /** Custom field responses */
  customFields?: Array<JobPostingCustomFields>
}

/** Job posting access levels */
export interface JobPostingAccess {}

/** Additional metadata captured at job creation */
export interface JobPostingAdditionalInfo {
  /** Client's hire count at posting creation */
  clientNumberOfHiresOnCreate?: number
  /** Client's total spend at posting creation */
  clientTotalSpentOnCreate?: Money
  /** Whether direct hire is enabled */
  directHire?: boolean
  /** Whether this is an invite-only post */
  invitePost?: boolean
  /** Last buyer activity timestamp */
  lastBuyerActivity?: string
}

/** Additional options for job posting */
export interface JobPostingAdditionalRequest {
  /** Whether direct hire is enabled */
  directHire?: boolean
  /** Whether this is an invite-only post */
  invitePost?: boolean
  /** Whether early engagement is enabled */
  earlyEngagement?: boolean
  /** Whether early engagement was visited */
  earlyEngagementVisited?: boolean
}

/** Additional skill input for job posting */
export interface JobPostingAdditionalSkillInput {
  /** Skill identifier */
  skillId?: string
  /** Free-text skill name */
  freetext?: string
  /** Whether skill was converted from legacy format */
  legacyConvertedSkill?: boolean
  /** Skill relevance (mandatory or nice-to-have) */
  relevance?: JobPostSkillRelevance
}

/** Annotations for job posting */
export interface JobPostingAnnotations {
  /** Tags for categorization */
  tags?: Array<string>
  /** Custom field key-value pairs */
  customFields?: Array<JobPostingAnnotationsCustomField>
}

/** Custom field annotation */
export interface JobPostingAnnotationsCustomField {
  /** Field key */
  key?: string
  /** Field value */
  value?: string
}

/** Attachment metadata for a job posting */
export interface JobPostingAttachment {
  /** Attachment identifier */
  id: string
  /** Sequence number for ordering */
  sequenceNumber: number
  /** Original file name */
  fileName: string
  /** Public link to the file */
  link?: string
  /** Link to AFS storage */
  afsFileLink?: string
  /** File size in bytes */
  contentLength?: number
  /** MIME content type */
  contentType?: string
  /** Creation timestamp */
  createdDateTime?: string
}

/** Job posting category */
export interface JobPostingCategory {
  /** Category identifier */
  id: string
  /** Category display name */
  name: string
  /** URL-friendly category slug */
  slug?: string
}

/** Classification info attached with the job posting (management side) */
export interface JobPostingClassification {
  /** Primary category of the posting */
  category?: JobPostingCategory
  /** Subcategory of the posting */
  subCategory?: JobSubPostingCategory
  /** Core skills associated with the posting */
  skills: Array<Skill>
  /** Custom skills provided by the client */
  customSkills: Array<CustomJobPostSkill>
  /** Additional skills associated with the posting */
  additionalSkills: Array<Skill>
  /** Ontology occupation identifier */
  occupationId?: string
  /** Additional free-text skills */
  customAdditionalSkills: Array<string>
}

/** Connection for management job postings */
export interface JobPostingConnection {
  /** Total number of management job postings */
  totalCount?: number
  /** Connection edges containing nodes and cursors */
  edges: Array<JobPostingEdge>
  /** Pagination information */
  pageInfo?: PageInfo
}

/** User-facing job posting content */
export interface JobPostingContent {
  /** Job posting title */
  title: string
  /** Job posting description */
  description: string
}

/** Contractor selection criteria for a job posting */
export interface JobPostingContractorSelection {
  /** Proposal submission requirements */
  proposalRequirement?: JobPostingProposalRequirements
  /** Freelancer qualification criteria */
  qualification?: JobPostingQualification
  /** Location constraints */
  location?: JobPostingLocation
}

/** Contract terms for a job posting */
export interface JobPostingContractTerms {
  /** Start date for the contract terms formatted according to ISO-8601 */
  contractStartDate?: string
  /** End date for the contract terms formatted according to ISO-8601 */
  contractEndDate?: string
  /** Type of contract (hourly or fixed-price) */
  contractType: ContractType
  /** On-site work requirement type */
  onSiteType?: OnSiteType
  /** Number of persons to hire */
  personsToHire?: number
  /** Required experience level */
  experienceLevel?: ExperienceLevel
  /** Fixed-price specific terms */
  fixedPriceContractTerms?: FixedPriceContractTerms
  /** Hourly specific terms */
  hourlyContractTerms?: HourlyContractTerms
}

/** Input for creating a job posting */
export interface JobPostingCreateRequest {
  /** Organization identifier that owns the job posting */
  organizationId: string
  /** Basic job posting information */
  jobPostingInfo?: JobPostingRequestInfo
  /** Qualification requirements for applicants */
  qualifications?: JobPostingQualificationRequest
  /** Screening questions for applicants */
  questions: Array<JobPostingQuestionRequest>
  /** Segmentation data for targeting */
  segmentationData: Array<JobPostingSegmentationRequest>
  /** File attachment identifiers */
  attachmentIds: Array<string>
  /** Private talent cloud information */
  ptcInfo?: JobPostingPtcInfoRequest
  /** Whether to save PTC information */
  savePtcInfo?: boolean
  /** Whether this is an invite-only post */
  invitePost?: boolean
  /** Additional job posting request data */
  jobPostingAdditionalRequest?: JobPostingAdditionalRequest
  /** SANDS job post data */
  sandsJobPost?: SandsJobPostRequest
  /** Custom fields for the job posting */
  customFields?: JobPostingCustomFieldsRequest
  /** Annotations for the job posting */
  annotations?: JobPostingAnnotations
  /** Enterprise-specific custom fields */
  enterpriseCustomFields: Array<JobPostEnterpriseCustomFields>
  /** Bill rate configuration */
  billRate?: JobPostBillRate
}

/** Response for creating a job posting */
export interface JobPostingCreateResponse {
  /** Created job posting identifier */
  id: string
  /** Whether qualifications section was saved */
  qualificationsSaved: boolean
  /** Whether skills section was saved */
  skillsSaved: boolean
  /** Whether screening questions were saved */
  questionsSaved: boolean
  /** Whether segmentation data was saved */
  segmentationDataSaved: boolean
  /** Whether attachments were saved */
  attachmentsSaved: boolean
  /** Whether PTC info was saved */
  ptcInfoSaved: boolean
  /** Whether additional posting info was saved */
  jobPostingAdditional: boolean
  /** Whether Sands job post data was saved */
  sandsJobPostSaved: boolean
  /** Whether custom fields were saved */
  customFieldsSaved: boolean
  /** Optimistic locking version */
  version?: number
}

/** Job posting custom fields */
export interface JobPostingCustomFields {
  /** Unique identification for the response */
  responseId?: string
  /** Unique identification for the custom field */
  id?: string
  /** Display value */
  displayValue?: string
  /** Response */
  value?: string
}

/** Custom fields request for job posting */
export interface JobPostingCustomFieldsRequest {
  /** Custom field responses */
  responses?: Array<CustomFieldsResponse>
  /** New dropdown options */
  newDropdowns?: Array<CustomFieldDropDown>
}

/** Edge in management job posting connection */
export interface JobPostingEdge {
  /** Cursor for pagination */
  cursor: string
  /** Job posting node */
  node?: JobPosting
}

/** Hourly budget type for job posting */
export interface JobPostingHourlyBudgetType {}

/** High-level job posting details */
export interface JobPostingInfo {
  /** Job posting status */
  status?: JobPostingStatus
  /** Company associated with the job posting */
  company?: CurrentOrganization
  /** Audit timestamps for the job posting */
  auditTime?: AuditTime
  /** Whether the job posting is hidden */
  hidden?: boolean
  /** Source system where the posting was created */
  siteSource?: string
  /** Keep the posting open after a hire is made */
  keepOpenOnHire?: boolean
  /** Reference to the draft job posting ID */
  draftJobPostingId?: string
  /** Publish date time of the posting formatted according to ISO-8601 */
  publishDateTime?: string
  /** Filled date and time if the job was filled */
  filledDateTime?: string
  /** Whether sourcing updates are forbidden */
  sourcingUpdateForbidden?: boolean
  /** Count of sourcing updates */
  sourcingUpdateCount?: number
  /** Premium posting indicator */
  premium?: boolean
  /** Legacy ciphertext for compatibility */
  legacyCiphertext?: string
  /** Whether budget is hidden from public view */
  hideBudget?: boolean
  /** Category identifier of the posting */
  categoryId?: string
  /** Group identifier of the posting */
  groupId?: string
  /** Poster is unsure about number of freelancers to hire */
  notSureFreelancersToHire?: boolean
  /** Poster is unsure about experience level required */
  notSureExperienceLevel?: boolean
  /** Hourly budget type selected */
  hourlyBudgetType?: JobPostingHourlyBudgetType
  /** Minimum hourly budget */
  hourlyBudgetMin?: Money
  /** Maximum hourly budget */
  hourlyBudgetMax?: Money
  /** User who last changed the posting */
  changedByUser?: GenericUser
  /** Reason identifier associated with status */
  reasonId?: string
  /** Human-readable reason name */
  reasonName?: string
}

/** Location constraints for a job posting */
export interface JobPostingLocation {
  /** Allowed countries */
  countries: Array<string>
  /** Allowed states */
  states: Array<string>
  /** Allowed timezones */
  timezones: Array<string>
  /** Whether local check is required */
  localCheckRequired?: boolean
  /** Whether local market only */
  localMarket?: boolean
  /** Specific geographic areas */
  areas: Array<Area>
  /** Client is unsure about location preference */
  notSureLocationPreference?: boolean
  /** Description of local requirement */
  localDescription?: string
  /** Description of location flexibility */
  localFlexibilityDescription?: string
  /** Physical address */
  address?: string
}

/** Location requirement for job posting */
export interface JobPostingLocationRequest {
  /** Type of area (city, postal code, etc.) */
  areaType?: AreaType
  /** Location name */
  name?: string
}

/** Owner and organization associations for a job posting */
export interface JobPostingOwnership {
  /** User who owns the posting */
  user?: GenericUser
  /** Client company associated with the posting */
  clientCompany?: CurrentOrganization
  /** Company owning the posting */
  company?: GenericOrganization
  /** Team owning the posting */
  team?: GenericOrganization
}

/** Proposal requirements for a job posting */
export interface JobPostingProposalRequirements {
  /** Whether cover letter is required */
  coverLetterRequired?: boolean
  /** Whether freelancer can propose milestones */
  freelancerMilestonesAllowed?: boolean
  /** List of screening questions */
  screeningQuestions: Array<JobPostingQuestion>
}

/** Private Talent Cloud related info for a job posting */
export interface JobPostingPtcInfo {
  /** PTC visibility setting */
  jobPostingPtcVisibility?: JobPostingPtcVisibility
}

/** Private Talent Cloud information for job posting */
export interface JobPostingPtcInfoRequest {
  /** Job reference code */
  jobReference?: string
  /** Talent cloud identifiers */
  talentCloudIds: Array<string>
  /** PTC visibility setting */
  visibility?: JobPostingPtcVisibility
  /** Employer company reference */
  employerCompanyReference?: string
  /** PTC status */
  status?: JobPostingPtcStatus
  /** Purchase order identifier */
  purchaseOrderId?: string
  /** Whether location check is required */
  locationCheckRequired?: boolean
  /** Allowed countries */
  countries: Array<string>
  /** On-site work requirement */
  onSiteType?: OnSiteType
  /** On-site city */
  onSiteCity?: string
  /** On-site country */
  onSiteCountry?: string
  /** Creation date (Unix timestamp) */
  createDate?: number
  /** Reason for on-site requirement */
  onSiteReason?: string
  /** Flexibility description for on-site */
  onSiteReasonFlexible?: string
  /** On-site state */
  onSiteState?: string
  /** Team identifier */
  teamId?: string
  /** Whether travel is required */
  travelRequired?: boolean
  /** Last updated date (Unix timestamp) */
  updatedDate?: number
}

/** PTC status for job posting */
export interface JobPostingPtcStatus {}

/** PTC visibility options for job posting */
export interface JobPostingPtcVisibility {}

/** Qualification requirements for a job posting */
export interface JobPostingQualification {
  /** Type of contractor (individual, agency, etc.) */
  contractorType?: ContractorType
  /** Required English proficiency level */
  englishProficiency?: EnglishProficiency
  /** Whether portfolio is required */
  hasPortfolio?: boolean
  /** Whether rising talent is preferred */
  risingTalent?: boolean
  /** Minimum job success score */
  jobSuccessScore?: number
  /** Minimum earnings requirement */
  earnings?: Earning
  /** Preferred freelancer groups */
  preferredGroups: Array<PreferredGroup>
  /** Preferred tests or certifications */
  preferredTests?: Array<PreferredTest>
}

/** Qualification requirements for a job posting */
export interface JobPostingQualificationRequest {
  /** Minimum hours worked on the platform */
  oDeskHours?: number
  /** Test identifier for skill assessment */
  testId?: string
  /** Location region identifier */
  locationRegionId?: string
  /** Whether freelancer must have a portfolio */
  hasPortfolio?: boolean
  /** Type of contractor (individual, agency, etc.) */
  contractorType?: ContractorType
  /** Minimum job success score required */
  jobSuccessScore?: number
  /** Required English proficiency level */
  englishProficiency?: EnglishProficiency
  /** Whether rising talent badge is required */
  risingTalent?: boolean
  /** List of required countries */
  countries: Array<string>
  /** List of required regions */
  regions: Array<string>
  /** Whether location verification is required */
  locationCheckRequired?: boolean
  /** List of required states */
  states: Array<string>
  /** List of required timezones */
  timezones: Array<string>
  /** Minimum earnings requirement */
  earnings?: Earning
  /** Whether local market preference applies */
  localMarket?: boolean
  /** On-site work type requirement */
  onSiteType?: OnSiteType
  /** Preferred locations for the job */
  locations: Array<JobPostingLocationRequest>
  /** Description for local market preferences */
  localDescription?: string
  /** Description for location flexibility */
  localFlexibilityDescription?: string
  /** Creation timestamp */
  ctime?: string
  /** Required English skill level */
  englishSkill?: EnglishSkill
  /** Group record identifier */
  groupRid?: string
  /** List of required languages */
  languages?: Array<string>
  /** Modification timestamp */
  mtime?: string
  /** Opening identifier */
  openingId?: string
}

/** Screening question for a job posting */
export interface JobPostingQuestion {
  /** Question identifier */
  id: string
  /** Question text */
  question?: string
  /** User who created the question */
  user?: GenericUser
  /** Type of question */
  questionType?: QuestionType
  /** Audit timestamps */
  auditTime?: AuditTime
}

/** Screening question for job posting */
export interface JobPostingQuestionRequest {
  /** Question text */
  question: string
  /** Type of question */
  type?: QuestionType
}

/** Basic attributes for a job posting request */
export interface JobPostingRequestInfo {
  /** Job title */
  title?: string
  /** Job description text */
  description?: string
  /** Type of engagement (full-time, part-time, etc.) */
  engagementType?: EngagementType
  /** Consumers can use the following query for the duration ID 

 proposalMetadata{
   engagementDurationValues{
     id
     label
   }
 } */
  durationId?: string
  /** Current status of the job posting */
  status?: JobPostingStatus
  /** Type of job post (hourly or fixed price) */
  type?: JobPostType
  /** Amount as string containing exact value with dot symbol (".") is used to separate integer and fractional parts */
  amount?: string
  /** Whether a cover letter is required from applicants */
  coverLetterRequired?: boolean
  /** Access type for the job posting */
  access?: AccessType
  /** Required experience level for applicants */
  experienceLevel?: ExperienceLevel
  /** Number of freelancers to hire for this job */
  freelancersToHire?: number
  /** Consumers can use the following query for category and group ID 

 ontologyCategories {
   id
   preferredLabel
   subcategories {
     id
     preferredLabel
 }

 It's equal to subcategories.id (eg Web Development) */
  categoryId?: string
  /** Equal to ontologyCategories.id (eg Web, Mobile & Software Dev) (see example in categoryId) */
  groupId?: string
  /** End date for the Posting formatted according to ISO-8601 */
  endDate?: string
  /** Start date for the Posting formatted according to ISO-8601 */
  startDate?: string
  /** Source site identifier */
  siteSource?: string
  /** Whether to keep the job open after hiring */
  keepOpenOnHire?: boolean
  /** Draft job posting identifier */
  draftJobPostingId?: string
  /** Whether freelancer-created milestones are allowed */
  freelancerMilestonesAllowed?: boolean
  /** Whether this is a premium job posting */
  premium?: boolean
  /** Whether to hide the budget from applicants */
  hideBudget?: boolean
  /** Client is unsure about number of freelancers to hire */
  notSureFreelancersToHire?: boolean
  /** Client is unsure about project duration */
  notSureProjectDuration?: boolean
  /** Client is unsure about required experience level */
  notSureExperienceLevel?: boolean
  /** Client is unsure about location preference */
  notSureLocationPreference?: boolean
  /** Type of hourly budget (range, custom, etc.) */
  hourlyBudgetType?: JobPostingHourlyBudgetType
  /** Hourly min budget as string containing exact value with dot symbol (".") is used to separate integer and fractional parts */
  hourlyBudgetMin?: string
  /** Hourly max budget as string containing exact value with dot symbol (".") is used to separate integer and fractional parts */
  hourlyBudgetMax?: string
  /** Auto review status of the job posting */
  autoReviewStatus?: AutoReviewStatus
  /** Timestamp of auto review */
  autoReviewTs?: string
  /** User ID who last changed the posting */
  changedById?: string
  /** Encrypted identifier */
  ciphertext?: string
  /** Timestamp when job was closed */
  closeTime?: string
  /** Company name for the job posting */
  companyName?: string
  /** Company identifier */
  companyId?: string
  /** First name of the posting creator */
  createdByFirstName?: string
  /** Last name of the posting creator */
  createdByLastName?: string
  /** User ID of the posting creator */
  createdById?: string
  /** Creation timestamp */
  ctime?: string
  /** Reason for deletion if deleted */
  deletedReason?: string
  /** Date when the position was filled */
  filledDate?: string
  /** Whether this is a ghost post */
  ghostPost?: boolean
  /** Whether the posting is hidden */
  hidden?: boolean
  /** Hour pack identifier */
  hourPackId?: string
  /** Timestamp of last OBO agent action */
  lastOboAgentActionTs?: string
  /** User ID of last OBO agent */
  lastOboAgentUserId?: string
  /** Legacy encrypted identifier */
  legacyCiphertext?: string
  /** Legacy record identifier */
  legacyRid?: string
  /** Manual review status */
  manualReviewStatus?: ManualReviewStatus
  /** Modification timestamp */
  mtime?: string
  /** Whether job is off the network */
  offTheNetwork?: boolean
  /** Timestamp when job was published */
  publishTime?: string
  /** Reason record identifier */
  reasonRid?: string
  /** Timestamp for sourcing */
  sourcingTime?: string
  /** Number of sourcing updates */
  sourcingUpdateCount?: number
  /** Whether sourcing update is forbidden */
  sourcingUpdateForbidden?: boolean
  /** Unique identifier string */
  uid?: string
  /** Weekly retainer budget amount */
  weeklyRetainerBudget?: number
  /** Optimistic locking version */
  version?: number
  /** Tools required for the job */
  tools: Array<JobPostToolInput>
  /** Expected deliverables */
  deliverables?: string
  /** Duration type (one-time or ongoing) */
  durationType?: JobPostDurationType
  /** Project deadline */
  deadline?: string
}

/** Segmentation data for a job posting */
export interface JobPostingSegmentationData {
  /** Segmentation values assigned to the posting */
  segmentationValues: Array<JobPostingSegmentationValue>
}

/** Segmentation value assignment for job posting */
export interface JobPostingSegmentationRequest {
  /** Segmentation value identifier */
  segmentationValueId: string
  /** Custom value if applicable */
  customValue?: string
}

/** Segmentation value entry for a job posting */
export interface JobPostingSegmentationValue {
  /** Segmentation value identifier */
  id: string
  /** Display label */
  label?: string
  /** Reference name/code */
  referenceName?: string
  /** Sorting order */
  sortOrder?: number
  /** Segmentation type reference */
  segmentationType?: SegmentationType
  /** Audit timestamps */
  auditTime?: AuditTime
  /** Linked skill (if applicable) */
  skill?: Skill
}

/** Input filter for searching Job Posting for a given organization */
export interface JobPostingsFilter {
  pagination_eq?: Pagination
  /** Title of the Job to be searched */
  title_eq?: string
  /** Collection of the Team's Id for which result to be filtered */
  postByTeamIds_any: Array<string>
  /** Collection of the Person's Id for which result to be filtered */
  postByPersonIds_any: Array<string>
  /** Status and success pairs for filtering */
  statusAndAccess_any: Array<CompanyJobPostingStatusAccess>
  /** Jobs to be excluded posted by the persons */
  excludePostByPersonIds_any: Array<string>
  /** Jobs to be filtered based for the groups */
  categoryGroupIds_any: Array<string>
  /** Jobs to be filtered based on the contract type */
  contractType_eq?: ContractType
  /** Jobs to be filtered based on created after date, date in ISO format yyyy-MM-ddThh:mm:ss.SSS+HHmm or yyyy-MM-dd */
  createdDateTimeFrom_eq?: string
  /** Jobs to be filtered based on created before date, date in ISO format yyyy-MM-ddThh:mm:ss.SSS+HHmm or yyyy-MM-dd */
  createdDateTimeTo_eq?: string
}

/** Skill input for job posting */
export interface JobPostingSkillInput {
  /** Parent ontology skill identifier */
  parentSkillId: string
  /** Specific skill identifier */
  skillId?: string
  /** Free-text skill name */
  freetext?: string
  /** Boolean answer for skill question */
  boolAnswer?: boolean
  /** Whether skill was converted from legacy format */
  legacyConvertedSkill?: boolean
  /** Skill relevance (mandatory or nice-to-have) */
  relevance?: JobPostSkillRelevance
}

/** Job posting status values */
export interface JobPostingStatus {}

/** Input for updating an existing job posting */
export interface JobPostingUpdateRequest {
  /** Organization identifier that owns the job posting */
  organizationId: string
  /** Basic job posting information */
  jobPostingInfo?: JobPostingRequestInfo
  /** Qualification requirements for applicants */
  qualifications?: JobPostingQualificationRequest
  /** Screening questions for applicants */
  questions: Array<JobPostingQuestionRequest>
  /** Segmentation data for targeting */
  segmentationData: Array<JobPostingSegmentationRequest>
  /** File attachment identifiers */
  attachmentIds: Array<string>
  /** Private talent cloud information */
  ptcInfo?: JobPostingPtcInfoRequest
  /** Whether to save PTC information */
  savePtcInfo?: boolean
  /** Whether this is an invite-only post */
  invitePost?: boolean
  /** Additional job posting request data */
  jobPostingAdditionalRequest?: JobPostingAdditionalRequest
  /** SANDS job post data */
  sandsJobPost?: SandsJobPostRequest
  /** Custom fields for the job posting */
  customFields?: JobPostingCustomFieldsRequest
  /** Annotations for the job posting */
  annotations?: JobPostingAnnotations
  /** Enterprise-specific custom fields */
  enterpriseCustomFields: Array<JobPostEnterpriseCustomFields>
  /** Bill rate configuration */
  billRate?: JobPostBillRate
}

/** Response for updating a job posting */
export interface JobPostingUpdateResponse {
  /** Updated job posting identifier */
  id: string
  /** Whether qualifications section was saved */
  qualificationsSaved: boolean
  /** Whether skills section was saved */
  skillsSaved: boolean
  /** Whether screening questions were saved */
  questionsSaved: boolean
  /** Whether segmentation data was saved */
  segmentationDataSaved: boolean
  /** Whether attachments were saved */
  attachmentsSaved: boolean
  /** Whether PTC info was saved */
  ptcInfoSaved: boolean
  /** Whether Sands job post data was saved */
  sandsJobPostSaved: boolean
  /** Optimistic locking version */
  version?: number
}

export interface JobPostsFilter {
  /** If specified, only job posts belonging to these teams will be fetched */
  teamIds: Array<string>
  /** Job post status list. Default value is ALL. */
  statuses: Array<string>
  /** Whether to exclude hidden openings from result. Default is true. */
  excludeHidden?: boolean
  /** Job posts projection fields */
  fields: Array<string>
}

/** Defines whether skills are mandatory or nice to have */
export interface JobPostSkillRelevance {}

/** Tool or software requirement for a job posting */
export interface JobPostToolInput {
  /** Tool name */
  name?: string
}

/** Job post type */
export interface JobPostType {}

/** Job status values */
export interface JobStatus {}

/** Job posting subcategory */
export interface JobSubPostingCategory {
  /** Subcategory identifier */
  id: string
  /** Subcategory display name */
  name: string
  /** URL-friendly subcategory slug */
  slug?: string
}

/** Engagement payment type associated with a contract */
export interface JobType {}

/** Language definition with ISO code and display name */
export interface Language {
  /** ISO 639 standards - https://en.wikipedia.org/wiki/ISO_639(example: en) */
  iso639Code: string
  /** Flag indicates if the language is active */
  active: boolean
  /** English name of the language */
  englishName: string
}

/** Input for adding or updating language data */
export interface LanguageDataInput {
  /** Language record identifier */
  id?: string
  /** Person RID linking this language */
  personRid?: string
  /** Whether the language is verified */
  verified?: boolean
  /** Whether verified via certificate */
  verifiedByCertificate?: boolean
  /** Whether verified via feedback */
  verifiedByFeedback?: boolean
  /** Language core details */
  language: LanguageInput
  /** Proficiency level details */
  proficiencyLevel: LanguageProficiencyLevelInput
}

/** Input for language details */
export interface LanguageInput {
  /** ISO 639 language code */
  iso639Code: string
  /** Whether the language is active */
  active: boolean
  /** English name of the language */
  englishName: string
}

/** Proficiency level input */
export interface LanguageProficiencyLevelInput {
  /** Proficiency level code */
  code: string
  /** Ordering rank */
  rank?: number
  /** Whether the level is active */
  active?: boolean
  /** Human-readable description */
  description?: string
  /** Category/type of the level */
  type?: string
  /** Title of the proficiency level */
  proficiencyTitle?: FreelancerProfileLanguageProficiencyTitle
}

/** Location view type for displaying user location */
export interface LocationViewType {}

/** Status of manual review for job postings */
export interface ManualReviewStatus {}

/** A custom scalar that handles maps */
export interface Map {}

/** Additional search info for marketplace results */
export interface MarketplaceAdditionalSearchInfo {
  /** Highlighted title for search results */
  highlightTitle?: string
}

/** Contractor selection for a marketplace job posting */
export interface MarketplaceContractorSelection {
  /** Proposal submission requirements */
  proposalRequirement?: MarketplaceProposalRequirements
  /** Freelancer qualification criteria */
  qualification?: MarketplaceQualification
  /** Location constraints */
  location?: MarketplaceLocation
}

/** Contract terms for a marketplace job posting */
export interface MarketplaceContractTerms {
  /** Start date for the contract terms formatted according to ISO-8601 */
  contractStartDate?: string
  /** End date for the contract terms formatted according to ISO-8601 */
  contractEndDate?: string
  /** Type of contract */
  contractType: ContractType
  /** On-site work requirement */
  onSiteType?: OnSiteType
  /** Number of persons to hire */
  personsToHire: number
  /** Required experience level */
  experienceLevel?: ExperienceLevel
  /** Fixed-price terms */
  fixedPriceContractTerms?: FixedPriceContractTerms
  /** Hourly terms */
  hourlyContractTerms?: HourlyContractTerms
  /** Client unsure about number of persons */
  notSurePersonsToHire?: boolean
  /** Client unsure about experience level */
  notSureExperiencelevel?: boolean
}

/** Filter criteria for searching marketplace jobs */
export interface MarketplaceJobFilter {
  /** Generic search filter supports partial Lucene syntax */
  searchExpression_eq?: string
  /** Generic skills filter supports partial Lucene syntax */
  skillExpression_eq?: string
  /** Generic title filter supports partial Lucene syntax */
  titleExpression_eq?: string
  /** Provides additional search terms to check, ignored if searchExpression_eq used */
  searchTerm_eq?: SearchTerm
  /** The id of category of the returned jobs. Parameter works with OR behavior */
  categoryIds_any: Array<string>
  /** The id of subcategory of the returned jobs. Parameter works with OR behavior */
  subcategoryIds_any: Array<string>
  /** The occupationUID of the jobs to return. UIDs should be taken from Ontology and values will be handled with OR */
  occupationIds_any: Array<string>
  /** The ontology skill element uid of the jobs to return. UIDs should be taken from Ontology and values will be handled with AND */
  ontologySkillIds_all: Array<string>
  /** Multiple values of skills to filter on. It makes text match on skills rather than exact match skillsFilter_any: [String!] Deprecated! Use ontology_skill_uid instead! Constrains the search to jobs with id (posting id) higher than sinceId */
  sinceId_eq?: string
  /** Constrains the search to jobs with id (posting id) less than maxId */
  maxId_eq?: string
  /** Constrains the search to jobs of the provided job type */
  jobType_eq?: ContractType
  /** Duration of the hourly jobs. Fixed price jobs will be returned no matter they do not have duration */
  duration_any: Array<JobDuration>
  /** Workload of the hourly jobs. Fixed price jobs will be returned no matter they do not have workload */
  workload_eq?: EngagementType
  /** Constrains the search to jobs from clients with the number of past hires to feet the specified range or value */
  clientHiresRange_eq?: IntRange
  /** Constrains the search to jobs from clients with the rating to feet the specified range or value */
  clientFeedBackRange_eq?: FloatRange
  /** Constrains the search to jobs from clients with the budget. Hourly jobs will be returned no matter they do not have budget */
  budgetRange_eq?: IntRange
  /** Whether to only return jobs of clients with verified payment method */
  verifiedPaymentOnly_eq?: boolean
  /** Return jobs of the clients user worked with (applies to freelancer/agency user site jobs search/jobs feed only) */
  previousClients_eq?: boolean
  /** Return only jobs with the specified contractor tier */
  experienceLevel_eq?: ExperienceLevel
  /** Country or city of the client that posted a job */
  locations_any: Array<string>
  /** Returns jobs located within 100 miles radius around the city with the uid specified in search parameter. Note that other Global Location Jobs Filters are also applied */
  cityId_any: Array<string>
  /** Returns jobs located within 100 miles radius around zipcode with the uid specified in search parameter. Note that other Global Location Jobs Filters are also applied */
  zipCodeId_any: Array<string>
  /** Is used in pair with city_id or zipcode_id to use another search radius than default (100 miles) */
  radius_eq?: number
  /** Returns jobs within specified area or subarea. Note that other Global Location Jobs Filters are also applied */
  areaId_any: Array<string>
  /** Returns jobs posted by client to the specified timezone. Note that other Global Location Jobs Filters are also applied */
  timezone_eq?: string
  /** Returns jobs posted by client to the specified USA state. Note that other Global Location Jobs Filters are also applied */
  usState_eq?: string
  /** Constrains the search to jobs posted to the specified group. The source of the value is ODR op_pref_group_id field groupId_eq: String deprecated Number of days. Constrains the search to jobs posted within last N days */
  daysPosted_eq?: number
  /** Constrains the search to jobs in particular access realm */
  jobPostingAccess?: JobPostingAccess
  /** List of Talent Clouds UIDs freelancer is allowed to see jobs in */
  ptcIds_any: Array<string>
  /** Whether to only return jobs posted by Talent Clouds */
  ptcOnly_eq?: boolean
  /** Whether to only return jobs posted by enterprise clients */
  enterpriseOnly_eq?: boolean
  /** Constrains the search to jobs with proposals in the specified range */
  proposalRange_eq?: IntRange
  /** Pagination, e.g. { after: "0", first: 30 } will return first 30 records, starting from the very first element */
  pagination_eq?: Pagination
  /** Constrains the search to jobs in particular area */
  area_eq?: AreaFilter
  /** Whether to preserve facets */
  preserveFacet_eq?: string
  /** Whether to return only jobs posted by user's location */
  userLocationMatch_eq?: boolean
  /** Constrains the search to jobs posted by user's country */
  visitorCountry_eq?: string
}

/** Marketplace job posting aggregate */
export interface MarketplaceJobPosting {
  /** Marketplace job posting identifier */
  id: string
  /** Current workflow state */
  workFlowState?: MarketplacePostingWorkFlowState
  /** Ownership details */
  ownership?: MarketplacePostingOwnership
  /** Annotations associated with the posting */
  annotations?: MarketplacePostingAnnotations
  /** Activity statistics */
  activityStat?: MarketplacePostingActivityStat
  /** Public-facing content */
  content?: MarketplaceJobPostingContent
  /** Attached files */
  attachments: Array<MarketplacePostingAttachment>
  /** Classification attributes */
  classification?: MarketplacePostingClassification
  /** Segmentation metadata */
  segmentationData?: MarketplaceSegmentationData
  /** Contract terms */
  contractTerms?: MarketplaceContractTerms
  /** Contractor selection criteria */
  contractorSelection?: MarketplaceContractorSelection
  /** Additional computed search info */
  additionalSearchInfo?: MarketplaceAdditionalSearchInfo
  /** Company profile of the client Use clientCompanyPublic for company information */
  clientCompany?: PrivateCompanyInfo
  clientCompanyPublic?: MarketplacePublicCompanyInfo
  /** Indicates whether there is something that would prevent client from receiving contract proposal */
  canClientReceiveContractProposal: boolean
  /** List of client proposals */
  clientProposals: ClientProposalsConnection
  filter?: ClientProposalFilter
  /** Custom fields attached to this particular JobPostiingId. The response can optionally be filtered by organizationIds. If organizationIds are specified, only responses of custom fields accessible by hiring managers in the specified teams will be returned. These organizationIds can be 'team OrganizationIds' or 'root organizationId'. Custom fields that are accessible/visible through out the COMPANY are always included in the response. */
  customFields?: CustomFieldsConnection
  organizationIds: Array<string>
}

/** Public marketplace job posting content */
export interface MarketplaceJobPostingContent {
  /** Public job posting title */
  title: string
  /** Public job posting description */
  description: string
}

/** Contents of a marketplace job posting by ID */
export interface MarketplaceJobPostingsContents {
  /** Job posting identifier */
  id: string
  /** Encrypted identifier value */
  ciphertext: string
  /** Job posting title */
  title: string
  /** Job posting description */
  description: string
  /** Published timestamp */
  publishedDateTime: string
  /** Posting annotations */
  annotations?: MarketplacePostingAnnotations
}

/** Client information associated with a marketplace job posting search result */
export interface MarketplaceJobPostingSearchClientInfo {
  /** Date when the client joined Deprecated legacy field */
  memberSinceDateTime?: string
  /** Total number of hires made by the client */
  totalHires: number
  /** Total number of jobs the client has posted */
  totalPostedJobs: number
  /** Total lifetime spend by the client */
  totalSpent?: Money
  /** Payment verification status of the client */
  verificationStatus?: ClientVerificationStatus
  /** Client's location information */
  location?: MarketPlaceJobSearchLocation
  /** Total number of reviews received by the client */
  totalReviews: number
  /** Average feedback score received by the client */
  totalFeedback: number
  /** Company record identifier (RID) for the client */
  companyRid: string
  /** Company name of the client Not supported anymore */
  companyName?: string
  /** EDC user identifier for the client */
  edcUserId: string
  /** Platform of the client's last contract */
  lastContractPlatform?: string
  /** Record identifier (RID) of the client's last contract */
  lastContractRid?: string
  /** Title of the client's last contract */
  lastContractTitle?: string
  /** Organization UID of the client's company */
  companyOrgUid: string
  /** Whether the client has financial privacy enabled */
  hasFinancialPrivacy: boolean
}

/** Connection for marketplace job posting search */
export interface MarketplaceJobPostingSearchConnection {
  /** Total number of results matching the query */
  totalCount?: number
  /** Connection edges containing nodes and cursors */
  edges?: Array<MarketplaceJobpostingSearchEdge>
  /** Pagination information */
  pageInfo?: PageInfo
}

/** Edge for marketplace job posting search results */
export interface MarketplaceJobpostingSearchEdge {
  /** Cursor for pagination */
  cursor: string
  /** Search result node */
  node: MarketplaceJobPostingSearchResult
}

/** Occupation item used in search results */
export interface MarketplaceJobPostingSearchOccupation {
  /** Occupation identifier */
  id: string
  /** Preferred display label */
  prefLabel: string
}

/** Group of occupations associated with a search result */
export interface MarketplaceJobPostingSearchOccupations {
  /** Top-level occupation category */
  category: MarketplaceJobPostingSearchOccupation
  /** Subcategories under the category */
  subCategories?: Array<MarketplaceJobPostingSearchOccupation>
  /** Specific service within the occupation */
  occupationService?: MarketplaceJobPostingSearchOccupation
}

/** Relevance metrics for a marketplace job posting search result */
export interface MarketplaceJobPostingSearchRelevance {
  /** Search result identifier */
  id: string
  /** Number of candidates matching effectively */
  effectiveCandidates: number
  /** Recommended effective candidates */
  recommendedEffectiveCandidates: number
  /** Unique impressions count */
  uniqueImpressions: number
  /** Publish time of the job posting */
  publishTime?: string
  /** Hours since the posting was last active */
  hoursInactive: number
}

/** Search result entry for a marketplace job posting */
export interface MarketplaceJobPostingSearchResult {
  /** Search result identifier */
  id: string
  /** Linked job posting entity */
  job?: MarketplaceJobPosting
  /** Job title */
  title: string
  /** Job description */
  description: string
  /** Encrypted identifier of the job */
  ciphertext: string
  /** Expected duration category */
  duration?: JobDuration
  /** Human-readable duration label */
  durationLabel?: string
  /** Engagement string */
  engagement?: string
  /** Budget amount (Money) */
  amount: Money
  /** Job record number */
  recordNumber: string
  /** Required experience level */
  experienceLevel: FreelancerProfileExperienceLevel
  /** contractorTier Category name */
  category?: string
  /** Subcategory name */
  subcategory?: string
  /** Number of freelancers to hire */
  freelancersToHire: number
  /** Relevance metrics */
  relevance: MarketplaceJobPostingSearchRelevance
  /** True if enterprise job */
  enterprise: boolean
  /** Encoded relevance payload */
  relevanceEncoded: string
  /** Count of total applicants */
  totalApplicants: number
  /** Preferred freelancer location list */
  preferredFreelancerLocation?: Array<string>
  /** Whether location preference is mandatory */
  preferredFreelancerLocationMandatory?: boolean
  /** True if posting is premium */
  premium: boolean
  /** Client 'not sure' flags */
  clientNotSureFields?: Array<string>
  /** Client private flags */
  clientPrivateFields?: Array<string>
  /** True if current user applied */
  applied: boolean
  /** Creation timestamp */
  createdDateTime: string
  /** Publish timestamp */
  publishedDateTime: string
  /** Last renewal timestamp */
  renewedDateTime?: string
  /** Client information */
  client: MarketplaceJobPostingSearchClientInfo
  /** Associated skills */
  skills: Array<MarketplaceJobPostingSearchSkill>
  /** Associated occupations */
  occupations?: MarketplaceJobPostingSearchOccupations
  /** Hourly budget type */
  hourlyBudgetType?: JobPostingHourlyBudgetType
  /** Hourly budget minimum */
  hourlyBudgetMin?: Money
  /** Hourly budget maximum */
  hourlyBudgetMax?: Money
  /** Distance for local jobs */
  localJobUserDistance?: string
  /** Weekly budget amount */
  weeklyBudget?: Money
  /** The value of weeks inside of engagementDuration is deprecated , you can get the right value by using either job->contractTerms->fixedPriceContractTerms->engagementDuration or job->contractTerms->hourlyContractTerms->engagementDuration based on contract type. */
  engagementDuration?: EngagementDuration
  /** Total number of freelancers to hire */
  totalFreelancersToHire?: number
  /** Team ID */
  teamId?: string
  /** Freelancer client relation */
  freelancerClientRelation?: FreelancerClientRelation
}

/** Skill metadata attached to a search result */
export interface MarketplaceJobPostingSearchSkill {
  /** Legacy skill identifier (deprecated) No longer supported */
  id?: string
  /** Skill canonical name */
  name: string
  /** Human-readable skill label */
  prettyName: string
  /** True if search highlighting matched this skill */
  highlighted?: boolean
}

/** Sort attribute for marketplace job posting search */
export interface MarketplaceJobPostingSearchSortAttribute {
  /** Sort field */
  field: MarketplaceJobPostingSearchSortField
}

/** Sort fields for marketplace job posting search */
export interface MarketplaceJobPostingSearchSortField {}

/** context and method of the job search being executed */
export interface MarketplaceJobPostingSearchType {}

/** Filter criteria for searching marketplace job postings */
export interface MarketplaceJobPostingsSearchFilter {
  /** Generic search filter supports partial Lucene syntax */
  searchExpression_eq?: string
  /** Supports multiple skills separated by commas (,). When specifying multiple skills, a Boolean OR is applied between them. Ex: skillExpression_eq:"crm-software,proofreading" */
  skillExpression_eq?: string
  /** Searches for any words within the job title field. Ex: titleExpression_eq:"Data" */
  titleExpression_eq?: string
  /** Provides additional search terms to check, ignored if searchExpression_eq used. Ex: searchTerm_eq:{ exactTerms_any:["penatibus"] excludeTerms_any:["elit","Donec","Pellentesque"] orTerms_any:["sociis"] andTerms_all:["penatibus"] } */
  searchTerm_eq?: SearchTerm
  /** The id of category of the returned jobs. Parameter works with OR behavior */
  categoryIds_any: Array<string>
  /** The id of subcategory of the returned jobs. Parameter works with OR behavior */
  subcategoryIds_any: Array<string>
  /** The occupationUID of the jobs to return. UIDs should be taken from Ontology and values will be handled with OR */
  occupationIds_any: Array<string>
  /** The ontology skill element uid of the jobs to return. UIDs should be taken from Ontology and values will be handled with AND */
  ontologySkillIds_all: Array<string>
  /** Constrains the search to jobs of the provided job type */
  jobType_eq?: ContractType
  /** Workload of the hourly jobs. Fixed price jobs will be returned regardless of workload */
  workload_eq?: EngagementType
  /** Constrains the search to jobs from clients with the number of past hires to fit the specified range or value */
  clientHiresRange_eq?: IntRange
  /** Constrains the search to jobs from clients with the budget. Hourly jobs will be returned regardless of budget */
  budgetRange_eq?: IntRange
  /** Constrains the search to jobs from clients with the hourly rate. Fixed price jobs will be returned regardless of hourly rate */
  hourlyRate_eq?: IntRange
  /** Whether to only return jobs of clients with verified payment method */
  verifiedPaymentOnly_eq?: boolean
  /** Return jobs of the clients user worked with (applies to freelancer/agency user site jobs search/jobs feed only) */
  previousClients_eq?: boolean
  /** Return only jobs with the specified contractor tier */
  experienceLevel_eq?: ExperienceLevel
  /** Country or city of the client that posted a job */
  locations_any: Array<string>
  /** Returns jobs posted by clients in the specified timezone. Note that other Global Location Jobs Filters are also applied */
  timezone_eq?: string
  /** List of Talent Clouds UIDs freelancer is allowed to see jobs in */
  ptcIds_any: Array<string>
  /** Whether to only return jobs posted by Talent Clouds */
  ptcOnly_eq?: boolean
  /** Whether to only return jobs posted by enterprise clients */
  enterpriseOnly_eq?: boolean
  /** Constrains the search to jobs with proposals in the specified range */
  proposalRange_eq?: IntRange
  /** Pagination options */
  pagination_eq?: Pagination
  /** Constrains the search to jobs in particular area */
  area_eq?: AreaFilter
  /** Whether to preserve facets */
  preserveFacet_eq?: string
  /** Whether to return only jobs posted by user's location */
  userLocationMatch_eq?: boolean
  /** Constrains the search to jobs posted in user's country */
  visitorCountry_eq?: string
}

/** Client location details shown in search results */
export interface MarketPlaceJobSearchLocation {
  /** City name */
  city?: string
  /** Country name */
  country?: string
  /** Timezone identifier */
  timezone?: string
  /** State or region */
  state?: string
  /** Offset from UTC */
  offsetToUTC?: string
}

/** Location constraints for marketplace */
export interface MarketplaceLocation {
  /** Allowed countries */
  countries: Array<string>
  /** Allowed states */
  states: Array<string>
  /** Allowed timezones */
  timezones: Array<string>
  /** Whether local check is required */
  localCheckRequired?: boolean
  /** Whether local market only */
  localMarket?: boolean
  /** Specific geographic areas */
  areas: Array<Area>
  /** Client unsure about location preference */
  notSureLocationPreference?: boolean
  /** Description of local requirement */
  localDescription?: string
  /** Description of location flexibility */
  localFlexibilityDescription?: string
}

/** Activity statistics for a marketplace job posting */
export interface MarketplacePostingActivityStat {
  /** Bid statistics */
  applicationsBidStats?: ApplicationsBidStats
  /** Activity metrics */
  jobActivity?: JobActivity
}

/** Annotations for a marketplace job posting */
export interface MarketplacePostingAnnotations {
  /** Tags associated with the posting */
  tags: Array<string>
  /** Custom field key-value pairs */
  customFields: Array<StringMapElement>
}

/** Attachment metadata for marketplace job posting */
export interface MarketplacePostingAttachment {
  /** Attachment identifier */
  id: string
  /** Sequence number for ordering */
  sequenceNumber: number
  /** Original file name */
  fileName: string
  /** File size in bytes */
  fileSize: number
}

/** Classification details of a marketplace job posting */
export interface MarketplacePostingClassification {
  /** Primary job category */
  category?: JobCategory
  /** Job subcategory */
  subCategory?: JobCategory
  /** Occupation classification */
  occupation?: Occupation
  /** Core skills required */
  skills: Array<Skill>
  /** Additional skills */
  additionalSkills: Array<Skill>
}

/** Ownership of a marketplace job posting */
export interface MarketplacePostingOwnership {
  /** Company owning the posting */
  company?: GenericOrganization
  /** Team owning the posting */
  team?: GenericOrganization
}

/** Workflow state of a marketplace job posting */
export interface MarketplacePostingWorkFlowState {
  /** Result of closing action
                          
                            0: at least 1 contract
                            1: no contracts
                            2: cancelled by Upwork
                            3: expired due to 30 days without activity */
  closeResult?: string
  /** Current workflow status */
  status: WorkFlowStateStatus
}

/** Proposal requirements for a marketplace job posting */
export interface MarketplaceProposalRequirements {
  /** Whether cover letter is required */
  coverLetterRequired?: boolean
  /** Whether freelancer can propose milestones */
  freelancerMilestonesAllowed?: boolean
  /** List of screening questions */
  screeningQuestions: Array<MarketplaceQuestion>
}

/** Public-facing company information used in marketplace search */
export interface MarketplacePublicCompanyInfo {
  /** Company identifier */
  id: string
  /** Legacy organization type */
  legacyType?: OrganizationLegacyType
  /** Teams feature enabled flag */
  teamsEnabled?: boolean
  /** Whether the company can hire */
  canHire?: boolean
  /** Whether the company is hidden */
  hidden?: boolean
  /** Include company in statistics (deprecated) No longer available for orgs */
  includeInStats?: boolean
  /** Country */
  country?: Country
  /** State */
  state?: string
  /** City */
  city?: string
  /** Timezone */
  timezone?: string
  /** Accounting entity code */
  accountingEntity?: string
  /** Billing type */
  billingType?: BillingType
  /** Payment verification details */
  paymentVerification?: PaymentVerificationResult
  /** Agency details if applicable */
  agencyDetails?: AgencyDetails
}

/** Qualification constraints for marketplace */
export interface MarketplaceQualification {
  /** Type of contractor */
  contractorType?: ContractorType
  /** Required English proficiency */
  englishProficiency?: EnglishProficiency
  /** Whether portfolio is required */
  hasPortfolio?: boolean
  /** Minimum hours worked on platform */
  hoursWorked?: number
  /** Whether rising talent is preferred */
  risingTalent?: boolean
  /** Minimum job success score */
  jobSuccessScore?: number
  /** Minimum earnings requirement */
  minEarning?: Earning
  /** Preferred freelancer groups */
  preferredGroups: Array<PreferredGroup>
  /** Preferred tests or certifications */
  preferenceTests?: Array<PreferredTest>
}

/** Screening question used in marketplace */
export interface MarketplaceQuestion {
  /** Question text */
  question?: string
  /** Sequence number for ordering */
  sequenceNumber?: number
}

/** Segmentation data for a marketplace job posting */
export interface MarketplaceSegmentationData {
  /** Segmentation values for the posting */
  segmentationValues: Array<MarketplaceSegmentationValue>
}

/** Segmentation info metadata */
export interface MarketplaceSegmentationInfo {
  /** Segmentation info identifier */
  id: string
  /** Display label */
  label?: string
  /** Reference name/code */
  referenceName?: string
  /** Sort order */
  sortOrder?: number
  /** Segmentation type reference */
  segmentationType?: SegmentationType
  /** Linked skill (if applicable) */
  skill?: Skill
}

/** Segmentation value for a marketplace job posting */
export interface MarketplaceSegmentationValue {
  /** Custom value entered by client */
  customValue?: string
  /** Segmentation metadata */
  segmentationInfo?: MarketplaceSegmentationInfo
}

/** Attachments associated with a message in a room */
export interface MessageAttachments {
  /** Reference ID of the attached object */
  objectReferenceId?: string
  /** Type of the attached object */
  objectType?: string
  /** Additional metadata for the attachment */
  metadata: Array<StringMapElement>
  /** When the attachment was created */
  createdDateTime?: string
  /** User who created the attachment */
  author?: RoomUser
}

/** Offer metadata */
export interface Metadata {
  /** Source type of the offer */
  sourceType?: SourceType
  /** Source identifier (may be empty depending on the case) */
  sourceId?: string
  /** Data in JSON format */
  data?: string
  /** Occupation unique identifier */
  occupationUid?: string
}

/** Milestone information for fixed-price contracts */
export interface Milestone {
  /** ID of the milestone */
  id: string
  /** User information who created the milestone */
  createdBy?: GenericUser
  /** Due date time of the milestone */
  dueDateTime?: string
  /** Current state of the offer */
  state?: OfferMilestoneState
  /** Description available with the milestone */
  description?: string
  /** Current escrow amount */
  currentEscrowAmount?: Money
  /** Deposit amount */
  depositAmount?: Money
  /** Funded amount */
  fundedAmount?: Money
  /** Amount paid */
  paid?: Money
  /** Overpayment amount */
  overpayment?: Money
  /** Bonus amount */
  bonus?: Money
  /** Unused deposit from previous milestone */
  previousMilestoneUnusedDeposit?: Money
  /** Number of submissions */
  submissionCount?: number
  /** The sequence in which the milestone is to be executed */
  sequenceId?: number
  /** Payment comments */
  payComments?: string
  /** Last submission creation time */
  lastSubmissionCreatedTime?: string
  /** Creation date for the milestone */
  createdDateTime?: string
  /** Update date for the milestone */
  modifiedDateTime?: string
  /** Milestone instructions */
  instructions?: string
  /** Submission events */
  submissionEvents: Array<SubmissionEvent>
}

/** Result of milestone rejection request */
export interface MilestoneRejectionResponse {
  /** Whether rejection was successful */
  response?: boolean
}

/** Terms for milestones (AKA Fixed priced) */
export interface MilestoneTerms {
  /** Budget amount for the milestones */
  budget?: Money
  /** List of milestones */
  milestones: Array<Milestone>
}

/** Modernized contract offer details */
export interface ModernizedContractOffer {
  /** Offer identifier */
  id: string
  /** Kind of offer */
  kind?: OfferKind
  /** Who creates the offer */
  offeror?: Offeror
  /** Client user identifier */
  clientUserId: string
  /** Client team unique identifier */
  clientTeamId: string
  /** Client organization unique identifier */
  clientOrgId?: string
  /** Vendor user unique identifier */
  vendorUserId: string
  /** Vendor team unique identifier (in case of agency) */
  vendorTeamId?: string
  /** Vendor organization unique identifier (could be the sole proprietor) */
  vendorOrgId?: string
  /** Other participants in the offer */
  actors?: Array<Actor>
  /** Metadata associated with the offer */
  metadata?: Metadata
  /** Expiration date and time */
  expirationDateTime?: string
  /** Offer title */
  title: string
  /** Offer description */
  description?: string
  /** Attachment identifiers */
  attachments?: Array<string>
  /** Contract start date and time */
  contractStartDateTime?: string
  /** Contract end date and time */
  contractEndDateTime?: string
  /** Hourly terms */
  hourlyRateTerms?: HourlyTerms
  /** Stipend terms */
  stipendTerms?: StipendTerms
  /** Milestone terms */
  milestoneTerms?: MilestoneTerms
  /** Delivery model */
  deliveryModel?: OfferDeliveryModel
  /** Offer state */
  state: WorkflowOfferState
  /** The current offer ID */
  instanceId?: string
  /** Staffing manager UID */
  staffingManagerId?: string
  /** Contract ID associated to the offer, once offer is accepted */
  contractId?: string
  /** Agency root organization ID */
  agencyRootCompanyId?: string
  /** Type of the offer */
  type?: ContractOfferType
  /** Vendor type of offer */
  vendorType?: ContractOfferVendorType
  /** Term Version of offer */
  termsVersion?: ContractOfferTermsVersion
  /** Legacy state of offer */
  legacyState?: ContractOfferLegacyState
  /** Previous offer id */
  previousOfferId?: string
  /** New Offer Id */
  newOfferId?: string
  /** Close Posting upon to Accept */
  closePostingUponAccept?: boolean
  /** Last event on offer */
  lastEvent?: ContractOfferLastEvent
  /** The creation date of the offer */
  createdDateTime?: string
}

/** List of modernized contract offers */
export interface ModernizedContractOfferList {
  /** List of offers */
  offers?: Array<ModernizedContractOffer>
}

/** Modernized offer details */
export interface ModernizedOffer {
  /** Offer identifier */
  id: string
  /** Kind of offer */
  kind?: OfferKind
  /** Who creates the offer */
  offeror?: Offeror
  /** Client user identifier */
  clientUserId: string
  /** Client team unique identifier */
  clientTeamId: string
  /** Client organization unique identifier */
  clientOrgId?: string
  /** Vendor user unique identifier */
  vendorUserId: string
  /** Vendor team unique identifier (in case of agency) */
  vendorTeamId?: string
  /** Vendor organization unique identifier (could be the sole proprietor) */
  vendorOrgId?: string
  /** Other participants in the offer */
  actors?: Array<Actor>
  /** Metadata associated with the offer */
  metadata?: Metadata
  /** Expiration date and time */
  expirationDateTime?: string
  /** Offer title */
  title: string
  /** Offer description */
  description?: string
  /** Attachment identifiers */
  attachments?: Array<string>
  /** Contract start date and time */
  contractStartDateTime?: string
  /** Contract end date and time */
  contractEndDateTime?: string
  /** Hourly terms */
  hourlyRateTerms?: HourlyTerms
  /** Stipend terms */
  stipendTerms?: StipendTerms
  /** Milestone terms */
  milestoneTerms?: MilestoneTerms
  /** Delivery model */
  deliveryModel?: OfferDeliveryModel
  /** Offer state */
  state: WorkflowOfferState
  /** Staffing manager UID */
  staffingManagerId?: string
  /** Contract ID associated to the offer, once offer is accepted */
  contractId?: string
  /** Agency root organization ID */
  agencyRootCompanyId?: string
  /** The current offer ID */
  instanceId?: string
  /** Connection to the client associated with the offer */
  client: GenericOrganization
  /** Public company information */
  clientCompany?: PublicCompanyInfo
  /** The creation date of the offer */
  createdDateTime?: string
  /** Last event on offer */
  lastEvent?: OfferLastEvent
}

/** Monetary amount with raw, currency and display representations */
export interface Money {
  /** Float point as a string, for example "1.23" */
  rawValue: string
  /** ISO currency code, see https://en.wikipedia.org/wiki/ISO_4217 (for example, USD) */
  currency: string
  /** Display representation, for example, "$1.23" */
  displayValue: string
}

export interface MoneyInput {
  /** float point as a string, for example "1.23" */
  amount: string
  /** ISO currency code, see https://en.wikipedia.org/wiki/ISO_4217 (for example, USD) */
  currency: string
}

/** Notification configurations */
export interface NotificationsInput {
  /** Notify client */
  notifyClient?: boolean
  /** Notify vendor */
  notifyVendor?: boolean
  /** Notify contract room */
  sendDash2ContractRoom?: boolean
}

/** Ontology entity Occupation entity from the ontology */
export interface Occupation {
  /** Unique identifier for the occupation */
  id: string
  /** ontologyId is a semantic identifier that uniquely identifies an ontology element
                          Its value doesn't depend on the environment (same for dev, staging, prod)
                          Example: upwork:AdministrationSoftware */
  ontologyId: string
  /** Ontology entity type */
  type: Array<OntologyEntityType>
  /** Defines the status of an occupation.
                          
                            Active: Skill is active and available for use
                            Deprecated: Skill has been deprecated
                            Pending: Skill has been created recently and is not active yet */
  entityStatus: OntologyEntityStatus
  /** Defines the label of the entity that is displayed across Upwork. It must be a unique value. */
  preferredLabel: string
  /** Definition or description of this occupation */
  definition?: string
  /** Defines (when available) the date (timestamp) of creation for the entity. */
  createdDateTime?: string
  /** Defines (when available) the date (timestamp) of update for the entity. */
  modifiedDateTime?: string
  /** Skills associated with this occupation */
  skills?: Array<Skill>
}

/** Details information about offer */
export interface Offer {
  /** ID of the offer */
  id: string
  /** Title of the offer */
  title: string
  /** Description of the offer */
  description?: string
  /** Type of the offer like Hourley/Fixed price etc. */
  type: OfferType
  /** Job post associated with the offer */
  job?: MarketplaceJobPosting
  /** Job Application associated with the offer */
  vendorProposal?: VendorProposal
  /** Flag to indicate whether posting will be closed when offer is accepted */
  closeJobPostingOnAccept: boolean
  /** Connection to the client associated with the offer */
  client: GenericOrganization
  /** Terms associated with the offer */
  offerTerms: OfferTerms
  /** Message for the contractor */
  messageToContractor?: string
  /** Current sate of the offer like, new, accepted, declined etc. */
  state?: OfferState
  /** Different features of the enterprise related offer */
  offerFeatures?: OfferFeatures
  /** Public company information */
  clientCompany?: PublicCompanyInfo
  /** Milestones associated with the offer */
  milestones?: Array<Milestone>
  /** Was this offer created via the Bring Your Own Freelancer flow */
  createdUsingBYOFlow: boolean
  /** Freelancer profile associated to the offer */
  freelancer: FreelancerProfile
  /** Flag to indicate whether this is a payroll offer */
  payrollOffer?: boolean
  /** Delivery model */
  deliveryModel?: OfferDeliveryModel
  /** Custom fields attached to this particular Offer. The response can optionally be filtered by organizationIds. If organizationIds are specified, only responses of custom fields accessible by hiring managers in the specified teams will be returned. These organizationIds can be 'team OrganizationIds' or 'root organizationId'. Custom fields that are accessible/visible through out the COMPANY are always included in the response. */
  customFields?: CustomFieldsConnection
  organizationIds: Array<string>
}

/** Address input for offer location */
export interface OfferAddressInput {
  /** Street address */
  addressLine?: string
  /** Suite number */
  suite?: string
  /** ZIP code */
  zip?: string
}

/** Filter for offers by client */
export interface OfferByClientFilter {
  /** Filter by team IDs */
  teamId_any: Array<string>
  /** Filter by contact person IDs */
  contactPersonId_any: Array<string>
  /** Filter by offer types */
  offerType_any: Array<ContractOfferType>
  /** Filter by milestone states */
  milestoneState_any: Array<OfferMilestoneState>
  /** Filter by escrow refund statuses */
  escrowRefundStatus_any: Array<EscrowRefundStatus>
  /** Filter by freelancer IDs */
  freelancerId_any: Array<string>
  /** Filter by agreement kinds */
  agreementKind_any: Array<AgreementKind>
  /** Common filter criteria */
  commonFilter?: OfferSearchCommonFilter
}

/** Filter for offers by root company */
export interface OfferByRootCompanyFilter {
  /** Filter by freelancer IDs */
  freelancerId_any: Array<string>
  /** Filter by agency team organization IDs */
  agencyTeamOrgId_any: Array<string>
  /** Filter by client organization IDs */
  clientOrgId_any: Array<string>
  /** Common filter criteria */
  commonFilter?: OfferSearchCommonFilter
}

/** Response from offer creation */
export interface OfferCreationResponse {
  /** Created offer */
  offer?: ModernizedOffer
}

/** Offer delivery model */
export interface OfferDeliveryModel {}

/** Features associated with the enterprise related offer */
export interface OfferFeatures {
  /** Purchase order information */
  purchaseOrder?: PurchaseOrder
  /** Private talent cloud information */
  privateTalentCloud?: PrivateTalentCloud
  /** On-site work type requirement */
  onSiteType?: OfferWorkType
  /** Country requirement */
  country?: Country
  /** State requirement */
  state?: string
  /** Local work description */
  localDescription?: string
  /** Local flexibility description */
  localFlexibilityDescription?: string
  /** "Employer of Record" referred to as the W-2 Employer of Record because they are responsible for issuing W-2s (Wage and Tax Statement) to the employee shoulders the responsibility for all the traditional employment tasks and liabilities. When the invited freelancer accepts this invitation, the freelancer is added to the specific Upwork agency entity as a contractor */
  eor?: boolean
}

/** Filter for offers for freelancer */
export interface OfferForFreelancerFilter {
  /** Filter by agency root company organization IDs */
  agencyRootCompanyOrgId_any: Array<string>
  /** Filter by agency team organization IDs */
  agencyTeamOrgId_any: Array<string>
  /** Filter by client organization IDs */
  clientOrgId_any: Array<string>
  /** Common filter criteria */
  commonFilter?: OfferSearchCommonFilter
}

/** Hourly rate terms for hourly offers */
export interface OfferHourlyRateTerms {
  /** Hourly rate associated with the offer, currency amount in the lowest currency denominations (so USD 49.12 would be 4912) */
  vendorRate: MoneyInput
  /** Max hour can be logged per week, note: "0" and null/"not set" has different meanings, */
  weeklyLimit?: string
  /** Whether manual time entry is allowed. Default = false */
  manualTimeAllowed?: boolean
}

/** Offer kind types */
export interface OfferKind {}

/** Offer kind types */
export interface OfferKindInput {}

/** Last event on offer */
export interface OfferLastEvent {
  /** Reason identifier */
  reasonId?: string
  /** Event message */
  message?: string
  /** Last event timestamp */
  lastEventTime?: string
}

/** Legacy offer state values */
export interface OfferLegacyState {}

/** List of offers */
export interface OfferList {
  /** List of offers */
  offers?: Array<Offer>
}

/** Location information for offer */
export interface OfferLocationInput {
  /** Work type (remote or on-site) */
  workType?: OfferWorkType
  /** Can be retrieved by Query countries: [Country!]! */
  country?: string
  /** Can be retrieved by Query location{state} */
  state?: string
  /** Location description */
  description?: string
  /** Whether location is flexible */
  flexible?: boolean
  /** Flexibility description */
  flexibilityDescription?: string
  /** Can be retrieved by Query location{state} */
  city?: string
  /** Address details */
  address?: OfferAddressInput
}

/** Offer metadata and source information */
export interface OfferMetadataInput {
  /** Source type of the offer */
  sourceType: SourceTypeInput
  /** Following options available:
                          
                            sourceType=JobPosting, sourceId must contain job posting ID
                            sourceType=JobApplication, sourceId must contain application ID and jobPostingId=Job posting id
                            sourceType=Direct, sourceId must be null */
  sourceId?: string
  /** Required for Direct offer */
  occupationId?: string
  /** Job posting identifier */
  jobPostingId?: string
  /** Additional metadata */
  data?: string
  /** Checkout identifier */
  checkoutId?: string
}

/** Milestone state values */
export interface OfferMilestoneState {}

/** Milestone terms for fixed-price offers */
export interface OfferMilestoneTerms {
  /** milestone amount in the lowest currency denominations (so USD 49.12 would be 4912) */
  budget: MoneyInput
  /** List of milestones */
  milestoneList: Array<OfferTermsMilestoneInput>
}

/** Offeror type */
export interface Offeror {}

/** Offeror input type */
export interface OfferorInput {}

/** Payroll information for offer */
export interface OfferPayrollInput {
  /** Talent cloud identifier */
  talentCloudId?: string
  /** Purchase order identifier */
  purchaseOrderId?: string
  /** Asset identifiers */
  assets: Array<string>
}

/** Stipend period types */
export interface OfferPeriodTypeInput {}

/** Scheduled rate increase configuration */
export interface OfferScheduledRateIncreaseInput {
  /** Rate increase amount */
  rate?: string
  /** Cadence in months. Default = 0 */
  cadenceMonths?: number
}

/** Offer search attribute types */
export interface OfferSearchAttribute {}

/** Common filter fields for offer search */
export interface OfferSearchCommonFilter {
  /** Text search filter */
  text_eq?: string
  /** Filter by offer states */
  states_any: Array<ContractOfferState>
  /** Filter by start date period */
  startDatePeriod_bt: Array<string>
  /** Filter by end date period */
  endDatePeriod_bt: Array<string>
  /** Filter by catalog project flag */
  catalogProject?: boolean
}

/** Offer state values */
export interface OfferState {}

/** Stipend terms for stipend-based offers */
export interface OfferStipendTerms {
  /** Periodic stipend */
  stipend: MoneyInput
  /** Vendor rate */
  vendorRate: MoneyInput
  /** Stipend period */
  period: OfferPeriodTypeInput
}

/** Terms associated with the offer */
export interface OfferTerms {
  /** Expected start date of offer */
  expectedStartDate?: string
  /** Expected end date of offer */
  expectedEndDate?: string
  /** Offer terms for fixed price */
  fixedPriceTerm?: FixedPriceTerm
  /** Offer terms for hourly rate */
  hourlyTerms?: HourlyTerms
}

/** Input for milestone terms in an offer */
export interface OfferTermsMilestoneInput {
  /** Milestone amount in the lowest currency denominations (e.g., USD 49.12 would be 4912) */
  amount: MoneyInput
  /** Milestone description */
  description: string
  /** Milestone due date in yyyy-MM-dd format */
  dueDate?: string
  /** Milestone instructions */
  instructions?: string
  /** Attachment identifiers. Default = [] */
  attachments: Array<string>
}

/** Offer type values */
export interface OfferType {}

/** Work type for offer */
export interface OfferWorkType {}

/** On-site work requirement type */
export interface OnSiteType {}

/** A simplified representation of Marketplace ontology's 'category' (level 1 of hierarchy) */
export interface OntologyCategory {
  /** UID of an entity */
  id: string
  /** A label of an entity that is displayed across Upwork. It must be a unique value. */
  preferredLabel?: string
  /** Defines alternative labels for an entity. */
  altLabel?: Array<string>
  /** A human-understandable string that is used as the last of URLs built to refer the given entity. Example: 'accounting-consulting' (for 'Accounting & Consulting' category) */
  slug?: string
  /** A semantic identifier that uniquely identifies an ontology element. Its value doesn't depend on the environment, unlike a UID identifier. Example: upwork:AdministrationSoftware */
  ontologyId?: string
  /** A list of simplified 'subcategory' entities which ara children of the given category */
  subcategories: Array<OntologySubcategory>
  /** A list of simplified 'service' entities which descendants (indirect children) of the given category - or, put another way, a list of all 'services' whose top parent is the current 'category' */
  services: Array<OntologyService>
}

/** Ontology connection */
export interface OntologyConnection {
  /** Total number of entities matching the query */
  totalCount?: number
  /** List of entity edges with pagination cursors */
  edges: Array<OntologyEntityEdge>
  /** Pagination information for navigating results */
  pageInfo?: PageInfo
}

export interface OntologyElementsSearchByPrefLabelFilter {
  /** string to search in prefLabel, up to 100 characters
                          Example: "Jav" */
  preferredLabel_any: string
  /** type of element to search, one of OntologyEntityType */
  type?: OntologyEntityType
  /** status of element to search, one of OntologyEntityStatus default ACTIVE. Default = ACTIVE */
  entityStatus_eq?: OntologyEntityStatus
  /** optional parameter to specify ordering of results. If no value provided ordering is random.
                          'alphabet' to order results alphabetically by prefLabel 'match-start' (Default) to order results by index of filter string in prefLabel. I.e. results starting with filter will appear first. Default = "match-start" */
  sortOrder?: string
  /** Max number of responses. 10 by default. Default = 10 */
  limit?: number
  /** if true, it includes attribute group nodes. Default: false. Default = false */
  includeAttributeGroups?: boolean
}

/** An ontology is a set of concepts and categories in a domain that shows their properties and the relations between them. */
export interface OntologyEntity {
  id: string
  /** ontologyId is a semantic identifier that unqiuely identifies an ontology element
                          Its value doesn't depend on the environment (same for dev, staging, prod)
                          Example: upwork:AdministrationSoftware */
  ontologyId: string
  type: Array<OntologyEntityType>
  /** Defines the status of an occupation.
                          
                            Active: Skill is active and available for use
                            Deprecated: Skill has been deprecated
                            Pending: Skill has been created recently and is not active yet */
  entityStatus: OntologyEntityStatus
  /** Defines the label of the entity that is displayed across Upwork. It must be a unique value. */
  preferredLabel: string
  definition?: string
  /** Defines (when available) the date (timestamp) of creation for the entity. */
  createdDateTime?: string
  /** Defines (when available) the date (timestamp) of update for the entity. */
  modifiedDateTime?: string
}

/** Ontology entity */
export interface OntologyEntityEdge {
  /** The ontology entity at this edge */
  node: OntologyEntity
  /** Cursor for pagination */
  cursor: string
}

/** Filter for searching ontology entities by label and type */
export interface OntologyEntityFilter {
  /** Search string for preferred label field (up to 100 characters) */
  preferredLabel_any: string
  /** Entity type to filter by */
  type?: OntologyEntityType
  /** Taxonomy level to filter by */
  taxonomyLevel?: OntologyEntityTaxonomyLevel
  /** Entity status filter (defaults to ACTIVE). Default = ACTIVE */
  entityStatus_eq?: OntologyEntityStatus
  /** Sort order for results (defaults to RANDOM). Default = RANDOM */
  sortOrder?: OntologyResultSortOrder
  /** Maximum number of results to return */
  limit?: number
}

export interface OntologyEntityResult {}

/** Filter for searching ontology entities by their ontology IDs */
export interface OntologyEntitySearchFilter {
  /** List of ontology IDs to search for */
  ontologyIds_any: Array<string>
}

export interface OntologyEntitySearchRecord {
  /** The ontology entity found in the search */
  ontologyEntity: OntologyEntity
}

/** Defines the status of an occupation. */
export interface OntologyEntityStatus {}

/** Hierarchy level in the ontology taxonomy */
export interface OntologyEntityTaxonomyLevel {}

/** Supported ontology entity types */
export interface OntologyEntityType {}

export interface OntologyResultSortOrder {}

/** A simplified representation of Marketplace ontology's 'service' (level 3 of hierarchy) */
export interface OntologyService {
  /** UID of an entity */
  id: string
  /** A label of an entity that is displayed across Upwork. It must be a unique value. */
  preferredLabel?: string
  /** Defines alternative labels for an entity. */
  altLabel?: Array<string>
  /** A human-understandable string that is used as the last of URLs built to refer the given entity. Example: 'accounting-consulting' (for 'Accounting & Consulting' category) */
  slug?: string
  /** A semantic identifier that uniquely identifies an ontology element. Its value doesn't depend on the environment, unlike a UID identifier. Example: upwork:AdministrationSoftware */
  ontologyId?: string
}

/** A simplified representation of Marketplace ontology's 'subcategory' (level 2 of hierarchy) */
export interface OntologySubcategory {
  /** UID of an entity */
  id: string
  /** A label of an entity that is displayed across Upwork. It must be a unique value. */
  preferredLabel?: string
  /** Defines alternative labels for an entity. */
  altLabel?: Array<string>
  /** A human-understandable string that is used as the last of URLs built to refer the given entity. Example: 'accounting-consulting' (for 'Accounting & Consulting' category) */
  slug?: string
  /** A semantic identifier that uniquely identifies an ontology element. Its value doesn't depend on the environment, unlike a UID identifier. Example: upwork:AdministrationSoftware */
  ontologyId?: string
  /** A list of simplified 'service' entities which are children of the given subcategory */
  services: Array<OntologyService>
}

/** Base organization interface */
export interface Organization {
  /** ID of the current organization */
  id: string
  /** Record ID of the organization */
  rid?: string
  /** Legacy organization identifier */
  legacyId?: string
  /** Name of the current organization */
  name?: string
  /** Type of the Organization. Possible values are BUSINESS / SOLE_PROPRIETOR */
  type?: OrganizationType
  /** Legacy type of the Organization. Possible values are CLIENT / VENDOR */
  legacyType?: OrganizationLegacyType
  /** Flag associated with the Organization */
  flag?: OrganizationFlag
  /** Indicates whether this organization is active. Applicable to a team organization. */
  active?: boolean
  /** Indicates whether this organization/team is hidden. Applicable to a team organization. */
  hidden?: boolean
  /** Private information about current company */
  company?: PrivateCompanyInfo
  /** Photo URL/Logo for the organization */
  photoUrl?: string
  /** When the organization was created */
  creationDate?: string
}

/** Organization category flags */
export interface OrganizationFlag {
  /** Whether organization is a client */
  client?: boolean
  /** Whether organization is a vendor */
  vendor?: boolean
  /** Whether organization is an agency */
  agency?: boolean
  /** Whether organization is an individual */
  individual?: boolean
}

/** Legacy organization type classification */
export interface OrganizationLegacyType {}

/** Location input for organization address */
export interface OrganizationLocationInput {
  /** Street address */
  address?: string
  /** City name */
  city?: string
  /** State or province */
  state?: string
  /** Country code */
  country?: string
  /** Postal or ZIP code */
  zipCode?: string
}

/** Type of organization to create */
export interface OrganizationRequestType {}

/** Organization legal type */
export interface OrganizationType {}

/** Legacy organization type for filtering */
export interface OrgLegacyType {}

/** Organization type for filtering */
export interface OrgType {}

/** Filter to load users' permissions under organization */
export interface OrgUserPermissionFilterV2 {
  /** User identifier */
  userId?: string
  /** Type of the resource: CONTRACT, OFFER, etc. */
  resourceType_eq: ResourceType
  /** The maximum number of results to return. The actual number of results returned may be less than the limit for intermediate pages. */
  limit?: number
  /** First request must have this as null. Subsequent requests must use the offset returned by the previous request. */
  offset?: string
  /** Perform external checks. Default = false */
  performExternalChecks_eq?: boolean
  /** The teamOrgIds in which the permissions for the resourceType and action are needed */
  teamOrgIds_any: Array<string>
  /** Return all teams if teamOrgIds is not specified, else only parent organization is returned. Default = false */
  returnAllTeams?: boolean
}

/** Other experience input */
export interface OtherExperienceInput {
  /** User identifier */
  userId?: string
  /** Subject of the experience */
  subject: string
  /** Description of the experience */
  description: string
  /** Whether the experience is active */
  active?: boolean
}

/** Pagination metadata */
export interface Page {
  /** Defines page offset */
  pageOffset: number
  /** Defines page size */
  pageSize: number
}

export interface PageFilterInput {
  /** Defines page offset */
  pageOffset: number
  /** Defines page size */
  pageSize: number
}

/** Pagination metadata for list responses */
export interface PageInfo {
  /** Cursor to be used to fetch next page in list */
  endCursor?: string
  /** Boolean indicating whether there is a next page in the list */
  hasNextPage?: boolean
}

/** Pagination */
export interface Pagination {
  /** Identifies the start place of the pagination, e.g. after: "0" will indicate "from the very first element" */
  after?: string
  /** Identifies how many records must be returns in a single response, e.g. first: 30 will return 30 elements */
  first: number
}

/** Pagination input */
export interface Paging {
  /** Starting offset */
  start?: number
  /** Number of rows to return */
  rows?: number
}

/** Paging information */
export interface PagingInfo {
  /** Total number of results available */
  total?: number
  /** Offset of the first result in this page */
  offset?: number
  /** Number of results in this page */
  count?: number
}

/** Payment verification result */
export interface PaymentVerificationResult {
  /** Payment verification status */
  status?: PaymentVerificationStatus
  /** A flag that indicates whether the payment method is verified or not */
  paymentVerified?: boolean
}

/** Payment method verification status codes */
export interface PaymentVerificationStatus {}

/** Period type for stipend */
export interface PeriodType {}

/** Personal data location */
export interface PersonalDataLocation {
  /** Country name */
  country?: string
  /** State or region name */
  state?: string
  /** City name */
  city?: string
  /** Postal or ZIP code */
  zip?: string
  /** IANA timezone identifier (e.g., America/Los_Angeles) */
  timezone?: string
}

/** Personal data profile states */
export interface PersonalDataProfileState {}

/** Phone number */
export interface PhoneNumber {
  /** Country code */
  code?: string
  /** Local number */
  number?: string
}

/** The personal identifiable information (PII) of the user. This model is used when personal information needs to be exposed to public and enterprise clients. */
export interface PiiUser {
  /** Unique user identifier
                          Example: 1181921839933591552 */
  id: string
  /** Nickname ID of a user. Please, only use if really needed. Unique ID should be used when possible.
                          Example: foofreelancer */
  nid: string
  /** Record ID of a user. Please, only use if really needed. Unique ID should be used when possible.
                          Example: 2366358 */
  rid: string
  /** First name + abbreviated last name, e.g. John Smith -> John S. */
  name?: string
  /** First name of the user. */
  firstName?: string
  /** Last name of the user. */
  lastName?: string
  /** Photo URL of the user. */
  photoUrl?: string
  /** The public user URL */
  publicUrl?: string
  /** Email of user */
  email?: string
  /** Geographic location information of the user */
  location?: UserLocation
}

/** Portrait of the freelancer */
export interface Portrait {
  /** Link to profile portrait */
  portrait?: string
  /** Link to profile portrait (size 32) */
  portrait32?: string
  /** Link to profile portrait (size 50) */
  portrait50?: string
  /** Link to profile portrait (size 100) */
  portrait100?: string
  /** Link to profile portrait (size 150) */
  portrait150?: string
  /** Link to profile portrait (size 500) */
  portrait500?: string
}

/** Preferred freelancer group */
export interface PreferredGroup {
  /** Group identifier */
  id: string
  /** Group name */
  name?: string
  /** Group logo URL */
  logo?: string
}

/** Preferred test or certification */
export interface PreferredTest {
  /** Test identifier */
  id: string
  /** Test name */
  name?: string
}

/** Private company info */
export interface PrivateCompanyInfo {
  /** Company identifier */
  id: string
  /** Company name */
  name?: string
  /** Company description */
  description?: string
  /** Legacy private company type */
  legacyType?: PrivateCompanyLegacyType
  /** Logo URL */
  logoURL?: string
  /** Contact person */
  contactUser?: GenericUser
  /** Business phone number */
  phone?: string
  /** Display name */
  displayName?: string
  /** Whether teams feature is enabled */
  teamsEnabled?: boolean
  /** Whether the company can hire */
  canHire?: boolean
  /** Whether the company is hidden */
  hidden?: boolean
  /** No longer available for orgs */
  includeInStats?: boolean
  /** Legal company name */
  companyName?: string
  /** Country of registration */
  country?: Country
  /** State or region */
  state?: string
  /** City */
  city?: string
  /** Street address */
  address?: string
  /** Postal or ZIP code */
  zip?: string
  /** Timezone identifier */
  timezone?: string
  /** Accounting entity identifier */
  accountingEntity?: string
  /** Billing type */
  billingType?: BillingType
  /** Summary/description */
  summary?: string
  /** Payment verification status use paymentVerification instead */
  paymentVerificationStatus?: PaymentVerificationStatus
  /** Payment verification result */
  paymentVerification?: PaymentVerificationResult
  /** Agency details */
  agencyDetails?: AgencyDetails
  /** Job posts of the company */
  jobPosts: JobPostingConnection
  jobPostsFilter?: JobPostsFilter
}

/** Legacy private company type classification */
export interface PrivateCompanyLegacyType {}

/** A private group of professional freelancers and agencies for Upwork Enterprise clients */
export interface PrivateTalentCloud {
  /** Unique identifier for the talent cloud */
  id: string
  /** Name of the talent cloud */
  name: string
  /** User who created the talent cloud */
  creator: GenericUser
  /** Organization of the talent cloud creator */
  creatorOrganization: GenericOrganization
  /** Instructions displayed to freelancers when requesting to join */
  joinInstructions: string
  /** Welcome message displayed to freelancers after joining */
  welcomeMessageToAddedFreelancers: string
  /** Whether join requests are automatically approved without manual review */
  joinRequestAutoApproved: boolean
  /** Message displayed to freelancers after submitting a join request */
  messageAfterJoinRequest: string
  /** Message displayed to freelancers if their join request was rejected */
  joinRejectionMessage: string
  /** Name displayed in external contexts outside the client company */
  externalName?: string
  /** Whether the talent cloud is currently active */
  active: boolean
  /** Users to notify when new join requests are created */
  joinRequestNotifyUsers: Array<GenericUser>
  /** Large logo image file */
  logoImageLarge?: File
  /** Small logo image file */
  logoImageSmall?: File
  /** Description of the talent cloud */
  description: string
  /** Whether onboarding tasks are enabled for this talent cloud */
  onboardingTaskEnabled: boolean
  /** Timestamp when onboarding tasks were first enabled */
  onboardingTaskEnableUpdatedDateTime?: string
  /** Whether this talent cloud can be selected for new offers */
  selectable: boolean
  /** List of talent cloud task overviews */
  talentCloudTasks?: Array<TalentCloudTask>
}

/** Connection type for paginated private talent cloud results */
export interface PrivateTalentCloudConnection {
  /** Total number of talent clouds matching the query */
  totalCount?: number
  /** List of talent cloud edges with cursors */
  edges?: Array<PrivateTalentCloudEdge>
  /** Pagination information for navigating results */
  pageInfo?: PageInfo
}

/** Edge type containing a private talent cloud node and its cursor */
export interface PrivateTalentCloudEdge {
  /** Cursor for this edge used in pagination */
  cursor?: string
  /** The private talent cloud at this edge */
  node?: PrivateTalentCloud
}

/** Result of add operation including created record identifier */
export interface ProcessAddResponse {
  /** Defines record ID of the created activity */
  id: string
  /** Defines success status */
  success: boolean
}

/** Result of update operation */
export interface ProcessUpdateResponse {
  /** Defines success status */
  success: boolean
}

/** Proposal audit details */
export interface ProposalAuditDetails {
  /** User that created the proposal */
  createdByUser: GenericUser
  /** Last modifier. Modifiers of a proposal could be either Freelancer, Client, or System. In case of System, modifiedByUser will be null */
  modifiedByUser?: GenericUser
  /** Creation date and time, is the date when proposal is created by applying, or date when an invite to interview is accepted. */
  createdDateTime: string
  /** Last modification date and time */
  modifiedDateTime?: string
}

/** Estimated duration for a proposal engagement */
export interface ProposalEngagementDuration {
  /** Duration identifier */
  id: string
  /** Human-readable duration label */
  label: string
}

/** Proposal metadata reference values */
export interface ProposalMetadata {
  /** Available engagement duration options */
  engagementDurationValues: Array<ProposalEngagementDuration>
  /** Reasons metadata filtered by type */
  reasons: Array<ReasonsMetadata>
  reasonType?: ReasonType
}

/** Milestone defined in a proposal project plan */
export interface ProposalMilestones {
  /** Milestone description */
  description: string
  /** Due date for the milestone */
  dueDate: string
  /** Payment amount for the milestone (string format pending Money type migration) */
  amount: string
}

/** Project plan is a set of milestones defined by vendor */
export interface ProposalProjectPlan {
  /** Project plan identifier */
  id: string
  /** List of milestones */
  milestones: Array<ProposalMilestones>
}

/** Vendor or client proposal reason Reason for a proposal status change */
export interface ProposalReason {
  /** Identifier of the reason for proposal to switch to current status */
  id: string
  /** Reason text */
  reason: string
  /** Text of the reason for proposal to switch to current status (applicable for declined or withdrawn proposals) */
  description?: string
}

/** Aggregated proposal statistics */
export interface ProposalsStatistics {
  /** Total number of proposals */
  totalProposals: number
  /** Total messaged proposals */
  totalMessaged: number
  /** Total hired */
  totalHired: number
  /** Total invites sent */
  totalInvitesSent: number
  /** Total applicants with auto-hidden status */
  totalApplicantsWithAutoHidden: number
  /** Total archived proposals */
  totalArchived: number
  /** Total auto-hidden proposals */
  totalAutoHidden: number
  /** Total declined proposals */
  totalDeclined: number
  /** Total hidden proposals */
  totalHidden: number
  /** Total offers made */
  totalOffered: number
  /** Total shortlisted proposals */
  totalShortlisted: number
  /** Total withdrawn proposals */
  totalWithdrawn: number
}

/** Proposal terms, vendor applied on */
export interface ProposalTerms {
  /** Hourly contracts: hourly charge rate or fixed price contracts charge rate */
  chargeRate: Money
  /** Duration metadata item */
  estimatedDuration?: ProposalEngagementDuration
  /** Upfront payment percent. Is NULL in case of hourly contracts. Always 0 or more for fixed price contracts. */
  upfrontPaymentPercent?: number
}

/** Result status of a proposal update operation */
export interface ProposalUpdateResultStatus {}

/** Period dates for protected time calculation */
export interface PtcData {
  /** Protected time start date */
  startDate?: string
  /** Protected time end date */
  endDate?: string
}

/** Public-facing company info */
export interface PublicCompanyInfo {
  /** Company identifier */
  id: string
  /** Company name */
  name?: string
  /** Company description */
  description?: string
  /** Legacy organization type */
  legacyType?: OrganizationLegacyType
  /** Logo URL */
  logoURL?: string
}

/** Public job posting facets in marketplace */
export interface PublicMarketplaceJobPostingSearchFacets {
  /** Search facets of jobType */
  jobType?: Map
  /** Search facets of workload */
  workload?: Map
  /** Search facets of clientHires */
  clientHires?: Map
  /** Search facets of budget */
  budget?: Map
  /** Search facets of clientFeedback */
  clientFeedback?: Map
  /** Search facets of daysPosted */
  daysPosted?: Map
  /** Search facets of contractorTier */
  contractorTier?: Map
  /** Search facets of categories */
  categories?: Array<Map>
  /** Search facets of payment */
  payment?: Map
  /** Search facets of proposals */
  proposals?: Map
  /** Search facets of duration */
  duration?: Map
  /** Search facets of occupations */
  occupations?: Array<Map>
  /** Search facets of freelancersNeeded */
  freelancersNeeded?: Map
}

/** Occupation information */
export interface PublicMarketplaceJobPostingSearchOccupation {
  /** Occupation identifier */
  id?: string
  /** Preferred display label */
  prefLabel?: string
}

/** Occupations */
export interface PublicMarketplaceJobPostingSearchOccupations {
  /** Primary job category */
  category?: PublicMarketplaceJobPostingSearchOccupation
  /** Subcategories of the job */
  subCategories?: Array<PublicMarketplaceJobPostingSearchOccupation>
  /** Specific service label the job relates to (e.g., Mobile App Development) */
  occupationService?: PublicMarketplaceJobPostingSearchOccupation
}

/** Ontology skill information */
export interface PublicMarketplaceJobPostingSearchOntologySkill {
  /** Skill identifier */
  id?: string
  /** Preferred label for a skill */
  prefLabel?: string
  /** Boolean flag for whether the skill was highlighted due to a search match */
  highlighted?: boolean
  /** Unstructured custom skill or term added by the client */
  freeText?: string
}

/** Skill information */
export interface PublicMarketplaceJobPostingSearchSkill {
  /** Canonical/internal name of the skill (e.g., python). */
  name: string
  /** Human-readable name of the skill (e.g., Python). */
  prettyName: string
  /** Boolean flag for whether the skill was highlighted due to a search match. */
  highlighted?: boolean
}

/** Public job posting in marketplace */
export interface PublicMarketplaceJobPostingsSearch {
  /** The title of the job posting */
  title?: string
  /** The creation date of the job posting */
  createdDateTime?: string
  /** The contract type of the job posting */
  type?: ContractType
  /** The ciphertext of the job posting */
  ciphertext?: string
  /** The description of the job posting */
  description?: string
  /** The skill names of the job posting */
  skills?: Array<PublicMarketplaceJobPostingSearchSkill>
  /** The engagement type */
  engagement?: string
  /** The job budget */
  amount?: Money
  /** The recno of the job posting */
  recno?: number
  /** The freelancer experience level */
  contractorTier?: ContractorTier
  /** Job posting status */
  jobStatus?: JobStatus
  /** Visible client information in the market */
  client?: PublicMarketplaceJobPostingsSearchClient
  /** The category of the job posting */
  category?: string
  /** The subcategory of the job posting */
  subcategory?: string
  /** The number of freelancers needed for the job */
  freelancersToHire?: number
  /** Indicates if this is an enterprise job */
  enterpriseJob?: boolean
  /** Job creation timestamp */
  jobTs?: string
  /** Total applicants */
  totalApplicants?: number
  /** Job posting identifier */
  id: string
  /** Indicates whether the freelancer's location is mandatory to apply for the job */
  prefFreelancerLocationMandatory?: boolean
  /** Timestamp when the job was published */
  publishedDateTime?: string
  /** Flag for locality of the job */
  local?: boolean
  /** List of job location preferences */
  locations?: Array<FeedJobLocation>
  /** The readable label of the job duration */
  durationLabel?: string
  /** Indicates if the freelancer has applied to the job */
  applied?: boolean
  /** Structured list of required skills with metadata like label and highlight flag */
  ontologySkills?: Array<PublicMarketplaceJobPostingSearchOntologySkill>
  /** The job duration */
  duration?: string
  /** Specifies the type of hourly budget */
  hourlyBudgetType?: string
  /** Minimum hourly rate */
  hourlyBudgetMin?: number
  /** Maximum hourly rate */
  hourlyBudgetMax?: number
  /** Contains job’s category, subcategories, and service specialization. */
  occupations?: PublicMarketplaceJobPostingSearchOccupations
  /** The job budget */
  weeklyBudget?: Money
  /** Duration of the job */
  engagementDuration?: PublicMarketplaceJobPostingsSearchEngagementDuration
}

/** The visible client information in marketplace */
export interface PublicMarketplaceJobPostingsSearchClient {
  /** The number of freelancers hired by the client in the past */
  totalHires?: number
  /** The number of job posts the client created */
  totalPostedJobs?: number
  /** The number of freelancer reviewing the client */
  totalReviews?: number
  /** The number of client feedback from the freelancers */
  totalFeedback?: number
  /** The companyRid of the client */
  companyRid?: string
  /** The edcUserId of the client */
  edcUserId?: string
  /** The lastContractRid of the client */
  lastContractRid?: string
  /** Does client have financial privacy */
  hasFinancialPrivacy?: boolean
}

/** Response of public job posting search in marketplace */
export interface PublicMarketplaceJobPostingsSearchConnection {
  /** Jobs page result */
  jobs?: Array<PublicMarketplaceJobPostingsSearch>
  /** Pagination info */
  paging?: PageInfo
  /** Search facets */
  facets?: PublicMarketplaceJobPostingSearchFacets
}

/** Engagement duration information */
export interface PublicMarketplaceJobPostingsSearchEngagementDuration {
  /** Unique identifier */
  id: string
  /** Preferred display label */
  label: string
}

/** Filters for public job posting search in the marketplace */
export interface PublicMarketplaceJobPostingsSearchFilter {
  /** Generic search filter supports partial Lucene syntax */
  searchExpression_eq?: string
  /** Constrains the search to jobs from clients with the number of past hires to meet the specified range or value */
  clientHiresRange_eq?: IntRange
  /** Return only jobs with the specified contractor tier */
  contractorTier_eq?: ExperienceLevel
  /** Number of days. Constrains the search to jobs posted within last N days */
  daysPosted_eq?: number
  /** Duration of the hourly jobs. Fixed price jobs will be returned regardless of duration */
  duration_any: Array<JobDuration>
  /** Constrains the search to jobs with the number of freelancers needed */
  freelancersNeeded_eq?: number
  /** Whether to return only jobs posted by enterprise clients */
  enterpriseOnly_eq?: boolean
  /** Workload of the hourly jobs. Fixed price jobs will be returned regardless of workload */
  workload_eq?: EngagementType
  /** Constrains the search to jobs with proposals in the specified range */
  proposalRange_eq?: IntRange
  /** Whether to only return jobs of clients with verified payment method */
  verifiedPaymentOnly_eq?: boolean
  /** The occupationUID of the jobs to return. UIDs should be taken from Ontology and values will be handled with OR */
  occupationIds_any: Array<string>
  /** Constrains the search to jobs from clients with the minimum feedback rating */
  clientFeedBackRange_eq?: FloatRange
  /** Constrains the search to jobs from clients with the minimum budget */
  budgetRange_eq?: IntRange
  /** Constrains the search to jobs of the provided job type */
  jobType_eq?: ContractType
  /** Country or city of the client that posted a job */
  locations_any: Array<string>
  /** Constrains the search to jobs in particular area */
  area_eq?: AreaFilter
  /** Pagination options */
  pagination?: PageFilterInput
}

/** Purchase order information */
export interface PurchaseOrder {
  /** ID of the PO */
  id: string
  /** The order number to be displayed to the user */
  orderNumber: string
  /** Description associated with the offer, if any */
  description?: string
  /** PO amount */
  amount: Money
  /** Time for experince of the model */
  expiresAtDateTime?: string
  /** Controls who can see/use this PO */
  aclType: PurchaseOrderAclType
  /** ACL specification */
  aclSpecification?: string
  /** Whether PO is archived */
  archived: boolean
  /** True if "I don't have it yet" is enabled and selected */
  placeHolder: boolean
  /** Creation timestamp */
  createdAtDateTime: string
  /** User who created the PO */
  creator: GenericUser
  /** Percentage of spend used at which point user shall be notified */
  alertThreshold?: string
  /** Controls who gets notified */
  notificationAlcType?: PurchaseOrderNotificationAclType
  /** Notification ACL specification */
  notificationAlcSpecification?: string
}

/** Purchase order ACL type */
export interface PurchaseOrderAclType {}

/** Purchase order notification ACL type */
export interface PurchaseOrderNotificationAclType {}

/** Question type for screening */
export interface QuestionType {}

/** Metadata for action reasons */
export interface ReasonsMetadata {
  /** ID of the reason for proposal to switch to current status. */
  id: string
  /** Reason description text */
  reason?: string
  /** Reason alias or code */
  alias?: string
}

/** Reason types for various actions in the platform */
export interface ReasonType {}

/** Geographic region information */
export interface Region {
  /** Region identifier */
  id: string
  /** Region name */
  name: string
  /** Parent region if nested */
  parentRegion?: Region
}

/** Input for rejecting a milestone submission */
export interface RejectMilestoneSubmissionInput {
  /** Milestone Submission ID */
  id: string
  /** Note to contractor */
  noteToContractor?: string
  /** The list of attachments' IDs (For Internal Usage Only) */
  attachments: Array<string>
}

/** Request metadata */
export interface RequestMetadata {
  /** Indicates whether request is executed with elevated privileges Indicates whether request performed in sudo mode */
  sudo: boolean
  /** Indicates whether request originates from internal systems Indicates whether request performed internally */
  internal: boolean
}

/** Resource kinds used for permission checks */
export interface ResourceType {}

/** Room details */
export interface Room {
  /** ID of the room */
  id: string
  /** Name of the dash room */
  roomName?: string
  /** The organization that the room belongs to */
  organization?: CurrentOrganization
  /** Room creator */
  creator?: RoomUser
  /** Creation time of the room */
  createdAtDateTime?: string
  /** If true, then anyone can see and join the room If false, only invited users can join it */
  public?: boolean
  /** Room topic (a.k.a. subtitle) */
  topic?: string
  /** User that owns the room, can be different from creator */
  owner?: RoomUser
  /** Count of unread messages */
  numUnread?: number
  /** Time when the room was marked as favorite */
  roomFavoriteDateTime?: string
  /** Flag indicating whether the room was marked as favorite */
  favorite?: boolean
  /** Count of unread mentions */
  numUnreadMentions?: number
  /** List of users in this room */
  roomUsers: Array<RoomUser>
  /** Count of users in the room */
  numUsers?: number
  /** Date time when user joined this room */
  joinDateTime?: string
  /** Date time when user last visited this room The last time when a story was posted in the room or the room was modified */
  lastVisitedDateTime?: string
  /** The last time the room was visited */
  lastReadDateTime?: string
  /** Type of room, can be: GROUP, INTERVIEW, ONE_ON_ONE */
  roomType?: RoomType
  /** Time when the room was marked as read-only */
  readOnlyDateTime?: string
  /** Flag indicating wheter the room is marked as read-only */
  readOnly?: boolean
  /** Time when the room was blocked */
  blockDateTime?: string
  /** User who blocked the room */
  blockedBy?: RoomUser
  /** Flag indicating wheter the room is marked as hidden This makes the room invisible but can be unhidden unlike deleted rooms */
  hidden?: boolean
  /** Flag to indicate whether this room is muted for the current user */
  muted: boolean
  /** Contract identifier associated with the room, if any */
  contractId?: string
  /** Contract associated with the room */
  contract?: Contract
  /** ContractDetails of the associated Room */
  contractDetails?: ContractDetails
  /** Vendor Proposal associated with the room */
  vendorProposal?: VendorProposal
  /** Note associated with the room */
  roomNote?: string
  /** Flag to indicate whether any note is associated with the room */
  roomNotePresent: boolean
  /** Offer Ids associated with the room */
  offerIds: Array<string>
  /** Contains information of all involved recruiters, if it's a recruiter room (a.k.a. PSM, a.k.a. Talent Sourcers) */
  recruiters: Array<GenericUser>
  /** Latest story in the room */
  latestStory?: RoomStory
  /** Get a particular story of this room */
  story?: RoomStory
  /** List of stories posted in the room */
  stories?: RoomStoryConnection
  filter?: StoryFilter
  /** List of stories in the room */
  latestStoryPreRendered?: RoomStory
}

/** Filter options for room categories */
export interface RoomCategoryFilter {}

/** Connection type for paginated room results */
export interface RoomConnection {
  /** Total number of rooms matching the query */
  totalCount?: number
  /** List of room edges with pagination cursors */
  edges?: Array<RoomEdge>
  /** Pagination information for navigating results */
  pageInfo?: PageInfo
}

/** Input required to create a new room */
export interface RoomCreateInputV2 {
  /** Name of the new room, applied for group rooms */
  roomName?: string
  /** Topic of the new room */
  topic?: string
  /** Users to be added in the room */
  users?: Array<RoomUserInput>
  /** Type of the room */
  roomType: RoomTypeV2
}

/** Edge type containing a room node for pagination */
export interface RoomEdge {
  /** Room data */
  node?: Room
}

export interface RoomFilter {
  /** Specifies a filter by type for the list of rooms */
  roomType_eq?: RoomTypeFilter
  /** Specifies a filter by the privacy of the room */
  roomPrivacy_eq?: RoomPrivacyFilter
  /** If specified, only the rooms that the user is (or is not) subscribed to will be returned. Default: true */
  subscribed_eq?: boolean
  /** Return only the rooms that have had new activity since the given time. */
  activeSince_eq?: string
  /** Include all favorite rooms, regardless of when the last activity in those rooms took place. Ignored if 'activeSince' is not set. */
  includeFavorites_eq?: boolean
  /** Include all rooms having unread stories, regardless of when the last activity in those rooms took place. Ignored if 'activeSince' is not set. */
  includeUnreadIfActive_eq?: boolean
  /** Filteres rooms that has unread stories if set to true. Note: This is mutually exclusive with 'activeSince' */
  unreadRoomsOnly_eq?: boolean
  /** The locale to use when stories are returned with the room */
  local_eq?: string
  /** If false filters rooms which are not hidden, otherwise return all the rooms. Default: true */
  includeHidden_eq?: boolean
  /** If specified, returns only rooms associated with that referenceId. If there are no rooms with that associated object reference and 'roomName' and 'roomType' are provided, creates a new room with those values and the associated object reference */
  objectReferenceId_eq?: string
  /** Filters rooms by given category */
  roomCategory_eq?: RoomCategoryFilter
}

/** Filter options for room privacy settings */
export interface RoomPrivacyFilter {}

/** Message or event posted in a room */
export interface RoomStory {
  /** ID of the story */
  id: string
  /** Information about the associated room */
  room: Room
  /** Date time when the story has been created */
  createdDateTime: string
  /** Date time when the story has been last updated */
  updatedDateTime: string
  /** Room user who created this story */
  user: GenericUser
  /** Message associated with the story */
  message?: string
  /** Organization context which the story was posted under. */
  organization?: GenericOrganization
  /** Returns any notes or flags attached to the story, e.g. if it's marked as favorite */
  roomStoryNote?: RoomStoryNote
  /** Message attachments */
  attachments?: Array<MessageAttachments>
}

/** Types of abuse that can be reported for a room story */
export interface RoomStoryAbuseType {}

/** Connection type for paginated room story results */
export interface RoomStoryConnection {
  /** Total number of stories matching the query */
  totalCount?: number
  /** List of story edges with pagination cursors */
  edges?: Array<RoomStoryEdge>
  /** Pagination information for navigating results */
  pageInfo?: PageInfo
}

export interface RoomStoryCreateInputV2 {
  /** ID of the target room */
  roomId?: string
  /** Message to be added in the room */
  message?: string
}

/** Edge type containing a room story node and cursor for pagination */
export interface RoomStoryEdge {
  /** Cursor for pagination */
  cursor?: string
  /** Room story data */
  node?: RoomStory
}

/** Filter for room stories */
export interface RoomStoryFilter {
  /** Room identifier (required) */
  roomId_eq: string
  /** Additional story filter options */
  storyFilter?: StoryFilter
}

/** Notes/Flags attached to the story by the user */
export interface RoomStoryNote {
  /** Whether the story is marked as favorite */
  favorite: boolean
  /** Type of abuse reported for this story */
  abuseType?: RoomStoryAbuseType
  /** Whether the story is whitelisted despite abuse reports */
  whitelisted: boolean
  /** Additional details about the abuse report */
  abuseDetails?: string
}

export interface RoomStoryUpdateInputV2 {
  /** Id of the story to be updated */
  storyId: string
  /** Id of the room where the story is associated */
  roomId: string
  /** Updated message for the story */
  message?: string
}

export interface RoomType {}

/** Filter options for room types */
export interface RoomTypeFilter {}

export interface RoomTypeV2 {}

/** Input required to update a room */
export interface RoomUpdateInputV2 {
  /** ID of the target room */
  roomId: string
  /** Updated name of the room */
  roomName?: string
  /** Updated topic name of the room */
  topic?: string
  /** Optional note to store reason for the update */
  reason?: string
  /** Make the room archived */
  readOnly?: boolean
}

/** User participating in a room with their organization and role */
export interface RoomUser {
  /** User information */
  user?: GenericUser
  /** Organization the user belongs to */
  organization?: GenericOrganization
  /** User's role in the room (owner, admin, participant) */
  role?: string
}

/** Details of the user to be added in the Room */
export interface RoomUserInput {
  /** ID of the user */
  userId: string
  /** ID of the organization user belongs to */
  organizationId: string
  /** Role of the user in the room. Valid values are owner, admin, and participant. Only Current owner can change the room to contain a new owner. Admins can change the room name and topic, and invite new users. */
  role?: string
  /** Invite someone who's not yet an Upwork member by email */
  inviteEmail?: string
}

/** Skills and occupations data for job posting */
export interface SandsJobPostRequest {
  /** jobPostId: ID # the correct id will be provided by upstream Equal to services.id (eg Front-End Development) */
  occupationId?: string
  /** List of skills */
  skills: Array<JobPostingSkillInput>
  /** Job post status */
  status?: SandsJobPostStatus
  /** Free-text occupation description */
  freetextOccupation?: string
  /** Tags for categorization */
  tags: Array<string>
  /** Additional skills */
  additionalSkills: Array<JobPostingAdditionalSkillInput>
  /** Occupation identifiers */
  occupations: Array<string>
}

/** Status of a Sands job post */
export interface SandsJobPostStatus {}

/** Search result */
export interface Search {
  /** Returns the Freelancer Profiles based on the given filter and publicly visible */
  searchFreelancerPublicProfile: SemSearchV2Response
  request: SemSearchV2Request
}

/** Input for searching offers by attributes */
export interface SearchOffersByAttributesInput {
  /** List of attribute identifiers */
  ids: Array<string>
  /** Attribute to search offers by */
  searchAttribute: OfferSearchAttribute
  /** Whether to query for attachments (turning it off may improve query performance, default true). Default = true */
  includeAttachments?: boolean
  /** Whether to query for milestones (turning it off may improve query performance, default true). Default = true */
  includeMilestones?: boolean
}

/** Input for searching offers */
export interface SearchOffersInput {
  /** Identifier of the attribute */
  id: string
  /** Attribute to search offers by */
  searchAttribute: OfferSearchAttribute
  /** Legacy offer states to search by */
  states: Array<OfferLegacyState>
  /** Size of a single page ('0' means unlimited, default 10). Default = 10 */
  limit?: number
  /** Page number starting from '1' (default 1). Default = 1 */
  page?: number
  /** Whether order of offers should be ascending (default true). Default = true */
  ascendingOrder?: boolean
  /** Whether to query for attachments (turning it off may improve query performance, default true). Default = true */
  includeAttachments?: boolean
  /** Whether to query for milestones (turning it off may improve query performance, default true). Default = true */
  includeMilestones?: boolean
}

export interface SearchTerm {
  /** Provides additional search terms to check for in a job detailed description. Results must contain all of the additional search terms */
  andTerms_all: Array<string>
  /** Provides additional search terms to check for in a job detailed description. Results must contain at least one of the search terms */
  orTerms_any: Array<string>
  /** Identifies a phrase that all jobs in the search results must contain */
  exactTerms_any: Array<string>
  /** Identifies a word or phrase that should not appear in any job in the search results */
  excludeTerms_any: Array<string>
}

/** Segmentation type metadata */
export interface SegmentationType {
  /** Segmentation type identifier */
  id: string
  /** Segmentation type name */
  name?: string
  /** Segmentation type reference name */
  referenceName?: string
}

/** Double range filter */
export interface SemSearchV2DoubleRange {
  /** Minimum value */
  min?: number
  /** Maximum value */
  max?: number
}

/** Integer range filter */
export interface SemSearchV2IntRange {
  /** Minimum value */
  min?: number
  /** Maximum value */
  max?: number
}

/** SEM profile result */
export interface SemSearchV2Profile {
  /** Talent profile details */
  profile?: TalentProfile
}

/** SEM search request */
export interface SemSearchV2Request {
  /** Pagination options */
  paging?: Paging
  /** Free text query */
  userQuery?: string
  /** Occupation UID filter */
  occupationUid?: string
  /** Title filter */
  title?: string
  /** Country filters */
  countries: Array<string>
  /** State/region filters */
  states: Array<string>
  /** City filters */
  cities: Array<string>
  /** Hourly rate range */
  hourlyRate?: SemSearchV2DoubleRange
  /** Job Success Score range */
  jobSuccessScore?: SemSearchV2DoubleRange
  /** Total jobs range */
  totalJobs?: SemSearchV2IntRange
  /** Filter by Top Rated status */
  topRated?: boolean
  /** Filter by Rising Talent status */
  risingTalent?: boolean
  /** Require portrait image (100px) */
  hasPortrait100?: boolean
  /** Skill name filters */
  skillsNames: Array<string>
  /** Skill UID filters */
  skillsUids: Array<string>
  /** VEM skills to boost */
  vemSkills: Array<VemSkill>
  /** Freelancer type filter */
  type?: FreelancerType
  /** Include agency preview data */
  addAgencyPreview?: boolean
  /** Restrict to agency search */
  agencySearch?: boolean
  /** Only include publicly visible profiles */
  publicVisibilityOnly?: boolean
}

/** SEM search response */
export interface SemSearchV2Response {
  /** Paging information for the result set */
  pagingInfo: PagingInfo
  /** Matching profiles */
  profiles: Array<SemSearchV2Profile>
}

/** Skills can be seen methods, tools, frameworks, processes, etc that can be used in the industry. */
export interface Skill {
  id: string
  /** ontologyId is a semantic identifier that unqiuely identifies an ontology element
                           Its value doesn't depend on the environment (same for dev, staging, prod)
                          Example: upwork:AdministrationSoftware */
  ontologyId: string
  type: Array<OntologyEntityType>
  /** Defines the status of an occupation.
                          
                            Active: Skill is active and available for use
                            Deprecated: Skill has been deprecated
                            Pending: Skill has been created recently and is not yet active */
  entityStatus: OntologyEntityStatus
  /** Defines the label of the entity that is displayed across Upwork. It must be a unique value.
                          Example: "Accounting" */
  preferredLabel: string
  /** Defines (when available) the date (timestamp) of creation for the entity. */
  createdDateTime?: string
  /** Defines (when available) the date (timestamp) of update for the entity. */
  modifiedDateTime?: string
  definition?: string
  /** Defines alternative labels for the entity. */
  altLabel?: Array<string>
  /** Defines the narrower entity of an attribute group.
                          It only applies to attribute groups and it defines the member entities of each attribute group.
                          When talking about attribute groups, we actually refer to skills which have narrower relationships, but not broader. See them as the parent in a hierarchy
                          Example: "upworkOccupation:wordpresssetupandconfiguration" */
  narrower?: Array<string>
  /** Defines the narrower entity of an attribute group.
                          It only applies to attribute groups and it defines the member entities of each attribute group.
                          When talking about attribute groups, we actually refer to skills which have narrower relationships, but not broader. See them as the parent in a hierarchy
                          Example ids: "1024054176003235840" */
  narrowerIds?: Array<string>
  /** Defines the broader entity of a skill.
                          The broader entity is the attribute group that the skill belongs to. Skills can have more than one broader entities.
                          Example: "upworkOccupation:webdevelopmentsubcategory" */
  broader?: Array<string>
  /** Defines the broader entity of a skill.
                          The broader entity is the attribute group that the skill belongs to. Skills can have more than one broader entities.
                          Example ids: "531770282584862733" */
  broaderIds?: Array<string>
  /** Defines the dependency between an attribute group and an attribute.
                          The domain of this property can only be an attribute group and the range is an attribute. */
  dependsOn?: Array<string>
  /** Defines the dependency between an attribute group and an attribute.
                          The domain of this property can only be an attribute group and the range is an attribute. */
  dependsOnIds?: Array<string>
  /** Defines the entities that are the result of splitting a Skill.
                          The resulting entities are also Skills and there must be at least two resulting entities.
                          One of the resulting entities will serve as a primary replacement and must be present in the upwork:replacedBy property too.
                          Split entities must also be deprecated.
                          Example "upwork:socialmediamanagement" */
  splitInto?: Array<string>
  /** Defines the entities that are the result of splitting a Skill.
                          The resulting entities are also Skills and there must be at least two resulting entities.
                          One of the resulting entities will serve as a primary replacement and must be present in the upwork:replacedBy property too.
                          Split entities must also be deprecated.
                          Example: 1109421460453785600 */
  splitIntoIds?: Array<string>
  /** Defines the entity with which the source entity is merged into.
                          The target entity is also a Skill. The target entity must be present in the upwork:replacedBy property.
                          Merged entities must also be deprecated. */
  mergedInto?: string
  /** Defines the entity with which the source entity is merged into.
                          The target entity is also a Skill. The target entity must be present in the upwork:replacedBy property.
                          Merged entities must also be deprecated. */
  mergedIntoId?: string
  /** Defines the replacement of split, merged and deprecated skills.
                          The replacement entity must be a single entity of the same type and level. */
  replacedBy?: string
  /** Defines the replacement of split, merged and deprecated skills.
                          The replacement entity must be a single entity of the same type and level. */
  replacedById?: string
  /** This property defines the description for each skill. */
  scopeNote?: string
  /** Defines a link to an external resource (preferably Wikipedia link). */
  externalLink?: Array<string>
  /** This property defines the link between skills, indicating a high degree of confidence that the concepts are highly similar.
                          The purpose of this property is to define a link between a new entity and an existing entity
                          Example: "upwork:accounting" */
  exactMatch?: Array<string>
  /** This property defines the link between skills, indicating a high degree of confidence that the concepts are highly similar.
                          The purpose of this property is to define a link between a new entity and an existing entity
                          Example id: "1024054015462055936" */
  exactMatchIds?: Array<string>
  /** This property defines the link between skills, indicating a lower degree of confidence than the exactMatch that the concepts are similar.
                          The purpose of this property is to define a link between a new entity and an existing entity (one that has historical data associated with it).
                          In the future this might be also used for Occupation.
                          Example: "upwork:android_game" */
  closeMatch?: Array<string>
  /** This property defines the link between skills, indicating a lower degree of confidence than the exactMatch that the concepts are similar.
                          The purpose of this property is to define a link between a new entity and an existing entity (one that has historical data associated with it).
                          In the future this might be also used for Occupation.
                          Example: "1024054086635200512" */
  closeMatchIds?: Array<string>
  /** Used internally, defines the source of the skill or a description extracted from dbpedia */
  comment?: string
  /** Defines attribute groups. Skills that have this property with the value 'Attribute Group' are attribute groups. */
  attributeLevel?: Array<string>
  /** Defines if attribute group supports multi-selection of its attributes in the job post flow.
                          Presentation attributes present for attribute groups */
  allowMultipleClient: boolean
  /** Whether freelancers can select multiple attributes from this group */
  allowMultipleFreelancer: boolean
  /** Defines if addition of free text answers is allowed */
  allowOther: boolean
  /** Question text shown to clients for this attribute group */
  clientQuestion?: string
  /** Tip text shown to clients for this attribute group */
  clientTip?: string
  /** Question text shown to freelancers for this attribute group */
  freelancerQuestion?: string
  /** Tip text shown to freelancers for this attribute group */
  freelancerTip?: string
  /** Defines advanced attribute groups which are being displayed in the bottom of the page. */
  advancedClient: boolean
  /** Whether this attribute group is visible to clients */
  client: boolean
  /** Whether this attribute group is visible to freelancers */
  freelancer: boolean
  /** Defines if attribute group is required or optional for clients. */
  requiredClient: boolean
  /** Defines if attribute group is required or optional for freelancers. */
  requiredFreelancer: boolean
  /** Defines the label that is displayed in the 'see more' dialog in job posts. */
  otherClientLabel?: string
  /** Defines the label that is displayed in the 'show more' view in profiles. */
  otherFreelancerLabel?: string
  /** Presentation mode for displaying this attribute group */
  presentationMode?: string
  /** Defines the order in which attributes and attribute groups appear in. */
  priority?: number
  /** This is the inverse property of upworkModel:requires. It links an attribute group with the L3 that requires it.
                          requires is linking an L3 to an attribute group and the inverse property links the same attribute group with that L3 through isRequiredBy
                          Example: "upworkOccupation:brandidentitydesign */
  isRequiredBy?: Array<string>
  /** This is the inverse property of upworkModel:requires. It links an attribute group with the L3 that requires it.
                          requires is linking an L3 to an attribute group and the inverse property links the same attribute group with that L3 through isRequiredBy
                          Example: "1044578476142100497" */
  isRequiredByIds?: Array<string>
  /** Legacy Skills are skills that existed prior to Ontology Skills. This is the skill name associated with the legacy skills and used to mapping ontology skills with legacy skills and viceversa. */
  legacySkillNid?: string
  /** LegacySkillNid value pretty formatted */
  prettyName?: string
  /** The uid identifier of the legacy skill */
  legacySkillId?: string
}

/** Complete snapshot of work with screenshots, activity tracking, and metadata */
export interface Snapshot {
  /** Unique identifier for the Snapshot */
  id?: string
  /** Time of the snapshot (epoch seconds) */
  time?: number
  /** Identifier for the contract */
  contractId?: string
  /** Number of mouse events */
  mouseEventsCount?: number
  /** Number of keyboard events */
  keyboardEventsCount?: number
  /** Team name associated with the Snapshot */
  teamName?: string
  /** Status of the Snapshot */
  status?: string
  /** Title of the active window during the Snapshot */
  activeWindowTitle?: string
  /** Memo associated with the Snapshot */
  memo?: string
  /** Company identifier associated with the Snapshot */
  companyId?: string
  /** Indicates whether the Snapshot has a screenshot */
  hasScreenshot?: boolean
  /** URL of the screenshot */
  screenshotUrl?: string
  /** Path to the screenshot image */
  screenshotImage?: string
  /** Path to the large version of the screenshot image */
  screenshotImageLarge?: string
  /** Path to the medium version of the screenshot image */
  screenshotImageMedium?: string
  /** Path to the thumbnail version of the screenshot image */
  screenshotImageThumbnail?: string
  /** Indicates whether the Snapshot has webcam data */
  hasWebcam?: boolean
  /** URL of the webcam data */
  webcamUrl?: string
  /** Path to the webcam image */
  webcamImage?: string
  /** Path to the thumbnail version of the webcam image */
  webcamImageThumbnail?: string
  /** Task associated with the Snapshot */
  task?: string
  /** List of events per minute for a Snapshot */
  minutes?: SnapshotMinutes
}

/** Activity events for a single minute within a snapshot */
export interface SnapshotMinute {
  /** Event timestamp (epoch seconds) */
  time?: number
  /** Number of mouse events */
  mouse?: number
  /** Number of keyboard events */
  keyboard?: number
}

/** Collection of per-minute activity data for a snapshot */
export interface SnapshotMinutes {
  /** List of minute-by-minute activity events */
  minute?: Array<SnapshotMinute>
}

/** Input for querying snapshots by contract and timestamp */
export interface SnapshotsByContractIdInput {
  /** Contract identifier */
  contractId: string
  /** Timestamp in Unix epoch seconds */
  timestamp: number
}

/** Sorting attribute and order */
export interface SortAttribute {
  /** Field name to sort by */
  field: string
  /** Sort direction */
  sortOrder: SortOrder
}

/** Sort direction values */
export interface SortOrder {}

/** Source type for offer */
export interface SourceType {}

/** Offer source type */
export interface SourceTypeInput {}

/** Staff membership details */
export interface Staff {
  /** Staff record identifier */
  id?: string
  /** Related user */
  user?: GenericUser
  /** Enum representing the activation status
                          
                            '1': Active
                            '2': Inactive */
  activationStatus?: number
  /** Creation date */
  creationDate?: string
  /** Enum representing the type of staff within the organization.
                          
                            '2': Invitation
                            '3': Ownership */
  staffType?: number
}

/** Connection of staff records */
export interface StaffsConnection {
  /** Staffs data */
  edges: Array<StaffsConnectionEdge>
  /** Total count of records */
  totalCount?: number
  /** Page info */
  pageInfo?: PageInfo
}

/** Edge in staff connection */
export interface StaffsConnectionEdge {
  /** Staff node */
  node?: Staff
}

/** Stipend-based contract term including minimum hours and amount */
export interface StipendContractTerm {
  /** Term identifier (string UID) */
  id: string
  /** Creation date of the term */
  createDate?: string
  /** Last modification date of the term */
  modifyDate?: string
  /** Effective change date */
  changeDate?: string
  /** User who created the term */
  createdBy?: ContractUser
  /** Actor type for the creator */
  creatorUserType?: CreatorType
  /** User who last changed the term */
  changedBy?: ContractUser
  /** Minimum guaranteed hours */
  minGuaranteedHours?: string
  /** Stipend amount */
  stipendAmount?: Money
  /** Start date of the term */
  startDate?: string
  /** Actor type for the last change */
  changingUserType?: CreatorType
  /** End date of the term */
  endDate?: string
  /** Engagement payment type for the term */
  jobType?: JobType
  /** Protected time calculation period */
  ptcData?: PtcData
}

/** Terms for Stipend */
export interface StipendTerms {
  /** Stipend amount */
  stipend?: Money
  /** Vendor hourly rate */
  vendorRate?: Money
  /** Period of time, default is weekly */
  period?: PeriodType
}

export interface StoryFilter {
  /** Returns the story crated between the given date time range */
  storyCreatedDateTime_bt?: DateTimeRange
  /** If both pagination.after and an older than value are specified, then the pagination.after takes precedence and the older than value is ignored */
  pagination?: Pagination
}

/** Built-in String */
export interface String {}

/** Key-value pair element for string maps */
export interface StringMapElement {
  /** Map key */
  key: string
  /** Value */
  value: string
}

/** Input for key-value element with non-null value */
export interface StringMapElementInput {
  /** Map key */
  key: string
  /** Non-null value */
  value: string
}

export interface StringMapOccupation {
  /** Category identifier */
  category: string
  /** List of services for this category */
  services: Array<Occupation>
}

/** Milestone submission record */
export interface Submission {
  /** Submission identifier */
  id: string
  /** Creation timestamp */
  createdDateTime?: string
  /** Modification timestamp */
  modifiedDateTime?: string
  /** Submission amount */
  amount?: Money
  /** Sequence identifier */
  sequenceId?: number
}

/** Milestone submission event and associated messages */
export interface SubmissionEvent {
  /** Submission information */
  submission: Submission
  /** Submission message */
  submissionMessage?: SubmissionMessage
  /** Revision message */
  revisionMessage?: SubmissionMessage
}

/** Message attached to a milestone submission or revision */
export interface SubmissionMessage {
  /** Message creation timestamp */
  createdDateTime?: string
  /** Message text */
  message?: string
}

/** Adjusted feedback score for a specific job category */
export interface TalentAdjustedCategoryScore {
  /** Average score for this category */
  averageCategoryScore?: number
}

/** Talent cloud section details */
export interface TalentCloudSection {
  /** Section identifier */
  id: string
  /** The talent cloud this section belongs to */
  talentCloud?: PrivateTalentCloud
  /** Section name */
  name?: string
  /** Section description */
  description?: string
  /** Type of section (ONBOARDING, OFFBOARDING, etc.) */
  type?: TalentCloudTaskSectionType
  /** List of attachment IDs for this section */
  attachmentIds?: Array<string>
  /** Whether this section is active */
  active?: boolean
  /** Display order index */
  orderIndex?: number
}

/** Talent cloud task overview with sections */
export interface TalentCloudTask {
  /** The talent cloud this task belongs to */
  talentCloud?: PrivateTalentCloud
  /** List of task sections */
  taskSections?: Array<TalentCloudTaskSection>
}

/** Overview of a talent cloud task */
export interface TalentCloudTaskOverview {
  /** Task identifier */
  id: string
  /** List of section IDs this task belongs to */
  taskSectionIds?: Array<string>
  /** Task name */
  name?: string
  /** Whether completion of this task is required */
  completionRequired?: boolean
  /** Whether this task is active */
  active?: boolean
  /** List of permissions for different roles */
  permissions?: Array<TalentCloudTaskOverviewPermission>
  /** Primary owner role for this task */
  primaryTaskOwner?: TalentCloudTaskRole
}

/** Permission mapping for a specific role on a task */
export interface TalentCloudTaskOverviewPermission {
  /** The role this permission applies to */
  role?: TalentCloudTaskRole
  /** The permission level (NO, VIEW, WRITE) */
  permission?: TalentCloudTaskPermission
}

/** Permission level for talent cloud tasks */
export interface TalentCloudTaskPermission {}

/** Role types for talent cloud task management */
export interface TalentCloudTaskRole {}

/** Task section containing section details and tasks */
export interface TalentCloudTaskSection {
  /** Details of the task section */
  taskSectionDetails?: TalentCloudSection
  /** List of tasks in this section */
  tasks?: Array<TalentCloudTaskOverview>
}

/** Section types for talent cloud tasks */
export interface TalentCloudTaskSectionType {}

/** Filter for querying talent cloud tasks */
export interface TalentCloudTasksInputFilter {
  /** List of talent cloud identifiers to filter by */
  talentCloudIds_any: Array<string>
}

/** Community certificate details including provider and verification info */
export interface TalentCommunityCertificate {
  /** Certificate name */
  name?: string
  /** Certificate description */
  description?: string
  /** URL to certificate logo */
  logoUrl?: string
  /** Method used to verify the certificate */
  verificationMethod?: string
  /** Certificate provider organization */
  provider?: string
  /** Link to provider website */
  providerLink?: string
  /** Certificate duration in days */
  duration?: number
  /** Diversity classifications for this certificate */
  classifications?: Array<TalentDiversityCertificateClassification>
  /** Current status of the certificate */
  status?: TalentCommunityCertificateStatus
}

/** Status of a community certificate */
export interface TalentCommunityCertificateStatus {}

/** Visibility settings for community certificates */
export interface TalentCommunityCertificateVisibility {}

/** Contract details including terms, status, and dates */
export interface TalentContract {
  /** Contract identifier */
  id: string
  /** Contract start date */
  startDate?: string
  /** Contract end date */
  endDate?: string
  /** Current contract status */
  status?: TalentContractStatus
  /** Client team identifier */
  clientTeamId?: string
  /** Contract title */
  title?: string
  /** Contract terms (rate, amount, type) */
  terms?: TalentContractTerms
  /** When contract was created */
  createDate?: string
  /** Client organization identifier */
  clientOrgId?: string
}

/** Access type for talent contracts */
export interface TalentContractAccessType {}

/** Aggregated contract statistics including charges and hours */
export interface TalentContractAggregate {
  /** Total charges for the contract */
  totalCharge?: string
  /** Total hours worked */
  hours?: string
}

/** Feedback given and received for a contract */
export interface TalentContractFeedback {
  /** Feedback from client to freelancer */
  feedbackToFreelancer?: TalentWorkFeedback
  /** Feedback from freelancer to client */
  feedbackToClient?: TalentWorkFeedback
}

/** Contract lifecycle status */
export interface TalentContractStatus {}

/** Contract terms including rate and payment structure */
export interface TalentContractTerms {
  /** Hourly rate */
  hourlyRate?: string
  /** Job type (hourly or fixed) */
  jobType?: TalentJobType
  /** Stipend amount if applicable */
  stipendAmount?: string
  /** Fixed amount if applicable */
  fixedAmount?: string
}

/** Diversity certificate classification type */
export interface TalentDiversityCertificateClassification {
  /** Classification identifier */
  id?: string
  /** Classification name */
  name?: string
}

/** Education record (deprecated, use TalentProfileEducationRecord) */
export interface TalentEducationRecord {
  /** Education record identifier */
  id?: string
  /** Person identifier */
  personId?: string
  /** Name of educational institution */
  institutionName?: string
  /** Standardized institution identifier */
  standardizedInstitutionId?: string
  /** Field of study */
  areaOfStudy?: string
  /** Standardized area of study identifier */
  standardizedAreaOfStudyId?: string
  /** Degree obtained */
  degree?: string
  /** Standardized degree identifier */
  standardizedDegreeId?: string
  /** When education started */
  startDateTime?: string
  /** When education ended */
  endDateTime?: string
  /** Additional comments */
  comment?: string
}

/** Individual feedback score by category */
export interface TalentFeedbackScore {
  /** Category label */
  label?: string
  /** Score value */
  score?: number
  /** Weight of this score */
  weight?: number
}

/** Job category or subcategory */
export interface TalentJobCategory {
  /** Category identifier */
  id?: string
  /** Category name */
  name?: string
}

/** Job category group with selected categories */
export interface TalentJobCategoryGroup {
  /** Category group identifier */
  id?: string
  /** Category group name */
  name?: string
  /** List of selected categories in this group */
  selectedCategories?: Array<TalentJobCategory>
}

/** Contract payment type */
export interface TalentJobType {}

/** Job opening details including title, description, and requirements */
export interface TalentOpening {
  /** Opening identifier */
  id?: string
  /** Job title */
  title?: string
  /** Job visibility setting */
  visibility?: TalentContractAccessType
  /** Extended job details from Vega */
  vegaJobDetails?: TalentVegaJobDetails
}

/** Other community certificate not in standard list */
export interface TalentOtherCommunityCertificate {
  /** Certificate name */
  name?: string
  /** Certificate provider */
  provider?: string
}

/** Freelancer availability information including capacity and schedule */
export interface TalentPersonAvailability {
  /** Person identifier */
  personId?: string
  /** Availability capacity (full-time, part-time, etc.) */
  capacity?: FreelancerProfileAvailabilityCapacity
  /** When availability record was created */
  createdDateTime?: string
  /** When freelancer becomes available */
  availabilityDateTime?: string
  /** Last update timestamp */
  updatedDateTime?: string
  /** Purchased invitation badge status */
  purchasedInvitationBadge?: TalentPurchasedInvitationBadge
  /** Minimum hours available per week */
  minHours?: number
  /** Maximum hours available per week */
  maxHours?: number
  /** Days of the week available for work */
  availableDays: Array<Day>
}

/** Freelancer profile containing all profile information and settings */
export interface TalentProfile {
  /** Unique identifier for the person */
  personId: string
  /** Profile identity information */
  identity?: TalentProfileIdentity
  /** Personal data including name, title, description */
  personalData?: TalentProfilePersonalData
  /** User preferences for profile visibility and privacy */
  preferences?: TalentProfileUserPreferences
  /** Profile settings and status */
  settings?: TalentProfileSettings
  /** Availability information for the freelancer */
  personAvailability?: TalentPersonAvailability
  /** List of portfolio projects */
  projectList?: TalentProjectList
  /** Community and diversity certificates */
  communityCertificates?: Array<TalentProfileCommunityCertificate>
  /** Profile completeness summary with PCI score */
  profileCompleteness?: TalentProfileCompletenessSummary
  /** Other professional experiences */
  otherExperiences?: Array<TalentProfileOtherExperience>
  /** Education history records */
  educationRecords?: Array<TalentEducationRecord>
  /** Employment history records */
  employmentRecords?: Array<TalentProfileEmploymentRecord>
  /** Skills listed on the profile */
  skills?: Array<TalentProfilePersonSkill>
  /** Job categories and subcategories */
  jobCategories?: Array<TalentJobCategoryGroup>
  /** Aggregated profile statistics and metrics */
  profileAggregates?: TalentProfileAggregate
  /** Specialized profiles for different services */
  specializedProfiles: Array<TalentSpecializedProfile>
  /** Skills for specialized profiles */
  specializedProfilesSkills: Array<TalentSpecializedProfileSkill>
  /** Projects for specialized profiles */
  specializedProfilesProjects: Array<TalentSpecializedProfilesProject>
}

/** Aggregated profile statistics and metrics for a freelancer */
export interface TalentProfileAggregate {
  /** Last date freelancer worked */
  lastWorkedOn?: string
  /** Total number of hourly jobs completed */
  totalHourlyJobs?: number
  /** Total number of fixed-price jobs completed */
  totalFixedJobs?: number
  /** Top Rated status */
  topRatedStatus?: string
  /** Total feedback score */
  totalFeedback?: number
  /** Total earnings across all jobs */
  totalEarnings?: number
  /** Adjusted scores by category */
  adjustedCategoryScores?: Array<TalentAdjustedCategoryScore>
  /** Total number of jobs completed */
  totalJobs?: number
}

/** Community or diversity certificate associated with a freelancer profile */
export interface TalentProfileCommunityCertificate {
  /** Person identifier */
  personId?: string
  /** Attachment ID for certificate document */
  certificateAttachmentId?: string
  /** Certificate number or identifier */
  certificationNumber?: string
  /** Certificate expiration date */
  expirationDate?: string
  /** Business name on the certificate */
  businessName?: string
  /** Visibility setting for the certificate */
  visibility?: TalentCommunityCertificateVisibility
  /** Certificate details */
  certificate?: TalentCommunityCertificate
  /** Other certificate details if not in standard list */
  otherCertificate?: TalentOtherCommunityCertificate
}

/** Profile completeness summary with PCI score and section counts */
export interface TalentProfileCompletenessSummary {
  /** Person identifier */
  personId?: string
  /** Actual profile completeness index score */
  pciActual?: number
  /** Display-friendly PCI score */
  pciDisplay?: number
  /** Suggested action to improve completeness */
  pciAction?: string
  /** Points awarded for completing the action */
  pciActionCredit?: number
  /** When PCI was last calculated */
  pciDateTime?: string
  /** Action to take for empty profile sections */
  actionForEmptySection?: string
  /** Number of skills on profile */
  skillsCount?: number
  /** Number of employment records */
  employmentRecordCount?: number
  /** Whether profile has a portrait photo */
  portraitExists?: boolean
  /** Whether profile has an overview/description */
  overviewExists?: boolean
  /** Number of passed tests */
  passedTestsCount?: number
  /** Number of education records */
  educationRecordCount?: number
  /** Number of certificates */
  certificatesCount?: number
  /** Number of other experiences */
  otherExperiencesCount?: number
  /** Number of portfolio items */
  portfolioCount?: number
  /** Employment Security Number count */
  esnCount?: number
  /** Last update timestamp */
  updatedDateTime?: string
}

/** Employment history record (deprecated, use TalentProfileEmploymentHistoryRecord) */
export interface TalentProfileEmploymentRecord {
  /** Employment record identifier */
  id?: string
  /** Person identifier */
  personId?: string
  /** Company name */
  companyName?: string
  /** Job title */
  jobTitle?: string
  /** Standardized company identifier */
  standardizedCompanyId?: string
  /** Standardized job title identifier */
  standardizedJobTitleId?: string
  /** Role description */
  role?: string
  /** Employment start timestamp */
  startDateTime?: string
  /** Employment end timestamp */
  endDateTime?: string
  /** Job description */
  description?: string
  /** City of employment */
  city?: string
  /** Country of employment */
  country?: string
}

/** Profile identity information including ID and ciphertext */
export interface TalentProfileIdentity {
  /** Profile identity ID */
  id?: string
  /** Encrypted profile identifier */
  ciphertext?: string
}

/** List of talent profiles */
export interface TalentProfileList {
  /** Array of talent profiles */
  profiles: Array<TalentProfile>
}

/** Other professional experience not categorized elsewhere */
export interface TalentProfileOtherExperience {
  /** Experience identifier */
  id: string
  /** Person identifier */
  personId?: string
  /** Experience subject or title */
  subject?: string
  /** Experience description */
  description?: string
  /** Whether experience is active */
  active?: boolean
}

/** Personal data including name, title, description, and billing rate */
export interface TalentProfilePersonalData {
  /** Freelancer's first name */
  firstName: string
  /** Freelancer's last name */
  lastName: string
  /** Profile photo or avatar */
  portrait?: Portrait
  /** Profile title */
  title?: string
  /** Profile description */
  description?: string
  /** Freelancer's typical billing rate */
  chargeRate: Money
  /** Link to the freelancer's profile */
  profileUrl?: string
  /** Under review, auto rejected, rejected, accepted etc. */
  profileState?: PersonalDataProfileState
  /** Personal data location */
  location?: PersonalDataLocation
}

/** Skill listed on a freelancer profile with ontology mapping */
export interface TalentProfilePersonSkill {
  /** Skill identifier */
  id?: string
  /** Skill name */
  skill?: string
  /** Display-friendly skill name */
  prettyName?: string
  /** Skill status */
  status?: string
  /** Skill description */
  description?: string
  /** External reference link */
  externalLink?: string
  /** Wikipedia page identifier */
  wikipediaPageId?: string
  /** Freebase machine identifier */
  freebaseMachineId?: string
  /** Migration target skill identifier */
  migrateTo?: string
  /** Creation timestamp */
  ctime?: string
  /** Modification timestamp */
  mtime?: string
  /** Display rank */
  rank?: string
  /** Ontology skill mapping */
  ontologySkill?: Skill
  /** Parent ontology skill if applicable */
  parentOntologySkill?: Skill
}

/** Portfolio project showcasing freelancer work */
export interface TalentProfileProject {
  /** Project identifier */
  id: string
  /** Project title */
  title?: string
  /** Project description */
  description?: string
  /** Link to related contract if applicable */
  projectContractLink?: TalentProjectContractLink
  /** URL to project thumbnail image */
  thumbnail?: string
  /** URL to original thumbnail image */
  thumbnailOriginal?: string
  /** External URL to the project */
  projectUrl?: string
  /** When the project was completed */
  completionDateTime?: string
  /** Whether project is publicly visible */
  public?: boolean
  /** Display order rank */
  rank?: number
  /** Project attachments */
  attachments?: Array<TalentProfileProjectAttachment>
  /** Skills used in the project */
  skills?: Array<string>
  /** When project was created */
  creationDateTime?: string
  /** Category identifier */
  categoryId?: string
  /** URL to project video */
  videoUrl?: string
  /** Occupation identifier */
  occupationId?: string
  /** Type of project */
  projectType?: FreelancerProfileProjectType
  /** Role in the project */
  role?: string
  /** Goal of the project */
  projectGoal?: string
  /** Solution provided */
  solution?: string
  /** Primary image identifier */
  primaryImageId?: string
  /** Tags associated with the project */
  tags?: Array<TalentProfileProjectTag>
  /** When project was last modified */
  modificationDateTime?: string
  /** Developer identifier */
  developerId?: string
  /** Thumbnail image identifier */
  thumbnailId?: string
  /** Original thumbnail image identifier */
  thumbnailOriginalId?: string
  /** Category name */
  category?: string
  /** Subcategory name */
  subCategory?: string
}

/** File or media attachment for a portfolio project */
export interface TalentProfileProjectAttachment {
  /** Attachment identifier */
  id?: string
  /** Attachment type (image, video, document) */
  type?: string
  /** Attachment title */
  title?: string
  /** Original filename */
  attachmentName?: string
  /** File size in bytes */
  attachmentSize?: number
  /** URL to original attachment */
  originalAttachment?: string
  /** URL to small image version */
  imageSmall?: string
  /** URL to medium image version */
  imageMiddle?: string
  /** URL to large image version */
  imageLarge?: string
  /** Display order rank */
  rank?: number
  /** When attachment was created */
  creationDateTime?: string
  /** Attachment description */
  description?: string
  /** Video URL if applicable */
  videoUrl?: string
  /** URL to fixed-width image version */
  imageFixedWidth?: string
  /** Attachment group */
  group?: string
}

/** Skill or tag associated with a portfolio project */
export interface TalentProfileProjectTag {
  /** Tag identifier */
  id?: string
  /** Skill associated with the tag */
  skill?: Skill
  /** Parent skill if applicable */
  parentSkill?: Skill
}

/** Profile settings and account status information */
export interface TalentProfileSettings {
  /** Whether user is a service provider use idbc or legacySignalsDS */
  provider?: boolean
  /** Whether account is suspended use idbc or legacySignalsDS */
  suspended?: boolean
  /** Whether account is disabled */
  disabled?: boolean
  /** Current profile status */
  status?: string
  /** Last update timestamp */
  updatedDateTime?: string
}

/** Portfolio project for a specialized profile */
export interface TalentProfileSpecializedProject {
  /** Project identifier */
  id: string
  /** Project title */
  title?: string
  /** Project description */
  description?: string
  /** Link to related contract if applicable */
  projectContractLink?: TalentProjectContractLink
  /** URL to project thumbnail image */
  thumbnail?: string
  /** URL to original thumbnail image */
  thumbnailOriginal?: string
  /** External URL to the project */
  projectUrl?: string
  /** When the project was completed */
  completionDateTime?: string
  /** Whether project is publicly visible */
  public?: boolean
  /** Display order rank */
  rank?: number
  /** Project attachments */
  attachments?: Array<TalentProfileProjectAttachment>
  /** When project was created */
  creationDateTime?: string
  /** Category identifier */
  categoryId?: string
  /** URL to project video */
  videoUrl?: string
  /** Occupation identifier */
  occupationId?: string
  /** Type of project */
  projectType?: FreelancerProfileProjectType
  /** Role in the project */
  role?: string
  /** Goal of the project */
  projectGoal?: string
  /** Solution provided */
  solution?: string
  /** Primary image identifier */
  primaryImageId?: string
  /** When project was last modified */
  modificationDateTime?: string
  /** Thumbnail image identifier */
  thumbnailId?: string
  /** Original thumbnail image identifier */
  thumbnailOriginalId?: string
  /** Category name */
  category?: string
  /** Subcategory name */
  subCategory?: string
}

/** Publication status of a talent profile */
export interface TalentProfileStatus {}

/** User preferences for profile visibility and privacy settings */
export interface TalentProfileUserPreferences {
  /** Profile visibility level (public, auth, private) */
  visibilityLevel?: FreelancerProfileVisibility
  /** Whether to hide agency earnings from profile */
  hideAgencyEarnings?: boolean
  /** Whether to hide all earnings from profile */
  hideEarnings?: boolean
  /** Whether to expose full name on profile */
  exposeFullName?: boolean
  /** Whether client feedback is optional */
  clientFeedbackOptional?: boolean
  /** Flag of whether the freelancer is open to contract to hire */
  contractToHire?: boolean
}

/** Link between a portfolio project and an Upwork contract */
export interface TalentProjectContractLink {
  /** Link identifier */
  id?: string
  /** When link was created */
  creationDateTime?: string
  /** Current state of the link */
  state?: string
  /** When client was notified about the link */
  notificationDateTime?: string
  /** Client identifier */
  clientId?: string
}

/** List of portfolio projects for a freelancer */
export interface TalentProjectList {
  /** Array of profile projects */
  projects?: Array<TalentProfileProject>
  /** Total number of projects */
  totalProjects?: number
  /** Last update timestamp */
  updatedDateTime?: string
}

/** Purchased invitation badge details for premium visibility */
export interface TalentPurchasedInvitationBadge {
  /** Whether badge is currently active */
  active?: boolean
  /** Maximum price for jobs to display badge */
  maxPrice?: number
  /** Next renewal date for the badge */
  nextRenewalAt?: string
}

/** Skill edge with ontology mapping */
export interface TalentSkillNodeEdge {
  /** Skill details */
  skill?: Skill
}

/** Specialized profile for a specific service or occupation */
export interface TalentSpecializedProfile {
  /** Person identifier */
  personId?: string
  /** Profile identifier */
  profileId?: string
  /** Occupation identifier */
  occupationId?: string
  /** Profile status (draft or published) */
  status?: TalentProfileStatus
  /** Display rank */
  rank?: number
  /** List of occupations */
  occupations?: Array<string>
  /** Whether this is the primary profile */
  primary?: boolean
  /** Profile title */
  title?: string
  /** Profile description */
  description?: string
  /** Hourly rate for this profile */
  hourlyRate?: Money
  /** Web link to profile */
  weblink?: string
}

/** Skills for a specialized profile */
export interface TalentSpecializedProfileSkill {
  /** List of skills for this specialized profile */
  skills?: Array<TalentSpecializedProfileSkillNode>
}

/** Skill node with ontology mapping for specialized profiles */
export interface TalentSpecializedProfileSkillNode {
  /** Ontology skill reference */
  ontologySkill?: TalentSkillNodeEdge
  /** Parent ontology skill if applicable */
  parentOntologySkill?: TalentSkillNodeEdge
}

/** Project associated with a specialized profile */
export interface TalentSpecializedProfilesProject {
  /** Person identifier */
  personId?: string
  /** Profile identifier */
  profileId?: string
  /** Project details */
  project?: TalentProfileSpecializedProject
}

/** Extended job details from Vega */
export interface TalentVegaJobDetails {
  /** Job opening details */
  opening?: TalentVegaJobOpening
}

/** Job opening details from Vega system */
export interface TalentVegaJobOpening {
  /** Job description text */
  jobDescription?: string
}

/** Access visibility type for work history */
export interface TalentWorkAccessType {}

/** Feedback details including comment, score, and visibility */
export interface TalentWorkFeedback {
  /** Feedback comment text */
  comment?: string
  /** Response to feedback */
  response?: string
  /** Overall feedback score */
  score?: number
  /** Detailed scores by category */
  scores?: Array<TalentFeedbackScore>
  /** Whether feedback is suppressed */
  feedbackSuppressed?: boolean
  /** Whether feedback is public */
  isPublic?: boolean
  /** Whether comment is public */
  commentPublic?: boolean
  /** Feedback point value */
  point?: string
}

/** Work history entry including contract, feedback, and job details */
export interface TalentWorkHistory {
  /** Contract details */
  contract?: TalentContract
  /** Aggregated contract statistics */
  contractAggregate?: TalentContractAggregate
  /** Feedback for this contract */
  feedback?: TalentContractFeedback
  /** Job opening details */
  opening?: TalentOpening
}

/** Connection type for paginated work history results */
export interface TalentWorkHistoryConnection {
  /** List of work history items */
  workHistoryList?: Array<TalentWorkHistory>
  /** Total number of work history items */
  totalCount?: number
}

/** Filter criteria for talent work history queries */
export interface TalentWorkHistoryFilterInput {
  /** Person identifier (required) */
  personId: string
  /** Filter by specific contract identifiers */
  contractIds?: Array<string>
  /** Exclude contracts without feedback */
  excludeNoFeedback?: boolean
  /** Filter by visibility type */
  visibility?: TalentWorkAccessType
  /** Filter by contract status */
  status?: Array<TalentContractStatus>
  /** Sort configuration */
  sort?: TalentWorkHistorySort
  /** Pagination options */
  pagination?: TalentWorkHistoryPagination
}

/** Pagination options for work history */
export interface TalentWorkHistoryPagination {
  /** Number of items to skip */
  offset: number
  /** Maximum number of items to return */
  limit: number
}

/** Sort configuration for work history */
export interface TalentWorkHistorySort {
  /** Sort type */
  type: TalentWorkHistorySortType
  /** Sort order (ascending or descending) */
  order: SortOrder
}

/** Sort types for work history */
export interface TalentWorkHistorySortType {}

/** Detailed time report for work performed on a contract */
export interface TimeReport {
  /** Date of the time report */
  dateWorkedOn: string
  /** Week of the time report */
  weekWorkedOn: string
  /** Month of the time report */
  monthWorkedOn: string
  /** Year of the time report */
  yearWorkedOn: string
  /** User associated with the time report */
  freelancer?: GenericUser
  /** Team associated with the time report */
  team?: GenericOrganization
  /** Contract-Offer associated with the time report Use contract */
  contractOffer?: ContractOfferResult
  contract?: ContractDetails
  /** The active termId of the contract */
  termId?: string
  /** Task associated with the time report */
  task?: string
  /** Task description associated with the time report */
  taskDescription?: string
  /** Memo associated with the time report */
  memo?: string
  /** Total hours worked for the time report */
  totalHoursWorked?: number
  /** Total charges made for the time report */
  totalCharges?: number
  /** Total online hours worked for the time report */
  totalOnlineHoursWorked?: number
  /** Total charges made for online work for the time report */
  totalOnlineCharge?: number
  /** Total offline hours worked for the time report */
  totalOfflineHoursWorked?: number
  /** Total charges made for offline work for the time report */
  totalOfflineCharge?: number
  /** Bill rate associated with the time report */
  billRate?: BillRate
}

/** Connection type for paginated time report results */
export interface TimeReportConnection {
  /** Total number of time reports matching the query */
  totalCount?: number
  /** List of time report edges with pagination cursors */
  edges: Array<TimeReportEdge>
  /** Pagination information for navigating results */
  pageInfo?: PageInfo
}

/** Edge type containing a time report node and cursor for pagination */
export interface TimeReportEdge {
  /** Time report data */
  node: TimeReport
  /** Cursor for pagination */
  cursor: string
}

/** Input filter used to query time reports based on organization, date range, and optional contract IDs. */
export interface TimeReportFilter {
  /** Only time reports belonging to this organization will be included. */
  organizationId_eq: string
  /** A date range to filter time reports by their date. */
  timeReportDate_bt: DateTimeRange
  /** Optional list of contract IDs to filter the time reports. If provided, only reports associated with these contracts will be included. */
  contractIds?: Array<string>
}

/** Timezone record information */
export interface TimeZoneRecord {
  /** Timezone name */
  timeZoneName: string
  /** Timezone description */
  timeZoneDescription?: string
}

/** Input for rule structure - polymorphic type representing either a leaf node or group node Type field determines which fields are used */
export interface TnsRuleStructureInput {
  /** Type of node: 'rule' for leaf or 'group' for group node */
  type: string
  /** For leaf nodes: attribute type code (1-9) */
  attributeType?: number
  /** For leaf nodes: rule operator code (1=CONTAINS, 2=EQUALS, 3=STARTS_WITH, 4=ENDS_WITH, 5=MATCHES_REGEX, 6=NOT_CONTAINS, 7=NOT_EQUALS) */
  ruleOperator?: number
  /** For leaf nodes: value to compare against */
  value?: string
  /** For group nodes: merging operator code (1=AND, 2=OR) */
  mergingOperator?: number
  /** For group nodes: child rules */
  children: Array<TnsRuleStructureInput>
}

/** Transaction history containing transaction details and metadata */
export interface TransactionHistory {
  /** Group of non-pending transactions with totals */
  transactionDetail?: TransactionHistoryDetail
}

/** Transaction history detail with totals and transaction rows */
export interface TransactionHistoryDetail {
  /** List of transaction rows */
  transactionHistoryRow: Array<TransactionHistoryRow>
}

/** Filter for transaction history queries */
export interface TransactionHistoryFilter {
  /** BPA private data filter */
  bpaPrivateData?: BPAPrivateDataFilter
  /** List of accounting entity identifiers whose transactions have to be collected */
  aceIds_any: Array<string>
  /** Minimal and maximum date of selected transactions (date should be in yyyy-mm-dd format) */
  transactionDateTime_bt: DateTimeRange
  agencyCompanyIds_any: Array<string>
  /** Filter transactions related to one of these agencies (using UID) */
  agencyCompanyUids_any: Array<string>
  /** Filter transactions related to one of these developers */
  developerIds_any: Array<string>
  /** Filter transactions related to one of listed subtypes */
  trxSubtypes_any: Array<string>
}

/** Individual transaction row with details */
export interface TransactionHistoryRow {
  /** Row number in the transaction list */
  rowNumber?: number
  /** Running chargeable balance after this transaction */
  runningChargeableBalance?: Money
  /** Transaction record identifier */
  recordId?: string
  /** Remaining amount to be paid */
  remainder?: string
  /** Amount credited to the user */
  amountCreditedToUser?: Money
  /** Date when transaction review is due */
  transactionReviewDueDate?: string
  /** Date when transaction was created */
  transactionCreationDate?: string
  /** Related payment method identifier */
  relatedUserPaymentMethod?: number
  /** Accounting subtype of the transaction */
  accountingSubtype?: string
  /** UI-friendly description of the transaction */
  descriptionUI?: string
  /** Related assignment identifier */
  relatedAssignment?: number
  /** Amount sent in original currency */
  amountSentInOrigCurrency?: Money
  /** Whether payment is guaranteed */
  paymentGuaranteed?: boolean
  /** Fixed price EAR mark identifier */
  fixedPriceEARMark?: number
  /** Related transaction identifier */
  relatedTransactionId?: string
  /** Related invoice identifier */
  relatedInvoiceId?: string
  /** Date when transaction was fully paid */
  fullyPaidDate?: string
  /** Transaction type */
  type?: string
  /** Transaction amount */
  transactionAmount?: Money
  /** Related accounting entity identifier */
  relatedAccountingEntity?: number
  /** Transaction description */
  description?: string
  /** Purchase order number */
  purchaseOrderNumber?: string
  /** Agency name for the assignment */
  assignmentAgencyName?: string
  /** Company name for the assignment */
  assignmentCompanyName?: string
  /** Developer name for the assignment */
  assignmentDeveloperName?: string
  /** Assignment team company identifier */
  assignmentTeamCompanyId?: string
  /** Assignment team company reference number */
  assignmentTeamCompanyReference?: number
  /** Assignment team identifier */
  assignmentTeamId?: string
  /** Assignment team reference number */
  assignmentTeamReference?: number
  /** Assignment team user identifier */
  assignmentTeamUserId?: string
  /** Assignment team user reference number */
  assignmentTeamUserReference?: number
  /** Payment amount */
  payment?: Money
  /** Payment status */
  paymentStatus?: string
  /** Transaction prefix */
  prefix?: string
}

/** Update client proposal result */
export interface UpdateClientProposalResult {
  /** Updated client proposal */
  proposal?: ClientProposal
  /** Operation status */
  status: ProposalUpdateResultStatus
}

/** Update employment record input */
export interface UpdateEmploymentRecordInput {
  /** Employment record identifier */
  id: string
  /** User identifier */
  userId?: string
  /** Company name */
  companyName?: string
  /** Job title */
  jobTitle?: string
  /** Standardized company identifier */
  standardizedCompanyId?: string
  /** Standardized job title identifier */
  standardizedJobTitleId?: string
  /** Role in the company */
  role: string
  /** start date - e.g: "1999-01-01" */
  startDate?: string
  /** end date - e.g: "2002-01-01" */
  endDate?: string
  /** Role description */
  description?: string
  /** City name */
  city?: string
  /** Country name */
  country?: string
}

/** Update hourly limit request */
export interface UpdateHourlyLimitRequestInput {
  /** Notification configurations */
  notifications?: NotificationsInput
  /** Weekly hourly limit */
  weeklyLimit?: string
}

/** Input for updating an existing organization */
export interface UpdateOrganizationInput {
  /** Organization identifier */
  id?: string
  /** Parent organization identifier */
  parentOrganizationId?: string
  /** Updated organization name */
  organizationName: string
  /** Whether the organization is hidden */
  hidden?: boolean
  /** Updated address information */
  address?: OrganizationLocationInput
  /** VAT/tax identifier */
  vatId?: string
}

/** Update other experience input */
export interface UpdateOtherExperienceInput {
  /** Experience identifier */
  id: string
  /** User identifier */
  userId?: string
  /** Updated subject */
  subject?: string
  /** Updated description */
  description?: string
  /** Updated active flag */
  active?: boolean
}

/** Response for room story update operations */
export interface UpdateRoomStoryResponse {
  /** Status of the update operation */
  status: string
}

/** Defines activity object that is going to be updated */
export interface UpdateTeamActivityRequest {
  /** An activity tracking code (this defines the activity tracking code) */
  code: string
  /** The description of the code being added */
  description?: string
  /** The location where more info on the code can be found (the URL can be used to direct the user to more info about the code being entered) */
  url?: string
  /** List of associated contracts */
  contractIds: Array<string>
  /** Budget for the activity */
  budget?: number
  /** The assignment level of the activity */
  batchAssignment?: BatchAssignmentOptions
  /** Activity status (active or archived) */
  status?: string
}

/** Input for updating workflow task details */
export interface UpdateWorkflowTaskDetailsInput {
  /** New status for the task */
  status?: WorkflowTaskStatus
  /** Labels to add or remove from the task */
  labels: Array<WorkflowTaskPatchLabelInput>
}

/** Result of updating a workflow task */
export interface UpdateWorkflowTaskResult {
  /** Workflow identifier */
  workflowId?: string
  /** Updated task view details */
  updatedTaskView?: WorkflowTaskView
}

/** Base user interface */
export interface User {
  /** Unique user identifier
                          Example: 1181921839933591552 */
  id: string
  /** Nickname ID of a user. Please, only use if really needed. Unique ID should be used when possible.
                          Example: foofreelancer */
  nid: string
  /** Record ID of a user. Please, only use if really needed. Unique ID should be used when possible.
                          Example: 2366358 */
  rid: string
}

/** Search record for user freelancer profiles */
export interface UserFreelancerProfilesSearchRecord {
  /** Short name of the freelancer */
  shortName?: string
  /** Freelancer's ciphertext */
  ciphertext?: string
  /** Freelancer user details */
  user?: GenericUser
  /** Freelancer profile details */
  userProfile?: FreelancerProfile
}

/** Edge in users-by-email response */
export interface UserIdsByEmailRecordEdge {
  /** Cursor for pagination */
  cursor?: string
  /** Record node */
  node?: UserIdsByEmailRecordNode
}

/** Node with user identifiers by email */
export interface UserIdsByEmailRecordNode {
  /** User identifier */
  id?: string
  /** User email */
  email?: string
  /** Visibility level of the profile */
  visibilityLevel?: FreelancerProfileVisibility
  /** Profile title */
  title?: string
  /** Linked user */
  user?: GenericUser
}

/** Result of user lookup by email */
export interface UserIdsByEmailResponse {
  /** Total number of records */
  totalCount?: number
  /** Connection edges */
  edges: Array<UserIdsByEmailRecordEdge>
}

/** Location of the user */
export interface UserLocation {
  /** Country name */
  countryName?: string
  /** City name */
  cityName?: string
  /** Postal or ZIP code */
  zip?: string
  /** Timezone identifier */
  timezone: string
  /** Human-readable timezone name */
  timezoneName?: string
  /** Street address */
  street?: string
  /** State or province code */
  stateCode?: string
  /** Offset from UTC in minutes */
  offsetToUTC?: number
}

/** Access evaluation outcome for user permission checks */
export interface UserPermissionAccess {}

/** Edge in user permissions */
export interface UserPermissionEdge {
  /** Permission node */
  node?: UserPermissionNode
}

/** Filter to load specific user's permissions */
export interface UserPermissionFilterV2 {
  /** Type of the resource: CONTRACT, OFFER, etc. */
  resourceType_eq: ResourceType
  /** The maximum number of results to return. The actual number of results returned may be less than the limit for intermediate pages. */
  limit?: number
  /** First request must have this as null. Subsequent requests must use the offset returned by the previous request. */
  offset?: string
  /** perform external checks. Default = false */
  performExternalChecks_eq?: boolean
  /** the teamOrgIds in which the permissions for the resourceType and action are needed */
  teamOrgIds_any: Array<string>
  /** return all teams if teamOrgIds is not specified, else only parent organization is returned. Default = false */
  returnAllTeams?: boolean
  /** return first granted result. Default = false */
  returnFirstGrantedResult_eq?: boolean
}

/** User permission node details */
export interface UserPermissionNode {
  /** top level organization in which the current user is logged in */
  organization?: CurrentOrganization
  /** team or child organization in which permissions are listed. NULL indicates the permissions are applicable to the root organization */
  team?: GenericOrganization
  /** Action being evaluated */
  action: string
  /** Access decision */
  access: UserPermissionAccess
  /** Reason for restriction (if any) */
  reason?: AccessRestictionReason
}

/** Container of user permissions */
export interface UserPermissions {
  /** Permission edges */
  edges?: Array<UserPermissionEdge>
  /** Paging offset for next page */
  offset?: string
}

/** User's preferred location type for i18n settings */
export interface UserPreferredLocationType {}

/** VEM skill weight */
export interface VemSkill {
  /** Skill name or identifier */
  skill?: string
  /** Boost weight for the skill */
  weight?: number
}

/** Filter to search vendor contracts by date and status */
export interface VendorContractSearchFilter {
  /** Vendor identifier (required) */
  vendorId: string
  /** Contracts starting before this date (ISO format yyyy-MM-ddThh:mm+HHmm or yyyy-MM-dd) */
  startDateBefore?: string
  /** Contracts ending after this date (ISO format yyyy-MM-ddThh:mm+HHmm or yyyy-MM-dd) */
  endDateAfter?: string
  /** Filter by contract statuses */
  contractStatuses?: Array<ContractStatus>
}

/** Vendor proposal submitted by a freelancer */
export interface VendorProposal {
  /** Vendor proposal identifier */
  id: string
  /** Vendor who will be physically working on the job if accepted */
  user: GenericUser
  /** Organization to which the vendor belongs */
  organization: GenericOrganization
  /** Job for which vendor is applying */
  marketplaceJobPosting: MarketplaceJobPosting
  /** Terms on which freelancer applied */
  terms: ProposalTerms
  /** Cover letter to accompany the proposal use proposalCoverLetter */
  coverLetter?: string
  /** Cover letter to accompany the proposal */
  proposalCoverLetter?: string
  /** Project plan consisting of milestones defined by vendor */
  projectPlan?: ProposalProjectPlan
  /** Information used to audit changes in proposals */
  auditDetails: ProposalAuditDetails
  /** Status of the vendor proposal */
  status: VendorProposalStatus
  /** Annotations of the vendor proposal */
  annotations: Array<VendorProposalAnnotation>
}

/** Annotation tags for vendor proposals */
export interface VendorProposalAnnotation {}

/** vendor proposal related filters */
export interface VendorProposalFilter {
  /** Filter by proposal status */
  status_eq: VendorProposalStatusFilterInput
  /** Filter by proposal annotation */
  annotations_eq?: VendorProposalAnnotation
  /** Filter by freelancer ID */
  freelancerId_eq?: string
  /** Filter by organization ID */
  organizationId_eq?: string
  /** Filter by job posting IDs */
  jobPostingIds_any: Array<string>
}

/** Connection to the vendor proposal list */
export interface VendorProposalsConnection {
  /** Total number of proposals matching filters */
  totalCount?: number
  /** Edges containing vendor proposals and cursors */
  edges?: Array<VendorProposalsEdge>
  /** Contains information about pagination, such as whether there are more results to fetch. */
  pageInfo?: PageInfo
}

/** Edge in vendor proposals connection */
export interface VendorProposalsEdge {
  /** Cursor for pagination */
  cursor?: string
  /** Vendor proposal node */
  node?: VendorProposal
}

/** Sorting configuration for vendor proposals */
export interface VendorProposalSortAttribute {
  /** Attribute to sort vendor proposals by */
  field: VendorProposalSortAttributeType
  /** Sorting order */
  sortOrder: SortOrder
}

/** Sortable attributes for vendor proposals */
export interface VendorProposalSortAttributeType {}

/** Status of a vendor proposal */
export interface VendorProposalStatus {
  /** Status name of the proposal */
  status: VendorProposalStatusName
  /** Reason for the proposal status */
  reason?: ProposalReason
}

/** Possible Status filter input for Vendor Proposal Query */
export interface VendorProposalStatusFilterInput {}

/** vendor proposal status name */
export interface VendorProposalStatusName {}

/** User info associated with the offer */
export interface VendorUserInput {
  /** Vendor user identifier */
  userId: string
  /** for agency offers, must be set to the agency team the offer belongs to; for individual freelancers must be set to freelancer's sole proprietor organization */
  teamId: string
}

/** Anonymous visitor data and segmentation information */
export interface Visitor {
  /** Internationalization settings for a visitor based on country */
  i18n?: VisitorI18N
  countryName: string
  /** Query to look up visitor segment data based on visitorId and the respective segment name */
  segment?: VisitorSegment
  visitorId: string
}

/** Visitor internationalization settings including location and feature flags */
export interface VisitorI18N {
  /** Whether the visitor's country is supported */
  countrySupported?: boolean
  /** Current i18n status */
  status?: string
  /** Type of location view to display */
  locationViewType?: string
  /** User's preferred location type setting */
  userPreferredLocationType?: string
  /** Feature flags for i18n settings */
  settingsFlags?: VisitorI18NSettings
}

/** Feature flags controlling i18n-related UI elements */
export interface VisitorI18NSettings {
  /** Show domestic location filter on freelancer search */
  showDomesticLocationFilterOnFLSearch?: boolean
  /** Show job search functionality */
  showJobSearch?: boolean
  /** Show phone verification prompt */
  showPhoneVerification?: boolean
  /** Show SMF to update address */
  showSmfToUpdateAddress?: boolean
  /** Show personal address autocomplete */
  showPersonalAddressAutocomplete?: boolean
  /** Show message container */
  showMessageContainer?: boolean
  /** Show location preference on job post */
  showLocationPreferenceOnJobPost?: boolean
  /** Whether domestic location is enabled by default */
  defaultDomesticEnabled?: boolean
  /** Whether job search is defaulted to ON */
  jobSearchDefaultedToON?: boolean
  /** Show location verification on freelancer work history */
  showLocationVerificationOnFWH?: boolean
  /** Whether domestic is enabled for freelancers on FL search */
  domesticEnabledForFreelancersOnFLSearch?: boolean
}

/** Visitor segmentation data for behavioral or demographic categorization */
export interface VisitorSegment {
  /** Unique visitor identifier */
  visitorId: string
  /** Name of the segment */
  segmentName?: string
  /** Segment data payload */
  data?: string
}

/** Input for withdrawing an offer */
export interface WithdrawOfferInput {
  /** Offer identifier */
  offerId: string
  /** Message to vendor */
  message?: string
  /** Withdrawal reason */
  withdrawalReason?: WithdrawReason
}

/** Reasons for withdrawing an offer */
export interface WithdrawReason {}

/** Represents a single work day with associated work diary data */
export interface WorkDay {
  /** Work diary entries for this day */
  workDiary?: WorkDiary
  /** Date of the work day */
  date: string
}

/** Result containing workday information */
export interface WorkdayResult {
  /** List of working days or calendar days that are highlighted in the date picker */
  workDays?: Array<string>
}

/** Input for querying workdays across multiple contracts */
export interface WorkdaysInput {
  /** List of contract identifiers */
  contractIds: Array<string>
  /** Date/time range to query */
  timeRange: DateTimeRange
  /** Timezone offset in seconds */
  offsetInSeconds?: number
}

/** Work diary containing time tracking cells for a work day */
export interface WorkDiary {
  /** List of time tracking cells */
  cells: Array<Cell>
}

/** Work diary data for a company including snapshots and metadata */
export interface WorkDiaryCompany {
  /** Total number of snapshots */
  total?: number
  /** List of work diary snapshots */
  snapshots?: Array<WorkDiaryCompanySnapshot>
}

/** Contract information in work diary context */
export interface WorkDiaryCompanyContract {
  /** Contract identifier */
  id?: string
  /** User identifier associated with contract */
  userId?: string
  /** Contract title */
  contractTitle?: string
}

/** Input for querying work diary by company */
export interface WorkDiaryCompanyInput {
  /** Company identifier */
  companyId: string
  /** Date to query (format: yyyymmdd) */
  date: string
  /** Paging token */
  paging?: string
  /** Sort field */
  sortBy?: string
  /** Activity filter */
  activity?: string
  /** Freelancer filter */
  freelancer?: string
}

/** Complete snapshot of work diary data including time, task, and screenshots */
export interface WorkDiaryCompanySnapshot {
  /** Associated contract */
  contract?: WorkDiaryCompanyContract
  /** User who performed the work */
  user?: WorkDiaryCompanyUser
  /** Duration of work as string */
  duration?: string
  /** Duration as integer (seconds) */
  durationInt?: number
  /** Task being worked on */
  task?: WorkDiaryCompanySnapshotTask
  /** Time tracking details */
  time?: WorkDiaryCompanyTime
  /** Screenshot and webcam images */
  screenshots?: Array<WorkDiaryCompanySnapshotScreenshot>
}

/** Screenshot and webcam data for a work diary snapshot */
export interface WorkDiaryCompanySnapshotScreenshot {
  /** Activity level percentage */
  activity?: number
  /** URL to screenshot */
  screenshotUrl?: string
  /** Path to screenshot image */
  screenshotImage?: string
  /** Path to large screenshot image */
  screenshotImageLarge?: string
  /** Path to medium screenshot image */
  screenshotImageMedium?: string
  /** Path to screenshot thumbnail */
  screenshotImageThumbnail?: string
  /** Whether snapshot has a screenshot */
  hasScreenshot?: boolean
  /** Whether snapshot has webcam image */
  hasWebcam?: boolean
  /** URL to webcam image */
  webcamUrl?: string
  /** Path to webcam image */
  webcamImage?: string
  /** Path to webcam thumbnail */
  webcamImageThumbnail?: string
  /** Screenshot display flags */
  flags?: WorkDiaryCompanySnapshotScreenshotFlag
}

/** Flags controlling screenshot display behavior */
export interface WorkDiaryCompanySnapshotScreenshotFlag {
  /** Whether to hide the screenshot */
  hideScreenshot?: boolean
  /** Whether to downsample screenshots for display */
  downSampleScreenshots?: boolean
}

/** Task information associated with a work diary snapshot */
export interface WorkDiaryCompanySnapshotTask {
  /** Task identifier */
  id?: string
  /** Task code */
  code?: string
  /** Task description */
  description?: string
  /** Task memo or note */
  memo?: string
}

/** Time tracking information for a work diary entry */
export interface WorkDiaryCompanyTime {
  /** Time tracked by the system */
  trackedTime?: string
  /** Manually entered time */
  manualTime?: string
  /** Overtime hours */
  overtime?: string
  /** Timestamp when first work occurred */
  firstWorked?: string
  /** Timestamp when last work occurred */
  lastWorked?: string
  /** First worked time as integer (epoch) */
  firstWorkedInt?: number
  /** Last worked time as integer (epoch) */
  lastWorkedInt?: number
  /** Timestamp of last screenshot */
  lastScreenshot?: string
}

/** User information in work diary context */
export interface WorkDiaryCompanyUser {
  /** User identifier */
  id?: string
  /** User's display name */
  name?: string
  /** URL to user's portrait image */
  portraitUrl?: string
}

/** Work diary data for a specific contract and date */
export interface WorkDiaryContract {
  /** Metadata about the work diary */
  workDiaryMetadata?: WorkDiaryMetadata
  /** List of timecells with tracking data */
  workDiaryTimeCells: Array<WorkDiaryTimeCell>
}

/** Input for querying work diary by contract */
export interface WorkDiaryContractInput {
  /** Contract identifier */
  contractId: string
  /** Date to query (format: yyyymmdd) */
  date: string
  /** Timezone offset in seconds */
  offsetInSeconds?: number
  /** Use legacy flag for additional user field support. It determines the data source for this query. When set to true, the query will be fulfilled using a legacy endpoint additionally the "user" field becomes available. If "useLegacyEndpoint" is false, the "user" field is not accessible in the query. */
  useLegacy?: boolean
}

/** Metadata for work diary including timezone and user information */
export interface WorkDiaryMetadata {
  /** Timezone offset for displaying times */
  timezoneOffset: string
  /** When work diary data will be archived */
  archivingDateTime: string
}

/** Task associated with work diary timecell */
export interface WorkDiaryTask {
  /** Identifier of the associated task (e.g., Jira task) */
  id: string
  /** Description of the task */
  description?: string
}

/** 10-minute billable time period with activity tracking and screenshots */
export interface WorkDiaryTimeCell {
  /** Timestamp that denotes the beginning of timecell */
  cellDateTime?: string
  /** Timestamp at which the snapshot has been taken during the timecell */
  snapshotDateTime?: string
  /** Should this timelog entry be considered overtime (available only if "useLegacyEndpoint" is not set to true) */
  overtime?: boolean
  /** True if the contractor has entered manual time for this timecell */
  manual?: boolean
  /** Activity level that is a measure (derived from) keyboard events and mouse events during this timecell */
  activityLevel?: number
  /** Memo of the work done during this timecell */
  memo?: string
  /** Task (e.g., Jira Task) associated with this timecell */
  task?: WorkDiaryTask
  /** Number of mouse events during this timecell */
  mouseEventsCount?: number
  /** Number of keyboard events during this timecell */
  keyboardEventsCount?: number
  /** Title of the window which was active during the screen capture */
  activeWindowTitle?: string
  /** Should this screenshot be hidden */
  hideScreenshots?: boolean
  /** Is there a screenshot associated with this timecell */
  hasScreenshot?: boolean
  /** Image URL of the screenshot associated with this timecell */
  screenshotImageUrl?: string
  /** Image URL (medium size) of the screenshot associated with this timecell */
  screenshotImageUrlMedium?: string
  /** Thumbnail of the screenshot associated with this timecell */
  screenshotImageThumbnail?: string
  /** Was there a webcam associated with this timecell */
  webcamEnabled?: boolean
  /** Webcam image associated with this timecell */
  webcamImageUrl?: string
  /** Thumbnail URL of the webcam image associated with this timecell */
  webcamImageThumbnail?: string
  /** Has the snapshot associated expired */
  snapshotExpired?: boolean
}

/** Association between a workflow and an external entity */
export interface WorkflowAssociationView {
  /** Type of the associated entity */
  entityType?: string
  /** Value or identifier of the associated entity */
  entityValue?: string
}

/** Workflow offer state */
export interface WorkflowOfferState {}

/** Status of workflow onboarding process */
export interface WorkflowOnboardingStatus {}

/** Workflow state status */
export interface WorkFlowStateStatus {}

/** Entity assigned to a workflow task */
export interface WorkflowTaskAssigneeView {
  /** Type of the assignee entity */
  entityType?: string
  /** Identifier of the assignee entity */
  entityId?: string
}

/** Comment added to a workflow task */
export interface WorkflowTaskComment {
  /** Comment identifier */
  id?: string
  /** Comment message text */
  message?: string
  /** Comment creation date and time */
  createdDateTime?: string
  /** User who created the comment */
  createdBy?: string
  /** Whether the comment is visible to the client */
  visibleToClient?: boolean
  /** Attachments associated with this comment */
  attachments?: Array<WorkflowTaskCommentAttachments>
}

/** File or document attached to a workflow task comment */
export interface WorkflowTaskCommentAttachments {
  /** Attachment identifier */
  id?: string
  /** Attachment name */
  name?: string
  /** Attachment type */
  type?: string
}

/** Custom key-value attribute for a workflow task */
export interface WorkflowTaskCustomAttribute {
  /** Attribute key */
  key?: string
  /** Attribute value */
  value?: string
}

/** Labels that can be applied to workflow tasks */
export interface WorkflowTaskLabel {}

/** Input for adding or removing a label from a workflow task */
export interface WorkflowTaskPatchLabelInput {
  /** Label to update */
  label?: WorkflowTaskLabel
  /** Whether to enable or disable the label */
  enabled?: boolean
}

/** Status of a workflow task */
export interface WorkflowTaskStatus {}

/** Detailed view of a single task within a workflow */
export interface WorkflowTaskView {
  /** Task identifier */
  id?: string
  /** Task type */
  type?: string
  /** Task title */
  title?: string
  /** Task description */
  description?: string
  /** Current status of the task */
  status: WorkflowTaskStatus
  /** User or entity assigned to this task */
  assignee?: WorkflowTaskAssigneeView
  /** Comments associated with this task */
  comments: Array<WorkflowTaskComment>
  /** Task creation date and time */
  createdDateTime?: string
  /** Task completion date and time */
  finishedDateTime?: string
  /** Task due date */
  dueDate?: string
  /** Task last modification date and time */
  modifiedDateTime?: string
  /** User who created the task */
  createdBy?: string
  /** User who last modified the task */
  modifiedBy?: string
  /** Labels applied to this task */
  labels: Array<WorkflowTaskLabel>
  /** Whether the task is active */
  active?: boolean
  /** Whether the task is not required */
  notRequired?: boolean
  /** Task dependencies */
  dependsOn?: string
  /** External task identifier */
  externalTaskId?: string
  /** Reasons for task delay */
  delayReasons?: string
  /** Custom attributes for this task */
  customAttributes: Array<WorkflowTaskCustomAttribute>
  /** Display order of the task */
  order?: number
  /** Whether the current user can edit this task */
  canEdit?: boolean
  /** Provides a possibility for the user to filter on UI it's own tasks . */
  owner?: boolean
}

/** Comprehensive view of a workflow instance with all its tasks and metadata */
export interface WorkflowView {
  /** Workflow identifier */
  id?: string
  /** Workflow type */
  type?: string
  /** Current onboarding status of the workflow */
  onboardedStatus?: WorkflowOnboardingStatus
  /** Total number of tasks in the workflow */
  totalTasks?: number
  /** Number of tasks not yet started */
  notStartedTasksCount?: number
  /** Number of tasks currently in progress */
  inProgressTasksCount?: number
  /** Number of completed tasks */
  completedTasksCount?: number
  /** Number of overdue tasks */
  tasksOverdue?: number
  /** Percentage of workflow completion */
  percentComplete?: number
  /** Workflow start date and time */
  startDateTime?: string
  /** Workflow completion date and time */
  completionDateTime?: string
  /** Associated entities for this workflow */
  associations: Array<WorkflowAssociationView>
  /** List of tasks in the workflow */
  tasks: Array<WorkflowTaskView>
  /** Workflow creation date and time */
  createdDateTime?: string
  /** Workflow last modification date and time */
  modifiedDateTime?: string
  /** User who created the workflow */
  createdBy?: string
  /** User who last modified the workflow */
  modifiedBy?: string
}
