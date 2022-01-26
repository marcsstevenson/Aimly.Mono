import graphql from 'babel-plugin-relay/macro';

export const appQuery = graphql`
  query appQuery($id: UUID!) {
    getAboutYou(command: { userId: $id}) {
      givenName
      familyName
      phoneNumber
      linkedInProfile
    }
  }
`;