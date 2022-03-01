import React, { useCallback } from 'react';
import resultIcon from 'assets/user-flat.svg';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid';
import { MarketSearchResultsProps } from 'components/market/MarketSearchResultsProps';
import { type ProfileTypeOption } from '__generated__/marketSearchQuery.graphql';
import { classNames } from 'utils/classNames';
import { NavLink } from 'react-router-dom';
import { getUrlForViewProfile } from 'components/shared/UrlForViewProfile';

const MarketGridResults = ({ marketSearchResults }: MarketSearchResultsProps) => {
  const getRoundedClassName = useCallback((type: ProfileTypeOption | null | undefined) => {
    return type === 'STARTUP' ? 'rounded-md' : 'rounded-full';
  }, []);

  const onImageError = (ev: any) => {
    ev.target.src = resultIcon;
  };

  return (
    <ul className="grid grid-cols-1 gap-6 bg-gray-50 px-5 pb-5 dark:bg-gray-800 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {marketSearchResults &&
        marketSearchResults.map((result, i) => (
          <li
            key={i}
            className="hover:border-primary-400 col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg border-2 border-transparent bg-white text-center shadow dark:divide-gray-700 dark:bg-gray-900"
          >
            <NavLink
              to={{
                pathname: getUrlForViewProfile(result?.type ?? 'STARTUP', result?.profileId ?? ''),
              }}
            >
              <div className="flex flex-1 flex-col p-8">
                <img
                  className={classNames(
                    getRoundedClassName(result?.type),
                    'mx-auto h-32 w-32 flex-shrink-0'
                  )}
                  src={result?.profileUrl ?? resultIcon}
                  onError={onImageError}
                  alt=""
                />
                <h3 className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {result?.name}
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-500 dark:text-gray-400">
                    {result?.description}
                  </dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="mt-3">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      Active
                    </span>
                  </dd>
                </dl>
              </div>
              {/* <div>
              <div className="-mt-px flex divide-x divide-gray-200 dark:divide-gray-700">
                <div className="flex w-0 flex-1">
                  <a
                    href="#"
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500 dark:text-gray-300 hover:dark:text-gray-400"
                  >
                    <MailIcon className="text-gray-40 h-5 w-5" aria-hidden="true" />
                    <span className="ml-3">Message</span>
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href="#"
                    className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500 dark:text-gray-300 hover:dark:text-gray-400"
                  >
                    <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Call</span>
                  </a>
                </div>
              </div>
            </div> */}
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

export default MarketGridResults;
