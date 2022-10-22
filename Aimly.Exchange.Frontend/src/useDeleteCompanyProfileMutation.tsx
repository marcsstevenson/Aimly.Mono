// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useDeleteCompanyProfileMutation as mutationType,
  useDeleteCompanyProfileMutationVariables,
  useDeleteCompanyProfileMutation$data,
} from '__generated__/useDeleteCompanyProfileMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useDeleteCompanyProfileMutation($userId: UUID!, $profileId: UUID!) {
    deleteCompanyProfile(userId: $userId, profileId: $profileId) {
      deletedProfileId
    }
  }
`;

export default function useDeleteCompanyProfileMutation() {
  const environment = useRelayEnvironment();

  const DeleteCompanyProfile = (
    variables: useDeleteCompanyProfileMutationVariables,
    onCompleted: (response: useDeleteCompanyProfileMutation$data) => void
  ) => {
    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: variables,
      onCompleted: (response) => {
        onCompleted(response);
      } /* Mutation completed */,
    });
  };

  return DeleteCompanyProfile;
}
