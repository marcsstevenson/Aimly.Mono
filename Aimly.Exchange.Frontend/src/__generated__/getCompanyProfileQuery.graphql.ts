/**
 * @generated SignedSource<<29c40d8369ec1bef50bb2c00e0bc58ec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getCompanyProfileQuery$variables = {
  userId: any;
  companyProfileId: any;
};
export type getCompanyProfileQueryVariables = getCompanyProfileQuery$variables;
export type getCompanyProfileQuery$data = {
  readonly getCompanyProfile: {
    readonly id: any | null;
    readonly companyName: string;
    readonly listOnMarket: boolean;
    readonly profilePictureUrl: string | null;
    readonly type: string | null;
    readonly website: string | null;
    readonly numberOfFounders: number | null;
    readonly industries: ReadonlyArray<string | null> | null;
    readonly floor: string | null;
    readonly streetNumber: string | null;
    readonly streetName: string | null;
    readonly addressLocality: string | null;
    readonly addressCity: string | null;
    readonly addressRegion: string | null;
    readonly addressCountry: string | null;
    readonly postalCode: string | null;
    readonly postOfficeBoxNumber: string | null;
    readonly problemDetails: string | null;
    readonly solutionDescription: string | null;
  } | null;
};
export type getCompanyProfileQueryResponse = getCompanyProfileQuery$data;
export type getCompanyProfileQuery = {
  variables: getCompanyProfileQueryVariables;
  response: getCompanyProfileQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "companyProfileId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v2 = [
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
    "concreteType": "GetCompanyProfileModel",
    "kind": "LinkedField",
    "name": "getCompanyProfile",
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
        "name": "companyName",
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
        "name": "profilePictureUrl",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
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
        "name": "numberOfFounders",
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
        "name": "floor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "streetNumber",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "streetName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "addressLocality",
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
        "name": "postalCode",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "postOfficeBoxNumber",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "getCompanyProfileQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "getCompanyProfileQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "94d54140b016778484fc24884d91f7ae",
    "id": null,
    "metadata": {},
    "name": "getCompanyProfileQuery",
    "operationKind": "query",
    "text": "query getCompanyProfileQuery(\n  $userId: UUID!\n  $companyProfileId: UUID!\n) {\n  getCompanyProfile(userId: $userId, companyProfileId: $companyProfileId) {\n    id\n    companyName\n    listOnMarket\n    profilePictureUrl\n    type\n    website\n    numberOfFounders\n    industries\n    floor\n    streetNumber\n    streetName\n    addressLocality\n    addressCity\n    addressRegion\n    addressCountry\n    postalCode\n    postOfficeBoxNumber\n    problemDetails\n    solutionDescription\n  }\n}\n"
  }
};
})();

(node as any).hash = "842e448071de467efc170f9713c061b4";

export default node;
