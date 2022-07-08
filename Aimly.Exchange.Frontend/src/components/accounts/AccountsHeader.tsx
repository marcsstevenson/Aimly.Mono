import React, { useContext, useMemo, useState } from 'react';
import { PrivateContext } from 'components/PrivateContext';
import { CheckCircleIcon, OfficeBuildingIcon } from '@heroicons/react/solid';
import { AccountsOption } from 'components/accounts/AccountsOption';
import { classNames } from 'utils/classNames';

interface props {
  accountChange: (accountsOption: AccountsOption) => void;
  accountsOptions: AccountsOption[];
  selectedAccountOptionId: string;
  // queryRef: PreloadedQuery<companiesForAdministrationQuery>;
  profilePictureUrl: string | undefined;
}

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Payments', href: '#', current: false },
  { name: 'Balances', href: '#', current: false },
  { name: 'Customers', href: '#', current: false },
];

const AccountsHeader = ({
  selectedAccountOptionId,
  accountsOptions,
  accountChange,
  profilePictureUrl,
}: props) => {
  const { user, checkedInUser } = useContext(PrivateContext);

  const selectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;

    // Get the matching account option for the Id
    const match = accountsOptions.find((element) => {
      return element.id == selectedId;
    });

    if (match) {
      accountChange(match);
    }
  };

  const displayImage = useMemo(() => {
    if (profilePictureUrl && profilePictureUrl.length > 0) return profilePictureUrl;

    // console.log('user?.profilePictureUrl', user?.profilePictureUrl);

    return checkedInUser?.pictureUrl ?? '';
  }, [profilePictureUrl, checkedInUser?.pictureUrl]);

  return (
    <div className="bg-white shadow dark:bg-gray-700">
      <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
        <div className="py-6 md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            {/* Profile */}
            <div className="flex items-center">
              <img className="hidden h-16 w-16 rounded-full sm:block" src={displayImage} alt="" />
              <div>
                <div className="flex items-center">
                  <img className="h-16 w-16 rounded-full sm:hidden" src={displayImage} alt="" />
                  <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 dark:text-gray-50 sm:truncate sm:leading-9">
                    Accounts Home
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
            <label className="form-label mt-3" htmlFor="accountsOptions">
              Account
            </label>
            <select
              id="accountsOptions"
              className="form-input w-44"
              value={selectedAccountOptionId}
              // onChange={selectionChange}
              onChange={(event) => {
                //setSelectedAccountsOption(event.target.value);
                selectionChange(event);
              }}
            >
              {accountsOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="grid grid-cols-3 gap-8 px-4 py-2 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
          {/* Left nav */}
          <div className="block">
            <nav className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-secondary-400' : 'text-primary-100',
                    'rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountsHeader;
