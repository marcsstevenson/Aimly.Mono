import graphql from 'babel-plugin-relay/macro';

export const getAboutYouQuery = graphql`
  query getViewExpertProfileQuery( $profileId: UUID!) {
    getViewExpertProfile(profileId: $profileId) {
      id
      profileId
      parentProfile {
        id
        personalProfileId
        userPublicId
        fullName
        givenName
        profilePictureUrl
        linkedInProfile
        about
        employmentExperience {
          id
          description
          title
          organisation
          startMonth
          startYear
          endMonth
          endYear
        }
      }
      name
      about
      industries
      skills
    }
  }
`;