// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useSetExpertProfileMutation as mutationType,
  SetExpertProfileCommandInput,
  GetExpertProfileModelInput,
  useSetExpertProfileMutation$data,
} from '__generated__/useSetExpertProfileMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useSetExpertProfileMutation($input: SetExpertProfileCommandInput!) {
    setExpertProfile(input: $input) {
      updatedExpertProfileId
    }
  }
`;

export default function useSetExpertProfileMutation() {
  const environment = useRelayEnvironment();

  const SetExpertProfile = (
    getExpertProfileModel: GetExpertProfileModelInput,
    onCompleted: (response: useSetExpertProfileMutation$data) => void
  ) => {
    const input: SetExpertProfileCommandInput = {
      getExpertProfileModel,
    };

    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: { input },
      onCompleted: (response) => {
        onCompleted(response);
      } /* Mutation completed */,
    });
  };

  return SetExpertProfile;
}
