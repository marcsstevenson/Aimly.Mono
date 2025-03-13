/**
 * @generated SignedSource<<48a13b562fe7869554ed33c786ea9e69>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetTheProblemCommandInput = {
  getTheProblemModel?: GetTheProblemModelInput | null | undefined;
};
export type GetTheProblemModelInput = {
  companyProfileId: any;
  problemDetails?: string | null | undefined;
  purposeDetails?: string | null | undefined;
  userId: any;
};
export type useSetTheProblemMutation$variables = {
  input: SetTheProblemCommandInput;
};
export type useSetTheProblemMutation$data = {
  readonly setTheProblem: {
    readonly updatedCompanyProfileId: any;
  } | null | undefined;
};
export type useSetTheProblemMutation = {
  response: useSetTheProblemMutation$data;
  variables: useSetTheProblemMutation$variables;
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
