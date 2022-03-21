// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useMarketContactMutation as mutationType,
  MarketContactModelInput,
  useMarketContactMutation$data,
  useMarketContactMutation$variables,
} from '__generated__/useMarketContactMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useMarketContactMutation($userId: UUID!, $marketContactModel: MarketContactModelInput!) {
    marketContact(userId: $userId, marketContactModel: $marketContactModel) {
      error
    }
  }
`;

export default function useMarketContactMutation() {
  const environment = useRelayEnvironment();

  const MarketContact = (
    userIdInput: string,
    marketContactModelInput: MarketContactModelInput,
    onCompleted: (
      marketContactModel: MarketContactModelInput,
      response: useMarketContactMutation$data
    ) => void
  ) => {
    const variables: useMarketContactMutation$variables = {
      userId: userIdInput,
      marketContactModel: marketContactModelInput,
    };

    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: variables,
      onCompleted: (response) => {
        onCompleted(marketContactModelInput, response);
      } /* Mutation completed */,
    });
  };

  return MarketContact;
}
