/**
 * @generated SignedSource<<fbfc03102d42225ef05d39f9adf05846>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getAccountsStatusQuery$variables = {
  userId: any;
  companyProfileId?: any | null;
};
export type getAccountsStatusQueryVariables = getAccountsStatusQuery$variables;
export type getAccountsStatusQuery$data = {
  readonly accountsStatus: {
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
export type getAccountsStatusQueryResponse = getAccountsStatusQuery$data;
export type getAccountsStatusQuery = {
  variables: getAccountsStatusQueryVariables;
  response: getAccountsStatusQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "companyProfileId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "errorMessage",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isSuccessful",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "companyProfileId",
        "variableName": "companyProfileId"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "GetAccountsStatusResponse",
    "kind": "LinkedField",
    "name": "accountsStatus",
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
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      (v2/*: any*/),
      (v3/*: any*/)
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
    "name": "getAccountsStatusQuery",
    "selections": (v4/*: any*/),
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
    "name": "getAccountsStatusQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "1607fa7aea827de811034308e07f5dd7",
    "id": null,
    "metadata": {},
    "name": "getAccountsStatusQuery",
    "operationKind": "query",
    "text": "query getAccountsStatusQuery(\n  $userId: UUID!\n  $companyProfileId: UUID\n) {\n  accountsStatus(userId: $userId, companyProfileId: $companyProfileId) {\n    getAccountResponse {\n      accountId\n      type\n      payoutsEnabled\n      errorMessage\n      isSuccessful\n    }\n    errorMessage\n    isSuccessful\n  }\n}\n"
  }
};
})();

(node as any).hash = "6a76b45e7e7cb7c49797af09ae4caa3a";

export default node;
