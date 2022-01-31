/**
 * @generated SignedSource<<d6abe1ade32026d4ca8a6f0697988e9e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetAboutYouCommandInput = {
  getAboutYouModel?: GetAboutYouModelInput | null;
};
export type GetAboutYouModelInput = {
  userId?: any | null;
  givenName?: string | null;
  familyName?: string | null;
  phoneNumber?: string | null;
  linkedInProfile?: string | null;
  companyProfileId?: any | null;
  companyName?: string | null;
  website?: string | null;
  numberOfFounders?: number | null;
  floor?: string | null;
  streetNumber?: string | null;
  streetName?: string | null;
  addressLocality?: string | null;
  addressCity?: string | null;
  addressRegion?: string | null;
  addressCountry?: string | null;
  postalCode?: string | null;
  postOfficeBoxNumber?: string | null;
};
export type useSetAboutYouMutation$variables = {
  input: SetAboutYouCommandInput;
};
export type useSetAboutYouMutationVariables = useSetAboutYouMutation$variables;
export type useSetAboutYouMutation$data = {
  readonly setAboutYou: any;
};
export type useSetAboutYouMutationResponse = useSetAboutYouMutation$data;
export type useSetAboutYouMutation = {
  variables: useSetAboutYouMutationVariables;
  response: useSetAboutYouMutation$data;
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
    "kind": "ScalarField",
    "name": "setAboutYou",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useSetAboutYouMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSetAboutYouMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "76c5dd62de4af79d0b3568eb26e8b291",
    "id": null,
    "metadata": {},
    "name": "useSetAboutYouMutation",
    "operationKind": "mutation",
    "text": "mutation useSetAboutYouMutation(\n  $input: SetAboutYouCommandInput!\n) {\n  setAboutYou(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "e46962c8b31d1e9766ba258ff2e767f0";

export default node;
