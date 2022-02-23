/**
 * @generated SignedSource<<f06c078c269649c5c48a773c2ff68aa7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useDeleteExpertProfileMutation$variables = {
  userId: any;
  profileId: any;
};
export type useDeleteExpertProfileMutationVariables = useDeleteExpertProfileMutation$variables;
export type useDeleteExpertProfileMutation$data = {
  readonly deleteExpertProfile: {
    readonly deletedProfileId: any;
  } | null;
};
export type useDeleteExpertProfileMutationResponse = useDeleteExpertProfileMutation$data;
export type useDeleteExpertProfileMutation = {
  variables: useDeleteExpertProfileMutationVariables;
  response: useDeleteExpertProfileMutation$data;
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
    "name": "deleteExpertProfile",
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
    "name": "useDeleteExpertProfileMutation",
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
    "name": "useDeleteExpertProfileMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "695ed143fd544fa8fddb81c5a9b385d2",
    "id": null,
    "metadata": {},
    "name": "useDeleteExpertProfileMutation",
    "operationKind": "mutation",
    "text": "mutation useDeleteExpertProfileMutation(\n  $userId: UUID!\n  $profileId: UUID!\n) {\n  deleteExpertProfile(userId: $userId, profileId: $profileId) {\n    deletedProfileId\n  }\n}\n"
  }
};
})();

(node as any).hash = "286b40a96942ca243f0854f7e3b177a5";

export default node;
