// The purpose of this component is to provide a dropdown menu for the user
// within the nav bar

import React, { useContext, Fragment } from 'react';
import Pages from 'components/shared/Pages';
import { useAuth0 } from '@auth0/auth0-react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { NavLink } from 'react-router-dom';
import { GetPathForPage } from 'components/shared/AppRoutes';
import { getPersonalProfileEditUrl } from 'components/profiles/UrlBuilder';
import { PrivateContext } from 'components/PrivateContext';

const ProfileDropdown = (): JSX.Element => {
  const { checkedInUser } = useContext(PrivateContext);
  const { user, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <>
      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:hover:bg-gray-800 lg:rounded-md lg:p-2 lg:hover:bg-gray-100">
            <img
              className="h-8 w-8 rounded-full"
              src={checkedInUser?.pictureUrl ?? ''}
              alt={checkedInUser?.fullName ?? ''}
            />
            <span className="ml-3 hidden text-sm font-medium text-gray-700 dark:text-gray-200 lg:block">
              <span className="sr-only">Open user menu for </span>
              {checkedInUser?.fullName ?? ''}
            </span>
            <ChevronDownIcon
              className="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
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
            className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5
            focus:outline-none dark:bg-gray-700"
          >
            <Menu.Item>
              <NavLink
                to={{ pathname: getPersonalProfileEditUrl() }}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-primary-50 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                Your Profile
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink
                to={{ pathname: GetPathForPage(Pages.Settings) }}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-primary-50 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                Settings
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <div
                onClick={() => logoutWithRedirect()}
                className="inline-flex w-full cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 hover:bg-primary-50 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-600"
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
