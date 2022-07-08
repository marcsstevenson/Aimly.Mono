import React, { Suspense, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { CheckedInUserModel, PrivateContext } from 'components/PrivateContext';
import { useLazyLoadQuery, useQueryLoader } from 'react-relay/hooks';

import AccountsStatus from 'components/accounts/AccountsStatus';
import AccountsActivity from 'components/accounts/AccountsActivity';
import AccountsHeader from 'components/accounts/AccountsHeader';
import { LoadingArea } from 'components/shared/LoadingArea';

import AccountsStatusQuery, {
  getAccountsStatusQuery,
  getAccountsStatusQuery$variables,
} from '__generated__/getAccountsStatusQuery.graphql';
import { AccountsOption } from 'components/accounts/AccountsOption';
import { useNavigate, useParams } from 'react-router-dom';

interface props {
  accountsOptions: AccountsOption[];
  checkedInUser: CheckedInUserModel;
}

const AccountsDetail = ({ accountsOptions, checkedInUser }: props) => {
  const profileIdStorageItemName = 'accounts-default-profileId';
  const { profileId } = useParams();
  const navigate = useNavigate();

  // Use the profileId from browser storage if it exists to match from items in our list of options
  const selectedProfileFromBrowserStorage = useMemo<AccountsOption | null>(() => {
    const localStorageValue = localStorage.getItem(profileIdStorageItemName);

    if (localStorageValue && localStorageValue.length > 0) {
      const match = accountsOptions.find((option) => option.id === localStorageValue);

      if (match) {
        return match;
      }
    }

    return null;
  }, [profileId]);

  // Use the profileId from the URL if it exists to match from items in our list of options
  const selectedProfileFromParam = useMemo<AccountsOption | null>(() => {
    if (profileId && profileId.length > 0) {
      const match = accountsOptions.find((option) => option.id === profileId);

      if (match) {
        return match;
      }
    }

    return null;
  }, [profileId]);

  // Ensure that we have a default option to use
  const defaultSelectedProfile: AccountsOption = useMemo(() => {
    // console.log('accountsOptions', accountsOptions);

    // Try to use the query param if it exists
    let match: AccountsOption | null = selectedProfileFromParam;

    // Try to use browser storage value if it exists
    if (!match) {
      match = selectedProfileFromBrowserStorage;
    }

    // Return a default profileId as the first option if none is provided prior
    if (!match) {
      match = accountsOptions[0];
    }

    return match;
  }, [profileId]);

  const [displayPage, setDisplayPage] = useState(false);

  const navigateToAccountAddress = (accountsOption: AccountsOption) => {
    navigate(`/accounts/home/${accountsOption.id}`);
  };

  // Do we need to update our URL?
  useEffect(() => {
    if (!profileId || profileId.length === 0) {
      // navigate(`/accounts/home/${defaultSelectedProfile.id}`);
      navigateToAccountAddress(defaultSelectedProfile);
    } else {
      setDisplayPage(true);
    }
  }, [defaultSelectedProfile, profileId, navigate]);

  const [selectedAccountsOption, setSelectedAccountsOption] =
    useState<AccountsOption>(defaultSelectedProfile);

  const loadAccount = (accountsOption: AccountsOption) => {
    console.log('loadAccount', accountsOption.name);
    const variables =
      // Use the company id if the account type is company
      accountsOption.type == 'COMPANY'
        ? { userId: checkedInUser?.userId, companyProfileId: accountsOption.id }
        : { userId: accountsOption.id };

    setSelectedAccountsOption(accountsOption);

    // Remember for next time
    localStorage.setItem(profileIdStorageItemName, accountsOption.id);
    updateAccountStatus(variables);
  };

  useEffect(() => {
    loadAccount(defaultSelectedProfile);
  }, [profileId]);

  // Get the status of the selected account
  const [getAccountsStatusQueryRef, getAccountsStatusQuery] =
    useQueryLoader<getAccountsStatusQuery>(AccountsStatusQuery, null);

  const updateAccountStatus = useCallback(
    (variables: getAccountsStatusQuery$variables) => {
      // Load the query again using the same original variables.
      // Calling loadQuery will update the value of queryRef.
      // and this will update the usePreloadedQuery value for the MarketSearchResults
      // component which will in-turn trigger that component to rerender.
      getAccountsStatusQuery(variables, {
        fetchPolicy: 'network-only',
      });
    },
    [getAccountsStatusQuery]
  );

  return (
    <>
      {displayPage && (
        <div className="flex-1 pb-8">
          {accountsOptions && accountsOptions.length > 0 && (
            <AccountsHeader
              selectedAccountOptionId={selectedAccountsOption.id}
              accountsOptions={accountsOptions}
              accountChange={navigateToAccountAddress}
              profilePictureUrl={selectedAccountsOption?.profilePictureUrl}
            />
          )}

          <div className="mt-8">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <Suspense fallback={<LoadingArea title="Loading..." fullHeight={false} />}>
                {getAccountsStatusQueryRef && selectedAccountsOption && (
                  <AccountsStatus
                    accountsOption={selectedAccountsOption}
                    getAccountsStatusRef={getAccountsStatusQueryRef}
                  />
                )}
              </Suspense>
            </div>
            {/* <AccountsActivity /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default AccountsDetail;
