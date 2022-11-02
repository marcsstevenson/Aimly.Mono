import graphql from 'babel-plugin-relay/macro';

export const marketOptionsSearchQuery = graphql`
  query marketOptionsSearchQuery($profileType: ProfileTypeOption!) {
    marketOptionsSearch(profileType: $profileType) {
      skillOptions {
        name
        count
      }
      industryOptions {
        name
        count
      }
      locationOptions {
        name
        count
      }
      timezoneOptions {
        name
        count
      }
    }
  }
`;