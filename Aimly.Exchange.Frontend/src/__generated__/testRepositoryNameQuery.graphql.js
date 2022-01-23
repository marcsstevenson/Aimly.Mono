/**
 * @generated SignedSource<<412b4eb75afe23ea4da3e5800bb7b14d>>
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
  +repository: ?{|
    +name: string,
  |},
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
    "kind": "Literal",
    "name": "name",
    "value": "relay"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "facebook"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "testRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "testRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")"
      }
    ]
  },
  "params": {
    "cacheID": "27eb02cf61ab331756e2900c268f9373",
    "id": null,
    "metadata": {},
    "name": "testRepositoryNameQuery",
    "operationKind": "query",
    "text": "query testRepositoryNameQuery {\n  repository(owner: \"facebook\", name: \"relay\") {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "fd673758431736f67ae32e0ddc06d613";

module.exports = ((node/*: any*/)/*: Query<
  testRepositoryNameQuery$variables,
  testRepositoryNameQuery$data,
>*/);
