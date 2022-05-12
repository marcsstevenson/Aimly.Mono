// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useSetUserSettingsMutation as mutationType,
  SetUserSettingsCommandInput,
  useSetUserSettingsMutation$data,
} from '__generated__/useSetUserSettingsMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useSetUserSettingsMutation($command: SetUserSettingsCommandInput!) {
    setUserSettings(command: $command) {
      userPictureUrlUpdated
      userEmailUpdated
      personalProfileUpdated
    }
  }
`;

export default function useSetUserSettingsMutation() {
  const environment = useRelayEnvironment();

  const SetUserSettings = (
    command: SetUserSettingsCommandInput,
    onCompleted: (response: useSetUserSettingsMutation$data) => void
  ) => {
    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: { command },
      onCompleted: (response) => {
        onCompleted(response);
      } /* Mutation completed */,
    });
  };

  return SetUserSettings;
}
