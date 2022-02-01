import { useAuth0 } from '@auth0/auth0-react';
import { getConfig } from 'config';
// import { getAccessTokenSilently } from '@auth0/auth0-spa-js';

// const { getAccessTokenSilently } = useAuth0();

async function fetchGraphQL(text, variables) {
  const REACT_APP_BACKEND_API = process.env.REACT_APP_EXCHANGE_API_URI;
  const graphqlApi = REACT_APP_BACKEND_API + '/api/graphql';
  // const token = await getAccessTokenSilently();

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch(graphqlApi, {
    method: 'POST',
    headers: {
      // Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
      // Authorization: `Bearer ${token}`,
      // TODO - Add user's auth token here
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;