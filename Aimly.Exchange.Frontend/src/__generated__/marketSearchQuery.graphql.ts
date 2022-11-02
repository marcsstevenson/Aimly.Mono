/**
 * @generated SignedSource<<7b452364d4a0f345b2db34d1d87e19f3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileTypeOption = "PERSONAL" | "COMPANY" | "MENTOR" | "EXPERT" | "%future added value";
export type MarketSearchCommandInput = {
  profileType: ProfileTypeOption;
  searchTerm?: string | null;
  skills?: ReadonlyArray<string | null> | null;
  industries?: ReadonlyArray<string | null> | null;
  locations?: ReadonlyArray<string | null> | null;
  timeZones?: ReadonlyArray<string | null> | null;
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
      readonly profileId: any;
      readonly name: string | null;
      readonly description: string | null;
      readonly profilePictureUrl: string | null;
      readonly type: ProfileTypeOption;
      readonly addressCity: string | null;
      readonly addressCountry: string | null;
      readonly timezone: string | null;
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
            "name": "profilePictureUrl",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "type",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "addressCity",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "addressCountry",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "timezone",
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
    "cacheID": "8c75c6924e9bc9b6f71888f7070f2e94",
    "id": null,
    "metadata": {},
    "name": "marketSearchQuery",
    "operationKind": "query",
    "text": "query marketSearchQuery(\n  $marketSearchCommand: MarketSearchCommandInput!\n) {\n  marketSearch(marketSearchCommand: $marketSearchCommand) {\n    results {\n      id\n      profileId\n      name\n      description\n      profilePictureUrl\n      type\n      addressCity\n      addressCountry\n      timezone\n    }\n    totalResultCount\n    currentPage\n    totalPageCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "f6335f41a5cfc3713ca057f8c882508f";

export default node;
