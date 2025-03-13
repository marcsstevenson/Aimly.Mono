/**
 * @generated SignedSource<<bb114c1d6a10e8a672c449e2245db7ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getViewExpertProfileQuery$variables = {
  profileId: any;
  userId?: any | null | undefined;
};
export type getViewExpertProfileQuery$data = {
  readonly getViewExpertProfile: {
    readonly about: string | null | undefined;
    readonly id: string | null | undefined;
    readonly industries: ReadonlyArray<string | null | undefined> | null | undefined;
    readonly isUsersProfile: boolean;
    readonly listOnMarket: boolean;
    readonly name: string | null | undefined;
    readonly parentProfile: {
      readonly about: string | null | undefined;
      readonly addressCity: string | null | undefined;
      readonly addressCountry: string | null | undefined;
      readonly addressRegion: string | null | undefined;
      readonly employmentExperience: ReadonlyArray<{
        readonly description: string | null | undefined;
        readonly endMonth: number | null | undefined;
        readonly endYear: number | null | undefined;
        readonly id: any | null | undefined;
        readonly organisation: string | null | undefined;
        readonly startMonth: number;
        readonly startYear: number;
        readonly stickToTop: boolean;
        readonly title: string | null | undefined;
      } | null | undefined> | null | undefined;
      readonly fullName: string | null | undefined;
      readonly givenName: string | null | undefined;
      readonly id: string | null | undefined;
      readonly linkedInProfile: string | null | undefined;
      readonly listOnMarket: boolean;
      readonly personalProfileId: any;
      readonly profilePictureUrl: string | null | undefined;
      readonly userPublicId: any | null | undefined;
    } | null | undefined;
    readonly profileId: any;
    readonly skills: ReadonlyArray<string | null | undefined> | null | undefined;
    readonly userCanAccessProfile: boolean;
  } | null | undefined;
};
export type getViewExpertProfileQuery = {
  response: getViewExpertProfileQuery$data;
  variables: getViewExpertProfileQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "profileId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
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
  "name": "listOnMarket",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "about",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "profileId",
        "variableName": "profileId"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "ViewTalentProfileModel",
    "kind": "LinkedField",
    "name": "getViewExpertProfile",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isUsersProfile",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userCanAccessProfile",
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
          (v2/*: any*/),
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "addressCity",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "addressRegion",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "addressCountry",
            "storageKey": null
          },
          (v3/*: any*/),
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
      (v3/*: any*/),
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
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getViewExpertProfileQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "1eb7fea2162118e7467b4c3e3326847e",
    "id": null,
    "metadata": {},
    "name": "getViewExpertProfileQuery",
    "operationKind": "query",
    "text": "query getViewExpertProfileQuery(\n  $profileId: UUID!\n  $userId: UUID\n) {\n  getViewExpertProfile(profileId: $profileId, userId: $userId) {\n    id\n    listOnMarket\n    isUsersProfile\n    userCanAccessProfile\n    profileId\n    parentProfile {\n      id\n      personalProfileId\n      userPublicId\n      listOnMarket\n      fullName\n      givenName\n      profilePictureUrl\n      linkedInProfile\n      addressCity\n      addressRegion\n      addressCountry\n      about\n      employmentExperience {\n        id\n        stickToTop\n        title\n        organisation\n        description\n        startMonth\n        startYear\n        endMonth\n        endYear\n      }\n    }\n    name\n    about\n    industries\n    skills\n  }\n}\n"
  }
};
})();

(node as any).hash = "ef06db10f0ba304f27a8f8e4b37eac19";

export default node;
