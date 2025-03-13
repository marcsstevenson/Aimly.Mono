/**
 * @generated SignedSource<<91dabe4e7f2f12761d0a57554d03298c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserLoginModelInput = {
  fullName: string;
  pictureUrl: string;
  publicId: any;
};
export type useLoginToMessagingMutation$variables = {
  model: UserLoginModelInput;
  userId: any;
};
export type useLoginToMessagingMutation$data = {
  readonly loginToMessaging: {
    readonly accessToken: string | null | undefined;
    readonly accessTokenExpiry: any;
  } | null | undefined;
};
export type useLoginToMessagingMutation = {
  response: useLoginToMessagingMutation$data;
  variables: useLoginToMessagingMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "model"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "model",
        "variableName": "model"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "UserLoginResponse",
    "kind": "LinkedField",
    "name": "loginToMessaging",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "accessToken",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "accessTokenExpiry",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useLoginToMessagingMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "useLoginToMessagingMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "670ecaf133c260c75944f75b576382b3",
    "id": null,
    "metadata": {},
    "name": "useLoginToMessagingMutation",
    "operationKind": "mutation",
    "text": "mutation useLoginToMessagingMutation(\n  $userId: UUID!\n  $model: UserLoginModelInput!\n) {\n  loginToMessaging(userId: $userId, model: $model) {\n    accessToken\n    accessTokenExpiry\n  }\n}\n"
  }
};
})();

(node as any).hash = "4e988f7a5df07ebcddae393aff119aa4";

export default node;
