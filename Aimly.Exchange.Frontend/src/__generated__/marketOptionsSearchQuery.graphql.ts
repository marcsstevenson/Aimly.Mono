/**
 * @generated SignedSource<<1a7355588b39dfb87d1b63ed11a1dc05>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileTypeOption = "COMPANY" | "EXPERT" | "MENTOR" | "PERSONAL" | "%future added value";
export type marketOptionsSearchQuery$variables = {
  profileType: ProfileTypeOption;
};
export type marketOptionsSearchQuery$data = {
  readonly marketOptionsSearch: {
    readonly industryOptions: ReadonlyArray<{
      readonly count: number;
      readonly name: string | null | undefined;
    } | null | undefined> | null | undefined;
    readonly locationOptions: ReadonlyArray<{
      readonly count: number;
      readonly name: string | null | undefined;
    } | null | undefined> | null | undefined;
    readonly skillOptions: ReadonlyArray<{
      readonly count: number;
      readonly name: string | null | undefined;
    } | null | undefined> | null | undefined;
    readonly timezoneOptions: ReadonlyArray<{
      readonly count: number;
      readonly name: string | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type marketOptionsSearchQuery = {
  response: marketOptionsSearchQuery$data;
  variables: marketOptionsSearchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "profileType"
  }
],
v1 = [
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
    "name": "count",
    "storageKey": null
  }
],
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "profileType",
        "variableName": "profileType"
      }
    ],
    "concreteType": "MarketSearchOptionsResponse",
    "kind": "LinkedField",
    "name": "marketOptionsSearch",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MarketSearchOption",
        "kind": "LinkedField",
        "name": "skillOptions",
        "plural": true,
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MarketSearchOption",
        "kind": "LinkedField",
        "name": "industryOptions",
        "plural": true,
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MarketSearchOption",
        "kind": "LinkedField",
        "name": "locationOptions",
        "plural": true,
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MarketSearchOption",
        "kind": "LinkedField",
        "name": "timezoneOptions",
        "plural": true,
        "selections": (v1/*: any*/),
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
    "name": "marketOptionsSearchQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "marketOptionsSearchQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "8df81e35199838caa5a0d0d2a7195a38",
    "id": null,
    "metadata": {},
    "name": "marketOptionsSearchQuery",
    "operationKind": "query",
    "text": "query marketOptionsSearchQuery(\n  $profileType: ProfileTypeOption!\n) {\n  marketOptionsSearch(profileType: $profileType) {\n    skillOptions {\n      name\n      count\n    }\n    industryOptions {\n      name\n      count\n    }\n    locationOptions {\n      name\n      count\n    }\n    timezoneOptions {\n      name\n      count\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9c6289fa1b76f0c57565569df903c576";

export default node;
