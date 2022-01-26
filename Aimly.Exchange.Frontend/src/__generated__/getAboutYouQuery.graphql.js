/**
 * @generated SignedSource<<19fc87e8cbb0e35831b69f64845e1f4b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type getAboutYouQuery$variables = {|
  bob: any,
|};
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "bob"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "userId",
            "variableName": "bob"
          }
        ],
        "kind": "ObjectValue",
        "name": "command"
      }
    ],
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "getAboutYouQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getAboutYouQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "10b98e05da1b0d965bd8d0e2b1f725f1",
    "id": null,
    "metadata": {},
    "name": "getAboutYouQuery",
    "operationKind": "query",
    "text": "query getAboutYouQuery(\n  $bob: UUID!\n) {\n  getAboutYou(command: {userId: $bob}) {\n    givenName\n    familyName\n    phoneNumber\n    linkedInProfile\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "5bba310d5991a536ed492bdf346b82d1";

module.exports = ((node/*: any*/)/*: Query<
  getAboutYouQuery$variables,
  getAboutYouQuery$data,
>*/);
