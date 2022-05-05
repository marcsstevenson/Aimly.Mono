/**
 * @generated SignedSource<<d20e8a9e95455bdbc6ce278ab5295dec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type viewFullCompanyProfileQuery$variables = {
  companyProfileId: any;
  userId: any;
};
export type viewFullCompanyProfileQueryVariables = viewFullCompanyProfileQuery$variables;
export type viewFullCompanyProfileQuery$data = {
  readonly viewFullCompanyProfile: {
    readonly id: string | null;
    readonly companyProfileId: any;
    readonly profilePictureUrl: string | null;
    readonly industries: ReadonlyArray<string | null> | null;
    readonly companyName: string | null;
    readonly type: string | null;
    readonly website: string | null;
    readonly numberOfFounders: number | null;
    readonly floor: string | null;
    readonly streetNumber: string | null;
    readonly streetName: string | null;
    readonly addressLocality: string | null;
    readonly addressCity: string | null;
    readonly addressRegion: string | null;
    readonly addressCountry: string | null;
    readonly postalCode: string | null;
    readonly postOfficeBoxNumber: string | null;
    readonly listOnMarket: boolean;
    readonly purposeDetails: string | null;
    readonly problemDetails: string | null;
    readonly solutionNovelty: string | null;
    readonly solutionDescription: string | null;
    readonly stateOfValidation: string | null;
    readonly competition: string | null;
    readonly positionVsCompetition: string | null;
    readonly businessModel: string | null;
    readonly traction: string | null;
    readonly founders: string | null;
    readonly currentAnnualRevenue: string | null;
    readonly externalFunding: string | null;
    readonly value: string | null;
    readonly potentialSize: string | null;
    readonly potentialValue: string | null;
  } | null;
};
export type viewFullCompanyProfileQueryResponse = viewFullCompanyProfileQuery$data;
export type viewFullCompanyProfileQuery = {
  variables: viewFullCompanyProfileQueryVariables;
  response: viewFullCompanyProfileQuery$data;
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
v1 = [
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
    "concreteType": "ViewFullCompanyProfileModel",
    "kind": "LinkedField",
    "name": "viewFullCompanyProfile",
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
        "name": "profilePictureUrl",
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
        "name": "companyName",
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
        "name": "listOnMarket",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "purposeDetails",
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
        "name": "solutionNovelty",
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
        "kind": "ScalarField",
        "name": "stateOfValidation",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "competition",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "positionVsCompetition",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "businessModel",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "traction",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "founders",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "currentAnnualRevenue",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "externalFunding",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "value",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "potentialSize",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "potentialValue",
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
    "name": "viewFullCompanyProfileQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "viewFullCompanyProfileQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e0285f2545a67b545a76f9dacae1346d",
    "id": null,
    "metadata": {},
    "name": "viewFullCompanyProfileQuery",
    "operationKind": "query",
    "text": "query viewFullCompanyProfileQuery(\n  $companyProfileId: UUID!\n  $userId: UUID!\n) {\n  viewFullCompanyProfile(companyProfileId: $companyProfileId, userId: $userId) {\n    id\n    companyProfileId\n    profilePictureUrl\n    industries\n    companyName\n    type\n    website\n    numberOfFounders\n    floor\n    streetNumber\n    streetName\n    addressLocality\n    addressCity\n    addressRegion\n    addressCountry\n    postalCode\n    postOfficeBoxNumber\n    listOnMarket\n    purposeDetails\n    problemDetails\n    solutionNovelty\n    solutionDescription\n    stateOfValidation\n    competition\n    positionVsCompetition\n    businessModel\n    traction\n    founders\n    currentAnnualRevenue\n    externalFunding\n    value\n    potentialSize\n    potentialValue\n  }\n}\n"
  }
};
})();

(node as any).hash = "42d3f7d32ead713c95dceb520977dfb3";

export default node;
