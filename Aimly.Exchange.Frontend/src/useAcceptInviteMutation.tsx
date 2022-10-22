// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useAcceptInviteMutation as mutationType,
  InviteCommandInput,
  useAcceptInviteMutation$data,
} from '__generated__/useAcceptInviteMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useAcceptInviteMutation($input: InviteCommandInput!) {
    acceptInvite(input: $input) {
      success
      companyName
    }
  }
`;

export default function useAcceptInviteMutation() {
  const environment = useRelayEnvironment();

  const AcceptInvite = (
    inviteCommandInput: InviteCommandInput,
    onCompleted: (response: useAcceptInviteMutation$data) => void
  ) => {
    const input = inviteCommandInput;

    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: { input },
      onCompleted: (response) => {
        onCompleted(response);
      } /* Mutation completed */,
    });
  };

  return AcceptInvite;
}
