/**
 * @generated SignedSource<<eb6499526dd9d39f1edd9246d254f5e1>>
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
export type viewFullCompanyProfileQuery$data = {
  readonly viewFullCompanyProfile: {
    readonly addressCity: string | null | undefined;
    readonly addressCountry: string | null | undefined;
    readonly addressLocality: string | null | undefined;
    readonly addressRegion: string | null | undefined;
    readonly businessModel: string | null | undefined;
    readonly companyEmail: string | null | undefined;
    readonly companyName: string | null | undefined;
    readonly companyPhoneNumber: string | null | undefined;
    readonly companyProfileId: any;
    readonly competition: string | null | undefined;
    readonly currentAnnualRevenue: string | null | undefined;
    readonly externalFunding: string | null | undefined;
    readonly floor: string | null | undefined;
    readonly founders: string | null | undefined;
    readonly id: string | null | undefined;
    readonly industries: ReadonlyArray<string | null | undefined> | null | undefined;
    readonly listOnMarket: boolean;
    readonly numberOfFounders: number | null | undefined;
    readonly positionVsCompetition: string | null | undefined;
    readonly postOfficeBoxNumber: string | null | undefined;
    readonly postalCode: string | null | undefined;
    readonly potentialSize: string | null | undefined;
    readonly potentialValue: string | null | undefined;
    readonly problemDetails: string | null | undefined;
    readonly profilePictureUrl: string | null | undefined;
    readonly purposeDetails: string | null | undefined;
    readonly solutionDescription: string | null | undefined;
    readonly solutionNovelty: string | null | undefined;
    readonly stateOfValidation: string | null | undefined;
    readonly streetName: string | null | undefined;
    readonly streetNumber: string | null | undefined;
    readonly traction: string | null | undefined;
    readonly type: string | null | undefined;
    readonly value: string | null | undefined;
    readonly website: string | null | undefined;
  } | null | undefined;
};
export type viewFullCompanyProfileQuery = {
  response: viewFullCompanyProfileQuery$data;
  variables: viewFullCompanyProfileQuery$variables;
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
    "cacheID": "a75b3c325ba691e9e460c3e475a7d55c",
    "id": null,
    "metadata": {},
    "name": "viewFullCompanyProfileQuery",
    "operationKind": "query",
    "text": "query viewFullCompanyProfileQuery(\n  $companyProfileId: UUID!\n  $userId: UUID!\n) {\n  viewFullCompanyProfile(companyProfileId: $companyProfileId, userId: $userId) {\n    id\n    companyProfileId\n    profilePictureUrl\n    industries\n    companyName\n    companyPhoneNumber\n    companyEmail\n    type\n    website\n    numberOfFounders\n    floor\n    streetNumber\n    streetName\n    addressLocality\n    addressCity\n    addressRegion\n    addressCountry\n    postalCode\n    postOfficeBoxNumber\n    listOnMarket\n    purposeDetails\n    problemDetails\n    solutionNovelty\n    solutionDescription\n    stateOfValidation\n    competition\n    positionVsCompetition\n    businessModel\n    traction\n    founders\n    currentAnnualRevenue\n    externalFunding\n    value\n    potentialSize\n    potentialValue\n  }\n}\n"
  }
};
})();

(node as any).hash = "9d983314fbd415ddef805a507b298ccf";

export default node;
