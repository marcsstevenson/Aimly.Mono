/**
 * @generated SignedSource<<cd02010ccb62988ad740077c39f09b75>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type testRepositoryNameQuery$variables = {||};
export type testRepositoryNameQueryVariables = testRepositoryNameQuery$variables;
export type testRepositoryNameQuery$data = {|
  +userSearch: ?$ReadOnlyArray<?{|
    +id: any,
    +fullName: ?string,
    +pictureUrl: ?string,
  |}>,
|};
export type testRepositoryNameQueryResponse = testRepositoryNameQuery$data;
export type testRepositoryNameQuery = {|
  variables: testRepositoryNameQueryVariables,
  response: testRepositoryNameQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "UserSearchResult",
    "kind": "LinkedField",
    "name": "userSearch",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fullName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "pictureUrl",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "testRepositoryNameQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "testRepositoryNameQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "99eea5644df78dcdf6b1ac7fd8620df5",
    "id": null,
    "metadata": {},
    "name": "testRepositoryNameQuery",
    "operationKind": "query",
    "text": "query testRepositoryNameQuery {\n  userSearch {\n    id\n    fullName\n    pictureUrl\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "7570ef9fb20c5a4826bb707264072ca8";

module.exports = ((node/*: any*/)/*: Query<
  testRepositoryNameQuery$variables,
  testRepositoryNameQuery$data,
>*/);
