import React from 'react';
import Pages from 'components/shared/Pages';
import { useNavigate } from 'react-router-dom';

import { SearchIcon } from '@heroicons/react/solid';
import { GetPathForPage } from 'components/shared/AppRoutes';

const QuickSearch = (): JSX.Element => {
  const navigate = useNavigate();
  // let [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    navigate(GetPathForPage(Pages.Market), {
      // TODO - link the input to the search params for the market page
      // search: searchParams,
    });
  };

  return (
    <div className="flex flex-1">
      <form onSubmit={handleSubmit} className="flex w-full" action="#" method="GET">
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
            className="focus:ring-3 focus:ring-primary-500 mt-3 block w-full rounded-md
              border-transparent py-2 pl-10 pr-3
              font-medium leading-5
              text-gray-900 placeholder-gray-500
              shadow-sm
              focus:outline-none dark:bg-gray-800 dark:focus:bg-white
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
