/**
 * @generated SignedSource<<f1224de910d1f8491dd0dcbf95f0ea0f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ListCompanyAnnouncementsCommandInput = {
  companyProfileId: any;
  currentPage: number;
  orderBy?: string | null | undefined;
  orderByAscending: boolean;
  pageSize: number;
  publicResults: boolean;
  userId: any;
};
export type listCompanyAnnouncementsQuery$variables = {
  listCompanyAnnouncementsCommand: ListCompanyAnnouncementsCommandInput;
};
export type listCompanyAnnouncementsQuery$data = {
  readonly listCompanyAnnouncements: {
    readonly currentPage: number;
    readonly results: ReadonlyArray<{
      readonly created: any;
      readonly id: any;
      readonly message: string | null | undefined;
      readonly title: string | null | undefined;
    } | null | undefined> | null | undefined;
    readonly totalPageCount: number;
    readonly totalResultCount: number;
  } | null | undefined;
};
export type listCompanyAnnouncementsQuery = {
  response: listCompanyAnnouncementsQuery$data;
  variables: listCompanyAnnouncementsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "listCompanyAnnouncementsCommand"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "command",
        "variableName": "listCompanyAnnouncementsCommand"
      }
    ],
    "concreteType": "ListCompanyAnnouncementsResults",
    "kind": "LinkedField",
    "name": "listCompanyAnnouncements",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ListCompanyAnnouncementsModel",
        "kind": "LinkedField",
        "name": "results",
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
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "message",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "created",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalResultCount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "currentPage",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalPageCount",
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
    "name": "listCompanyAnnouncementsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "listCompanyAnnouncementsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c3595d87cf378e108ab9ea0b11f8a1f1",
    "id": null,
    "metadata": {},
    "name": "listCompanyAnnouncementsQuery",
    "operationKind": "query",
    "text": "query listCompanyAnnouncementsQuery(\n  $listCompanyAnnouncementsCommand: ListCompanyAnnouncementsCommandInput!\n) {\n  listCompanyAnnouncements(command: $listCompanyAnnouncementsCommand) {\n    results {\n      id\n      title\n      message\n      created\n    }\n    totalResultCount\n    currentPage\n    totalPageCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "af86bddaf0c1eb09e439bc82b3074ff2";

export default node;
