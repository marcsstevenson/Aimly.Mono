import React, { useEffect, useState } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../components/Loading';
import MarketListResults from '../components/Market/MarketListResults';
import MarketGridResults from '../components/Market/MarketGridResults';
import { ViewListIcon, ViewGridIcon } from '@heroicons/react/solid';
import useMarketSearch from '../hooks/useMarketSearch';

enum DisplayModeOptions {
  grid,
  list,
}

export const MarketComponent = () => {
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
  }

  const [displayMode, setDisplayMode] = useState(getStartingDisplayMode());

  const { marketSearch, state } = useMarketSearch();

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  /// Request a display mode change
  const requestDisplayMode = (displayModeOption: DisplayModeOptions) => {
    // Remember choice for next time
    localStorage.setItem(displayModeStorageItemName, displayModeOption.toString());

    // Update the state value
    setDisplayMode(displayModeOption);
  }

  // Onload
  useEffect(() => {
    marketSearch();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-6 sm:py-4 lg:py-8 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
            Market Search
          </h2>
        </div>
      </div>
      <div className="mb-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form action="#" method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 space-y-6 sm:p-6 bg-white dark:bg-gray-700 dark:text-white">
              <fieldset>
                <legend className="text-base font-medium text-gray-900 dark:text-white">
                  Filter by role
                </legend>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="mentors"
                        name="mentors"
                        type="checkbox"
                        checked={true}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
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
                    <div className="flex items-center h-5">
                      <input
                        id="startUps"
                        name="startUps"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="startUps"
                        className="font-medium text-gray-700 dark:text-gray-100"
                      >
                        Start-ups
                      </label>
                      <p className="text-gray-500">Search for start-ups.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="experts"
                        name="experts"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
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
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
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
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
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
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
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
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="z-50 flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <div className="ml-auto flex px-6 py-3 items-center space-x-5 bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center">
                    <button
                      onClick={() => requestDisplayMode(DisplayModeOptions.grid)}
                      type="button"
                      className={classNames(
                        displayMode === DisplayModeOptions.grid ? 'text-indigo-800' : 'text-gray-400 hover:text-indigo-500',
                        '-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center'
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
                        displayMode === DisplayModeOptions.list ? 'text-indigo-800' : 'text-gray-400 hover:text-indigo-500',
                        '-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center'
                      )}
                    >
                      <span className="sr-only">View results as list</span>
                      <ViewListIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                {displayMode === DisplayModeOptions.grid && (
                  <MarketGridResults userSearchResults={state.userSearchResults} />
                )}
                {displayMode === DisplayModeOptions.list && (
                  <MarketListResults userSearchResults={state.userSearchResults} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuthenticationRequired(MarketComponent, {
  onRedirecting: () => <Loading />,
});
