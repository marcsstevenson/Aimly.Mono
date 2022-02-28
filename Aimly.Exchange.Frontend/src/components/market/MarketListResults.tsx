import React from 'react';
import userIcon from 'assets/abstract-user-flat-4.svg';
import { MarketSearchResultsProps } from 'components/market/MarketSearchResultsProps';

const MarketListResults = ({ userSearchResults }: MarketSearchResultsProps) => (
  <table className="min-w-full divide-y divide-gray-200 bg-white dark:divide-gray-600 dark:bg-gray-700">
    <thead className="bg-gray-50 dark:bg-gray-800">
      <tr>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-200"
        >
          Name
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-200"
        >
          Status
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-200"
        >
          Role
        </th>
        <th scope="col" className="relative px-6 py-3">
          <span className="sr-only">Follow</span>
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-600 dark:bg-gray-800 dark:text-gray-100">
      {userSearchResults &&
        userSearchResults.map((user, i) => (
          <tr key={i}>
            <td className="whitespace-nowrap px-6 py-4">
              <div className="flex items-center">
                <div className="h-10 w-10 flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user?.pictureUrl ?? userIcon}
                    alt={user ? (user.fullName ? user.fullName : '') : ''}
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {user?.fullName}
                  </div>
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                Active
              </span>
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">Mentor</td>
            <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
              <a href="#" className="text-primary-600 hover:text-primary-900">
                Follow
              </a>
            </td>
          </tr>
        ))}
    </tbody>
  </table>
);

export default MarketListResults;
