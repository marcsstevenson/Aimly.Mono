/**
 * @generated SignedSource<<38cb54e6084cdeaee9b2e108cd3374bd>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type marketSearchQuery$variables = {||};
export type marketSearchQueryVariables = marketSearchQuery$variables;
export type marketSearchQuery$data = {|
  +userSearch: ?$ReadOnlyArray<?{|
    +id: any,
    +fullName: ?string,
    +pictureUrl: ?string,
  |}>,
|};
export type marketSearchQueryResponse = marketSearchQuery$data;
export type marketSearchQuery = {|
  variables: marketSearchQueryVariables,
  response: marketSearchQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "UserSearchResult",
    "kind": "LinkedField",
    "name": "userSearch",
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
        "name": "fullName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "pictureUrl",
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
    "name": "marketSearchQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "marketSearchQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "59fa8fec831e20fdec2a9aa340cf9019",
    "id": null,
    "metadata": {},
    "name": "marketSearchQuery",
    "operationKind": "query",
    "text": "query marketSearchQuery {\n  userSearch {\n    id\n    fullName\n    pictureUrl\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "3281b5c1b66677050da37de01c11f9e7";

module.exports = ((node/*: any*/)/*: Query<
  marketSearchQuery$variables,
  marketSearchQuery$data,
>*/);
