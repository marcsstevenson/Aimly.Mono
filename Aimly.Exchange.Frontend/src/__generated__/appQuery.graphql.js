/**
 * @generated SignedSource<<ab21657a470d3dace899526cebab82d0>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type appQuery$variables = {|
  id: any,
|};
export type appQueryVariables = appQuery$variables;
export type appQuery$data = {|
  +getAboutYou: ?{|
    +givenName: ?string,
    +familyName: ?string,
    +phoneNumber: ?string,
    +linkedInProfile: ?string,
  |},
|};
export type appQueryResponse = appQuery$data;
export type appQuery = {|
  variables: appQueryVariables,
  response: appQuery$data,
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
    "name": "appQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "appQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ffbcb550545c5f8990f3a20d09ce0cea",
    "id": null,
    "metadata": {},
    "name": "appQuery",
    "operationKind": "query",
    "text": "query appQuery(\n  $id: UUID!\n) {\n  getAboutYou(command: {userId: $id}) {\n    givenName\n    familyName\n    phoneNumber\n    linkedInProfile\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "fd2e9f0335b709b237230fc4e81763fc";

module.exports = ((node/*: any*/)/*: Query<
  appQuery$variables,
  appQuery$data,
>*/);
