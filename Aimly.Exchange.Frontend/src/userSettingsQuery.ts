import graphql from 'babel-plugin-relay/macro';

export const userSettingsQuery = graphql`
  query userSettingsQuery($userId: UUID!) {
    userSettings(userId: $userId) {
      profilePictureUrl
      email
    }
  }
`;