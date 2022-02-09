import { useState } from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import * as MarketSearchQuery from '__generated__/marketSearchQuery.graphql';

class MarketState {
  showResult: boolean = false;
  results: ReadonlyArray<{
    readonly id: any;
    readonly fullName: string | null;
    readonly pictureUrl: string | null;
  } | null> | null = [];
}

// const preloadedQuery = loadQuery<MarketSearchQuery.marketSearchQuery>(RelayEnvironment, MarketSearchQuery.default, {
//   /* query variables */
// });

function useMarketSearch() {
  const [state, setState] = useState<MarketState>({
    showResult: false,
    results: [],
  });

  const variables = {};
  // const data = usePreloadedQuery<MarketSearchQuery.marketSearchQuery>(MarketSearchQuery.default, preloadedQuery);

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<MarketSearchQuery.marketSearchQuery>(
    MarketSearchQuery.default,
    variables
  );

  const marketSearch = async () => {
    try {
      // const token = await getAccessTokenSilently();

      const responseData = data;

      console.log(data);

      setState({
        ...state,
        showResult: true,
        results: responseData.userSearch,
      });
    } catch (error) {
      setState({
        ...state,
      });
    }
  };

  return { marketSearch, state };
}

export default useMarketSearch;
