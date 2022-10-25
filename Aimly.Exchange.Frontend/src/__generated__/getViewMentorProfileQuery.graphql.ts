/**
 * @generated SignedSource<<fcd2eaac569bed540fb69b6358e689f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getViewMentorProfileQuery$variables = {
  profileId: any;
  userId?: any | null;
};
export type getViewMentorProfileQueryVariables = getViewMentorProfileQuery$variables;
export type getViewMentorProfileQuery$data = {
  readonly getViewMentorProfile: {
    readonly id: string | null;
    readonly listOnMarket: boolean;
    readonly isUsersProfile: boolean;
    readonly userCanAccessProfile: boolean;
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
      readonly addressCity: string | null;
      readonly addressRegion: string | null;
      readonly addressCountry: string | null;
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
    "name": "getViewMentorProfile",
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
    "name": "getViewMentorProfileQuery",
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getViewMentorProfileQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "27a04eeab89262ea77ee7560a6337aaf",
    "id": null,
    "metadata": {},
    "name": "getViewMentorProfileQuery",
    "operationKind": "query",
    "text": "query getViewMentorProfileQuery(\n  $profileId: UUID!\n  $userId: UUID\n) {\n  getViewMentorProfile(profileId: $profileId, userId: $userId) {\n    id\n    listOnMarket\n    isUsersProfile\n    userCanAccessProfile\n    profileId\n    parentProfile {\n      id\n      personalProfileId\n      userPublicId\n      listOnMarket\n      fullName\n      givenName\n      profilePictureUrl\n      linkedInProfile\n      addressCity\n      addressRegion\n      addressCountry\n      about\n      employmentExperience {\n        id\n        stickToTop\n        title\n        organisation\n        description\n        startMonth\n        startYear\n        endMonth\n        endYear\n      }\n    }\n    name\n    about\n    industries\n    skills\n  }\n}\n"
  }
};
})();

(node as any).hash = "e9340d654c569feec4f4cf6838b68485";

export default node;
