/**
 * @generated SignedSource<<eb802c61d20b0239acd5eb9f24c9d42a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getCompanyProfileQuery$variables = {
  companyProfileId: any;
  userId: any;
};
export type getCompanyProfileQuery$data = {
  readonly getCompanyProfile: {
    readonly addressCity: string | null | undefined;
    readonly addressCountry: string | null | undefined;
    readonly addressLocality: string | null | undefined;
    readonly addressRegion: string | null | undefined;
    readonly companyEmail: string | null | undefined;
    readonly companyName: string;
    readonly companyPhoneNumber: string | null | undefined;
    readonly floor: string | null | undefined;
    readonly id: any | null | undefined;
    readonly industries: ReadonlyArray<string | null | undefined> | null | undefined;
    readonly listOnMarket: boolean;
    readonly numberOfFounders: number | null | undefined;
    readonly postOfficeBoxNumber: string | null | undefined;
    readonly postalCode: string | null | undefined;
    readonly problemDetails: string | null | undefined;
    readonly profilePictureUrl: string | null | undefined;
    readonly solutionDescription: string | null | undefined;
    readonly streetName: string | null | undefined;
    readonly streetNumber: string | null | undefined;
    readonly type: string | null | undefined;
    readonly website: string | null | undefined;
  } | null | undefined;
};
export type getCompanyProfileQuery = {
  response: getCompanyProfileQuery$data;
  variables: getCompanyProfileQuery$variables;
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
        "name": "companyPhoneNumber",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "companyEmail",
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
    "cacheID": "2486b47cd5dbe282a824a3058fbc08b3",
    "id": null,
    "metadata": {},
    "name": "getCompanyProfileQuery",
    "operationKind": "query",
    "text": "query getCompanyProfileQuery(\n  $userId: UUID!\n  $companyProfileId: UUID!\n) {\n  getCompanyProfile(userId: $userId, companyProfileId: $companyProfileId) {\n    id\n    companyName\n    companyPhoneNumber\n    companyEmail\n    listOnMarket\n    profilePictureUrl\n    type\n    website\n    numberOfFounders\n    industries\n    floor\n    streetNumber\n    streetName\n    addressLocality\n    addressCity\n    addressRegion\n    addressCountry\n    postalCode\n    postOfficeBoxNumber\n    problemDetails\n    solutionDescription\n  }\n}\n"
  }
};
})();

(node as any).hash = "a6c5e1bf764af2bb51d5fcf3626b7578";

export default node;
