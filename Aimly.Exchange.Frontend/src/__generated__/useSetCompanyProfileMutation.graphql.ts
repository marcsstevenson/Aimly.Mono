/**
 * @generated SignedSource<<8725d97a0b475b3b1e142ae562ddfc7a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetCompanyProfileCommandInput = {
  getCompanyProfileModel?: GetCompanyProfileModelInput | null | undefined;
  userId: any;
};
export type GetCompanyProfileModelInput = {
  addressCity?: string | null | undefined;
  addressCountry?: string | null | undefined;
  addressLocality?: string | null | undefined;
  addressRegion?: string | null | undefined;
  companyEmail?: string | null | undefined;
  companyName: string;
  companyPhoneNumber?: string | null | undefined;
  floor?: string | null | undefined;
  id?: any | null | undefined;
  industries?: ReadonlyArray<string | null | undefined> | null | undefined;
  listOnMarket: boolean;
  numberOfFounders?: number | null | undefined;
  postOfficeBoxNumber?: string | null | undefined;
  postalCode?: string | null | undefined;
  problemDetails?: string | null | undefined;
  profilePictureUrl?: string | null | undefined;
  solutionDescription?: string | null | undefined;
  streetName?: string | null | undefined;
  streetNumber?: string | null | undefined;
  type?: string | null | undefined;
  website?: string | null | undefined;
};
export type useSetCompanyProfileMutation$variables = {
  input: SetCompanyProfileCommandInput;
};
export type useSetCompanyProfileMutation$data = {
  readonly setCompanyProfile: {
    readonly updatedCompanyProfileId: any;
  } | null | undefined;
};
export type useSetCompanyProfileMutation = {
  response: useSetCompanyProfileMutation$data;
  variables: useSetCompanyProfileMutation$variables;
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
    "concreteType": "SetCompanyProfileResponse",
    "kind": "LinkedField",
    "name": "setCompanyProfile",
    "plural": false,
    "selections": [
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
    "name": "useSetCompanyProfileMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSetCompanyProfileMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1a3d51af66e60704075c8b50d5b52ef7",
    "id": null,
    "metadata": {},
    "name": "useSetCompanyProfileMutation",
    "operationKind": "mutation",
    "text": "mutation useSetCompanyProfileMutation(\n  $input: SetCompanyProfileCommandInput!\n) {\n  setCompanyProfile(input: $input) {\n    updatedCompanyProfileId\n  }\n}\n"
  }
};
})();

(node as any).hash = "e4745d9f8d3349a6374d78973431d8c9";

export default node;
