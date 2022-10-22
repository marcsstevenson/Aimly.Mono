import graphql from 'babel-plugin-relay/macro';

export const getViewTenantCompanyProfileQuery = graphql`
  query getViewTenantCompanyProfileQuery {
    getViewTenantCompanyProfile {
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