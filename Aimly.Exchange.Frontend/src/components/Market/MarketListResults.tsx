import React from 'react';
import { UserSearchResult } from '../../hooks/useMarketSearch';
import userIcon from '../../assets/abstract-user-flat-4.svg';

interface props {
  userSearchResults: UserSearchResult[] | null;
}

const MarketListResults = ({ userSearchResults }: props) => (
  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600 bg-white dark:bg-gray-700">
    <thead className="bg-gray-50 dark:bg-gray-800">
      <tr>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider"
        >
          Name
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider"
        >
          Status
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider"
        >
          Role
        </th>
        <th scope="col" className="relative px-6 py-3">
          <span className="sr-only">Follow</span>
        </th>
      </tr>
    </thead>
    <tbody className="bg-white dark:bg-gray-800 dark:text-gray-100 divide-y divide-gray-200 dark:divide-gray-600">
      {userSearchResults &&
        userSearchResults.map((user, i) => (
          <tr key={i}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.pictureUrl ?? userIcon}
                    alt={user.fullName}
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {user.fullName}
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Active
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mentor</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                Follow
              </a>
            </td>
          </tr>
        ))}
    </tbody>
  </table>
);

export default MarketListResults;
