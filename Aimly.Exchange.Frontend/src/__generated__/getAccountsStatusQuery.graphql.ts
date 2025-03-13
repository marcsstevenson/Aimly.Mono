/**
 * @generated SignedSource<<1305167182a00cee2cd87f9a9fbf7f87>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getAccountsStatusQuery$variables = {
  companyProfileId?: any | null | undefined;
  userId: any;
};
export type getAccountsStatusQuery$data = {
  readonly accountsStatus: {
    readonly errorMessage: string | null | undefined;
    readonly getAccountResponse: {
      readonly accountId: string | null | undefined;
      readonly errorMessage: string | null | undefined;
      readonly isSuccessful: boolean;
      readonly payoutsEnabled: boolean;
      readonly type: string | null | undefined;
    } | null | undefined;
    readonly isSuccessful: boolean;
  } | null | undefined;
};
export type getAccountsStatusQuery = {
  response: getAccountsStatusQuery$data;
  variables: getAccountsStatusQuery$variables;
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
