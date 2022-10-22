// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useLoginToMessagingMutation as mutationType,
  UserLoginModelInput,
  useLoginToMessagingMutation$data,
  useLoginToMessagingMutation$variables,
} from '__generated__/useLoginToMessagingMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useLoginToMessagingMutation($userId: UUID!, $model: UserLoginModelInput!) {
    loginToMessaging(userId: $userId, model: $model) {
      accessToken
      accessTokenExpiry
    }
  }
`;

export default function useLoginToMessagingMutation() {
  const environment = useRelayEnvironment();

  const LoginToMessaging = (
    userIdInput: string,
    loginToMessagingModelInput: UserLoginModelInput,
    onCompleted: (
      loginToMessagingModel: UserLoginModelInput,
      response: useLoginToMessagingMutation$data
    ) => void
  ) => {
    const variables: useLoginToMessagingMutation$variables = {
      userId: userIdInput,
      model: loginToMessagingModelInput,
    };

    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: variables,
      onCompleted: (response) => {
        onCompleted(loginToMessagingModelInput, response);
      } /* Mutation completed */,
    });
  };

  return LoginToMessaging;
}
