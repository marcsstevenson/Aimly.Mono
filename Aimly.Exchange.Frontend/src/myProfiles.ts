import graphql from 'babel-plugin-relay/macro';

export const myProfilesQuery = graphql`
  query myProfilesQuery($userId: UUID!) {
    myProfiles(userId: $userId) {
      id
      profileId
      name
      profilePictureUrl
      type
    }
  }
`;