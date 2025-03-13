/**
 * @generated SignedSource<<a4a26be2275f830d7ef9f7764039ca87>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetPersonalProfileCommandInput = {
  getPersonalProfileModel?: GetPersonalProfileModelInput | null | undefined;
};
export type GetPersonalProfileModelInput = {
  about?: string | null | undefined;
  addressCity?: string | null | undefined;
  addressCountry?: string | null | undefined;
  addressRegion?: string | null | undefined;
  employmentExperience?: ReadonlyArray<ExperienceModelInput | null | undefined> | null | undefined;
  familyName?: string | null | undefined;
  givenName?: string | null | undefined;
  industries?: ReadonlyArray<string | null | undefined> | null | undefined;
  language?: string | null | undefined;
  linkedInProfile?: string | null | undefined;
  listOnMarket: boolean;
  personalProfilePictureUrl?: string | null | undefined;
  phoneNumber?: string | null | undefined;
  postalCode?: string | null | undefined;
  skills?: ReadonlyArray<string | null | undefined> | null | undefined;
  timezone?: string | null | undefined;
  userId?: any | null | undefined;
};
export type ExperienceModelInput = {
  description?: string | null | undefined;
  endMonth?: number | null | undefined;
  endYear?: number | null | undefined;
  id?: any | null | undefined;
  organisation?: string | null | undefined;
  startMonth: number;
  startYear: number;
  stickToTop: boolean;
  title?: string | null | undefined;
};
export type useSetPersonalProfileMutation$variables = {
  input: SetPersonalProfileCommandInput;
};
export type useSetPersonalProfileMutation$data = {
  readonly setPersonalProfile: {
    readonly updatedPersonalProfileId: any;
  } | null | undefined;
};
export type useSetPersonalProfileMutation = {
  response: useSetPersonalProfileMutation$data;
  variables: useSetPersonalProfileMutation$variables;
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
    "concreteType": "SetPersonalProfileResponse",
    "kind": "LinkedField",
    "name": "setPersonalProfile",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedPersonalProfileId",
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
    "name": "useSetPersonalProfileMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSetPersonalProfileMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6ca6a5ea762c2915818ffbce51aae4d8",
    "id": null,
    "metadata": {},
    "name": "useSetPersonalProfileMutation",
    "operationKind": "mutation",
    "text": "mutation useSetPersonalProfileMutation(\n  $input: SetPersonalProfileCommandInput!\n) {\n  setPersonalProfile(input: $input) {\n    updatedPersonalProfileId\n  }\n}\n"
  }
};
})();

(node as any).hash = "6905c8e9edd6e7f00efb482b5c6f6f18";

export default node;
