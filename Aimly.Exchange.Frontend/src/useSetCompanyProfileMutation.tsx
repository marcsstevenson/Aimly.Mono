// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { commitMutation, useRelayEnvironment } from 'react-relay';
import {
  useSetCompanyProfileMutation as mutationType,
  SetCompanyProfileCommandInput,
  GetCompanyProfileModelInput,
  useSetCompanyProfileMutation$data,
} from '__generated__/useSetCompanyProfileMutation.graphql';

import graphql from 'babel-plugin-relay/macro';

const def = graphql`
  mutation useSetCompanyProfileMutation($input: SetCompanyProfileCommandInput!) {
    setCompanyProfile(input: $input) {
      updatedCompanyProfileId
    }
  }
`;

export default function useSetCompanyProfileMutation() {
  const environment = useRelayEnvironment();

  const SetCompanyProfile = (
    userId: string,
    getCompanyProfileModel: GetCompanyProfileModelInput,
    onCompleted: (response: useSetCompanyProfileMutation$data) => void
  ) => {
    const input: SetCompanyProfileCommandInput = {
      userId,
      getCompanyProfileModel,
    };

    return commitMutation<mutationType>(environment, {
      mutation: def,
      variables: { input },
      onCompleted: (response) => {
        onCompleted(response);
      } /* Mutation completed */,
    });
  };

  return SetCompanyProfile;
}
