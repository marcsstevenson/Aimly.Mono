/**
 * @generated SignedSource<<b8ca4e641dc0a79ec3f2b10f7c2d657a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileTypeOption = "PERSONAL" | "STARTUP" | "MENTOR" | "EXPERT" | "%future added value";
export type ProfileSearchCommandInput = {
  userId: any;
  typesFilter?: ReadonlyArray<ProfileTypeOption> | null;
};
export type profileSearchQuery$variables = {
  command: ProfileSearchCommandInput;
};
export type profileSearchQueryVariables = profileSearchQuery$variables;
export type profileSearchQuery$data = {
  readonly profileSearch: ReadonlyArray<{
    readonly id: any;
    readonly name: string | null;
    readonly profilePictureUrl: string | null;
    readonly language: string | null;
    readonly description: string | null;
    readonly type: ProfileTypeOption;
  } | null> | null;
};
export type profileSearchQueryResponse = profileSearchQuery$data;
export type profileSearchQuery = {
  variables: profileSearchQueryVariables;
  response: profileSearchQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "command"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "command",
        "variableName": "command"
      }
    ],
    "concreteType": "ProfileSearchResult",
    "kind": "LinkedField",
    "name": "profileSearch",
    "plural": true,
    "selections": [
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
        "name": "profilePictureUrl",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "language",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
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
    "name": "profileSearchQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "profileSearchQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "00a8799a5edb7a04d6c5b0ffa07c4063",
    "id": null,
    "metadata": {},
    "name": "profileSearchQuery",
    "operationKind": "query",
    "text": "query profileSearchQuery(\n  $command: ProfileSearchCommandInput!\n) {\n  profileSearch(command: $command) {\n    id\n    name\n    profilePictureUrl\n    language\n    description\n    type\n  }\n}\n"
  }
};
})();

(node as any).hash = "e938277adbbb6212fbe34947da894020";

export default node;
