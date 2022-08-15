/**
 * @generated SignedSource<<c75533feedc6e708cd6ca148db490c6d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileTypeOption = "PERSONAL" | "COMPANY" | "MENTOR" | "EXPERT" | "%future added value";
export type getViewTenantCompanyProfileQuery$variables = {};
export type getViewTenantCompanyProfileQueryVariables = getViewTenantCompanyProfileQuery$variables;
export type getViewTenantCompanyProfileQuery$data = {
  readonly getViewTenantCompanyProfile: {
    readonly id: string | null;
    readonly listOnMarket: boolean;
    readonly isUsersProfile: boolean;
    readonly userCanAccessProfile: boolean;
    readonly companyProfileId: any;
    readonly companyName: string | null;
    readonly profilePictureUrl: string | null;
    readonly website: string | null;
    readonly addressCity: string | null;
    readonly addressRegion: string | null;
    readonly addressCountry: string | null;
    readonly industries: ReadonlyArray<string | null> | null;
    readonly problemDetails: string | null;
    readonly solutionDescription: string | null;
    readonly associatedProfiles: ReadonlyArray<{
      readonly id: any;
      readonly profileId: any;
      readonly name: string | null;
      readonly description: string | null;
      readonly profilePictureUrl: string | null;
      readonly type: ProfileTypeOption;
    } | null> | null;
  } | null;
};
export type getViewTenantCompanyProfileQueryResponse = getViewTenantCompanyProfileQuery$data;
export type getViewTenantCompanyProfileQuery = {
  variables: getViewTenantCompanyProfileQueryVariables;
  response: getViewTenantCompanyProfileQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "profilePictureUrl",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ViewCompanyProfileModel",
    "kind": "LinkedField",
    "name": "getViewTenantCompanyProfile",
    "plural": false,
    "selections": [
      (v0/*: any*/),
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
      (v1/*: any*/),
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
          (v0/*: any*/),
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
          (v1/*: any*/),
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getViewTenantCompanyProfileQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getViewTenantCompanyProfileQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "25803ce42651c9dbd8af859b60133b53",
    "id": null,
    "metadata": {},
    "name": "getViewTenantCompanyProfileQuery",
    "operationKind": "query",
    "text": "query getViewTenantCompanyProfileQuery {\n  getViewTenantCompanyProfile {\n    id\n    listOnMarket\n    isUsersProfile\n    userCanAccessProfile\n    companyProfileId\n    companyName\n    profilePictureUrl\n    website\n    addressCity\n    addressRegion\n    addressCountry\n    industries\n    problemDetails\n    solutionDescription\n    associatedProfiles {\n      id\n      profileId\n      name\n      description\n      profilePictureUrl\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "db3c617290999d5902cb66af3d5e65b2";

export default node;
