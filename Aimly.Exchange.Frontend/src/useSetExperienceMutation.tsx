// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useSetExperienceMutation as mutationType,
  ExperienceModelInput,
  useSetExperienceMutation$data,
  useSetExperienceMutation$variables,
} from '__generated__/useSetExperienceMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useSetExperienceMutation($userId: UUID!, $experienceModel: ExperienceModelInput!) {
    setExperience(userId: $userId, experienceModel: $experienceModel) {
      updatedExperienceId
    }
  }
`;

export default function useSetExperienceMutation() {
  const environment = useRelayEnvironment();

  const SetExperience = (
    userIdInput: string,
    experienceModelInput: ExperienceModelInput,
    onCompleted: (
      experienceModel: ExperienceModelInput,
      response: useSetExperienceMutation$data
    ) => void
  ) => {
    const variables: useSetExperienceMutation$variables = {
      userId: userIdInput,
      experienceModel: experienceModelInput,
    };

    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: variables,
      onCompleted: (response) => {
        onCompleted(experienceModelInput, response);
      } /* Mutation completed */,
    });
  };

  return SetExperience;
}
