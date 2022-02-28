import React, { useState } from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import MarketListResults from 'components/market/MarketListResults';
import MarketGridResults from 'components/market/MarketGridResults';
import { ViewListIcon, ViewGridIcon } from '@heroicons/react/solid';
import { classNames } from 'utils/classNames';
import { MarketSearchResultsProps } from 'components/market/MarketSearchResultsProps';
import AppQuery, {
  marketSearchQuery,
  marketSearchQuery$data,
} from '__generated__/marketSearchQuery.graphql';

enum DisplayModeOptions {
  grid,
  list,
}
interface Props {
  queryRef: PreloadedQuery<marketSearchQuery>;
}

export const MarketSearchResults = (props: Props) => {
  const displayModeStorageItemName = 'market-display-mode';
  const { queryRef } = props;

  // Return the current display mode using the localStorage value if any
  const getStartingDisplayMode = (): DisplayModeOptions => {
    const localStorageValue = localStorage.getItem(displayModeStorageItemName);

    if (!localStorageValue) {
      return DisplayModeOptions.grid;
    }

    switch (localStorageValue) {
      case DisplayModeOptions.list.toString():
        return DisplayModeOptions.list;
      default:
        return DisplayModeOptions.grid;
    }
  };

  const [displayMode, setDisplayMode] = useState(getStartingDisplayMode());

  // Request a display mode change
  const requestDisplayMode = (displayModeOption: DisplayModeOptions) => {
    // Remember choice for next time
    localStorage.setItem(displayModeStorageItemName, displayModeOption.toString());

    // Update the state value
    setDisplayMode(displayModeOption);
  };

  const response: marketSearchQuery$data = usePreloadedQuery<marketSearchQuery>(AppQuery, queryRef);

  console.log(response);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="z-50 flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden sm:rounded-lg">
              <div className="ml-auto flex items-center space-x-5 bg-gray-50 px-6 py-3 dark:bg-gray-800">
                <div className="flex items-center">
                  <button
                    onClick={() => requestDisplayMode(DisplayModeOptions.grid)}
                    type="button"
                    className={classNames(
                      displayMode === DisplayModeOptions.grid
                        ? 'text-primary-500'
                        : 'hover:text-primary-500 text-gray-400',
                      '-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full'
                    )}
                  >
                    <span className="sr-only">View as grid</span>
                    <ViewGridIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => requestDisplayMode(DisplayModeOptions.list)}
                    type="button"
                    className={classNames(
                      displayMode === DisplayModeOptions.list
                        ? 'text-primary-500'
                        : 'hover:text-primary-500 text-gray-400',
                      '-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full'
                    )}
                  >
                    <span className="sr-only">View results as list</span>
                    <ViewListIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
              {displayMode === DisplayModeOptions.grid && (
                <MarketGridResults marketSearchResults={response.marketSearch?.results} />
              )}
              {displayMode === DisplayModeOptions.list && (
                <MarketListResults marketSearchResults={response.marketSearch?.results} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
