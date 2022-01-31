/**
 * @generated SignedSource<<b68c0d118e300513dc5cee81aa0c79a5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type marketSearchQuery$variables = {};
export type marketSearchQueryVariables = marketSearchQuery$variables;
export type marketSearchQuery$data = {
  readonly userSearch: ReadonlyArray<{
    readonly id: any;
    readonly fullName: string | null;
    readonly pictureUrl: string | null;
  } | null> | null;
};
export type marketSearchQueryResponse = marketSearchQuery$data;
export type marketSearchQuery = {
  variables: marketSearchQueryVariables;
  response: marketSearchQuery$data;
};

const node: ConcreteRequest = (function(){
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
    "name": "marketSearchQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "marketSearchQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "59fa8fec831e20fdec2a9aa340cf9019",
    "id": null,
    "metadata": {},
    "name": "marketSearchQuery",
    "operationKind": "query",
    "text": "query marketSearchQuery {\n  userSearch {\n    id\n    fullName\n    pictureUrl\n  }\n}\n"
  }
};
})();

(node as any).hash = "3281b5c1b66677050da37de01c11f9e7";

export default node;
