import graphql from 'babel-plugin-relay/macro';

export const profileSearchQuery = graphql`
  query profileSearchQuery($command: ProfileSearchCommandInput!) {
    profileSearch(command: $command) {
      id
      name
      profilePictureUrl
      language
      description
      type
    }
  }
`;