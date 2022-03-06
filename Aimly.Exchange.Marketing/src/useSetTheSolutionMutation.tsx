// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useSetTheSolutionMutation as mutationType,
  SetTheSolutionCommandInput,
  GetTheSolutionModelInput,
  useSetTheSolutionMutation$data,
} from '__generated__/useSetTheSolutionMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useSetTheSolutionMutation($input: SetTheSolutionCommandInput!) {
    setTheSolution(input: $input) {
      updatedCompanyProfileId
    }
  }
`;

export default function useSetTheSolutionMutation() {
  const environment = useRelayEnvironment();

  const SetTheSolution = (
    getTheSolutionModel: GetTheSolutionModelInput,
    onCompleted: (response: useSetTheSolutionMutation$data) => void
  ) => {
    const input: SetTheSolutionCommandInput = {
      getTheSolutionModel,
    };

    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: { input },
      onCompleted: (response) => {
        onCompleted(response);
      } /* Mutation completed */,
    });
  };

  return SetTheSolution;
}
