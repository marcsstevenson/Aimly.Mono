/**
 * @generated SignedSource<<c55685d5c5283c12e496fc963945e2f5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileTypeOption = "COMPANY" | "EXPERT" | "MENTOR" | "PERSONAL" | "%future added value";
export type MarketSearchCommandInput = {
  currentPage: number;
  industries?: ReadonlyArray<string | null | undefined> | null | undefined;
  locations?: ReadonlyArray<string | null | undefined> | null | undefined;
  orderBy?: string | null | undefined;
  orderByAscending: boolean;
  pageSize: number;
  profileType: ProfileTypeOption;
  searchTerm?: string | null | undefined;
  skills?: ReadonlyArray<string | null | undefined> | null | undefined;
  timeZones?: ReadonlyArray<string | null | undefined> | null | undefined;
};
export type marketSearchQuery$variables = {
  marketSearchCommand: MarketSearchCommandInput;
};
export type marketSearchQuery$data = {
  readonly marketSearch: {
    readonly currentPage: number;
    readonly results: ReadonlyArray<{
      readonly addressCity: string | null | undefined;
      readonly addressCountry: string | null | undefined;
      readonly description: string | null | undefined;
      readonly id: any;
      readonly name: string | null | undefined;
      readonly profileId: any;
      readonly profilePictureUrl: string | null | undefined;
      readonly timezone: string | null | undefined;
      readonly type: ProfileTypeOption;
    } | null | undefined> | null | undefined;
    readonly totalPageCount: number;
    readonly totalResultCount: number;
  } | null | undefined;
};
export type marketSearchQuery = {
  response: marketSearchQuery$data;
  variables: marketSearchQuery$variables;
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
