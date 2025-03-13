/**
 * @generated SignedSource<<524e877f430281e07dd16310a56e7d3b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetUserSettingsCommandInput = {
  email?: string | null | undefined;
  profilePictureUrl?: string | null | undefined;
  userId: any;
};
export type useSetUserSettingsMutation$variables = {
  command: SetUserSettingsCommandInput;
};
export type useSetUserSettingsMutation$data = {
  readonly setUserSettings: {
    readonly personalProfileUpdated: boolean;
    readonly userEmailUpdated: boolean;
    readonly userPictureUrlUpdated: boolean;
  } | null | undefined;
};
export type useSetUserSettingsMutation = {
  response: useSetUserSettingsMutation$data;
  variables: useSetUserSettingsMutation$variables;
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
    "concreteType": "SetUserSettingsResponse",
    "kind": "LinkedField",
    "name": "setUserSettings",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userPictureUrlUpdated",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userEmailUpdated",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "personalProfileUpdated",
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
    "name": "useSetUserSettingsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSetUserSettingsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1decaed9e6488e81163c2d1bb8f2c987",
    "id": null,
    "metadata": {},
    "name": "useSetUserSettingsMutation",
    "operationKind": "mutation",
    "text": "mutation useSetUserSettingsMutation(\n  $command: SetUserSettingsCommandInput!\n) {\n  setUserSettings(command: $command) {\n    userPictureUrlUpdated\n    userEmailUpdated\n    personalProfileUpdated\n  }\n}\n"
  }
};
})();

(node as any).hash = "354dafbecbd195cf10913b3e67693b0d";

export default node;
