/**
 * @generated SignedSource<<b796ca1da1307ffd038171715d792722>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type userSettingsQuery$variables = {
  userId: any;
};
export type userSettingsQuery$data = {
  readonly userSettings: {
    readonly email: string | null | undefined;
    readonly profilePictureUrl: string | null | undefined;
  } | null | undefined;
};
export type userSettingsQuery = {
  response: userSettingsQuery$data;
  variables: userSettingsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "GetUserSettingsModel",
    "kind": "LinkedField",
    "name": "userSettings",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "profilePictureUrl",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "userSettingsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "userSettingsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "460f2b1dc69f299224f2a5caf776f4b8",
    "id": null,
    "metadata": {},
    "name": "userSettingsQuery",
    "operationKind": "query",
    "text": "query userSettingsQuery(\n  $userId: UUID!\n) {\n  userSettings(userId: $userId) {\n    profilePictureUrl\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "6c4acff22ca5fcac90974c3115bced25";

export default node;
