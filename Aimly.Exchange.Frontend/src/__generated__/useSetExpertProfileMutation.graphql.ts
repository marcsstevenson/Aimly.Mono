/**
 * @generated SignedSource<<b9a95b8cf8a76736177927aa4c58c0ec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetExpertProfileCommandInput = {
  getExpertProfileModel?: GetExpertProfileModelInput | null | undefined;
};
export type GetExpertProfileModelInput = {
  about: string;
  id?: any | null | undefined;
  industries?: ReadonlyArray<string | null | undefined> | null | undefined;
  listOnMarket: boolean;
  name: string;
  skills?: ReadonlyArray<string | null | undefined> | null | undefined;
  userId: any;
};
export type useSetExpertProfileMutation$variables = {
  input: SetExpertProfileCommandInput;
};
export type useSetExpertProfileMutation$data = {
  readonly setExpertProfile: {
    readonly updatedExpertProfileId: any;
  } | null | undefined;
};
export type useSetExpertProfileMutation = {
  response: useSetExpertProfileMutation$data;
  variables: useSetExpertProfileMutation$variables;
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
    "concreteType": "SetExpertProfileResponse",
    "kind": "LinkedField",
    "name": "setExpertProfile",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedExpertProfileId",
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
    "name": "useSetExpertProfileMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSetExpertProfileMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f9ea411f9ac0ad5abbbe465a552585f7",
    "id": null,
    "metadata": {},
    "name": "useSetExpertProfileMutation",
    "operationKind": "mutation",
    "text": "mutation useSetExpertProfileMutation(\n  $input: SetExpertProfileCommandInput!\n) {\n  setExpertProfile(input: $input) {\n    updatedExpertProfileId\n  }\n}\n"
  }
};
})();

(node as any).hash = "bf3656a8961ca2d705cadc90d46f5f11";

export default node;
