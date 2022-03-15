import graphql from 'babel-plugin-relay/macro';

export const skillOptionsQuery = graphql`
  query skillOptionsQuery($nameStartingWith: String $tenantId: UUID) {
    skillOptions(nameStartingWith: $nameStartingWith tenantId: $tenantId)
  }
`;