/**
 * @generated SignedSource<<6dead34f824b16707d5b1ac59c1b72d8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileTypeOption = "COMPANY" | "EXPERT" | "MENTOR" | "PERSONAL" | "%future added value";
export type sharedWithCompaniesQuery$variables = {
  userId: any;
};
export type sharedWithCompaniesQuery$data = {
  readonly sharedWithCompanies: ReadonlyArray<{
    readonly id: any;
    readonly name: string | null | undefined;
    readonly profileId: any;
    readonly type: ProfileTypeOption;
  } | null | undefined> | null | undefined;
};
export type sharedWithCompaniesQuery = {
  response: sharedWithCompaniesQuery$data;
  variables: sharedWithCompaniesQuery$variables;
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
