/**
 * @generated SignedSource<<e115156f3132aa006ab785750eb06c82>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetMentorProfileCommandInput = {
  getMentorProfileModel?: GetMentorProfileModelInput | null | undefined;
};
export type GetMentorProfileModelInput = {
  about: string;
  id?: any | null | undefined;
  industries?: ReadonlyArray<string | null | undefined> | null | undefined;
  listOnMarket: boolean;
  name: string;
  skills?: ReadonlyArray<string | null | undefined> | null | undefined;
  userId: any;
};
export type useSetMentorProfileMutation$variables = {
  input: SetMentorProfileCommandInput;
};
export type useSetMentorProfileMutation$data = {
  readonly setMentorProfile: {
    readonly updatedMentorProfileId: any;
  } | null | undefined;
};
export type useSetMentorProfileMutation = {
  response: useSetMentorProfileMutation$data;
  variables: useSetMentorProfileMutation$variables;
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
    "concreteType": "SetMentorProfileResponse",
    "kind": "LinkedField",
    "name": "setMentorProfile",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedMentorProfileId",
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
    "name": "useSetMentorProfileMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSetMentorProfileMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9116d817349db50f93d223a99f255395",
    "id": null,
    "metadata": {},
    "name": "useSetMentorProfileMutation",
    "operationKind": "mutation",
    "text": "mutation useSetMentorProfileMutation(\n  $input: SetMentorProfileCommandInput!\n) {\n  setMentorProfile(input: $input) {\n    updatedMentorProfileId\n  }\n}\n"
  }
};
})();

(node as any).hash = "1dd1ae37060e1e063877f163acb8016c";

export default node;
