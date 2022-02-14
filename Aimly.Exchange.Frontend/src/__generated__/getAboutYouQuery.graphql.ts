/**
 * @generated SignedSource<<3bbc8aaebf8670e778996aee34a290fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getAboutYouQuery$variables = {
  id: any;
  companyProfileId?: any | null;
};
export type getAboutYouQueryVariables = getAboutYouQuery$variables;
export type getAboutYouQuery$data = {
  readonly getAboutYou: {
    readonly userId: any | null;
    readonly about: string | null;
    readonly language: string | null;
    readonly personalProfilePictureUrl: string | null;
    readonly timezone: string | null;
    readonly givenName: string | null;
    readonly familyName: string | null;
    readonly phoneNumber: string | null;
    readonly linkedInProfile: string | null;
    readonly companyProfileId: any | null;
    readonly companyProfilePictureUrl: string | null;
    readonly companyName: string | null;
    readonly website: string | null;
    readonly numberOfFounders: number | null;
    readonly floor: string | null;
    readonly streetNumber: string | null;
    readonly streetName: string | null;
    readonly addressLocality: string | null;
    readonly addressCity: string | null;
    readonly addressRegion: string | null;
    readonly addressCountry: string | null;
    readonly postalCode: string | null;
    readonly postOfficeBoxNumber: string | null;
  } | null;
};
export type getAboutYouQueryResponse = getAboutYouQuery$data;
export type getAboutYouQuery = {
  variables: getAboutYouQueryVariables;
  response: getAboutYouQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "companyProfileId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "companyProfileId",
            "variableName": "companyProfileId"
          },
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
        "name": "userId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "about",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "language",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "personalProfilePictureUrl",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "timezone",
        "storageKey": null
      },
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "companyProfileId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "companyProfilePictureUrl",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "companyName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "website",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "numberOfFounders",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "floor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "streetNumber",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "streetName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "addressLocality",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "addressCity",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "addressRegion",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "addressCountry",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "postalCode",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "postOfficeBoxNumber",
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
    "name": "getAboutYouQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "getAboutYouQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "40cb9f45ad763274f8b9b95819b269a5",
    "id": null,
    "metadata": {},
    "name": "getAboutYouQuery",
    "operationKind": "query",
    "text": "query getAboutYouQuery(\n  $id: UUID!\n  $companyProfileId: UUID\n) {\n  getAboutYou(command: {userId: $id, companyProfileId: $companyProfileId}) {\n    userId\n    about\n    language\n    personalProfilePictureUrl\n    timezone\n    givenName\n    familyName\n    phoneNumber\n    linkedInProfile\n    companyProfileId\n    companyProfilePictureUrl\n    companyName\n    website\n    numberOfFounders\n    floor\n    streetNumber\n    streetName\n    addressLocality\n    addressCity\n    addressRegion\n    addressCountry\n    postalCode\n    postOfficeBoxNumber\n  }\n}\n"
  }
};
})();

(node as any).hash = "9f72a819ba529e5f338ef46952f806da";

export default node;
