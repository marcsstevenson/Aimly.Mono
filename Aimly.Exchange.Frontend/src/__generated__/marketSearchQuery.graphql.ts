/**
 * @generated SignedSource<<0cd086c44895caf71033b9ad730e35a7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileTypeOption = "PERSONAL" | "STARTUP" | "MENTOR" | "EXPERT" | "%future added value";
export type MarketSearchCommandInput = {
  profileType: ProfileTypeOption;
  searchTerm?: string | null;
  pageSize: number;
  currentPage: number;
  orderBy?: string | null;
  orderByAscending: boolean;
};
export type marketSearchQuery$variables = {
  marketSearchCommand: MarketSearchCommandInput;
};
export type marketSearchQueryVariables = marketSearchQuery$variables;
export type marketSearchQuery$data = {
  readonly marketSearch: {
    readonly results: ReadonlyArray<{
      readonly id: any;
      readonly profileId: any;useMemo
      readonly name: string | null;
      readonly description: string | null;
      readonly profileUrl: string | null;
      readonly type: ProfileTypeOption;
    } | null> | null;
    readonly totalResultCount: number;
    readonly currentPage: number;
    readonly totalPageCount: number;
  } | null;
};
export type marketSearchQueryResponse = marketSearchQuery$data;
export type marketSearchQuery = {
  variables: marketSearchQueryVariables;
  response: marketSearchQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "marketSearchCommand"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "marketSearchCommand",
        "variableName": "marketSearchCommand"
      }
    ],
    "concreteType": "MarketSearchResults",
    "kind": "LinkedField",
    "name": "marketSearch",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MarketSearchResult",
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
            "name": "profileId",
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
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "profileUrl",
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
    "name": "marketSearchQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "marketSearchQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "44b4a576a81c05fa3177ebe8720a6927",
    "id": null,
    "metadata": {},
    "name": "marketSearchQuery",
    "operationKind": "query",
    "text": "query marketSearchQuery(\n  $marketSearchCommand: MarketSearchCommandInput!\n) {\n  marketSearch(marketSearchCommand: $marketSearchCommand) {\n    results {\n      id\n      profileId\n      name\n      description\n      profileUrl\n      type\n    }\n    totalResultCount\n    currentPage\n    totalPageCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "51f1d5a8173b9a40b5d7fbd260e54ea5";

export default node;
