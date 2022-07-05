import graphql from 'babel-plugin-relay/macro';

export const companiesForAdministrationQuery = graphql`
  query companiesForAdministrationQuery($userId: UUID!) {
    companiesForAdministration(userId: $userId) {
      id
      profileId
      name
      profilePictureUrl
      type
    }
  }
`;