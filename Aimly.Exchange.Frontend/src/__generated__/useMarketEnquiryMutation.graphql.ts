/**
 * @generated SignedSource<<01c76cf1eb5d480971f9b5d0e5b9df20>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ProfileTypeOption = "PERSONAL" | "COMPANY" | "MENTOR" | "EXPERT" | "%future added value";
export type MarketEnquiryModelInput = {
  fromProfileId?: any | null;
  fromProfileType?: ProfileTypeOption | null;
  toProfileId: any;
  toProfileType: ProfileTypeOption;
  servicesNeeded: string;
  comments?: string | null;
  projectBudget: string;
};
export type useMarketEnquiryMutation$variables = {
  userId: any;
  marketEnquiryModel: MarketEnquiryModelInput;
};
export type useMarketEnquiryMutationVariables = useMarketEnquiryMutation$variables;
export type useMarketEnquiryMutation$data = {
  readonly marketEnquiry: {
    readonly error: string | null;
  } | null;
};
export type useMarketEnquiryMutationResponse = useMarketEnquiryMutation$data;
export type useMarketEnquiryMutation = {
  variables: useMarketEnquiryMutationVariables;
  response: useMarketEnquiryMutation$data;
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
    "name": "useMarketEnquiryMutation",
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
    "name": "useMarketEnquiryMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "ce44b985cefbf91b3ba78602c16d9af1",
    "id": null,
    "metadata": {},
    "name": "useMarketEnquiryMutation",
    "operationKind": "mutation",
    "text": "mutation useMarketEnquiryMutation(\n  $userId: UUID!\n  $marketEnquiryModel: MarketEnquiryModelInput!\n) {\n  marketEnquiry(userId: $userId, marketEnquiryModel: $marketEnquiryModel) {\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "d0fa955d8b2859915a4d5cfe79f8e940";

export default node;
