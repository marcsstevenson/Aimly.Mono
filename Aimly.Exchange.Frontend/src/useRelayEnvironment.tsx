import {
  Environment,
  Network,
  RecordSource,
  Store,
  Variables,
  RequestParameters,
  CacheConfig,
} from 'relay-runtime';
import { AuthorizationParams } from '@auth0/auth0-spa-js';

import { useAuth0 } from '@auth0/auth0-react';
import { getConfig } from 'config';

// Provides a method of getting our Relay environment
// Auth0 is integrated with Relay and will automatically add a bearer token header
// to each API request
export default function useRelayEnvironment() {
  const { getAccessTokenSilently } = useAuth0();
  const config = getConfig();

  console.log(config);

  async function fetchRelay(
    params: RequestParameters,
    variables: Variables,
    _cacheConfig: CacheConfig
  ) {
    const REACT_APP_BACKEND_API = process.env.REACT_APP_EXCHANGE_API_URI;
    const graphqlApi = REACT_APP_BACKEND_API + '/api/graphql';
    const authParams: AuthorizationParams = {
      audience: config.Auth.exchangeApiAudience,
    };
    const token = await getAccessTokenSilently({
      authorizationParams: authParams,
    });

    // Fetch data from GitHub's GraphQL API:
    const response = await fetch(graphqlApi, {
      method: 'POST',
      headers: {
        // Add user's auth token here
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: params.text,
        variables,
      }),
    });

    // Get the response as JSON
    const json = await response.json();

    // GraphQL returns exceptions (for example, a missing required variable) in the "errors"
    // property of the response. If any exceptions occurred when processing the request,
    // throw an error to indicate to the developer what went wrong.
    if (Array.isArray(json.errors)) {
      console.log(json.errors);
      throw new Error(
        `Error fetching GraphQL query '${params.name}' with variables '${JSON.stringify(
          variables
        )}': ${JSON.stringify(json.errors)}`
      );
    }

    // Otherwise, return the full payload.
    return json;
  }

  const getRelayEnvironment = (): Environment => {
    return new Environment({
      network: Network.create(fetchRelay),
      store: new Store(new RecordSource(), {
        // This property tells Relay to not immediately clear its cache when the user
        // navigates around the app. Relay will hold onto the specified number of
        // query results, allowing the user to return to recently visited pages
        // and reusing cached data if its available/fresh.
        gcReleaseBufferSize: 10,
      }),
    });
  };

  return getRelayEnvironment;
}
