/**
 * @generated SignedSource<<281f7980009f82d406494ee433470976>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileTypeOption = "PERSONAL" | "COMPANY" | "MENTOR" | "EXPERT" | "%future added value";
export type companiesForAdministrationQuery$variables = {
  userId: any;
};
export type companiesForAdministrationQueryVariables = companiesForAdministrationQuery$variables;
export type companiesForAdministrationQuery$data = {
  readonly companiesForAdministration: ReadonlyArray<{
    readonly id: any;
    readonly profileId: any;
    readonly name: string | null;
    readonly profilePictureUrl: string | null;
    readonly type: ProfileTypeOption;
  } | null> | null;
};
export type companiesForAdministrationQueryResponse = companiesForAdministrationQuery$data;
export type companiesForAdministrationQuery = {
  variables: companiesForAdministrationQueryVariables;
  response: companiesForAdministrationQuery$data;
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
    "name": "companiesForAdministration",
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
    "name": "companiesForAdministrationQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "companiesForAdministrationQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ba11dd03acb25fa66267849f693ef520",
    "id": null,
    "metadata": {},
    "name": "companiesForAdministrationQuery",
    "operationKind": "query",
    "text": "query companiesForAdministrationQuery(\n  $userId: UUID!\n) {\n  companiesForAdministration(userId: $userId) {\n    id\n    profileId\n    name\n    profilePictureUrl\n    type\n  }\n}\n"
  }
};
})();

(node as any).hash = "60cb4433ca6d04a0e1e64605868d2240";

export default node;
