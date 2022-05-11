/**
 * @generated SignedSource<<8003f99296ff2f480bfd0914bda293a4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getViewExpertProfileQuery$variables = {
  profileId: any;
};
export type getViewExpertProfileQueryVariables = getViewExpertProfileQuery$variables;
export type getViewExpertProfileQuery$data = {
  readonly getViewExpertProfile: {
    readonly id: string | null;
    readonly profileId: any;
    readonly parentProfile: {
      readonly id: string | null;
      readonly personalProfileId: any;
      readonly userPublicId: any | null;
      readonly listOnMarket: boolean;
      readonly fullName: string | null;
      readonly givenName: string | null;
      readonly profilePictureUrl: string | null;
      readonly linkedInProfile: string | null;
      readonly about: string | null;
      readonly employmentExperience: ReadonlyArray<{
        readonly id: any | null;
        readonly stickToTop: boolean;
        readonly title: string | null;
        readonly organisation: string | null;
        readonly description: string | null;
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
export type getViewExpertProfileQueryResponse = getViewExpertProfileQuery$data;
export type getViewExpertProfileQuery = {
  variables: getViewExpertProfileQueryVariables;
  response: getViewExpertProfileQuery$data;
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
    "name": "getViewExpertProfile",
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
            "name": "userPublicId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "listOnMarket",
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
                "name": "stickToTop",
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
                "name": "description",
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
    "name": "getViewExpertProfileQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getViewExpertProfileQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "8c0e6398d8dc11c6e082e09645973b64",
    "id": null,
    "metadata": {},
    "name": "getViewExpertProfileQuery",
    "operationKind": "query",
    "text": "query getViewExpertProfileQuery(\n  $profileId: UUID!\n) {\n  getViewExpertProfile(profileId: $profileId) {\n    id\n    profileId\n    parentProfile {\n      id\n      personalProfileId\n      userPublicId\n      listOnMarket\n      fullName\n      givenName\n      profilePictureUrl\n      linkedInProfile\n      about\n      employmentExperience {\n        id\n        stickToTop\n        title\n        organisation\n        description\n        startMonth\n        startYear\n        endMonth\n        endYear\n      }\n    }\n    name\n    about\n    industries\n    skills\n  }\n}\n"
  }
};
})();

(node as any).hash = "4062f3e17d76e765843429338eb33975";

export default node;
