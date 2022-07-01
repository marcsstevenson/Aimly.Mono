/**
 * @generated SignedSource<<c152483eb9872da803ab77e1696f970d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getAccountsStatusForUserQuery$variables = {
  userId: any;
};
export type getAccountsStatusForUserQueryVariables = getAccountsStatusForUserQuery$variables;
export type getAccountsStatusForUserQuery$data = {
  readonly accountsStatusForUser: {
    readonly getAccountResponse: {
      readonly accountId: string | null;
      readonly type: string | null;
      readonly payoutsEnabled: boolean;
      readonly errorMessage: string | null;
      readonly isSuccessful: boolean;
    } | null;
    readonly errorMessage: string | null;
    readonly isSuccessful: boolean;
  } | null;
};
export type getAccountsStatusForUserQueryResponse = getAccountsStatusForUserQuery$data;
export type getAccountsStatusForUserQuery = {
  variables: getAccountsStatusForUserQueryVariables;
  response: getAccountsStatusForUserQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "errorMessage",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isSuccessful",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "GetAccountsStatusResponse",
    "kind": "LinkedField",
    "name": "accountsStatusForUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GetAccountResponse",
        "kind": "LinkedField",
        "name": "getAccountResponse",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "accountId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "type",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "payoutsEnabled",
            "storageKey": null
          },
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "getAccountsStatusForUserQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getAccountsStatusForUserQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "6a7f30ad14808eee70542aaf9784ff46",
    "id": null,
    "metadata": {},
    "name": "getAccountsStatusForUserQuery",
    "operationKind": "query",
    "text": "query getAccountsStatusForUserQuery(\n  $userId: UUID!\n) {\n  accountsStatusForUser(userId: $userId) {\n    getAccountResponse {\n      accountId\n      type\n      payoutsEnabled\n      errorMessage\n      isSuccessful\n    }\n    errorMessage\n    isSuccessful\n  }\n}\n"
  }
};
})();

(node as any).hash = "48fed09d3de2b1233d63c1fa7e869f09";

export default node;
