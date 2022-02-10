/**
 * @generated SignedSource<<d3d4dd53e1a1117dbd3b3fe316222ebb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetPotentialCommandInput = {
  getPotentialModel?: GetPotentialModelInput | null;
};
export type GetPotentialModelInput = {
  userId: any;
  companyProfileId: any;
  value?: string | null;
  potentialSize?: string | null;
  potentialValue?: string | null;
};
export type useSetPotentialMutation$variables = {
  input: SetPotentialCommandInput;
};
export type useSetPotentialMutationVariables = useSetPotentialMutation$variables;
export type useSetPotentialMutation$data = {
  readonly setPotential: {
    readonly updatedCompanyProfileId: any;
  } | null;
};
export type useSetPotentialMutationResponse = useSetPotentialMutation$data;
export type useSetPotentialMutation = {
  variables: useSetPotentialMutationVariables;
  response: useSetPotentialMutation$data;
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
