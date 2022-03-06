/**
 * @generated SignedSource<<30372c6f08e996b777e8b83a48ec94d9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getExpertProfileQuery$variables = {
  userId: any;
  id: any;
};
export type getExpertProfileQueryVariables = getExpertProfileQuery$variables;
export type getExpertProfileQuery$data = {
  readonly getExpertProfile: {
    readonly userId: any;
    readonly id: any | null;
    readonly name: string;
    readonly about: string;
    readonly industries: ReadonlyArray<string | null> | null;
    readonly listOnMarket: boolean;
  } | null;
};
export type getExpertProfileQueryResponse = getExpertProfileQuery$data;
export type getExpertProfileQuery = {
  variables: getExpertProfileQueryVariables;
  response: getExpertProfileQuery$data;
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
    "concreteType": "GetExpertProfileModel",
    "kind": "LinkedField",
    "name": "getExpertProfile",
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
    "name": "getExpertProfileQuery",
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
    "name": "getExpertProfileQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "51cf1e81a13be0e66ec9951d41b26a6f",
    "id": null,
    "metadata": {},
    "name": "getExpertProfileQuery",
    "operationKind": "query",
    "text": "query getExpertProfileQuery(\n  $userId: UUID!\n  $id: UUID!\n) {\n  getExpertProfile(userId: $userId, id: $id) {\n    userId\n    id\n    name\n    about\n    industries\n    listOnMarket\n  }\n}\n"
  }
};
})();

(node as any).hash = "e848a1ab5acb91aa5e16ff0f8e9ebaf0";

export default node;
