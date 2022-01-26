/**
 * @generated SignedSource<<c41c1c40d533a848bddbf96660615a86>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type getAboutYouQuery$variables = {|
  id: any,
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
    "name": "id"
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
            "variableName": "id"
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
    "cacheID": "09915e8045b6924ec57f2ce4cf94043d",
    "id": null,
    "metadata": {},
    "name": "getAboutYouQuery",
    "operationKind": "query",
    "text": "query getAboutYouQuery(\n  $id: UUID!\n) {\n  getAboutYou(command: {userId: $id}) {\n    givenName\n    familyName\n    phoneNumber\n    linkedInProfile\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "ecb4f3463a2a3c40415a3787647f51b5";

module.exports = ((node/*: any*/)/*: Query<
  getAboutYouQuery$variables,
  getAboutYouQuery$data,
>*/);
