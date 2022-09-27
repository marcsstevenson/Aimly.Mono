/**
 * @generated SignedSource<<903b8bd31f444dcc62065631e4381ebe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ListCompanyAnnouncementsCommandInput = {
  userId: any;
  companyProfileId: any;
  publicResults: boolean;
  pageSize: number;
  currentPage: number;
  orderBy?: string | null;
  orderByAscending: boolean;
};
export type listCompanyAnnouncementsQuery$variables = {
  listCompanyAnnouncementsCommand: ListCompanyAnnouncementsCommandInput;
};
export type listCompanyAnnouncementsQueryVariables = listCompanyAnnouncementsQuery$variables;
export type listCompanyAnnouncementsQuery$data = {
  readonly listCompanyAnnouncements: {
    readonly results: ReadonlyArray<{
      readonly id: any;
      readonly title: string | null;
      readonly message: string | null;
      readonly created: any;
    } | null> | null;
    readonly totalResultCount: number;
    readonly currentPage: number;
    readonly totalPageCount: number;
  } | null;
};
export type listCompanyAnnouncementsQueryResponse = listCompanyAnnouncementsQuery$data;
export type listCompanyAnnouncementsQuery = {
  variables: listCompanyAnnouncementsQueryVariables;
  response: listCompanyAnnouncementsQuery$data;
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
