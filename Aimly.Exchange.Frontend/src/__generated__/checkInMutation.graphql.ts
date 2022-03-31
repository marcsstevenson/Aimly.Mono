/**
 * @generated SignedSource<<360254a6420db1c9f96b41e459b513ed>>
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
  readonly checkIn2: {
    readonly userId: any;
    readonly publicId: any;
    readonly fullName: string | null;
    readonly pictureUrl: string | null;
  } | null;
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
    "concreteType": "CheckInResponse",
    "kind": "LinkedField",
    "name": "checkIn2",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "publicId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fullName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "pictureUrl",
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
    "cacheID": "6fee723b8769d9b5285be5fb58a9d92c",
    "id": null,
    "metadata": {},
    "name": "checkInMutation",
    "operationKind": "mutation",
    "text": "mutation checkInMutation(\n  $input: AuthProfileInput\n) {\n  checkIn2(input: $input) {\n    userId\n    publicId\n    fullName\n    pictureUrl\n  }\n}\n"
  }
};
})();

(node as any).hash = "8c69709ed5fe54f43d6a793f3d4e4f8e";

export default node;
