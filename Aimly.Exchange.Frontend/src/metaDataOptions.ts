import graphql from 'babel-plugin-relay/macro';

export const metaDataOptionsQuery = graphql`
  query metaDataOptionsQuery($nameStartingWith: String $type: String! $tenantId: UUID) {
    metaDataOptions(nameStartingWith: $nameStartingWith type: $type tenantId: $tenantId)
  }
`;