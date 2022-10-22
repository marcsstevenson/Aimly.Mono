// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useSetAboutYouMutation as mutationType,
  SetAboutYouCommandInput,
  GetAboutYouModelInput,
  useSetAboutYouMutation$data,
} from '__generated__/useSetAboutYouMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useSetAboutYouMutation($input: SetAboutYouCommandInput!) {
    setAboutYou(input: $input) {
      updatedPersonalProfileId
      updatedCompanyProfileId
    }
  }
`;

export default function useSetAboutYouMutation() {
  const environment = useRelayEnvironment();

  const SetAboutYou = (
    inviteCode: string | null,
    getAboutYouModel: GetAboutYouModelInput,
    onCompleted: (
      response: useSetAboutYouMutation$data,
      companyName: string | null | undefined
    ) => void
  ) => {
    const input: SetAboutYouCommandInput = {
      inviteCode,
      getAboutYouModel,
    };

    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: { input },
      onCompleted: (response) => {
        onCompleted(response, getAboutYouModel.companyName);
      } /* Mutation completed */,
    });
  };

  return SetAboutYou;
}
