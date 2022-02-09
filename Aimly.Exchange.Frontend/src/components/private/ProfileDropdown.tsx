import React, { Fragment } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { NavLink } from 'react-router-dom';
import { GetPathForPage, Pages } from 'components/shared/AppRoutes';

const ProfileDropdown = (): JSX.Element => {
  const { user, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <>
      {/* Profile dropdown */}
      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-100 dark:hover:bg-gray-800">
            <img className="h-8 w-8 rounded-full" src={user?.picture} alt={user?.name} />
            <span className="hidden ml-3 text-gray-700 dark:text-gray-200 text-sm font-medium lg:block">
              <span className="sr-only">Open user menu for </span>
              {user?.name}
            </span>
            <ChevronDownIcon
              className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none
            bg-white dark:bg-gray-700"
          >
            <Menu.Item>
              <NavLink
                to={{ pathname: GetPathForPage(Pages.Profile) }}
                className="font-medium block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-600"
              >
                Your Profile
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink
                to={{ pathname: GetPathForPage(Pages.Settings) }}
                className="font-medium block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-600"
              >
                Settings
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <div
                onClick={() => logoutWithRedirect()}
                className="inline-flex w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-600 focus:outline-none cursor-pointer"
              >
                Sign out
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default ProfileDropdown;
