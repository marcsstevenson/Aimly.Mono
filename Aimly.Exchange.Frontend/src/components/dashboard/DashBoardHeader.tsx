import React, { useContext } from 'react';
import { PrivateContext } from 'components/PrivateContext';
import { CheckCircleIcon, BuildingOffice2Icon } from '@heroicons/react/20/solid';

const DashBoardHeader = () => {
  const { checkedInUser } = useContext(PrivateContext);

  // Returns morning, afternoon or evening depending on the time of day
  const getTimeOfDay = (): string => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      return 'morning';
    } else if (hour >= 12 && hour < 18) {
      return 'afternoon';
    } else {
      return 'evening';
    }
  };

  return (
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
                    Good {getTimeOfDay()}, {checkedInUser?.fullName ?? ''}
                  </h1>
                </div>
                <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                  <dt className="sr-only">Company</dt>
                  <dd className="flex items-center text-sm font-medium capitalize text-gray-500 dark:text-gray-400 sm:mr-6">
                    <BuildingOffice2Icon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500"
                      aria-hidden="true"
                    />
                    Aimly.io
                  </dd>
                  <dt className="sr-only">Account status</dt>
                  <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 dark:text-gray-400 sm:mr-6 sm:mt-0">
                    <CheckCircleIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                      aria-hidden="true"
                    />
                    Verified account
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          {/* <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
            <button
              type="button"
              className="focus:ring-secondary-500 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-900"
            >
              Add money
            </button>
            <button
              type="button"
              className="bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-500 inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Send money
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
