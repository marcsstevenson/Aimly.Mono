/**
 * @generated SignedSource<<61afcdcc2f8f51f16a1c3d375556ce8b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type skillOptionsQuery$variables = {
  nameStartingWith?: string | null | undefined;
  tenantId?: any | null | undefined;
};
export type skillOptionsQuery$data = {
  readonly skillOptions: ReadonlyArray<string | null | undefined> | null | undefined;
};
export type skillOptionsQuery = {
  response: skillOptionsQuery$data;
  variables: skillOptionsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "nameStartingWith"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "tenantId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "nameStartingWith",
        "variableName": "nameStartingWith"
      },
      {
        "kind": "Variable",
        "name": "tenantId",
        "variableName": "tenantId"
      }
    ],
    "kind": "ScalarField",
    "name": "skillOptions",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "skillOptionsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "skillOptionsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "db75fdc4f9f7517ecf6e749b4060e873",
    "id": null,
    "metadata": {},
    "name": "skillOptionsQuery",
    "operationKind": "query",
    "text": "query skillOptionsQuery(\n  $nameStartingWith: String\n  $tenantId: UUID\n) {\n  skillOptions(nameStartingWith: $nameStartingWith, tenantId: $tenantId)\n}\n"
  }
};
})();

(node as any).hash = "2cca923b733ba75b0fcdf3c432aeddb5";

export default node;
