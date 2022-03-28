// The purpose of this file is to provide user checkin functionality via a relay mutation

import { commitMutation, useRelayEnvironment } from 'react-relay';
import { useState } from 'react';
import { checkInMutation, AuthProfileInput } from '__generated__/checkInMutation.graphql';
import { checkInMutation as def } from 'checkInMutation';

interface CheckedInModel {
  userId: string;
  publicId: string;
}

export default function useCheckInMutation2() {
  const [checkedInModel, setResponse] = useState<CheckedInModel | null>(null);
  const environment = useRelayEnvironment();

  const checkIn = (input: AuthProfileInput) => {
    return commitMutation<checkInMutation>(environment, {
      mutation: def,
      variables: { input },
      onCompleted: (response) => {
        setResponse(response.checkIn2);
      } /* Mutation completed */,
      onError: (error) => {} /* Mutation errored */,
    });
  };

  return { checkIn, checkedInModel };
}
