/**
 * @generated SignedSource<<54d711b84fe084599b0b48e5c67d9d15>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useCreateAccountForEntityMutation$variables = {
  userId: any;
  companyProfileId?: any | null;
  refreshUrlPath: string;
  returnUrlPath: string;
};
export type useCreateAccountForEntityMutationVariables = useCreateAccountForEntityMutation$variables;
export type useCreateAccountForEntityMutation$data = {
  readonly createAccountForEntity: {
    readonly accountLink: string | null;
    readonly accountId: string | null;
    readonly errorMessage: string | null;
    readonly isSuccessful: boolean;
  } | null;
};
export type useCreateAccountForEntityMutationResponse = useCreateAccountForEntityMutation$data;
export type useCreateAccountForEntityMutation = {
  variables: useCreateAccountForEntityMutationVariables;
  response: useCreateAccountForEntityMutation$data;
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
  "name": "refreshUrlPath"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "returnUrlPath"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
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
        "name": "refreshUrlPath",
        "variableName": "refreshUrlPath"
      },
      {
        "kind": "Variable",
        "name": "returnUrlPath",
        "variableName": "returnUrlPath"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "CreateAccountForEntityResponse",
    "kind": "LinkedField",
    "name": "createAccountForEntity",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "accountLink",
        "storageKey": null
      },
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
        "name": "errorMessage",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isSuccessful",
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
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useCreateAccountForEntityMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "useCreateAccountForEntityMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "05694824077b28a2388475490182bd5e",
    "id": null,
    "metadata": {},
    "name": "useCreateAccountForEntityMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateAccountForEntityMutation(\n  $userId: UUID!\n  $companyProfileId: UUID\n  $refreshUrlPath: String!\n  $returnUrlPath: String!\n) {\n  createAccountForEntity(userId: $userId, companyProfileId: $companyProfileId, refreshUrlPath: $refreshUrlPath, returnUrlPath: $returnUrlPath) {\n    accountLink\n    accountId\n    errorMessage\n    isSuccessful\n  }\n}\n"
  }
};
})();

(node as any).hash = "7366379d12853e601629c6bd3019b60f";

export default node;
