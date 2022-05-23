/**
 * @generated SignedSource<<7f905d95e63f251552280d901eeb1330>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ExperienceModelInput = {
  id?: any | null;
  stickToTop: boolean;
  title?: string | null;
  organisation?: string | null;
  description?: string | null;
  startMonth: number;
  startYear: number;
  endMonth?: number | null;
  endYear?: number | null;
};
export type useSetExperienceMutation$variables = {
  userId: any;
  experienceModel: ExperienceModelInput;
};
export type useSetExperienceMutationVariables = useSetExperienceMutation$variables;
export type useSetExperienceMutation$data = {
  readonly setExperience: {
    readonly updatedExperienceId: any;
  } | null;
};
export type useSetExperienceMutationResponse = useSetExperienceMutation$data;
export type useSetExperienceMutation = {
  variables: useSetExperienceMutationVariables;
  response: useSetExperienceMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "experienceModel"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "experienceModel",
        "variableName": "experienceModel"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "SetExperienceResponse",
    "kind": "LinkedField",
    "name": "setExperience",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedExperienceId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSetExperienceMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "useSetExperienceMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "0bb4b4f9f710b0d2f23ff8f4545d5e0a",
    "id": null,
    "metadata": {},
    "name": "useSetExperienceMutation",
    "operationKind": "mutation",
    "text": "mutation useSetExperienceMutation(\n  $userId: UUID!\n  $experienceModel: ExperienceModelInput!\n) {\n  setExperience(userId: $userId, experienceModel: $experienceModel) {\n    updatedExperienceId\n  }\n}\n"
  }
};
})();

(node as any).hash = "8a4ae02ffde9935370c5d629a8d47bd0";

export default node;
