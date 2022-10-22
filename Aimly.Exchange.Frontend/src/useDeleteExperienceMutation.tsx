// The purpose of this file is to provide a hook which deletes a experience record via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useDeleteExperienceMutation as mutationType,
  useDeleteExperienceMutationVariables,
  useDeleteExperienceMutation$data,
} from '__generated__/useDeleteExperienceMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useDeleteExperienceMutation($userId: UUID!, $id: UUID!) {
    deleteExperience(userId: $userId, id: $id) {
      deletedId
    }
  }
`;

export default function useDeleteExperienceMutation() {
  const environment = useRelayEnvironment();

  const DeleteExperience = (
    variables: useDeleteExperienceMutationVariables,
    onCompleted: (response: useDeleteExperienceMutation$data) => void
  ) => {
    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: variables,
      onCompleted: (response) => {
        onCompleted(response);
      } /* Mutation completed */,
    });
  };

  return DeleteExperience;
}
