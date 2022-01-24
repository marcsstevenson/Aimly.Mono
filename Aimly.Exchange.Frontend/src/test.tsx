import React from 'react';
// import fetchGraphQL from './fetchGraphQL';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from 'RelayEnvironment';

const { Suspense } = React;
// Define a query
const RepositoryNameQuery = graphql`
  query testRepositoryNameQuery {
    userSearch{
      id
      fullName
      pictureUrl
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {
  /* query variables */
});
interface Props {
  preloadedQuery: any;
}

function Test(props: Props) {
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>{data.repository.name}</p> */}
        <p>Loaded</p>
      </header>
    </div>
  );
}


// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function TestRoot(props: Props) {
  return (
      <Suspense fallback={'Loading...'}>
        <Test preloadedQuery={preloadedQuery} />
      </Suspense>
  );
}

export default TestRoot;