import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import {
  SearchIcon,
} from '@heroicons/react/solid';
import { GetPathForPage, Pages } from 'components/shared/AppRoutes';

const QuickSearch = (): JSX.Element => {
  const navigate = useNavigate();
  // let [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    navigate(GetPathForPage(Pages.Market), {
      // TODO - link the input to the search params for the market page
      // search: searchParams,
    });
  }

  return (
    <div className="flex-1 flex">
      <form onSubmit={handleSubmit} className="w-full flex" action="#" method="GET">
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
          <div
            className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            aria-hidden="true"
          >
            <SearchIcon className="h-5 w-5" aria-hidden="true" />
          </div>
          <input
            id="search-field"
            name="search-field"
            className="block w-full pl-10 mt-3 pr-3 py-2
              font-medium border-transparent rounded-md leading-5
              dark:bg-gray-800 dark:focus:bg-white
              text-gray-900 placeholder-gray-500
              shadow-sm
              focus:outline-none focus:ring-3 focus:ring-primary-500
              sm:text-sm"
            placeholder="Search market"
            type="search"
          />
        </div>
      </form>
    </div>
  );
};

export default QuickSearch;
