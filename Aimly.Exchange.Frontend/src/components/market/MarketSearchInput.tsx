import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';

interface Props {
  onChange: (searchTerm: string) => void;
}

export const MarketSearchInput = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();

    props.onChange(searchTerm);
  };

  return (
    <div className="mx-auto mb-3 mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-8 py-10 dark:bg-gray-800 dark:text-white">
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
                className="focus:ring-primary-500 block w-full rounded-xl border
                border-gray-300 py-3 pl-10 pr-5 font-medium
                  leading-5 text-gray-900
                  placeholder-gray-500 focus:border-transparent
                  focus:outline-none focus:ring-2 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-900
                  dark:text-gray-200 dark:placeholder-gray-400 dark:focus:bg-gray-800 sm:text-sm"
                placeholder="Search..."
                onChange={(event) => setSearchTerm(event.target.value)}
                value={searchTerm}
                type="search"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
