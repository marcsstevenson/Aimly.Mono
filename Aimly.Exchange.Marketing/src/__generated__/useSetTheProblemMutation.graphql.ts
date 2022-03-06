/**
 * @generated SignedSource<<9f448ac5ae83d243f90686d1514e79f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetTheProblemCommandInput = {
  getTheProblemModel?: GetTheProblemModelInput | null;
};
export type GetTheProblemModelInput = {
  userId: any;
  companyProfileId: any;
  purposeDetails?: string | null;
  problemDetails?: string | null;
};
export type useSetTheProblemMutation$variables = {
  input: SetTheProblemCommandInput;
};
export type useSetTheProblemMutationVariables = useSetTheProblemMutation$variables;
export type useSetTheProblemMutation$data = {
  readonly setTheProblem: {
    readonly updatedCompanyProfileId: any;
  } | null;
};
export type useSetTheProblemMutationResponse = useSetTheProblemMutation$data;
export type useSetTheProblemMutation = {
  variables: useSetTheProblemMutationVariables;
  response: useSetTheProblemMutation$data;
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
    "concreteType": "SetTheProblemResponse",
    "kind": "LinkedField",
    "name": "setTheProblem",
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
    "name": "useSetTheProblemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSetTheProblemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a58f7ecaddf9d69ad438ad021ed23998",
    "id": null,
    "metadata": {},
    "name": "useSetTheProblemMutation",
    "operationKind": "mutation",
    "text": "mutation useSetTheProblemMutation(\n  $input: SetTheProblemCommandInput!\n) {\n  setTheProblem(input: $input) {\n    updatedCompanyProfileId\n  }\n}\n"
  }
};
})();

(node as any).hash = "b4f8e551f4d3268d0b589cea5d288463";

export default node;
