/**
 * @generated SignedSource<<e42914eb6fe210ef2fed1dd1f7e7670d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useDeleteMentorProfileMutation$variables = {
  userId: any;
  profileId: any;
};
export type useDeleteMentorProfileMutationVariables = useDeleteMentorProfileMutation$variables;
export type useDeleteMentorProfileMutation$data = {
  readonly deleteMentorProfile: {
    readonly deletedProfileId: any;
  } | null;
};
export type useDeleteMentorProfileMutationResponse = useDeleteMentorProfileMutation$data;
export type useDeleteMentorProfileMutation = {
  variables: useDeleteMentorProfileMutationVariables;
  response: useDeleteMentorProfileMutation$data;
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
    "name": "deleteMentorProfile",
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
    "name": "useDeleteMentorProfileMutation",
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
    "name": "useDeleteMentorProfileMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "5003326d7744688a1495f2dcc21f3e22",
    "id": null,
    "metadata": {},
    "name": "useDeleteMentorProfileMutation",
    "operationKind": "mutation",
    "text": "mutation useDeleteMentorProfileMutation(\n  $userId: UUID!\n  $profileId: UUID!\n) {\n  deleteMentorProfile(userId: $userId, profileId: $profileId) {\n    deletedProfileId\n  }\n}\n"
  }
};
})();

(node as any).hash = "06bc64599ea8f9d6b8a0171cada00753";

export default node;
