import graphql from 'babel-plugin-relay/macro';

export const getAboutYouQuery = graphql`
  query getAboutYouQuery($id: UUID!) {
    getAboutYou(command: { userId: $id}) {
      givenName
      familyName
      phoneNumber
      linkedInProfile
    }
  }
`;