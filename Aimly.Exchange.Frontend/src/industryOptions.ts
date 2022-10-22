import graphql from 'babel-plugin-relay/macro';

export const industryOptionsQuery = graphql`
  query industryOptionsQuery($nameStartingWith: String $tenantId: UUID) {
    industryOptions(nameStartingWith: $nameStartingWith tenantId: $tenantId)
  }
`;