// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useSetTheProblemMutation as mutationType,
  SetTheProblemCommandInput,
  GetTheProblemModelInput,
  useSetTheProblemMutation$data,
} from '__generated__/useSetTheProblemMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useSetTheProblemMutation($input: SetTheProblemCommandInput!) {
    setTheProblem(input: $input) {
      updatedCompanyProfileId
    }
  }
`;

export default function useSetTheProblemMutation() {
  const environment = useRelayEnvironment();

  const SetTheProblem = (
    getTheProblemModel: GetTheProblemModelInput,
    onCompleted: (response: useSetTheProblemMutation$data) => void
  ) => {
    const input: SetTheProblemCommandInput = {
      getTheProblemModel,
    };

    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: { input },
      onCompleted: (response) => {
        onCompleted(response);
      } /* Mutation completed */,
    });
  };

  return SetTheProblem;
}
