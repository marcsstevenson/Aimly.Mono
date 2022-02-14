import React, { useContext } from 'react';

import {
  ChevronDoubleRightIcon,
  UserCircleIcon,
  LightningBoltIcon,
  UserGroupIcon,
  StarIcon,
} from '@heroicons/react/solid';
import { PrivateContext } from 'components/private/PrivateContext';
import { Link } from 'react-router-dom';
import { GetPathForPage, Pages } from 'components/shared/AppRoutes';
import MyProfilesList from './MyProfilesList';

const cards = [
  { name: 'Personal', href: '#', icon: UserCircleIcon, amount: 'Marc Stevenson' },
  { name: 'Startup (admin)', href: '#', icon: LightningBoltIcon, amount: 'Aimly.io' },
  { name: 'Startup (founder)', href: '#', icon: LightningBoltIcon, amount: 'Ludily.com' },
  { name: 'Mentor', href: '#', icon: UserGroupIcon, amount: 'Innovation' },
  { name: 'Expert', href: '#', icon: StarIcon, amount: 'Software Engineer' },
  { name: 'Expert', href: '#', icon: StarIcon, amount: 'Technology consultant' },
  // More items...
];

export interface StatusType {
  name: string;
  classNames: string;
}

export const statuses: StatusType[] = [
  { name: 'Success', classNames: 'bg-green-100 text-green-800' },
  { name: 'Processing', classNames: 'bg-yellow-100 text-yellow-800' },
  { name: 'Pending', classNames: 'bg-gray-100 text-gray-800' },
];

const Profiles = () => {
  const { user } = useContext(PrivateContext);

  return (
    <div className="flex-1 pb-8">
      {/* This is just to trigger Tailwind to include the statusStyles classes in the output.css*/}
      <span className="hidden bg-green-100 text-green-800"></span>
      <span className="hidden bg-yellow-100 text-yellow-800"></span>
      <span className="hidden bg-gray-100 text-gray-800"></span>
      {/* Page header */}
      <div className="bg-white shadow dark:bg-gray-700">
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              {/* Profile */}
              <div className="flex items-center">
                <img
                  className="hidden h-16 w-16 rounded-full sm:block"
                  src={user?.picture}
                  alt=""
                />
                <div>
                  <div className="flex items-center">
                    <img className="h-16 w-16 rounded-full sm:hidden" src={user?.picture} alt="" />
                    <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 dark:text-gray-50 sm:truncate sm:leading-9">
                      Profile Management
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
              <button
                type="button"
                className="focus:ring-primary-500 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-900"
              >
                View personal profile
              </button>
              <button
                type="button"
                className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Edit personal profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-50">
          Add new profile
        </h2>

        <div className="mt-2 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link
              to={{ pathname: GetPathForPage(Pages.AboutYou) }}
              className="bg-primary-600 hover:bg-primary-700 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
            >
              Startup
              <ChevronDoubleRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link
              to={{ pathname: '/for-mentors' }}
              className="text-primary-600 flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
            >
              Mentor
              <ChevronDoubleRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link
              to={{ pathname: '/for-experts' }}
              className="text-primary-700 bg-primary-100 hover:bg-primary-200 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg"
            >
              Expert
              <ChevronDoubleRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-50">
          My Profiles
        </h2>
        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <MyProfilesList />
        </div>
      </div>
    </div>
  );
};

export default Profiles;
