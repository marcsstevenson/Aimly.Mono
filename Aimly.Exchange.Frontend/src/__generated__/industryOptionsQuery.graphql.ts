/**
 * @generated SignedSource<<4ea43b8369e166f0acc86dc1ff7966f5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type industryOptionsQuery$variables = {
  nameStartingWith?: string | null | undefined;
  tenantId?: any | null | undefined;
};
export type industryOptionsQuery$data = {
  readonly industryOptions: ReadonlyArray<string | null | undefined> | null | undefined;
};
export type industryOptionsQuery = {
  response: industryOptionsQuery$data;
  variables: industryOptionsQuery$variables;
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
    "name": "industryOptions",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "industryOptionsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "industryOptionsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6e9a4f3bf3d4b56f9de13d8762e9072a",
    "id": null,
    "metadata": {},
    "name": "industryOptionsQuery",
    "operationKind": "query",
    "text": "query industryOptionsQuery(\n  $nameStartingWith: String\n  $tenantId: UUID\n) {\n  industryOptions(nameStartingWith: $nameStartingWith, tenantId: $tenantId)\n}\n"
  }
};
})();

(node as any).hash = "440a4385431043e4ae425753de987190";

export default node;
