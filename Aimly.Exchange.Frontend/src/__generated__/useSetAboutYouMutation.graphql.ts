/**
 * @generated SignedSource<<5fabdcf7b12ebffb2a3952afa9808019>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetAboutYouCommandInput = {
  getAboutYouModel?: GetAboutYouModelInput | null | undefined;
  inviteCode?: string | null | undefined;
};
export type GetAboutYouModelInput = {
  about?: string | null | undefined;
  addressCity?: string | null | undefined;
  addressCountry?: string | null | undefined;
  addressLocality?: string | null | undefined;
  addressRegion?: string | null | undefined;
  companyEmail?: string | null | undefined;
  companyName?: string | null | undefined;
  companyPhoneNumber?: string | null | undefined;
  companyProfileId?: any | null | undefined;
  companyProfilePictureUrl?: string | null | undefined;
  familyName?: string | null | undefined;
  floor?: string | null | undefined;
  givenName?: string | null | undefined;
  industries?: ReadonlyArray<string | null | undefined> | null | undefined;
  language?: string | null | undefined;
  linkedInProfile?: string | null | undefined;
  listOnMarket: boolean;
  numberOfFounders?: number | null | undefined;
  personalProfilePictureUrl?: string | null | undefined;
  phoneNumber?: string | null | undefined;
  postOfficeBoxNumber?: string | null | undefined;
  postalCode?: string | null | undefined;
  streetName?: string | null | undefined;
  streetNumber?: string | null | undefined;
  timezone?: string | null | undefined;
  type?: string | null | undefined;
  userId?: any | null | undefined;
  website?: string | null | undefined;
};
export type useSetAboutYouMutation$variables = {
  input: SetAboutYouCommandInput;
};
export type useSetAboutYouMutation$data = {
  readonly setAboutYou: {
    readonly updatedCompanyProfileId: any;
    readonly updatedPersonalProfileId: any;
  } | null | undefined;
};
export type useSetAboutYouMutation = {
  response: useSetAboutYouMutation$data;
  variables: useSetAboutYouMutation$variables;
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
    "concreteType": "SetAboutYouResponse",
    "kind": "LinkedField",
    "name": "setAboutYou",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedPersonalProfileId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedCompanyProfileId",
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
    "cacheID": "5e2e16f1e0e4b64720159422e358874d",
    "id": null,
    "metadata": {},
    "name": "useSetAboutYouMutation",
    "operationKind": "mutation",
    "text": "mutation useSetAboutYouMutation(\n  $input: SetAboutYouCommandInput!\n) {\n  setAboutYou(input: $input) {\n    updatedPersonalProfileId\n    updatedCompanyProfileId\n  }\n}\n"
  }
};
})();

(node as any).hash = "4b7da34e3792f6ac7660e562e881b905";

export default node;
