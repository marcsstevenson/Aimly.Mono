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
          stickToTop
          title
          organisation
          description
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