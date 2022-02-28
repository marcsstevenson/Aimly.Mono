import React, { useEffect, useState } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from 'components/Loading';
import MarketListResults from './MarketListResults';
import MarketGridResults from './MarketGridResults';
import { ViewListIcon, ViewGridIcon } from '@heroicons/react/solid';
// import useMarketSearch from './useMarketSearch';
import { classNames } from 'utils/classNames';

enum DisplayModeOptions {
  grid,
  list,
}

export const Market = () => {
  const displayModeStorageItemName = 'market-display-mode';

  /// Return the current display mode using the localStorage value if any
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

  // const { marketSearch, state } = useMarketSearch();

  /// Request a display mode change
  const requestDisplayMode = (displayModeOption: DisplayModeOptions) => {
    // Remember choice for next time
    localStorage.setItem(displayModeStorageItemName, displayModeOption.toString());

    // Update the state value
    setDisplayMode(displayModeOption);
  };

  // Onload
  // useEffect(() => {
  //   marketSearch();
  // }, []);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-6 sm:py-4 lg:max-w-none lg:py-8">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
            Market Search (work in progress)
          </h2>
        </div>
      </div>
      <div className="mx-auto mb-3 max-w-7xl px-4 sm:px-6 lg:px-8">
        <form action="#" method="POST">
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 dark:bg-gray-700 dark:text-white sm:p-6">
              <fieldset>
                <legend className="text-base font-medium text-gray-900 dark:text-white">
                  Filter by role
                </legend>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="mentors"
                        name="mentors"
                        type="checkbox"
                        checked={true}
                        className="focus:ring-primary-500 text-primary-600 h-4 w-4 rounded border-gray-300"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="mentors"
                        className="font-medium text-gray-700 dark:text-gray-100"
                      >
                        Mentors
                      </label>
                      <p className="text-gray-500">
                        Find people that provide mentorship for startups.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="startUps"
                        name="startUps"
                        type="checkbox"
                        className="focus:ring-primary-500 text-primary-600 h-4 w-4 rounded border-gray-300"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="startUps"
                        className="font-medium text-gray-700 dark:text-gray-100"
                      >
                        Startups
                      </label>
                      <p className="text-gray-500">Search for startups.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="experts"
                        name="experts"
                        type="checkbox"
                        className="focus:ring-primary-500 text-primary-600 h-4 w-4 rounded border-gray-300"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="experts"
                        className="font-medium text-gray-700 dark:text-gray-100"
                      >
                        Experts
                      </label>
                      <p className="text-gray-500">Search for subject matter experts.</p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <div>
                  <legend className="text-base font-medium text-gray-900 dark:text-white">
                    Filter Options
                  </legend>
                  <p className="text-sm text-gray-500">Choose how to filter your search</p>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="name-contains"
                      name="name-filter-type"
                      type="radio"
                      className="focus:ring-primary-500 text-primary-600 h-4 w-4 border-gray-300"
                    />
                    <label
                      htmlFor="name-contains"
                      className="ml-3 block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Name contains
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="name-starts-with"
                      name="name-filter-type"
                      type="radio"
                      className="focus:ring-primary-500 text-primary-600 h-4 w-4 border-gray-300"
                    />
                    <label
                      htmlFor="name-starts-with"
                      className="ml-3 block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Name starts with
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="name-exact"
                      name="name-filter-type"
                      type="radio"
                      className="focus:ring-primary-500 text-primary-600 h-4 w-4 border-gray-300"
                    />
                    <label
                      htmlFor="name-exact"
                      className="ml-3 block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Name exact
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right dark:bg-gray-800 sm:px-6">
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Search
              </button>
            </div>
          </div>
        </form>
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
                  <MarketGridResults marketSearchResults={null} />
                )}
                {displayMode === DisplayModeOptions.list && (
                  <MarketListResults marketSearchResults={null} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuthenticationRequired(Market, {
  onRedirecting: () => <Loading />,
});
