/**
 * @generated SignedSource<<457a9c50c67d14cc85d4dd7975033ae9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileTypeOption = "COMPANY" | "EXPERT" | "MENTOR" | "PERSONAL" | "%future added value";
export type getViewTenantCompanyProfileQuery$variables = Record<PropertyKey, never>;
export type getViewTenantCompanyProfileQuery$data = {
  readonly getViewTenantCompanyProfile: {
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
export type getViewTenantCompanyProfileQuery = {
  response: getViewTenantCompanyProfileQuery$data;
  variables: getViewTenantCompanyProfileQuery$variables;
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
