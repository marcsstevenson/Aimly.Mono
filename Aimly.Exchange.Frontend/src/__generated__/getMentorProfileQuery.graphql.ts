/**
 * @generated SignedSource<<aad68ebeaeae1027cbf16ae88ef12bd1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getMentorProfileQuery$variables = {
  userId: any;
  id: any;
};
export type getMentorProfileQueryVariables = getMentorProfileQuery$variables;
export type getMentorProfileQuery$data = {
  readonly getMentorProfile: {
    readonly userId: any;
    readonly id: any | null;
    readonly name: string;
    readonly about: string;
    readonly industries: ReadonlyArray<string | null> | null;
    readonly skills: ReadonlyArray<string | null> | null;
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
  "name": "id"
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
        "name": "id",
        "variableName": "id"
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
        "name": "name",
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
        "name": "industries",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "skills",
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
    "cacheID": "a19cd1cab183ea299c8e548e9ff0977a",
    "id": null,
    "metadata": {},
    "name": "getMentorProfileQuery",
    "operationKind": "query",
    "text": "query getMentorProfileQuery(\n  $userId: UUID!\n  $id: UUID!\n) {\n  getMentorProfile(userId: $userId, id: $id) {\n    userId\n    id\n    name\n    about\n    industries\n    skills\n    listOnMarket\n  }\n}\n"
  }
};
})();

(node as any).hash = "ffbfdf5303b967796714d4863ece786e";

export default node;
