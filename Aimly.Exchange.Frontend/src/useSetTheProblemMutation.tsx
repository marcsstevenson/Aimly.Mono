// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { useMutation } from "react-relay";
import { useCallback } from "react";
import {
  SetTheProblemCommandInput,
  GetTheProblemModelInput,
  useSetTheProblemMutation$data,
} from "__generated__/useSetTheProblemMutation.graphql";

import graphql from 'babel-plugin-relay/macro';

const mutation = graphql`
  mutation useSetTheProblemMutation($input: SetTheProblemCommandInput!) {
    setTheProblem(input: $input){
      updatedCompanyProfileId
    }
  }
`;

function getOptimisticResponse(
  getTheProblemModel: GetTheProblemModelInput
): useSetTheProblemMutation$data {
  return {
    setTheProblem: {
      updatedCompanyProfileId: "",
    }
  };
}

export default function useSetTheProblemMutation() {
  const [commit] = useMutation(mutation);
  return [
    useCallback(
      (getTheProblemModel: GetTheProblemModelInput) => {
        const input: SetTheProblemCommandInput = {
          getTheProblemModel
        };

        return commit({
          variables: { input },
          optimisticResponse: getOptimisticResponse(getTheProblemModel)
        });
      },
      [commit]
    )
  ];
}
