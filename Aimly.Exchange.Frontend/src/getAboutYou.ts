import graphql from 'babel-plugin-relay/macro';

export const getAboutYouQuery = graphql`
  query getAboutYouQuery($id: UUID! $companyProfileId: UUID) {
    getAboutYou(command: { userId: $id companyProfileId: $companyProfileId}) {
      userId
      about
      language
      personalProfilePictureUrl
      timezone
      givenName
      familyName
      phoneNumber
      linkedInProfile
      companyProfileId
      companyProfilePictureUrl
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