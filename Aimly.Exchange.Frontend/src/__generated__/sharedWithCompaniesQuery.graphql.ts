/**
 * @generated SignedSource<<9f10a1cab3c462eb179233f1323ff65b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileTypeOption = "PERSONAL" | "COMPANY" | "MENTOR" | "EXPERT" | "%future added value";
export type sharedWithCompaniesQuery$variables = {
  userId: any;
};
export type sharedWithCompaniesQueryVariables = sharedWithCompaniesQuery$variables;
export type sharedWithCompaniesQuery$data = {
  readonly sharedWithCompanies: ReadonlyArray<{
    readonly id: any;
    readonly profileId: any;
    readonly name: string | null;
    readonly type: ProfileTypeOption;
  } | null> | null;
};
export type sharedWithCompaniesQueryResponse = sharedWithCompaniesQuery$data;
export type sharedWithCompaniesQuery = {
  variables: sharedWithCompaniesQueryVariables;
  response: sharedWithCompaniesQuery$data;
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
    "name": "sharedWithCompanies",
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
    "name": "sharedWithCompaniesQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "sharedWithCompaniesQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f69bd39995574b3b82eb56d6b078b7c4",
    "id": null,
    "metadata": {},
    "name": "sharedWithCompaniesQuery",
    "operationKind": "query",
    "text": "query sharedWithCompaniesQuery(\n  $userId: UUID!\n) {\n  sharedWithCompanies(userId: $userId) {\n    id\n    profileId\n    name\n    type\n  }\n}\n"
  }
};
})();

(node as any).hash = "fbb47147b5ef05910de05ff38d4482ee";

export default node;
