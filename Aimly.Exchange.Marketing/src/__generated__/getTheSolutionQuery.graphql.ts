/**
 * @generated SignedSource<<d1c1b65644bb27e2f9ee76b0e376be08>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getTheSolutionQuery$variables = {
  id: any;
  companyProfileId: any;
};
export type getTheSolutionQueryVariables = getTheSolutionQuery$variables;
export type getTheSolutionQuery$data = {
  readonly getTheSolution: {
    readonly userId: any;
    readonly companyProfileId: any;
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
  } | null;
};
export type getTheSolutionQueryResponse = getTheSolutionQuery$data;
export type getTheSolutionQuery = {
  variables: getTheSolutionQueryVariables;
  response: getTheSolutionQuery$data;
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
  "name": "id"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "companyProfileId",
            "variableName": "companyProfileId"
          },
          {
            "kind": "Variable",
            "name": "userId",
            "variableName": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "command"
      }
    ],
    "concreteType": "GetTheSolutionModel",
    "kind": "LinkedField",
    "name": "getTheSolution",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userId",
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
    "name": "getTheSolutionQuery",
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
    "name": "getTheSolutionQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "fa32fcb2562c83b50972d7bb01f69069",
    "id": null,
    "metadata": {},
    "name": "getTheSolutionQuery",
    "operationKind": "query",
    "text": "query getTheSolutionQuery(\n  $id: UUID!\n  $companyProfileId: UUID!\n) {\n  getTheSolution(command: {userId: $id, companyProfileId: $companyProfileId}) {\n    userId\n    companyProfileId\n    solutionNovelty\n    solutionDescription\n    stateOfValidation\n    competition\n    positionVsCompetition\n    businessModel\n    traction\n    founders\n    currentAnnualRevenue\n    externalFunding\n  }\n}\n"
  }
};
})();

(node as any).hash = "c469535ff8ccb2c09563f408ee1acc95";

export default node;
