/**
 * @generated SignedSource<<98b2fef1425a86019dedb89382668a46>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileTypeOption = "PERSONAL" | "COMPANY" | "MENTOR" | "EXPERT" | "%future added value";
export type myProfilesQuery$variables = {
  userId: any;
};
export type myProfilesQueryVariables = myProfilesQuery$variables;
export type myProfilesQuery$data = {
  readonly myProfiles: ReadonlyArray<{
    readonly id: any;
    readonly profileId: any;
    readonly name: string | null;
    readonly type: ProfileTypeOption;
  } | null> | null;
};
export type myProfilesQueryResponse = myProfilesQuery$data;
export type myProfilesQuery = {
  variables: myProfilesQueryVariables;
  response: myProfilesQuery$data;
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
    "cacheID": "3a0b1d43ab83596f53a4c652256b53b5",
    "id": null,
    "metadata": {},
    "name": "myProfilesQuery",
    "operationKind": "query",
    "text": "query myProfilesQuery(\n  $userId: UUID!\n) {\n  myProfiles(userId: $userId) {\n    id\n    profileId\n    name\n    type\n  }\n}\n"
  }
};
})();

(node as any).hash = "5c76f69ff64d3abdcf2c89faafba203f";

export default node;
