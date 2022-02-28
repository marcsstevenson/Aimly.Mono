import React from 'react';
import resultIcon from 'assets/user-flat.svg';
import { MarketSearchResultsProps } from 'components/market/MarketSearchResultsProps';

const MarketListResults = ({ marketSearchResults }: MarketSearchResultsProps) => (
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
          Description
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-200"
        >
          Status
        </th>
        <th scope="col" className="relative px-6 py-3">
          <span className="sr-only">Follow</span>
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-600 dark:bg-gray-800 dark:text-gray-100">
      {marketSearchResults &&
        marketSearchResults.map((result, i) => (
          <tr key={i}>
            <td className="whitespace-nowrap px-6 py-4">
              <div className="flex items-center">
                <div className="h-10 w-10 flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={result?.profileUrl ?? resultIcon}
                    alt={result ? (result.name ? result.name : '') : ''}
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {result?.name}
                  </div>
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
              {result?.description}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                Active
              </span>
            </td>
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
