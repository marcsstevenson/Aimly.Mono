/**
 * @generated SignedSource<<0c04372cc5d537e526a8f5ef5e6b989a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getMentorProfileQuery$variables = {
  userId: any;
  mentorProfileId: any;
};
export type getMentorProfileQueryVariables = getMentorProfileQuery$variables;
export type getMentorProfileQuery$data = {
  readonly getMentorProfile: {
    readonly userId: any;
    readonly id: any | null;
    readonly about: string;
    readonly industry: string;
    readonly listOnMarket: boolean;
  } | null;
};
export type getMentorProfileQueryResponse = getMentorProfileQuery$data;
export type getMentorProfileQuery = {
  variables: getMentorProfileQueryVariables;
  response: getMentorProfileQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "mentorProfileId"
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
        "name": "mentorProfileId",
        "variableName": "mentorProfileId"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "GetMentorProfileModel",
    "kind": "LinkedField",
    "name": "getMentorProfile",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "about",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "industry",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "listOnMarket",
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
    "name": "getMentorProfileQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "getMentorProfileQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "f764e51036e26eda7d71f9fa578288d7",
    "id": null,
    "metadata": {},
    "name": "getMentorProfileQuery",
    "operationKind": "query",
    "text": "query getMentorProfileQuery(\n  $userId: UUID!\n  $mentorProfileId: UUID!\n) {\n  getMentorProfile(userId: $userId, mentorProfileId: $mentorProfileId) {\n    userId\n    id\n    about\n    industry\n    listOnMarket\n  }\n}\n"
  }
};
})();

(node as any).hash = "518a0062175091dc9f80f209b7917a1f";

export default node;
