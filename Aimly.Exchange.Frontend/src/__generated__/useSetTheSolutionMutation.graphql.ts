/**
 * @generated SignedSource<<fba636cefa298220e0be521facaca79b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetTheSolutionCommandInput = {
  getTheSolutionModel?: GetTheSolutionModelInput | null | undefined;
};
export type GetTheSolutionModelInput = {
  businessModel?: string | null | undefined;
  companyProfileId: any;
  competition?: string | null | undefined;
  currentAnnualRevenue?: string | null | undefined;
  externalFunding?: string | null | undefined;
  founders?: string | null | undefined;
  positionVsCompetition?: string | null | undefined;
  solutionDescription?: string | null | undefined;
  solutionNovelty?: string | null | undefined;
  stateOfValidation?: string | null | undefined;
  traction?: string | null | undefined;
  userId: any;
};
export type useSetTheSolutionMutation$variables = {
  input: SetTheSolutionCommandInput;
};
export type useSetTheSolutionMutation$data = {
  readonly setTheSolution: {
    readonly updatedCompanyProfileId: any;
  } | null | undefined;
};
export type useSetTheSolutionMutation = {
  response: useSetTheSolutionMutation$data;
  variables: useSetTheSolutionMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SetTheSolutionResponse",
    "kind": "LinkedField",
    "name": "setTheSolution",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedCompanyProfileId",
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
    "name": "useSetTheSolutionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSetTheSolutionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "79d5c6f951bd7ee7f4f738e37956b625",
    "id": null,
    "metadata": {},
    "name": "useSetTheSolutionMutation",
    "operationKind": "mutation",
    "text": "mutation useSetTheSolutionMutation(\n  $input: SetTheSolutionCommandInput!\n) {\n  setTheSolution(input: $input) {\n    updatedCompanyProfileId\n  }\n}\n"
  }
};
})();

(node as any).hash = "fe314c86469a4fdf8a54fbcf4cda351e";

export default node;
