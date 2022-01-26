import graphql from 'babel-plugin-relay/macro';

export const getAboutYou = graphql`
query getAboutYouQuery {
  getAboutYou{
    givenName
    familyName
    phoneNumber
    linkedInProfile
  }
}
`;