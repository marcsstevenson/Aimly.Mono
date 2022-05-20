import graphql from 'babel-plugin-relay/macro';

export const getAboutYouQuery = graphql`
  query getViewExpertProfileQuery( $profileId: UUID! $userId: UUID) {
    getViewExpertProfile(profileId: $profileId userId: $userId) {
      id
      listOnMarket
      isUsersProfile
      userCanAccessProfile
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