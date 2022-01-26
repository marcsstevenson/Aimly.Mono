import graphql from 'babel-plugin-relay/macro';

export const marketSearchQuery = graphql`
query marketSearchQuery {
  userSearch{
    id
    fullName
    pictureUrl
  }
}
`;