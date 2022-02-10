/**
 * @generated SignedSource<<1d43d40f6dd8ae049bb1a679bcfb71ef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getPotentialQuery$variables = {
  id: any;
  companyProfileId: any;
};
export type getPotentialQueryVariables = getPotentialQuery$variables;
export type getPotentialQuery$data = {
  readonly getPotential: {
    readonly userId: any;
    readonly companyProfileId: any;
    readonly value: string | null;
    readonly potentialSize: string | null;
    readonly potentialValue: string | null;
  } | null;
};
export type getPotentialQueryResponse = getPotentialQuery$data;
export type getPotentialQuery = {
  variables: getPotentialQueryVariables;
  response: getPotentialQuery$data;
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
    "concreteType": "GetPotentialModel",
    "kind": "LinkedField",
    "name": "getPotential",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "getPotentialQuery",
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
    "name": "getPotentialQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "af565eb33e63c419448b9a5f3fcecfb3",
    "id": null,
    "metadata": {},
    "name": "getPotentialQuery",
    "operationKind": "query",
    "text": "query getPotentialQuery(\n  $id: UUID!\n  $companyProfileId: UUID!\n) {\n  getPotential(command: {userId: $id, companyProfileId: $companyProfileId}) {\n    userId\n    companyProfileId\n    value\n    potentialSize\n    potentialValue\n  }\n}\n"
  }
};
})();

(node as any).hash = "911819fddb5a08f1c04fec1d8a9ad36c";

export default node;
