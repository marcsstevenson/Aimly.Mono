/**
 * @generated SignedSource<<4dd0c8712c3a9c6085e643dabbc29ce4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type InviteCommandInput = {
  associationName?: string | null | undefined;
  inviteCode?: string | null | undefined;
  userId: any;
};
export type useAcceptInviteMutation$variables = {
  input: InviteCommandInput;
};
export type useAcceptInviteMutation$data = {
  readonly acceptInvite: {
    readonly companyName: string | null | undefined;
    readonly success: boolean;
  } | null | undefined;
};
export type useAcceptInviteMutation = {
  response: useAcceptInviteMutation$data;
  variables: useAcceptInviteMutation$variables;
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
    "concreteType": "InviteResponse",
    "kind": "LinkedField",
    "name": "acceptInvite",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "companyName",
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
    "name": "useAcceptInviteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useAcceptInviteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "89b02ef23956448352fa4250fafda53b",
    "id": null,
    "metadata": {},
    "name": "useAcceptInviteMutation",
    "operationKind": "mutation",
    "text": "mutation useAcceptInviteMutation(\n  $input: InviteCommandInput!\n) {\n  acceptInvite(input: $input) {\n    success\n    companyName\n  }\n}\n"
  }
};
})();

(node as any).hash = "0855076fe9d75b4d2ba420055f896634";

export default node;
