import React, { useContext } from 'react';
import { PrivateContext } from 'components/PrivateContext';
import AccountBalances from 'components/accounts/AccountBalances';
import AccountActivity from 'components/accounts/AccountActivity';
import AccountsHeader from 'components/accounts/AccountsHeader';

// The purpose of this component is to display a summary of the accounts
// for the user
// Also need to handle context of either the user or a company they have
// access to
const AccountsHome = () => {
  // Get all of the available contexts for the user
  // Check browser storage for the previously selected context
  // Give options to the accounts header with the selected context
  // Change context when the accounts header changes context
  const contextChange = (context: string) => {};

  return (
    <div className="flex-1 pb-8">
      <AccountsHeader contextChange={contextChange} />

      <div className="mt-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-50">
            Accounts Home
          </h2>
          <AccountBalances />
        </div>
        <AccountActivity />
      </div>
    </div>
  );
};

export default AccountsHome;
