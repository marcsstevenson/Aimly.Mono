/**
 * @generated SignedSource<<a0c9362d8ec170fa17bc438a7a63d2f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useDeleteExperienceMutation$variables = {
  userId: any;
  id: any;
};
export type useDeleteExperienceMutationVariables = useDeleteExperienceMutation$variables;
export type useDeleteExperienceMutation$data = {
  readonly deleteExperience: {
    readonly deletedId: any;
  } | null;
};
export type useDeleteExperienceMutationResponse = useDeleteExperienceMutation$data;
export type useDeleteExperienceMutation = {
  variables: useDeleteExperienceMutationVariables;
  response: useDeleteExperienceMutation$data;
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
    "concreteType": "DeleteResponse",
    "kind": "LinkedField",
    "name": "deleteExperience",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedId",
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
    "name": "useDeleteExperienceMutation",
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
    "name": "useDeleteExperienceMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "990d465aa3da3233682434cb70afc4be",
    "id": null,
    "metadata": {},
    "name": "useDeleteExperienceMutation",
    "operationKind": "mutation",
    "text": "mutation useDeleteExperienceMutation(\n  $userId: UUID!\n  $id: UUID!\n) {\n  deleteExperience(userId: $userId, id: $id) {\n    deletedId\n  }\n}\n"
  }
};
})();

(node as any).hash = "8a2891b1d641c05f6af91d8909a57023";

export default node;
