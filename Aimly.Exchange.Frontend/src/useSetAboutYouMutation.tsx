// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { useMutation } from "react-relay";
import { useCallback } from "react";
import {
  SetAboutYouCommandInput,
  GetAboutYouModelInput,
  useSetAboutYouMutation$data,
} from "__generated__/useSetAboutYouMutation.graphql";

import graphql from 'babel-plugin-relay/macro';

const mutation = graphql`
  mutation useSetAboutYouMutation($input: SetAboutYouCommandInput!) {
    setAboutYou(input: $input){
      updatedPersonalProfileId
      updatedCompanyProfileId
    }
  }
`;

function getOptimisticResponse(
  getAboutYouModel: GetAboutYouModelInput
): useSetAboutYouMutation$data {
  return {
    setAboutYou: {
      updatedPersonalProfileId: "",
      updatedCompanyProfileId: "",
    }
  };
}

export default function useSetAboutYouMutation() {
  const [commit] = useMutation(mutation);
  return [
    useCallback(
      (getAboutYouModel: GetAboutYouModelInput) => {
        const input: SetAboutYouCommandInput = {
          getAboutYouModel
        };

        return commit({
          variables: { input },
          optimisticResponse: getOptimisticResponse(getAboutYouModel)
        });
      },
      [commit]
    )
  ];
}
