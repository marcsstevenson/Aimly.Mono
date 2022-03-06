/**
 * @generated SignedSource<<77fd99131f36d92d8231079860202030>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetTheSolutionCommandInput = {
  getTheSolutionModel?: GetTheSolutionModelInput | null;
};
export type GetTheSolutionModelInput = {
  userId: any;
  companyProfileId: any;
  solutionNovelty?: string | null;
  solutionDescription?: string | null;
  stateOfValidation?: string | null;
  competition?: string | null;
  positionVsCompetition?: string | null;
  businessModel?: string | null;
  traction?: string | null;
  founders?: string | null;
  currentAnnualRevenue?: string | null;
  externalFunding?: string | null;
};
export type useSetTheSolutionMutation$variables = {
  input: SetTheSolutionCommandInput;
};
export type useSetTheSolutionMutationVariables = useSetTheSolutionMutation$variables;
export type useSetTheSolutionMutation$data = {
  readonly setTheSolution: {
    readonly updatedCompanyProfileId: any;
  } | null;
};
export type useSetTheSolutionMutationResponse = useSetTheSolutionMutation$data;
export type useSetTheSolutionMutation = {
  variables: useSetTheSolutionMutationVariables;
  response: useSetTheSolutionMutation$data;
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
