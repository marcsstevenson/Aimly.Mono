/**
 * @generated SignedSource<<a5ace3b68e5ab094f1629ecfece43094>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type metaDataOptionsQuery$variables = {
  nameStartingWith?: string | null | undefined;
  tenantId?: any | null | undefined;
  type: string;
};
export type metaDataOptionsQuery$data = {
  readonly metaDataOptions: ReadonlyArray<string | null | undefined> | null | undefined;
};
export type metaDataOptionsQuery = {
  response: metaDataOptionsQuery$data;
  variables: metaDataOptionsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "nameStartingWith"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "tenantId"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "type"
},
v3 = [
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
      },
      {
        "kind": "Variable",
        "name": "type",
        "variableName": "type"
      }
    ],
    "kind": "ScalarField",
    "name": "metaDataOptions",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "metaDataOptionsQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "metaDataOptionsQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "dd1779d51696db2ee0129d6ccfb0fc13",
    "id": null,
    "metadata": {},
    "name": "metaDataOptionsQuery",
    "operationKind": "query",
    "text": "query metaDataOptionsQuery(\n  $nameStartingWith: String\n  $type: String!\n  $tenantId: UUID\n) {\n  metaDataOptions(nameStartingWith: $nameStartingWith, type: $type, tenantId: $tenantId)\n}\n"
  }
};
})();

(node as any).hash = "189e389a5881e5194be39ed8cf7fdb2d";

export default node;
