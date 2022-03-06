/**
 * @generated SignedSource<<835dd54a7b8c4c1c5c8e4208819c0ebe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getTheProblemQuery$variables = {
  id: any;
  companyProfileId: any;
};
export type getTheProblemQueryVariables = getTheProblemQuery$variables;
export type getTheProblemQuery$data = {
  readonly getTheProblem: {
    readonly userId: any;
    readonly companyProfileId: any;
    readonly purposeDetails: string | null;
    readonly problemDetails: string | null;
  } | null;
};
export type getTheProblemQueryResponse = getTheProblemQuery$data;
export type getTheProblemQuery = {
  variables: getTheProblemQueryVariables;
  response: getTheProblemQuery$data;
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
    "concreteType": "GetTheProblemModel",
    "kind": "LinkedField",
    "name": "getTheProblem",
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
        "name": "purposeDetails",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "getTheProblemQuery",
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
    "name": "getTheProblemQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "104fd6b7f5d4d464b551e88336556d62",
    "id": null,
    "metadata": {},
    "name": "getTheProblemQuery",
    "operationKind": "query",
    "text": "query getTheProblemQuery(\n  $id: UUID!\n  $companyProfileId: UUID!\n) {\n  getTheProblem(command: {userId: $id, companyProfileId: $companyProfileId}) {\n    userId\n    companyProfileId\n    purposeDetails\n    problemDetails\n  }\n}\n"
  }
};
})();

(node as any).hash = "dc28bde48eb04d27a67b8de18656ee4d";

export default node;
