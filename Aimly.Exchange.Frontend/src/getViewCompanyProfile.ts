import graphql from 'babel-plugin-relay/macro';

export const getViewCompanyProfileQuery = graphql`
  query getViewCompanyProfileQuery( $companyProfileId: UUID! $userId: UUID) {
    getViewCompanyProfile(companyProfileId: $companyProfileId userId: $userId) {
      id
      listOnMarket
      isUsersProfile
      userCanAccessProfile
      companyProfileId
      companyName
      profilePictureUrl
      website
      addressCity
      addressRegion
      addressCountry
      industries
      problemDetails
      solutionDescription
      associatedProfiles {
        id
        profileId
        name
        description
        profilePictureUrl
        type
      }
    }
  }
`;