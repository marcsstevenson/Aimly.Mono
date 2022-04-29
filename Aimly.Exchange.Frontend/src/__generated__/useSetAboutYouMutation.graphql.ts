/**
 * @generated SignedSource<<c0c623932900918fcf613cef064399a5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetAboutYouCommandInput = {
  inviteCode?: string | null;
  getAboutYouModel?: GetAboutYouModelInput | null;
};
export type GetAboutYouModelInput = {
  userId?: any | null;
  language?: string | null;
  personalProfilePictureUrl?: string | null;
  about?: string | null;
  timezone?: string | null;
  givenName?: string | null;
  familyName?: string | null;
  phoneNumber?: string | null;
  linkedInProfile?: string | null;
  companyProfileId?: any | null;
  companyProfilePictureUrl?: string | null;
  companyName?: string | null;
  type?: string | null;
  listOnMarket: boolean;
  website?: string | null;
  numberOfFounders?: number | null;
  industries?: ReadonlyArray<string | null> | null;
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
  readonly setAboutYou: {
    readonly updatedPersonalProfileId: any;
    readonly updatedCompanyProfileId: any;
  } | null;
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
