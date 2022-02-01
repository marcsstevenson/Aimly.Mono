import {
  Environment,
  Network,
  RecordSource,
  Store,
  Variables,
  RequestParameters,
  CacheConfig
} from 'relay-runtime';
// import fetchGraphQL from './fetchGraphQL';

// export interface Props{
//   name: Text;
//   text: Text;
// }

/**
 * Relay requires developers to configure a "fetch" function that tells Relay how to load
 * the results of GraphQL queries from your server (or other data source). See more at
 * https://relay.dev/docs/en/quick-start-guide#relay-environment.
 */
async function fetchRelay(
  params: RequestParameters,
  variables: Variables,
  _cacheConfig: CacheConfig
) {
  const REACT_APP_BACKEND_API = process.env.REACT_APP_EXCHANGE_API_URI;
  const graphqlApi = REACT_APP_BACKEND_API + '/api/graphql';
  // const token = await getAccessTokenSilently();

  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch(graphqlApi, {
    method: "POST",
    headers: {
      // Authorization: `Bearer ${token}`,
      // TODO - Add user's auth token here
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: params.text,
      variables
    })
  });

  // Get the response as JSON
  const json = await response.json();

  // GraphQL returns exceptions (for example, a missing required variable) in the "errors"
  // property of the response. If any exceptions occurred when processing the request,
  // throw an error to indicate to the developer what went wrong.
  if (Array.isArray(json.errors)) {
    console.log(json.errors);
    throw new Error(
      `Error fetching GraphQL query '${params.name
      }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
        json.errors
      )}`
    );
  }

  // Otherwise, return the full payload.
  return json;
}

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
// async function fetchRelay(params, variables) {
//   console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
//   return fetchGraphQL(params.text, variables);
// }

// function fetchQuery(operation, variables) {
//   // console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
//   return fetch("/graphql", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       query: operation.text,
//       variables
//     })
//   }).then(response => {
//     return response.json();
//   });
// }
// return fetchRelay;
// function resolvedFetch(operation: any, variables: any) {
//   return fetchRelay(operation, variables).then(response => { return response.json(); });
// };

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource(), {
    // This property tells Relay to not immediately clear its cache when the user
    // navigates around the app. Relay will hold onto the specified number of
    // query results, allowing the user to return to recently visited pages
    // and reusing cached data if its available/fresh.
    gcReleaseBufferSize: 10
  }),
});