import graphql from 'babel-plugin-relay/macro';

export const getAboutYouQuery = graphql`
  query getAboutYouQuery($id: UUID! $companyProfileId: UUID) {
    getAboutYou(command: { userId: $id companyProfileId: $companyProfileId}) {
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