import React, { useCallback, useContext } from 'react';
import { PrivateContext } from 'components/PrivateContext';
import useCreateAccountForEntityMutation from 'useCreateAccountForEntityMutation';
import { GetPathForPage } from 'components/shared/AppRoutes';

import {
  // GetAboutYouModelInput,
  useCreateAccountForEntityMutation$variables,
  useCreateAccountForEntityMutation$data,
} from '__generated__/useCreateAccountForEntityMutation.graphql';
import Pages from 'components/shared/Pages';

// The purpose of this component is to start the setup of the user's account profile
// We call the CreateAccountForEntity mutation
// and then redirect the user to the Account Provider's setup URL
const AccountsSetupStart = () => {
  const { checkedInUser } = useContext(PrivateContext);
  const CreateAccountForEntity = useCreateAccountForEntityMutation();

  const begin = useCallback(
    () => {
      // Get the account link for the account provider
      return CreateAccountForEntity(
        checkedInUser?.userId ?? '',
        null,
        GetPathForPage(Pages.AccountsSetupStart),
        GetPathForPage(Pages.AccountsSetupComplete),
        handleBeginCompleted
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [CreateAccountForEntity]

    // Redirect the user to the account provider's setup URL
  );

  // This is called once the SetAboutYou mutation has completed
  const handleBeginCompleted = (response: useCreateAccountForEntityMutation$data): void => {
    if (response.createAccountForEntity?.accountLink) {
      window.location.href = response.createAccountForEntity.accountLink;
    }
  };

  return (
    <div>
      <h1>Intro</h1>
      <div>AccountsSetupStart</div>
      <button className="form-next ml-3" onClick={begin}>
        Begin
      </button>
    </div>
  );
};

export default AccountsSetupStart;
