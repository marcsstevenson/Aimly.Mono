/**
 * @generated SignedSource<<7541ea182f7118689c8ef62b2d5912bf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AuthProfileInput = {
  email?: string | null | undefined;
  email_verified?: boolean | null | undefined;
  family_name?: string | null | undefined;
  given_name?: string | null | undefined;
  locale?: string | null | undefined;
  name?: string | null | undefined;
  nickname?: string | null | undefined;
  picture?: string | null | undefined;
  sub?: string | null | undefined;
  updated_at?: any | null | undefined;
};
export type checkInMutation$variables = {
  input?: AuthProfileInput | null | undefined;
};
export type checkInMutation$data = {
  readonly checkIn2: {
    readonly fullName: string | null | undefined;
    readonly pictureUrl: string | null | undefined;
    readonly publicId: any;
    readonly userId: any;
  } | null | undefined;
};
export type checkInMutation = {
  response: checkInMutation$data;
  variables: checkInMutation$variables;
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
