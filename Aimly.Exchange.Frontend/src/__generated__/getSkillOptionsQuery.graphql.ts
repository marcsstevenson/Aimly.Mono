/**
 * @generated SignedSource<<baa90f4a55026c7b8c8b4349a1330e14>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getSkillOptionsQuery$variables = {
  nameStartingWith?: string | null;
};
export type getSkillOptionsQueryVariables = getSkillOptionsQuery$variables;
export type getSkillOptionsQuery$data = {
  readonly getSkillOptions: ReadonlyArray<string | null> | null;
};
export type getSkillOptionsQueryResponse = getSkillOptionsQuery$data;
export type getSkillOptionsQuery = {
  variables: getSkillOptionsQueryVariables;
  response: getSkillOptionsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "nameStartingWith"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "nameStartingWith",
        "variableName": "nameStartingWith"
      }
    ],
    "kind": "ScalarField",
    "name": "getSkillOptions",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "getSkillOptionsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getSkillOptionsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "17d75ab13464d136b233b4f96f357424",
    "id": null,
    "metadata": {},
    "name": "getSkillOptionsQuery",
    "operationKind": "query",
    "text": "query getSkillOptionsQuery(\n  $nameStartingWith: String\n) {\n  getSkillOptions(nameStartingWith: $nameStartingWith)\n}\n"
  }
};
})();

(node as any).hash = "1c29696c2c76200b9b18b85175815802";

export default node;
