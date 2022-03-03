/**
 * @generated SignedSource<<98005e515fd57e3506e1db2bb46fbabd>>
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
    readonly addressCity: string | null;
    readonly addressRegion: string | null;
    readonly addressCountry: string | null;
    readonly industries: ReadonlyArray<string | null> | null;
    readonly problemDetails: string | null;
    readonly solutionDescription: string | null;
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
    "cacheID": "50eec290f64119e5e6d6052447a6dc67",
    "id": null,
    "metadata": {},
    "name": "getViewCompanyProfileQuery",
    "operationKind": "query",
    "text": "query getViewCompanyProfileQuery(\n  $companyProfileId: UUID!\n) {\n  getViewCompanyProfile(companyProfileId: $companyProfileId) {\n    id\n    companyProfileId\n    companyName\n    profilePictureUrl\n    website\n    addressCity\n    addressRegion\n    addressCountry\n    industries\n    problemDetails\n    solutionDescription\n  }\n}\n"
  }
};
})();

(node as any).hash = "28e920ccea80f2eb4ad6afeda5c671d0";

export default node;
