import graphql from 'babel-plugin-relay/macro';

export const getMentorProfileQuery = graphql`
  query getMentorProfileQuery($userId: UUID! $mentorProfileId: UUID!) {
    getMentorProfile(userId: $userId mentorProfileId: $mentorProfileId) {
      userId
      id
      about
      industry
      listOnMarket
    }
  }
`;