/**
 * @generated SignedSource<<5ae8c16091405561960548578be5b76c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getPersonalProfileQuery$variables = {
  id: any;
};
export type getPersonalProfileQueryVariables = getPersonalProfileQuery$variables;
export type getPersonalProfileQuery$data = {
  readonly getPersonalProfile: {
    readonly userId: any | null;
    readonly about: string | null;
    readonly language: string | null;
    readonly personalProfilePictureUrl: string | null;
    readonly timezone: string | null;
    readonly givenName: string | null;
    readonly familyName: string | null;
    readonly phoneNumber: string | null;
    readonly linkedInProfile: string | null;
    readonly industries: ReadonlyArray<string | null> | null;
    readonly skills: ReadonlyArray<string | null> | null;
  } | null;
};
export type getPersonalProfileQueryResponse = getPersonalProfileQuery$data;
export type getPersonalProfileQuery = {
  variables: getPersonalProfileQueryVariables;
  response: getPersonalProfileQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "id"
      }
    ],
    "concreteType": "GetPersonalProfileModel",
    "kind": "LinkedField",
    "name": "getPersonalProfile",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "about",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "language",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "personalProfilePictureUrl",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "timezone",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "givenName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "familyName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "phoneNumber",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "linkedInProfile",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "industries",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "skills",
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
    "name": "getPersonalProfileQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getPersonalProfileQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a56a0f95523fcad013466f69f2844c11",
    "id": null,
    "metadata": {},
    "name": "getPersonalProfileQuery",
    "operationKind": "query",
    "text": "query getPersonalProfileQuery(\n  $id: UUID!\n) {\n  getPersonalProfile(userId: $id) {\n    userId\n    about\n    language\n    personalProfilePictureUrl\n    timezone\n    givenName\n    familyName\n    phoneNumber\n    linkedInProfile\n    industries\n    skills\n  }\n}\n"
  }
};
})();

(node as any).hash = "76c83b0799058e9f1c645f13dbc9a5ee";

export default node;
