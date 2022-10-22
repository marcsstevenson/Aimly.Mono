import React, { useContext } from 'react';
import Pages from 'components/shared/Pages';

import { PlusIcon } from '@heroicons/react/20/solid';
import { PrivateContext } from 'components/PrivateContext';
import { Link } from 'react-router-dom';
import { GetPathForPage } from 'components/shared/AppRoutes';
import MyProfilesList from 'components/profiles/MyProfilesList';
import {
  getPersonalProfileEditUrl,
  getMentorProfileNewUrl,
  getExpertProfileNewUrl,
  getCompanyProfileNewUrl,
} from 'components/profiles/UrlBuilder';
import { GetCurrentTenant } from 'tenant/TenantValues';

const currentTenant = GetCurrentTenant();

const company = currentTenant.companyOptions.singularName;
const mentor = currentTenant.mentorOptions.singularName;
const expert = currentTenant.expertOptions.singularName;

export interface StatusType {
  name: string;
  classNames: string;
}

const Profiles = () => {
  const { checkedInUser } = useContext(PrivateContext);

  return (
    <div className="flex-1 pb-8">
      {/* Page header */}
      <div className="bg-white shadow dark:bg-gray-700">
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              {/* Profile */}
              <div className="flex items-center">
                <img
                  className="hidden h-16 w-16 rounded-full sm:block"
                  src={checkedInUser?.pictureUrl ?? ''}
                  alt=""
                />
                <div>
                  <div className="flex items-center">
                    <img
                      className="h-16 w-16 rounded-full sm:hidden"
                      src={checkedInUser?.pictureUrl ?? ''}
                      alt=""
                    />
                    <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 dark:text-gray-50 sm:truncate sm:leading-9">
                      Profile Management
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
              <Link
                to={{ pathname: getPersonalProfileEditUrl() }}
                className="inline-flex items-center rounded-md border border-transparent bg-secondary-600 px-4 py-2 text-sm font-medium text-white hover:bg-secondary-700"
              >
                Edit personal profile
              </Link>
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
              to={{ pathname: getCompanyProfileNewUrl() }}
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-secondary-800 px-8 py-3 text-base font-medium text-white hover:bg-secondary-900 md:py-4 md:px-10 md:text-lg"
            >
              {company}
              <PlusIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link
              to={{ pathname: getMentorProfileNewUrl() }}
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-secondary-600 px-8 py-3 text-base font-medium text-white hover:bg-secondary-700 md:py-4 md:px-10 md:text-lg"
            >
              {mentor}
              <PlusIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link
              to={{ pathname: getExpertProfileNewUrl() }}
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-secondary-500 px-8 py-3 text-base font-medium text-white hover:bg-secondary-600 md:py-4 md:px-10 md:text-lg"
            >
              {expert}
              <PlusIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-50">
          My Profiles
        </h2>
        <MyProfilesList />
      </div>
    </div>
  );
};

export default Profiles;
