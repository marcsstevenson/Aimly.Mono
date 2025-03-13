/**
 * @generated SignedSource<<e3db0f3619c8e6fefc444c09bb952108>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ProfileTypeOption = "COMPANY" | "EXPERT" | "MENTOR" | "PERSONAL" | "%future added value";
export type MarketEnquiryModelInput = {
  comments?: string | null | undefined;
  fromProfileId?: any | null | undefined;
  fromProfileType?: ProfileTypeOption | null | undefined;
  projectBudget: string;
  servicesNeeded: string;
  toProfileId: any;
  toProfileType: ProfileTypeOption;
};
export type useSetCompanyAnnouncementMutation$variables = {
  marketEnquiryModel: MarketEnquiryModelInput;
  userId: any;
};
export type useSetCompanyAnnouncementMutation$data = {
  readonly marketEnquiry: {
    readonly error: string | null | undefined;
  } | null | undefined;
};
export type useSetCompanyAnnouncementMutation = {
  response: useSetCompanyAnnouncementMutation$data;
  variables: useSetCompanyAnnouncementMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "marketEnquiryModel"
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
        "name": "marketEnquiryModel",
        "variableName": "marketEnquiryModel"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "MarketEnquiryResponse",
    "kind": "LinkedField",
    "name": "marketEnquiry",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
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
    "name": "useSetCompanyAnnouncementMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "useSetCompanyAnnouncementMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "41cb1546d2887298a5d27c0223154d8d",
    "id": null,
    "metadata": {},
    "name": "useSetCompanyAnnouncementMutation",
    "operationKind": "mutation",
    "text": "mutation useSetCompanyAnnouncementMutation(\n  $userId: UUID!\n  $marketEnquiryModel: MarketEnquiryModelInput!\n) {\n  marketEnquiry(userId: $userId, marketEnquiryModel: $marketEnquiryModel) {\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "b1b53e7195d5e8329b4ec11d8736dce1";

export default node;
