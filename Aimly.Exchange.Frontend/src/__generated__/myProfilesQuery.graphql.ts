/**
 * @generated SignedSource<<69dca1d6037fcf1522274fbfea7f0458>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileTypeOption = "PERSONAL" | "STARTUP" | "MENTOR" | "EXPERT" | "%future added value";
export type myProfilesQuery$variables = {
  userId: any;
};
export type myProfilesQueryVariables = myProfilesQuery$variables;
export type myProfilesQuery$data = {
  readonly myProfiles: ReadonlyArray<{
    readonly id: any;
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
    "cacheID": "9c7976e66f2daa3f82bd101648f7bb35",
    "id": null,
    "metadata": {},
    "name": "myProfilesQuery",
    "operationKind": "query",
    "text": "query myProfilesQuery(\n  $userId: UUID!\n) {\n  myProfiles(userId: $userId) {\n    id\n    name\n    type\n  }\n}\n"
  }
};
})();

(node as any).hash = "fd2b9a5094aa85f068179cf02c6137a5";

export default node;
