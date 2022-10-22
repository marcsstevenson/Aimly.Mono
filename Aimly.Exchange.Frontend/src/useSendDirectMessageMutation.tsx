// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useSendDirectMessageMutation as mutationType,
  SendDirectMessageCommandInput,
  useSendDirectMessageMutation$data,
} from '__generated__/useSendDirectMessageMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useSendDirectMessageMutation($command: SendDirectMessageCommandInput!) {
    sendDirectMessage(command: $command)
  }
`;

export default function useSendDirectMessageMutation() {
  const environment = useRelayEnvironment();

  const SendDirectMessage = (
    sendDirectMessageCommand: SendDirectMessageCommandInput,
    onCompleted: (response: useSendDirectMessageMutation$data) => void
  ) => {
    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: { command: sendDirectMessageCommand },
      onCompleted: (response) => {
        onCompleted(response);
      } /* Mutation completed */,
    });
  };

  return SendDirectMessage;
}
