// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useSetPersonalProfileMutation as mutationType,
  SetPersonalProfileCommandInput,
  GetPersonalProfileModelInput,
  useSetPersonalProfileMutation$data,
} from '__generated__/useSetPersonalProfileMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useSetPersonalProfileMutation($input: SetPersonalProfileCommandInput!) {
    setPersonalProfile(input: $input) {
      updatedPersonalProfileId
    }
  }
`;

export default function useSetPersonalProfileMutation() {
  const environment = useRelayEnvironment();

  const SetPersonalProfile = (
    getPersonalProfileModel: GetPersonalProfileModelInput,
    onCompleted: (response: useSetPersonalProfileMutation$data) => void
  ) => {
    const input: SetPersonalProfileCommandInput = {
      getPersonalProfileModel,
    };

    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: { input },
      onCompleted: (response) => {
        onCompleted(response);
      } /* Mutation completed */,
    });
  };

  return SetPersonalProfile;
}
