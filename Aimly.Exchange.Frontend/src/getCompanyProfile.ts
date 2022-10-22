import graphql from 'babel-plugin-relay/macro';

export const getCompanyProfileQuery = graphql`
  query getCompanyProfileQuery($userId: UUID! $companyProfileId: UUID!) {
    getCompanyProfile(userId: $userId companyProfileId: $companyProfileId) {
      id
      companyName
      listOnMarket
      profilePictureUrl
      type
      website
      numberOfFounders
      industries
      floor
      streetNumber
      streetName
      addressLocality
      addressCity
      addressRegion
      addressCountry
      postalCode
      postOfficeBoxNumber
      problemDetails
      solutionDescription
    }
  }
`;