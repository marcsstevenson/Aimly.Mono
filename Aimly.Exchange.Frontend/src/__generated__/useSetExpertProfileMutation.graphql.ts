/**
 * @generated SignedSource<<f2aafc996889f54109cd8ae4135cc6d7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetExpertProfileCommandInput = {
  getExpertProfileModel?: GetExpertProfileModelInput | null;
};
export type GetExpertProfileModelInput = {
  userId: any;
  id?: any | null;
  name: string;
  about: string;
  listOnMarket: boolean;
  industries?: ReadonlyArray<string | null> | null;
  skills?: ReadonlyArray<string | null> | null;
};
export type useSetExpertProfileMutation$variables = {
  input: SetExpertProfileCommandInput;
};
export type useSetExpertProfileMutationVariables = useSetExpertProfileMutation$variables;
export type useSetExpertProfileMutation$data = {
  readonly setExpertProfile: {
    readonly updatedExpertProfileId: any;
  } | null;
};
export type useSetExpertProfileMutationResponse = useSetExpertProfileMutation$data;
export type useSetExpertProfileMutation = {
  variables: useSetExpertProfileMutationVariables;
  response: useSetExpertProfileMutation$data;
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
