/**
 * @generated SignedSource<<a45cc58fba1090da280ffdc172e5bbb0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetMentorProfileCommandInput = {
  getMentorProfileModel?: GetMentorProfileModelInput | null;
};
export type GetMentorProfileModelInput = {
  userId: any;
  id?: any | null;
  name: string;
  about: string;
  listOnMarket: boolean;
  industries?: ReadonlyArray<string | null> | null;
};
export type useSetMentorProfileMutation$variables = {
  input: SetMentorProfileCommandInput;
};
export type useSetMentorProfileMutationVariables = useSetMentorProfileMutation$variables;
export type useSetMentorProfileMutation$data = {
  readonly setMentorProfile: {
    readonly updatedMentorProfileId: any;
  } | null;
};
export type useSetMentorProfileMutationResponse = useSetMentorProfileMutation$data;
export type useSetMentorProfileMutation = {
  variables: useSetMentorProfileMutationVariables;
  response: useSetMentorProfileMutation$data;
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
