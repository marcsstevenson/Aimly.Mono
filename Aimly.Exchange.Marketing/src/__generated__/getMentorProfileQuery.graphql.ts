/**
 * @generated SignedSource<<b3615fca76ea4c0b274ce7803609253c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getMentorProfileQuery$variables = {
  userId: any;
  id: any;
};
export type getMentorProfileQueryVariables = getMentorProfileQuery$variables;
export type getMentorProfileQuery$data = {
  readonly getMentorProfile: {
    readonly userId: any;
    readonly id: any | null;
    readonly name: string;
    readonly about: string;
    readonly industries: ReadonlyArray<string | null> | null;
    readonly listOnMarket: boolean;
  } | null;
};
export type getMentorProfileQueryResponse = getMentorProfileQuery$data;
export type getMentorProfileQuery = {
  variables: getMentorProfileQueryVariables;
  response: getMentorProfileQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "GetMentorProfileModel",
    "kind": "LinkedField",
    "name": "getMentorProfile",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userId",
        "storageKey": null
      },
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "about",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "industries",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "listOnMarket",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "getMentorProfileQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "getMentorProfileQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "958e8fc5d88619d53df3f1f18713372b",
    "id": null,
    "metadata": {},
    "name": "getMentorProfileQuery",
    "operationKind": "query",
    "text": "query getMentorProfileQuery(\n  $userId: UUID!\n  $id: UUID!\n) {\n  getMentorProfile(userId: $userId, id: $id) {\n    userId\n    id\n    name\n    about\n    industries\n    listOnMarket\n  }\n}\n"
  }
};
})();

(node as any).hash = "66324f25595d58b3e067c20138d114c4";

export default node;
