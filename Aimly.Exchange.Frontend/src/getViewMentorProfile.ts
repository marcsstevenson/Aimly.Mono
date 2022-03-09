import graphql from 'babel-plugin-relay/macro';

export const getAboutYouQuery = graphql`
  query getViewMentorProfileQuery( $profileId: UUID!) {
    getViewMentorProfile(profileId: $profileId) {
      id
      profileId
      parentProfile {
        id
        personalProfileId
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