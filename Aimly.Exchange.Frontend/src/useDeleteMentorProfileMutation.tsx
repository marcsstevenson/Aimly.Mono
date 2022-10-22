// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useDeleteMentorProfileMutation as mutationType,
  useDeleteMentorProfileMutationVariables,
  useDeleteMentorProfileMutation$data,
} from '__generated__/useDeleteMentorProfileMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useDeleteMentorProfileMutation($userId: UUID!, $profileId: UUID!) {
    deleteMentorProfile(userId: $userId, profileId: $profileId) {
      deletedProfileId
    }
  }
`;

export default function useDeleteMentorProfileMutation() {
  const environment = useRelayEnvironment();

  const DeleteMentorProfile = (
    variables: useDeleteMentorProfileMutationVariables,
    onCompleted: (response: useDeleteMentorProfileMutation$data) => void
  ) => {
    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: variables,
      onCompleted: (response) => {
        onCompleted(response);
      } /* Mutation completed */,
    });
  };

  return DeleteMentorProfile;
}
