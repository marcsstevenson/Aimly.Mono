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
      <div className="bg-white dark:bg-gray-700 shadow">
        <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
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
                    <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 dark:text-gray-50 sm:leading-9 sm:truncate">
                      Profile Management
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                View personal profile
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Edit personal profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50">
          Add new profile
        </h2>

        <div className="mt-2 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link
              to={{ pathname: GetPathForPage(Pages.AboutYou) }}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
            >
              Startup
              <ChevronDoubleRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link
              to={{ pathname: '/for-mentors' }}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Mentor
              <ChevronDoubleRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link
              to={{ pathname: '/for-experts' }}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 text-primary-700 bg-primary-100 hover:bg-primary-200"
            >
              Expert
              <ChevronDoubleRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50">
          My Profiles
        </h2>
        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card */}
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <card.icon
                      className="h-6 w-6 text-gray-400 dark:text-gray-500"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                        {card.name}
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900 dark:text-gray-50">
                          {card.amount}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3">
                <div className="text-sm">
                  <a
                    href={card.href}
                    className="font-medium text-primary-700 hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-400"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
