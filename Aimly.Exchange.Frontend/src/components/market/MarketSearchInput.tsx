import React, { useEffect, useRef, useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import useLocationQuery from 'components/shared/useLocationQuery';
import { type ProfileTypeOption } from '__generated__/marketSearchQuery.graphql';
import { IndustriesAndSkills } from 'components/shared/MarketOptions/IndustriesAndSkills';

interface Props {
  CurrentProfileType: ProfileTypeOption;
  onChange: (searchTerm: string) => void;
}

export const MarketSearchInput = ({ CurrentProfileType, onChange }: Props) => {
  const locationQuery = useLocationQuery();
  const searchQueryStringVariable = 's';
  // Do we have a search param? Use it if yes.
  const searchQueryStringValue = locationQuery.get(searchQueryStringVariable);
  const [searchTerm, setSearchTerm] = useState(searchQueryStringValue ?? '');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus the input when the component is mounted
  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    onChange(searchTerm);
  };

  return (
    <div className="mx-auto mb-3 bg-white dark:bg-gray-800">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="py-10 dark:text-white">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                aria-hidden="true"
              >
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search-field"
                name="search-field"
                ref={searchInputRef}
                className="block w-full rounded-xl border border-gray-300
                py-3 pl-10 pr-5 font-medium leading-5
                  text-gray-900 placeholder-gray-500
                  focus:border-transparent focus:outline-none
                  focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-900
                  dark:text-gray-200 dark:placeholder-gray-400 dark:focus:bg-gray-800 sm:text-sm"
                placeholder="Search..."
                onChange={(event) => setSearchTerm(event.target.value)}
                value={searchTerm}
                type="search"
              />
            </div>
          </div>
          {/* <IndustriesAndSkills profileType={CurrentProfileType} /> */}
        </div>
      </form>
    </div>
  );
};
