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
      addressCountry
      industries
      problemDetails
    }
  }
`;