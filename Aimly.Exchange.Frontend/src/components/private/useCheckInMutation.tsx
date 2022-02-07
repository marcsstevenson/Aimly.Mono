// The purpose of this file is to provide a hook which updates the About You values via a mutation
// Refer here as the template used for this hook:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/useRenameTodoMutation.ts
// An example of this template's use can be found here:
// https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/Todo.tsx:470-491

import { useMutation } from "react-relay";
import { useCallback } from "react";
import {
  AuthProfileInput,
  checkInMutation$data,
} from "__generated__/checkInMutation.graphql";
import { checkInMutation } from "checkInMutation"

function getOptimisticResponse(
  input: AuthProfileInput
): checkInMutation$data {
  return {
    checkIn: ""
  };
}

export default function useCheckInMutation() {
  const [commit] = useMutation(checkInMutation);
  return [
    useCallback(
      (input: AuthProfileInput) => {
        return commit({
          variables: { input },
          optimisticResponse: getOptimisticResponse(input)
        });
      },
      [commit]
    )
  ];
}
