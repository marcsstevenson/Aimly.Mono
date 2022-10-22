import graphql from 'babel-plugin-relay/macro';

export const getExpertProfileQuery = graphql`
  query getExpertProfileQuery($userId: UUID! $id: UUID!) {
    getExpertProfile(userId: $userId id: $id) {
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