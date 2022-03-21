/**
 * @generated SignedSource<<2157a2e152da4e6bf13793726dc26a86>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ProfileTypeOption = "PERSONAL" | "STARTUP" | "MENTOR" | "EXPERT" | "%future added value";
export type MarketContactModelInput = {
  fromProfileId?: any | null;
  fromProfileType?: ProfileTypeOption | null;
  toProfileId: any;
  toProfileType: ProfileTypeOption;
  servicesNeeded: string;
  comments?: string | null;
  projectBudget: string;
};
export type useMarketContactMutation$variables = {
  userId: any;
  marketContactModel: MarketContactModelInput;
};
export type useMarketContactMutationVariables = useMarketContactMutation$variables;
export type useMarketContactMutation$data = {
  readonly marketContact: {
    readonly error: string | null;
  } | null;
};
export type useMarketContactMutationResponse = useMarketContactMutation$data;
export type useMarketContactMutation = {
  variables: useMarketContactMutationVariables;
  response: useMarketContactMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "marketContactModel"
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
        "name": "marketContactModel",
        "variableName": "marketContactModel"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "MarketContactResponse",
    "kind": "LinkedField",
    "name": "marketContact",
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
    "name": "useMarketContactMutation",
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
    "name": "useMarketContactMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "fdc968b03ae4c92839bdf4a67e19eb63",
    "id": null,
    "metadata": {},
    "name": "useMarketContactMutation",
    "operationKind": "mutation",
    "text": "mutation useMarketContactMutation(\n  $userId: UUID!\n  $marketContactModel: MarketContactModelInput!\n) {\n  marketContact(userId: $userId, marketContactModel: $marketContactModel) {\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "d211ad1154a4930884059574eebfd434";

export default node;
