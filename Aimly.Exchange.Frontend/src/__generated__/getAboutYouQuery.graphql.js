/**
 * @generated SignedSource<<78e8429c15f6ea97737732cb74fb2a28>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type getAboutYouQuery$variables = {||};
export type getAboutYouQueryVariables = getAboutYouQuery$variables;
export type getAboutYouQuery$data = {|
  +getAboutYou: ?{|
    +givenName: ?string,
    +familyName: ?string,
    +phoneNumber: ?string,
    +linkedInProfile: ?string,
  |},
|};
export type getAboutYouQueryResponse = getAboutYouQuery$data;
export type getAboutYouQuery = {|
  variables: getAboutYouQueryVariables,
  response: getAboutYouQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "GetAboutYouModel",
    "kind": "LinkedField",
    "name": "getAboutYou",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "givenName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "familyName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "phoneNumber",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "linkedInProfile",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getAboutYouQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getAboutYouQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5a3152e5e5d9192bc74bef24ef4b5a3f",
    "id": null,
    "metadata": {},
    "name": "getAboutYouQuery",
    "operationKind": "query",
    "text": "query getAboutYouQuery {\n  getAboutYou {\n    givenName\n    familyName\n    phoneNumber\n    linkedInProfile\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "9d3a2218e18b891708065b09f2eb885e";

module.exports = ((node/*: any*/)/*: Query<
  getAboutYouQuery$variables,
  getAboutYouQuery$data,
>*/);
