/**
 * @generated SignedSource<<7ae0460efc3e82abaa0927bbd0407a47>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetPotentialCommandInput = {
  getPotentialModel?: GetPotentialModelInput | null | undefined;
};
export type GetPotentialModelInput = {
  companyProfileId: any;
  potentialSize?: string | null | undefined;
  potentialValue?: string | null | undefined;
  userId: any;
  value?: string | null | undefined;
};
export type useSetPotentialMutation$variables = {
  input: SetPotentialCommandInput;
};
export type useSetPotentialMutation$data = {
  readonly setPotential: {
    readonly updatedCompanyProfileId: any;
  } | null | undefined;
};
export type useSetPotentialMutation = {
  response: useSetPotentialMutation$data;
  variables: useSetPotentialMutation$variables;
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
    "concreteType": "SetPotentialResponse",
    "kind": "LinkedField",
    "name": "setPotential",
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
    "name": "useSetPotentialMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSetPotentialMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8350c327b8bfc21f14a0897d2067fcde",
    "id": null,
    "metadata": {},
    "name": "useSetPotentialMutation",
    "operationKind": "mutation",
    "text": "mutation useSetPotentialMutation(\n  $input: SetPotentialCommandInput!\n) {\n  setPotential(input: $input) {\n    updatedCompanyProfileId\n  }\n}\n"
  }
};
})();

(node as any).hash = "361ce3b4e10bf3bb711982df3d892c24";

export default node;
