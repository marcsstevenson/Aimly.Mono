import graphql from 'babel-plugin-relay/macro';

export const viewFullCompanyProfileQuery = graphql`
  query viewFullCompanyProfileQuery($companyProfileId: UUID! $userId: UUID!) {
    viewFullCompanyProfile(companyProfileId: $companyProfileId userId: $userId) {
      id
      companyProfileId
      profilePictureUrl
      industries
      companyName
      type
      website
      numberOfFounders
      floor
      streetNumber
      streetName
      addressLocality
      addressCity
      addressRegion
      addressCountry
      postalCode
      postOfficeBoxNumber
      listOnMarket
      purposeDetails
      problemDetails
      solutionNovelty
      solutionDescription
      stateOfValidation
      competition
      positionVsCompetition
      businessModel
      traction
      founders
      currentAnnualRevenue
      externalFunding
      value
      potentialSize
      potentialValue
    }
  }
`;