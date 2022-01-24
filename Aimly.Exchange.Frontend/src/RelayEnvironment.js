import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';

// export interface Props{
//   name: Text;
//   text: Text;
// }


// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(params, variables) {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
  return fetchGraphQL(params.text, variables);
}

function fetchQuery(operation, variables) {
  // console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
  return fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}
// return fetchRelay;
// function resolvedFetch(operation: any, variables: any) {
//   return fetchRelay(operation, variables).then(response => { return response.json(); });
// };

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});