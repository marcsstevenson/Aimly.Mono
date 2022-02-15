// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useSetMentorProfileMutation as mutationType,
  SetMentorProfileCommandInput,
  GetMentorProfileModelInput,
  useSetMentorProfileMutation$data,
} from '__generated__/useSetMentorProfileMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useSetMentorProfileMutation($input: SetMentorProfileCommandInput!) {
    setMentorProfile(input: $input) {
      updatedMentorProfileId
    }
  }
`;

export default function useSetMentorProfileMutation() {
  const environment = useRelayEnvironment();

  const SetMentorProfile = (
    getMentorProfileModel: GetMentorProfileModelInput,
    onCompleted: (response: useSetMentorProfileMutation$data) => void
  ) => {
    const input: SetMentorProfileCommandInput = {
      getMentorProfileModel,
    };

    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: { input },
      onCompleted: (response) => {
        onCompleted(response);
      } /* Mutation completed */,
    });
  };

  return SetMentorProfile;
}
