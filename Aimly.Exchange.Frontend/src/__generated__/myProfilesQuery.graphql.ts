/**
 * @generated SignedSource<<4136fe461baef627a86ffb00503b38e8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileTypeOption = "COMPANY" | "EXPERT" | "MENTOR" | "PERSONAL" | "%future added value";
export type myProfilesQuery$variables = {
  userId: any;
};
export type myProfilesQuery$data = {
  readonly myProfiles: ReadonlyArray<{
    readonly id: any;
    readonly name: string | null | undefined;
    readonly profileId: any;
    readonly profilePictureUrl: string | null | undefined;
    readonly type: ProfileTypeOption;
  } | null | undefined> | null | undefined;
};
export type myProfilesQuery = {
  response: myProfilesQuery$data;
  variables: myProfilesQuery$variables;
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
    "concreteType": "MyProfilesResult",
    "kind": "LinkedField",
    "name": "myProfiles",
    "plural": true,
    "selections": [
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
        "name": "profileId",
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
        "name": "profilePictureUrl",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
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
    "name": "myProfilesQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "myProfilesQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "230d1a198809481fd64b5be9f7e21c4a",
    "id": null,
    "metadata": {},
    "name": "myProfilesQuery",
    "operationKind": "query",
    "text": "query myProfilesQuery(\n  $userId: UUID!\n) {\n  myProfiles(userId: $userId) {\n    id\n    profileId\n    name\n    profilePictureUrl\n    type\n  }\n}\n"
  }
};
})();

(node as any).hash = "3183b012c329f8de06e1c7de317a6ddd";

export default node;
