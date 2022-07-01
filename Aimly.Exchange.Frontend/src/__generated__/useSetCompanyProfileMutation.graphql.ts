/**
 * @generated SignedSource<<795c2e5671fa8253fbf4b209059cf0eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetCompanyProfileCommandInput = {
  userId: any;
  getCompanyProfileModel?: GetCompanyProfileModelInput | null;
};
export type GetCompanyProfileModelInput = {
  id?: any | null;
  companyName: string;
  listOnMarket: boolean;
  profilePictureUrl?: string | null;
  type?: string | null;
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
  problemDetails?: string | null;
  solutionDescription?: string | null;
};
export type useSetCompanyProfileMutation$variables = {
  input: SetCompanyProfileCommandInput;
};
export type useSetCompanyProfileMutationVariables = useSetCompanyProfileMutation$variables;
export type useSetCompanyProfileMutation$data = {
  readonly setCompanyProfile: {
    readonly updatedCompanyProfileId: any;
  } | null;
};
export type useSetCompanyProfileMutationResponse = useSetCompanyProfileMutation$data;
export type useSetCompanyProfileMutation = {
  variables: useSetCompanyProfileMutationVariables;
  response: useSetCompanyProfileMutation$data;
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
