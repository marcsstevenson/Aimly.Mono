import React, { useEffect, useState } from 'react';
import MarketListResults from './MarketListResults';
import MarketGridResults from './MarketGridResults';
import { ViewListIcon, ViewGridIcon } from '@heroicons/react/solid';
import useMarketSearch from './useMarketSearch';
import { classNames } from 'utils/classNames';

enum DisplayModeOptions {
  grid,
  list,
}

export const MarketSearchResults = () => {
  const displayModeStorageItemName = 'market-display-mode';

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

  const { marketSearch, state } = useMarketSearch();

  // Request a display mode change
  const requestDisplayMode = (displayModeOption: DisplayModeOptions) => {
    // Remember choice for next time
    localStorage.setItem(displayModeStorageItemName, displayModeOption.toString());

    // Update the state value
    setDisplayMode(displayModeOption);
  };

  // Onload
  useEffect(() => {
    marketSearch();
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-6 sm:py-4 lg:max-w-none lg:py-8">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
            Market Search (work in progress)
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="z-50 flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                <div className="ml-auto flex items-center space-x-5 bg-gray-50 px-6 py-3 dark:bg-gray-800">
                  <div className="flex items-center">
                    <button
                      onClick={() => requestDisplayMode(DisplayModeOptions.grid)}
                      type="button"
                      className={classNames(
                        displayMode === DisplayModeOptions.grid
                          ? 'text-primary-800'
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
                          ? 'text-primary-800'
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
                  <MarketGridResults userSearchResults={state.results} />
                )}
                {displayMode === DisplayModeOptions.list && (
                  <MarketListResults userSearchResults={state.results} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSearchResults;
