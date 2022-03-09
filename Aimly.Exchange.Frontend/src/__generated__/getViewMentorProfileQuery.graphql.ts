/**
 * @generated SignedSource<<18e51ab9b7de712559eb11584539c8cd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getViewMentorProfileQuery$variables = {
  profileId: any;
};
export type getViewMentorProfileQueryVariables = getViewMentorProfileQuery$variables;
export type getViewMentorProfileQuery$data = {
  readonly getViewMentorProfile: {
    readonly id: string | null;
    readonly profileId: any;
    readonly parentProfile: {
      readonly id: string | null;
      readonly personalProfileId: any;
      readonly fullName: string | null;
      readonly givenName: string | null;
      readonly profilePictureUrl: string | null;
      readonly linkedInProfile: string | null;
      readonly about: string | null;
      readonly employmentExperience: ReadonlyArray<{
        readonly id: any | null;
        readonly description: string | null;
        readonly title: string | null;
        readonly organisation: string | null;
        readonly startMonth: number;
        readonly startYear: number;
        readonly endMonth: number | null;
        readonly endYear: number | null;
      } | null> | null;
    } | null;
    readonly name: string | null;
    readonly about: string | null;
    readonly industries: ReadonlyArray<string | null> | null;
    readonly skills: ReadonlyArray<string | null> | null;
  } | null;
};
export type getViewMentorProfileQueryResponse = getViewMentorProfileQuery$data;
export type getViewMentorProfileQuery = {
  variables: getViewMentorProfileQueryVariables;
  response: getViewMentorProfileQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "profileId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "about",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "profileId",
        "variableName": "profileId"
      }
    ],
    "concreteType": "ViewTalentProfileModel",
    "kind": "LinkedField",
    "name": "getViewMentorProfile",
    "plural": false,
    "selections": [
      (v1/*: any*/),
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
        "concreteType": "ViewPersonalProfileModel",
        "kind": "LinkedField",
        "name": "parentProfile",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "personalProfileId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fullName",
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
            "name": "profilePictureUrl",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "linkedInProfile",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ExperienceModel",
            "kind": "LinkedField",
            "name": "employmentExperience",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      (v2/*: any*/),
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
    "name": "getViewMentorProfileQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getViewMentorProfileQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "d11d7e483f095b1106b4dda1a53387f4",
    "id": null,
    "metadata": {},
    "name": "getViewMentorProfileQuery",
    "operationKind": "query",
    "text": "query getViewMentorProfileQuery(\n  $profileId: UUID!\n) {\n  getViewMentorProfile(profileId: $profileId) {\n    id\n    profileId\n    parentProfile {\n      id\n      personalProfileId\n      fullName\n      givenName\n      profilePictureUrl\n      linkedInProfile\n      about\n      employmentExperience {\n        id\n        description\n        title\n        organisation\n        startMonth\n        startYear\n        endMonth\n        endYear\n      }\n    }\n    name\n    about\n    industries\n    skills\n  }\n}\n"
  }
};
})();

(node as any).hash = "97da9b06901d9f5e5a3f2bf6b3ca3352";

export default node;
