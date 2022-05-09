import graphql from 'babel-plugin-relay/macro';

export const getAboutYouQuery = graphql`
  query getViewPersonalProfileQuery( $personalProfileId: UUID!) {
    getViewPersonalProfile(personalProfileId: $personalProfileId) {
      id
      personalProfileId
      userPublicId
      fullName
      profilePictureUrl
      linkedInProfile
      about
      industries
      skills
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