import graphql from 'babel-plugin-relay/macro';

export const marketSearchQuery = graphql`
query marketSearchQuery($marketSearchCommand: MarketSearchCommandInput!) {
  marketSearch(marketSearchCommand: $marketSearchCommand){
    results {
      id
      profileId
      name
      description
      profilePictureUrl
      type
    }
    totalResultCount
    currentPage
    totalPageCount
  }
}
`;