import graphql from 'babel-plugin-relay/macro';

export const getAboutYouQuery = graphql`
  query getViewCompanyProfileQuery( $companyProfileId: UUID!) {
    getViewCompanyProfile(companyProfileId: $companyProfileId) {
      id
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