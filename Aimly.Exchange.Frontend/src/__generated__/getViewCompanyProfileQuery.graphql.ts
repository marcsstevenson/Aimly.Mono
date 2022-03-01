/**
 * @generated SignedSource<<9170b3199f7e5c800830231cb4f7fe78>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getViewCompanyProfileQuery$variables = {
  companyProfileId: any;
};
export type getViewCompanyProfileQueryVariables = getViewCompanyProfileQuery$variables;
export type getViewCompanyProfileQuery$data = {
  readonly getViewCompanyProfile: {
    readonly id: string | null;
    readonly companyProfileId: any;
    readonly companyName: string | null;
    readonly profilePictureUrl: string | null;
    readonly website: string | null;
    readonly addressRegion: string | null;
    readonly addressCountry: string | null;
    readonly industries: ReadonlyArray<string | null> | null;
    readonly problemDetails: string | null;
  } | null;
};
export type getViewCompanyProfileQueryResponse = getViewCompanyProfileQuery$data;
export type getViewCompanyProfileQuery = {
  variables: getViewCompanyProfileQueryVariables;
  response: getViewCompanyProfileQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "companyProfileId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "companyProfileId",
        "variableName": "companyProfileId"
      }
    ],
    "concreteType": "ViewCompanyProfileModel",
    "kind": "LinkedField",
    "name": "getViewCompanyProfile",
    "plural": false,
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
        "name": "website",
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
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getViewCompanyProfileQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "92fa3cef89aa0d120e4bf025206f21a5",
    "id": null,
    "metadata": {},
    "name": "getViewCompanyProfileQuery",
    "operationKind": "query",
    "text": "query getViewCompanyProfileQuery(\n  $companyProfileId: UUID!\n) {\n  getViewCompanyProfile(companyProfileId: $companyProfileId) {\n    id\n    companyProfileId\n    companyName\n    profilePictureUrl\n    website\n    addressRegion\n    addressCountry\n    industries\n    problemDetails\n  }\n}\n"
  }
};
})();

(node as any).hash = "2817328db9d927ba99d22170a56cd6ef";

export default node;
