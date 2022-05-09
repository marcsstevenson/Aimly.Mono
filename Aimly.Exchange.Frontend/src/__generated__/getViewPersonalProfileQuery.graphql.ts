/**
 * @generated SignedSource<<1aa11b11fee94547da3776b54b5c90eb>>
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
};
export type getViewPersonalProfileQueryVariables = getViewPersonalProfileQuery$variables;
export type getViewPersonalProfileQuery$data = {
  readonly getViewPersonalProfile: {
    readonly id: string | null;
    readonly personalProfileId: any;
    readonly userPublicId: any | null;
    readonly fullName: string | null;
    readonly profilePictureUrl: string | null;
    readonly linkedInProfile: string | null;
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
    "cacheID": "95f6607f6b551efe4b1a8640dfae06af",
    "id": null,
    "metadata": {},
    "name": "getViewPersonalProfileQuery",
    "operationKind": "query",
    "text": "query getViewPersonalProfileQuery(\n  $personalProfileId: UUID!\n) {\n  getViewPersonalProfile(personalProfileId: $personalProfileId) {\n    id\n    personalProfileId\n    userPublicId\n    fullName\n    profilePictureUrl\n    linkedInProfile\n    about\n    industries\n    skills\n    employmentExperience {\n      id\n      stickToTop\n      title\n      organisation\n      description\n      startMonth\n      startYear\n      endMonth\n      endYear\n    }\n    associatedStartupProfiles {\n      id\n      profileId\n      name\n      description\n      profilePictureUrl\n      type\n    }\n    associatedMentorProfiles {\n      id\n      profileId\n      name\n      description\n      profilePictureUrl\n      type\n    }\n    associatedExpertProfiles {\n      id\n      profileId\n      name\n      description\n      profilePictureUrl\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6722f789c6642b0bf5f891b9fdc85e1b";

export default node;
