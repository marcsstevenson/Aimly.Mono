// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useMarketEnquiryMutation as mutationType,
  MarketEnquiryModelInput,
  useMarketEnquiryMutation$data,
  useMarketEnquiryMutation$variables,
} from '__generated__/useMarketEnquiryMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useMarketEnquiryMutation($userId: UUID!, $marketEnquiryModel: MarketEnquiryModelInput!) {
    marketEnquiry(userId: $userId, marketEnquiryModel: $marketEnquiryModel) {
      error
    }
  }
`;

export default function useMarketEnquiryMutation() {
  const environment = useRelayEnvironment();

  const MarketEnquiry = (
    userIdInput: string,
    marketEnquiryModelInput: MarketEnquiryModelInput,
    onCompleted: (
      marketEnquiryModel: MarketEnquiryModelInput,
      response: useMarketEnquiryMutation$data
    ) => void
  ) => {
    const variables: useMarketEnquiryMutation$variables = {
      userId: userIdInput,
      marketEnquiryModel: marketEnquiryModelInput,
    };

    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: variables,
      onCompleted: (response) => {
        onCompleted(marketEnquiryModelInput, response);
      } /* Mutation completed */,
    });
  };

  return MarketEnquiry;
}
