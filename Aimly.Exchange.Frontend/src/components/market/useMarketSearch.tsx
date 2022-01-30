import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import { getConfig } from 'config';
import {
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from 'RelayEnvironment';
import { marketSearchQuery } from 'marketSearchQuery'
import { BaseApiCallingState } from 'components/shared/BaseApiCallingState'
// import type { marketSearchQuery$data } from "__generated__/marketSearchQuery.graphql"
// import * as blah from "__generated__/marketSearchQuery.graphql"

export interface UserSearchResult {
  id: string;
  fullName: string;
  pictureUrl: string;
}

class MarketState implements BaseApiCallingState<UserSearchResult[]> {
  showResult: boolean = false;
  apiMessage: string = '';
  error: any;
  results: UserSearchResult[] = [];
}

const preloadedQuery = loadQuery(RelayEnvironment, marketSearchQuery, {
  /* query variables */
});


function useMarketSearch() {
  const [state, setState] = useState<MarketState>({
    showResult: false,
    apiMessage: '',
    error: null,
    results: [],
  });

  const { getAccessTokenSilently } = useAuth0();
  const data = usePreloadedQuery<any>(marketSearchQuery, preloadedQuery);

  const marketSearch = async () => {
    try {
      console.log('marketSearch()');
      const token = await getAccessTokenSilently();

      const responseData = data;// await response.json();

      console.log(data);

      setState({
        ...state,
        showResult: true,
        apiMessage: responseData,
        results: responseData.userSearch,
      });
    } catch (error) {
      setState({
        ...state,
        // error: error.error,
      });
    }
  };

  return { marketSearch, state };
}

export default useMarketSearch;