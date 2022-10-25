import graphql from 'babel-plugin-relay/macro';

export const getAboutYouQuery = graphql`
  query getViewPersonalProfileQuery($personalProfileId: UUID! $userId: UUID) {
    getViewPersonalProfile(personalProfileId: $personalProfileId userId: $userId) {
      id
      listOnMarket
      isUsersProfile
      userCanAccessProfile
      personalProfileId
      userPublicId
      fullName
      profilePictureUrl
      linkedInProfile
      addressCity
      addressRegion
      addressCountry
      about
      industries
      skills
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
      associatedStartupProfiles {
        id
        profileId
        name
        description
        profilePictureUrl
        type
      }
      associatedMentorProfiles {
        id
        profileId
        name
        description
        profilePictureUrl
        type
      }
      associatedExpertProfiles {
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