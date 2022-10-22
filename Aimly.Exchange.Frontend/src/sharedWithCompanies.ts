import graphql from 'babel-plugin-relay/macro';

export const sharedWithCompaniesQuery = graphql`
  query sharedWithCompaniesQuery($userId: UUID!) {
    sharedWithCompanies(userId: $userId) {
      id
      profileId
      name
      type
    }
  }
`;