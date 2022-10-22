import graphql from 'babel-plugin-relay/macro';

export const getMentorProfileQuery = graphql`
  query getMentorProfileQuery($userId: UUID! $id: UUID!) {
    getMentorProfile(userId: $userId id: $id) {
      userId
      id
      name
      about
      industries
      skills
      listOnMarket
    }
  }
`;