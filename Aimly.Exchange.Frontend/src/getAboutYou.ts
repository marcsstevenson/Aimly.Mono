import graphql from 'babel-plugin-relay/macro';

export const getAboutYouQuery = graphql`
  query getAboutYouQuery($id: UUID!) {
    getAboutYou(command: { userId: $id}) {
      userId
      givenName
      familyName
      phoneNumber
      linkedInProfile
      companyProfileId
      companyName
      website
      numberOfFounders
      floor
      streetNumber
      streetName
      addressLocality
      addressCity
      addressRegion
      addressCountry
      postalCode
      postOfficeBoxNumber
    }
  }
`;