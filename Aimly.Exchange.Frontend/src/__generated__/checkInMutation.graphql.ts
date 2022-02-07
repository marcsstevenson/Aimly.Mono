/**
 * @generated SignedSource<<89fa238714b17df07ec6e1bb33df3531>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AuthProfileInput = {
  given_name?: string | null;
  family_name?: string | null;
  nickname?: string | null;
  name?: string | null;
  picture?: string | null;
  locale?: string | null;
  updated_at?: any | null;
  email?: string | null;
  email_verified?: boolean | null;
  sub?: string | null;
};
export type checkInMutation$variables = {
  input?: AuthProfileInput | null;
};
export type checkInMutationVariables = checkInMutation$variables;
export type checkInMutation$data = {
  readonly checkIn: any;
};
export type checkInMutationResponse = checkInMutation$data;
export type checkInMutation = {
  variables: checkInMutationVariables;
  response: checkInMutation$data;
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
    "kind": "ScalarField",
    "name": "checkIn",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "checkInMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "checkInMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "96bd0cd783620afd9fab1424eac37e34",
    "id": null,
    "metadata": {},
    "name": "checkInMutation",
    "operationKind": "mutation",
    "text": "mutation checkInMutation(\n  $input: AuthProfileInput\n) {\n  checkIn(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "ead6c0fb18dbe8c2f3ae4cbcdadbf14d";

export default node;
