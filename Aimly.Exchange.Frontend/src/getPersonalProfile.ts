import graphql from 'babel-plugin-relay/macro';

export const getPersonalProfileQuery = graphql`
  query getPersonalProfileQuery($id: UUID!) {
    getPersonalProfile(userId: $id) {
      userId
      about
      language
      personalProfilePictureUrl
      timezone
      givenName
      familyName
      phoneNumber
      linkedInProfile
      industries
      skills
      employmentExperience {
        id
        experienceId
        title
        organisation
        startMonth
        startYear
        endMonth
        endYear
      }
    }
  }
`;