/**
 * @generated SignedSource<<9f27dcad89f4d903808e7da0dc5b17be>>
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
    readonly employmentExperience: ReadonlyArray<{
      readonly id: string | null;
      readonly experienceId: any;
      readonly title: string | null;
      readonly organisation: string | null;
      readonly startMonth: number;
      readonly startYear: number;
      readonly endMonth: number | null;
      readonly endYear: number | null;
    } | null> | null;
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ExperienceBriefModel",
        "kind": "LinkedField",
        "name": "employmentExperience",
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
            "name": "experienceId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "organisation",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "startMonth",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "startYear",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "endMonth",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "endYear",
            "storageKey": null
          }
        ],
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
    "cacheID": "662ba97ccaea8f0dba7d267dad0216dc",
    "id": null,
    "metadata": {},
    "name": "getPersonalProfileQuery",
    "operationKind": "query",
    "text": "query getPersonalProfileQuery(\n  $id: UUID!\n) {\n  getPersonalProfile(userId: $id) {\n    userId\n    about\n    language\n    personalProfilePictureUrl\n    timezone\n    givenName\n    familyName\n    phoneNumber\n    linkedInProfile\n    industries\n    skills\n    employmentExperience {\n      id\n      experienceId\n      title\n      organisation\n      startMonth\n      startYear\n      endMonth\n      endYear\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "85a2bbd7508a221015ef0ffc8aaa3323";

export default node;
