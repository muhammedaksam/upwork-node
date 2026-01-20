/**
 * Auto-generated operation methods from Upwork GraphQL API
 * Generated on: 2026-01-20T11:50:37.004Z
 */

import { UpworkGraphQLClient } from "../lib/graphql-client"
import * as Types from "./generated-types"

// ========================================
// QUERY METHODS (75)
// ========================================

export const queries = {
  /**
   * jobPosting
   * @param variables - Operation variables
   * @param variables.jobPostingId - Job posting identifier
   * @param variables.loadAnnotation - Include annotations
   * @returns Types.JobPosting
   */
  jobPosting: async (
    client: UpworkGraphQLClient,
    variables: { jobPostingId: string; loadAnnotation?: boolean }
  ): Promise<Types.JobPosting> => {
    const queryString = `
      query JobPosting($jobPostingId: String!, $loadAnnotation: Boolean) {
        jobPosting(jobPostingId: $jobPostingId, loadAnnotation: $loadAnnotation) {
          id
          version
          info {
            status
            company {
              id
              rid
              legacyId
              name
              type
              legacyType
              flag {
                client
                vendor
                agency
                individual
              }
              active
              hidden
              userId
              company {
                id
                name
                description
                legacyType
                logoURL
                phone
                displayName
                teamsEnabled
                canHire
                hidden
                includeInStats
                companyName
                state
                city
                address
                zip
                timezone
                accountingEntity
                billingType
                summary
                paymentVerificationStatus
              }
              photoUrl
              creationDate
              staffs {
                totalCount
              }
              pagination {
                after
                first
              }
              userPermissions {
                offset
              }
              filter {
                userId
                resourceType_eq
                limit
                offset
                performExternalChecks_eq
                teamOrgIds_any
                returnAllTeams
              }
              agencyOffers {
                totalCount
              }
              offerByRootCompanyFilter {
                freelancerId_any
                agencyTeamOrgId_any
                clientOrgId_any
              }
              offerByClientFilter {
                teamId_any
                contactPersonId_any
                offerType_any
                milestoneState_any
                escrowRefundStatus_any
                freelancerId_any
                agreementKind_any
              }
              clientTimeReport {
                dateWorkedOn
                weekWorkedOn
                monthWorkedOn
                yearWorkedOn
                termId
                task
                taskDescription
                memo
                totalHoursWorked
                totalCharges
                totalOnlineHoursWorked
                totalOnlineCharge
                totalOfflineHoursWorked
                totalOfflineCharge
              }
              timeReportDate_bt {
                rangeStart
                rangeEnd
              }
              clientContractTimeReport {
                totalCount
              }
              privateTalentClouds {
                id
                name
                joinInstructions
                welcomeMessageToAddedFreelancers
                joinRequestAutoApproved
                messageAfterJoinRequest
                joinRejectionMessage
                externalName
                active
                description
                onboardingTaskEnabled
                onboardingTaskEnableUpdatedDateTime
                selectable
              }
              jobPosting {
                totalCount
              }
              jobPostingFilter {
                title_eq
                postByTeamIds_any
                postByPersonIds_any
                excludePostByPersonIds_any
                categoryGroupIds_any
                contractType_eq
                createdDateTimeFrom_eq
                createdDateTimeTo_eq
              }
            }
            auditTime {
              createdDateTime
              modifiedDateTime
            }
            hidden
            siteSource
            keepOpenOnHire
            draftJobPostingId
            publishDateTime
            filledDateTime
            sourcingUpdateForbidden
            sourcingUpdateCount
            premium
            legacyCiphertext
            hideBudget
            categoryId
            groupId
            notSureFreelancersToHire
            notSureExperienceLevel
            hourlyBudgetType
            hourlyBudgetMin {
              rawValue
              currency
              displayValue
            }
            changedByUser {
              id
              nid
              rid
              name
              firstName
              lastName
              photoUrl
              publicUrl
              email
              location {
                countryName
                cityName
                zip
                timezone
                timezoneName
                street
                stateCode
                offsetToUTC
              }
              freelancerProfile {
                id
                fullName
                firstName
                lastName
                email
              }
              ciphertext
              talentProfile {
                personId
              }
            }
            reasonId
            reasonName
          }
          visibility
          ownership {
            company {
              id
              rid
              legacyId
              name
              type
              legacyType
              active
              hidden
              photoUrl
              creationDate
            }
          }
          content {
            title
            description
          }
          attachment {
            id
            sequenceNumber
            fileName
            link
            afsFileLink
            contentLength
            contentType
            createdDateTime
          }
          classification {
            category {
              id
              name
              slug
            }
            subCategory {
              id
              name
              slug
            }
            skills {
              id
              ontologyId
              type
              entityStatus
              preferredLabel
              createdDateTime
              modifiedDateTime
              definition
              altLabel
              narrower
              narrowerIds
              broader
              broaderIds
              dependsOn
              dependsOnIds
              splitInto
              splitIntoIds
              mergedInto
              mergedIntoId
              replacedBy
              replacedById
              scopeNote
              externalLink
              exactMatch
              exactMatchIds
              closeMatch
              closeMatchIds
              comment
              attributeLevel
              allowMultipleClient
              allowMultipleFreelancer
              allowOther
              clientQuestion
              clientTip
              freelancerQuestion
              freelancerTip
              advancedClient
              client
              freelancer
              requiredClient
              requiredFreelancer
              otherClientLabel
              otherFreelancerLabel
              presentationMode
              priority
              isRequiredBy
              isRequiredByIds
              legacySkillNid
              prettyName
              legacySkillId
            }
            customSkills {
              parentSkillId
              freeText
            }
            occupationId
            customAdditionalSkills
          }
          segmentationData {
            segmentationValues {
              id
              label
              referenceName
              sortOrder
              segmentationType {
                id
                name
                referenceName
              }
            }
          }
          contractTerms {
            contractStartDate
            contractEndDate
            contractType
            onSiteType
            personsToHire
            experienceLevel
            fixedPriceContractTerms {
              engagementDuration {
                id
                label
                weeks
              }
            }
            hourlyContractTerms {
              engagementType
              notSureProjectDuration
              hourlyBudgetType
              hourlyBudgetMin
              hourlyBudgetMax
            }
          }
          contractorSelection {
            proposalRequirement {
              coverLetterRequired
              freelancerMilestonesAllowed
              screeningQuestions {
                id
                question
                questionType
              }
            }
            qualification {
              contractorType
              englishProficiency
              hasPortfolio
              risingTalent
              jobSuccessScore
              earnings
              preferredGroups {
                id
                name
                logo
              }
              preferredTests {
                id
                name
              }
            }
            location {
              countries
              states
              timezones
              localCheckRequired
              localMarket
              areas {
                id
                areaType
                name
              }
              notSureLocationPreference
              localDescription
              localFlexibilityDescription
              address
            }
          }
          additionalInfo {
            clientNumberOfHiresOnCreate
            directHire
            invitePost
            lastBuyerActivity
          }
          ptcInfo {
            jobPostingPtcVisibility
          }
          proposalsStatistics {
            totalProposals
            totalMessaged
            totalHired
            totalInvitesSent
            totalApplicantsWithAutoHidden
            totalArchived
            totalAutoHidden
            totalDeclined
            totalHidden
            totalOffered
            totalShortlisted
            totalWithdrawn
          }
          customFields {
            responseId
            id
            displayValue
            value
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.jobPosting
  },

  /**
   * marketplaceJobPosting
   * @param variables - Operation variables
   * @param variables.id - Job posting identifier
   * @returns Types.MarketplaceJobPosting | null
   */
  marketplaceJobPosting: async (
    client: UpworkGraphQLClient,
    variables: { id: string }
  ): Promise<Types.MarketplaceJobPosting | null> => {
    const queryString = `
      query MarketplaceJobPosting($id: String!) {
        marketplaceJobPosting(id: $id) {
          id
          workFlowState {
            closeResult
            status
          }
          ownership {
            company {
              id
              rid
              legacyId
              name
              type
              legacyType
              flag {
                client
                vendor
                agency
                individual
              }
              active
              hidden
              company {
                id
                name
                description
                legacyType
                logoURL
                phone
                displayName
                teamsEnabled
                canHire
                hidden
                includeInStats
                companyName
                state
                city
                address
                zip
                timezone
                accountingEntity
                billingType
                summary
                paymentVerificationStatus
              }
              photoUrl
              creationDate
              agencyOffers {
                totalCount
              }
              offerByRootCompanyFilter {
                freelancerId_any
                agencyTeamOrgId_any
                clientOrgId_any
              }
              offerByClientFilter {
                teamId_any
                contactPersonId_any
                offerType_any
                milestoneState_any
                escrowRefundStatus_any
                freelancerId_any
                agreementKind_any
              }
              jobPosting {
                totalCount
              }
              jobPostingFilter {
                title_eq
                postByTeamIds_any
                postByPersonIds_any
                excludePostByPersonIds_any
                categoryGroupIds_any
                contractType_eq
                createdDateTimeFrom_eq
                createdDateTimeTo_eq
              }
            }
          }
          annotations {
            tags
            customFields {
              key
              value
            }
          }
          activityStat {
            applicationsBidStats {
              avgRateBid {
                rawValue
                currency
                displayValue
              }
            }
            jobActivity {
              lastClientActivity
              invitesSent
              totalInvitedToInterview
              totalHired
              totalUnansweredInvites
              totalOffered
              totalRecommended
            }
          }
          content {
            title
            description
          }
          attachments {
            id
            sequenceNumber
            fileName
            fileSize
          }
          classification {
            category {
              id
              ontologyId
              type
              entityStatus
              preferredLabel
              definition
              createdDateTime
              modifiedDateTime
            }
            occupation {
              id
              ontologyId
              type
              entityStatus
              preferredLabel
              definition
              createdDateTime
              modifiedDateTime
              skills {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                createdDateTime
                modifiedDateTime
                definition
                altLabel
                narrower
                narrowerIds
                broader
                broaderIds
                dependsOn
                dependsOnIds
                splitInto
                splitIntoIds
                mergedInto
                mergedIntoId
                replacedBy
                replacedById
                scopeNote
                externalLink
                exactMatch
                exactMatchIds
                closeMatch
                closeMatchIds
                comment
                attributeLevel
                allowMultipleClient
                allowMultipleFreelancer
                allowOther
                clientQuestion
                clientTip
                freelancerQuestion
                freelancerTip
                advancedClient
                client
                freelancer
                requiredClient
                requiredFreelancer
                otherClientLabel
                otherFreelancerLabel
                presentationMode
                priority
                isRequiredBy
                isRequiredByIds
                legacySkillNid
                prettyName
                legacySkillId
              }
            }
          }
          segmentationData {
            segmentationValues {
              customValue
              segmentationInfo {
                id
                label
                referenceName
                sortOrder
              }
            }
          }
          contractTerms {
            contractStartDate
            contractEndDate
            contractType
            onSiteType
            personsToHire
            experienceLevel
            fixedPriceContractTerms {
              engagementDuration {
                id
                label
                weeks
              }
            }
            hourlyContractTerms {
              engagementType
              notSureProjectDuration
              hourlyBudgetType
              hourlyBudgetMin
              hourlyBudgetMax
            }
            notSurePersonsToHire
            notSureExperiencelevel
          }
          contractorSelection {
            proposalRequirement {
              coverLetterRequired
              freelancerMilestonesAllowed
              screeningQuestions {
                question
                sequenceNumber
              }
            }
            qualification {
              contractorType
              englishProficiency
              hasPortfolio
              hoursWorked
              risingTalent
              jobSuccessScore
              minEarning
              preferredGroups {
                id
                name
                logo
              }
              preferenceTests {
                id
                name
              }
            }
            location {
              countries
              states
              timezones
              localCheckRequired
              localMarket
              areas {
                id
                areaType
                name
              }
              notSureLocationPreference
              localDescription
              localFlexibilityDescription
            }
          }
          additionalSearchInfo {
            highlightTitle
          }
          clientCompanyPublic {
            id
            legacyType
            teamsEnabled
            canHire
            hidden
            includeInStats
            country {
              id
              name
              twoLetterAbbreviation
              threeLetterAbbreviation
              region
              phoneCode
              relatedRegion {
                id
                name
              }
              active
              registrationAllowed
            }
            state
            city
            timezone
            accountingEntity
            billingType
            paymentVerification {
              status
              paymentVerified
            }
            agencyDetails {
              vetted
              topRatedStatus
              topRatedPlusStatus
            }
          }
          canClientReceiveContractProposal
          clientProposals {
            totalCount
            edges {
              cursor
              node {
                id
                coverLetter
                annotations
              }
            }
            pageInfo {
              endCursor
              hasNextPage
            }
          }
          filter {
            status_eq
            annotations_eq
            freelancerId_eq
            chargeRate_eq
            activityDays_eq
            category_eq
            jobSuccessScore_eq
            earnings_eq
            billedHours_eq
            applierType_eq
            topRated_eq
            englishLevel_eq
            title_eq
            textQuery_eq
            country_any
            region_any
            languages_any
            occupationId
          }
          customFields {
            edges {
              cursor
              node {
                responseId
                id
                itemId
                typeSnap
                labelSnap
                displayValueSnap
                createdDateTime
                rollupAssignmentId
                firstContractId
                offerId
                jobPostingId
                byoInvitationId
                buyItNowId
                questionnaireResponsesId
                stale
                termSectionId
                aclSnap
              }
            }
          }
          organizationIds
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.marketplaceJobPosting
  },

  /**
   * marketplaceJobPostings
   * @param variables - Operation variables
   * @param variables.marketPlaceJobFilter - Filter to search job postings
   * @param variables.searchType - Search type context
   * @param variables.sortAttributes - Sort attributes
   * @returns Types.MarketplaceJobPostingSearchConnection | null
   */
  marketplaceJobPostings: async (
    client: UpworkGraphQLClient,
    variables: {
      marketPlaceJobFilter?: Types.MarketplaceJobFilter
      searchType?: Types.MarketplaceJobPostingSearchType
      sortAttributes?: Array<Types.MarketplaceJobPostingSearchSortAttribute>
    } = {}
  ): Promise<Types.MarketplaceJobPostingSearchConnection | null> => {
    const queryString = `
      query MarketplaceJobPostings($marketPlaceJobFilter: MarketplaceJobFilter, $searchType: MarketplaceJobPostingSearchType, $sortAttributes: [MarketplaceJobPostingSearchSortAttribute]) {
        marketplaceJobPostings(marketPlaceJobFilter: $marketPlaceJobFilter, searchType: $searchType, sortAttributes: $sortAttributes) {
          totalCount
          edges {
            cursor
            node {
              id
              job {
                id
                canClientReceiveContractProposal
                organizationIds
              }
              title
              description
              ciphertext
              duration
              durationLabel
              engagement
              amount {
                rawValue
                currency
                displayValue
              }
              recordNumber
              experienceLevel
              category
              subcategory
              freelancersToHire
              relevance {
                id
                effectiveCandidates
                recommendedEffectiveCandidates
                uniqueImpressions
                publishTime
                hoursInactive
              }
              enterprise
              relevanceEncoded
              totalApplicants
              preferredFreelancerLocation
              preferredFreelancerLocationMandatory
              premium
              clientNotSureFields
              clientPrivateFields
              applied
              createdDateTime
              publishedDateTime
              renewedDateTime
              client {
                memberSinceDateTime
                totalHires
                totalPostedJobs
                verificationStatus
                totalReviews
                totalFeedback
                companyRid
                companyName
                edcUserId
                lastContractPlatform
                lastContractRid
                lastContractTitle
                companyOrgUid
                hasFinancialPrivacy
              }
              skills {
                id
                name
                prettyName
                highlighted
              }
              hourlyBudgetType
              localJobUserDistance
              engagementDuration {
                id
                label
                weeks
              }
              totalFreelancersToHire
              teamId
              freelancerClientRelation {
                companyRid
                companyName
                edcUserId
                lastContractPlatform
                lastContractRid
                lastContractTitle
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.marketplaceJobPostings
  },

  /**
   * marketplaceJobPostingsContents
   * @param variables - Operation variables
   * @param variables.ids - Job posting identifiers
   * @returns Array<Types.MarketplaceJobPostingsContents>
   */
  marketplaceJobPostingsContents: async (
    client: UpworkGraphQLClient,
    variables: { ids: Array<string> }
  ): Promise<Array<Types.MarketplaceJobPostingsContents>> => {
    const queryString = `
      query MarketplaceJobPostingsContents($ids: [string]!) {
        marketplaceJobPostingsContents(ids: $ids) {
          id
          ciphertext
          title
          description
          publishedDateTime
          annotations {
            tags
            customFields {
              key
              value
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.marketplaceJobPostingsContents
  },

  /**
   * countries
   * @returns Array<Types.Country>
   */
  countries: async (
    client: UpworkGraphQLClient,
    variables?: Record<string, never>
  ): Promise<Array<Types.Country>> => {
    const queryString = `
      query Countries {
        countries {
          id
          name
          twoLetterAbbreviation
          threeLetterAbbreviation
          region
          phoneCode
          relatedRegion {
            id
            name
          }
          active
          registrationAllowed
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.countries
  },

  /**
   * languages
   * @returns Array<Types.Language>
   */
  languages: async (
    client: UpworkGraphQLClient,
    variables?: Record<string, never>
  ): Promise<Array<Types.Language>> => {
    const queryString = `
      query Languages {
        languages {
          iso639Code
          active
          englishName
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.languages
  },

  /**
   * reasons
   * @param variables - Operation variables
   * @param variables.reasonType - Reason category type
   * @param variables.all - Return all reasons (ignore visibility filters)
   * @returns Array<Types.ReasonsMetadata>
   */
  reasons: async (
    client: UpworkGraphQLClient,
    variables: { reasonType: Types.ReasonType; all?: boolean }
  ): Promise<Array<Types.ReasonsMetadata>> => {
    const queryString = `
      query Reasons($reasonType: ReasonType!, $all: Boolean) {
        reasons(reasonType: $reasonType, all: $all) {
          id
          reason
          alias
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.reasons
  },

  /**
   * regions
   * @returns Array<Types.Region>
   */
  regions: async (
    client: UpworkGraphQLClient,
    variables?: Record<string, never>
  ): Promise<Array<Types.Region>> => {
    const queryString = `
      query Regions {
        regions {
          id
          name
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.regions
  },

  /**
   * requestMetadata
   * @returns Types.RequestMetadata
   */
  requestMetadata: async (
    client: UpworkGraphQLClient,
    variables?: Record<string, never>
  ): Promise<Types.RequestMetadata> => {
    const queryString = `
      query RequestMetadata {
        requestMetadata {
          sudo
          internal
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.requestMetadata
  },

  /**
   * timeZones
   * @returns Array<Types.TimeZoneRecord>
   */
  timeZones: async (
    client: UpworkGraphQLClient,
    variables?: Record<string, never>
  ): Promise<Array<Types.TimeZoneRecord>> => {
    const queryString = `
      query TimeZones {
        timeZones {
          timeZoneName
          timeZoneDescription
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.timeZones
  },

  /**
   * visitor
   * @returns Types.Visitor | null
   */
  visitor: async (
    client: UpworkGraphQLClient,
    variables?: Record<string, never>
  ): Promise<Types.Visitor | null> => {
    const queryString = `
      query Visitor {
        visitor {
          i18n {
            countrySupported
            status
            locationViewType
            userPreferredLocationType
            settingsFlags {
              showDomesticLocationFilterOnFLSearch
              showJobSearch
              showPhoneVerification
              showSmfToUpdateAddress
              showPersonalAddressAutocomplete
              showMessageContainer
              showLocationPreferenceOnJobPost
              defaultDomesticEnabled
              jobSearchDefaultedToON
              showLocationVerificationOnFWH
              domesticEnabledForFreelancersOnFLSearch
            }
          }
          countryName
          segment {
            visitorId
            segmentName
            data
          }
          visitorId
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.visitor
  },

  /**
   * contract
   * @param variables - Operation variables
   * @param variables.id - Contract identifier
   * @returns Types.Contract | null
   */
  contract: async (
    client: UpworkGraphQLClient,
    variables: { id: string }
  ): Promise<Types.Contract | null> => {
    const queryString = `
      query Contract($id: String!) {
        contract(id: $id) {
          id
          title
          contractType
          job {
            id
            workFlowState {
              closeResult
              status
            }
            ownership {
              company {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
            }
            annotations {
              tags
              customFields {
                key
                value
              }
            }
            activityStat {
              jobActivity {
                lastClientActivity
                invitesSent
                totalInvitedToInterview
                totalHired
                totalUnansweredInvites
                totalOffered
                totalRecommended
              }
            }
            content {
              title
              description
            }
            attachments {
              id
              sequenceNumber
              fileName
              fileSize
            }
            classification {
              category {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                definition
                createdDateTime
                modifiedDateTime
              }
              occupation {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                definition
                createdDateTime
                modifiedDateTime
              }
              skills {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                createdDateTime
                modifiedDateTime
                definition
                altLabel
                narrower
                narrowerIds
                broader
                broaderIds
                dependsOn
                dependsOnIds
                splitInto
                splitIntoIds
                mergedInto
                mergedIntoId
                replacedBy
                replacedById
                scopeNote
                externalLink
                exactMatch
                exactMatchIds
                closeMatch
                closeMatchIds
                comment
                attributeLevel
                allowMultipleClient
                allowMultipleFreelancer
                allowOther
                clientQuestion
                clientTip
                freelancerQuestion
                freelancerTip
                advancedClient
                client
                freelancer
                requiredClient
                requiredFreelancer
                otherClientLabel
                otherFreelancerLabel
                presentationMode
                priority
                isRequiredBy
                isRequiredByIds
                legacySkillNid
                prettyName
                legacySkillId
              }
            }
            segmentationData {
              segmentationValues {
                customValue
              }
            }
            contractTerms {
              contractStartDate
              contractEndDate
              contractType
              onSiteType
              personsToHire
              experienceLevel
              hourlyContractTerms {
                engagementType
                notSureProjectDuration
                hourlyBudgetType
                hourlyBudgetMin
                hourlyBudgetMax
              }
              notSurePersonsToHire
              notSureExperiencelevel
            }
            contractorSelection {
              proposalRequirement {
                coverLetterRequired
                freelancerMilestonesAllowed
              }
              qualification {
                contractorType
                englishProficiency
                hasPortfolio
                hoursWorked
                risingTalent
                jobSuccessScore
                minEarning
              }
              location {
                countries
                states
                timezones
                localCheckRequired
                localMarket
                notSureLocationPreference
                localDescription
                localFlexibilityDescription
              }
            }
            additionalSearchInfo {
              highlightTitle
            }
            clientCompany {
              id
              name
              description
              legacyType
              logoURL
              contactUser {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              phone
              displayName
              teamsEnabled
              canHire
              hidden
              includeInStats
              companyName
              country {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              state
              city
              address
              zip
              timezone
              accountingEntity
              billingType
              summary
              paymentVerificationStatus
              paymentVerification {
                status
                paymentVerified
              }
              agencyDetails {
                vetted
                topRatedStatus
                topRatedPlusStatus
              }
              jobPosts {
                totalCount
              }
              jobPostsFilter {
                teamIds
                statuses
                excludeHidden
                fields
              }
            }
            clientCompanyPublic {
              id
              legacyType
              teamsEnabled
              canHire
              hidden
              includeInStats
              state
              city
              timezone
              accountingEntity
              billingType
            }
            canClientReceiveContractProposal
            clientProposals {
              totalCount
              edges {
                cursor
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
            filter {
              status_eq
              annotations_eq
              freelancerId_eq
              chargeRate_eq
              activityDays_eq
              category_eq
              jobSuccessScore_eq
              earnings_eq
              billedHours_eq
              applierType_eq
              topRated_eq
              englishLevel_eq
              title_eq
              textQuery_eq
              country_any
              region_any
              languages_any
              occupationId
            }
            customFields {
              edges {
                cursor
              }
            }
            organizationIds
          }
          hasAgency
          offer {
            id
            title
            description
            type
            vendorProposal {
              id
              terms {
                upfrontPaymentPercent
              }
              coverLetter
              proposalCoverLetter
              projectPlan {
                id
              }
              auditDetails {
                createdDateTime
                modifiedDateTime
              }
              status {
                status
              }
              annotations
            }
            closeJobPostingOnAccept
            offerTerms {
              expectedStartDate
              expectedEndDate
              hourlyTerms {
                weeklyHoursLimit
                manualTimeAllowed
              }
            }
            messageToContractor
            state
            offerFeatures {
              purchaseOrder {
                id
                orderNumber
                description
                expiresAtDateTime
                aclType
                aclSpecification
                archived
                placeHolder
                createdAtDateTime
                alertThreshold
                notificationAlcType
                notificationAlcSpecification
              }
              privateTalentCloud {
                id
                name
                joinInstructions
                welcomeMessageToAddedFreelancers
                joinRequestAutoApproved
                messageAfterJoinRequest
                joinRejectionMessage
                externalName
                active
                description
                onboardingTaskEnabled
                onboardingTaskEnableUpdatedDateTime
                selectable
              }
              onSiteType
              state
              localDescription
              localFlexibilityDescription
              eor
            }
            clientCompany {
              id
              name
              description
              legacyType
              logoURL
            }
            milestones {
              id
              dueDateTime
              state
              description
              currentEscrowAmount {
                rawValue
                currency
                displayValue
              }
              submissionCount
              sequenceId
              payComments
              lastSubmissionCreatedTime
              createdDateTime
              modifiedDateTime
              instructions
            }
            createdUsingBYOFlow
            freelancer {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              employmentRecords {
                id
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDate
                endDate
                description
                city
                country
              }
              availability {
                id
                capacity
                availabilityDateTime
                name
                createdDateTime
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            payrollOffer
            deliveryModel
            organizationIds
          }
          clientProposal {
            id
            coverLetter
            status {
              status
              reason {
                id
                reason
                description
              }
            }
            annotations
          }
          weeklyHoursLimit
          createdDateTime
          firstContractStartDateTime
          modifiedDateTime
          startDateTime
          endDateTime
          manualTimeAllowed
          hideScreenshots
          last
          weeklyStipendHours
          estimatedDuration {
            id
            label
          }
          status
          suspended
          paused
          contractId
          workDays {
            workDiary {
              cells {
                timestamp
                date
                manual
                overtime
                memo
              }
            }
            date
          }
          timeRange {
            rangeStart
            rangeEnd
          }
          workDiaryTimeCells {
            cellDateTime
            snapshotDateTime
            overtime
            manual
            activityLevel
            memo
            task {
              id
              description
            }
            mouseEventsCount
            keyboardEventsCount
            activeWindowTitle
            hideScreenshots
            hasScreenshot
            screenshotImageUrl
            screenshotImageUrlMedium
            screenshotImageThumbnail
            webcamEnabled
            webcamImageUrl
            webcamImageThumbnail
            snapshotExpired
          }
          date
          feedback {
            clientFeedback {
              score
              comment
              freelancerResponse
            }
            freelancerFeedback {
              score
              comment
              clientResponse
              recommendScore
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.contract
  },

  /**
   * contractByTerm
   * @param variables - Operation variables
   * @param variables.termId - Contract term ID, legacy contract assignment RID
   * @param variables.date - Date in ISO format yyyy-MM-ddThh:mm+HHmm or yyyy-MM-dd
   * @returns Types.ContractDetails
   */
  contractByTerm: async (
    client: UpworkGraphQLClient,
    variables: { termId: string; date?: string }
  ): Promise<Types.ContractDetails> => {
    const queryString = `
      query ContractByTerm($termId: String!, $date: String) {
        contractByTerm(termId: $termId, date: $date) {
          id
          title
          status
          closingReason {
            id
            apiRef
            reason
          }
          deliveryModel
          kind
          isPtc
          createDate
          modifyDate
          startDate
          endDate
          offer {
            id
            title
            description
            type
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
                phone
                displayName
                teamsEnabled
                canHire
                hidden
                includeInStats
                companyName
                state
                city
                address
                zip
                timezone
                accountingEntity
                billingType
                summary
                paymentVerificationStatus
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            vendorProposal {
              id
              user {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              organization {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              terms {
                upfrontPaymentPercent
              }
              coverLetter
              proposalCoverLetter
              projectPlan {
                id
              }
              auditDetails {
                createdDateTime
                modifiedDateTime
              }
              status {
                status
              }
              annotations
            }
            closeJobPostingOnAccept
            offerTerms {
              expectedStartDate
              expectedEndDate
              hourlyTerms {
                weeklyHoursLimit
                manualTimeAllowed
              }
            }
            messageToContractor
            state
            offerFeatures {
              purchaseOrder {
                id
                orderNumber
                description
                expiresAtDateTime
                aclType
                aclSpecification
                archived
                placeHolder
                createdAtDateTime
                alertThreshold
                notificationAlcType
                notificationAlcSpecification
              }
              privateTalentCloud {
                id
                name
                joinInstructions
                welcomeMessageToAddedFreelancers
                joinRequestAutoApproved
                messageAfterJoinRequest
                joinRejectionMessage
                externalName
                active
                description
                onboardingTaskEnabled
                onboardingTaskEnableUpdatedDateTime
                selectable
              }
              onSiteType
              country {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              state
              localDescription
              localFlexibilityDescription
              eor
            }
            clientCompany {
              id
              name
              description
              legacyType
              logoURL
            }
            milestones {
              id
              dueDateTime
              state
              description
              currentEscrowAmount {
                rawValue
                currency
                displayValue
              }
              submissionCount
              sequenceId
              payComments
              lastSubmissionCreatedTime
              createdDateTime
              modifiedDateTime
              instructions
            }
            createdUsingBYOFlow
            freelancer {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              employmentRecords {
                id
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDate
                endDate
                description
                city
                country
              }
              availability {
                id
                capacity
                availabilityDateTime
                name
                createdDateTime
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            payrollOffer
            deliveryModel
            organizationIds
          }
          offerId
          job {
            id
            version
            info {
              status
              company {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                userId
                photoUrl
                creationDate
              }
              auditTime {
                createdDateTime
                modifiedDateTime
              }
              hidden
              siteSource
              keepOpenOnHire
              draftJobPostingId
              publishDateTime
              filledDateTime
              sourcingUpdateForbidden
              sourcingUpdateCount
              premium
              legacyCiphertext
              hideBudget
              categoryId
              groupId
              notSureFreelancersToHire
              notSureExperienceLevel
              hourlyBudgetType
              reasonId
              reasonName
            }
            visibility
            content {
              title
              description
            }
            attachment {
              id
              sequenceNumber
              fileName
              link
              afsFileLink
              contentLength
              contentType
              createdDateTime
            }
            classification {
              category {
                id
                name
                slug
              }
              subCategory {
                id
                name
                slug
              }
              skills {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                createdDateTime
                modifiedDateTime
                definition
                altLabel
                narrower
                narrowerIds
                broader
                broaderIds
                dependsOn
                dependsOnIds
                splitInto
                splitIntoIds
                mergedInto
                mergedIntoId
                replacedBy
                replacedById
                scopeNote
                externalLink
                exactMatch
                exactMatchIds
                closeMatch
                closeMatchIds
                comment
                attributeLevel
                allowMultipleClient
                allowMultipleFreelancer
                allowOther
                clientQuestion
                clientTip
                freelancerQuestion
                freelancerTip
                advancedClient
                client
                freelancer
                requiredClient
                requiredFreelancer
                otherClientLabel
                otherFreelancerLabel
                presentationMode
                priority
                isRequiredBy
                isRequiredByIds
                legacySkillNid
                prettyName
                legacySkillId
              }
              customSkills {
                parentSkillId
                freeText
              }
              occupationId
              customAdditionalSkills
            }
            segmentationData {
              segmentationValues {
                id
                label
                referenceName
                sortOrder
              }
            }
            contractTerms {
              contractStartDate
              contractEndDate
              contractType
              onSiteType
              personsToHire
              experienceLevel
              hourlyContractTerms {
                engagementType
                notSureProjectDuration
                hourlyBudgetType
                hourlyBudgetMin
                hourlyBudgetMax
              }
            }
            contractorSelection {
              proposalRequirement {
                coverLetterRequired
                freelancerMilestonesAllowed
              }
              qualification {
                contractorType
                englishProficiency
                hasPortfolio
                risingTalent
                jobSuccessScore
                earnings
              }
              location {
                countries
                states
                timezones
                localCheckRequired
                localMarket
                notSureLocationPreference
                localDescription
                localFlexibilityDescription
                address
              }
            }
            additionalInfo {
              clientNumberOfHiresOnCreate
              directHire
              invitePost
              lastBuyerActivity
            }
            ptcInfo {
              jobPostingPtcVisibility
            }
            proposalsStatistics {
              totalProposals
              totalMessaged
              totalHired
              totalInvitesSent
              totalApplicantsWithAutoHidden
              totalArchived
              totalAutoHidden
              totalDeclined
              totalHidden
              totalOffered
              totalShortlisted
              totalWithdrawn
            }
            customFields {
              responseId
              id
              displayValue
              value
            }
          }
          freelancer {
            id
            rid
            name
            photoUrl
            firstName
            lastName
            address {
              countryName
              cityName
              zip
              timezone
              timezoneName
              street
              stateCode
              offsetToUTC
            }
            email
          }
          changingUserType
          metadata {
            agencyContract
          }
          hourlyLimits {
            id
            weeklyLimit
            createDate
            modifyDate
            startDate
            endDate
            legacyId
          }
          terms {
            fixedPriceTerms {
              id
              createDate
              modifyDate
              changeDate
              creatorUserType
              startDate
              changingUserType
              isFP2
              endDate
              jobType
              ptcData {
                startDate
                endDate
              }
            }
            hourlyTerms {
              id
              createDate
              modifyDate
              changeDate
              creatorUserType
              startDate
              changingUserType
              manualTimeAllowed
              endDate
              jobType
            }
            stipendTerms {
              id
              createDate
              modifyDate
              changeDate
              creatorUserType
              minGuaranteedHours
              startDate
              changingUserType
              endDate
              jobType
            }
          }
          projectId
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.contractByTerm
  },

  /**
   * contractDetails
   * @param variables - Operation variables
   * @param variables.id - Contract ID, legacy virtual rollup ID
   * @param variables.date - Returns only active terms on the given date. Date in ISO format yyyy-MM-ddThh:mm+HHmm or yyyy-MM-dd
   * @returns Types.ContractDetails
   */
  contractDetails: async (
    client: UpworkGraphQLClient,
    variables: { id: string; date?: string }
  ): Promise<Types.ContractDetails> => {
    const queryString = `
      query ContractDetails($id: String!, $date: String) {
        contractDetails(id: $id, date: $date) {
          id
          title
          status
          closingReason {
            id
            apiRef
            reason
          }
          deliveryModel
          kind
          isPtc
          createDate
          modifyDate
          startDate
          endDate
          offer {
            id
            title
            description
            type
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
                phone
                displayName
                teamsEnabled
                canHire
                hidden
                includeInStats
                companyName
                state
                city
                address
                zip
                timezone
                accountingEntity
                billingType
                summary
                paymentVerificationStatus
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            vendorProposal {
              id
              user {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              organization {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              terms {
                upfrontPaymentPercent
              }
              coverLetter
              proposalCoverLetter
              projectPlan {
                id
              }
              auditDetails {
                createdDateTime
                modifiedDateTime
              }
              status {
                status
              }
              annotations
            }
            closeJobPostingOnAccept
            offerTerms {
              expectedStartDate
              expectedEndDate
              hourlyTerms {
                weeklyHoursLimit
                manualTimeAllowed
              }
            }
            messageToContractor
            state
            offerFeatures {
              purchaseOrder {
                id
                orderNumber
                description
                expiresAtDateTime
                aclType
                aclSpecification
                archived
                placeHolder
                createdAtDateTime
                alertThreshold
                notificationAlcType
                notificationAlcSpecification
              }
              privateTalentCloud {
                id
                name
                joinInstructions
                welcomeMessageToAddedFreelancers
                joinRequestAutoApproved
                messageAfterJoinRequest
                joinRejectionMessage
                externalName
                active
                description
                onboardingTaskEnabled
                onboardingTaskEnableUpdatedDateTime
                selectable
              }
              onSiteType
              country {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              state
              localDescription
              localFlexibilityDescription
              eor
            }
            clientCompany {
              id
              name
              description
              legacyType
              logoURL
            }
            milestones {
              id
              dueDateTime
              state
              description
              currentEscrowAmount {
                rawValue
                currency
                displayValue
              }
              submissionCount
              sequenceId
              payComments
              lastSubmissionCreatedTime
              createdDateTime
              modifiedDateTime
              instructions
            }
            createdUsingBYOFlow
            freelancer {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              employmentRecords {
                id
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDate
                endDate
                description
                city
                country
              }
              availability {
                id
                capacity
                availabilityDateTime
                name
                createdDateTime
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            payrollOffer
            deliveryModel
            organizationIds
          }
          offerId
          job {
            id
            version
            info {
              status
              company {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                userId
                photoUrl
                creationDate
              }
              auditTime {
                createdDateTime
                modifiedDateTime
              }
              hidden
              siteSource
              keepOpenOnHire
              draftJobPostingId
              publishDateTime
              filledDateTime
              sourcingUpdateForbidden
              sourcingUpdateCount
              premium
              legacyCiphertext
              hideBudget
              categoryId
              groupId
              notSureFreelancersToHire
              notSureExperienceLevel
              hourlyBudgetType
              reasonId
              reasonName
            }
            visibility
            content {
              title
              description
            }
            attachment {
              id
              sequenceNumber
              fileName
              link
              afsFileLink
              contentLength
              contentType
              createdDateTime
            }
            classification {
              category {
                id
                name
                slug
              }
              subCategory {
                id
                name
                slug
              }
              skills {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                createdDateTime
                modifiedDateTime
                definition
                altLabel
                narrower
                narrowerIds
                broader
                broaderIds
                dependsOn
                dependsOnIds
                splitInto
                splitIntoIds
                mergedInto
                mergedIntoId
                replacedBy
                replacedById
                scopeNote
                externalLink
                exactMatch
                exactMatchIds
                closeMatch
                closeMatchIds
                comment
                attributeLevel
                allowMultipleClient
                allowMultipleFreelancer
                allowOther
                clientQuestion
                clientTip
                freelancerQuestion
                freelancerTip
                advancedClient
                client
                freelancer
                requiredClient
                requiredFreelancer
                otherClientLabel
                otherFreelancerLabel
                presentationMode
                priority
                isRequiredBy
                isRequiredByIds
                legacySkillNid
                prettyName
                legacySkillId
              }
              customSkills {
                parentSkillId
                freeText
              }
              occupationId
              customAdditionalSkills
            }
            segmentationData {
              segmentationValues {
                id
                label
                referenceName
                sortOrder
              }
            }
            contractTerms {
              contractStartDate
              contractEndDate
              contractType
              onSiteType
              personsToHire
              experienceLevel
              hourlyContractTerms {
                engagementType
                notSureProjectDuration
                hourlyBudgetType
                hourlyBudgetMin
                hourlyBudgetMax
              }
            }
            contractorSelection {
              proposalRequirement {
                coverLetterRequired
                freelancerMilestonesAllowed
              }
              qualification {
                contractorType
                englishProficiency
                hasPortfolio
                risingTalent
                jobSuccessScore
                earnings
              }
              location {
                countries
                states
                timezones
                localCheckRequired
                localMarket
                notSureLocationPreference
                localDescription
                localFlexibilityDescription
                address
              }
            }
            additionalInfo {
              clientNumberOfHiresOnCreate
              directHire
              invitePost
              lastBuyerActivity
            }
            ptcInfo {
              jobPostingPtcVisibility
            }
            proposalsStatistics {
              totalProposals
              totalMessaged
              totalHired
              totalInvitesSent
              totalApplicantsWithAutoHidden
              totalArchived
              totalAutoHidden
              totalDeclined
              totalHidden
              totalOffered
              totalShortlisted
              totalWithdrawn
            }
            customFields {
              responseId
              id
              displayValue
              value
            }
          }
          freelancer {
            id
            rid
            name
            photoUrl
            firstName
            lastName
            address {
              countryName
              cityName
              zip
              timezone
              timezoneName
              street
              stateCode
              offsetToUTC
            }
            email
          }
          changingUserType
          metadata {
            agencyContract
          }
          hourlyLimits {
            id
            weeklyLimit
            createDate
            modifyDate
            startDate
            endDate
            legacyId
          }
          terms {
            fixedPriceTerms {
              id
              createDate
              modifyDate
              changeDate
              creatorUserType
              startDate
              changingUserType
              isFP2
              endDate
              jobType
              ptcData {
                startDate
                endDate
              }
            }
            hourlyTerms {
              id
              createDate
              modifyDate
              changeDate
              creatorUserType
              startDate
              changingUserType
              manualTimeAllowed
              endDate
              jobType
            }
            stipendTerms {
              id
              createDate
              modifyDate
              changeDate
              creatorUserType
              minGuaranteedHours
              startDate
              changingUserType
              endDate
              jobType
            }
          }
          projectId
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.contractDetails
  },

  /**
   * contractList
   * @param variables - Operation variables
   * @param variables.ids - List of contract IDs. Max size is 10
   * @returns Types.ContractList | null
   */
  contractList: async (
    client: UpworkGraphQLClient,
    variables: { ids: Array<string> }
  ): Promise<Types.ContractList | null> => {
    const queryString = `
      query ContractList($ids: [string]!) {
        contractList(ids: $ids) {
          contracts {
            id
            title
            status
            closingReason {
              id
              apiRef
              reason
            }
            deliveryModel
            kind
            isPtc
            createDate
            modifyDate
            startDate
            endDate
            offer {
              id
              title
              description
              type
              job {
                id
                canClientReceiveContractProposal
                organizationIds
              }
              vendorProposal {
                id
                coverLetter
                proposalCoverLetter
                annotations
              }
              closeJobPostingOnAccept
              client {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              offerTerms {
                expectedStartDate
                expectedEndDate
              }
              messageToContractor
              state
              offerFeatures {
                onSiteType
                state
                localDescription
                localFlexibilityDescription
                eor
              }
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
              }
              milestones {
                id
                dueDateTime
                state
                description
                submissionCount
                sequenceId
                payComments
                lastSubmissionCreatedTime
                createdDateTime
                modifiedDateTime
                instructions
              }
              createdUsingBYOFlow
              freelancer {
                id
                fullName
                firstName
                lastName
                email
              }
              payrollOffer
              deliveryModel
              organizationIds
            }
            offerId
            job {
              id
              version
              info {
                status
                hidden
                siteSource
                keepOpenOnHire
                draftJobPostingId
                publishDateTime
                filledDateTime
                sourcingUpdateForbidden
                sourcingUpdateCount
                premium
                legacyCiphertext
                hideBudget
                categoryId
                groupId
                notSureFreelancersToHire
                notSureExperienceLevel
                hourlyBudgetType
                reasonId
                reasonName
              }
              visibility
              content {
                title
                description
              }
              attachment {
                id
                sequenceNumber
                fileName
                link
                afsFileLink
                contentLength
                contentType
                createdDateTime
              }
              classification {
                occupationId
                customAdditionalSkills
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
              }
              additionalInfo {
                clientNumberOfHiresOnCreate
                directHire
                invitePost
                lastBuyerActivity
              }
              ptcInfo {
                jobPostingPtcVisibility
              }
              proposalsStatistics {
                totalProposals
                totalMessaged
                totalHired
                totalInvitesSent
                totalApplicantsWithAutoHidden
                totalArchived
                totalAutoHidden
                totalDeclined
                totalHidden
                totalOffered
                totalShortlisted
                totalWithdrawn
              }
              customFields {
                responseId
                id
                displayValue
                value
              }
            }
            freelancer {
              id
              rid
              name
              photoUrl
              firstName
              lastName
              address {
                countryName
                cityName
                zip
                timezone
                timezoneName
                street
                stateCode
                offsetToUTC
              }
              email
            }
            changingUserType
            metadata {
              agencyContract
            }
            hourlyLimits {
              id
              weeklyLimit
              createDate
              modifyDate
              startDate
              endDate
              legacyId
            }
            terms {
              fixedPriceTerms {
                id
                createDate
                modifyDate
                changeDate
                creatorUserType
                startDate
                changingUserType
                isFP2
                endDate
                jobType
              }
              hourlyTerms {
                id
                createDate
                modifyDate
                changeDate
                creatorUserType
                startDate
                changingUserType
                manualTimeAllowed
                endDate
                jobType
              }
              stipendTerms {
                id
                createDate
                modifyDate
                changeDate
                creatorUserType
                minGuaranteedHours
                startDate
                changingUserType
                endDate
                jobType
              }
            }
            projectId
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.contractList
  },

  /**
   * contractProposal
   * @param variables - Operation variables
   * @param variables.id - Contract proposal identifier
   * @returns Types.ContractProposal | null
   */
  contractProposal: async (
    client: UpworkGraphQLClient,
    variables: { id: string }
  ): Promise<Types.ContractProposal | null> => {
    const queryString = `
      query ContractProposal($id: String!) {
        contractProposal(id: $id) {
          id
          state
          updatedDateTime
          createdDateTime
          canClientOfferBeAccepted
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.contractProposal
  },

  /**
   * contractTerm
   * @param variables - Operation variables
   * @param variables.termId - Contract term ID, legacy contract assignment RID
   * @returns Types.ContractDetails
   */
  contractTerm: async (
    client: UpworkGraphQLClient,
    variables: { termId: string }
  ): Promise<Types.ContractDetails> => {
    const queryString = `
      query ContractTerm($termId: String!) {
        contractTerm(termId: $termId) {
          id
          title
          status
          closingReason {
            id
            apiRef
            reason
          }
          deliveryModel
          kind
          isPtc
          createDate
          modifyDate
          startDate
          endDate
          offer {
            id
            title
            description
            type
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
                phone
                displayName
                teamsEnabled
                canHire
                hidden
                includeInStats
                companyName
                state
                city
                address
                zip
                timezone
                accountingEntity
                billingType
                summary
                paymentVerificationStatus
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            vendorProposal {
              id
              user {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              organization {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              terms {
                upfrontPaymentPercent
              }
              coverLetter
              proposalCoverLetter
              projectPlan {
                id
              }
              auditDetails {
                createdDateTime
                modifiedDateTime
              }
              status {
                status
              }
              annotations
            }
            closeJobPostingOnAccept
            offerTerms {
              expectedStartDate
              expectedEndDate
              hourlyTerms {
                weeklyHoursLimit
                manualTimeAllowed
              }
            }
            messageToContractor
            state
            offerFeatures {
              purchaseOrder {
                id
                orderNumber
                description
                expiresAtDateTime
                aclType
                aclSpecification
                archived
                placeHolder
                createdAtDateTime
                alertThreshold
                notificationAlcType
                notificationAlcSpecification
              }
              privateTalentCloud {
                id
                name
                joinInstructions
                welcomeMessageToAddedFreelancers
                joinRequestAutoApproved
                messageAfterJoinRequest
                joinRejectionMessage
                externalName
                active
                description
                onboardingTaskEnabled
                onboardingTaskEnableUpdatedDateTime
                selectable
              }
              onSiteType
              country {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              state
              localDescription
              localFlexibilityDescription
              eor
            }
            clientCompany {
              id
              name
              description
              legacyType
              logoURL
            }
            milestones {
              id
              dueDateTime
              state
              description
              currentEscrowAmount {
                rawValue
                currency
                displayValue
              }
              submissionCount
              sequenceId
              payComments
              lastSubmissionCreatedTime
              createdDateTime
              modifiedDateTime
              instructions
            }
            createdUsingBYOFlow
            freelancer {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              employmentRecords {
                id
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDate
                endDate
                description
                city
                country
              }
              availability {
                id
                capacity
                availabilityDateTime
                name
                createdDateTime
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            payrollOffer
            deliveryModel
            organizationIds
          }
          offerId
          job {
            id
            version
            info {
              status
              company {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                userId
                photoUrl
                creationDate
              }
              auditTime {
                createdDateTime
                modifiedDateTime
              }
              hidden
              siteSource
              keepOpenOnHire
              draftJobPostingId
              publishDateTime
              filledDateTime
              sourcingUpdateForbidden
              sourcingUpdateCount
              premium
              legacyCiphertext
              hideBudget
              categoryId
              groupId
              notSureFreelancersToHire
              notSureExperienceLevel
              hourlyBudgetType
              reasonId
              reasonName
            }
            visibility
            content {
              title
              description
            }
            attachment {
              id
              sequenceNumber
              fileName
              link
              afsFileLink
              contentLength
              contentType
              createdDateTime
            }
            classification {
              category {
                id
                name
                slug
              }
              subCategory {
                id
                name
                slug
              }
              skills {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                createdDateTime
                modifiedDateTime
                definition
                altLabel
                narrower
                narrowerIds
                broader
                broaderIds
                dependsOn
                dependsOnIds
                splitInto
                splitIntoIds
                mergedInto
                mergedIntoId
                replacedBy
                replacedById
                scopeNote
                externalLink
                exactMatch
                exactMatchIds
                closeMatch
                closeMatchIds
                comment
                attributeLevel
                allowMultipleClient
                allowMultipleFreelancer
                allowOther
                clientQuestion
                clientTip
                freelancerQuestion
                freelancerTip
                advancedClient
                client
                freelancer
                requiredClient
                requiredFreelancer
                otherClientLabel
                otherFreelancerLabel
                presentationMode
                priority
                isRequiredBy
                isRequiredByIds
                legacySkillNid
                prettyName
                legacySkillId
              }
              customSkills {
                parentSkillId
                freeText
              }
              occupationId
              customAdditionalSkills
            }
            segmentationData {
              segmentationValues {
                id
                label
                referenceName
                sortOrder
              }
            }
            contractTerms {
              contractStartDate
              contractEndDate
              contractType
              onSiteType
              personsToHire
              experienceLevel
              hourlyContractTerms {
                engagementType
                notSureProjectDuration
                hourlyBudgetType
                hourlyBudgetMin
                hourlyBudgetMax
              }
            }
            contractorSelection {
              proposalRequirement {
                coverLetterRequired
                freelancerMilestonesAllowed
              }
              qualification {
                contractorType
                englishProficiency
                hasPortfolio
                risingTalent
                jobSuccessScore
                earnings
              }
              location {
                countries
                states
                timezones
                localCheckRequired
                localMarket
                notSureLocationPreference
                localDescription
                localFlexibilityDescription
                address
              }
            }
            additionalInfo {
              clientNumberOfHiresOnCreate
              directHire
              invitePost
              lastBuyerActivity
            }
            ptcInfo {
              jobPostingPtcVisibility
            }
            proposalsStatistics {
              totalProposals
              totalMessaged
              totalHired
              totalInvitesSent
              totalApplicantsWithAutoHidden
              totalArchived
              totalAutoHidden
              totalDeclined
              totalHidden
              totalOffered
              totalShortlisted
              totalWithdrawn
            }
            customFields {
              responseId
              id
              displayValue
              value
            }
          }
          freelancer {
            id
            rid
            name
            photoUrl
            firstName
            lastName
            address {
              countryName
              cityName
              zip
              timezone
              timezoneName
              street
              stateCode
              offsetToUTC
            }
            email
          }
          changingUserType
          metadata {
            agencyContract
          }
          hourlyLimits {
            id
            weeklyLimit
            createDate
            modifyDate
            startDate
            endDate
            legacyId
          }
          terms {
            fixedPriceTerms {
              id
              createDate
              modifyDate
              changeDate
              creatorUserType
              startDate
              changingUserType
              isFP2
              endDate
              jobType
              ptcData {
                startDate
                endDate
              }
            }
            hourlyTerms {
              id
              createDate
              modifyDate
              changeDate
              creatorUserType
              startDate
              changingUserType
              manualTimeAllowed
              endDate
              jobType
            }
            stipendTerms {
              id
              createDate
              modifyDate
              changeDate
              creatorUserType
              minGuaranteedHours
              startDate
              changingUserType
              endDate
              jobType
            }
          }
          projectId
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.contractTerm
  },

  /**
   * customFields
   * @param variables - Operation variables
   * @param variables.input - Filters for custom fields retrieval
   * @param variables.offset - Pagination offset
   * @param variables.limit - Pagination limit
   * @returns Array<Types.CustomFields>
   */
  customFields: async (
    client: UpworkGraphQLClient,
    variables: { input: Types.CustomFieldsInput; offset?: number; limit?: number }
  ): Promise<Array<Types.CustomFields>> => {
    const queryString = `
      query CustomFields($input: CustomFieldsInput!, $offset: Int, $limit: Int) {
        customFields(input: $input, offset: $offset, limit: $limit) {
          responseId
          id
          itemId
          typeSnap
          labelSnap
          displayValueSnap
          creator {
            id
            nid
            rid
            name
            firstName
            lastName
            photoUrl
            publicUrl
            email
            location {
              countryName
              cityName
              zip
              timezone
              timezoneName
              street
              stateCode
              offsetToUTC
            }
            freelancerProfile {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              employmentRecords {
                id
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDate
                endDate
                description
                city
                country
              }
              availability {
                id
                capacity
                availabilityDateTime
                name
                createdDateTime
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              countryDetails {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            ciphertext
            talentProfile {
              personId
              identity {
                id
                ciphertext
              }
              personalData {
                firstName
                lastName
                title
                description
                profileUrl
                profileState
              }
              preferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                contractToHire
              }
              settings {
                provider
                suspended
                disabled
                status
                updatedDateTime
              }
              personAvailability {
                personId
                capacity
                createdDateTime
                availabilityDateTime
                updatedDateTime
                minHours
                maxHours
                availableDays
              }
              projectList {
                totalProjects
                updatedDateTime
              }
              communityCertificates {
                personId
                certificateAttachmentId
                certificationNumber
                expirationDate
                businessName
                visibility
              }
              profileCompleteness {
                personId
                pciActual
                pciDisplay
                pciAction
                pciActionCredit
                pciDateTime
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitExists
                overviewExists
                passedTestsCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                esnCount
                updatedDateTime
              }
              otherExperiences {
                id
                personId
                subject
                description
                active
              }
              educationRecords {
                id
                personId
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDateTime
                endDateTime
                comment
              }
              employmentRecords {
                id
                personId
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDateTime
                endDateTime
                description
                city
                country
              }
              skills {
                id
                skill
                prettyName
                status
                description
                externalLink
                wikipediaPageId
                freebaseMachineId
                migrateTo
                ctime
                mtime
                rank
              }
              jobCategories {
                id
                name
              }
              profileAggregates {
                lastWorkedOn
                totalHourlyJobs
                totalFixedJobs
                topRatedStatus
                totalFeedback
                totalEarnings
                totalJobs
              }
              specializedProfiles {
                personId
                profileId
                occupationId
                status
                rank
                occupations
                primary
                title
                description
                weblink
              }
              specializedProfilesProjects {
                personId
                profileId
              }
            }
          }
          createdDateTime
          rollupAssignmentId
          firstContractId
          offerId
          jobPostingId
          byoInvitationId
          buyItNowId
          questionnaireResponsesId
          stale
          termSectionId
          aclSnap
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.customFields
  },

  /**
   * offer
   * @param variables - Operation variables
   * @param variables.id - Offer identifier
   * @returns Types.Offer | null
   */
  offer: async (
    client: UpworkGraphQLClient,
    variables: { id: string }
  ): Promise<Types.Offer | null> => {
    const queryString = `
      query Offer($id: String!) {
        offer(id: $id) {
          id
          title
          description
          type
          job {
            id
            workFlowState {
              closeResult
              status
            }
            ownership {
              company {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
            }
            annotations {
              tags
              customFields {
                key
                value
              }
            }
            activityStat {
              jobActivity {
                lastClientActivity
                invitesSent
                totalInvitedToInterview
                totalHired
                totalUnansweredInvites
                totalOffered
                totalRecommended
              }
            }
            content {
              title
              description
            }
            attachments {
              id
              sequenceNumber
              fileName
              fileSize
            }
            classification {
              category {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                definition
                createdDateTime
                modifiedDateTime
              }
              occupation {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                definition
                createdDateTime
                modifiedDateTime
              }
              skills {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                createdDateTime
                modifiedDateTime
                definition
                altLabel
                narrower
                narrowerIds
                broader
                broaderIds
                dependsOn
                dependsOnIds
                splitInto
                splitIntoIds
                mergedInto
                mergedIntoId
                replacedBy
                replacedById
                scopeNote
                externalLink
                exactMatch
                exactMatchIds
                closeMatch
                closeMatchIds
                comment
                attributeLevel
                allowMultipleClient
                allowMultipleFreelancer
                allowOther
                clientQuestion
                clientTip
                freelancerQuestion
                freelancerTip
                advancedClient
                client
                freelancer
                requiredClient
                requiredFreelancer
                otherClientLabel
                otherFreelancerLabel
                presentationMode
                priority
                isRequiredBy
                isRequiredByIds
                legacySkillNid
                prettyName
                legacySkillId
              }
            }
            segmentationData {
              segmentationValues {
                customValue
              }
            }
            contractTerms {
              contractStartDate
              contractEndDate
              contractType
              onSiteType
              personsToHire
              experienceLevel
              hourlyContractTerms {
                engagementType
                notSureProjectDuration
                hourlyBudgetType
                hourlyBudgetMin
                hourlyBudgetMax
              }
              notSurePersonsToHire
              notSureExperiencelevel
            }
            contractorSelection {
              proposalRequirement {
                coverLetterRequired
                freelancerMilestonesAllowed
              }
              qualification {
                contractorType
                englishProficiency
                hasPortfolio
                hoursWorked
                risingTalent
                jobSuccessScore
                minEarning
              }
              location {
                countries
                states
                timezones
                localCheckRequired
                localMarket
                notSureLocationPreference
                localDescription
                localFlexibilityDescription
              }
            }
            additionalSearchInfo {
              highlightTitle
            }
            clientCompany {
              id
              name
              description
              legacyType
              logoURL
              contactUser {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              phone
              displayName
              teamsEnabled
              canHire
              hidden
              includeInStats
              companyName
              country {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              state
              city
              address
              zip
              timezone
              accountingEntity
              billingType
              summary
              paymentVerificationStatus
              paymentVerification {
                status
                paymentVerified
              }
              agencyDetails {
                vetted
                topRatedStatus
                topRatedPlusStatus
              }
              jobPosts {
                totalCount
              }
              jobPostsFilter {
                teamIds
                statuses
                excludeHidden
                fields
              }
            }
            clientCompanyPublic {
              id
              legacyType
              teamsEnabled
              canHire
              hidden
              includeInStats
              state
              city
              timezone
              accountingEntity
              billingType
            }
            canClientReceiveContractProposal
            clientProposals {
              totalCount
              edges {
                cursor
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
            filter {
              status_eq
              annotations_eq
              freelancerId_eq
              chargeRate_eq
              activityDays_eq
              category_eq
              jobSuccessScore_eq
              earnings_eq
              billedHours_eq
              applierType_eq
              topRated_eq
              englishLevel_eq
              title_eq
              textQuery_eq
              country_any
              region_any
              languages_any
              occupationId
            }
            customFields {
              edges {
                cursor
              }
            }
            organizationIds
          }
          vendorProposal {
            id
            terms {
              chargeRate {
                rawValue
                currency
                displayValue
              }
              estimatedDuration {
                id
                label
              }
              upfrontPaymentPercent
            }
            coverLetter
            proposalCoverLetter
            projectPlan {
              id
              milestones {
                description
                dueDate
                amount
              }
            }
            auditDetails {
              createdDateTime
              modifiedDateTime
            }
            status {
              status
              reason {
                id
                reason
                description
              }
            }
            annotations
          }
          closeJobPostingOnAccept
          offerTerms {
            expectedStartDate
            expectedEndDate
            hourlyTerms {
              weeklyHoursLimit
              manualTimeAllowed
            }
          }
          messageToContractor
          state
          offerFeatures {
            purchaseOrder {
              id
              orderNumber
              description
              expiresAtDateTime
              aclType
              aclSpecification
              archived
              placeHolder
              createdAtDateTime
              alertThreshold
              notificationAlcType
              notificationAlcSpecification
            }
            privateTalentCloud {
              id
              name
              joinInstructions
              welcomeMessageToAddedFreelancers
              joinRequestAutoApproved
              messageAfterJoinRequest
              joinRejectionMessage
              externalName
              active
              logoImageLarge {
                name
                uri
                encoding
                size
                createdDateTime
              }
              description
              onboardingTaskEnabled
              onboardingTaskEnableUpdatedDateTime
              selectable
            }
            onSiteType
            state
            localDescription
            localFlexibilityDescription
            eor
          }
          clientCompany {
            id
            name
            description
            legacyType
            logoURL
          }
          milestones {
            id
            dueDateTime
            state
            description
            submissionCount
            sequenceId
            payComments
            lastSubmissionCreatedTime
            createdDateTime
            modifiedDateTime
            instructions
            submissionEvents {
              submission {
                id
                createdDateTime
                modifiedDateTime
                sequenceId
              }
              submissionMessage {
                createdDateTime
                message
              }
            }
          }
          createdUsingBYOFlow
          freelancer {
            user {
              id
              nid
              rid
              email
              name
              userPermissions {
                offset
              }
              filter {
                resourceType_eq
                limit
                offset
                performExternalChecks_eq
                teamOrgIds_any
                returnAllTeams
                returnFirstGrantedResult_eq
              }
              photoUrl
              offer {
                totalCount
              }
              offerForFreelancerFilter {
                agencyRootCompanyOrgId_any
                agencyTeamOrgId_any
                clientOrgId_any
              }
              timeReport {
                dateWorkedOn
                weekWorkedOn
                monthWorkedOn
                yearWorkedOn
                termId
                task
                taskDescription
                memo
                totalHoursWorked
                totalCharges
                totalOnlineHoursWorked
                totalOnlineCharge
                totalOfflineHoursWorked
                totalOfflineCharge
              }
              timeReportDate_bt {
                rangeStart
                rangeEnd
              }
              contractTimeReport {
                totalCount
              }
              ciphertext
              i18NSettings {
                countrySupported
                status
                locationViewType
                userPreferredLocationType
              }
              companyReferencedId
              talentProfile {
                personId
              }
            }
            personalData {
              firstName
              lastName
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              title
              description
              address {
                countryName
                cityName
                zip
                timezone
                street
              }
              workPhone
              profileUrl
              profileState
            }
            userPreferences {
              visibilityLevel
              hideAgencyEarnings
              hideEarnings
              exposeFullName
              clientFeedbackOptional
              projectTypePreference
              hideJss
            }
            otherExperiences {
              totalCount
              edges {
                cursor
              }
            }
            filter {
              subject_eq
            }
            educationRecords {
              id
              institutionName
              standardizedInstitutionId
              areaOfStudy
              standardizedAreaOfStudyId
              degree
              standardizedDegreeId
              startDate
              endDate
              description
            }
            certificates {
              id
              earnedDate
              submissionCode
              notes
              score
              active
              verified
              url
              createdDateTime
              lastUpdatedDateTime
              expirationDate
              externalId
            }
            employmentRecords {
              id
              companyName
              jobTitle
              standardizedCompanyId
              standardizedJobTitleId
              role
              startDate
              endDate
              description
              city
              country
            }
            availability {
              id
              capacity
              availabilityDateTime
              name
              createdDateTime
            }
            committedResponseTime {
              id
              committedResponseTime
              name
              createdDateTime
              updatedDateTime
            }
            project {
              id
              title
              description
              contractLink {
                id
                state
                notificationDateTime
                createdDateTime
              }
              thumbnailId
              thumbnailOriginalId
              thumbnail
              thumbnailOriginal
              projectUrl
              completionDateTime
              public
              rank
              attachments {
                id
                link
                fileName
                fileSize
                rank
                videoUrl
                type
                title
                description
                imageSmall
                imageMiddle
                imageLarge
              }
              occupationId
              projectType
              role
              projectGoal
              solution
              primaryImageId
              createdDateTime
            }
            id
            aggregates {
              lastWorkedDateTime
              lastApplicationDate
              totalHourlyJobs
              totalHourlyJobsRecent
              totalFixedJobs
              totalFixedJobsRecent
              responsiveness
              activeInterviews
              currentContracts
              jobSuccessScore
              topRatedStatus
              topRatedPlusStatus
              vetted
              totalHoursActual
              totalHours
              totalHoursRecent
              totalFeedback
              totalFeedbackRecent
              billedContracts
              billedContractsRecent
              adjustedFeedbackScore
              adjustedFeedbackScoreRecent
              profileStats {
                adjustedScore360
                longTermClients
                suspensions
                suspensions360
                suspensions90limited
                topLevelJobCategoryApplied90Days
                proposalsCount90Days
                medianProposalsForTheTopLevelCategory365
                fitProposalsViewRatio90Days
                hiddenProposalsViewedRatio90Days
                totalProposalsViewedRatio90Days
                proposalInterviewedRation90Days
                proposalsHiredRatio90Days
                hideReasonsForProposals
                totalInvites90Days
                totalInviteResponses90Days
                inviteResponsesPerDay90Days
                weeksEligibleWithin16wks
              }
              lastActivityDateTime
              topRatedStatusDatetime
              qualityScore
              totalHoursRounded
            }
            profileCompletenessSummary {
              actual
              display
              action
              actionCredit
              actionForEmptySection
              skillsCount
              employmentRecordCount
              portraitRecordCount
              overviewRecordCount
              videoRecordCount
              educationRecordCount
              certificatesCount
              otherExperiencesCount
              portfolioCount
              linkedExternalAccountsCount
              createdDateTime
            }
            verifications {
              idVerified
              phoneVerified
              webcamVerified
              idBadgeStatus
            }
            fullName
            firstName
            lastName
            email
            phoneNumber {
              code
              number
            }
            privateTalentCloud {
              totalCount
              edges {
                cursor
              }
            }
          }
          payrollOffer
          deliveryModel
          organizationIds
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.offer
  },

  /**
   * offersByAttribute
   * @param variables - Operation variables
   * @param variables.filter - Contains data for searching
   * @returns Types.OfferList | null
   */
  offersByAttribute: async (
    client: UpworkGraphQLClient,
    variables: { filter: Types.SearchOffersInput }
  ): Promise<Types.OfferList | null> => {
    const queryString = `
      query OffersByAttribute($filter: SearchOffersInput!) {
        offersByAttribute(filter: $filter) {
          offers {
            id
            title
            description
            type
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
                phone
                displayName
                teamsEnabled
                canHire
                hidden
                includeInStats
                companyName
                state
                city
                address
                zip
                timezone
                accountingEntity
                billingType
                summary
                paymentVerificationStatus
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            vendorProposal {
              id
              user {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              organization {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              terms {
                upfrontPaymentPercent
              }
              coverLetter
              proposalCoverLetter
              projectPlan {
                id
              }
              auditDetails {
                createdDateTime
                modifiedDateTime
              }
              status {
                status
              }
              annotations
            }
            closeJobPostingOnAccept
            offerTerms {
              expectedStartDate
              expectedEndDate
              hourlyTerms {
                weeklyHoursLimit
                manualTimeAllowed
              }
            }
            messageToContractor
            state
            offerFeatures {
              purchaseOrder {
                id
                orderNumber
                description
                expiresAtDateTime
                aclType
                aclSpecification
                archived
                placeHolder
                createdAtDateTime
                alertThreshold
                notificationAlcType
                notificationAlcSpecification
              }
              privateTalentCloud {
                id
                name
                joinInstructions
                welcomeMessageToAddedFreelancers
                joinRequestAutoApproved
                messageAfterJoinRequest
                joinRejectionMessage
                externalName
                active
                description
                onboardingTaskEnabled
                onboardingTaskEnableUpdatedDateTime
                selectable
              }
              onSiteType
              country {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              state
              localDescription
              localFlexibilityDescription
              eor
            }
            clientCompany {
              id
              name
              description
              legacyType
              logoURL
            }
            milestones {
              id
              dueDateTime
              state
              description
              currentEscrowAmount {
                rawValue
                currency
                displayValue
              }
              submissionCount
              sequenceId
              payComments
              lastSubmissionCreatedTime
              createdDateTime
              modifiedDateTime
              instructions
            }
            createdUsingBYOFlow
            freelancer {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              employmentRecords {
                id
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDate
                endDate
                description
                city
                country
              }
              availability {
                id
                capacity
                availabilityDateTime
                name
                createdDateTime
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            payrollOffer
            deliveryModel
            organizationIds
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.offersByAttribute
  },

  /**
   * offersByAttributes
   * @param variables - Operation variables
   * @param variables.filter - Search criteria by attribute IDs
   * @returns Types.ModernizedContractOfferList | null
   */
  offersByAttributes: async (
    client: UpworkGraphQLClient,
    variables: { filter: Types.SearchOffersByAttributesInput }
  ): Promise<Types.ModernizedContractOfferList | null> => {
    const queryString = `
      query OffersByAttributes($filter: SearchOffersByAttributesInput!) {
        offersByAttributes(filter: $filter) {
          offers {
            id
            kind
            offeror
            clientUserId
            clientTeamId
            clientOrgId
            vendorUserId
            vendorTeamId
            vendorOrgId
            actors {
              user
              team
              actorType
            }
            metadata {
              sourceType
              sourceId
              data
              occupationUid
            }
            expirationDateTime
            title
            description
            attachments
            contractStartDateTime
            contractEndDateTime
            hourlyRateTerms {
              rate {
                rawValue
                currency
                displayValue
              }
              weeklyHoursLimit
              manualTimeAllowed
            }
            stipendTerms {
              period
            }
            milestoneTerms {
              milestones {
                id
                dueDateTime
                state
                description
                submissionCount
                sequenceId
                payComments
                lastSubmissionCreatedTime
                createdDateTime
                modifiedDateTime
                instructions
              }
            }
            deliveryModel
            state
            instanceId
            staffingManagerId
            contractId
            agencyRootCompanyId
            type
            vendorType
            termsVersion
            legacyState
            previousOfferId
            newOfferId
            closePostingUponAccept
            lastEvent {
              reasonId
              message
              lastEventTime
            }
            createdDateTime
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.offersByAttributes
  },

  /**
   * vendorContracts
   * @param variables - Operation variables
   * @param variables.filter - Vendor contract search filter
   * @param variables.options - Contract options
   * @param variables.paging - Paging input
   * @returns Types.ContractSearchResults | null
   */
  vendorContracts: async (
    client: UpworkGraphQLClient,
    variables: {
      filter: Types.VendorContractSearchFilter
      options?: Types.ContractOptionsInput
      paging?: Types.ContractPagingInput
    }
  ): Promise<Types.ContractSearchResults | null> => {
    const queryString = `
      query VendorContracts($filter: VendorContractSearchFilter!, $options: ContractOptionsInput, $paging: ContractPagingInput) {
        vendorContracts(filter: $filter, options: $options, paging: $paging) {
          paging {
            limit
            offset
          }
          contracts {
            id
            title
            status
            closingReason {
              id
              apiRef
              reason
            }
            deliveryModel
            kind
            isPtc
            createDate
            modifyDate
            startDate
            endDate
            offer {
              id
              title
              description
              type
              job {
                id
                canClientReceiveContractProposal
                organizationIds
              }
              vendorProposal {
                id
                coverLetter
                proposalCoverLetter
                annotations
              }
              closeJobPostingOnAccept
              client {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              offerTerms {
                expectedStartDate
                expectedEndDate
              }
              messageToContractor
              state
              offerFeatures {
                onSiteType
                state
                localDescription
                localFlexibilityDescription
                eor
              }
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
              }
              milestones {
                id
                dueDateTime
                state
                description
                submissionCount
                sequenceId
                payComments
                lastSubmissionCreatedTime
                createdDateTime
                modifiedDateTime
                instructions
              }
              createdUsingBYOFlow
              freelancer {
                id
                fullName
                firstName
                lastName
                email
              }
              payrollOffer
              deliveryModel
              organizationIds
            }
            offerId
            job {
              id
              version
              info {
                status
                hidden
                siteSource
                keepOpenOnHire
                draftJobPostingId
                publishDateTime
                filledDateTime
                sourcingUpdateForbidden
                sourcingUpdateCount
                premium
                legacyCiphertext
                hideBudget
                categoryId
                groupId
                notSureFreelancersToHire
                notSureExperienceLevel
                hourlyBudgetType
                reasonId
                reasonName
              }
              visibility
              content {
                title
                description
              }
              attachment {
                id
                sequenceNumber
                fileName
                link
                afsFileLink
                contentLength
                contentType
                createdDateTime
              }
              classification {
                occupationId
                customAdditionalSkills
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
              }
              additionalInfo {
                clientNumberOfHiresOnCreate
                directHire
                invitePost
                lastBuyerActivity
              }
              ptcInfo {
                jobPostingPtcVisibility
              }
              proposalsStatistics {
                totalProposals
                totalMessaged
                totalHired
                totalInvitesSent
                totalApplicantsWithAutoHidden
                totalArchived
                totalAutoHidden
                totalDeclined
                totalHidden
                totalOffered
                totalShortlisted
                totalWithdrawn
              }
              customFields {
                responseId
                id
                displayValue
                value
              }
            }
            freelancer {
              id
              rid
              name
              photoUrl
              firstName
              lastName
              address {
                countryName
                cityName
                zip
                timezone
                timezoneName
                street
                stateCode
                offsetToUTC
              }
              email
            }
            changingUserType
            metadata {
              agencyContract
            }
            hourlyLimits {
              id
              weeklyLimit
              createDate
              modifyDate
              startDate
              endDate
              legacyId
            }
            terms {
              fixedPriceTerms {
                id
                createDate
                modifyDate
                changeDate
                creatorUserType
                startDate
                changingUserType
                isFP2
                endDate
                jobType
              }
              hourlyTerms {
                id
                createDate
                modifyDate
                changeDate
                creatorUserType
                startDate
                changingUserType
                manualTimeAllowed
                endDate
                jobType
              }
              stipendTerms {
                id
                createDate
                modifyDate
                changeDate
                creatorUserType
                minGuaranteedHours
                startDate
                changingUserType
                endDate
                jobType
              }
            }
            projectId
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.vendorContracts
  },

  /**
   * ontologyCategories
   * @returns Array<Types.OntologyCategory>
   */
  ontologyCategories: async (
    client: UpworkGraphQLClient,
    variables?: Record<string, never>
  ): Promise<Array<Types.OntologyCategory>> => {
    const queryString = `
      query OntologyCategories {
        ontologyCategories {
          id
          preferredLabel
          altLabel
          slug
          ontologyId
          subcategories {
            id
            preferredLabel
            altLabel
            slug
            ontologyId
            services {
              id
              preferredLabel
              altLabel
              slug
              ontologyId
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.ontologyCategories
  },

  /**
   * ontologyElementsSearchByPrefLabel
   * @param variables - Operation variables
   * @param variables.filter - Search filter for prefLabel
   * @returns Array<Types.OntologyEntity>
   */
  ontologyElementsSearchByPrefLabel: async (
    client: UpworkGraphQLClient,
    variables: { filter?: Types.OntologyElementsSearchByPrefLabelFilter } = {}
  ): Promise<Array<Types.OntologyEntity>> => {
    const queryString = `
      query OntologyElementsSearchByPrefLabel($filter: OntologyElementsSearchByPrefLabelFilter) {
        ontologyElementsSearchByPrefLabel(filter: $filter) {
          id
          ontologyId
          type
          entityStatus
          preferredLabel
          definition
          createdDateTime
          modifiedDateTime
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.ontologyElementsSearchByPrefLabel
  },

  /**
   * ontologyEntities
   * @param variables - Operation variables
   * @param variables.ids - List of ontology entity identifiers
   * @returns Array<Types.OntologyEntityResult>
   */
  ontologyEntities: async (
    client: UpworkGraphQLClient,
    variables: { ids: Array<string> }
  ): Promise<Array<Types.OntologyEntityResult>> => {
    const queryString = `
      query OntologyEntities($ids: [string]!) {
        ontologyEntities(ids: $ids) {
          # Add return fields here
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.ontologyEntities
  },

  /**
   * ontologyEntitiesFiltered
   * @param variables - Operation variables
   * @param variables.ontologyEntityFilter - Ontology entity filter criteria
   * @param variables.pagination - Pagination options
   * @returns Types.OntologyConnection | null
   */
  ontologyEntitiesFiltered: async (
    client: UpworkGraphQLClient,
    variables: {
      ontologyEntityFilter?: Types.OntologyEntityFilter
      pagination?: Types.Pagination
    } = {}
  ): Promise<Types.OntologyConnection | null> => {
    const queryString = `
      query OntologyEntitiesFiltered($ontologyEntityFilter: OntologyEntityFilter, $pagination: Pagination) {
        ontologyEntitiesFiltered(ontologyEntityFilter: $ontologyEntityFilter, pagination: $pagination) {
          totalCount
          edges {
            node {
              id
              ontologyId
              type
              entityStatus
              preferredLabel
              definition
              createdDateTime
              modifiedDateTime
            }
            cursor
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.ontologyEntitiesFiltered
  },

  /**
   * ontologyEntity
   * @param variables - Operation variables
   * @param variables.id - Ontology entity identifier
   * @returns Types.OntologyEntityResult | null
   */
  ontologyEntity: async (
    client: UpworkGraphQLClient,
    variables: { id: string }
  ): Promise<Types.OntologyEntityResult | null> => {
    const queryString = `
      query OntologyEntity($id: String!) {
        ontologyEntity(id: $id) {
          # Add return fields here
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.ontologyEntity
  },

  /**
   * ontologyEntitySearchRecords
   * @param variables - Operation variables
   * @param variables.filter - Ontology entity search filter
   * @returns Array<Types.OntologyEntitySearchRecord>
   */
  ontologyEntitySearchRecords: async (
    client: UpworkGraphQLClient,
    variables: { filter: Types.OntologyEntitySearchFilter }
  ): Promise<Array<Types.OntologyEntitySearchRecord>> => {
    const queryString = `
      query OntologyEntitySearchRecords($filter: OntologyEntitySearchFilter!) {
        ontologyEntitySearchRecords(filter: $filter) {
          ontologyEntity {
            id
            ontologyId
            type
            entityStatus
            preferredLabel
            definition
            createdDateTime
            modifiedDateTime
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.ontologyEntitySearchRecords
  },

  /**
   * ontologyOccupationsCategoriesServices
   * @param variables - Operation variables
   * @param variables.categoryUids - List of category identifiers
   * @returns Types.CategoryServicesResponse | null
   */
  ontologyOccupationsCategoriesServices: async (
    client: UpworkGraphQLClient,
    variables: { categoryUids: Array<string> }
  ): Promise<Types.CategoryServicesResponse | null> => {
    const queryString = `
      query OntologyOccupationsCategoriesServices($categoryUids: [string]!) {
        ontologyOccupationsCategoriesServices(categoryUids: $categoryUids) {
          categories {
            id
            ontologyId
            type
            entityStatus
            preferredLabel
            definition
            createdDateTime
            modifiedDateTime
            skills {
              id
              ontologyId
              type
              entityStatus
              preferredLabel
              createdDateTime
              modifiedDateTime
              definition
              altLabel
              narrower
              narrowerIds
              broader
              broaderIds
              dependsOn
              dependsOnIds
              splitInto
              splitIntoIds
              mergedInto
              mergedIntoId
              replacedBy
              replacedById
              scopeNote
              externalLink
              exactMatch
              exactMatchIds
              closeMatch
              closeMatchIds
              comment
              attributeLevel
              allowMultipleClient
              allowMultipleFreelancer
              allowOther
              clientQuestion
              clientTip
              freelancerQuestion
              freelancerTip
              advancedClient
              client
              freelancer
              requiredClient
              requiredFreelancer
              otherClientLabel
              otherFreelancerLabel
              presentationMode
              priority
              isRequiredBy
              isRequiredByIds
              legacySkillNid
              prettyName
              legacySkillId
            }
          }
          categoryServices {
            category
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.ontologyOccupationsCategoriesServices
  },

  /**
   * ontologySkills
   * @param variables - Operation variables
   * @param variables.limit - Maximum number of skills to return
   * @param variables.offset - Number of skills to skip
   * @returns Array<Types.Skill>
   */
  ontologySkills: async (
    client: UpworkGraphQLClient,
    variables: { limit: number; offset?: number }
  ): Promise<Array<Types.Skill>> => {
    const queryString = `
      query OntologySkills($limit: Int!, $offset: Int) {
        ontologySkills(limit: $limit, offset: $offset) {
          id
          ontologyId
          type
          entityStatus
          preferredLabel
          createdDateTime
          modifiedDateTime
          definition
          altLabel
          narrower
          narrowerIds
          broader
          broaderIds
          dependsOn
          dependsOnIds
          splitInto
          splitIntoIds
          mergedInto
          mergedIntoId
          replacedBy
          replacedById
          scopeNote
          externalLink
          exactMatch
          exactMatchIds
          closeMatch
          closeMatchIds
          comment
          attributeLevel
          allowMultipleClient
          allowMultipleFreelancer
          allowOther
          clientQuestion
          clientTip
          freelancerQuestion
          freelancerTip
          advancedClient
          client
          freelancer
          requiredClient
          requiredFreelancer
          otherClientLabel
          otherFreelancerLabel
          presentationMode
          priority
          isRequiredBy
          isRequiredByIds
          legacySkillNid
          prettyName
          legacySkillId
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.ontologySkills
  },

  /**
   * proposalMetadata
   * @returns Types.ProposalMetadata | null
   */
  proposalMetadata: async (
    client: UpworkGraphQLClient,
    variables?: Record<string, never>
  ): Promise<Types.ProposalMetadata | null> => {
    const queryString = `
      query ProposalMetadata {
        proposalMetadata {
          engagementDurationValues {
            id
            label
          }
          reasons {
            id
            reason
            alias
          }
          reasonType
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.proposalMetadata
  },

  /**
   * vendorProposal
   * @param variables - Operation variables
   * @param variables.id - ID of the vendor proposal
   * @returns Types.VendorProposal | null
   */
  vendorProposal: async (
    client: UpworkGraphQLClient,
    variables: { id: string }
  ): Promise<Types.VendorProposal | null> => {
    const queryString = `
      query VendorProposal($id: String!) {
        vendorProposal(id: $id) {
          id
          user {
            id
            nid
            rid
            name
            firstName
            lastName
            photoUrl
            publicUrl
            email
            location {
              countryName
              cityName
              zip
              timezone
              timezoneName
              street
              stateCode
              offsetToUTC
            }
            freelancerProfile {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              employmentRecords {
                id
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDate
                endDate
                description
                city
                country
              }
              availability {
                id
                capacity
                availabilityDateTime
                name
                createdDateTime
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              countryDetails {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            ciphertext
            talentProfile {
              personId
              identity {
                id
                ciphertext
              }
              personalData {
                firstName
                lastName
                title
                description
                profileUrl
                profileState
              }
              preferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                contractToHire
              }
              settings {
                provider
                suspended
                disabled
                status
                updatedDateTime
              }
              personAvailability {
                personId
                capacity
                createdDateTime
                availabilityDateTime
                updatedDateTime
                minHours
                maxHours
                availableDays
              }
              projectList {
                totalProjects
                updatedDateTime
              }
              communityCertificates {
                personId
                certificateAttachmentId
                certificationNumber
                expirationDate
                businessName
                visibility
              }
              profileCompleteness {
                personId
                pciActual
                pciDisplay
                pciAction
                pciActionCredit
                pciDateTime
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitExists
                overviewExists
                passedTestsCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                esnCount
                updatedDateTime
              }
              otherExperiences {
                id
                personId
                subject
                description
                active
              }
              educationRecords {
                id
                personId
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDateTime
                endDateTime
                comment
              }
              employmentRecords {
                id
                personId
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDateTime
                endDateTime
                description
                city
                country
              }
              skills {
                id
                skill
                prettyName
                status
                description
                externalLink
                wikipediaPageId
                freebaseMachineId
                migrateTo
                ctime
                mtime
                rank
              }
              jobCategories {
                id
                name
              }
              profileAggregates {
                lastWorkedOn
                totalHourlyJobs
                totalFixedJobs
                topRatedStatus
                totalFeedback
                totalEarnings
                totalJobs
              }
              specializedProfiles {
                personId
                profileId
                occupationId
                status
                rank
                occupations
                primary
                title
                description
                weblink
              }
              specializedProfilesProjects {
                personId
                profileId
              }
            }
          }
          organization {
            id
            rid
            legacyId
            name
            type
            legacyType
            flag {
              client
              vendor
              agency
              individual
            }
            active
            hidden
            company {
              id
              name
              description
              legacyType
              logoURL
              phone
              displayName
              teamsEnabled
              canHire
              hidden
              includeInStats
              companyName
              state
              city
              address
              zip
              timezone
              accountingEntity
              billingType
              summary
              paymentVerificationStatus
              paymentVerification {
                status
                paymentVerified
              }
              agencyDetails {
                vetted
                topRatedStatus
                topRatedPlusStatus
              }
              jobPosts {
                totalCount
              }
              jobPostsFilter {
                teamIds
                statuses
                excludeHidden
                fields
              }
            }
            photoUrl
            creationDate
            agencyOffers {
              totalCount
              edges {
                cursor
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
            offerByRootCompanyFilter {
              freelancerId_any
              agencyTeamOrgId_any
              clientOrgId_any
              commonFilter {
                text_eq
                states_any
                startDatePeriod_bt
                endDatePeriod_bt
                catalogProject
              }
            }
            offerByClientFilter {
              teamId_any
              contactPersonId_any
              offerType_any
              milestoneState_any
              escrowRefundStatus_any
              freelancerId_any
              agreementKind_any
            }
            jobPostingFilter {
              pagination_eq {
                after
                first
              }
              title_eq
              postByTeamIds_any
              postByPersonIds_any
              statusAndAccess_any {
                statuses_any
                accesses_any
              }
              excludePostByPersonIds_any
              categoryGroupIds_any
              contractType_eq
              createdDateTimeFrom_eq
              createdDateTimeTo_eq
            }
          }
          marketplaceJobPosting {
            id
            workFlowState {
              closeResult
              status
            }
            annotations {
              tags
              customFields {
                key
                value
              }
            }
            activityStat {
              jobActivity {
                lastClientActivity
                invitesSent
                totalInvitedToInterview
                totalHired
                totalUnansweredInvites
                totalOffered
                totalRecommended
              }
            }
            content {
              title
              description
            }
            attachments {
              id
              sequenceNumber
              fileName
              fileSize
            }
            classification {
              category {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                definition
                createdDateTime
                modifiedDateTime
              }
              occupation {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                definition
                createdDateTime
                modifiedDateTime
              }
              skills {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                createdDateTime
                modifiedDateTime
                definition
                altLabel
                narrower
                narrowerIds
                broader
                broaderIds
                dependsOn
                dependsOnIds
                splitInto
                splitIntoIds
                mergedInto
                mergedIntoId
                replacedBy
                replacedById
                scopeNote
                externalLink
                exactMatch
                exactMatchIds
                closeMatch
                closeMatchIds
                comment
                attributeLevel
                allowMultipleClient
                allowMultipleFreelancer
                allowOther
                clientQuestion
                clientTip
                freelancerQuestion
                freelancerTip
                advancedClient
                client
                freelancer
                requiredClient
                requiredFreelancer
                otherClientLabel
                otherFreelancerLabel
                presentationMode
                priority
                isRequiredBy
                isRequiredByIds
                legacySkillNid
                prettyName
                legacySkillId
              }
            }
            segmentationData {
              segmentationValues {
                customValue
              }
            }
            contractTerms {
              contractStartDate
              contractEndDate
              contractType
              onSiteType
              personsToHire
              experienceLevel
              hourlyContractTerms {
                engagementType
                notSureProjectDuration
                hourlyBudgetType
                hourlyBudgetMin
                hourlyBudgetMax
              }
              notSurePersonsToHire
              notSureExperiencelevel
            }
            contractorSelection {
              proposalRequirement {
                coverLetterRequired
                freelancerMilestonesAllowed
              }
              qualification {
                contractorType
                englishProficiency
                hasPortfolio
                hoursWorked
                risingTalent
                jobSuccessScore
                minEarning
              }
              location {
                countries
                states
                timezones
                localCheckRequired
                localMarket
                notSureLocationPreference
                localDescription
                localFlexibilityDescription
              }
            }
            additionalSearchInfo {
              highlightTitle
            }
            clientCompanyPublic {
              id
              legacyType
              teamsEnabled
              canHire
              hidden
              includeInStats
              state
              city
              timezone
              accountingEntity
              billingType
            }
            canClientReceiveContractProposal
            clientProposals {
              totalCount
              edges {
                cursor
              }
            }
            filter {
              status_eq
              annotations_eq
              freelancerId_eq
              chargeRate_eq
              activityDays_eq
              category_eq
              jobSuccessScore_eq
              earnings_eq
              billedHours_eq
              applierType_eq
              topRated_eq
              englishLevel_eq
              title_eq
              textQuery_eq
              country_any
              region_any
              languages_any
              occupationId
            }
            customFields {
              edges {
                cursor
              }
            }
            organizationIds
          }
          terms {
            chargeRate {
              rawValue
              currency
              displayValue
            }
            estimatedDuration {
              id
              label
            }
            upfrontPaymentPercent
          }
          coverLetter
          proposalCoverLetter
          projectPlan {
            id
            milestones {
              description
              dueDate
              amount
            }
          }
          auditDetails {
            createdDateTime
            modifiedDateTime
          }
          status {
            status
            reason {
              id
              reason
              description
            }
          }
          annotations
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.vendorProposal
  },

  /**
   * vendorProposals
   * @param variables - Operation variables
   * @param variables.filter - Filter for vendor proposals
   * @param variables.sortAttribute - Sort attribute
   * @param variables.pagination - Pagination options
   * @returns Types.VendorProposalsConnection
   */
  vendorProposals: async (
    client: UpworkGraphQLClient,
    variables: {
      filter: Types.VendorProposalFilter
      sortAttribute: Types.VendorProposalSortAttribute
      pagination: Types.Pagination
    }
  ): Promise<Types.VendorProposalsConnection> => {
    const queryString = `
      query VendorProposals($filter: VendorProposalFilter!, $sortAttribute: VendorProposalSortAttribute!, $pagination: Pagination!) {
        vendorProposals(filter: $filter, sortAttribute: $sortAttribute, pagination: $pagination) {
          totalCount
          edges {
            cursor
            node {
              id
              user {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              organization {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              marketplaceJobPosting {
                id
                canClientReceiveContractProposal
                organizationIds
              }
              terms {
                upfrontPaymentPercent
              }
              coverLetter
              proposalCoverLetter
              projectPlan {
                id
              }
              auditDetails {
                createdDateTime
                modifiedDateTime
              }
              status {
                status
              }
              annotations
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.vendorProposals
  },

  /**
   * clientProposal
   * @param variables - Operation variables
   * @param variables.id - ID of the client proposal
   * @returns Types.ClientProposal | null
   */
  clientProposal: async (
    client: UpworkGraphQLClient,
    variables: { id: string }
  ): Promise<Types.ClientProposal | null> => {
    const queryString = `
      query ClientProposal($id: String!) {
        clientProposal(id: $id) {
          id
          user {
            id
            nid
            rid
            name
            firstName
            lastName
            photoUrl
            publicUrl
            email
            location {
              countryName
              cityName
              zip
              timezone
              timezoneName
              street
              stateCode
              offsetToUTC
            }
            freelancerProfile {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              employmentRecords {
                id
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDate
                endDate
                description
                city
                country
              }
              availability {
                id
                capacity
                availabilityDateTime
                name
                createdDateTime
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              countryDetails {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            ciphertext
            talentProfile {
              personId
              identity {
                id
                ciphertext
              }
              personalData {
                firstName
                lastName
                title
                description
                profileUrl
                profileState
              }
              preferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                contractToHire
              }
              settings {
                provider
                suspended
                disabled
                status
                updatedDateTime
              }
              personAvailability {
                personId
                capacity
                createdDateTime
                availabilityDateTime
                updatedDateTime
                minHours
                maxHours
                availableDays
              }
              projectList {
                totalProjects
                updatedDateTime
              }
              communityCertificates {
                personId
                certificateAttachmentId
                certificationNumber
                expirationDate
                businessName
                visibility
              }
              profileCompleteness {
                personId
                pciActual
                pciDisplay
                pciAction
                pciActionCredit
                pciDateTime
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitExists
                overviewExists
                passedTestsCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                esnCount
                updatedDateTime
              }
              otherExperiences {
                id
                personId
                subject
                description
                active
              }
              educationRecords {
                id
                personId
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDateTime
                endDateTime
                comment
              }
              employmentRecords {
                id
                personId
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDateTime
                endDateTime
                description
                city
                country
              }
              skills {
                id
                skill
                prettyName
                status
                description
                externalLink
                wikipediaPageId
                freebaseMachineId
                migrateTo
                ctime
                mtime
                rank
              }
              jobCategories {
                id
                name
              }
              profileAggregates {
                lastWorkedOn
                totalHourlyJobs
                totalFixedJobs
                topRatedStatus
                totalFeedback
                totalEarnings
                totalJobs
              }
              specializedProfiles {
                personId
                profileId
                occupationId
                status
                rank
                occupations
                primary
                title
                description
                weblink
              }
              specializedProfilesProjects {
                personId
                profileId
              }
            }
          }
          organization {
            id
            rid
            legacyId
            name
            type
            legacyType
            flag {
              client
              vendor
              agency
              individual
            }
            active
            hidden
            company {
              id
              name
              description
              legacyType
              logoURL
              phone
              displayName
              teamsEnabled
              canHire
              hidden
              includeInStats
              companyName
              state
              city
              address
              zip
              timezone
              accountingEntity
              billingType
              summary
              paymentVerificationStatus
              paymentVerification {
                status
                paymentVerified
              }
              agencyDetails {
                vetted
                topRatedStatus
                topRatedPlusStatus
              }
              jobPosts {
                totalCount
              }
              jobPostsFilter {
                teamIds
                statuses
                excludeHidden
                fields
              }
            }
            photoUrl
            creationDate
            agencyOffers {
              totalCount
              edges {
                cursor
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
            offerByRootCompanyFilter {
              freelancerId_any
              agencyTeamOrgId_any
              clientOrgId_any
              commonFilter {
                text_eq
                states_any
                startDatePeriod_bt
                endDatePeriod_bt
                catalogProject
              }
            }
            offerByClientFilter {
              teamId_any
              contactPersonId_any
              offerType_any
              milestoneState_any
              escrowRefundStatus_any
              freelancerId_any
              agreementKind_any
            }
            jobPostingFilter {
              pagination_eq {
                after
                first
              }
              title_eq
              postByTeamIds_any
              postByPersonIds_any
              statusAndAccess_any {
                statuses_any
                accesses_any
              }
              excludePostByPersonIds_any
              categoryGroupIds_any
              contractType_eq
              createdDateTimeFrom_eq
              createdDateTimeTo_eq
            }
          }
          job {
            id
            workFlowState {
              closeResult
              status
            }
            annotations {
              tags
              customFields {
                key
                value
              }
            }
            activityStat {
              jobActivity {
                lastClientActivity
                invitesSent
                totalInvitedToInterview
                totalHired
                totalUnansweredInvites
                totalOffered
                totalRecommended
              }
            }
            content {
              title
              description
            }
            attachments {
              id
              sequenceNumber
              fileName
              fileSize
            }
            classification {
              category {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                definition
                createdDateTime
                modifiedDateTime
              }
              occupation {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                definition
                createdDateTime
                modifiedDateTime
              }
              skills {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                createdDateTime
                modifiedDateTime
                definition
                altLabel
                narrower
                narrowerIds
                broader
                broaderIds
                dependsOn
                dependsOnIds
                splitInto
                splitIntoIds
                mergedInto
                mergedIntoId
                replacedBy
                replacedById
                scopeNote
                externalLink
                exactMatch
                exactMatchIds
                closeMatch
                closeMatchIds
                comment
                attributeLevel
                allowMultipleClient
                allowMultipleFreelancer
                allowOther
                clientQuestion
                clientTip
                freelancerQuestion
                freelancerTip
                advancedClient
                client
                freelancer
                requiredClient
                requiredFreelancer
                otherClientLabel
                otherFreelancerLabel
                presentationMode
                priority
                isRequiredBy
                isRequiredByIds
                legacySkillNid
                prettyName
                legacySkillId
              }
            }
            segmentationData {
              segmentationValues {
                customValue
              }
            }
            contractTerms {
              contractStartDate
              contractEndDate
              contractType
              onSiteType
              personsToHire
              experienceLevel
              hourlyContractTerms {
                engagementType
                notSureProjectDuration
                hourlyBudgetType
                hourlyBudgetMin
                hourlyBudgetMax
              }
              notSurePersonsToHire
              notSureExperiencelevel
            }
            contractorSelection {
              proposalRequirement {
                coverLetterRequired
                freelancerMilestonesAllowed
              }
              qualification {
                contractorType
                englishProficiency
                hasPortfolio
                hoursWorked
                risingTalent
                jobSuccessScore
                minEarning
              }
              location {
                countries
                states
                timezones
                localCheckRequired
                localMarket
                notSureLocationPreference
                localDescription
                localFlexibilityDescription
              }
            }
            additionalSearchInfo {
              highlightTitle
            }
            clientCompanyPublic {
              id
              legacyType
              teamsEnabled
              canHire
              hidden
              includeInStats
              state
              city
              timezone
              accountingEntity
              billingType
            }
            canClientReceiveContractProposal
            clientProposals {
              totalCount
              edges {
                cursor
              }
            }
            filter {
              status_eq
              annotations_eq
              freelancerId_eq
              chargeRate_eq
              activityDays_eq
              category_eq
              jobSuccessScore_eq
              earnings_eq
              billedHours_eq
              applierType_eq
              topRated_eq
              englishLevel_eq
              title_eq
              textQuery_eq
              country_any
              region_any
              languages_any
              occupationId
            }
            customFields {
              edges {
                cursor
              }
            }
            organizationIds
          }
          terms {
            chargeRate {
              rawValue
              currency
              displayValue
            }
            estimatedDuration {
              id
              label
            }
            upfrontPaymentPercent
          }
          coverLetter
          projectPlan {
            id
            milestones {
              description
              dueDate
              amount
            }
          }
          auditDetails {
            createdDateTime
            modifiedDateTime
          }
          status {
            status
            reason {
              id
              reason
              description
            }
          }
          annotations
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.clientProposal
  },

  /**
   * clientProposals
   * @param variables - Operation variables
   * @param variables.jobPostingId - Job posting identifier
   * @param variables.filter - Filter for client proposals
   * @param variables.sortAttribute - Sort attribute
   * @param variables.pagination - Pagination options
   * @returns Types.ClientProposalsConnection | null
   */
  clientProposals: async (
    client: UpworkGraphQLClient,
    variables: {
      jobPostingId: string
      filter?: Types.ClientProposalFilter
      sortAttribute?: Types.ClientProposalSortAttribute
      pagination?: Types.Pagination
    }
  ): Promise<Types.ClientProposalsConnection | null> => {
    const queryString = `
      query ClientProposals($jobPostingId: String!, $filter: ClientProposalFilter, $sortAttribute: ClientProposalSortAttribute, $pagination: Pagination) {
        clientProposals(jobPostingId: $jobPostingId, filter: $filter, sortAttribute: $sortAttribute, pagination: $pagination) {
          totalCount
          edges {
            cursor
            node {
              id
              user {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              organization {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              job {
                id
                canClientReceiveContractProposal
                organizationIds
              }
              terms {
                upfrontPaymentPercent
              }
              coverLetter
              projectPlan {
                id
              }
              auditDetails {
                createdDateTime
                modifiedDateTime
              }
              status {
                status
              }
              annotations
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.clientProposals
  },

  /**
   * contractTimeReport
   * @param variables - Operation variables
   * @param variables.filter - Filter by organization, time range and optional contracts
   * @param variables.pagination - Pagination options
   * @returns Types.TimeReportConnection
   */
  contractTimeReport: async (
    client: UpworkGraphQLClient,
    variables: { filter?: Types.TimeReportFilter; pagination?: Types.Pagination } = {}
  ): Promise<Types.TimeReportConnection> => {
    const queryString = `
      query ContractTimeReport($filter: TimeReportFilter, $pagination: Pagination) {
        contractTimeReport(filter: $filter, pagination: $pagination) {
          totalCount
          edges {
            node {
              dateWorkedOn
              weekWorkedOn
              monthWorkedOn
              yearWorkedOn
              freelancer {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              team {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              contractOffer {
                id
                startDateTime
                endDateTime
                type
                state
                milestoneState
                escrowRefundStatus
                title
                lastUpdatedDateTime
                lastPublishedDateTime
                inPrivateTalentCloud
                offerCreatedDateTime
                catalogProject
              }
              contract {
                id
                title
                status
                deliveryModel
                kind
                isPtc
                createDate
                modifyDate
                startDate
                endDate
                offerId
                changingUserType
                projectId
              }
              termId
              task
              taskDescription
              memo
              totalHoursWorked
              totalCharges
              totalOnlineHoursWorked
              totalOnlineCharge
              totalOfflineHoursWorked
              totalOfflineCharge
              billRate {
                id
                value
                code
                offerRef
              }
            }
            cursor
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.contractTimeReport
  },

  /**
   * timeReport
   * @param variables - Operation variables
   * @param variables.filter - Time report filter
   * @returns Array<Types.TimeReport>
   */
  timeReport: async (
    client: UpworkGraphQLClient,
    variables: { filter?: Types.TimeReportFilter } = {}
  ): Promise<Array<Types.TimeReport>> => {
    const queryString = `
      query TimeReport($filter: TimeReportFilter) {
        timeReport(filter: $filter) {
          dateWorkedOn
          weekWorkedOn
          monthWorkedOn
          yearWorkedOn
          freelancer {
            id
            nid
            rid
            name
            firstName
            lastName
            photoUrl
            publicUrl
            email
            location {
              countryName
              cityName
              zip
              timezone
              timezoneName
              street
              stateCode
              offsetToUTC
            }
            freelancerProfile {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              employmentRecords {
                id
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDate
                endDate
                description
                city
                country
              }
              availability {
                id
                capacity
                availabilityDateTime
                name
                createdDateTime
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              countryDetails {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            ciphertext
            talentProfile {
              personId
              identity {
                id
                ciphertext
              }
              personalData {
                firstName
                lastName
                title
                description
                profileUrl
                profileState
              }
              preferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                contractToHire
              }
              settings {
                provider
                suspended
                disabled
                status
                updatedDateTime
              }
              personAvailability {
                personId
                capacity
                createdDateTime
                availabilityDateTime
                updatedDateTime
                minHours
                maxHours
                availableDays
              }
              projectList {
                totalProjects
                updatedDateTime
              }
              communityCertificates {
                personId
                certificateAttachmentId
                certificationNumber
                expirationDate
                businessName
                visibility
              }
              profileCompleteness {
                personId
                pciActual
                pciDisplay
                pciAction
                pciActionCredit
                pciDateTime
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitExists
                overviewExists
                passedTestsCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                esnCount
                updatedDateTime
              }
              otherExperiences {
                id
                personId
                subject
                description
                active
              }
              educationRecords {
                id
                personId
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDateTime
                endDateTime
                comment
              }
              employmentRecords {
                id
                personId
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDateTime
                endDateTime
                description
                city
                country
              }
              skills {
                id
                skill
                prettyName
                status
                description
                externalLink
                wikipediaPageId
                freebaseMachineId
                migrateTo
                ctime
                mtime
                rank
              }
              jobCategories {
                id
                name
              }
              profileAggregates {
                lastWorkedOn
                totalHourlyJobs
                totalFixedJobs
                topRatedStatus
                totalFeedback
                totalEarnings
                totalJobs
              }
              specializedProfiles {
                personId
                profileId
                occupationId
                status
                rank
                occupations
                primary
                title
                description
                weblink
              }
              specializedProfilesProjects {
                personId
                profileId
              }
            }
          }
          team {
            id
            rid
            legacyId
            name
            type
            legacyType
            flag {
              client
              vendor
              agency
              individual
            }
            active
            hidden
            company {
              id
              name
              description
              legacyType
              logoURL
              phone
              displayName
              teamsEnabled
              canHire
              hidden
              includeInStats
              companyName
              state
              city
              address
              zip
              timezone
              accountingEntity
              billingType
              summary
              paymentVerificationStatus
              paymentVerification {
                status
                paymentVerified
              }
              agencyDetails {
                vetted
                topRatedStatus
                topRatedPlusStatus
              }
              jobPosts {
                totalCount
              }
              jobPostsFilter {
                teamIds
                statuses
                excludeHidden
                fields
              }
            }
            photoUrl
            creationDate
            agencyOffers {
              totalCount
              edges {
                cursor
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
            offerByRootCompanyFilter {
              freelancerId_any
              agencyTeamOrgId_any
              clientOrgId_any
              commonFilter {
                text_eq
                states_any
                startDatePeriod_bt
                endDatePeriod_bt
                catalogProject
              }
            }
            offerByClientFilter {
              teamId_any
              contactPersonId_any
              offerType_any
              milestoneState_any
              escrowRefundStatus_any
              freelancerId_any
              agreementKind_any
            }
            jobPostingFilter {
              pagination_eq {
                after
                first
              }
              title_eq
              postByTeamIds_any
              postByPersonIds_any
              statusAndAccess_any {
                statuses_any
                accesses_any
              }
              excludePostByPersonIds_any
              categoryGroupIds_any
              contractType_eq
              createdDateTimeFrom_eq
              createdDateTimeTo_eq
            }
          }
          contractOffer {
            id
            startDateTime
            endDateTime
            type
            state
            milestoneState
            escrowRefundStatus
            title
            lastUpdatedDateTime
            lastPublishedDateTime
            inPrivateTalentCloud
            offerCreatedDateTime
            offer {
              id
              title
              description
              type
              job {
                id
                canClientReceiveContractProposal
                organizationIds
              }
              vendorProposal {
                id
                coverLetter
                proposalCoverLetter
                annotations
              }
              closeJobPostingOnAccept
              offerTerms {
                expectedStartDate
                expectedEndDate
              }
              messageToContractor
              state
              offerFeatures {
                onSiteType
                state
                localDescription
                localFlexibilityDescription
                eor
              }
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
              }
              milestones {
                id
                dueDateTime
                state
                description
                submissionCount
                sequenceId
                payComments
                lastSubmissionCreatedTime
                createdDateTime
                modifiedDateTime
                instructions
              }
              createdUsingBYOFlow
              payrollOffer
              deliveryModel
              organizationIds
            }
            contract {
              id
              title
              contractType
              hasAgency
              clientProposal {
                id
                coverLetter
                annotations
              }
              weeklyChargeAmount {
                rawValue
                currency
                displayValue
              }
              weeklyHoursLimit
              createdDateTime
              firstContractStartDateTime
              modifiedDateTime
              startDateTime
              endDateTime
              manualTimeAllowed
              hideScreenshots
              last
              weeklyStipendHours
              estimatedDuration {
                id
                label
              }
              status
              suspended
              paused
              contractId
              workDays {
                date
              }
              timeRange {
                rangeStart
                rangeEnd
              }
              workDiaryTimeCells {
                cellDateTime
                snapshotDateTime
                overtime
                manual
                activityLevel
                memo
                mouseEventsCount
                keyboardEventsCount
                activeWindowTitle
                hideScreenshots
                hasScreenshot
                screenshotImageUrl
                screenshotImageUrlMedium
                screenshotImageThumbnail
                webcamEnabled
                webcamImageUrl
                webcamImageThumbnail
                snapshotExpired
              }
              date
            }
            contractDetails {
              id
              title
              status
              closingReason {
                id
                apiRef
                reason
              }
              deliveryModel
              kind
              isPtc
              createDate
              modifyDate
              startDate
              endDate
              offerId
              job {
                id
                version
                visibility
              }
              freelancer {
                id
                rid
                name
                photoUrl
                firstName
                lastName
                email
              }
              changingUserType
              metadata {
                agencyContract
              }
              hourlyLimits {
                id
                weeklyLimit
                createDate
                modifyDate
                startDate
                endDate
                legacyId
              }
              projectId
            }
            catalogProject
          }
          termId
          task
          taskDescription
          memo
          totalHoursWorked
          totalCharges
          totalOnlineHoursWorked
          totalOnlineCharge
          totalOfflineHoursWorked
          totalOfflineCharge
          billRate {
            id
            value
            code
            offerRef
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.timeReport
  },

  /**
   * transactionHistory
   * @param variables - Operation variables
   * @param variables.transactionHistoryFilter - Transactions history filter
   * @returns Types.TransactionHistory | null
   */
  transactionHistory: async (
    client: UpworkGraphQLClient,
    variables: { transactionHistoryFilter?: Types.TransactionHistoryFilter } = {}
  ): Promise<Types.TransactionHistory | null> => {
    const queryString = `
      query TransactionHistory($transactionHistoryFilter: TransactionHistoryFilter) {
        transactionHistory(transactionHistoryFilter: $transactionHistoryFilter) {
          transactionDetail {
            transactionHistoryRow {
              rowNumber
              runningChargeableBalance {
                rawValue
                currency
                displayValue
              }
              recordId
              remainder
              transactionReviewDueDate
              transactionCreationDate
              relatedUserPaymentMethod
              accountingSubtype
              descriptionUI
              relatedAssignment
              paymentGuaranteed
              fixedPriceEARMark
              relatedTransactionId
              relatedInvoiceId
              fullyPaidDate
              type
              relatedAccountingEntity
              description
              purchaseOrderNumber
              assignmentAgencyName
              assignmentCompanyName
              assignmentDeveloperName
              assignmentTeamCompanyId
              assignmentTeamCompanyReference
              assignmentTeamId
              assignmentTeamReference
              assignmentTeamUserId
              assignmentTeamUserReference
              paymentStatus
              prefix
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.transactionHistory
  },

  /**
   * freelancerProfileSearchRecords
   * @param variables - Operation variables
   * @param variables.searchFilter - Search filters for freelancer profiles
   * @param variables.pagination - Pagination options
   * @returns Types.FreelancerProfilesSearchRecordsConnection | null
   */
  freelancerProfileSearchRecords: async (
    client: UpworkGraphQLClient,
    variables: { searchFilter: Types.FreelancerProfileSearchFilter; pagination: Types.Pagination }
  ): Promise<Types.FreelancerProfilesSearchRecordsConnection | null> => {
    const queryString = `
      query FreelancerProfileSearchRecords($searchFilter: FreelancerProfileSearchFilter!, $pagination: Pagination!) {
        freelancerProfileSearchRecords(searchFilter: $searchFilter, pagination: $pagination) {
          edges {
            node
            cursor
          }
          pageInfo {
            endCursor
            hasNextPage
          }
          totalCount
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.freelancerProfileSearchRecords
  },

  /**
   * marketplaceJobPostingsSearch
   * @param variables - Operation variables
   * @param variables.marketPlaceJobFilter - Filters to be applied to the search
   * @param variables.searchType - The appropriate search type
   * @param variables.sortAttributes - Sorting options for the search results
   * @returns Types.MarketplaceJobPostingSearchConnection | null
   */
  marketplaceJobPostingsSearch: async (
    client: UpworkGraphQLClient,
    variables: {
      marketPlaceJobFilter?: Types.MarketplaceJobPostingsSearchFilter
      searchType?: Types.MarketplaceJobPostingSearchType
      sortAttributes?: Array<Types.MarketplaceJobPostingSearchSortAttribute>
    } = {}
  ): Promise<Types.MarketplaceJobPostingSearchConnection | null> => {
    const queryString = `
      query MarketplaceJobPostingsSearch($marketPlaceJobFilter: MarketplaceJobPostingsSearchFilter, $searchType: MarketplaceJobPostingSearchType, $sortAttributes: [MarketplaceJobPostingSearchSortAttribute]) {
        marketplaceJobPostingsSearch(marketPlaceJobFilter: $marketPlaceJobFilter, searchType: $searchType, sortAttributes: $sortAttributes) {
          totalCount
          edges {
            cursor
            node {
              id
              job {
                id
                canClientReceiveContractProposal
                organizationIds
              }
              title
              description
              ciphertext
              duration
              durationLabel
              engagement
              amount {
                rawValue
                currency
                displayValue
              }
              recordNumber
              experienceLevel
              category
              subcategory
              freelancersToHire
              relevance {
                id
                effectiveCandidates
                recommendedEffectiveCandidates
                uniqueImpressions
                publishTime
                hoursInactive
              }
              enterprise
              relevanceEncoded
              totalApplicants
              preferredFreelancerLocation
              preferredFreelancerLocationMandatory
              premium
              clientNotSureFields
              clientPrivateFields
              applied
              createdDateTime
              publishedDateTime
              renewedDateTime
              client {
                memberSinceDateTime
                totalHires
                totalPostedJobs
                verificationStatus
                totalReviews
                totalFeedback
                companyRid
                companyName
                edcUserId
                lastContractPlatform
                lastContractRid
                lastContractTitle
                companyOrgUid
                hasFinancialPrivacy
              }
              skills {
                id
                name
                prettyName
                highlighted
              }
              hourlyBudgetType
              localJobUserDistance
              engagementDuration {
                id
                label
                weeks
              }
              totalFreelancersToHire
              teamId
              freelancerClientRelation {
                companyRid
                companyName
                edcUserId
                lastContractPlatform
                lastContractRid
                lastContractTitle
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.marketplaceJobPostingsSearch
  },

  /**
   * publicMarketplaceJobPostingsSearch
   * @param variables - Operation variables
   * @param variables.marketPlaceJobFilter - Filters to be applied to the search
   * @returns Types.PublicMarketplaceJobPostingsSearchConnection | null
   */
  publicMarketplaceJobPostingsSearch: async (
    client: UpworkGraphQLClient,
    variables: { marketPlaceJobFilter: Types.PublicMarketplaceJobPostingsSearchFilter }
  ): Promise<Types.PublicMarketplaceJobPostingsSearchConnection | null> => {
    const queryString = `
      query PublicMarketplaceJobPostingsSearch($marketPlaceJobFilter: PublicMarketplaceJobPostingsSearchFilter!) {
        publicMarketplaceJobPostingsSearch(marketPlaceJobFilter: $marketPlaceJobFilter) {
          jobs {
            title
            createdDateTime
            type
            ciphertext
            description
            skills {
              name
              prettyName
              highlighted
            }
            engagement
            amount {
              rawValue
              currency
              displayValue
            }
            recno
            contractorTier
            jobStatus
            client {
              totalHires
              totalPostedJobs
              totalReviews
              totalFeedback
              companyRid
              edcUserId
              lastContractRid
              hasFinancialPrivacy
            }
            category
            subcategory
            freelancersToHire
            enterpriseJob
            jobTs
            totalApplicants
            id
            prefFreelancerLocationMandatory
            publishedDateTime
            local
            locations {
              country
              city
              state
              countryTimezone
              worldRegion
            }
            durationLabel
            applied
            ontologySkills {
              id
              prefLabel
              highlighted
              freeText
            }
            duration
            hourlyBudgetType
            hourlyBudgetMin
            hourlyBudgetMax
            occupations {
              category {
                id
                prefLabel
              }
            }
            engagementDuration {
              id
              label
            }
          }
          paging {
            endCursor
            hasNextPage
          }
          facets {
            jobType
            workload
            clientHires
            budget
            clientFeedback
            daysPosted
            contractorTier
            categories
            payment
            proposals
            duration
            occupations
            freelancersNeeded
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.publicMarketplaceJobPostingsSearch
  },

  /**
   * search
   * @returns Types.Search | null
   */
  search: async (
    client: UpworkGraphQLClient,
    variables?: Record<string, never>
  ): Promise<Types.Search | null> => {
    const queryString = `
      query Search {
        search {
          searchFreelancerPublicProfile {
            pagingInfo {
              total
              offset
              count
            }
            profiles {
              profile {
                personId
              }
            }
          }
          request {
            paging {
              start
              rows
            }
            userQuery
            occupationUid
            title
            countries
            states
            cities
            hourlyRate {
              min
              max
            }
            totalJobs {
              min
              max
            }
            topRated
            risingTalent
            hasPortrait100
            skillsNames
            skillsUids
            vemSkills {
              skill
              weight
            }
            type
            addAgencyPreview
            agencySearch
            publicVisibilityOnly
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.search
  },

  /**
   * talentCloudTasks
   * @param variables - Operation variables
   * @param variables.filter - Filter for talent cloud tasks
   * @returns Array<Types.TalentCloudTask> | null
   */
  talentCloudTasks: async (
    client: UpworkGraphQLClient,
    variables: { filter: Types.TalentCloudTasksInputFilter }
  ): Promise<Array<Types.TalentCloudTask> | null> => {
    const queryString = `
      query TalentCloudTasks($filter: TalentCloudTasksInputFilter!) {
        talentCloudTasks(filter: $filter) {
          talentCloud {
            id
            name
            creator {
              id
              nid
              rid
              name
              firstName
              lastName
              photoUrl
              publicUrl
              email
              location {
                countryName
                cityName
                zip
                timezone
                timezoneName
                street
                stateCode
                offsetToUTC
              }
              freelancerProfile {
                id
                fullName
                firstName
                lastName
                email
              }
              ciphertext
              talentProfile {
                personId
              }
            }
            creatorOrganization {
              id
              rid
              legacyId
              name
              type
              legacyType
              flag {
                client
                vendor
                agency
                individual
              }
              active
              hidden
              company {
                id
                name
                description
                legacyType
                logoURL
                phone
                displayName
                teamsEnabled
                canHire
                hidden
                includeInStats
                companyName
                state
                city
                address
                zip
                timezone
                accountingEntity
                billingType
                summary
                paymentVerificationStatus
              }
              photoUrl
              creationDate
              agencyOffers {
                totalCount
              }
              offerByRootCompanyFilter {
                freelancerId_any
                agencyTeamOrgId_any
                clientOrgId_any
              }
              offerByClientFilter {
                teamId_any
                contactPersonId_any
                offerType_any
                milestoneState_any
                escrowRefundStatus_any
                freelancerId_any
                agreementKind_any
              }
              jobPosting {
                totalCount
              }
              jobPostingFilter {
                title_eq
                postByTeamIds_any
                postByPersonIds_any
                excludePostByPersonIds_any
                categoryGroupIds_any
                contractType_eq
                createdDateTimeFrom_eq
                createdDateTimeTo_eq
              }
            }
            joinInstructions
            welcomeMessageToAddedFreelancers
            joinRequestAutoApproved
            messageAfterJoinRequest
            joinRejectionMessage
            externalName
            active
            logoImageLarge {
              name
              uri
              encoding
              size
              createdDateTime
            }
            description
            onboardingTaskEnabled
            onboardingTaskEnableUpdatedDateTime
            selectable
          }
          taskSections {
            taskSectionDetails {
              id
              name
              description
              type
              attachmentIds
              active
              orderIndex
            }
            tasks {
              id
              taskSectionIds
              name
              completionRequired
              active
              permissions {
                role
                permission
              }
              primaryTaskOwner
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.talentCloudTasks
  },

  /**
   * talentProfile
   * @param variables - Operation variables
   * @param variables.personId - User identifier
   * @param variables.primary - When true, load primary profile; when false, load specialized
   * @returns Types.TalentProfileList | null
   */
  talentProfile: async (
    client: UpworkGraphQLClient,
    variables: { personId: string; primary?: boolean }
  ): Promise<Types.TalentProfileList | null> => {
    const queryString = `
      query TalentProfile($personId: String!, $primary: Boolean) {
        talentProfile(personId: $personId, primary: $primary) {
          profiles {
            personId
            identity {
              id
              ciphertext
            }
            personalData {
              firstName
              lastName
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              title
              description
              chargeRate {
                rawValue
                currency
                displayValue
              }
              profileUrl
              profileState
              location {
                country
                state
                city
                zip
                timezone
              }
            }
            preferences {
              visibilityLevel
              hideAgencyEarnings
              hideEarnings
              exposeFullName
              clientFeedbackOptional
              contractToHire
            }
            settings {
              provider
              suspended
              disabled
              status
              updatedDateTime
            }
            personAvailability {
              personId
              capacity
              createdDateTime
              availabilityDateTime
              updatedDateTime
              purchasedInvitationBadge {
                active
                maxPrice
                nextRenewalAt
              }
              minHours
              maxHours
              availableDays
            }
            projectList {
              projects {
                id
                title
                description
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                skills
                creationDateTime
                categoryId
                videoUrl
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                modificationDateTime
                developerId
                thumbnailId
                thumbnailOriginalId
                category
                subCategory
              }
              totalProjects
              updatedDateTime
            }
            communityCertificates {
              personId
              certificateAttachmentId
              certificationNumber
              expirationDate
              businessName
              visibility
              certificate {
                name
                description
                logoUrl
                verificationMethod
                provider
                providerLink
                duration
                status
              }
              otherCertificate {
                name
                provider
              }
            }
            profileCompleteness {
              personId
              pciActual
              pciDisplay
              pciAction
              pciActionCredit
              pciDateTime
              actionForEmptySection
              skillsCount
              employmentRecordCount
              portraitExists
              overviewExists
              passedTestsCount
              educationRecordCount
              certificatesCount
              otherExperiencesCount
              portfolioCount
              esnCount
              updatedDateTime
            }
            otherExperiences {
              id
              personId
              subject
              description
              active
            }
            educationRecords {
              id
              personId
              institutionName
              standardizedInstitutionId
              areaOfStudy
              standardizedAreaOfStudyId
              degree
              standardizedDegreeId
              startDateTime
              endDateTime
              comment
            }
            employmentRecords {
              id
              personId
              companyName
              jobTitle
              standardizedCompanyId
              standardizedJobTitleId
              role
              startDateTime
              endDateTime
              description
              city
              country
            }
            skills {
              id
              skill
              prettyName
              status
              description
              externalLink
              wikipediaPageId
              freebaseMachineId
              migrateTo
              ctime
              mtime
              rank
              ontologySkill {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                createdDateTime
                modifiedDateTime
                definition
                altLabel
                narrower
                narrowerIds
                broader
                broaderIds
                dependsOn
                dependsOnIds
                splitInto
                splitIntoIds
                mergedInto
                mergedIntoId
                replacedBy
                replacedById
                scopeNote
                externalLink
                exactMatch
                exactMatchIds
                closeMatch
                closeMatchIds
                comment
                attributeLevel
                allowMultipleClient
                allowMultipleFreelancer
                allowOther
                clientQuestion
                clientTip
                freelancerQuestion
                freelancerTip
                advancedClient
                client
                freelancer
                requiredClient
                requiredFreelancer
                otherClientLabel
                otherFreelancerLabel
                presentationMode
                priority
                isRequiredBy
                isRequiredByIds
                legacySkillNid
                prettyName
                legacySkillId
              }
            }
            jobCategories {
              id
              name
              selectedCategories {
                id
                name
              }
            }
            profileAggregates {
              lastWorkedOn
              totalHourlyJobs
              totalFixedJobs
              topRatedStatus
              totalFeedback
              totalEarnings
              adjustedCategoryScores {
                averageCategoryScore
              }
              totalJobs
            }
            specializedProfiles {
              personId
              profileId
              occupationId
              status
              rank
              occupations
              primary
              title
              description
              weblink
            }
            specializedProfilesProjects {
              personId
              profileId
              project {
                id
                title
                description
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                creationDateTime
                categoryId
                videoUrl
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                modificationDateTime
                thumbnailId
                thumbnailOriginalId
                category
                subCategory
              }
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.talentProfile
  },

  /**
   * talentProfileByProfileKey
   * @param variables - Operation variables
   * @param variables.profileKey - Public profile key string
   * @returns Types.TalentProfile | null
   */
  talentProfileByProfileKey: async (
    client: UpworkGraphQLClient,
    variables: { profileKey: string }
  ): Promise<Types.TalentProfile | null> => {
    const queryString = `
      query TalentProfileByProfileKey($profileKey: String!) {
        talentProfileByProfileKey(profileKey: $profileKey) {
          personId
          identity {
            id
            ciphertext
          }
          personalData {
            firstName
            lastName
            portrait {
              portrait
              portrait32
              portrait50
              portrait100
              portrait150
              portrait500
            }
            title
            description
            chargeRate {
              rawValue
              currency
              displayValue
            }
            profileUrl
            profileState
            location {
              country
              state
              city
              zip
              timezone
            }
          }
          preferences {
            visibilityLevel
            hideAgencyEarnings
            hideEarnings
            exposeFullName
            clientFeedbackOptional
            contractToHire
          }
          settings {
            provider
            suspended
            disabled
            status
            updatedDateTime
          }
          personAvailability {
            personId
            capacity
            createdDateTime
            availabilityDateTime
            updatedDateTime
            purchasedInvitationBadge {
              active
              maxPrice
              nextRenewalAt
            }
            minHours
            maxHours
            availableDays
          }
          projectList {
            projects {
              id
              title
              description
              projectContractLink {
                id
                creationDateTime
                state
                notificationDateTime
                clientId
              }
              thumbnail
              thumbnailOriginal
              projectUrl
              completionDateTime
              public
              rank
              attachments {
                id
                type
                title
                attachmentName
                attachmentSize
                originalAttachment
                imageSmall
                imageMiddle
                imageLarge
                rank
                creationDateTime
                description
                videoUrl
                imageFixedWidth
                group
              }
              skills
              creationDateTime
              categoryId
              videoUrl
              occupationId
              projectType
              role
              projectGoal
              solution
              primaryImageId
              tags {
                id
              }
              modificationDateTime
              developerId
              thumbnailId
              thumbnailOriginalId
              category
              subCategory
            }
            totalProjects
            updatedDateTime
          }
          communityCertificates {
            personId
            certificateAttachmentId
            certificationNumber
            expirationDate
            businessName
            visibility
            certificate {
              name
              description
              logoUrl
              verificationMethod
              provider
              providerLink
              duration
              classifications {
                id
                name
              }
              status
            }
            otherCertificate {
              name
              provider
            }
          }
          profileCompleteness {
            personId
            pciActual
            pciDisplay
            pciAction
            pciActionCredit
            pciDateTime
            actionForEmptySection
            skillsCount
            employmentRecordCount
            portraitExists
            overviewExists
            passedTestsCount
            educationRecordCount
            certificatesCount
            otherExperiencesCount
            portfolioCount
            esnCount
            updatedDateTime
          }
          otherExperiences {
            id
            personId
            subject
            description
            active
          }
          educationRecords {
            id
            personId
            institutionName
            standardizedInstitutionId
            areaOfStudy
            standardizedAreaOfStudyId
            degree
            standardizedDegreeId
            startDateTime
            endDateTime
            comment
          }
          employmentRecords {
            id
            personId
            companyName
            jobTitle
            standardizedCompanyId
            standardizedJobTitleId
            role
            startDateTime
            endDateTime
            description
            city
            country
          }
          skills {
            id
            skill
            prettyName
            status
            description
            externalLink
            wikipediaPageId
            freebaseMachineId
            migrateTo
            ctime
            mtime
            rank
            ontologySkill {
              id
              ontologyId
              type
              entityStatus
              preferredLabel
              createdDateTime
              modifiedDateTime
              definition
              altLabel
              narrower
              narrowerIds
              broader
              broaderIds
              dependsOn
              dependsOnIds
              splitInto
              splitIntoIds
              mergedInto
              mergedIntoId
              replacedBy
              replacedById
              scopeNote
              externalLink
              exactMatch
              exactMatchIds
              closeMatch
              closeMatchIds
              comment
              attributeLevel
              allowMultipleClient
              allowMultipleFreelancer
              allowOther
              clientQuestion
              clientTip
              freelancerQuestion
              freelancerTip
              advancedClient
              client
              freelancer
              requiredClient
              requiredFreelancer
              otherClientLabel
              otherFreelancerLabel
              presentationMode
              priority
              isRequiredBy
              isRequiredByIds
              legacySkillNid
              prettyName
              legacySkillId
            }
          }
          jobCategories {
            id
            name
            selectedCategories {
              id
              name
            }
          }
          profileAggregates {
            lastWorkedOn
            totalHourlyJobs
            totalFixedJobs
            topRatedStatus
            totalFeedback
            totalEarnings
            adjustedCategoryScores {
              averageCategoryScore
            }
            totalJobs
          }
          specializedProfiles {
            personId
            profileId
            occupationId
            status
            rank
            occupations
            primary
            title
            description
            weblink
          }
          specializedProfilesProjects {
            personId
            profileId
            project {
              id
              title
              description
              thumbnail
              thumbnailOriginal
              projectUrl
              completionDateTime
              public
              rank
              creationDateTime
              categoryId
              videoUrl
              occupationId
              projectType
              role
              projectGoal
              solution
              primaryImageId
              modificationDateTime
              thumbnailId
              thumbnailOriginalId
              category
              subCategory
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.talentProfileByProfileKey
  },

  /**
   * talentProfiles
   * @param variables - Operation variables
   * @param variables.personIds - List of user identifiers
   * @param variables.profileIds - Optional list of profile identifiers
   * @returns Types.TalentProfileList
   */
  talentProfiles: async (
    client: UpworkGraphQLClient,
    variables: { personIds: Array<string>; profileIds?: Array<string> }
  ): Promise<Types.TalentProfileList> => {
    const queryString = `
      query TalentProfiles($personIds: [string]!, $profileIds: [string]) {
        talentProfiles(personIds: $personIds, profileIds: $profileIds) {
          profiles {
            personId
            identity {
              id
              ciphertext
            }
            personalData {
              firstName
              lastName
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              title
              description
              chargeRate {
                rawValue
                currency
                displayValue
              }
              profileUrl
              profileState
              location {
                country
                state
                city
                zip
                timezone
              }
            }
            preferences {
              visibilityLevel
              hideAgencyEarnings
              hideEarnings
              exposeFullName
              clientFeedbackOptional
              contractToHire
            }
            settings {
              provider
              suspended
              disabled
              status
              updatedDateTime
            }
            personAvailability {
              personId
              capacity
              createdDateTime
              availabilityDateTime
              updatedDateTime
              purchasedInvitationBadge {
                active
                maxPrice
                nextRenewalAt
              }
              minHours
              maxHours
              availableDays
            }
            projectList {
              projects {
                id
                title
                description
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                skills
                creationDateTime
                categoryId
                videoUrl
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                modificationDateTime
                developerId
                thumbnailId
                thumbnailOriginalId
                category
                subCategory
              }
              totalProjects
              updatedDateTime
            }
            communityCertificates {
              personId
              certificateAttachmentId
              certificationNumber
              expirationDate
              businessName
              visibility
              certificate {
                name
                description
                logoUrl
                verificationMethod
                provider
                providerLink
                duration
                status
              }
              otherCertificate {
                name
                provider
              }
            }
            profileCompleteness {
              personId
              pciActual
              pciDisplay
              pciAction
              pciActionCredit
              pciDateTime
              actionForEmptySection
              skillsCount
              employmentRecordCount
              portraitExists
              overviewExists
              passedTestsCount
              educationRecordCount
              certificatesCount
              otherExperiencesCount
              portfolioCount
              esnCount
              updatedDateTime
            }
            otherExperiences {
              id
              personId
              subject
              description
              active
            }
            educationRecords {
              id
              personId
              institutionName
              standardizedInstitutionId
              areaOfStudy
              standardizedAreaOfStudyId
              degree
              standardizedDegreeId
              startDateTime
              endDateTime
              comment
            }
            employmentRecords {
              id
              personId
              companyName
              jobTitle
              standardizedCompanyId
              standardizedJobTitleId
              role
              startDateTime
              endDateTime
              description
              city
              country
            }
            skills {
              id
              skill
              prettyName
              status
              description
              externalLink
              wikipediaPageId
              freebaseMachineId
              migrateTo
              ctime
              mtime
              rank
              ontologySkill {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                createdDateTime
                modifiedDateTime
                definition
                altLabel
                narrower
                narrowerIds
                broader
                broaderIds
                dependsOn
                dependsOnIds
                splitInto
                splitIntoIds
                mergedInto
                mergedIntoId
                replacedBy
                replacedById
                scopeNote
                externalLink
                exactMatch
                exactMatchIds
                closeMatch
                closeMatchIds
                comment
                attributeLevel
                allowMultipleClient
                allowMultipleFreelancer
                allowOther
                clientQuestion
                clientTip
                freelancerQuestion
                freelancerTip
                advancedClient
                client
                freelancer
                requiredClient
                requiredFreelancer
                otherClientLabel
                otherFreelancerLabel
                presentationMode
                priority
                isRequiredBy
                isRequiredByIds
                legacySkillNid
                prettyName
                legacySkillId
              }
            }
            jobCategories {
              id
              name
              selectedCategories {
                id
                name
              }
            }
            profileAggregates {
              lastWorkedOn
              totalHourlyJobs
              totalFixedJobs
              topRatedStatus
              totalFeedback
              totalEarnings
              adjustedCategoryScores {
                averageCategoryScore
              }
              totalJobs
            }
            specializedProfiles {
              personId
              profileId
              occupationId
              status
              rank
              occupations
              primary
              title
              description
              weblink
            }
            specializedProfilesProjects {
              personId
              profileId
              project {
                id
                title
                description
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                creationDateTime
                categoryId
                videoUrl
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                modificationDateTime
                thumbnailId
                thumbnailOriginalId
                category
                subCategory
              }
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.talentProfiles
  },

  /**
   * talentSpecializedProfile
   * @param variables - Operation variables
   * @param variables.personId - User identifier
   * @param variables.profileId - Specialized profile identifier
   * @returns Types.TalentProfileList | null
   */
  talentSpecializedProfile: async (
    client: UpworkGraphQLClient,
    variables: { personId: string; profileId: string }
  ): Promise<Types.TalentProfileList | null> => {
    const queryString = `
      query TalentSpecializedProfile($personId: String!, $profileId: String!) {
        talentSpecializedProfile(personId: $personId, profileId: $profileId) {
          profiles {
            personId
            identity {
              id
              ciphertext
            }
            personalData {
              firstName
              lastName
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              title
              description
              chargeRate {
                rawValue
                currency
                displayValue
              }
              profileUrl
              profileState
              location {
                country
                state
                city
                zip
                timezone
              }
            }
            preferences {
              visibilityLevel
              hideAgencyEarnings
              hideEarnings
              exposeFullName
              clientFeedbackOptional
              contractToHire
            }
            settings {
              provider
              suspended
              disabled
              status
              updatedDateTime
            }
            personAvailability {
              personId
              capacity
              createdDateTime
              availabilityDateTime
              updatedDateTime
              purchasedInvitationBadge {
                active
                maxPrice
                nextRenewalAt
              }
              minHours
              maxHours
              availableDays
            }
            projectList {
              projects {
                id
                title
                description
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                skills
                creationDateTime
                categoryId
                videoUrl
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                modificationDateTime
                developerId
                thumbnailId
                thumbnailOriginalId
                category
                subCategory
              }
              totalProjects
              updatedDateTime
            }
            communityCertificates {
              personId
              certificateAttachmentId
              certificationNumber
              expirationDate
              businessName
              visibility
              certificate {
                name
                description
                logoUrl
                verificationMethod
                provider
                providerLink
                duration
                status
              }
              otherCertificate {
                name
                provider
              }
            }
            profileCompleteness {
              personId
              pciActual
              pciDisplay
              pciAction
              pciActionCredit
              pciDateTime
              actionForEmptySection
              skillsCount
              employmentRecordCount
              portraitExists
              overviewExists
              passedTestsCount
              educationRecordCount
              certificatesCount
              otherExperiencesCount
              portfolioCount
              esnCount
              updatedDateTime
            }
            otherExperiences {
              id
              personId
              subject
              description
              active
            }
            educationRecords {
              id
              personId
              institutionName
              standardizedInstitutionId
              areaOfStudy
              standardizedAreaOfStudyId
              degree
              standardizedDegreeId
              startDateTime
              endDateTime
              comment
            }
            employmentRecords {
              id
              personId
              companyName
              jobTitle
              standardizedCompanyId
              standardizedJobTitleId
              role
              startDateTime
              endDateTime
              description
              city
              country
            }
            skills {
              id
              skill
              prettyName
              status
              description
              externalLink
              wikipediaPageId
              freebaseMachineId
              migrateTo
              ctime
              mtime
              rank
              ontologySkill {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                createdDateTime
                modifiedDateTime
                definition
                altLabel
                narrower
                narrowerIds
                broader
                broaderIds
                dependsOn
                dependsOnIds
                splitInto
                splitIntoIds
                mergedInto
                mergedIntoId
                replacedBy
                replacedById
                scopeNote
                externalLink
                exactMatch
                exactMatchIds
                closeMatch
                closeMatchIds
                comment
                attributeLevel
                allowMultipleClient
                allowMultipleFreelancer
                allowOther
                clientQuestion
                clientTip
                freelancerQuestion
                freelancerTip
                advancedClient
                client
                freelancer
                requiredClient
                requiredFreelancer
                otherClientLabel
                otherFreelancerLabel
                presentationMode
                priority
                isRequiredBy
                isRequiredByIds
                legacySkillNid
                prettyName
                legacySkillId
              }
            }
            jobCategories {
              id
              name
              selectedCategories {
                id
                name
              }
            }
            profileAggregates {
              lastWorkedOn
              totalHourlyJobs
              totalFixedJobs
              topRatedStatus
              totalFeedback
              totalEarnings
              adjustedCategoryScores {
                averageCategoryScore
              }
              totalJobs
            }
            specializedProfiles {
              personId
              profileId
              occupationId
              status
              rank
              occupations
              primary
              title
              description
              weblink
            }
            specializedProfilesProjects {
              personId
              profileId
              project {
                id
                title
                description
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                creationDateTime
                categoryId
                videoUrl
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                modificationDateTime
                thumbnailId
                thumbnailOriginalId
                category
                subCategory
              }
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.talentSpecializedProfile
  },

  /**
   * talentSpecializedProfiles
   * @param variables - Operation variables
   * @param variables.personIds - List of user identifiers
   * @param variables.profileIds - List of specialized profile identifiers
   * @returns Types.TalentProfileList | null
   */
  talentSpecializedProfiles: async (
    client: UpworkGraphQLClient,
    variables: { personIds: Array<string>; profileIds: Array<string> }
  ): Promise<Types.TalentProfileList | null> => {
    const queryString = `
      query TalentSpecializedProfiles($personIds: [string]!, $profileIds: [string]!) {
        talentSpecializedProfiles(personIds: $personIds, profileIds: $profileIds) {
          profiles {
            personId
            identity {
              id
              ciphertext
            }
            personalData {
              firstName
              lastName
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              title
              description
              chargeRate {
                rawValue
                currency
                displayValue
              }
              profileUrl
              profileState
              location {
                country
                state
                city
                zip
                timezone
              }
            }
            preferences {
              visibilityLevel
              hideAgencyEarnings
              hideEarnings
              exposeFullName
              clientFeedbackOptional
              contractToHire
            }
            settings {
              provider
              suspended
              disabled
              status
              updatedDateTime
            }
            personAvailability {
              personId
              capacity
              createdDateTime
              availabilityDateTime
              updatedDateTime
              purchasedInvitationBadge {
                active
                maxPrice
                nextRenewalAt
              }
              minHours
              maxHours
              availableDays
            }
            projectList {
              projects {
                id
                title
                description
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                skills
                creationDateTime
                categoryId
                videoUrl
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                modificationDateTime
                developerId
                thumbnailId
                thumbnailOriginalId
                category
                subCategory
              }
              totalProjects
              updatedDateTime
            }
            communityCertificates {
              personId
              certificateAttachmentId
              certificationNumber
              expirationDate
              businessName
              visibility
              certificate {
                name
                description
                logoUrl
                verificationMethod
                provider
                providerLink
                duration
                status
              }
              otherCertificate {
                name
                provider
              }
            }
            profileCompleteness {
              personId
              pciActual
              pciDisplay
              pciAction
              pciActionCredit
              pciDateTime
              actionForEmptySection
              skillsCount
              employmentRecordCount
              portraitExists
              overviewExists
              passedTestsCount
              educationRecordCount
              certificatesCount
              otherExperiencesCount
              portfolioCount
              esnCount
              updatedDateTime
            }
            otherExperiences {
              id
              personId
              subject
              description
              active
            }
            educationRecords {
              id
              personId
              institutionName
              standardizedInstitutionId
              areaOfStudy
              standardizedAreaOfStudyId
              degree
              standardizedDegreeId
              startDateTime
              endDateTime
              comment
            }
            employmentRecords {
              id
              personId
              companyName
              jobTitle
              standardizedCompanyId
              standardizedJobTitleId
              role
              startDateTime
              endDateTime
              description
              city
              country
            }
            skills {
              id
              skill
              prettyName
              status
              description
              externalLink
              wikipediaPageId
              freebaseMachineId
              migrateTo
              ctime
              mtime
              rank
              ontologySkill {
                id
                ontologyId
                type
                entityStatus
                preferredLabel
                createdDateTime
                modifiedDateTime
                definition
                altLabel
                narrower
                narrowerIds
                broader
                broaderIds
                dependsOn
                dependsOnIds
                splitInto
                splitIntoIds
                mergedInto
                mergedIntoId
                replacedBy
                replacedById
                scopeNote
                externalLink
                exactMatch
                exactMatchIds
                closeMatch
                closeMatchIds
                comment
                attributeLevel
                allowMultipleClient
                allowMultipleFreelancer
                allowOther
                clientQuestion
                clientTip
                freelancerQuestion
                freelancerTip
                advancedClient
                client
                freelancer
                requiredClient
                requiredFreelancer
                otherClientLabel
                otherFreelancerLabel
                presentationMode
                priority
                isRequiredBy
                isRequiredByIds
                legacySkillNid
                prettyName
                legacySkillId
              }
            }
            jobCategories {
              id
              name
              selectedCategories {
                id
                name
              }
            }
            profileAggregates {
              lastWorkedOn
              totalHourlyJobs
              totalFixedJobs
              topRatedStatus
              totalFeedback
              totalEarnings
              adjustedCategoryScores {
                averageCategoryScore
              }
              totalJobs
            }
            specializedProfiles {
              personId
              profileId
              occupationId
              status
              rank
              occupations
              primary
              title
              description
              weblink
            }
            specializedProfilesProjects {
              personId
              profileId
              project {
                id
                title
                description
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                creationDateTime
                categoryId
                videoUrl
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                modificationDateTime
                thumbnailId
                thumbnailOriginalId
                category
                subCategory
              }
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.talentSpecializedProfiles
  },

  /**
   * talentWorkHistory
   * @param variables - Operation variables
   * @param variables.filter - Work history filter criteria
   * @returns Types.TalentWorkHistoryConnection | null
   */
  talentWorkHistory: async (
    client: UpworkGraphQLClient,
    variables: { filter?: Types.TalentWorkHistoryFilterInput } = {}
  ): Promise<Types.TalentWorkHistoryConnection | null> => {
    const queryString = `
      query TalentWorkHistory($filter: TalentWorkHistoryFilterInput) {
        talentWorkHistory(filter: $filter) {
          workHistoryList {
            contract {
              id
              startDate
              endDate
              status
              clientTeamId
              title
              terms {
                hourlyRate
                jobType
                stipendAmount
                fixedAmount
              }
              createDate
              clientOrgId
            }
            contractAggregate {
              totalCharge
              hours
            }
            feedback {
              feedbackToFreelancer {
                comment
                response
                score
                feedbackSuppressed
                isPublic
                commentPublic
                point
              }
            }
            opening {
              id
              title
              visibility
            }
          }
          totalCount
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.talentWorkHistory
  },

  /**
   * company
   * @param variables - Operation variables
   * @param variables.id - Company identifier
   * @returns Types.CompanyInfo | null
   */
  company: async (
    client: UpworkGraphQLClient,
    variables: { id: string }
  ): Promise<Types.CompanyInfo | null> => {
    const queryString = `
      query Company($id: String!) {
        company(id: $id) {
          public {
            id
            name
            description
            legacyType
            logoURL
          }
          private {
            id
            name
            description
            legacyType
            logoURL
            contactUser {
              id
              nid
              rid
              name
              firstName
              lastName
              photoUrl
              publicUrl
              email
              location {
                countryName
                cityName
                zip
                timezone
                timezoneName
                street
                stateCode
                offsetToUTC
              }
              freelancerProfile {
                id
                fullName
                firstName
                lastName
                email
              }
              ciphertext
              talentProfile {
                personId
              }
            }
            phone
            displayName
            teamsEnabled
            canHire
            hidden
            includeInStats
            companyName
            country {
              id
              name
              twoLetterAbbreviation
              threeLetterAbbreviation
              region
              phoneCode
              relatedRegion {
                id
                name
              }
              active
              registrationAllowed
            }
            state
            city
            address
            zip
            timezone
            accountingEntity
            billingType
            summary
            paymentVerificationStatus
            paymentVerification {
              status
              paymentVerified
            }
            agencyDetails {
              vetted
              topRatedStatus
              topRatedPlusStatus
            }
            jobPosts {
              totalCount
              edges {
                cursor
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
            jobPostsFilter {
              teamIds
              statuses
              excludeHidden
              fields
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.company
  },

  /**
   * companySelector
   * @returns Types.CompanySelector
   */
  companySelector: async (
    client: UpworkGraphQLClient,
    variables?: Record<string, never>
  ): Promise<Types.CompanySelector> => {
    const queryString = `
      query CompanySelector {
        companySelector {
          items {
            title
            photoUrl
            organizationId
            organizationRid
            organizationType
            organizationLegacyType
            organizationEnterpriseType
            legacyEnterpriseOrganization
            typeTitle
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.companySelector
  },

  /**
   * contractRoom
   * @param variables - Operation variables
   * @param variables.contractId - Contract identifier
   * @returns Types.Room | null
   */
  contractRoom: async (
    client: UpworkGraphQLClient,
    variables: { contractId: string }
  ): Promise<Types.Room | null> => {
    const queryString = `
      query ContractRoom($contractId: String!) {
        contractRoom(contractId: $contractId) {
          id
          roomName
          organization {
            id
            rid
            legacyId
            name
            type
            legacyType
            flag {
              client
              vendor
              agency
              individual
            }
            active
            hidden
            userId
            company {
              id
              name
              description
              legacyType
              logoURL
              contactUser {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              phone
              displayName
              teamsEnabled
              canHire
              hidden
              includeInStats
              companyName
              country {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              state
              city
              address
              zip
              timezone
              accountingEntity
              billingType
              summary
              paymentVerificationStatus
              paymentVerification {
                status
                paymentVerified
              }
              agencyDetails {
                vetted
                topRatedStatus
                topRatedPlusStatus
              }
              jobPosts {
                totalCount
              }
              jobPostsFilter {
                teamIds
                statuses
                excludeHidden
                fields
              }
            }
            photoUrl
            creationDate
            staffs {
              totalCount
              pageInfo {
                endCursor
                hasNextPage
              }
            }
            pagination {
              after
              first
            }
            userPermissions {
              offset
            }
            filter {
              userId
              resourceType_eq
              limit
              offset
              performExternalChecks_eq
              teamOrgIds_any
              returnAllTeams
            }
            agencyOffers {
              totalCount
              edges {
                cursor
              }
            }
            offerByRootCompanyFilter {
              freelancerId_any
              agencyTeamOrgId_any
              clientOrgId_any
              commonFilter {
                text_eq
                states_any
                startDatePeriod_bt
                endDatePeriod_bt
                catalogProject
              }
            }
            offerByClientFilter {
              teamId_any
              contactPersonId_any
              offerType_any
              milestoneState_any
              escrowRefundStatus_any
              freelancerId_any
              agreementKind_any
            }
            clientTimeReport {
              dateWorkedOn
              weekWorkedOn
              monthWorkedOn
              yearWorkedOn
              team {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              contractOffer {
                id
                startDateTime
                endDateTime
                type
                state
                milestoneState
                escrowRefundStatus
                title
                lastUpdatedDateTime
                lastPublishedDateTime
                inPrivateTalentCloud
                offerCreatedDateTime
                catalogProject
              }
              contract {
                id
                title
                status
                deliveryModel
                kind
                isPtc
                createDate
                modifyDate
                startDate
                endDate
                offerId
                changingUserType
                projectId
              }
              termId
              task
              taskDescription
              memo
              totalHoursWorked
              totalCharges
              totalOnlineHoursWorked
              totalOnlineCharge
              totalOfflineHoursWorked
              totalOfflineCharge
              billRate {
                id
                value
                code
                offerRef
              }
            }
            timeReportDate_bt {
              rangeStart
              rangeEnd
            }
            clientContractTimeReport {
              totalCount
              edges {
                cursor
              }
            }
            privateTalentClouds {
              id
              name
              joinInstructions
              welcomeMessageToAddedFreelancers
              joinRequestAutoApproved
              messageAfterJoinRequest
              joinRejectionMessage
              externalName
              active
              logoImageLarge {
                name
                uri
                encoding
                size
                createdDateTime
              }
              description
              onboardingTaskEnabled
              onboardingTaskEnableUpdatedDateTime
              selectable
            }
            jobPostingFilter {
              title_eq
              postByTeamIds_any
              postByPersonIds_any
              statusAndAccess_any {
                statuses_any
                accesses_any
              }
              excludePostByPersonIds_any
              categoryGroupIds_any
              contractType_eq
              createdDateTimeFrom_eq
              createdDateTimeTo_eq
            }
          }
          creator {
            role
          }
          createdAtDateTime
          public
          topic
          numUnread
          roomFavoriteDateTime
          favorite
          numUnreadMentions
          numUsers
          joinDateTime
          lastVisitedDateTime
          lastReadDateTime
          roomType
          readOnlyDateTime
          readOnly
          blockDateTime
          hidden
          muted
          contractId
          contract {
            id
            title
            contractType
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            hasAgency
            offer {
              id
              title
              description
              type
              vendorProposal {
                id
                coverLetter
                proposalCoverLetter
                annotations
              }
              closeJobPostingOnAccept
              offerTerms {
                expectedStartDate
                expectedEndDate
              }
              messageToContractor
              state
              offerFeatures {
                onSiteType
                state
                localDescription
                localFlexibilityDescription
                eor
              }
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
              }
              milestones {
                id
                dueDateTime
                state
                description
                submissionCount
                sequenceId
                payComments
                lastSubmissionCreatedTime
                createdDateTime
                modifiedDateTime
                instructions
              }
              createdUsingBYOFlow
              freelancer {
                id
                fullName
                firstName
                lastName
                email
              }
              payrollOffer
              deliveryModel
              organizationIds
            }
            clientProposal {
              id
              terms {
                upfrontPaymentPercent
              }
              coverLetter
              projectPlan {
                id
              }
              auditDetails {
                createdDateTime
                modifiedDateTime
              }
              status {
                status
              }
              annotations
            }
            weeklyChargeAmount {
              rawValue
              currency
              displayValue
            }
            weeklyHoursLimit
            createdDateTime
            firstContractStartDateTime
            modifiedDateTime
            startDateTime
            endDateTime
            manualTimeAllowed
            hideScreenshots
            last
            weeklyStipendHours
            estimatedDuration {
              id
              label
            }
            status
            suspended
            paused
            contractId
            workDays {
              date
            }
            workDiaryTimeCells {
              cellDateTime
              snapshotDateTime
              overtime
              manual
              activityLevel
              memo
              task {
                id
                description
              }
              mouseEventsCount
              keyboardEventsCount
              activeWindowTitle
              hideScreenshots
              hasScreenshot
              screenshotImageUrl
              screenshotImageUrlMedium
              screenshotImageThumbnail
              webcamEnabled
              webcamImageUrl
              webcamImageThumbnail
              snapshotExpired
            }
            date
            feedback {
              clientFeedback {
                score
                comment
                freelancerResponse
              }
              freelancerFeedback {
                score
                comment
                clientResponse
                recommendScore
              }
            }
          }
          roomNote
          roomNotePresent
          offerIds
          latestStory {
            id
            createdDateTime
            updatedDateTime
            message
            roomStoryNote {
              favorite
              abuseType
              whitelisted
              abuseDetails
            }
            attachments {
              objectReferenceId
              objectType
              metadata {
                key
                value
              }
              createdDateTime
            }
          }
          stories {
            totalCount
            edges {
              cursor
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.contractRoom
  },

  /**
   * freelancerProfileByProfileKey
   * @param variables - Operation variables
   * @param variables.profileKey - Public profile key
   * @returns Types.FreelancerProfile
   */
  freelancerProfileByProfileKey: async (
    client: UpworkGraphQLClient,
    variables: { profileKey: string }
  ): Promise<Types.FreelancerProfile> => {
    const queryString = `
      query FreelancerProfileByProfileKey($profileKey: String!) {
        freelancerProfileByProfileKey(profileKey: $profileKey) {
          user {
            id
            nid
            rid
            email
            name
            userPermissions {
              offset
            }
            filter {
              resourceType_eq
              limit
              offset
              performExternalChecks_eq
              teamOrgIds_any
              returnAllTeams
              returnFirstGrantedResult_eq
            }
            photoUrl
            offer {
              totalCount
              edges {
                cursor
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
            offerForFreelancerFilter {
              agencyRootCompanyOrgId_any
              agencyTeamOrgId_any
              clientOrgId_any
              commonFilter {
                text_eq
                states_any
                startDatePeriod_bt
                endDatePeriod_bt
                catalogProject
              }
            }
            timeReport {
              dateWorkedOn
              weekWorkedOn
              monthWorkedOn
              yearWorkedOn
              freelancer {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              team {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              contractOffer {
                id
                startDateTime
                endDateTime
                type
                state
                milestoneState
                escrowRefundStatus
                title
                lastUpdatedDateTime
                lastPublishedDateTime
                inPrivateTalentCloud
                offerCreatedDateTime
                catalogProject
              }
              contract {
                id
                title
                status
                deliveryModel
                kind
                isPtc
                createDate
                modifyDate
                startDate
                endDate
                offerId
                changingUserType
                projectId
              }
              termId
              task
              taskDescription
              memo
              totalHoursWorked
              totalCharges
              totalOnlineHoursWorked
              totalOnlineCharge
              totalOfflineHoursWorked
              totalOfflineCharge
              billRate {
                id
                value
                code
                offerRef
              }
            }
            timeReportDate_bt {
              rangeStart
              rangeEnd
            }
            contractTimeReport {
              totalCount
              edges {
                cursor
              }
            }
            ciphertext
            i18NSettings {
              countrySupported
              status
              locationViewType
              userPreferredLocationType
              settingsFlags {
                showDomesticLocationFilterOnFLSearch
                showJobSearch
                showPhoneVerification
                showSmfToUpdateAddress
                showPersonalAddressAutocomplete
                showMessageContainer
                showLocationPreferenceOnJobPost
                defaultDomesticEnabled
                jobSearchDefaultedToON
                showLocationVerificationOnFWH
                domesticEnabledForFreelancersOnFLSearch
              }
            }
            companyReferencedId
            talentProfile {
              personId
              identity {
                id
                ciphertext
              }
              personalData {
                firstName
                lastName
                title
                description
                profileUrl
                profileState
              }
              preferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                contractToHire
              }
              settings {
                provider
                suspended
                disabled
                status
                updatedDateTime
              }
              personAvailability {
                personId
                capacity
                createdDateTime
                availabilityDateTime
                updatedDateTime
                minHours
                maxHours
                availableDays
              }
              projectList {
                totalProjects
                updatedDateTime
              }
              communityCertificates {
                personId
                certificateAttachmentId
                certificationNumber
                expirationDate
                businessName
                visibility
              }
              profileCompleteness {
                personId
                pciActual
                pciDisplay
                pciAction
                pciActionCredit
                pciDateTime
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitExists
                overviewExists
                passedTestsCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                esnCount
                updatedDateTime
              }
              otherExperiences {
                id
                personId
                subject
                description
                active
              }
              educationRecords {
                id
                personId
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDateTime
                endDateTime
                comment
              }
              employmentRecords {
                id
                personId
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDateTime
                endDateTime
                description
                city
                country
              }
              skills {
                id
                skill
                prettyName
                status
                description
                externalLink
                wikipediaPageId
                freebaseMachineId
                migrateTo
                ctime
                mtime
                rank
              }
              jobCategories {
                id
                name
              }
              profileAggregates {
                lastWorkedOn
                totalHourlyJobs
                totalFixedJobs
                topRatedStatus
                totalFeedback
                totalEarnings
                totalJobs
              }
              specializedProfiles {
                personId
                profileId
                occupationId
                status
                rank
                occupations
                primary
                title
                description
                weblink
              }
              specializedProfilesProjects {
                personId
                profileId
              }
            }
          }
          personalData {
            firstName
            lastName
            portrait {
              portrait
              portrait32
              portrait50
              portrait100
              portrait150
              portrait500
            }
            title
            description
            address {
              countryName
              cityName
              zip
              timezone
              street
            }
            chargeRate {
              rawValue
              currency
              displayValue
            }
            workPhone
            profileUrl
            profileState
          }
          userPreferences {
            visibilityLevel
            hideAgencyEarnings
            hideEarnings
            exposeFullName
            clientFeedbackOptional
            projectTypePreference
            hideJss
          }
          otherExperiences {
            totalCount
            edges {
              node {
                id
                subject
                description
                active
                createdDateTime
                updatedDateTime
              }
              cursor
            }
          }
          filter {
            subject_eq
          }
          languages {
            edges {
              node {
                id
                verified
                verifiedByCertificate
                verifiedByFeedback
              }
            }
          }
          educationRecords {
            id
            institutionName
            standardizedInstitutionId
            areaOfStudy
            standardizedAreaOfStudyId
            degree
            standardizedDegreeId
            startDate
            endDate
            description
          }
          certificates {
            id
            earnedDate
            submissionCode
            notes
            score
            active
            verified
            url
            createdDateTime
            lastUpdatedDateTime
            expirationDate
            externalId
          }
          employmentRecords {
            id
            companyName
            jobTitle
            standardizedCompanyId
            standardizedJobTitleId
            role
            startDate
            endDate
            description
            city
            country
          }
          availability {
            id
            capacity
            availabilityDateTime
            name
            createdDateTime
          }
          committedResponseTime {
            id
            committedResponseTime
            name
            createdDateTime
            updatedDateTime
          }
          project {
            id
            title
            description
            contractLink {
              id
              contract {
                id
                description
                title
                type
                accessType
                private
                startDateTime
                endDateTime
                totalHours
                isFromElance
              }
              state
              notificationDateTime
              createdDateTime
            }
            thumbnailId
            thumbnailOriginalId
            thumbnail
            thumbnailOriginal
            projectUrl
            completionDateTime
            public
            rank
            attachments {
              id
              link
              fileName
              fileSize
              rank
              videoUrl
              type
              title
              description
              imageSmall
              imageMiddle
              imageLarge
            }
            category {
              id
              ontologyId
              type
              entityStatus
              preferredLabel
              definition
              createdDateTime
              modifiedDateTime
            }
            occupationId
            projectType
            role
            projectGoal
            solution
            primaryImageId
            createdDateTime
          }
          id
          aggregates {
            lastWorkedDateTime
            lastApplicationDate
            totalHourlyJobs
            totalHourlyJobsRecent
            totalFixedJobs
            totalFixedJobsRecent
            responsiveness
            activeInterviews
            currentContracts
            jobSuccessScore
            topRatedStatus
            topRatedPlusStatus
            vetted
            totalHoursActual
            totalHours
            totalHoursRecent
            totalFeedback
            totalFeedbackRecent
            billedContracts
            billedContractsRecent
            adjustedFeedbackScore
            adjustedFeedbackScoreRecent
            profileStats {
              adjustedScore360
              longTermClients
              suspensions
              suspensions360
              suspensions90limited
              topLevelJobCategoryApplied90Days
              proposalsCount90Days
              medianProposalsForTheTopLevelCategory365
              fitProposalsViewRatio90Days
              hiddenProposalsViewedRatio90Days
              totalProposalsViewedRatio90Days
              proposalInterviewedRation90Days
              proposalsHiredRatio90Days
              hideReasonsForProposals
              totalInvites90Days
              totalInviteResponses90Days
              inviteResponsesPerDay90Days
              weeksEligibleWithin16wks
            }
            lastActivityDateTime
            topRatedStatusDatetime
            qualityScore
            totalHoursRounded
          }
          profileCompletenessSummary {
            actual
            display
            action
            actionCredit
            actionForEmptySection
            skillsCount
            employmentRecordCount
            portraitRecordCount
            overviewRecordCount
            videoRecordCount
            educationRecordCount
            certificatesCount
            otherExperiencesCount
            portfolioCount
            linkedExternalAccountsCount
            createdDateTime
          }
          linkedExternalAccountsList {
            edges {
              node {
                id
                name
                expiryDateTime
                revokedDateTime
                authorizedDateTime
                userProfile
              }
            }
          }
          verifications {
            idVerified
            phoneVerified
            webcamVerified
            idBadgeStatus
          }
          fullName
          firstName
          lastName
          countryDetails {
            id
            name
            twoLetterAbbreviation
            threeLetterAbbreviation
            region
            phoneCode
            relatedRegion {
              id
              name
            }
            active
            registrationAllowed
          }
          email
          phoneNumber {
            code
            number
          }
          privateTalentCloud {
            totalCount
            edges {
              cursor
              node {
                id
                name
                joinInstructions
                welcomeMessageToAddedFreelancers
                joinRequestAutoApproved
                messageAfterJoinRequest
                joinRejectionMessage
                externalName
                active
                description
                onboardingTaskEnabled
                onboardingTaskEnableUpdatedDateTime
                selectable
              }
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.freelancerProfileByProfileKey
  },

  /**
   * freelancerVisibility
   * @param variables - Operation variables
   * @param variables.id - Freelancer user identifier
   * @returns Types.FreelancerVisibility | null
   */
  freelancerVisibility: async (
    client: UpworkGraphQLClient,
    variables: { id?: string } = {}
  ): Promise<Types.FreelancerVisibility | null> => {
    const queryString = `
      query FreelancerVisibility($id: String) {
        freelancerVisibility(id: $id) {
          locked
          risky
          currentVisibility
          originalVisibility
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.freelancerVisibility
  },

  /**
   * offerRoom
   * @param variables - Operation variables
   * @param variables.offerId - Offer identifier
   * @returns Types.Room | null
   */
  offerRoom: async (
    client: UpworkGraphQLClient,
    variables: { offerId: string }
  ): Promise<Types.Room | null> => {
    const queryString = `
      query OfferRoom($offerId: String!) {
        offerRoom(offerId: $offerId) {
          id
          roomName
          organization {
            id
            rid
            legacyId
            name
            type
            legacyType
            flag {
              client
              vendor
              agency
              individual
            }
            active
            hidden
            userId
            company {
              id
              name
              description
              legacyType
              logoURL
              contactUser {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              phone
              displayName
              teamsEnabled
              canHire
              hidden
              includeInStats
              companyName
              country {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              state
              city
              address
              zip
              timezone
              accountingEntity
              billingType
              summary
              paymentVerificationStatus
              paymentVerification {
                status
                paymentVerified
              }
              agencyDetails {
                vetted
                topRatedStatus
                topRatedPlusStatus
              }
              jobPosts {
                totalCount
              }
              jobPostsFilter {
                teamIds
                statuses
                excludeHidden
                fields
              }
            }
            photoUrl
            creationDate
            staffs {
              totalCount
              pageInfo {
                endCursor
                hasNextPage
              }
            }
            pagination {
              after
              first
            }
            userPermissions {
              offset
            }
            filter {
              userId
              resourceType_eq
              limit
              offset
              performExternalChecks_eq
              teamOrgIds_any
              returnAllTeams
            }
            agencyOffers {
              totalCount
              edges {
                cursor
              }
            }
            offerByRootCompanyFilter {
              freelancerId_any
              agencyTeamOrgId_any
              clientOrgId_any
              commonFilter {
                text_eq
                states_any
                startDatePeriod_bt
                endDatePeriod_bt
                catalogProject
              }
            }
            offerByClientFilter {
              teamId_any
              contactPersonId_any
              offerType_any
              milestoneState_any
              escrowRefundStatus_any
              freelancerId_any
              agreementKind_any
            }
            clientTimeReport {
              dateWorkedOn
              weekWorkedOn
              monthWorkedOn
              yearWorkedOn
              team {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              contractOffer {
                id
                startDateTime
                endDateTime
                type
                state
                milestoneState
                escrowRefundStatus
                title
                lastUpdatedDateTime
                lastPublishedDateTime
                inPrivateTalentCloud
                offerCreatedDateTime
                catalogProject
              }
              contract {
                id
                title
                status
                deliveryModel
                kind
                isPtc
                createDate
                modifyDate
                startDate
                endDate
                offerId
                changingUserType
                projectId
              }
              termId
              task
              taskDescription
              memo
              totalHoursWorked
              totalCharges
              totalOnlineHoursWorked
              totalOnlineCharge
              totalOfflineHoursWorked
              totalOfflineCharge
              billRate {
                id
                value
                code
                offerRef
              }
            }
            timeReportDate_bt {
              rangeStart
              rangeEnd
            }
            clientContractTimeReport {
              totalCount
              edges {
                cursor
              }
            }
            privateTalentClouds {
              id
              name
              joinInstructions
              welcomeMessageToAddedFreelancers
              joinRequestAutoApproved
              messageAfterJoinRequest
              joinRejectionMessage
              externalName
              active
              logoImageLarge {
                name
                uri
                encoding
                size
                createdDateTime
              }
              description
              onboardingTaskEnabled
              onboardingTaskEnableUpdatedDateTime
              selectable
            }
            jobPostingFilter {
              title_eq
              postByTeamIds_any
              postByPersonIds_any
              statusAndAccess_any {
                statuses_any
                accesses_any
              }
              excludePostByPersonIds_any
              categoryGroupIds_any
              contractType_eq
              createdDateTimeFrom_eq
              createdDateTimeTo_eq
            }
          }
          creator {
            role
          }
          createdAtDateTime
          public
          topic
          numUnread
          roomFavoriteDateTime
          favorite
          numUnreadMentions
          numUsers
          joinDateTime
          lastVisitedDateTime
          lastReadDateTime
          roomType
          readOnlyDateTime
          readOnly
          blockDateTime
          hidden
          muted
          contractId
          contract {
            id
            title
            contractType
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            hasAgency
            offer {
              id
              title
              description
              type
              vendorProposal {
                id
                coverLetter
                proposalCoverLetter
                annotations
              }
              closeJobPostingOnAccept
              offerTerms {
                expectedStartDate
                expectedEndDate
              }
              messageToContractor
              state
              offerFeatures {
                onSiteType
                state
                localDescription
                localFlexibilityDescription
                eor
              }
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
              }
              milestones {
                id
                dueDateTime
                state
                description
                submissionCount
                sequenceId
                payComments
                lastSubmissionCreatedTime
                createdDateTime
                modifiedDateTime
                instructions
              }
              createdUsingBYOFlow
              freelancer {
                id
                fullName
                firstName
                lastName
                email
              }
              payrollOffer
              deliveryModel
              organizationIds
            }
            clientProposal {
              id
              terms {
                upfrontPaymentPercent
              }
              coverLetter
              projectPlan {
                id
              }
              auditDetails {
                createdDateTime
                modifiedDateTime
              }
              status {
                status
              }
              annotations
            }
            weeklyChargeAmount {
              rawValue
              currency
              displayValue
            }
            weeklyHoursLimit
            createdDateTime
            firstContractStartDateTime
            modifiedDateTime
            startDateTime
            endDateTime
            manualTimeAllowed
            hideScreenshots
            last
            weeklyStipendHours
            estimatedDuration {
              id
              label
            }
            status
            suspended
            paused
            contractId
            workDays {
              date
            }
            workDiaryTimeCells {
              cellDateTime
              snapshotDateTime
              overtime
              manual
              activityLevel
              memo
              task {
                id
                description
              }
              mouseEventsCount
              keyboardEventsCount
              activeWindowTitle
              hideScreenshots
              hasScreenshot
              screenshotImageUrl
              screenshotImageUrlMedium
              screenshotImageThumbnail
              webcamEnabled
              webcamImageUrl
              webcamImageThumbnail
              snapshotExpired
            }
            date
            feedback {
              clientFeedback {
                score
                comment
                freelancerResponse
              }
              freelancerFeedback {
                score
                comment
                clientResponse
                recommendScore
              }
            }
          }
          roomNote
          roomNotePresent
          offerIds
          latestStory {
            id
            createdDateTime
            updatedDateTime
            message
            roomStoryNote {
              favorite
              abuseType
              whitelisted
              abuseDetails
            }
            attachments {
              objectReferenceId
              objectType
              metadata {
                key
                value
              }
              createdDateTime
            }
          }
          stories {
            totalCount
            edges {
              cursor
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.offerRoom
  },

  /**
   * oneOnOneRoom
   * @param variables - Operation variables
   * @param variables.userId - Target user identifier
   * @param variables.organizationId - Organization identifier
   * @returns Types.Room | null
   */
  oneOnOneRoom: async (
    client: UpworkGraphQLClient,
    variables: { userId: string; organizationId: string }
  ): Promise<Types.Room | null> => {
    const queryString = `
      query OneOnOneRoom($userId: String!, $organizationId: String!) {
        oneOnOneRoom(userId: $userId, organizationId: $organizationId) {
          id
          roomName
          organization {
            id
            rid
            legacyId
            name
            type
            legacyType
            flag {
              client
              vendor
              agency
              individual
            }
            active
            hidden
            userId
            company {
              id
              name
              description
              legacyType
              logoURL
              contactUser {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              phone
              displayName
              teamsEnabled
              canHire
              hidden
              includeInStats
              companyName
              country {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              state
              city
              address
              zip
              timezone
              accountingEntity
              billingType
              summary
              paymentVerificationStatus
              paymentVerification {
                status
                paymentVerified
              }
              agencyDetails {
                vetted
                topRatedStatus
                topRatedPlusStatus
              }
              jobPosts {
                totalCount
              }
              jobPostsFilter {
                teamIds
                statuses
                excludeHidden
                fields
              }
            }
            photoUrl
            creationDate
            staffs {
              totalCount
              pageInfo {
                endCursor
                hasNextPage
              }
            }
            pagination {
              after
              first
            }
            userPermissions {
              offset
            }
            filter {
              userId
              resourceType_eq
              limit
              offset
              performExternalChecks_eq
              teamOrgIds_any
              returnAllTeams
            }
            agencyOffers {
              totalCount
              edges {
                cursor
              }
            }
            offerByRootCompanyFilter {
              freelancerId_any
              agencyTeamOrgId_any
              clientOrgId_any
              commonFilter {
                text_eq
                states_any
                startDatePeriod_bt
                endDatePeriod_bt
                catalogProject
              }
            }
            offerByClientFilter {
              teamId_any
              contactPersonId_any
              offerType_any
              milestoneState_any
              escrowRefundStatus_any
              freelancerId_any
              agreementKind_any
            }
            clientTimeReport {
              dateWorkedOn
              weekWorkedOn
              monthWorkedOn
              yearWorkedOn
              team {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              contractOffer {
                id
                startDateTime
                endDateTime
                type
                state
                milestoneState
                escrowRefundStatus
                title
                lastUpdatedDateTime
                lastPublishedDateTime
                inPrivateTalentCloud
                offerCreatedDateTime
                catalogProject
              }
              contract {
                id
                title
                status
                deliveryModel
                kind
                isPtc
                createDate
                modifyDate
                startDate
                endDate
                offerId
                changingUserType
                projectId
              }
              termId
              task
              taskDescription
              memo
              totalHoursWorked
              totalCharges
              totalOnlineHoursWorked
              totalOnlineCharge
              totalOfflineHoursWorked
              totalOfflineCharge
              billRate {
                id
                value
                code
                offerRef
              }
            }
            timeReportDate_bt {
              rangeStart
              rangeEnd
            }
            clientContractTimeReport {
              totalCount
              edges {
                cursor
              }
            }
            privateTalentClouds {
              id
              name
              joinInstructions
              welcomeMessageToAddedFreelancers
              joinRequestAutoApproved
              messageAfterJoinRequest
              joinRejectionMessage
              externalName
              active
              logoImageLarge {
                name
                uri
                encoding
                size
                createdDateTime
              }
              description
              onboardingTaskEnabled
              onboardingTaskEnableUpdatedDateTime
              selectable
            }
            jobPostingFilter {
              title_eq
              postByTeamIds_any
              postByPersonIds_any
              statusAndAccess_any {
                statuses_any
                accesses_any
              }
              excludePostByPersonIds_any
              categoryGroupIds_any
              contractType_eq
              createdDateTimeFrom_eq
              createdDateTimeTo_eq
            }
          }
          creator {
            role
          }
          createdAtDateTime
          public
          topic
          numUnread
          roomFavoriteDateTime
          favorite
          numUnreadMentions
          numUsers
          joinDateTime
          lastVisitedDateTime
          lastReadDateTime
          roomType
          readOnlyDateTime
          readOnly
          blockDateTime
          hidden
          muted
          contractId
          contract {
            id
            title
            contractType
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            hasAgency
            offer {
              id
              title
              description
              type
              vendorProposal {
                id
                coverLetter
                proposalCoverLetter
                annotations
              }
              closeJobPostingOnAccept
              offerTerms {
                expectedStartDate
                expectedEndDate
              }
              messageToContractor
              state
              offerFeatures {
                onSiteType
                state
                localDescription
                localFlexibilityDescription
                eor
              }
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
              }
              milestones {
                id
                dueDateTime
                state
                description
                submissionCount
                sequenceId
                payComments
                lastSubmissionCreatedTime
                createdDateTime
                modifiedDateTime
                instructions
              }
              createdUsingBYOFlow
              freelancer {
                id
                fullName
                firstName
                lastName
                email
              }
              payrollOffer
              deliveryModel
              organizationIds
            }
            clientProposal {
              id
              terms {
                upfrontPaymentPercent
              }
              coverLetter
              projectPlan {
                id
              }
              auditDetails {
                createdDateTime
                modifiedDateTime
              }
              status {
                status
              }
              annotations
            }
            weeklyChargeAmount {
              rawValue
              currency
              displayValue
            }
            weeklyHoursLimit
            createdDateTime
            firstContractStartDateTime
            modifiedDateTime
            startDateTime
            endDateTime
            manualTimeAllowed
            hideScreenshots
            last
            weeklyStipendHours
            estimatedDuration {
              id
              label
            }
            status
            suspended
            paused
            contractId
            workDays {
              date
            }
            workDiaryTimeCells {
              cellDateTime
              snapshotDateTime
              overtime
              manual
              activityLevel
              memo
              task {
                id
                description
              }
              mouseEventsCount
              keyboardEventsCount
              activeWindowTitle
              hideScreenshots
              hasScreenshot
              screenshotImageUrl
              screenshotImageUrlMedium
              screenshotImageThumbnail
              webcamEnabled
              webcamImageUrl
              webcamImageThumbnail
              snapshotExpired
            }
            date
            feedback {
              clientFeedback {
                score
                comment
                freelancerResponse
              }
              freelancerFeedback {
                score
                comment
                clientResponse
                recommendScore
              }
            }
          }
          roomNote
          roomNotePresent
          offerIds
          latestStory {
            id
            createdDateTime
            updatedDateTime
            message
            roomStoryNote {
              favorite
              abuseType
              whitelisted
              abuseDetails
            }
            attachments {
              objectReferenceId
              objectType
              metadata {
                key
                value
              }
              createdDateTime
            }
          }
          stories {
            totalCount
            edges {
              cursor
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.oneOnOneRoom
  },

  /**
   * organization
   * @returns Types.CurrentOrganization | null
   */
  organization: async (
    client: UpworkGraphQLClient,
    variables?: Record<string, never>
  ): Promise<Types.CurrentOrganization | null> => {
    const queryString = `
      query Organization {
        organization {
          id
          rid
          legacyId
          name
          type
          legacyType
          flag {
            client
            vendor
            agency
            individual
          }
          active
          hidden
          userId
          company {
            id
            name
            description
            legacyType
            logoURL
            contactUser {
              id
              nid
              rid
              name
              firstName
              lastName
              photoUrl
              publicUrl
              email
              location {
                countryName
                cityName
                zip
                timezone
                timezoneName
                street
                stateCode
                offsetToUTC
              }
              freelancerProfile {
                id
                fullName
                firstName
                lastName
                email
              }
              ciphertext
              talentProfile {
                personId
              }
            }
            phone
            displayName
            teamsEnabled
            canHire
            hidden
            includeInStats
            companyName
            country {
              id
              name
              twoLetterAbbreviation
              threeLetterAbbreviation
              region
              phoneCode
              relatedRegion {
                id
                name
              }
              active
              registrationAllowed
            }
            state
            city
            address
            zip
            timezone
            accountingEntity
            billingType
            summary
            paymentVerificationStatus
            paymentVerification {
              status
              paymentVerified
            }
            agencyDetails {
              vetted
              topRatedStatus
              topRatedPlusStatus
            }
            jobPosts {
              totalCount
              edges {
                cursor
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
            jobPostsFilter {
              teamIds
              statuses
              excludeHidden
              fields
            }
          }
          photoUrl
          creationDate
          staffs {
            edges {
              node {
                id
                activationStatus
                creationDate
                staffType
              }
            }
            totalCount
          }
          pagination {
            after
            first
          }
          userPermissions {
            edges {
              node {
                action
                access
                reason
              }
            }
            offset
          }
          filter {
            userId
            resourceType_eq
            limit
            offset
            performExternalChecks_eq
            teamOrgIds_any
            returnAllTeams
          }
          agencyOffers {
            totalCount
            edges {
              cursor
              node {
                id
                startDateTime
                endDateTime
                type
                state
                milestoneState
                escrowRefundStatus
                title
                lastUpdatedDateTime
                lastPublishedDateTime
                inPrivateTalentCloud
                offerCreatedDateTime
                catalogProject
              }
            }
          }
          offerByRootCompanyFilter {
            freelancerId_any
            agencyTeamOrgId_any
            clientOrgId_any
            commonFilter {
              text_eq
              states_any
              startDatePeriod_bt
              endDatePeriod_bt
              catalogProject
            }
          }
          offerByClientFilter {
            teamId_any
            contactPersonId_any
            offerType_any
            milestoneState_any
            escrowRefundStatus_any
            freelancerId_any
            agreementKind_any
          }
          clientTimeReport {
            dateWorkedOn
            weekWorkedOn
            monthWorkedOn
            yearWorkedOn
            team {
              id
              rid
              legacyId
              name
              type
              legacyType
              active
              hidden
              photoUrl
              creationDate
              jobPostingFilter {
                title_eq
                postByTeamIds_any
                postByPersonIds_any
                excludePostByPersonIds_any
                categoryGroupIds_any
                contractType_eq
                createdDateTimeFrom_eq
                createdDateTimeTo_eq
              }
            }
            contract {
              id
              title
              status
              closingReason {
                id
                apiRef
                reason
              }
              deliveryModel
              kind
              isPtc
              createDate
              modifyDate
              startDate
              endDate
              offer {
                id
                title
                description
                type
                closeJobPostingOnAccept
                messageToContractor
                state
                createdUsingBYOFlow
                payrollOffer
                deliveryModel
                organizationIds
              }
              offerId
              job {
                id
                version
                visibility
              }
              freelancer {
                id
                rid
                name
                photoUrl
                firstName
                lastName
                email
              }
              changingUserType
              metadata {
                agencyContract
              }
              hourlyLimits {
                id
                weeklyLimit
                createDate
                modifyDate
                startDate
                endDate
                legacyId
              }
              projectId
            }
            termId
            task
            taskDescription
            memo
            totalHoursWorked
            totalCharges
            totalOnlineHoursWorked
            totalOnlineCharge
            totalOfflineHoursWorked
            totalOfflineCharge
            billRate {
              id
              value
              code
              offerRef
            }
          }
          timeReportDate_bt {
            rangeStart
            rangeEnd
          }
          clientContractTimeReport {
            totalCount
            edges {
              cursor
            }
          }
          privateTalentClouds {
            id
            name
            joinInstructions
            welcomeMessageToAddedFreelancers
            joinRequestAutoApproved
            messageAfterJoinRequest
            joinRejectionMessage
            externalName
            active
            logoImageLarge {
              name
              uri
              encoding
              size
              createdDateTime
            }
            description
            onboardingTaskEnabled
            onboardingTaskEnableUpdatedDateTime
            selectable
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.organization
  },

  /**
   * proposalRoom
   * @param variables - Operation variables
   * @param variables.vendorProposalId - Vendor proposal identifier
   * @returns Types.Room
   */
  proposalRoom: async (
    client: UpworkGraphQLClient,
    variables: { vendorProposalId: string }
  ): Promise<Types.Room> => {
    const queryString = `
      query ProposalRoom($vendorProposalId: String!) {
        proposalRoom(vendorProposalId: $vendorProposalId) {
          id
          roomName
          organization {
            id
            rid
            legacyId
            name
            type
            legacyType
            flag {
              client
              vendor
              agency
              individual
            }
            active
            hidden
            userId
            company {
              id
              name
              description
              legacyType
              logoURL
              contactUser {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              phone
              displayName
              teamsEnabled
              canHire
              hidden
              includeInStats
              companyName
              country {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              state
              city
              address
              zip
              timezone
              accountingEntity
              billingType
              summary
              paymentVerificationStatus
              paymentVerification {
                status
                paymentVerified
              }
              agencyDetails {
                vetted
                topRatedStatus
                topRatedPlusStatus
              }
              jobPosts {
                totalCount
              }
              jobPostsFilter {
                teamIds
                statuses
                excludeHidden
                fields
              }
            }
            photoUrl
            creationDate
            staffs {
              totalCount
              pageInfo {
                endCursor
                hasNextPage
              }
            }
            pagination {
              after
              first
            }
            userPermissions {
              offset
            }
            filter {
              userId
              resourceType_eq
              limit
              offset
              performExternalChecks_eq
              teamOrgIds_any
              returnAllTeams
            }
            agencyOffers {
              totalCount
              edges {
                cursor
              }
            }
            offerByRootCompanyFilter {
              freelancerId_any
              agencyTeamOrgId_any
              clientOrgId_any
              commonFilter {
                text_eq
                states_any
                startDatePeriod_bt
                endDatePeriod_bt
                catalogProject
              }
            }
            offerByClientFilter {
              teamId_any
              contactPersonId_any
              offerType_any
              milestoneState_any
              escrowRefundStatus_any
              freelancerId_any
              agreementKind_any
            }
            clientTimeReport {
              dateWorkedOn
              weekWorkedOn
              monthWorkedOn
              yearWorkedOn
              team {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              contractOffer {
                id
                startDateTime
                endDateTime
                type
                state
                milestoneState
                escrowRefundStatus
                title
                lastUpdatedDateTime
                lastPublishedDateTime
                inPrivateTalentCloud
                offerCreatedDateTime
                catalogProject
              }
              contract {
                id
                title
                status
                deliveryModel
                kind
                isPtc
                createDate
                modifyDate
                startDate
                endDate
                offerId
                changingUserType
                projectId
              }
              termId
              task
              taskDescription
              memo
              totalHoursWorked
              totalCharges
              totalOnlineHoursWorked
              totalOnlineCharge
              totalOfflineHoursWorked
              totalOfflineCharge
              billRate {
                id
                value
                code
                offerRef
              }
            }
            timeReportDate_bt {
              rangeStart
              rangeEnd
            }
            clientContractTimeReport {
              totalCount
              edges {
                cursor
              }
            }
            privateTalentClouds {
              id
              name
              joinInstructions
              welcomeMessageToAddedFreelancers
              joinRequestAutoApproved
              messageAfterJoinRequest
              joinRejectionMessage
              externalName
              active
              logoImageLarge {
                name
                uri
                encoding
                size
                createdDateTime
              }
              description
              onboardingTaskEnabled
              onboardingTaskEnableUpdatedDateTime
              selectable
            }
            jobPostingFilter {
              title_eq
              postByTeamIds_any
              postByPersonIds_any
              statusAndAccess_any {
                statuses_any
                accesses_any
              }
              excludePostByPersonIds_any
              categoryGroupIds_any
              contractType_eq
              createdDateTimeFrom_eq
              createdDateTimeTo_eq
            }
          }
          creator {
            role
          }
          createdAtDateTime
          public
          topic
          numUnread
          roomFavoriteDateTime
          favorite
          numUnreadMentions
          numUsers
          joinDateTime
          lastVisitedDateTime
          lastReadDateTime
          roomType
          readOnlyDateTime
          readOnly
          blockDateTime
          hidden
          muted
          contractId
          contract {
            id
            title
            contractType
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            hasAgency
            offer {
              id
              title
              description
              type
              vendorProposal {
                id
                coverLetter
                proposalCoverLetter
                annotations
              }
              closeJobPostingOnAccept
              offerTerms {
                expectedStartDate
                expectedEndDate
              }
              messageToContractor
              state
              offerFeatures {
                onSiteType
                state
                localDescription
                localFlexibilityDescription
                eor
              }
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
              }
              milestones {
                id
                dueDateTime
                state
                description
                submissionCount
                sequenceId
                payComments
                lastSubmissionCreatedTime
                createdDateTime
                modifiedDateTime
                instructions
              }
              createdUsingBYOFlow
              freelancer {
                id
                fullName
                firstName
                lastName
                email
              }
              payrollOffer
              deliveryModel
              organizationIds
            }
            clientProposal {
              id
              terms {
                upfrontPaymentPercent
              }
              coverLetter
              projectPlan {
                id
              }
              auditDetails {
                createdDateTime
                modifiedDateTime
              }
              status {
                status
              }
              annotations
            }
            weeklyChargeAmount {
              rawValue
              currency
              displayValue
            }
            weeklyHoursLimit
            createdDateTime
            firstContractStartDateTime
            modifiedDateTime
            startDateTime
            endDateTime
            manualTimeAllowed
            hideScreenshots
            last
            weeklyStipendHours
            estimatedDuration {
              id
              label
            }
            status
            suspended
            paused
            contractId
            workDays {
              date
            }
            workDiaryTimeCells {
              cellDateTime
              snapshotDateTime
              overtime
              manual
              activityLevel
              memo
              task {
                id
                description
              }
              mouseEventsCount
              keyboardEventsCount
              activeWindowTitle
              hideScreenshots
              hasScreenshot
              screenshotImageUrl
              screenshotImageUrlMedium
              screenshotImageThumbnail
              webcamEnabled
              webcamImageUrl
              webcamImageThumbnail
              snapshotExpired
            }
            date
            feedback {
              clientFeedback {
                score
                comment
                freelancerResponse
              }
              freelancerFeedback {
                score
                comment
                clientResponse
                recommendScore
              }
            }
          }
          roomNote
          roomNotePresent
          offerIds
          latestStory {
            id
            createdDateTime
            updatedDateTime
            message
            roomStoryNote {
              favorite
              abuseType
              whitelisted
              abuseDetails
            }
            attachments {
              objectReferenceId
              objectType
              metadata {
                key
                value
              }
              createdDateTime
            }
          }
          stories {
            totalCount
            edges {
              cursor
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.proposalRoom
  },

  /**
   * publicRooms
   * @param variables - Operation variables
   * @param variables.pagination - Pagination options
   * @returns Types.RoomConnection
   */
  publicRooms: async (
    client: UpworkGraphQLClient,
    variables: { pagination?: Types.Pagination } = {}
  ): Promise<Types.RoomConnection> => {
    const queryString = `
      query PublicRooms($pagination: Pagination) {
        publicRooms(pagination: $pagination) {
          totalCount
          edges {
            node {
              id
              roomName
              organization {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                userId
                photoUrl
                creationDate
              }
              creator {
                role
              }
              createdAtDateTime
              public
              topic
              numUnread
              roomFavoriteDateTime
              favorite
              numUnreadMentions
              numUsers
              joinDateTime
              lastVisitedDateTime
              lastReadDateTime
              roomType
              readOnlyDateTime
              readOnly
              blockDateTime
              hidden
              muted
              contractId
              contract {
                id
                title
                contractType
                hasAgency
                weeklyHoursLimit
                createdDateTime
                firstContractStartDateTime
                modifiedDateTime
                startDateTime
                endDateTime
                manualTimeAllowed
                hideScreenshots
                last
                weeklyStipendHours
                status
                suspended
                paused
                contractId
                date
              }
              contractDetails {
                id
                title
                status
                deliveryModel
                kind
                isPtc
                createDate
                modifyDate
                startDate
                endDate
                offerId
                changingUserType
                projectId
              }
              vendorProposal {
                id
                coverLetter
                proposalCoverLetter
                annotations
              }
              roomNote
              roomNotePresent
              offerIds
              recruiters {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              latestStory {
                id
                createdDateTime
                updatedDateTime
                message
              }
              stories {
                totalCount
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.publicRooms
  },

  /**
   * room
   * @param variables - Operation variables
   * @param variables.id - Room identifier
   * @returns Types.Room
   */
  room: async (client: UpworkGraphQLClient, variables: { id: string }): Promise<Types.Room> => {
    const queryString = `
      query Room($id: String!) {
        room(id: $id) {
          id
          roomName
          organization {
            id
            rid
            legacyId
            name
            type
            legacyType
            flag {
              client
              vendor
              agency
              individual
            }
            active
            hidden
            userId
            company {
              id
              name
              description
              legacyType
              logoURL
              contactUser {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              phone
              displayName
              teamsEnabled
              canHire
              hidden
              includeInStats
              companyName
              country {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              state
              city
              address
              zip
              timezone
              accountingEntity
              billingType
              summary
              paymentVerificationStatus
              paymentVerification {
                status
                paymentVerified
              }
              agencyDetails {
                vetted
                topRatedStatus
                topRatedPlusStatus
              }
              jobPosts {
                totalCount
              }
              jobPostsFilter {
                teamIds
                statuses
                excludeHidden
                fields
              }
            }
            photoUrl
            creationDate
            staffs {
              totalCount
              pageInfo {
                endCursor
                hasNextPage
              }
            }
            pagination {
              after
              first
            }
            userPermissions {
              offset
            }
            filter {
              userId
              resourceType_eq
              limit
              offset
              performExternalChecks_eq
              teamOrgIds_any
              returnAllTeams
            }
            agencyOffers {
              totalCount
              edges {
                cursor
              }
            }
            offerByRootCompanyFilter {
              freelancerId_any
              agencyTeamOrgId_any
              clientOrgId_any
              commonFilter {
                text_eq
                states_any
                startDatePeriod_bt
                endDatePeriod_bt
                catalogProject
              }
            }
            offerByClientFilter {
              teamId_any
              contactPersonId_any
              offerType_any
              milestoneState_any
              escrowRefundStatus_any
              freelancerId_any
              agreementKind_any
            }
            clientTimeReport {
              dateWorkedOn
              weekWorkedOn
              monthWorkedOn
              yearWorkedOn
              team {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              contractOffer {
                id
                startDateTime
                endDateTime
                type
                state
                milestoneState
                escrowRefundStatus
                title
                lastUpdatedDateTime
                lastPublishedDateTime
                inPrivateTalentCloud
                offerCreatedDateTime
                catalogProject
              }
              contract {
                id
                title
                status
                deliveryModel
                kind
                isPtc
                createDate
                modifyDate
                startDate
                endDate
                offerId
                changingUserType
                projectId
              }
              termId
              task
              taskDescription
              memo
              totalHoursWorked
              totalCharges
              totalOnlineHoursWorked
              totalOnlineCharge
              totalOfflineHoursWorked
              totalOfflineCharge
              billRate {
                id
                value
                code
                offerRef
              }
            }
            timeReportDate_bt {
              rangeStart
              rangeEnd
            }
            clientContractTimeReport {
              totalCount
              edges {
                cursor
              }
            }
            privateTalentClouds {
              id
              name
              joinInstructions
              welcomeMessageToAddedFreelancers
              joinRequestAutoApproved
              messageAfterJoinRequest
              joinRejectionMessage
              externalName
              active
              logoImageLarge {
                name
                uri
                encoding
                size
                createdDateTime
              }
              description
              onboardingTaskEnabled
              onboardingTaskEnableUpdatedDateTime
              selectable
            }
            jobPostingFilter {
              title_eq
              postByTeamIds_any
              postByPersonIds_any
              statusAndAccess_any {
                statuses_any
                accesses_any
              }
              excludePostByPersonIds_any
              categoryGroupIds_any
              contractType_eq
              createdDateTimeFrom_eq
              createdDateTimeTo_eq
            }
          }
          creator {
            role
          }
          createdAtDateTime
          public
          topic
          numUnread
          roomFavoriteDateTime
          favorite
          numUnreadMentions
          numUsers
          joinDateTime
          lastVisitedDateTime
          lastReadDateTime
          roomType
          readOnlyDateTime
          readOnly
          blockDateTime
          hidden
          muted
          contractId
          contract {
            id
            title
            contractType
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            hasAgency
            offer {
              id
              title
              description
              type
              vendorProposal {
                id
                coverLetter
                proposalCoverLetter
                annotations
              }
              closeJobPostingOnAccept
              offerTerms {
                expectedStartDate
                expectedEndDate
              }
              messageToContractor
              state
              offerFeatures {
                onSiteType
                state
                localDescription
                localFlexibilityDescription
                eor
              }
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
              }
              milestones {
                id
                dueDateTime
                state
                description
                submissionCount
                sequenceId
                payComments
                lastSubmissionCreatedTime
                createdDateTime
                modifiedDateTime
                instructions
              }
              createdUsingBYOFlow
              freelancer {
                id
                fullName
                firstName
                lastName
                email
              }
              payrollOffer
              deliveryModel
              organizationIds
            }
            clientProposal {
              id
              terms {
                upfrontPaymentPercent
              }
              coverLetter
              projectPlan {
                id
              }
              auditDetails {
                createdDateTime
                modifiedDateTime
              }
              status {
                status
              }
              annotations
            }
            weeklyChargeAmount {
              rawValue
              currency
              displayValue
            }
            weeklyHoursLimit
            createdDateTime
            firstContractStartDateTime
            modifiedDateTime
            startDateTime
            endDateTime
            manualTimeAllowed
            hideScreenshots
            last
            weeklyStipendHours
            estimatedDuration {
              id
              label
            }
            status
            suspended
            paused
            contractId
            workDays {
              date
            }
            workDiaryTimeCells {
              cellDateTime
              snapshotDateTime
              overtime
              manual
              activityLevel
              memo
              task {
                id
                description
              }
              mouseEventsCount
              keyboardEventsCount
              activeWindowTitle
              hideScreenshots
              hasScreenshot
              screenshotImageUrl
              screenshotImageUrlMedium
              screenshotImageThumbnail
              webcamEnabled
              webcamImageUrl
              webcamImageThumbnail
              snapshotExpired
            }
            date
            feedback {
              clientFeedback {
                score
                comment
                freelancerResponse
              }
              freelancerFeedback {
                score
                comment
                clientResponse
                recommendScore
              }
            }
          }
          roomNote
          roomNotePresent
          offerIds
          latestStory {
            id
            createdDateTime
            updatedDateTime
            message
            roomStoryNote {
              favorite
              abuseType
              whitelisted
              abuseDetails
            }
            attachments {
              objectReferenceId
              objectType
              metadata {
                key
                value
              }
              createdDateTime
            }
          }
          stories {
            totalCount
            edges {
              cursor
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.room
  },

  /**
   * roomList
   * @param variables - Operation variables
   * @param variables.filter - Filter criteria
   * @param variables.pagination - Pagination options
   * @param variables.sortOrder - Sorting order
   * @returns Types.RoomConnection
   */
  roomList: async (
    client: UpworkGraphQLClient,
    variables: {
      filter?: Types.RoomFilter
      pagination?: Types.Pagination
      sortOrder?: Types.SortOrder
    } = {}
  ): Promise<Types.RoomConnection> => {
    const queryString = `
      query RoomList($filter: RoomFilter, $pagination: Pagination, $sortOrder: SortOrder) {
        roomList(filter: $filter, pagination: $pagination, sortOrder: $sortOrder) {
          totalCount
          edges {
            node {
              id
              roomName
              organization {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                userId
                photoUrl
                creationDate
              }
              creator {
                role
              }
              createdAtDateTime
              public
              topic
              numUnread
              roomFavoriteDateTime
              favorite
              numUnreadMentions
              numUsers
              joinDateTime
              lastVisitedDateTime
              lastReadDateTime
              roomType
              readOnlyDateTime
              readOnly
              blockDateTime
              hidden
              muted
              contractId
              contract {
                id
                title
                contractType
                hasAgency
                weeklyHoursLimit
                createdDateTime
                firstContractStartDateTime
                modifiedDateTime
                startDateTime
                endDateTime
                manualTimeAllowed
                hideScreenshots
                last
                weeklyStipendHours
                status
                suspended
                paused
                contractId
                date
              }
              contractDetails {
                id
                title
                status
                deliveryModel
                kind
                isPtc
                createDate
                modifyDate
                startDate
                endDate
                offerId
                changingUserType
                projectId
              }
              vendorProposal {
                id
                coverLetter
                proposalCoverLetter
                annotations
              }
              roomNote
              roomNotePresent
              offerIds
              recruiters {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              latestStory {
                id
                createdDateTime
                updatedDateTime
                message
              }
              stories {
                totalCount
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.roomList
  },

  /**
   * roomStories
   * @param variables - Operation variables
   * @param variables.filter - Filter for room stories
   * @returns Types.RoomStoryConnection | null
   */
  roomStories: async (
    client: UpworkGraphQLClient,
    variables: { filter?: Types.RoomStoryFilter } = {}
  ): Promise<Types.RoomStoryConnection | null> => {
    const queryString = `
      query RoomStories($filter: RoomStoryFilter) {
        roomStories(filter: $filter) {
          totalCount
          edges {
            cursor
            node {
              id
              room {
                id
                roomName
                createdAtDateTime
                public
                topic
                numUnread
                roomFavoriteDateTime
                favorite
                numUnreadMentions
                numUsers
                joinDateTime
                lastVisitedDateTime
                lastReadDateTime
                roomType
                readOnlyDateTime
                readOnly
                blockDateTime
                hidden
                muted
                contractId
                roomNote
                roomNotePresent
                offerIds
              }
              createdDateTime
              updatedDateTime
              user {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              message
              organization {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              roomStoryNote {
                favorite
                abuseType
                whitelisted
                abuseDetails
              }
              attachments {
                objectReferenceId
                objectType
                createdDateTime
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.roomStories
  },

  /**
   * roomStory
   * @param variables - Operation variables
   * @param variables.roomId - Room identifier
   * @param variables.storyId - Story identifier
   * @returns Types.RoomStory | null
   */
  roomStory: async (
    client: UpworkGraphQLClient,
    variables: { roomId: string; storyId: string }
  ): Promise<Types.RoomStory | null> => {
    const queryString = `
      query RoomStory($roomId: String!, $storyId: String!) {
        roomStory(roomId: $roomId, storyId: $storyId) {
          id
          room {
            id
            roomName
            organization {
              id
              rid
              legacyId
              name
              type
              legacyType
              flag {
                client
                vendor
                agency
                individual
              }
              active
              hidden
              userId
              company {
                id
                name
                description
                legacyType
                logoURL
                phone
                displayName
                teamsEnabled
                canHire
                hidden
                includeInStats
                companyName
                state
                city
                address
                zip
                timezone
                accountingEntity
                billingType
                summary
                paymentVerificationStatus
              }
              photoUrl
              creationDate
              staffs {
                totalCount
              }
              pagination {
                after
                first
              }
              userPermissions {
                offset
              }
              filter {
                userId
                resourceType_eq
                limit
                offset
                performExternalChecks_eq
                teamOrgIds_any
                returnAllTeams
              }
              agencyOffers {
                totalCount
              }
              offerByRootCompanyFilter {
                freelancerId_any
                agencyTeamOrgId_any
                clientOrgId_any
              }
              offerByClientFilter {
                teamId_any
                contactPersonId_any
                offerType_any
                milestoneState_any
                escrowRefundStatus_any
                freelancerId_any
                agreementKind_any
              }
              clientTimeReport {
                dateWorkedOn
                weekWorkedOn
                monthWorkedOn
                yearWorkedOn
                termId
                task
                taskDescription
                memo
                totalHoursWorked
                totalCharges
                totalOnlineHoursWorked
                totalOnlineCharge
                totalOfflineHoursWorked
                totalOfflineCharge
              }
              timeReportDate_bt {
                rangeStart
                rangeEnd
              }
              clientContractTimeReport {
                totalCount
              }
              privateTalentClouds {
                id
                name
                joinInstructions
                welcomeMessageToAddedFreelancers
                joinRequestAutoApproved
                messageAfterJoinRequest
                joinRejectionMessage
                externalName
                active
                description
                onboardingTaskEnabled
                onboardingTaskEnableUpdatedDateTime
                selectable
              }
              jobPosting {
                totalCount
              }
              jobPostingFilter {
                title_eq
                postByTeamIds_any
                postByPersonIds_any
                excludePostByPersonIds_any
                categoryGroupIds_any
                contractType_eq
                createdDateTimeFrom_eq
                createdDateTimeTo_eq
              }
            }
            creator {
              user {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              organization {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              role
            }
            createdAtDateTime
            public
            topic
            numUnread
            roomFavoriteDateTime
            favorite
            numUnreadMentions
            numUsers
            joinDateTime
            lastVisitedDateTime
            lastReadDateTime
            roomType
            readOnlyDateTime
            readOnly
            blockDateTime
            hidden
            muted
            contractId
            contract {
              id
              title
              contractType
              job {
                id
                canClientReceiveContractProposal
                organizationIds
              }
              hasAgency
              offer {
                id
                title
                description
                type
                closeJobPostingOnAccept
                messageToContractor
                state
                createdUsingBYOFlow
                payrollOffer
                deliveryModel
                organizationIds
              }
              clientProposal {
                id
                coverLetter
                annotations
              }
              vendorProposal {
                id
                coverLetter
                proposalCoverLetter
                annotations
              }
              weeklyChargeAmount {
                rawValue
                currency
                displayValue
              }
              weeklyHoursLimit
              createdDateTime
              firstContractStartDateTime
              modifiedDateTime
              startDateTime
              endDateTime
              manualTimeAllowed
              hideScreenshots
              last
              weeklyStipendHours
              estimatedDuration {
                id
                label
              }
              status
              suspended
              freelancer {
                id
                fullName
                firstName
                lastName
                email
              }
              paused
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
              }
              milestones {
                id
                dueDateTime
                state
                description
                submissionCount
                sequenceId
                payComments
                lastSubmissionCreatedTime
                createdDateTime
                modifiedDateTime
                instructions
              }
              contractId
              workDays {
                date
              }
              workDiaryTimeCells {
                cellDateTime
                snapshotDateTime
                overtime
                manual
                activityLevel
                memo
                mouseEventsCount
                keyboardEventsCount
                activeWindowTitle
                hideScreenshots
                hasScreenshot
                screenshotImageUrl
                screenshotImageUrlMedium
                screenshotImageThumbnail
                webcamEnabled
                webcamImageUrl
                webcamImageThumbnail
                snapshotExpired
              }
              date
            }
            contractDetails {
              id
              title
              status
              closingReason {
                id
                apiRef
                reason
              }
              deliveryModel
              kind
              isPtc
              createDate
              modifyDate
              startDate
              endDate
              offerId
              job {
                id
                version
                visibility
              }
              freelancer {
                id
                rid
                name
                photoUrl
                firstName
                lastName
                email
              }
              changingUserType
              metadata {
                agencyContract
              }
              hourlyLimits {
                id
                weeklyLimit
                createDate
                modifyDate
                startDate
                endDate
                legacyId
              }
              projectId
            }
            roomNote
            roomNotePresent
            offerIds
            stories {
              totalCount
              edges {
                cursor
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
          }
          createdDateTime
          updatedDateTime
          message
          roomStoryNote {
            favorite
            abuseType
            whitelisted
            abuseDetails
          }
          attachments {
            objectReferenceId
            objectType
            metadata {
              key
              value
            }
            createdDateTime
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.roomStory
  },

  /**
   * snapshotsByContractId
   * @param variables - Operation variables
   * @param variables.input - Contract and timestamp parameters
   * @returns Array<Types.Snapshot> | null
   */
  snapshotsByContractId: async (
    client: UpworkGraphQLClient,
    variables: { input: Types.SnapshotsByContractIdInput }
  ): Promise<Array<Types.Snapshot> | null> => {
    const queryString = `
      query SnapshotsByContractId($input: SnapshotsByContractIdInput!) {
        snapshotsByContractId(input: $input) {
          id
          time
          contractId
          mouseEventsCount
          keyboardEventsCount
          teamName
          status
          activeWindowTitle
          memo
          companyId
          hasScreenshot
          screenshotUrl
          screenshotImage
          screenshotImageLarge
          screenshotImageMedium
          screenshotImageThumbnail
          hasWebcam
          webcamUrl
          webcamImage
          webcamImageThumbnail
          task
          minutes {
            minute {
              time
              mouse
              keyboard
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.snapshotsByContractId
  },

  /**
   * user
   * @returns Types.CurrentUser | null
   */
  user: async (
    client: UpworkGraphQLClient,
    variables?: Record<string, never>
  ): Promise<Types.CurrentUser | null> => {
    const queryString = `
      query User {
        user {
          id
          nid
          rid
          email
          name
          userPermissions {
            edges {
              node {
                action
                access
                reason
              }
            }
            offset
          }
          filter {
            resourceType_eq
            limit
            offset
            performExternalChecks_eq
            teamOrgIds_any
            returnAllTeams
            returnFirstGrantedResult_eq
          }
          photoUrl
          offer {
            totalCount
            edges {
              cursor
              node {
                id
                startDateTime
                endDateTime
                type
                state
                milestoneState
                escrowRefundStatus
                title
                lastUpdatedDateTime
                lastPublishedDateTime
                inPrivateTalentCloud
                offerCreatedDateTime
                catalogProject
              }
            }
            pageInfo {
              endCursor
              hasNextPage
            }
          }
          offerForFreelancerFilter {
            agencyRootCompanyOrgId_any
            agencyTeamOrgId_any
            clientOrgId_any
            commonFilter {
              text_eq
              states_any
              startDatePeriod_bt
              endDatePeriod_bt
              catalogProject
            }
          }
          timeReport {
            dateWorkedOn
            weekWorkedOn
            monthWorkedOn
            yearWorkedOn
            freelancer {
              id
              nid
              rid
              name
              firstName
              lastName
              photoUrl
              publicUrl
              email
              location {
                countryName
                cityName
                zip
                timezone
                timezoneName
                street
                stateCode
                offsetToUTC
              }
              freelancerProfile {
                id
                fullName
                firstName
                lastName
                email
              }
              ciphertext
              talentProfile {
                personId
              }
            }
            team {
              id
              rid
              legacyId
              name
              type
              legacyType
              flag {
                client
                vendor
                agency
                individual
              }
              active
              hidden
              company {
                id
                name
                description
                legacyType
                logoURL
                phone
                displayName
                teamsEnabled
                canHire
                hidden
                includeInStats
                companyName
                state
                city
                address
                zip
                timezone
                accountingEntity
                billingType
                summary
                paymentVerificationStatus
              }
              photoUrl
              creationDate
              offerByRootCompanyFilter {
                freelancerId_any
                agencyTeamOrgId_any
                clientOrgId_any
              }
              offerByClientFilter {
                teamId_any
                contactPersonId_any
                offerType_any
                milestoneState_any
                escrowRefundStatus_any
                freelancerId_any
                agreementKind_any
              }
              jobPosting {
                totalCount
              }
              jobPostingFilter {
                title_eq
                postByTeamIds_any
                postByPersonIds_any
                excludePostByPersonIds_any
                categoryGroupIds_any
                contractType_eq
                createdDateTimeFrom_eq
                createdDateTimeTo_eq
              }
            }
            contract {
              id
              title
              status
              closingReason {
                id
                apiRef
                reason
              }
              deliveryModel
              kind
              isPtc
              createDate
              modifyDate
              startDate
              endDate
              offer {
                id
                title
                description
                type
                closeJobPostingOnAccept
                messageToContractor
                state
                createdUsingBYOFlow
                payrollOffer
                deliveryModel
                organizationIds
              }
              offerId
              job {
                id
                version
                visibility
              }
              freelancer {
                id
                rid
                name
                photoUrl
                firstName
                lastName
                email
              }
              changingUserType
              metadata {
                agencyContract
              }
              hourlyLimits {
                id
                weeklyLimit
                createDate
                modifyDate
                startDate
                endDate
                legacyId
              }
              projectId
            }
            termId
            task
            taskDescription
            memo
            totalHoursWorked
            totalCharges
            totalOnlineHoursWorked
            totalOnlineCharge
            totalOfflineHoursWorked
            totalOfflineCharge
            billRate {
              id
              value
              code
              offerRef
            }
          }
          timeReportDate_bt {
            rangeStart
            rangeEnd
          }
          contractTimeReport {
            totalCount
            edges {
              cursor
            }
          }
          ciphertext
          i18NSettings {
            countrySupported
            location {
              country {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
            }
            status
            locationViewType
            userPreferredLocationType
            settingsFlags {
              showDomesticLocationFilterOnFLSearch
              showJobSearch
              showPhoneVerification
              showSmfToUpdateAddress
              showPersonalAddressAutocomplete
              showMessageContainer
              showLocationPreferenceOnJobPost
              defaultDomesticEnabled
              jobSearchDefaultedToON
              showLocationVerificationOnFWH
              domesticEnabledForFreelancersOnFLSearch
            }
          }
          companyReferencedId
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.user
  },

  /**
   * workDays
   * @param variables - Operation variables
   * @param variables.workdaysInput - Contract list and date range
   * @returns Types.WorkdayResult | null
   */
  workDays: async (
    client: UpworkGraphQLClient,
    variables: { workdaysInput: Types.WorkdaysInput }
  ): Promise<Types.WorkdayResult | null> => {
    const queryString = `
      query WorkDays($workdaysInput: WorkdaysInput!) {
        workDays(workdaysInput: $workdaysInput) {
          workDays
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.workDays
  },

  /**
   * workDiaryContract
   * @param variables - Operation variables
   * @param variables.workDiaryContractInput - Contract and date parameters
   * @returns Types.WorkDiaryContract | null
   */
  workDiaryContract: async (
    client: UpworkGraphQLClient,
    variables: { workDiaryContractInput: Types.WorkDiaryContractInput }
  ): Promise<Types.WorkDiaryContract | null> => {
    const queryString = `
      query WorkDiaryContract($workDiaryContractInput: WorkDiaryContractInput!) {
        workDiaryContract(workDiaryContractInput: $workDiaryContractInput) {
          workDiaryMetadata {
            timezoneOffset
            archivingDateTime
          }
          workDiaryTimeCells {
            cellDateTime
            snapshotDateTime
            overtime
            manual
            activityLevel
            memo
            task {
              id
              description
            }
            mouseEventsCount
            keyboardEventsCount
            activeWindowTitle
            hideScreenshots
            hasScreenshot
            screenshotImageUrl
            screenshotImageUrlMedium
            screenshotImageThumbnail
            webcamEnabled
            webcamImageUrl
            webcamImageThumbnail
            snapshotExpired
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.workDiaryContract
  },

  /**
   * accountAuditRecord
   * @param variables - Operation variables
   * @param variables.processInstanceId - Account management process identifier
   * @returns Types.AccountAuditRecord | null
   */
  accountAuditRecord: async (
    client: UpworkGraphQLClient,
    variables: { processInstanceId: string }
  ): Promise<Types.AccountAuditRecord | null> => {
    const queryString = `
      query AccountAuditRecord($processInstanceId: String!) {
        accountAuditRecord(processInstanceId: $processInstanceId) {
          processInstanceId
          status
          metadata {
            key
            value
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.accountAuditRecord
  },

  /**
   * staffsByPersonId
   * @param variables - Operation variables
   * @param variables.personId - Target person identifier
   * @param variables.status - Filter by staff status
   * @param variables.staffType - Filter by staff type
   * @param variables.affiliateContractor - Affiliate contractor flag
   * @param variables.hierarchy - Include organization hierarchy
   * @param variables.orgLegacyType - Legacy organization type
   * @param variables.orgType - Organization type
   * @param variables.hiddenOrg - Hidden organization flag
   * @param variables.activeOrg - Active organization flag
   * @param variables.eac - Enterprise account company flag
   * @param variables.pagination - Pagination options
   * @returns Types.StaffsConnection
   */
  staffsByPersonId: async (
    client: UpworkGraphQLClient,
    variables: {
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
    }
  ): Promise<Types.StaffsConnection> => {
    const queryString = `
      query StaffsByPersonId($personId: String!, $status: Int, $staffType: String, $affiliateContractor: Boolean, $hierarchy: Boolean, $orgLegacyType: OrgLegacyType, $orgType: OrgType, $hiddenOrg: Boolean, $activeOrg: Boolean, $eac: Boolean, $pagination: Pagination) {
        staffsByPersonId(personId: $personId, status: $status, staffType: $staffType, affiliateContractor: $affiliateContractor, hierarchy: $hierarchy, orgLegacyType: $orgLegacyType, orgType: $orgType, hiddenOrg: $hiddenOrg, activeOrg: $activeOrg, eac: $eac, pagination: $pagination) {
          edges {
            node {
              id
              user {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              activationStatus
              creationDate
              staffType
            }
          }
          totalCount
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.staffsByPersonId
  },

  /**
   * teamActivities
   * @param variables - Operation variables
   * @param variables.orgId - The org id where the team belongs to
   * @param variables.teamId - The team id where activities are being requested
   * @param variables.page - Pagination information
   * @param variables.filter - Filters to apply to the activity list
   * @returns Types.ActivitiesConnection
   */
  teamActivities: async (
    client: UpworkGraphQLClient,
    variables: {
      orgId: string
      teamId?: string
      page?: Types.PageFilterInput
      filter?: Types.ActivityFilterInput
    }
  ): Promise<Types.ActivitiesConnection> => {
    const queryString = `
      query TeamActivities($orgId: String!, $teamId: String, $page: PageFilterInput, $filter: ActivityFilterInput) {
        teamActivities(orgId: $orgId, teamId: $teamId, page: $page, filter: $filter) {
          totalCount
          edges {
            node {
              totalContracts
              url
              codeOrder
              status
              level
              contracts {
                contractId
              }
              userId
              code
              createdTime
              companyId
              recordId
              teamId
              description
            }
          }
          page {
            pageOffset
            pageSize
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.teamActivities
  },

  /**
   * userDetails
   * @param variables - Operation variables
   * @param variables.id - The unique identifier of the user.
   * @returns Types.PiiUser
   */
  userDetails: async (
    client: UpworkGraphQLClient,
    variables: { id: string }
  ): Promise<Types.PiiUser> => {
    const queryString = `
      query UserDetails($id: String!) {
        userDetails(id: $id) {
          id
          nid
          rid
          name
          firstName
          lastName
          photoUrl
          publicUrl
          email
          location {
            countryName
            cityName
            zip
            timezone
            timezoneName
            street
            stateCode
            offsetToUTC
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.userDetails
  },

  /**
   * userIdsByEmail
   * @param variables - Operation variables
   * @param variables.email - Email address to search for
   * @returns Types.UserIdsByEmailResponse | null
   */
  userIdsByEmail: async (
    client: UpworkGraphQLClient,
    variables: { email: string }
  ): Promise<Types.UserIdsByEmailResponse | null> => {
    const queryString = `
      query UserIdsByEmail($email: String!) {
        userIdsByEmail(email: $email) {
          totalCount
          edges {
            cursor
            node {
              id
              email
              visibilityLevel
              title
              user {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.userIdsByEmail
  },

  /**
   * workDiaryCompany
   * @param variables - Operation variables
   * @param variables.workDiaryCompanyInput - Company and date parameters
   * @returns Types.WorkDiaryCompany | null
   */
  workDiaryCompany: async (
    client: UpworkGraphQLClient,
    variables: { workDiaryCompanyInput: Types.WorkDiaryCompanyInput }
  ): Promise<Types.WorkDiaryCompany | null> => {
    const queryString = `
      query WorkDiaryCompany($workDiaryCompanyInput: WorkDiaryCompanyInput!) {
        workDiaryCompany(workDiaryCompanyInput: $workDiaryCompanyInput) {
          total
          snapshots {
            contract {
              id
              userId
              contractTitle
            }
            user {
              id
              name
              portraitUrl
            }
            duration
            durationInt
            task {
              id
              code
              description
              memo
            }
            time {
              trackedTime
              manualTime
              overtime
              firstWorked
              lastWorked
              firstWorkedInt
              lastWorkedInt
              lastScreenshot
            }
            screenshots {
              activity
              screenshotUrl
              screenshotImage
              screenshotImageLarge
              screenshotImageMedium
              screenshotImageThumbnail
              hasScreenshot
              hasWebcam
              webcamUrl
              webcamImage
              webcamImageThumbnail
              flags {
                hideScreenshot
                downSampleScreenshots
              }
            }
          }
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.workDiaryCompany
  },

  /**
   * workflowView
   * @param variables - Operation variables
   * @param variables.entityType - Type of business entity (e.g., Offer)
   * @param variables.entityId - Entity identifier
   * @returns Types.WorkflowView | null
   */
  workflowView: async (
    client: UpworkGraphQLClient,
    variables: { entityType: string; entityId: string }
  ): Promise<Types.WorkflowView | null> => {
    const queryString = `
      query WorkflowView($entityType: String!, $entityId: String!) {
        workflowView(entityType: $entityType, entityId: $entityId) {
          id
          type
          onboardedStatus
          totalTasks
          notStartedTasksCount
          inProgressTasksCount
          completedTasksCount
          tasksOverdue
          percentComplete
          startDateTime
          completionDateTime
          associations {
            entityType
            entityValue
          }
          tasks {
            id
            type
            title
            description
            status
            assignee {
              entityType
              entityId
            }
            comments {
              id
              message
              createdDateTime
              createdBy
              visibleToClient
              attachments {
                id
                name
                type
              }
            }
            createdDateTime
            finishedDateTime
            dueDate
            modifiedDateTime
            createdBy
            modifiedBy
            labels
            active
            notRequired
            dependsOn
            externalTaskId
            delayReasons
            customAttributes {
              key
              value
            }
            order
            canEdit
            owner
          }
          createdDateTime
          modifiedDateTime
          createdBy
          modifiedBy
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.workflowView
  },

  /**
   * accountingEntity
   * @returns Types.AccountingEntity
   */
  accountingEntity: async (
    client: UpworkGraphQLClient,
    variables?: Record<string, never>
  ): Promise<Types.AccountingEntity> => {
    const queryString = `
      query AccountingEntity {
        accountingEntity {
          id
        }
      }
    `

    const result = await client.query(queryString, variables)
    return result.data.accountingEntity
  },
}

// ========================================
// MUTATION METHODS (52)
// ========================================

export const mutations = {
  /**
   * createJobPosting
   * @param variables - Operation variables
   * @param variables.jobPostingRequest - Job posting creation request
   * @returns Types.JobPostingCreateResponse | null
   */
  createJobPosting: async (
    client: UpworkGraphQLClient,
    variables: { jobPostingRequest: Types.JobPostingCreateRequest }
  ): Promise<Types.JobPostingCreateResponse | null> => {
    const mutationString = `
      mutation CreateJobPosting($jobPostingRequest: JobPostingCreateRequest!) {
        createJobPosting(jobPostingRequest: $jobPostingRequest) {
          id
          qualificationsSaved
          skillsSaved
          questionsSaved
          segmentationDataSaved
          attachmentsSaved
          ptcInfoSaved
          jobPostingAdditional
          sandsJobPostSaved
          customFieldsSaved
          version
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.createJobPosting
  },

  /**
   * updateJobPosting
   * @param variables - Operation variables
   * @param variables.id - Job posting identifier
   * @param variables.jobPostingRequest - Job posting update request
   * @returns Types.JobPostingUpdateResponse | null
   */
  updateJobPosting: async (
    client: UpworkGraphQLClient,
    variables: { id: string; jobPostingRequest: Types.JobPostingUpdateRequest }
  ): Promise<Types.JobPostingUpdateResponse | null> => {
    const mutationString = `
      mutation UpdateJobPosting($id: String!, $jobPostingRequest: JobPostingUpdateRequest!) {
        updateJobPosting(id: $id, jobPostingRequest: $jobPostingRequest) {
          id
          qualificationsSaved
          skillsSaved
          questionsSaved
          segmentationDataSaved
          attachmentsSaved
          ptcInfoSaved
          sandsJobPostSaved
          version
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.updateJobPosting
  },

  /**
   * endContractByFreelancer
   * @param variables - Operation variables
   * @param variables.contractId - Contract identifier
   * @param variables.input - Contract end payload
   * @returns Types.ContractActionResponse | null
   */
  endContractByFreelancer: async (
    client: UpworkGraphQLClient,
    variables: { contractId: string; input: Types.EndContractInput }
  ): Promise<Types.ContractActionResponse | null> => {
    const mutationString = `
      mutation EndContractByFreelancer($contractId: String!, $input: EndContractInput!) {
        endContractByFreelancer(contractId: $contractId, input: $input) {
          success
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.endContractByFreelancer
  },

  /**
   * withdrawOffer
   * @param variables - Operation variables
   * @param variables.input - Withdraw request payload
   * @returns boolean
   */
  withdrawOffer: async (
    client: UpworkGraphQLClient,
    variables: { input: Types.WithdrawOfferInput }
  ): Promise<boolean> => {
    const mutationString = `
      mutation WithdrawOffer($input: WithdrawOfferInput!) {
        withdrawOffer(input: $input)
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.withdrawOffer
  },

  /**
   * activateMilestone
   * @param variables - Operation variables
   * @param variables.input - Milestone activation details
   * @returns Types.Milestone
   */
  activateMilestone: async (
    client: UpworkGraphQLClient,
    variables: { input?: Types.ActivateMilestoneInput } = {}
  ): Promise<Types.Milestone> => {
    const mutationString = `
      mutation ActivateMilestone($input: ActivateMilestoneInput) {
        activateMilestone(input: $input) {
          id
          createdBy {
            id
            nid
            rid
            name
            firstName
            lastName
            photoUrl
            publicUrl
            email
            location {
              countryName
              cityName
              zip
              timezone
              timezoneName
              street
              stateCode
              offsetToUTC
            }
            freelancerProfile {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              employmentRecords {
                id
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDate
                endDate
                description
                city
                country
              }
              availability {
                id
                capacity
                availabilityDateTime
                name
                createdDateTime
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              countryDetails {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            ciphertext
            talentProfile {
              personId
              identity {
                id
                ciphertext
              }
              personalData {
                firstName
                lastName
                title
                description
                profileUrl
                profileState
              }
              preferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                contractToHire
              }
              settings {
                provider
                suspended
                disabled
                status
                updatedDateTime
              }
              personAvailability {
                personId
                capacity
                createdDateTime
                availabilityDateTime
                updatedDateTime
                minHours
                maxHours
                availableDays
              }
              projectList {
                totalProjects
                updatedDateTime
              }
              communityCertificates {
                personId
                certificateAttachmentId
                certificationNumber
                expirationDate
                businessName
                visibility
              }
              profileCompleteness {
                personId
                pciActual
                pciDisplay
                pciAction
                pciActionCredit
                pciDateTime
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitExists
                overviewExists
                passedTestsCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                esnCount
                updatedDateTime
              }
              otherExperiences {
                id
                personId
                subject
                description
                active
              }
              educationRecords {
                id
                personId
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDateTime
                endDateTime
                comment
              }
              employmentRecords {
                id
                personId
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDateTime
                endDateTime
                description
                city
                country
              }
              skills {
                id
                skill
                prettyName
                status
                description
                externalLink
                wikipediaPageId
                freebaseMachineId
                migrateTo
                ctime
                mtime
                rank
              }
              jobCategories {
                id
                name
              }
              profileAggregates {
                lastWorkedOn
                totalHourlyJobs
                totalFixedJobs
                topRatedStatus
                totalFeedback
                totalEarnings
                totalJobs
              }
              specializedProfiles {
                personId
                profileId
                occupationId
                status
                rank
                occupations
                primary
                title
                description
                weblink
              }
              specializedProfilesProjects {
                personId
                profileId
              }
            }
          }
          dueDateTime
          state
          description
          currentEscrowAmount {
            rawValue
            currency
            displayValue
          }
          submissionCount
          sequenceId
          payComments
          lastSubmissionCreatedTime
          createdDateTime
          modifiedDateTime
          instructions
          submissionEvents {
            submission {
              id
              createdDateTime
              modifiedDateTime
              sequenceId
            }
            submissionMessage {
              createdDateTime
              message
            }
          }
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.activateMilestone
  },

  /**
   * approveMilestone
   * @param variables - Operation variables
   * @param variables.input - Milestone approval details
   * @returns Types.Milestone
   */
  approveMilestone: async (
    client: UpworkGraphQLClient,
    variables: { input: Types.ApproveMilestoneInput }
  ): Promise<Types.Milestone> => {
    const mutationString = `
      mutation ApproveMilestone($input: ApproveMilestoneInput!) {
        approveMilestone(input: $input) {
          id
          createdBy {
            id
            nid
            rid
            name
            firstName
            lastName
            photoUrl
            publicUrl
            email
            location {
              countryName
              cityName
              zip
              timezone
              timezoneName
              street
              stateCode
              offsetToUTC
            }
            freelancerProfile {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              employmentRecords {
                id
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDate
                endDate
                description
                city
                country
              }
              availability {
                id
                capacity
                availabilityDateTime
                name
                createdDateTime
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              countryDetails {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            ciphertext
            talentProfile {
              personId
              identity {
                id
                ciphertext
              }
              personalData {
                firstName
                lastName
                title
                description
                profileUrl
                profileState
              }
              preferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                contractToHire
              }
              settings {
                provider
                suspended
                disabled
                status
                updatedDateTime
              }
              personAvailability {
                personId
                capacity
                createdDateTime
                availabilityDateTime
                updatedDateTime
                minHours
                maxHours
                availableDays
              }
              projectList {
                totalProjects
                updatedDateTime
              }
              communityCertificates {
                personId
                certificateAttachmentId
                certificationNumber
                expirationDate
                businessName
                visibility
              }
              profileCompleteness {
                personId
                pciActual
                pciDisplay
                pciAction
                pciActionCredit
                pciDateTime
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitExists
                overviewExists
                passedTestsCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                esnCount
                updatedDateTime
              }
              otherExperiences {
                id
                personId
                subject
                description
                active
              }
              educationRecords {
                id
                personId
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDateTime
                endDateTime
                comment
              }
              employmentRecords {
                id
                personId
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDateTime
                endDateTime
                description
                city
                country
              }
              skills {
                id
                skill
                prettyName
                status
                description
                externalLink
                wikipediaPageId
                freebaseMachineId
                migrateTo
                ctime
                mtime
                rank
              }
              jobCategories {
                id
                name
              }
              profileAggregates {
                lastWorkedOn
                totalHourlyJobs
                totalFixedJobs
                topRatedStatus
                totalFeedback
                totalEarnings
                totalJobs
              }
              specializedProfiles {
                personId
                profileId
                occupationId
                status
                rank
                occupations
                primary
                title
                description
                weblink
              }
              specializedProfilesProjects {
                personId
                profileId
              }
            }
          }
          dueDateTime
          state
          description
          currentEscrowAmount {
            rawValue
            currency
            displayValue
          }
          submissionCount
          sequenceId
          payComments
          lastSubmissionCreatedTime
          createdDateTime
          modifiedDateTime
          instructions
          submissionEvents {
            submission {
              id
              createdDateTime
              modifiedDateTime
              sequenceId
            }
            submissionMessage {
              createdDateTime
              message
            }
          }
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.approveMilestone
  },

  /**
   * createMilestoneV2
   * @param variables - Operation variables
   * @param variables.input - Milestone creation details
   * @returns Types.Milestone | null
   */
  createMilestoneV2: async (
    client: UpworkGraphQLClient,
    variables: { input: Types.CreateMilestoneInput }
  ): Promise<Types.Milestone | null> => {
    const mutationString = `
      mutation CreateMilestoneV2($input: CreateMilestoneInput!) {
        createMilestoneV2(input: $input) {
          id
          createdBy {
            id
            nid
            rid
            name
            firstName
            lastName
            photoUrl
            publicUrl
            email
            location {
              countryName
              cityName
              zip
              timezone
              timezoneName
              street
              stateCode
              offsetToUTC
            }
            freelancerProfile {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              employmentRecords {
                id
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDate
                endDate
                description
                city
                country
              }
              availability {
                id
                capacity
                availabilityDateTime
                name
                createdDateTime
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              countryDetails {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            ciphertext
            talentProfile {
              personId
              identity {
                id
                ciphertext
              }
              personalData {
                firstName
                lastName
                title
                description
                profileUrl
                profileState
              }
              preferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                contractToHire
              }
              settings {
                provider
                suspended
                disabled
                status
                updatedDateTime
              }
              personAvailability {
                personId
                capacity
                createdDateTime
                availabilityDateTime
                updatedDateTime
                minHours
                maxHours
                availableDays
              }
              projectList {
                totalProjects
                updatedDateTime
              }
              communityCertificates {
                personId
                certificateAttachmentId
                certificationNumber
                expirationDate
                businessName
                visibility
              }
              profileCompleteness {
                personId
                pciActual
                pciDisplay
                pciAction
                pciActionCredit
                pciDateTime
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitExists
                overviewExists
                passedTestsCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                esnCount
                updatedDateTime
              }
              otherExperiences {
                id
                personId
                subject
                description
                active
              }
              educationRecords {
                id
                personId
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDateTime
                endDateTime
                comment
              }
              employmentRecords {
                id
                personId
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDateTime
                endDateTime
                description
                city
                country
              }
              skills {
                id
                skill
                prettyName
                status
                description
                externalLink
                wikipediaPageId
                freebaseMachineId
                migrateTo
                ctime
                mtime
                rank
              }
              jobCategories {
                id
                name
              }
              profileAggregates {
                lastWorkedOn
                totalHourlyJobs
                totalFixedJobs
                topRatedStatus
                totalFeedback
                totalEarnings
                totalJobs
              }
              specializedProfiles {
                personId
                profileId
                occupationId
                status
                rank
                occupations
                primary
                title
                description
                weblink
              }
              specializedProfilesProjects {
                personId
                profileId
              }
            }
          }
          dueDateTime
          state
          description
          currentEscrowAmount {
            rawValue
            currency
            displayValue
          }
          submissionCount
          sequenceId
          payComments
          lastSubmissionCreatedTime
          createdDateTime
          modifiedDateTime
          instructions
          submissionEvents {
            submission {
              id
              createdDateTime
              modifiedDateTime
              sequenceId
            }
            submissionMessage {
              createdDateTime
              message
            }
          }
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.createMilestoneV2
  },

  /**
   * createOffer
   * @param variables - Operation variables
   * @param variables.offerInput - Offer creation payload
   * @returns Types.OfferCreationResponse | null
   */
  createOffer: async (
    client: UpworkGraphQLClient,
    variables: { offerInput: Types.CreationOfferInput }
  ): Promise<Types.OfferCreationResponse | null> => {
    const mutationString = `
      mutation CreateOffer($offerInput: CreationOfferInput!) {
        createOffer(offerInput: $offerInput) {
          offer {
            id
            kind
            offeror
            clientUserId
            clientTeamId
            clientOrgId
            vendorUserId
            vendorTeamId
            vendorOrgId
            actors {
              user
              team
              actorType
            }
            metadata {
              sourceType
              sourceId
              data
              occupationUid
            }
            expirationDateTime
            title
            description
            attachments
            contractStartDateTime
            contractEndDateTime
            hourlyRateTerms {
              rate {
                rawValue
                currency
                displayValue
              }
              weeklyHoursLimit
              manualTimeAllowed
            }
            stipendTerms {
              period
            }
            milestoneTerms {
              milestones {
                id
                dueDateTime
                state
                description
                submissionCount
                sequenceId
                payComments
                lastSubmissionCreatedTime
                createdDateTime
                modifiedDateTime
                instructions
              }
            }
            deliveryModel
            state
            staffingManagerId
            contractId
            agencyRootCompanyId
            instanceId
            client {
              id
              rid
              legacyId
              name
              type
              legacyType
              flag {
                client
                vendor
                agency
                individual
              }
              active
              hidden
              company {
                id
                name
                description
                legacyType
                logoURL
                phone
                displayName
                teamsEnabled
                canHire
                hidden
                includeInStats
                companyName
                state
                city
                address
                zip
                timezone
                accountingEntity
                billingType
                summary
                paymentVerificationStatus
              }
              photoUrl
              creationDate
              agencyOffers {
                totalCount
              }
              offerByRootCompanyFilter {
                freelancerId_any
                agencyTeamOrgId_any
                clientOrgId_any
              }
              offerByClientFilter {
                teamId_any
                contactPersonId_any
                offerType_any
                milestoneState_any
                escrowRefundStatus_any
                freelancerId_any
                agreementKind_any
              }
              jobPosting {
                totalCount
              }
              jobPostingFilter {
                title_eq
                postByTeamIds_any
                postByPersonIds_any
                excludePostByPersonIds_any
                categoryGroupIds_any
                contractType_eq
                createdDateTimeFrom_eq
                createdDateTimeTo_eq
              }
            }
            clientCompany {
              id
              name
              description
              legacyType
              logoURL
            }
            createdDateTime
            lastEvent {
              reasonId
              message
              lastEventTime
            }
          }
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.createOffer
  },

  /**
   * deleteMilestone
   * @param variables - Operation variables
   * @param variables.input - Milestone deletion details
   * @returns boolean
   */
  deleteMilestone: async (
    client: UpworkGraphQLClient,
    variables: { input?: Types.DeleteMilestoneInput } = {}
  ): Promise<boolean> => {
    const mutationString = `
      mutation DeleteMilestone($input: DeleteMilestoneInput) {
        deleteMilestone(input: $input)
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.deleteMilestone
  },

  /**
   * editMilestone
   * @param variables - Operation variables
   * @param variables.input - Milestone update details
   * @returns Types.Milestone
   */
  editMilestone: async (
    client: UpworkGraphQLClient,
    variables: { input?: Types.EditMilestoneInput } = {}
  ): Promise<Types.Milestone> => {
    const mutationString = `
      mutation EditMilestone($input: EditMilestoneInput) {
        editMilestone(input: $input) {
          id
          createdBy {
            id
            nid
            rid
            name
            firstName
            lastName
            photoUrl
            publicUrl
            email
            location {
              countryName
              cityName
              zip
              timezone
              timezoneName
              street
              stateCode
              offsetToUTC
            }
            freelancerProfile {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              employmentRecords {
                id
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDate
                endDate
                description
                city
                country
              }
              availability {
                id
                capacity
                availabilityDateTime
                name
                createdDateTime
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              countryDetails {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            ciphertext
            talentProfile {
              personId
              identity {
                id
                ciphertext
              }
              personalData {
                firstName
                lastName
                title
                description
                profileUrl
                profileState
              }
              preferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                contractToHire
              }
              settings {
                provider
                suspended
                disabled
                status
                updatedDateTime
              }
              personAvailability {
                personId
                capacity
                createdDateTime
                availabilityDateTime
                updatedDateTime
                minHours
                maxHours
                availableDays
              }
              projectList {
                totalProjects
                updatedDateTime
              }
              communityCertificates {
                personId
                certificateAttachmentId
                certificationNumber
                expirationDate
                businessName
                visibility
              }
              profileCompleteness {
                personId
                pciActual
                pciDisplay
                pciAction
                pciActionCredit
                pciDateTime
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitExists
                overviewExists
                passedTestsCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                esnCount
                updatedDateTime
              }
              otherExperiences {
                id
                personId
                subject
                description
                active
              }
              educationRecords {
                id
                personId
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDateTime
                endDateTime
                comment
              }
              employmentRecords {
                id
                personId
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDateTime
                endDateTime
                description
                city
                country
              }
              skills {
                id
                skill
                prettyName
                status
                description
                externalLink
                wikipediaPageId
                freebaseMachineId
                migrateTo
                ctime
                mtime
                rank
              }
              jobCategories {
                id
                name
              }
              profileAggregates {
                lastWorkedOn
                totalHourlyJobs
                totalFixedJobs
                topRatedStatus
                totalFeedback
                totalEarnings
                totalJobs
              }
              specializedProfiles {
                personId
                profileId
                occupationId
                status
                rank
                occupations
                primary
                title
                description
                weblink
              }
              specializedProfilesProjects {
                personId
                profileId
              }
            }
          }
          dueDateTime
          state
          description
          currentEscrowAmount {
            rawValue
            currency
            displayValue
          }
          submissionCount
          sequenceId
          payComments
          lastSubmissionCreatedTime
          createdDateTime
          modifiedDateTime
          instructions
          submissionEvents {
            submission {
              id
              createdDateTime
              modifiedDateTime
              sequenceId
            }
            submissionMessage {
              createdDateTime
              message
            }
          }
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.editMilestone
  },

  /**
   * endContractByClient
   * @param variables - Operation variables
   * @param variables.contractId - Contract identifier
   * @param variables.input - Contract end payload
   * @returns Types.ContractActionResponse | null
   */
  endContractByClient: async (
    client: UpworkGraphQLClient,
    variables: { contractId: string; input: Types.EndContractInput }
  ): Promise<Types.ContractActionResponse | null> => {
    const mutationString = `
      mutation EndContractByClient($contractId: String!, $input: EndContractInput!) {
        endContractByClient(contractId: $contractId, input: $input) {
          success
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.endContractByClient
  },

  /**
   * pauseContract
   * @param variables - Operation variables
   * @param variables.contractId - Contract identifier
   * @param variables.message - Optional message to the counterparty
   * @returns Types.ContractActionResponse | null
   */
  pauseContract: async (
    client: UpworkGraphQLClient,
    variables: { contractId: string; message?: string }
  ): Promise<Types.ContractActionResponse | null> => {
    const mutationString = `
      mutation PauseContract($contractId: String!, $message: String) {
        pauseContract(contractId: $contractId, message: $message) {
          success
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.pauseContract
  },

  /**
   * rejectSubmittedMilestone
   * @param variables - Operation variables
   * @param variables.input - Milestone rejection details
   * @returns Types.MilestoneRejectionResponse | null
   */
  rejectSubmittedMilestone: async (
    client: UpworkGraphQLClient,
    variables: { input?: Types.RejectMilestoneSubmissionInput } = {}
  ): Promise<Types.MilestoneRejectionResponse | null> => {
    const mutationString = `
      mutation RejectSubmittedMilestone($input: RejectMilestoneSubmissionInput) {
        rejectSubmittedMilestone(input: $input) {
          response
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.rejectSubmittedMilestone
  },

  /**
   * restartContract
   * @param variables - Operation variables
   * @param variables.contractId - Contract identifier
   * @param variables.message - Optional message to the counterparty
   * @returns Types.ContractActionResponse | null
   */
  restartContract: async (
    client: UpworkGraphQLClient,
    variables: { contractId: string; message?: string }
  ): Promise<Types.ContractActionResponse | null> => {
    const mutationString = `
      mutation RestartContract($contractId: String!, $message: String) {
        restartContract(contractId: $contractId, message: $message) {
          success
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.restartContract
  },

  /**
   * updateContractHourlyLimit
   * @param variables - Operation variables
   * @param variables.contractId - Contract Id
   * @param variables.updateHourlyLimitRequest - Update hourly limit request
   * @returns Types.ContractActionResponse | null
   */
  updateContractHourlyLimit: async (
    client: UpworkGraphQLClient,
    variables: {
      contractId: string
      updateHourlyLimitRequest?: Types.UpdateHourlyLimitRequestInput
    }
  ): Promise<Types.ContractActionResponse | null> => {
    const mutationString = `
      mutation UpdateContractHourlyLimit($contractId: String!, $updateHourlyLimitRequest: UpdateHourlyLimitRequestInput) {
        updateContractHourlyLimit(contractId: $contractId, updateHourlyLimitRequest: $updateHourlyLimitRequest) {
          success
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.updateContractHourlyLimit
  },

  /**
   * sendCustomPayment
   * @param variables - Operation variables
   * @param variables.input - Payment details
   * @returns Types.CustomPaymentResponse | null
   */
  sendCustomPayment: async (
    client: UpworkGraphQLClient,
    variables: { input?: Types.CustomPaymentInput } = {}
  ): Promise<Types.CustomPaymentResponse | null> => {
    const mutationString = `
      mutation SendCustomPayment($input: CustomPaymentInput) {
        sendCustomPayment(input: $input) {
          invoiceId
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.sendCustomPayment
  },

  /**
   * confirmFiles
   * @param variables - Operation variables
   * @param variables.fileIds - List of file IDs to confirm
   * @param variables.skipMissing - Skip missing files without raising an error. Default = true
   * @returns boolean | null
   */
  confirmFiles: async (
    client: UpworkGraphQLClient,
    variables: { fileIds: Array<string>; skipMissing?: boolean }
  ): Promise<boolean | null> => {
    const mutationString = `
      mutation ConfirmFiles($fileIds: [string]!, $skipMissing: Boolean) {
        confirmFiles(fileIds: $fileIds, skipMissing: $skipMissing)
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.confirmFiles
  },

  /**
   * createDirectUploadLinkForJAClientProposal
   * @param variables - Operation variables
   * @param variables.input - Upload input details
   * @returns Types.FileInfo
   */
  createDirectUploadLinkForJAClientProposal: async (
    client: UpworkGraphQLClient,
    variables: { input: Types.CreateDirectUploadLinkInput }
  ): Promise<Types.FileInfo> => {
    const mutationString = `
      mutation CreateDirectUploadLinkForJAClientProposal($input: CreateDirectUploadLinkInput!) {
        createDirectUploadLinkForJAClientProposal(input: $input) {
          id
          uploadUrl
          formKeyValues {
            key
            value
          }
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.createDirectUploadLinkForJAClientProposal
  },

  /**
   * declineClientProposal
   * @param variables - Operation variables
   * @param variables.clientProposalDeclineRequest - Client proposal decline request
   * @returns Types.UpdateClientProposalResult
   */
  declineClientProposal: async (
    client: UpworkGraphQLClient,
    variables: { clientProposalDeclineRequest?: Types.ClientProposalDeclineRequest } = {}
  ): Promise<Types.UpdateClientProposalResult> => {
    const mutationString = `
      mutation DeclineClientProposal($clientProposalDeclineRequest: ClientProposalDeclineRequest) {
        declineClientProposal(clientProposalDeclineRequest: $clientProposalDeclineRequest) {
          proposal {
            id
            user {
              id
              nid
              rid
              name
              firstName
              lastName
              photoUrl
              publicUrl
              email
              location {
                countryName
                cityName
                zip
                timezone
                timezoneName
                street
                stateCode
                offsetToUTC
              }
              freelancerProfile {
                id
                fullName
                firstName
                lastName
                email
              }
              ciphertext
              talentProfile {
                personId
              }
            }
            organization {
              id
              rid
              legacyId
              name
              type
              legacyType
              flag {
                client
                vendor
                agency
                individual
              }
              active
              hidden
              company {
                id
                name
                description
                legacyType
                logoURL
                phone
                displayName
                teamsEnabled
                canHire
                hidden
                includeInStats
                companyName
                state
                city
                address
                zip
                timezone
                accountingEntity
                billingType
                summary
                paymentVerificationStatus
              }
              photoUrl
              creationDate
              agencyOffers {
                totalCount
              }
              offerByRootCompanyFilter {
                freelancerId_any
                agencyTeamOrgId_any
                clientOrgId_any
              }
              offerByClientFilter {
                teamId_any
                contactPersonId_any
                offerType_any
                milestoneState_any
                escrowRefundStatus_any
                freelancerId_any
                agreementKind_any
              }
              jobPosting {
                totalCount
              }
              jobPostingFilter {
                title_eq
                postByTeamIds_any
                postByPersonIds_any
                excludePostByPersonIds_any
                categoryGroupIds_any
                contractType_eq
                createdDateTimeFrom_eq
                createdDateTimeTo_eq
              }
            }
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            terms {
              chargeRate {
                rawValue
                currency
                displayValue
              }
              estimatedDuration {
                id
                label
              }
              upfrontPaymentPercent
            }
            coverLetter
            projectPlan {
              id
              milestones {
                description
                dueDate
                amount
              }
            }
            auditDetails {
              createdDateTime
              modifiedDateTime
            }
            status {
              status
              reason {
                id
                reason
                description
              }
            }
            annotations
          }
          status
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.declineClientProposal
  },

  /**
   * hideClientProposal
   * @param variables - Operation variables
   * @param variables.clientProposalHideRequest - Client proposal hide request
   * @returns Types.UpdateClientProposalResult
   */
  hideClientProposal: async (
    client: UpworkGraphQLClient,
    variables: { clientProposalHideRequest: Types.ClientProposalHideRequest }
  ): Promise<Types.UpdateClientProposalResult> => {
    const mutationString = `
      mutation HideClientProposal($clientProposalHideRequest: ClientProposalHideRequest!) {
        hideClientProposal(clientProposalHideRequest: $clientProposalHideRequest) {
          proposal {
            id
            user {
              id
              nid
              rid
              name
              firstName
              lastName
              photoUrl
              publicUrl
              email
              location {
                countryName
                cityName
                zip
                timezone
                timezoneName
                street
                stateCode
                offsetToUTC
              }
              freelancerProfile {
                id
                fullName
                firstName
                lastName
                email
              }
              ciphertext
              talentProfile {
                personId
              }
            }
            organization {
              id
              rid
              legacyId
              name
              type
              legacyType
              flag {
                client
                vendor
                agency
                individual
              }
              active
              hidden
              company {
                id
                name
                description
                legacyType
                logoURL
                phone
                displayName
                teamsEnabled
                canHire
                hidden
                includeInStats
                companyName
                state
                city
                address
                zip
                timezone
                accountingEntity
                billingType
                summary
                paymentVerificationStatus
              }
              photoUrl
              creationDate
              agencyOffers {
                totalCount
              }
              offerByRootCompanyFilter {
                freelancerId_any
                agencyTeamOrgId_any
                clientOrgId_any
              }
              offerByClientFilter {
                teamId_any
                contactPersonId_any
                offerType_any
                milestoneState_any
                escrowRefundStatus_any
                freelancerId_any
                agreementKind_any
              }
              jobPosting {
                totalCount
              }
              jobPostingFilter {
                title_eq
                postByTeamIds_any
                postByPersonIds_any
                excludePostByPersonIds_any
                categoryGroupIds_any
                contractType_eq
                createdDateTimeFrom_eq
                createdDateTimeTo_eq
              }
            }
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            terms {
              chargeRate {
                rawValue
                currency
                displayValue
              }
              estimatedDuration {
                id
                label
              }
              upfrontPaymentPercent
            }
            coverLetter
            projectPlan {
              id
              milestones {
                description
                dueDate
                amount
              }
            }
            auditDetails {
              createdDateTime
              modifiedDateTime
            }
            status {
              status
              reason {
                id
                reason
                description
              }
            }
            annotations
          }
          status
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.hideClientProposal
  },

  /**
   * markClientProposalAsRead
   * @param variables - Operation variables
   * @param variables.clientProposalReadRequest - Client proposal read request
   * @returns Types.UpdateClientProposalResult
   */
  markClientProposalAsRead: async (
    client: UpworkGraphQLClient,
    variables: { clientProposalReadRequest?: Types.ClientProposalReadRequest } = {}
  ): Promise<Types.UpdateClientProposalResult> => {
    const mutationString = `
      mutation MarkClientProposalAsRead($clientProposalReadRequest: ClientProposalReadRequest) {
        markClientProposalAsRead(clientProposalReadRequest: $clientProposalReadRequest) {
          proposal {
            id
            user {
              id
              nid
              rid
              name
              firstName
              lastName
              photoUrl
              publicUrl
              email
              location {
                countryName
                cityName
                zip
                timezone
                timezoneName
                street
                stateCode
                offsetToUTC
              }
              freelancerProfile {
                id
                fullName
                firstName
                lastName
                email
              }
              ciphertext
              talentProfile {
                personId
              }
            }
            organization {
              id
              rid
              legacyId
              name
              type
              legacyType
              flag {
                client
                vendor
                agency
                individual
              }
              active
              hidden
              company {
                id
                name
                description
                legacyType
                logoURL
                phone
                displayName
                teamsEnabled
                canHire
                hidden
                includeInStats
                companyName
                state
                city
                address
                zip
                timezone
                accountingEntity
                billingType
                summary
                paymentVerificationStatus
              }
              photoUrl
              creationDate
              agencyOffers {
                totalCount
              }
              offerByRootCompanyFilter {
                freelancerId_any
                agencyTeamOrgId_any
                clientOrgId_any
              }
              offerByClientFilter {
                teamId_any
                contactPersonId_any
                offerType_any
                milestoneState_any
                escrowRefundStatus_any
                freelancerId_any
                agreementKind_any
              }
              jobPosting {
                totalCount
              }
              jobPostingFilter {
                title_eq
                postByTeamIds_any
                postByPersonIds_any
                excludePostByPersonIds_any
                categoryGroupIds_any
                contractType_eq
                createdDateTimeFrom_eq
                createdDateTimeTo_eq
              }
            }
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            terms {
              chargeRate {
                rawValue
                currency
                displayValue
              }
              estimatedDuration {
                id
                label
              }
              upfrontPaymentPercent
            }
            coverLetter
            projectPlan {
              id
              milestones {
                description
                dueDate
                amount
              }
            }
            auditDetails {
              createdDateTime
              modifiedDateTime
            }
            status {
              status
              reason {
                id
                reason
                description
              }
            }
            annotations
          }
          status
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.markClientProposalAsRead
  },

  /**
   * messageClientProposal
   * @param variables - Operation variables
   * @param variables.clientProposalMessageRequest - Client proposal message request
   * @returns Types.UpdateClientProposalResult
   */
  messageClientProposal: async (
    client: UpworkGraphQLClient,
    variables: { clientProposalMessageRequest?: Types.ClientProposalMessageRequest } = {}
  ): Promise<Types.UpdateClientProposalResult> => {
    const mutationString = `
      mutation MessageClientProposal($clientProposalMessageRequest: ClientProposalMessageRequest) {
        messageClientProposal(clientProposalMessageRequest: $clientProposalMessageRequest) {
          proposal {
            id
            user {
              id
              nid
              rid
              name
              firstName
              lastName
              photoUrl
              publicUrl
              email
              location {
                countryName
                cityName
                zip
                timezone
                timezoneName
                street
                stateCode
                offsetToUTC
              }
              freelancerProfile {
                id
                fullName
                firstName
                lastName
                email
              }
              ciphertext
              talentProfile {
                personId
              }
            }
            organization {
              id
              rid
              legacyId
              name
              type
              legacyType
              flag {
                client
                vendor
                agency
                individual
              }
              active
              hidden
              company {
                id
                name
                description
                legacyType
                logoURL
                phone
                displayName
                teamsEnabled
                canHire
                hidden
                includeInStats
                companyName
                state
                city
                address
                zip
                timezone
                accountingEntity
                billingType
                summary
                paymentVerificationStatus
              }
              photoUrl
              creationDate
              agencyOffers {
                totalCount
              }
              offerByRootCompanyFilter {
                freelancerId_any
                agencyTeamOrgId_any
                clientOrgId_any
              }
              offerByClientFilter {
                teamId_any
                contactPersonId_any
                offerType_any
                milestoneState_any
                escrowRefundStatus_any
                freelancerId_any
                agreementKind_any
              }
              jobPosting {
                totalCount
              }
              jobPostingFilter {
                title_eq
                postByTeamIds_any
                postByPersonIds_any
                excludePostByPersonIds_any
                categoryGroupIds_any
                contractType_eq
                createdDateTimeFrom_eq
                createdDateTimeTo_eq
              }
            }
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            terms {
              chargeRate {
                rawValue
                currency
                displayValue
              }
              estimatedDuration {
                id
                label
              }
              upfrontPaymentPercent
            }
            coverLetter
            projectPlan {
              id
              milestones {
                description
                dueDate
                amount
              }
            }
            auditDetails {
              createdDateTime
              modifiedDateTime
            }
            status {
              status
              reason {
                id
                reason
                description
              }
            }
            annotations
          }
          status
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.messageClientProposal
  },

  /**
   * shortlistClientProposal
   * @param variables - Operation variables
   * @param variables.clientProposalShortlistRequest - Client proposal shortlist request
   * @returns Types.UpdateClientProposalResult
   */
  shortlistClientProposal: async (
    client: UpworkGraphQLClient,
    variables: { clientProposalShortlistRequest?: Types.ClientProposalShortlistRequest } = {}
  ): Promise<Types.UpdateClientProposalResult> => {
    const mutationString = `
      mutation ShortlistClientProposal($clientProposalShortlistRequest: ClientProposalShortlistRequest) {
        shortlistClientProposal(clientProposalShortlistRequest: $clientProposalShortlistRequest) {
          proposal {
            id
            user {
              id
              nid
              rid
              name
              firstName
              lastName
              photoUrl
              publicUrl
              email
              location {
                countryName
                cityName
                zip
                timezone
                timezoneName
                street
                stateCode
                offsetToUTC
              }
              freelancerProfile {
                id
                fullName
                firstName
                lastName
                email
              }
              ciphertext
              talentProfile {
                personId
              }
            }
            organization {
              id
              rid
              legacyId
              name
              type
              legacyType
              flag {
                client
                vendor
                agency
                individual
              }
              active
              hidden
              company {
                id
                name
                description
                legacyType
                logoURL
                phone
                displayName
                teamsEnabled
                canHire
                hidden
                includeInStats
                companyName
                state
                city
                address
                zip
                timezone
                accountingEntity
                billingType
                summary
                paymentVerificationStatus
              }
              photoUrl
              creationDate
              agencyOffers {
                totalCount
              }
              offerByRootCompanyFilter {
                freelancerId_any
                agencyTeamOrgId_any
                clientOrgId_any
              }
              offerByClientFilter {
                teamId_any
                contactPersonId_any
                offerType_any
                milestoneState_any
                escrowRefundStatus_any
                freelancerId_any
                agreementKind_any
              }
              jobPosting {
                totalCount
              }
              jobPostingFilter {
                title_eq
                postByTeamIds_any
                postByPersonIds_any
                excludePostByPersonIds_any
                categoryGroupIds_any
                contractType_eq
                createdDateTimeFrom_eq
                createdDateTimeTo_eq
              }
            }
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            terms {
              chargeRate {
                rawValue
                currency
                displayValue
              }
              estimatedDuration {
                id
                label
              }
              upfrontPaymentPercent
            }
            coverLetter
            projectPlan {
              id
              milestones {
                description
                dueDate
                amount
              }
            }
            auditDetails {
              createdDateTime
              modifiedDateTime
            }
            status {
              status
              reason {
                id
                reason
                description
              }
            }
            annotations
          }
          status
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.shortlistClientProposal
  },

  /**
   * addFreelancerEmploymentRecord
   * @param variables - Operation variables
   * @param variables.input - Input data for creating employment record
   * @returns Types.FreelancerProfileEmploymentRecord | null
   */
  addFreelancerEmploymentRecord: async (
    client: UpworkGraphQLClient,
    variables: { input: Types.CreateEmploymentRecordInput }
  ): Promise<Types.FreelancerProfileEmploymentRecord | null> => {
    const mutationString = `
      mutation AddFreelancerEmploymentRecord($input: CreateEmploymentRecordInput!) {
        addFreelancerEmploymentRecord(input: $input) {
          id
          user {
            id
            nid
            rid
            name
            firstName
            lastName
            photoUrl
            publicUrl
            email
            location {
              countryName
              cityName
              zip
              timezone
              timezoneName
              street
              stateCode
              offsetToUTC
            }
            freelancerProfile {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              availability {
                id
                capacity
                availabilityDateTime
                name
                createdDateTime
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              countryDetails {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            ciphertext
            talentProfile {
              personId
              identity {
                id
                ciphertext
              }
              personalData {
                firstName
                lastName
                title
                description
                profileUrl
                profileState
              }
              preferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                contractToHire
              }
              settings {
                provider
                suspended
                disabled
                status
                updatedDateTime
              }
              personAvailability {
                personId
                capacity
                createdDateTime
                availabilityDateTime
                updatedDateTime
                minHours
                maxHours
                availableDays
              }
              projectList {
                totalProjects
                updatedDateTime
              }
              communityCertificates {
                personId
                certificateAttachmentId
                certificationNumber
                expirationDate
                businessName
                visibility
              }
              profileCompleteness {
                personId
                pciActual
                pciDisplay
                pciAction
                pciActionCredit
                pciDateTime
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitExists
                overviewExists
                passedTestsCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                esnCount
                updatedDateTime
              }
              otherExperiences {
                id
                personId
                subject
                description
                active
              }
              educationRecords {
                id
                personId
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDateTime
                endDateTime
                comment
              }
              employmentRecords {
                id
                personId
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDateTime
                endDateTime
                description
                city
                country
              }
              skills {
                id
                skill
                prettyName
                status
                description
                externalLink
                wikipediaPageId
                freebaseMachineId
                migrateTo
                ctime
                mtime
                rank
              }
              jobCategories {
                id
                name
              }
              profileAggregates {
                lastWorkedOn
                totalHourlyJobs
                totalFixedJobs
                topRatedStatus
                totalFeedback
                totalEarnings
                totalJobs
              }
              specializedProfiles {
                personId
                profileId
                occupationId
                status
                rank
                occupations
                primary
                title
                description
                weblink
              }
              specializedProfilesProjects {
                personId
                profileId
              }
            }
          }
          companyName
          jobTitle
          standardizedCompanyId
          standardizedJobTitleId
          role
          startDate
          endDate
          description
          city
          country
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.addFreelancerEmploymentRecord
  },

  /**
   * addFreelancerLanguage
   * @param variables - Operation variables
   * @param variables.input - Input data for creating language
   * @returns Types.FreelancerProfileLanguage | null
   */
  addFreelancerLanguage: async (
    client: UpworkGraphQLClient,
    variables: { input: Types.FreelancerLanguageInput }
  ): Promise<Types.FreelancerProfileLanguage | null> => {
    const mutationString = `
      mutation AddFreelancerLanguage($input: FreelancerLanguageInput!) {
        addFreelancerLanguage(input: $input) {
          id
          language {
            iso639Code
            active
            englishName
          }
          verified
          verifiedByCertificate
          verifiedByFeedback
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.addFreelancerLanguage
  },

  /**
   * addFreelancerOtherExperience
   * @param variables - Operation variables
   * @param variables.input - Input data for creating other experience
   * @returns Types.FreelancerProfileOtherExperience | null
   */
  addFreelancerOtherExperience: async (
    client: UpworkGraphQLClient,
    variables: { input: Types.OtherExperienceInput }
  ): Promise<Types.FreelancerProfileOtherExperience | null> => {
    const mutationString = `
      mutation AddFreelancerOtherExperience($input: OtherExperienceInput!) {
        addFreelancerOtherExperience(input: $input) {
          id
          user {
            id
            nid
            rid
            name
            firstName
            lastName
            photoUrl
            publicUrl
            email
            location {
              countryName
              cityName
              zip
              timezone
              timezoneName
              street
              stateCode
              offsetToUTC
            }
            freelancerProfile {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              employmentRecords {
                id
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDate
                endDate
                description
                city
                country
              }
              availability {
                id
                capacity
                availabilityDateTime
                name
                createdDateTime
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              countryDetails {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            ciphertext
            talentProfile {
              personId
              identity {
                id
                ciphertext
              }
              personalData {
                firstName
                lastName
                title
                description
                profileUrl
                profileState
              }
              preferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                contractToHire
              }
              settings {
                provider
                suspended
                disabled
                status
                updatedDateTime
              }
              personAvailability {
                personId
                capacity
                createdDateTime
                availabilityDateTime
                updatedDateTime
                minHours
                maxHours
                availableDays
              }
              projectList {
                totalProjects
                updatedDateTime
              }
              communityCertificates {
                personId
                certificateAttachmentId
                certificationNumber
                expirationDate
                businessName
                visibility
              }
              profileCompleteness {
                personId
                pciActual
                pciDisplay
                pciAction
                pciActionCredit
                pciDateTime
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitExists
                overviewExists
                passedTestsCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                esnCount
                updatedDateTime
              }
              otherExperiences {
                id
                personId
                subject
                description
                active
              }
              educationRecords {
                id
                personId
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDateTime
                endDateTime
                comment
              }
              employmentRecords {
                id
                personId
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDateTime
                endDateTime
                description
                city
                country
              }
              skills {
                id
                skill
                prettyName
                status
                description
                externalLink
                wikipediaPageId
                freebaseMachineId
                migrateTo
                ctime
                mtime
                rank
              }
              jobCategories {
                id
                name
              }
              profileAggregates {
                lastWorkedOn
                totalHourlyJobs
                totalFixedJobs
                topRatedStatus
                totalFeedback
                totalEarnings
                totalJobs
              }
              specializedProfiles {
                personId
                profileId
                occupationId
                status
                rank
                occupations
                primary
                title
                description
                weblink
              }
              specializedProfilesProjects {
                personId
                profileId
              }
            }
          }
          subject
          description
          active
          createdDateTime
          updatedDateTime
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.addFreelancerOtherExperience
  },

  /**
   * addTeamActivity
   * @param variables - Operation variables
   * @param variables.orgId - The org id where the team belongs to
   * @param variables.teamId - The team id where activity is being created
   * @param variables.request - Activity object that is going to be created
   * @returns Types.ProcessAddResponse | null
   */
  addTeamActivity: async (
    client: UpworkGraphQLClient,
    variables: { orgId: string; teamId?: string; request: Types.AddTeamActivityRequest }
  ): Promise<Types.ProcessAddResponse | null> => {
    const mutationString = `
      mutation AddTeamActivity($orgId: String!, $teamId: String, $request: AddTeamActivityRequest!) {
        addTeamActivity(orgId: $orgId, teamId: $teamId, request: $request) {
          id
          success
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.addTeamActivity
  },

  /**
   * addUserToRoom
   * @param variables - Operation variables
   * @param variables.roomId - Room identifier
   * @param variables.roomUsers - List of users to add
   * @returns boolean
   */
  addUserToRoom: async (
    client: UpworkGraphQLClient,
    variables: { roomId: string; roomUsers: Array<Types.RoomUserInput> }
  ): Promise<boolean> => {
    const mutationString = `
      mutation AddUserToRoom($roomId: String!, $roomUsers: [RoomUserInput]!) {
        addUserToRoom(roomId: $roomId, roomUsers: $roomUsers)
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.addUserToRoom
  },

  /**
   * archiveRoom
   * @param variables - Operation variables
   * @param variables.roomId - Room identifier
   * @returns Types.Room
   */
  archiveRoom: async (
    client: UpworkGraphQLClient,
    variables: { roomId: string }
  ): Promise<Types.Room> => {
    const mutationString = `
      mutation ArchiveRoom($roomId: String!) {
        archiveRoom(roomId: $roomId) {
          id
          roomName
          organization {
            id
            rid
            legacyId
            name
            type
            legacyType
            flag {
              client
              vendor
              agency
              individual
            }
            active
            hidden
            userId
            company {
              id
              name
              description
              legacyType
              logoURL
              contactUser {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              phone
              displayName
              teamsEnabled
              canHire
              hidden
              includeInStats
              companyName
              country {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              state
              city
              address
              zip
              timezone
              accountingEntity
              billingType
              summary
              paymentVerificationStatus
              paymentVerification {
                status
                paymentVerified
              }
              agencyDetails {
                vetted
                topRatedStatus
                topRatedPlusStatus
              }
              jobPosts {
                totalCount
              }
              jobPostsFilter {
                teamIds
                statuses
                excludeHidden
                fields
              }
            }
            photoUrl
            creationDate
            staffs {
              totalCount
              pageInfo {
                endCursor
                hasNextPage
              }
            }
            pagination {
              after
              first
            }
            userPermissions {
              offset
            }
            filter {
              userId
              resourceType_eq
              limit
              offset
              performExternalChecks_eq
              teamOrgIds_any
              returnAllTeams
            }
            agencyOffers {
              totalCount
              edges {
                cursor
              }
            }
            offerByRootCompanyFilter {
              freelancerId_any
              agencyTeamOrgId_any
              clientOrgId_any
              commonFilter {
                text_eq
                states_any
                startDatePeriod_bt
                endDatePeriod_bt
                catalogProject
              }
            }
            offerByClientFilter {
              teamId_any
              contactPersonId_any
              offerType_any
              milestoneState_any
              escrowRefundStatus_any
              freelancerId_any
              agreementKind_any
            }
            clientTimeReport {
              dateWorkedOn
              weekWorkedOn
              monthWorkedOn
              yearWorkedOn
              team {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              contractOffer {
                id
                startDateTime
                endDateTime
                type
                state
                milestoneState
                escrowRefundStatus
                title
                lastUpdatedDateTime
                lastPublishedDateTime
                inPrivateTalentCloud
                offerCreatedDateTime
                catalogProject
              }
              contract {
                id
                title
                status
                deliveryModel
                kind
                isPtc
                createDate
                modifyDate
                startDate
                endDate
                offerId
                changingUserType
                projectId
              }
              termId
              task
              taskDescription
              memo
              totalHoursWorked
              totalCharges
              totalOnlineHoursWorked
              totalOnlineCharge
              totalOfflineHoursWorked
              totalOfflineCharge
              billRate {
                id
                value
                code
                offerRef
              }
            }
            timeReportDate_bt {
              rangeStart
              rangeEnd
            }
            clientContractTimeReport {
              totalCount
              edges {
                cursor
              }
            }
            privateTalentClouds {
              id
              name
              joinInstructions
              welcomeMessageToAddedFreelancers
              joinRequestAutoApproved
              messageAfterJoinRequest
              joinRejectionMessage
              externalName
              active
              logoImageLarge {
                name
                uri
                encoding
                size
                createdDateTime
              }
              description
              onboardingTaskEnabled
              onboardingTaskEnableUpdatedDateTime
              selectable
            }
            jobPostingFilter {
              title_eq
              postByTeamIds_any
              postByPersonIds_any
              statusAndAccess_any {
                statuses_any
                accesses_any
              }
              excludePostByPersonIds_any
              categoryGroupIds_any
              contractType_eq
              createdDateTimeFrom_eq
              createdDateTimeTo_eq
            }
          }
          creator {
            role
          }
          createdAtDateTime
          public
          topic
          numUnread
          roomFavoriteDateTime
          favorite
          numUnreadMentions
          numUsers
          joinDateTime
          lastVisitedDateTime
          lastReadDateTime
          roomType
          readOnlyDateTime
          readOnly
          blockDateTime
          hidden
          muted
          contractId
          contract {
            id
            title
            contractType
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            hasAgency
            offer {
              id
              title
              description
              type
              vendorProposal {
                id
                coverLetter
                proposalCoverLetter
                annotations
              }
              closeJobPostingOnAccept
              offerTerms {
                expectedStartDate
                expectedEndDate
              }
              messageToContractor
              state
              offerFeatures {
                onSiteType
                state
                localDescription
                localFlexibilityDescription
                eor
              }
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
              }
              milestones {
                id
                dueDateTime
                state
                description
                submissionCount
                sequenceId
                payComments
                lastSubmissionCreatedTime
                createdDateTime
                modifiedDateTime
                instructions
              }
              createdUsingBYOFlow
              freelancer {
                id
                fullName
                firstName
                lastName
                email
              }
              payrollOffer
              deliveryModel
              organizationIds
            }
            clientProposal {
              id
              terms {
                upfrontPaymentPercent
              }
              coverLetter
              projectPlan {
                id
              }
              auditDetails {
                createdDateTime
                modifiedDateTime
              }
              status {
                status
              }
              annotations
            }
            weeklyChargeAmount {
              rawValue
              currency
              displayValue
            }
            weeklyHoursLimit
            createdDateTime
            firstContractStartDateTime
            modifiedDateTime
            startDateTime
            endDateTime
            manualTimeAllowed
            hideScreenshots
            last
            weeklyStipendHours
            estimatedDuration {
              id
              label
            }
            status
            suspended
            paused
            contractId
            workDays {
              date
            }
            workDiaryTimeCells {
              cellDateTime
              snapshotDateTime
              overtime
              manual
              activityLevel
              memo
              task {
                id
                description
              }
              mouseEventsCount
              keyboardEventsCount
              activeWindowTitle
              hideScreenshots
              hasScreenshot
              screenshotImageUrl
              screenshotImageUrlMedium
              screenshotImageThumbnail
              webcamEnabled
              webcamImageUrl
              webcamImageThumbnail
              snapshotExpired
            }
            date
            feedback {
              clientFeedback {
                score
                comment
                freelancerResponse
              }
              freelancerFeedback {
                score
                comment
                clientResponse
                recommendScore
              }
            }
          }
          roomNote
          roomNotePresent
          offerIds
          latestStory {
            id
            createdDateTime
            updatedDateTime
            message
            roomStoryNote {
              favorite
              abuseType
              whitelisted
              abuseDetails
            }
            attachments {
              objectReferenceId
              objectType
              metadata {
                key
                value
              }
              createdDateTime
            }
          }
          stories {
            totalCount
            edges {
              cursor
            }
          }
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.archiveRoom
  },

  /**
   * archiveTeamActivity
   * @param variables - Operation variables
   * @param variables.orgId - The org id where the team belongs to
   * @param variables.teamId - The team id where activity is being archived
   * @param variables.codes - List of activity codes to be archived
   * @returns Types.ProcessUpdateResponse | null
   */
  archiveTeamActivity: async (
    client: UpworkGraphQLClient,
    variables: { orgId: string; teamId?: string; codes: Array<string> }
  ): Promise<Types.ProcessUpdateResponse | null> => {
    const mutationString = `
      mutation ArchiveTeamActivity($orgId: String!, $teamId: String, $codes: [string]!) {
        archiveTeamActivity(orgId: $orgId, teamId: $teamId, codes: $codes) {
          success
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.archiveTeamActivity
  },

  /**
   * assignTeamActivityToTheContract
   * @param variables - Operation variables
   * @param variables.orgId - The org id where the team belongs to
   * @param variables.teamId - The team id where activity is being assigned
   * @param variables.contractId - The contract id where activity is being assigned
   * @param variables.codes - List of activity codes to be assigned
   * @returns Types.ProcessUpdateResponse | null
   */
  assignTeamActivityToTheContract: async (
    client: UpworkGraphQLClient,
    variables: { orgId: string; teamId?: string; contractId: string; codes: Array<string> }
  ): Promise<Types.ProcessUpdateResponse | null> => {
    const mutationString = `
      mutation AssignTeamActivityToTheContract($orgId: String!, $teamId: String, $contractId: String!, $codes: [string]!) {
        assignTeamActivityToTheContract(orgId: $orgId, teamId: $teamId, contractId: $contractId, codes: $codes) {
          success
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.assignTeamActivityToTheContract
  },

  /**
   * createOrganization
   * @param variables - Operation variables
   * @param variables.input - Input for creating organization request
   * @returns Types.AccountProcessInstance
   */
  createOrganization: async (
    client: UpworkGraphQLClient,
    variables: { input: Types.CreateOrganizationInput }
  ): Promise<Types.AccountProcessInstance> => {
    const mutationString = `
      mutation CreateOrganization($input: CreateOrganizationInput!) {
        createOrganization(input: $input) {
          id
          success
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.createOrganization
  },

  /**
   * createRoomStoryV2
   * @param variables - Operation variables
   * @param variables.input - Story creation parameters
   * @returns Types.RoomStory
   */
  createRoomStoryV2: async (
    client: UpworkGraphQLClient,
    variables: { input: Types.RoomStoryCreateInputV2 }
  ): Promise<Types.RoomStory> => {
    const mutationString = `
      mutation CreateRoomStoryV2($input: RoomStoryCreateInputV2!) {
        createRoomStoryV2(input: $input) {
          id
          room {
            id
            roomName
            organization {
              id
              rid
              legacyId
              name
              type
              legacyType
              flag {
                client
                vendor
                agency
                individual
              }
              active
              hidden
              userId
              company {
                id
                name
                description
                legacyType
                logoURL
                phone
                displayName
                teamsEnabled
                canHire
                hidden
                includeInStats
                companyName
                state
                city
                address
                zip
                timezone
                accountingEntity
                billingType
                summary
                paymentVerificationStatus
              }
              photoUrl
              creationDate
              staffs {
                totalCount
              }
              pagination {
                after
                first
              }
              userPermissions {
                offset
              }
              filter {
                userId
                resourceType_eq
                limit
                offset
                performExternalChecks_eq
                teamOrgIds_any
                returnAllTeams
              }
              agencyOffers {
                totalCount
              }
              offerByRootCompanyFilter {
                freelancerId_any
                agencyTeamOrgId_any
                clientOrgId_any
              }
              offerByClientFilter {
                teamId_any
                contactPersonId_any
                offerType_any
                milestoneState_any
                escrowRefundStatus_any
                freelancerId_any
                agreementKind_any
              }
              clientTimeReport {
                dateWorkedOn
                weekWorkedOn
                monthWorkedOn
                yearWorkedOn
                termId
                task
                taskDescription
                memo
                totalHoursWorked
                totalCharges
                totalOnlineHoursWorked
                totalOnlineCharge
                totalOfflineHoursWorked
                totalOfflineCharge
              }
              timeReportDate_bt {
                rangeStart
                rangeEnd
              }
              clientContractTimeReport {
                totalCount
              }
              privateTalentClouds {
                id
                name
                joinInstructions
                welcomeMessageToAddedFreelancers
                joinRequestAutoApproved
                messageAfterJoinRequest
                joinRejectionMessage
                externalName
                active
                description
                onboardingTaskEnabled
                onboardingTaskEnableUpdatedDateTime
                selectable
              }
              jobPosting {
                totalCount
              }
              jobPostingFilter {
                title_eq
                postByTeamIds_any
                postByPersonIds_any
                excludePostByPersonIds_any
                categoryGroupIds_any
                contractType_eq
                createdDateTimeFrom_eq
                createdDateTimeTo_eq
              }
            }
            creator {
              user {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              organization {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              role
            }
            createdAtDateTime
            public
            topic
            numUnread
            roomFavoriteDateTime
            favorite
            numUnreadMentions
            numUsers
            joinDateTime
            lastVisitedDateTime
            lastReadDateTime
            roomType
            readOnlyDateTime
            readOnly
            blockDateTime
            hidden
            muted
            contractId
            contract {
              id
              title
              contractType
              job {
                id
                canClientReceiveContractProposal
                organizationIds
              }
              hasAgency
              offer {
                id
                title
                description
                type
                closeJobPostingOnAccept
                messageToContractor
                state
                createdUsingBYOFlow
                payrollOffer
                deliveryModel
                organizationIds
              }
              clientProposal {
                id
                coverLetter
                annotations
              }
              vendorProposal {
                id
                coverLetter
                proposalCoverLetter
                annotations
              }
              weeklyChargeAmount {
                rawValue
                currency
                displayValue
              }
              weeklyHoursLimit
              createdDateTime
              firstContractStartDateTime
              modifiedDateTime
              startDateTime
              endDateTime
              manualTimeAllowed
              hideScreenshots
              last
              weeklyStipendHours
              estimatedDuration {
                id
                label
              }
              status
              suspended
              freelancer {
                id
                fullName
                firstName
                lastName
                email
              }
              paused
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
              }
              milestones {
                id
                dueDateTime
                state
                description
                submissionCount
                sequenceId
                payComments
                lastSubmissionCreatedTime
                createdDateTime
                modifiedDateTime
                instructions
              }
              contractId
              workDays {
                date
              }
              workDiaryTimeCells {
                cellDateTime
                snapshotDateTime
                overtime
                manual
                activityLevel
                memo
                mouseEventsCount
                keyboardEventsCount
                activeWindowTitle
                hideScreenshots
                hasScreenshot
                screenshotImageUrl
                screenshotImageUrlMedium
                screenshotImageThumbnail
                webcamEnabled
                webcamImageUrl
                webcamImageThumbnail
                snapshotExpired
              }
              date
            }
            contractDetails {
              id
              title
              status
              closingReason {
                id
                apiRef
                reason
              }
              deliveryModel
              kind
              isPtc
              createDate
              modifyDate
              startDate
              endDate
              offerId
              job {
                id
                version
                visibility
              }
              freelancer {
                id
                rid
                name
                photoUrl
                firstName
                lastName
                email
              }
              changingUserType
              metadata {
                agencyContract
              }
              hourlyLimits {
                id
                weeklyLimit
                createDate
                modifyDate
                startDate
                endDate
                legacyId
              }
              projectId
            }
            roomNote
            roomNotePresent
            offerIds
            stories {
              totalCount
              edges {
                cursor
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
          }
          createdDateTime
          updatedDateTime
          message
          roomStoryNote {
            favorite
            abuseType
            whitelisted
            abuseDetails
          }
          attachments {
            objectReferenceId
            objectType
            metadata {
              key
              value
            }
            createdDateTime
          }
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.createRoomStoryV2
  },

  /**
   * createRoomV2
   * @param variables - Operation variables
   * @param variables.input - Room creation parameters
   * @returns Types.Room
   */
  createRoomV2: async (
    client: UpworkGraphQLClient,
    variables: { input: Types.RoomCreateInputV2 }
  ): Promise<Types.Room> => {
    const mutationString = `
      mutation CreateRoomV2($input: RoomCreateInputV2!) {
        createRoomV2(input: $input) {
          id
          roomName
          organization {
            id
            rid
            legacyId
            name
            type
            legacyType
            flag {
              client
              vendor
              agency
              individual
            }
            active
            hidden
            userId
            company {
              id
              name
              description
              legacyType
              logoURL
              contactUser {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              phone
              displayName
              teamsEnabled
              canHire
              hidden
              includeInStats
              companyName
              country {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              state
              city
              address
              zip
              timezone
              accountingEntity
              billingType
              summary
              paymentVerificationStatus
              paymentVerification {
                status
                paymentVerified
              }
              agencyDetails {
                vetted
                topRatedStatus
                topRatedPlusStatus
              }
              jobPosts {
                totalCount
              }
              jobPostsFilter {
                teamIds
                statuses
                excludeHidden
                fields
              }
            }
            photoUrl
            creationDate
            staffs {
              totalCount
              pageInfo {
                endCursor
                hasNextPage
              }
            }
            pagination {
              after
              first
            }
            userPermissions {
              offset
            }
            filter {
              userId
              resourceType_eq
              limit
              offset
              performExternalChecks_eq
              teamOrgIds_any
              returnAllTeams
            }
            agencyOffers {
              totalCount
              edges {
                cursor
              }
            }
            offerByRootCompanyFilter {
              freelancerId_any
              agencyTeamOrgId_any
              clientOrgId_any
              commonFilter {
                text_eq
                states_any
                startDatePeriod_bt
                endDatePeriod_bt
                catalogProject
              }
            }
            offerByClientFilter {
              teamId_any
              contactPersonId_any
              offerType_any
              milestoneState_any
              escrowRefundStatus_any
              freelancerId_any
              agreementKind_any
            }
            clientTimeReport {
              dateWorkedOn
              weekWorkedOn
              monthWorkedOn
              yearWorkedOn
              team {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              contractOffer {
                id
                startDateTime
                endDateTime
                type
                state
                milestoneState
                escrowRefundStatus
                title
                lastUpdatedDateTime
                lastPublishedDateTime
                inPrivateTalentCloud
                offerCreatedDateTime
                catalogProject
              }
              contract {
                id
                title
                status
                deliveryModel
                kind
                isPtc
                createDate
                modifyDate
                startDate
                endDate
                offerId
                changingUserType
                projectId
              }
              termId
              task
              taskDescription
              memo
              totalHoursWorked
              totalCharges
              totalOnlineHoursWorked
              totalOnlineCharge
              totalOfflineHoursWorked
              totalOfflineCharge
              billRate {
                id
                value
                code
                offerRef
              }
            }
            timeReportDate_bt {
              rangeStart
              rangeEnd
            }
            clientContractTimeReport {
              totalCount
              edges {
                cursor
              }
            }
            privateTalentClouds {
              id
              name
              joinInstructions
              welcomeMessageToAddedFreelancers
              joinRequestAutoApproved
              messageAfterJoinRequest
              joinRejectionMessage
              externalName
              active
              logoImageLarge {
                name
                uri
                encoding
                size
                createdDateTime
              }
              description
              onboardingTaskEnabled
              onboardingTaskEnableUpdatedDateTime
              selectable
            }
            jobPostingFilter {
              title_eq
              postByTeamIds_any
              postByPersonIds_any
              statusAndAccess_any {
                statuses_any
                accesses_any
              }
              excludePostByPersonIds_any
              categoryGroupIds_any
              contractType_eq
              createdDateTimeFrom_eq
              createdDateTimeTo_eq
            }
          }
          creator {
            role
          }
          createdAtDateTime
          public
          topic
          numUnread
          roomFavoriteDateTime
          favorite
          numUnreadMentions
          numUsers
          joinDateTime
          lastVisitedDateTime
          lastReadDateTime
          roomType
          readOnlyDateTime
          readOnly
          blockDateTime
          hidden
          muted
          contractId
          contract {
            id
            title
            contractType
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            hasAgency
            offer {
              id
              title
              description
              type
              vendorProposal {
                id
                coverLetter
                proposalCoverLetter
                annotations
              }
              closeJobPostingOnAccept
              offerTerms {
                expectedStartDate
                expectedEndDate
              }
              messageToContractor
              state
              offerFeatures {
                onSiteType
                state
                localDescription
                localFlexibilityDescription
                eor
              }
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
              }
              milestones {
                id
                dueDateTime
                state
                description
                submissionCount
                sequenceId
                payComments
                lastSubmissionCreatedTime
                createdDateTime
                modifiedDateTime
                instructions
              }
              createdUsingBYOFlow
              freelancer {
                id
                fullName
                firstName
                lastName
                email
              }
              payrollOffer
              deliveryModel
              organizationIds
            }
            clientProposal {
              id
              terms {
                upfrontPaymentPercent
              }
              coverLetter
              projectPlan {
                id
              }
              auditDetails {
                createdDateTime
                modifiedDateTime
              }
              status {
                status
              }
              annotations
            }
            weeklyChargeAmount {
              rawValue
              currency
              displayValue
            }
            weeklyHoursLimit
            createdDateTime
            firstContractStartDateTime
            modifiedDateTime
            startDateTime
            endDateTime
            manualTimeAllowed
            hideScreenshots
            last
            weeklyStipendHours
            estimatedDuration {
              id
              label
            }
            status
            suspended
            paused
            contractId
            workDays {
              date
            }
            workDiaryTimeCells {
              cellDateTime
              snapshotDateTime
              overtime
              manual
              activityLevel
              memo
              task {
                id
                description
              }
              mouseEventsCount
              keyboardEventsCount
              activeWindowTitle
              hideScreenshots
              hasScreenshot
              screenshotImageUrl
              screenshotImageUrlMedium
              screenshotImageThumbnail
              webcamEnabled
              webcamImageUrl
              webcamImageThumbnail
              snapshotExpired
            }
            date
            feedback {
              clientFeedback {
                score
                comment
                freelancerResponse
              }
              freelancerFeedback {
                score
                comment
                clientResponse
                recommendScore
              }
            }
          }
          roomNote
          roomNotePresent
          offerIds
          latestStory {
            id
            createdDateTime
            updatedDateTime
            message
            roomStoryNote {
              favorite
              abuseType
              whitelisted
              abuseDetails
            }
            attachments {
              objectReferenceId
              objectType
              metadata {
                key
                value
              }
              createdDateTime
            }
          }
          stories {
            totalCount
            edges {
              cursor
            }
          }
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.createRoomV2
  },

  /**
   * inviteToTeam
   * @param variables - Operation variables
   * @param variables.invitations - Invitations payload
   * @returns Types.InviteToTeamResponse
   */
  inviteToTeam: async (
    client: UpworkGraphQLClient,
    variables: { invitations: Array<Types.InvitationToTeamInput> }
  ): Promise<Types.InviteToTeamResponse> => {
    const mutationString = `
      mutation InviteToTeam($invitations: [InvitationToTeamInput]!) {
        inviteToTeam(invitations: $invitations) {
          succeeded {
            id
            token
          }
          failed {
            code
            message
            invitation {
              email
              username
            }
          }
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.inviteToTeam
  },

  /**
   * removeFreelancerEmploymentRecord
   * @param variables - Operation variables
   * @param variables.id - ID of the employment record to be deleted
   * @param variables.userId - User ID of the freelancer
   * @returns boolean | null
   */
  removeFreelancerEmploymentRecord: async (
    client: UpworkGraphQLClient,
    variables: { id: string; userId: string }
  ): Promise<boolean | null> => {
    const mutationString = `
      mutation RemoveFreelancerEmploymentRecord($id: String!, $userId: String!) {
        removeFreelancerEmploymentRecord(id: $id, userId: $userId)
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.removeFreelancerEmploymentRecord
  },

  /**
   * removeFreelancerLanguage
   * @param variables - Operation variables
   * @param variables.userId - User ID of the freelancer
   * @param variables.iso639Code - ID of the language to be deleted
   * @returns boolean | null
   */
  removeFreelancerLanguage: async (
    client: UpworkGraphQLClient,
    variables: { userId: string; iso639Code: string }
  ): Promise<boolean | null> => {
    const mutationString = `
      mutation RemoveFreelancerLanguage($userId: String!, $iso639Code: String!) {
        removeFreelancerLanguage(userId: $userId, iso639Code: $iso639Code)
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.removeFreelancerLanguage
  },

  /**
   * removeFreelancerOtherExperience
   * @param variables - Operation variables
   * @param variables.id - ID of the other experience to be deleted
   * @returns boolean | null
   */
  removeFreelancerOtherExperience: async (
    client: UpworkGraphQLClient,
    variables: { id: string }
  ): Promise<boolean | null> => {
    const mutationString = `
      mutation RemoveFreelancerOtherExperience($id: String!) {
        removeFreelancerOtherExperience(id: $id)
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.removeFreelancerOtherExperience
  },

  /**
   * removeRoom
   * @param variables - Operation variables
   * @param variables.roomId - Room identifier
   * @returns string
   */
  removeRoom: async (
    client: UpworkGraphQLClient,
    variables: { roomId: string }
  ): Promise<string> => {
    const mutationString = `
      mutation RemoveRoom($roomId: String!) {
        removeRoom(roomId: $roomId)
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.removeRoom
  },

  /**
   * removeRoomStory
   * @param variables - Operation variables
   * @param variables.roomId - Room identifier
   * @param variables.storyId - Story identifier
   * @returns string
   */
  removeRoomStory: async (
    client: UpworkGraphQLClient,
    variables: { roomId: string; storyId: string }
  ): Promise<string> => {
    const mutationString = `
      mutation RemoveRoomStory($roomId: String!, $storyId: String!) {
        removeRoomStory(roomId: $roomId, storyId: $storyId)
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.removeRoomStory
  },

  /**
   * removeUserFromRoom
   * @param variables - Operation variables
   * @param variables.roomId - Room identifier
   * @param variables.userId - User identifier
   * @param variables.orgId - Organization identifier
   * @returns boolean
   */
  removeUserFromRoom: async (
    client: UpworkGraphQLClient,
    variables: { roomId: string; userId: string; orgId: string }
  ): Promise<boolean> => {
    const mutationString = `
      mutation RemoveUserFromRoom($roomId: String!, $userId: String!, $orgId: String!) {
        removeUserFromRoom(roomId: $roomId, userId: $userId, orgId: $orgId)
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.removeUserFromRoom
  },

  /**
   * roomCreate1on1IfNotExists
   * @param variables - Operation variables
   * @param variables.userId - Target user identifier
   * @param variables.orgId - Organization identifier
   * @returns Types.Room
   */
  roomCreate1on1IfNotExists: async (
    client: UpworkGraphQLClient,
    variables: { userId: string; orgId: string }
  ): Promise<Types.Room> => {
    const mutationString = `
      mutation RoomCreate1on1IfNotExists($userId: String!, $orgId: String!) {
        roomCreate1on1IfNotExists(userId: $userId, orgId: $orgId) {
          id
          roomName
          organization {
            id
            rid
            legacyId
            name
            type
            legacyType
            flag {
              client
              vendor
              agency
              individual
            }
            active
            hidden
            userId
            company {
              id
              name
              description
              legacyType
              logoURL
              contactUser {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              phone
              displayName
              teamsEnabled
              canHire
              hidden
              includeInStats
              companyName
              country {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              state
              city
              address
              zip
              timezone
              accountingEntity
              billingType
              summary
              paymentVerificationStatus
              paymentVerification {
                status
                paymentVerified
              }
              agencyDetails {
                vetted
                topRatedStatus
                topRatedPlusStatus
              }
              jobPosts {
                totalCount
              }
              jobPostsFilter {
                teamIds
                statuses
                excludeHidden
                fields
              }
            }
            photoUrl
            creationDate
            staffs {
              totalCount
              pageInfo {
                endCursor
                hasNextPage
              }
            }
            pagination {
              after
              first
            }
            userPermissions {
              offset
            }
            filter {
              userId
              resourceType_eq
              limit
              offset
              performExternalChecks_eq
              teamOrgIds_any
              returnAllTeams
            }
            agencyOffers {
              totalCount
              edges {
                cursor
              }
            }
            offerByRootCompanyFilter {
              freelancerId_any
              agencyTeamOrgId_any
              clientOrgId_any
              commonFilter {
                text_eq
                states_any
                startDatePeriod_bt
                endDatePeriod_bt
                catalogProject
              }
            }
            offerByClientFilter {
              teamId_any
              contactPersonId_any
              offerType_any
              milestoneState_any
              escrowRefundStatus_any
              freelancerId_any
              agreementKind_any
            }
            clientTimeReport {
              dateWorkedOn
              weekWorkedOn
              monthWorkedOn
              yearWorkedOn
              team {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              contractOffer {
                id
                startDateTime
                endDateTime
                type
                state
                milestoneState
                escrowRefundStatus
                title
                lastUpdatedDateTime
                lastPublishedDateTime
                inPrivateTalentCloud
                offerCreatedDateTime
                catalogProject
              }
              contract {
                id
                title
                status
                deliveryModel
                kind
                isPtc
                createDate
                modifyDate
                startDate
                endDate
                offerId
                changingUserType
                projectId
              }
              termId
              task
              taskDescription
              memo
              totalHoursWorked
              totalCharges
              totalOnlineHoursWorked
              totalOnlineCharge
              totalOfflineHoursWorked
              totalOfflineCharge
              billRate {
                id
                value
                code
                offerRef
              }
            }
            timeReportDate_bt {
              rangeStart
              rangeEnd
            }
            clientContractTimeReport {
              totalCount
              edges {
                cursor
              }
            }
            privateTalentClouds {
              id
              name
              joinInstructions
              welcomeMessageToAddedFreelancers
              joinRequestAutoApproved
              messageAfterJoinRequest
              joinRejectionMessage
              externalName
              active
              logoImageLarge {
                name
                uri
                encoding
                size
                createdDateTime
              }
              description
              onboardingTaskEnabled
              onboardingTaskEnableUpdatedDateTime
              selectable
            }
            jobPostingFilter {
              title_eq
              postByTeamIds_any
              postByPersonIds_any
              statusAndAccess_any {
                statuses_any
                accesses_any
              }
              excludePostByPersonIds_any
              categoryGroupIds_any
              contractType_eq
              createdDateTimeFrom_eq
              createdDateTimeTo_eq
            }
          }
          creator {
            role
          }
          createdAtDateTime
          public
          topic
          numUnread
          roomFavoriteDateTime
          favorite
          numUnreadMentions
          numUsers
          joinDateTime
          lastVisitedDateTime
          lastReadDateTime
          roomType
          readOnlyDateTime
          readOnly
          blockDateTime
          hidden
          muted
          contractId
          contract {
            id
            title
            contractType
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            hasAgency
            offer {
              id
              title
              description
              type
              vendorProposal {
                id
                coverLetter
                proposalCoverLetter
                annotations
              }
              closeJobPostingOnAccept
              offerTerms {
                expectedStartDate
                expectedEndDate
              }
              messageToContractor
              state
              offerFeatures {
                onSiteType
                state
                localDescription
                localFlexibilityDescription
                eor
              }
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
              }
              milestones {
                id
                dueDateTime
                state
                description
                submissionCount
                sequenceId
                payComments
                lastSubmissionCreatedTime
                createdDateTime
                modifiedDateTime
                instructions
              }
              createdUsingBYOFlow
              freelancer {
                id
                fullName
                firstName
                lastName
                email
              }
              payrollOffer
              deliveryModel
              organizationIds
            }
            clientProposal {
              id
              terms {
                upfrontPaymentPercent
              }
              coverLetter
              projectPlan {
                id
              }
              auditDetails {
                createdDateTime
                modifiedDateTime
              }
              status {
                status
              }
              annotations
            }
            weeklyChargeAmount {
              rawValue
              currency
              displayValue
            }
            weeklyHoursLimit
            createdDateTime
            firstContractStartDateTime
            modifiedDateTime
            startDateTime
            endDateTime
            manualTimeAllowed
            hideScreenshots
            last
            weeklyStipendHours
            estimatedDuration {
              id
              label
            }
            status
            suspended
            paused
            contractId
            workDays {
              date
            }
            workDiaryTimeCells {
              cellDateTime
              snapshotDateTime
              overtime
              manual
              activityLevel
              memo
              task {
                id
                description
              }
              mouseEventsCount
              keyboardEventsCount
              activeWindowTitle
              hideScreenshots
              hasScreenshot
              screenshotImageUrl
              screenshotImageUrlMedium
              screenshotImageThumbnail
              webcamEnabled
              webcamImageUrl
              webcamImageThumbnail
              snapshotExpired
            }
            date
            feedback {
              clientFeedback {
                score
                comment
                freelancerResponse
              }
              freelancerFeedback {
                score
                comment
                clientResponse
                recommendScore
              }
            }
          }
          roomNote
          roomNotePresent
          offerIds
          latestStory {
            id
            createdDateTime
            updatedDateTime
            message
            roomStoryNote {
              favorite
              abuseType
              whitelisted
              abuseDetails
            }
            attachments {
              objectReferenceId
              objectType
              metadata {
                key
                value
              }
              createdDateTime
            }
          }
          stories {
            totalCount
            edges {
              cursor
            }
          }
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.roomCreate1on1IfNotExists
  },

  /**
   * unarchiveTeamActivity
   * @param variables - Operation variables
   * @param variables.orgId - The org id where the team belongs to
   * @param variables.teamId - The team id where activity is being unarchived
   * @param variables.codes - List of activity codes to be unarchived
   * @returns Types.ProcessUpdateResponse | null
   */
  unarchiveTeamActivity: async (
    client: UpworkGraphQLClient,
    variables: { orgId: string; teamId?: string; codes: Array<string> }
  ): Promise<Types.ProcessUpdateResponse | null> => {
    const mutationString = `
      mutation UnarchiveTeamActivity($orgId: String!, $teamId: String, $codes: [string]!) {
        unarchiveTeamActivity(orgId: $orgId, teamId: $teamId, codes: $codes) {
          success
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.unarchiveTeamActivity
  },

  /**
   * updateFreelancerAvailability
   * @param variables - Operation variables
   * @param variables.input - Input data for updating availability
   * @returns Types.FreelancerProfileAvailability | null
   */
  updateFreelancerAvailability: async (
    client: UpworkGraphQLClient,
    variables: { input: Types.FreelancerProfileAvailabilityInput }
  ): Promise<Types.FreelancerProfileAvailability | null> => {
    const mutationString = `
      mutation UpdateFreelancerAvailability($input: FreelancerProfileAvailabilityInput!) {
        updateFreelancerAvailability(input: $input) {
          id
          user {
            id
            nid
            rid
            name
            firstName
            lastName
            photoUrl
            publicUrl
            email
            location {
              countryName
              cityName
              zip
              timezone
              timezoneName
              street
              stateCode
              offsetToUTC
            }
            freelancerProfile {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              employmentRecords {
                id
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDate
                endDate
                description
                city
                country
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              countryDetails {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            ciphertext
            talentProfile {
              personId
              identity {
                id
                ciphertext
              }
              personalData {
                firstName
                lastName
                title
                description
                profileUrl
                profileState
              }
              preferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                contractToHire
              }
              settings {
                provider
                suspended
                disabled
                status
                updatedDateTime
              }
              personAvailability {
                personId
                capacity
                createdDateTime
                availabilityDateTime
                updatedDateTime
                minHours
                maxHours
                availableDays
              }
              projectList {
                totalProjects
                updatedDateTime
              }
              communityCertificates {
                personId
                certificateAttachmentId
                certificationNumber
                expirationDate
                businessName
                visibility
              }
              profileCompleteness {
                personId
                pciActual
                pciDisplay
                pciAction
                pciActionCredit
                pciDateTime
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitExists
                overviewExists
                passedTestsCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                esnCount
                updatedDateTime
              }
              otherExperiences {
                id
                personId
                subject
                description
                active
              }
              educationRecords {
                id
                personId
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDateTime
                endDateTime
                comment
              }
              employmentRecords {
                id
                personId
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDateTime
                endDateTime
                description
                city
                country
              }
              skills {
                id
                skill
                prettyName
                status
                description
                externalLink
                wikipediaPageId
                freebaseMachineId
                migrateTo
                ctime
                mtime
                rank
              }
              jobCategories {
                id
                name
              }
              profileAggregates {
                lastWorkedOn
                totalHourlyJobs
                totalFixedJobs
                topRatedStatus
                totalFeedback
                totalEarnings
                totalJobs
              }
              specializedProfiles {
                personId
                profileId
                occupationId
                status
                rank
                occupations
                primary
                title
                description
                weblink
              }
              specializedProfilesProjects {
                personId
                profileId
              }
            }
          }
          capacity
          availabilityDateTime
          name
          createdDateTime
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.updateFreelancerAvailability
  },

  /**
   * updateFreelancerEmploymentRecord
   * @param variables - Operation variables
   * @param variables.input - Input data for updating employment record
   * @returns Types.FreelancerProfileEmploymentRecord | null
   */
  updateFreelancerEmploymentRecord: async (
    client: UpworkGraphQLClient,
    variables: { input: Types.UpdateEmploymentRecordInput }
  ): Promise<Types.FreelancerProfileEmploymentRecord | null> => {
    const mutationString = `
      mutation UpdateFreelancerEmploymentRecord($input: UpdateEmploymentRecordInput!) {
        updateFreelancerEmploymentRecord(input: $input) {
          id
          user {
            id
            nid
            rid
            name
            firstName
            lastName
            photoUrl
            publicUrl
            email
            location {
              countryName
              cityName
              zip
              timezone
              timezoneName
              street
              stateCode
              offsetToUTC
            }
            freelancerProfile {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              availability {
                id
                capacity
                availabilityDateTime
                name
                createdDateTime
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              countryDetails {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            ciphertext
            talentProfile {
              personId
              identity {
                id
                ciphertext
              }
              personalData {
                firstName
                lastName
                title
                description
                profileUrl
                profileState
              }
              preferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                contractToHire
              }
              settings {
                provider
                suspended
                disabled
                status
                updatedDateTime
              }
              personAvailability {
                personId
                capacity
                createdDateTime
                availabilityDateTime
                updatedDateTime
                minHours
                maxHours
                availableDays
              }
              projectList {
                totalProjects
                updatedDateTime
              }
              communityCertificates {
                personId
                certificateAttachmentId
                certificationNumber
                expirationDate
                businessName
                visibility
              }
              profileCompleteness {
                personId
                pciActual
                pciDisplay
                pciAction
                pciActionCredit
                pciDateTime
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitExists
                overviewExists
                passedTestsCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                esnCount
                updatedDateTime
              }
              otherExperiences {
                id
                personId
                subject
                description
                active
              }
              educationRecords {
                id
                personId
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDateTime
                endDateTime
                comment
              }
              employmentRecords {
                id
                personId
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDateTime
                endDateTime
                description
                city
                country
              }
              skills {
                id
                skill
                prettyName
                status
                description
                externalLink
                wikipediaPageId
                freebaseMachineId
                migrateTo
                ctime
                mtime
                rank
              }
              jobCategories {
                id
                name
              }
              profileAggregates {
                lastWorkedOn
                totalHourlyJobs
                totalFixedJobs
                topRatedStatus
                totalFeedback
                totalEarnings
                totalJobs
              }
              specializedProfiles {
                personId
                profileId
                occupationId
                status
                rank
                occupations
                primary
                title
                description
                weblink
              }
              specializedProfilesProjects {
                personId
                profileId
              }
            }
          }
          companyName
          jobTitle
          standardizedCompanyId
          standardizedJobTitleId
          role
          startDate
          endDate
          description
          city
          country
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.updateFreelancerEmploymentRecord
  },

  /**
   * updateFreelancerOtherExperience
   * @param variables - Operation variables
   * @param variables.input - Input data for updating other experience
   * @returns Types.FreelancerProfileOtherExperience | null
   */
  updateFreelancerOtherExperience: async (
    client: UpworkGraphQLClient,
    variables: { input: Types.UpdateOtherExperienceInput }
  ): Promise<Types.FreelancerProfileOtherExperience | null> => {
    const mutationString = `
      mutation UpdateFreelancerOtherExperience($input: UpdateOtherExperienceInput!) {
        updateFreelancerOtherExperience(input: $input) {
          id
          user {
            id
            nid
            rid
            name
            firstName
            lastName
            photoUrl
            publicUrl
            email
            location {
              countryName
              cityName
              zip
              timezone
              timezoneName
              street
              stateCode
              offsetToUTC
            }
            freelancerProfile {
              user {
                id
                nid
                rid
                email
                name
                photoUrl
                ciphertext
                companyReferencedId
              }
              personalData {
                firstName
                lastName
                title
                description
                workPhone
                profileUrl
                profileState
              }
              userPreferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                projectTypePreference
                hideJss
              }
              otherExperiences {
                totalCount
              }
              filter {
                subject_eq
              }
              educationRecords {
                id
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDate
                endDate
                description
              }
              certificates {
                id
                earnedDate
                submissionCode
                notes
                score
                active
                verified
                url
                createdDateTime
                lastUpdatedDateTime
                expirationDate
                externalId
              }
              employmentRecords {
                id
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDate
                endDate
                description
                city
                country
              }
              availability {
                id
                capacity
                availabilityDateTime
                name
                createdDateTime
              }
              committedResponseTime {
                id
                committedResponseTime
                name
                createdDateTime
                updatedDateTime
              }
              project {
                id
                title
                description
                thumbnailId
                thumbnailOriginalId
                thumbnail
                thumbnailOriginal
                projectUrl
                completionDateTime
                public
                rank
                occupationId
                projectType
                role
                projectGoal
                solution
                primaryImageId
                createdDateTime
              }
              id
              aggregates {
                lastWorkedDateTime
                lastApplicationDate
                totalHourlyJobs
                totalHourlyJobsRecent
                totalFixedJobs
                totalFixedJobsRecent
                responsiveness
                activeInterviews
                currentContracts
                jobSuccessScore
                topRatedStatus
                topRatedPlusStatus
                vetted
                totalHoursActual
                totalHours
                totalHoursRecent
                totalFeedback
                totalFeedbackRecent
                billedContracts
                billedContractsRecent
                adjustedFeedbackScore
                adjustedFeedbackScoreRecent
                lastActivityDateTime
                topRatedStatusDatetime
                qualityScore
                totalHoursRounded
              }
              profileCompletenessSummary {
                actual
                display
                action
                actionCredit
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitRecordCount
                overviewRecordCount
                videoRecordCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                linkedExternalAccountsCount
                createdDateTime
              }
              verifications {
                idVerified
                phoneVerified
                webcamVerified
                idBadgeStatus
              }
              fullName
              firstName
              lastName
              countryDetails {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              email
              portrait {
                portrait
                portrait32
                portrait50
                portrait100
                portrait150
                portrait500
              }
              phoneNumber {
                code
                number
              }
              privateTalentCloud {
                totalCount
              }
            }
            ciphertext
            talentProfile {
              personId
              identity {
                id
                ciphertext
              }
              personalData {
                firstName
                lastName
                title
                description
                profileUrl
                profileState
              }
              preferences {
                visibilityLevel
                hideAgencyEarnings
                hideEarnings
                exposeFullName
                clientFeedbackOptional
                contractToHire
              }
              settings {
                provider
                suspended
                disabled
                status
                updatedDateTime
              }
              personAvailability {
                personId
                capacity
                createdDateTime
                availabilityDateTime
                updatedDateTime
                minHours
                maxHours
                availableDays
              }
              projectList {
                totalProjects
                updatedDateTime
              }
              communityCertificates {
                personId
                certificateAttachmentId
                certificationNumber
                expirationDate
                businessName
                visibility
              }
              profileCompleteness {
                personId
                pciActual
                pciDisplay
                pciAction
                pciActionCredit
                pciDateTime
                actionForEmptySection
                skillsCount
                employmentRecordCount
                portraitExists
                overviewExists
                passedTestsCount
                educationRecordCount
                certificatesCount
                otherExperiencesCount
                portfolioCount
                esnCount
                updatedDateTime
              }
              otherExperiences {
                id
                personId
                subject
                description
                active
              }
              educationRecords {
                id
                personId
                institutionName
                standardizedInstitutionId
                areaOfStudy
                standardizedAreaOfStudyId
                degree
                standardizedDegreeId
                startDateTime
                endDateTime
                comment
              }
              employmentRecords {
                id
                personId
                companyName
                jobTitle
                standardizedCompanyId
                standardizedJobTitleId
                role
                startDateTime
                endDateTime
                description
                city
                country
              }
              skills {
                id
                skill
                prettyName
                status
                description
                externalLink
                wikipediaPageId
                freebaseMachineId
                migrateTo
                ctime
                mtime
                rank
              }
              jobCategories {
                id
                name
              }
              profileAggregates {
                lastWorkedOn
                totalHourlyJobs
                totalFixedJobs
                topRatedStatus
                totalFeedback
                totalEarnings
                totalJobs
              }
              specializedProfiles {
                personId
                profileId
                occupationId
                status
                rank
                occupations
                primary
                title
                description
                weblink
              }
              specializedProfilesProjects {
                personId
                profileId
              }
            }
          }
          subject
          description
          active
          createdDateTime
          updatedDateTime
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.updateFreelancerOtherExperience
  },

  /**
   * updateOrganization
   * @param variables - Operation variables
   * @param variables.input - Input for updating organization request
   * @returns Types.AccountProcessInstance
   */
  updateOrganization: async (
    client: UpworkGraphQLClient,
    variables: { input: Types.UpdateOrganizationInput }
  ): Promise<Types.AccountProcessInstance> => {
    const mutationString = `
      mutation UpdateOrganization($input: UpdateOrganizationInput!) {
        updateOrganization(input: $input) {
          id
          success
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.updateOrganization
  },

  /**
   * updateRoomStoryV2
   * @param variables - Operation variables
   * @param variables.input - Story update parameters
   * @returns Types.UpdateRoomStoryResponse
   */
  updateRoomStoryV2: async (
    client: UpworkGraphQLClient,
    variables: { input: Types.RoomStoryUpdateInputV2 }
  ): Promise<Types.UpdateRoomStoryResponse> => {
    const mutationString = `
      mutation UpdateRoomStoryV2($input: RoomStoryUpdateInputV2!) {
        updateRoomStoryV2(input: $input) {
          status
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.updateRoomStoryV2
  },

  /**
   * updateRoomV2
   * @param variables - Operation variables
   * @param variables.input - Room update parameters
   * @returns Types.Room
   */
  updateRoomV2: async (
    client: UpworkGraphQLClient,
    variables: { input?: Types.RoomUpdateInputV2 } = {}
  ): Promise<Types.Room> => {
    const mutationString = `
      mutation UpdateRoomV2($input: RoomUpdateInputV2) {
        updateRoomV2(input: $input) {
          id
          roomName
          organization {
            id
            rid
            legacyId
            name
            type
            legacyType
            flag {
              client
              vendor
              agency
              individual
            }
            active
            hidden
            userId
            company {
              id
              name
              description
              legacyType
              logoURL
              contactUser {
                id
                nid
                rid
                name
                firstName
                lastName
                photoUrl
                publicUrl
                email
                ciphertext
              }
              phone
              displayName
              teamsEnabled
              canHire
              hidden
              includeInStats
              companyName
              country {
                id
                name
                twoLetterAbbreviation
                threeLetterAbbreviation
                region
                phoneCode
                active
                registrationAllowed
              }
              state
              city
              address
              zip
              timezone
              accountingEntity
              billingType
              summary
              paymentVerificationStatus
              paymentVerification {
                status
                paymentVerified
              }
              agencyDetails {
                vetted
                topRatedStatus
                topRatedPlusStatus
              }
              jobPosts {
                totalCount
              }
              jobPostsFilter {
                teamIds
                statuses
                excludeHidden
                fields
              }
            }
            photoUrl
            creationDate
            staffs {
              totalCount
              pageInfo {
                endCursor
                hasNextPage
              }
            }
            pagination {
              after
              first
            }
            userPermissions {
              offset
            }
            filter {
              userId
              resourceType_eq
              limit
              offset
              performExternalChecks_eq
              teamOrgIds_any
              returnAllTeams
            }
            agencyOffers {
              totalCount
              edges {
                cursor
              }
            }
            offerByRootCompanyFilter {
              freelancerId_any
              agencyTeamOrgId_any
              clientOrgId_any
              commonFilter {
                text_eq
                states_any
                startDatePeriod_bt
                endDatePeriod_bt
                catalogProject
              }
            }
            offerByClientFilter {
              teamId_any
              contactPersonId_any
              offerType_any
              milestoneState_any
              escrowRefundStatus_any
              freelancerId_any
              agreementKind_any
            }
            clientTimeReport {
              dateWorkedOn
              weekWorkedOn
              monthWorkedOn
              yearWorkedOn
              team {
                id
                rid
                legacyId
                name
                type
                legacyType
                active
                hidden
                photoUrl
                creationDate
              }
              contractOffer {
                id
                startDateTime
                endDateTime
                type
                state
                milestoneState
                escrowRefundStatus
                title
                lastUpdatedDateTime
                lastPublishedDateTime
                inPrivateTalentCloud
                offerCreatedDateTime
                catalogProject
              }
              contract {
                id
                title
                status
                deliveryModel
                kind
                isPtc
                createDate
                modifyDate
                startDate
                endDate
                offerId
                changingUserType
                projectId
              }
              termId
              task
              taskDescription
              memo
              totalHoursWorked
              totalCharges
              totalOnlineHoursWorked
              totalOnlineCharge
              totalOfflineHoursWorked
              totalOfflineCharge
              billRate {
                id
                value
                code
                offerRef
              }
            }
            timeReportDate_bt {
              rangeStart
              rangeEnd
            }
            clientContractTimeReport {
              totalCount
              edges {
                cursor
              }
            }
            privateTalentClouds {
              id
              name
              joinInstructions
              welcomeMessageToAddedFreelancers
              joinRequestAutoApproved
              messageAfterJoinRequest
              joinRejectionMessage
              externalName
              active
              logoImageLarge {
                name
                uri
                encoding
                size
                createdDateTime
              }
              description
              onboardingTaskEnabled
              onboardingTaskEnableUpdatedDateTime
              selectable
            }
            jobPostingFilter {
              title_eq
              postByTeamIds_any
              postByPersonIds_any
              statusAndAccess_any {
                statuses_any
                accesses_any
              }
              excludePostByPersonIds_any
              categoryGroupIds_any
              contractType_eq
              createdDateTimeFrom_eq
              createdDateTimeTo_eq
            }
          }
          creator {
            role
          }
          createdAtDateTime
          public
          topic
          numUnread
          roomFavoriteDateTime
          favorite
          numUnreadMentions
          numUsers
          joinDateTime
          lastVisitedDateTime
          lastReadDateTime
          roomType
          readOnlyDateTime
          readOnly
          blockDateTime
          hidden
          muted
          contractId
          contract {
            id
            title
            contractType
            job {
              id
              workFlowState {
                closeResult
                status
              }
              annotations {
                tags
              }
              content {
                title
                description
              }
              attachments {
                id
                sequenceNumber
                fileName
                fileSize
              }
              contractTerms {
                contractStartDate
                contractEndDate
                contractType
                onSiteType
                personsToHire
                experienceLevel
                notSurePersonsToHire
                notSureExperiencelevel
              }
              additionalSearchInfo {
                highlightTitle
              }
              clientCompanyPublic {
                id
                legacyType
                teamsEnabled
                canHire
                hidden
                includeInStats
                state
                city
                timezone
                accountingEntity
                billingType
              }
              canClientReceiveContractProposal
              clientProposals {
                totalCount
              }
              filter {
                status_eq
                annotations_eq
                freelancerId_eq
                chargeRate_eq
                activityDays_eq
                category_eq
                jobSuccessScore_eq
                earnings_eq
                billedHours_eq
                applierType_eq
                topRated_eq
                englishLevel_eq
                title_eq
                textQuery_eq
                country_any
                region_any
                languages_any
                occupationId
              }
              organizationIds
            }
            hasAgency
            offer {
              id
              title
              description
              type
              vendorProposal {
                id
                coverLetter
                proposalCoverLetter
                annotations
              }
              closeJobPostingOnAccept
              offerTerms {
                expectedStartDate
                expectedEndDate
              }
              messageToContractor
              state
              offerFeatures {
                onSiteType
                state
                localDescription
                localFlexibilityDescription
                eor
              }
              clientCompany {
                id
                name
                description
                legacyType
                logoURL
              }
              milestones {
                id
                dueDateTime
                state
                description
                submissionCount
                sequenceId
                payComments
                lastSubmissionCreatedTime
                createdDateTime
                modifiedDateTime
                instructions
              }
              createdUsingBYOFlow
              freelancer {
                id
                fullName
                firstName
                lastName
                email
              }
              payrollOffer
              deliveryModel
              organizationIds
            }
            clientProposal {
              id
              terms {
                upfrontPaymentPercent
              }
              coverLetter
              projectPlan {
                id
              }
              auditDetails {
                createdDateTime
                modifiedDateTime
              }
              status {
                status
              }
              annotations
            }
            weeklyChargeAmount {
              rawValue
              currency
              displayValue
            }
            weeklyHoursLimit
            createdDateTime
            firstContractStartDateTime
            modifiedDateTime
            startDateTime
            endDateTime
            manualTimeAllowed
            hideScreenshots
            last
            weeklyStipendHours
            estimatedDuration {
              id
              label
            }
            status
            suspended
            paused
            contractId
            workDays {
              date
            }
            workDiaryTimeCells {
              cellDateTime
              snapshotDateTime
              overtime
              manual
              activityLevel
              memo
              task {
                id
                description
              }
              mouseEventsCount
              keyboardEventsCount
              activeWindowTitle
              hideScreenshots
              hasScreenshot
              screenshotImageUrl
              screenshotImageUrlMedium
              screenshotImageThumbnail
              webcamEnabled
              webcamImageUrl
              webcamImageThumbnail
              snapshotExpired
            }
            date
            feedback {
              clientFeedback {
                score
                comment
                freelancerResponse
              }
              freelancerFeedback {
                score
                comment
                clientResponse
                recommendScore
              }
            }
          }
          roomNote
          roomNotePresent
          offerIds
          latestStory {
            id
            createdDateTime
            updatedDateTime
            message
            roomStoryNote {
              favorite
              abuseType
              whitelisted
              abuseDetails
            }
            attachments {
              objectReferenceId
              objectType
              metadata {
                key
                value
              }
              createdDateTime
            }
          }
          stories {
            totalCount
            edges {
              cursor
            }
          }
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.updateRoomV2
  },

  /**
   * updateTeamActivity
   * @param variables - Operation variables
   * @param variables.orgId - The org id where the team belongs to
   * @param variables.teamId - The team id where activity is being updated
   * @param variables.request - The request object containing the updated activity details
   * @returns Types.ProcessUpdateResponse | null
   */
  updateTeamActivity: async (
    client: UpworkGraphQLClient,
    variables: { orgId: string; teamId?: string; request: Types.UpdateTeamActivityRequest }
  ): Promise<Types.ProcessUpdateResponse | null> => {
    const mutationString = `
      mutation UpdateTeamActivity($orgId: String!, $teamId: String, $request: UpdateTeamActivityRequest!) {
        updateTeamActivity(orgId: $orgId, teamId: $teamId, request: $request) {
          success
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.updateTeamActivity
  },

  /**
   * updateWorkflowTask
   * @param variables - Operation variables
   * @param variables.workflowId - Workflow identifier
   * @param variables.taskId - Task identifier
   * @param variables.updateWorkflowTaskDetailsInput - Update payload
   * @returns Types.UpdateWorkflowTaskResult
   */
  updateWorkflowTask: async (
    client: UpworkGraphQLClient,
    variables: {
      workflowId?: string
      taskId?: string
      updateWorkflowTaskDetailsInput?: Types.UpdateWorkflowTaskDetailsInput
    } = {}
  ): Promise<Types.UpdateWorkflowTaskResult> => {
    const mutationString = `
      mutation UpdateWorkflowTask($workflowId: String, $taskId: String, $updateWorkflowTaskDetailsInput: UpdateWorkflowTaskDetailsInput) {
        updateWorkflowTask(workflowId: $workflowId, taskId: $taskId, updateWorkflowTaskDetailsInput: $updateWorkflowTaskDetailsInput) {
          workflowId
          updatedTaskView {
            id
            type
            title
            description
            status
            assignee {
              entityType
              entityId
            }
            comments {
              id
              message
              createdDateTime
              createdBy
              visibleToClient
              attachments {
                id
                name
                type
              }
            }
            createdDateTime
            finishedDateTime
            dueDate
            modifiedDateTime
            createdBy
            modifiedBy
            labels
            active
            notRequired
            dependsOn
            externalTaskId
            delayReasons
            customAttributes {
              key
              value
            }
            order
            canEdit
            owner
          }
        }
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.updateWorkflowTask
  },

  /**
   * createClientJobInvitation
   * @param variables - Operation variables
   * @param variables.clientJobInvitationCreateRequest - Input for creating client job invitation
   * @returns string
   */
  createClientJobInvitation: async (
    client: UpworkGraphQLClient,
    variables: { clientJobInvitationCreateRequest: Types.ClientJobInvitationCreateRequestInput }
  ): Promise<string> => {
    const mutationString = `
      mutation CreateClientJobInvitation($clientJobInvitationCreateRequest: ClientJobInvitationCreateRequestInput!) {
        createClientJobInvitation(clientJobInvitationCreateRequest: $clientJobInvitationCreateRequest)
      }
    `

    const result = await client.mutate(mutationString, variables)
    return result.data.createClientJobInvitation
  },
}
