/**
 * @generated SignedSource<<1066d2c79e3d7f5b4b12fb53291ca558>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileTypeOption = "COMPANY" | "EXPERT" | "MENTOR" | "PERSONAL" | "%future added value";
export type getViewCompanyProfileQuery$variables = {
  companyProfileId: any;
  userId?: any | null | undefined;
};
export type getViewCompanyProfileQuery$data = {
  readonly getViewCompanyProfile: {
    readonly addressCity: string | null | undefined;
    readonly addressCountry: string | null | undefined;
    readonly addressRegion: string | null | undefined;
    readonly associatedProfiles: ReadonlyArray<{
      readonly description: string | null | undefined;
      readonly id: any;
      readonly name: string | null | undefined;
      readonly profileId: any;
      readonly profilePictureUrl: string | null | undefined;
      readonly type: ProfileTypeOption;
    } | null | undefined> | null | undefined;
    readonly companyName: string | null | undefined;
    readonly companyProfileId: any;
    readonly id: string | null | undefined;
    readonly industries: ReadonlyArray<string | null | undefined> | null | undefined;
    readonly isUsersProfile: boolean;
    readonly listOnMarket: boolean;
    readonly problemDetails: string | null | undefined;
    readonly profilePictureUrl: string | null | undefined;
    readonly solutionDescription: string | null | undefined;
    readonly userCanAccessProfile: boolean;
    readonly website: string | null | undefined;
  } | null | undefined;
};
export type getViewCompanyProfileQuery = {
  response: getViewCompanyProfileQuery$data;
  variables: getViewCompanyProfileQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "companyProfileId"
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
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "companyProfileId",
        "variableName": "companyProfileId"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "ViewCompanyProfileModel",
    "kind": "LinkedField",
    "name": "getViewCompanyProfile",
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
        "name": "companyProfileId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "companyName",
        "storageKey": null
      },
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "website",
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
        "name": "industries",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "problemDetails",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "solutionDescription",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MarketSearchResult",
        "kind": "LinkedField",
        "name": "associatedProfiles",
        "plural": true,
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
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          (v2/*: any*/),
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "getViewCompanyProfileQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getViewCompanyProfileQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "bcd13e958c9f22f9823381af1427ab31",
    "id": null,
    "metadata": {},
    "name": "getViewCompanyProfileQuery",
    "operationKind": "query",
    "text": "query getViewCompanyProfileQuery(\n  $companyProfileId: UUID!\n  $userId: UUID\n) {\n  getViewCompanyProfile(companyProfileId: $companyProfileId, userId: $userId) {\n    id\n    listOnMarket\n    isUsersProfile\n    userCanAccessProfile\n    companyProfileId\n    companyName\n    profilePictureUrl\n    website\n    addressCity\n    addressRegion\n    addressCountry\n    industries\n    problemDetails\n    solutionDescription\n    associatedProfiles {\n      id\n      profileId\n      name\n      description\n      profilePictureUrl\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "caa51a14a9318fe28817fcd3d3876a79";

export default node;
