/**
 * @generated SignedSource<<26ecd2b3fcc0f4276c69ac363f1cea9c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileTypeOption = "PERSONAL" | "COMPANY" | "MENTOR" | "EXPERT" | "%future added value";
export type getViewPersonalProfileQuery$variables = {
  personalProfileId: any;
  userId?: any | null;
};
export type getViewPersonalProfileQueryVariables = getViewPersonalProfileQuery$variables;
export type getViewPersonalProfileQuery$data = {
  readonly getViewPersonalProfile: {
    readonly id: string | null;
    readonly listOnMarket: boolean;
    readonly isUsersProfile: boolean;
    readonly userCanAccessProfile: boolean;
    readonly personalProfileId: any;
    readonly userPublicId: any | null;
    readonly fullName: string | null;
    readonly profilePictureUrl: string | null;
    readonly linkedInProfile: string | null;
    readonly addressCity: string | null;
    readonly addressRegion: string | null;
    readonly addressCountry: string | null;
    readonly about: string | null;
    readonly industries: ReadonlyArray<string | null> | null;
    readonly skills: ReadonlyArray<string | null> | null;
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
    readonly associatedStartupProfiles: ReadonlyArray<{
      readonly id: any;
      readonly profileId: any;
      readonly name: string | null;
      readonly description: string | null;
      readonly profilePictureUrl: string | null;
      readonly type: ProfileTypeOption;
    } | null> | null;
    readonly associatedMentorProfiles: ReadonlyArray<{
      readonly id: any;
      readonly profileId: any;
      readonly name: string | null;
      readonly description: string | null;
      readonly profilePictureUrl: string | null;
      readonly type: ProfileTypeOption;
    } | null> | null;
    readonly associatedExpertProfiles: ReadonlyArray<{
      readonly id: any;
      readonly profileId: any;
      readonly name: string | null;
      readonly description: string | null;
      readonly profilePictureUrl: string | null;
      readonly type: ProfileTypeOption;
    } | null> | null;
  } | null;
};
export type getViewPersonalProfileQueryResponse = getViewPersonalProfileQuery$data;
export type getViewPersonalProfileQuery = {
  variables: getViewPersonalProfileQueryVariables;
  response: getViewPersonalProfileQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "personalProfileId"
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
  "name": "profilePictureUrl",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v4 = [
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
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
  (v3/*: any*/),
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "type",
    "storageKey": null
  }
],
v5 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "personalProfileId",
        "variableName": "personalProfileId"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "ViewPersonalProfileModel",
    "kind": "LinkedField",
    "name": "getViewPersonalProfile",
    "plural": false,
    "selections": [
      (v1/*: any*/),
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
        "name": "fullName",
        "storageKey": null
      },
      (v2/*: any*/),
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
          (v3/*: any*/),
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MarketSearchResult",
        "kind": "LinkedField",
        "name": "associatedStartupProfiles",
        "plural": true,
        "selections": (v4/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MarketSearchResult",
        "kind": "LinkedField",
        "name": "associatedMentorProfiles",
        "plural": true,
        "selections": (v4/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MarketSearchResult",
        "kind": "LinkedField",
        "name": "associatedExpertProfiles",
        "plural": true,
        "selections": (v4/*: any*/),
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
    "name": "getViewPersonalProfileQuery",
    "selections": (v5/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getViewPersonalProfileQuery",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "3e8d340bfe72e368f1173e9aa78ff260",
    "id": null,
    "metadata": {},
    "name": "getViewPersonalProfileQuery",
    "operationKind": "query",
    "text": "query getViewPersonalProfileQuery(\n  $personalProfileId: UUID!\n  $userId: UUID\n) {\n  getViewPersonalProfile(personalProfileId: $personalProfileId, userId: $userId) {\n    id\n    listOnMarket\n    isUsersProfile\n    userCanAccessProfile\n    personalProfileId\n    userPublicId\n    fullName\n    profilePictureUrl\n    linkedInProfile\n    addressCity\n    addressRegion\n    addressCountry\n    about\n    industries\n    skills\n    employmentExperience {\n      id\n      stickToTop\n      title\n      organisation\n      description\n      startMonth\n      startYear\n      endMonth\n      endYear\n    }\n    associatedStartupProfiles {\n      id\n      profileId\n      name\n      description\n      profilePictureUrl\n      type\n    }\n    associatedMentorProfiles {\n      id\n      profileId\n      name\n      description\n      profilePictureUrl\n      type\n    }\n    associatedExpertProfiles {\n      id\n      profileId\n      name\n      description\n      profilePictureUrl\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "aa817d79e637cda6d0307a216dde6c96";

export default node;
