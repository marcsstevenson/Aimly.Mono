import graphql from 'babel-plugin-relay/macro';

export const dashboardQuery = graphql`
  query dashboardQuery($userId: UUID!) {
    dashboard(userId: $userId) {
      newPersonalProfiles {
        id
        profileId
        name
        description
        profilePictureUrl
        type
      }
      newCompanyProfiles {
        id
        profileId
        name
        description
        profilePictureUrl
        type
      }
      newUpdates {
        title
        image
        content
        created
      }
    }
  }
`;