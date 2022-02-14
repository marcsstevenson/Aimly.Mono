/**
 * @generated SignedSource<<78b44eb22583f33cd8ba7a363e224031>>
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
    "cacheID": "9e15ab00cad70bd0de0c6daf3cce6465",
    "id": null,
    "metadata": {},
    "name": "getPersonalProfileQuery",
    "operationKind": "query",
    "text": "query getPersonalProfileQuery(\n  $id: UUID!\n) {\n  getPersonalProfile(userId: $id) {\n    userId\n    about\n    language\n    personalProfilePictureUrl\n    timezone\n    givenName\n    familyName\n    phoneNumber\n    linkedInProfile\n  }\n}\n"
  }
};
})();

(node as any).hash = "8ed17f474c1bec98908b549b6c07e75c";

export default node;
