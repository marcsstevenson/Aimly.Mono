import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { PrivateContext } from 'components/PrivateContext';
import { useLazyLoadQuery, useQueryLoader } from 'react-relay/hooks';

import AccountsStatus from 'components/accounts/AccountsStatus';
import AccountsActivity from 'components/accounts/AccountsActivity';
import AccountsHeader from 'components/accounts/AccountsHeader';
import AppQuery, {
  companiesForAdministrationQuery,
  default as node,
  ProfileTypeOption,
} from '__generated__/companiesForAdministrationQuery.graphql';

import { AccountsOption } from 'components/accounts/AccountsOption';
import AccountsDetail from './AccountsDetail';

// The purpose of this component is to display a summary of the accounts
// for the user
// Also need to handle context of either the user or a company they have
// access to
const AccountsHome = () => {
  // Get all of the available contexts for the user
  // Check browser storage for the previously selected context
  // Give options to the accounts header with the selected context
  // Change context when the accounts header changes context
  const { userId, checkedInUser } = useContext(PrivateContext);
  //const [queryRef, loadQuery] = useQueryLoader<companiesForAdministrationQuery>(AppQuery, null);

  const [companiesForAdministration, setCompaniesForAdministration] = useState<ReadonlyArray<{
    readonly id: any;
    readonly profileId: any;
    readonly name: string | null;
    readonly profilePictureUrl: string | null;
    readonly type: ProfileTypeOption;
  } | null> | null>(null);
  const accountsOptions = useMemo<AccountsOption[]>(() => {
    let allOptions: AccountsOption[] = [];

    // Always add the currently checked in user
    if (checkedInUser) {
      const userOption: AccountsOption = {
        id: checkedInUser.userId,
        name: checkedInUser.fullName ?? '',
        profilePictureUrl: checkedInUser.pictureUrl ?? '',
        type: 'PERSONAL',
      };

      allOptions.push(userOption);
    }

    // Add any companies that the user has access to
    if (companiesForAdministration && companiesForAdministration.length > 0) {
      const companyOptions: AccountsOption[] = companiesForAdministration.map((company) => {
        return {
          id: company?.profileId,
          name: company?.name ?? '',
          profilePictureUrl: company?.profilePictureUrl ?? '',
          type: company?.type ?? 'COMPANY',
        };
      });

      allOptions = allOptions.concat(companyOptions);
    }

    return allOptions;
  }, [companiesForAdministration]);

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<companiesForAdministrationQuery>(
    node,
    {
      userId: userId,
    },
    // Ideally we could use commitLocalUpdate to update the relay cache when setAboutYouMutation is called
    // However, for now, we'll simply always refresh this query when the component is mounted
    {
      fetchPolicy: 'network-only',
    }
  );

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // console.log('Updated data.companiesForAdministration');
    setCompaniesForAdministration(data.companiesForAdministration);
    setDataLoaded(true);
  }, [data, data.companiesForAdministration]);

  return (
    <>
      {checkedInUser && accountsOptions && dataLoaded && (
        <AccountsDetail accountsOptions={accountsOptions} checkedInUser={checkedInUser} />
      )}
    </>
  );
};

export default AccountsHome;
