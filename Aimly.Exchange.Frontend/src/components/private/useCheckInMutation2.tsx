// The purpose of this file is to provide user checkin functionality via a relay mutation

import { commitMutation } from 'react-relay';
import { useState } from 'react';
import {
  checkInMutation,
  AuthProfileInput,
} from '__generated__/checkInMutation.graphql';
import { checkInMutation as def } from 'checkInMutation';
import RelayEnvironment from 'RelayEnvironment';

export default function useCheckInMutation2() {
  const [checkedInUserId, setResponse] = useState<any>();
//checkInMutation$data
  const checkIn = (input: AuthProfileInput) => {
    return commitMutation<checkInMutation>(RelayEnvironment, {
      mutation: def,
      variables: { input },
      onCompleted: (response) => {
        console.log("checkInMutation completed");
        setResponse(response.checkIn);
        // checkInUser(response.checkIn);
      } /* Mutation completed */,
      onError: (error) => {} /* Mutation errored */,
    });
  };

  return { checkIn, checkedInUserId };
}
