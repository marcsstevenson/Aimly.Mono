import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getConfig } from 'config';

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

  const marketSearch = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(`${apiOrigin}/api/graphql`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          query: `{
            userSearch{
              id
              fullName
              pictureUrl
            }
        }`,
        }),
      });

      const responseData = await response.json();

      setState({
        ...state,
        showResult: true,
        apiMessage: responseData,
        userSearchResults: responseData.data.userSearch,
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