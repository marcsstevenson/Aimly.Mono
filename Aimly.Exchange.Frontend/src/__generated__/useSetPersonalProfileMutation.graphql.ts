/**
 * @generated SignedSource<<e9b0033e38c8f5d2ff709ed1c96c6969>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SetPersonalProfileCommandInput = {
  getPersonalProfileModel?: GetPersonalProfileModelInput | null;
};
export type GetPersonalProfileModelInput = {
  userId?: any | null;
  language?: string | null;
  personalProfilePictureUrl?: string | null;
  about?: string | null;
  timezone?: string | null;
  givenName?: string | null;
  familyName?: string | null;
  phoneNumber?: string | null;
  linkedInProfile?: string | null;
  industries?: ReadonlyArray<string | null> | null;
  skills?: ReadonlyArray<string | null> | null;
  employmentExperience?: ReadonlyArray<ExperienceBriefModelInput | null> | null;
};
export type ExperienceBriefModelInput = {
  id?: string | null;
  experienceId: any;
  title?: string | null;
  organisation?: string | null;
  startMonth: number;
  startYear: number;
  endMonth?: number | null;
  endYear?: number | null;
};
export type useSetPersonalProfileMutation$variables = {
  input: SetPersonalProfileCommandInput;
};
export type useSetPersonalProfileMutationVariables = useSetPersonalProfileMutation$variables;
export type useSetPersonalProfileMutation$data = {
  readonly setPersonalProfile: {
    readonly updatedPersonalProfileId: any;
  } | null;
};
export type useSetPersonalProfileMutationResponse = useSetPersonalProfileMutation$data;
export type useSetPersonalProfileMutation = {
  variables: useSetPersonalProfileMutationVariables;
  response: useSetPersonalProfileMutation$data;
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
