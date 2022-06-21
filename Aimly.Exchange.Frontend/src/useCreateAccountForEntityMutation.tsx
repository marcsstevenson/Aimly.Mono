// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useCreateAccountForEntityMutation as mutationType,
  useCreateAccountForEntityMutation$data,
  useCreateAccountForEntityMutation$variables,
} from '__generated__/useCreateAccountForEntityMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useCreateAccountForEntityMutation(
    $userId: UUID!
    $companyProfileId: UUID
    $refreshUrlPath: String!
    $returnUrlPath: String!
  ) {
    createAccountForEntity(
      userId: $userId
      companyProfileId: $companyProfileId
      refreshUrlPath: $refreshUrlPath
      returnUrlPath: $returnUrlPath
    ) {
      accountLink
      accountId
      errorMessage
      isSuccessful
    }
  }
`;

export default function useCreateAccountForEntityMutation() {
  const environment = useRelayEnvironment();

  const CreateAccountForEntity = (
    userId: string,
    companyProfileId: string | null,
    refreshUrlPath: string,
    returnUrlPath: string,
    onCompleted: (response: useCreateAccountForEntityMutation$data) => void
  ) => {
    const variables: useCreateAccountForEntityMutation$variables = {
      userId: userId,
      companyProfileId: companyProfileId,
      refreshUrlPath: refreshUrlPath,
      returnUrlPath: returnUrlPath,
    };

    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: variables,
      onCompleted: (response) => {
        onCompleted(response);
      } /* Mutation completed */,
    });
  };

  return CreateAccountForEntity;
}
