// The purpose of this component is to display a single result in the market grid.
// The user should also be able to navigate to a detailed view of the profile.

import React, { useCallback, useMemo } from 'react';
import resultIcon from 'assets/user-flat.svg';
import { MarketSearchResult } from 'components/market/MarketSearchResultsProps';
import { type ProfileTypeOption } from '__generated__/marketSearchQuery.graphql';
import { classNames } from 'utils/classNames';
import { NavLink } from 'react-router-dom';
import { getUrlForViewProfile } from 'components/market/view/UrlForViewProfile';

export interface Props {
  result: MarketSearchResult | null | undefined;
  index: number;
}

const MarketGridResult = ({ result, index }: Props) => {
  const getRoundedClassNames = useCallback((type: ProfileTypeOption | null | undefined) => {
    // Company logos often contain transparent areas and this makes for a poor display
    // if the logo is dark and our background is dark. For this reason, use a white bg
    // for company profiles.
    // Edit. Removed bg-gray-200 because it's very ugly.
    return type === 'COMPANY' ? 'rounded-md' : 'rounded-full';
  }, []);

  const onImageError = (ev: any) => {
    ev.target.src = resultIcon;
  };

  const locationDisplay = useMemo((): string | null => {
    if (!result) {
      return null;
    }

    var parts: string[] = [];

    if (result?.addressCity && result.addressCity.length > 0) {
      parts.push(result.addressCity);
    }

    if (result?.addressCountry && result.addressCountry.length > 0) {
      parts.push(result.addressCountry);
    }

    return parts.join(', ');
  }, [result]);

  return (
    <li
      key={index}
      className="col-span-1 flex min-w-[200px] flex-col divide-y divide-gray-200 rounded-lg border-2 border-transparent bg-white text-center shadow hover:border-secondary-400 dark:divide-gray-700 dark:bg-gray-900"
    >
      <NavLink
        to={{
          pathname: getUrlForViewProfile(result?.type ?? 'COMPANY', result?.profileId ?? ''),
        }}
      >
        <div className="flex flex-1 flex-col p-8">
          <img
            className={classNames(
              getRoundedClassNames(result?.type),
              'mx-auto h-32 w-32 flex-shrink-0'
            )}
            src={result?.profilePictureUrl ?? resultIcon}
            onError={onImageError}
            alt=""
          />
          <h3 className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-100">
            {result?.name}
          </h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Title</dt>
            {result?.description && result?.description.length > 0 ? (
              <dd className="text-sm text-gray-500 dark:text-gray-400">{result?.description}</dd>
            ) : (
              <dd className="text-sm text-gray-500 dark:text-gray-400">{locationDisplay}</dd>
            )}
          </dl>
        </div>
        {/* <div>
              <div className="-mt-px flex divide-x divide-gray-200 dark:divide-gray-700">
                <div className="flex w-0 flex-1">
                  <a
                    href="#"
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500 dark:text-gray-300 hover:dark:text-gray-400"
                  >
                    <EnvelopeIcon className="text-gray-40 h-5 w-5" aria-hidden="true" />
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
  );
};

export default MarketGridResult;
