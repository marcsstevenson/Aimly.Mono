import React, { useContext } from 'react';

import ProfileDropdown from './ProfileDropdown';
import QuickSearch from './QuickSearch'

import {
  BellIcon,
  MenuAlt1Icon,
} from '@heroicons/react/outline';

import DarkModeSelector from 'components/DarkModeSelector';
import { PrivateContext } from './PrivateContext';

const TopBar = (): JSX.Element => {
  const { setSidebarOpen } = useContext(PrivateContext);

  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <button
        type="button"
        className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      {/* Search bar */}
      <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <QuickSearch />
        <div className="ml-4 flex items-center md:ml-6">
          <button
            type="button"
            className="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          <DarkModeSelector />

          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
