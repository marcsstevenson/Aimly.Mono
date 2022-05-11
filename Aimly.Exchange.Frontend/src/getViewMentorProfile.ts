import graphql from 'babel-plugin-relay/macro';

export const getAboutYouQuery = graphql`
  query getViewMentorProfileQuery( $profileId: UUID!) {
    getViewMentorProfile(profileId: $profileId) {
      id
      profileId
      parentProfile {
        id
        personalProfileId
        userPublicId
        listOnMarket
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