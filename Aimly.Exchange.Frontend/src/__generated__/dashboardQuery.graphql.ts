/**
 * @generated SignedSource<<11e89b209aa2937389c797dc80cfc65d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileTypeOption = "COMPANY" | "EXPERT" | "MENTOR" | "PERSONAL" | "%future added value";
export type dashboardQuery$variables = {
  userId: any;
};
export type dashboardQuery$data = {
  readonly dashboard: {
    readonly newCompanyProfiles: ReadonlyArray<{
      readonly description: string | null | undefined;
      readonly id: any;
      readonly name: string | null | undefined;
      readonly profileId: any;
      readonly profilePictureUrl: string | null | undefined;
      readonly type: ProfileTypeOption;
    } | null | undefined> | null | undefined;
    readonly newPersonalProfiles: ReadonlyArray<{
      readonly description: string | null | undefined;
      readonly id: any;
      readonly name: string | null | undefined;
      readonly profileId: any;
      readonly profilePictureUrl: string | null | undefined;
      readonly type: ProfileTypeOption;
    } | null | undefined> | null | undefined;
    readonly newUpdates: ReadonlyArray<{
      readonly content: string | null | undefined;
      readonly created: any;
      readonly image: string | null | undefined;
      readonly title: string | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type dashboardQuery = {
  response: dashboardQuery$data;
  variables: dashboardQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
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
  }
],
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "DashboardModel",
    "kind": "LinkedField",
    "name": "dashboard",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MarketSearchResult",
        "kind": "LinkedField",
        "name": "newPersonalProfiles",
        "plural": true,
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MarketSearchResult",
        "kind": "LinkedField",
        "name": "newCompanyProfiles",
        "plural": true,
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UpdateModel",
        "kind": "LinkedField",
        "name": "newUpdates",
        "plural": true,
        "selections": [
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
            "name": "image",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
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
    "name": "dashboardQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "dashboardQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "83d6b7ae5ae23a7e3e0602182039bf95",
    "id": null,
    "metadata": {},
    "name": "dashboardQuery",
    "operationKind": "query",
    "text": "query dashboardQuery(\n  $userId: UUID!\n) {\n  dashboard(userId: $userId) {\n    newPersonalProfiles {\n      id\n      profileId\n      name\n      description\n      profilePictureUrl\n      type\n    }\n    newCompanyProfiles {\n      id\n      profileId\n      name\n      description\n      profilePictureUrl\n      type\n    }\n    newUpdates {\n      title\n      image\n      content\n      created\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fa7446431687dcbc6bc0ace1d565b6a8";

export default node;
