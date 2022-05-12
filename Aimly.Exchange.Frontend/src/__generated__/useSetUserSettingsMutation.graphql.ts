/**
 * @generated SignedSource<<302db0df9488d1730c79fd5135c009b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetUserSettingsCommandInput = {
  userId: any;
  profilePictureUrl?: string | null;
  email?: string | null;
};
export type useSetUserSettingsMutation$variables = {
  command: SetUserSettingsCommandInput;
};
export type useSetUserSettingsMutationVariables = useSetUserSettingsMutation$variables;
export type useSetUserSettingsMutation$data = {
  readonly setUserSettings: {
    readonly userPictureUrlUpdated: boolean;
    readonly userEmailUpdated: boolean;
    readonly personalProfileUpdated: boolean;
  } | null;
};
export type useSetUserSettingsMutationResponse = useSetUserSettingsMutation$data;
export type useSetUserSettingsMutation = {
  variables: useSetUserSettingsMutationVariables;
  response: useSetUserSettingsMutation$data;
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
