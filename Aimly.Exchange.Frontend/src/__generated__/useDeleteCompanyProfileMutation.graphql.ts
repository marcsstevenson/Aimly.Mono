/**
 * @generated SignedSource<<b8c346d70c23669d5bf9e23afddddcaa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useDeleteCompanyProfileMutation$variables = {
  profileId: any;
  userId: any;
};
export type useDeleteCompanyProfileMutation$data = {
  readonly deleteCompanyProfile: {
    readonly deletedProfileId: any;
  } | null | undefined;
};
export type useDeleteCompanyProfileMutation = {
  response: useDeleteCompanyProfileMutation$data;
  variables: useDeleteCompanyProfileMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "profileId"
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
        "name": "profileId",
        "variableName": "profileId"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "DeleteProfileResponse",
    "kind": "LinkedField",
    "name": "deleteCompanyProfile",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedProfileId",
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
    "name": "useDeleteCompanyProfileMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "useDeleteCompanyProfileMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "ced414bbc73aab79bc66bd1197727a6d",
    "id": null,
    "metadata": {},
    "name": "useDeleteCompanyProfileMutation",
    "operationKind": "mutation",
    "text": "mutation useDeleteCompanyProfileMutation(\n  $userId: UUID!\n  $profileId: UUID!\n) {\n  deleteCompanyProfile(userId: $userId, profileId: $profileId) {\n    deletedProfileId\n  }\n}\n"
  }
};
})();

(node as any).hash = "f060478928c145a7150556ab85a1bb47";

export default node;
