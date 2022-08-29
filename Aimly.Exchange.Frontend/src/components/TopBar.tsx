import React, { useContext } from 'react';

import ProfileDropdown from './ProfileDropdown';
import QuickSearch from './QuickSearch';

import { Bars3Icon } from '@heroicons/react/24/outline';

import DarkModeSelector from 'components/DarkModeSelector';
import { PrivateContext } from './PrivateContext';

const TopBar = (): JSX.Element => {
  const { setSidebarOpen } = useContext(PrivateContext);

  return (
    <div className="relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <button
        type="button"
        className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      {/* Search bar */}
      <div className="flex flex-1 justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
        <QuickSearch />
        <div className="ml-4 flex items-center md:ml-2">
          {/* Commented out notifications UI until implemented */}
          {/* <button
            type="button"
            className="focus:ring-secondary-500 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-gray-800"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button> */}

          <DarkModeSelector />

          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
