import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getConfig } from 'config';
import graphql from 'babel-plugin-relay/macro';
import {
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from 'RelayEnvironment';
import { marketSearchQuery } from 'data/market-search'

export interface UserSearchResult {
  id: string;
  fullName: string;
  pictureUrl: string;
}

export interface MarketState {
  showResult: boolean;
  apiMessage: string;
  error: any;
  userSearchResults: UserSearchResult[];
}

// const marketSearchQuery = graphql`
//   query MarketQuery {
//     userSearch{
//       id
//       fullName
//       pictureUrl
//     }
//   }
// `;

const preloadedQuery = loadQuery(RelayEnvironment, marketSearchQuery, {
  /* query variables */
});

function useMarketSearch() {
  const config = getConfig();
  const apiOrigin = config.exchangeApiUri;
  const [state, setState] = useState<MarketState>({
    showResult: false,
    apiMessage: '',
    error: null,
    userSearchResults: [],
  });

  const { getAccessTokenSilently } = useAuth0();
  const data = usePreloadedQuery<any>(marketSearchQuery, preloadedQuery);

  const marketSearch = async () => {
    try {
      console.log('marketSearch()');
      const token = await getAccessTokenSilently();

      // const response = await fetch(`${apiOrigin}/api/graphql`, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //     'Content-Type': 'application/json',
      //   },
      //   method: 'POST',
      //   body: JSON.stringify({
      //     query: `{
      //       userSearch{
      //         id
      //         fullName
      //         pictureUrl
      //       }
      //   }`,
      //   }),
      // });

      const responseData = data;// await response.json();

      console.log(data);

      setState({
        ...state,
        showResult: true,
        apiMessage: responseData,
        userSearchResults: responseData.userSearch,
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