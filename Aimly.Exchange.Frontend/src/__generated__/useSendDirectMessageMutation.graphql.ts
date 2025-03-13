/**
 * @generated SignedSource<<e9cebb511a4dbbb3d8b4fe2f0291107b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SendDirectMessageCommandInput = {
  fromUserId?: string | null | undefined;
  message?: string | null | undefined;
  toUserId?: string | null | undefined;
};
export type useSendDirectMessageMutation$variables = {
  command: SendDirectMessageCommandInput;
};
export type useSendDirectMessageMutation$data = {
  readonly sendDirectMessage: any;
};
export type useSendDirectMessageMutation = {
  response: useSendDirectMessageMutation$data;
  variables: useSendDirectMessageMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "command"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "command",
        "variableName": "command"
      }
    ],
    "kind": "ScalarField",
    "name": "sendDirectMessage",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useSendDirectMessageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSendDirectMessageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "817061c846296fe35b9ae9ed83059c24",
    "id": null,
    "metadata": {},
    "name": "useSendDirectMessageMutation",
    "operationKind": "mutation",
    "text": "mutation useSendDirectMessageMutation(\n  $command: SendDirectMessageCommandInput!\n) {\n  sendDirectMessage(command: $command)\n}\n"
  }
};
})();

(node as any).hash = "5f4fe22111cfa04029efec60b424d8f8";

export default node;
