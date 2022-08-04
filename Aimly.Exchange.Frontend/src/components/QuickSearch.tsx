import React, { useState } from 'react';
import Pages from 'components/shared/Pages';
import { useNavigate } from 'react-router-dom';

import { SearchIcon } from '@heroicons/react/solid';
import { GetPathForPage } from 'components/shared/AppRoutes';
import useNavigateToPage from 'components/shared/useNavigateToPage';

import { GetCurrentTenant } from 'tenant/TenantValues';

const currentTenant = GetCurrentTenant();
const marketLabel = currentTenant.marketLabel.toLocaleLowerCase();

const QuickSearch = (): JSX.Element => {
  const navigateToPage = useNavigateToPage();
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(event);

    navigateToPage(Pages.Market, `?s=${searchTerm}`);
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
            className="focus:ring-3 mt-3 block w-full rounded-md border-transparent
              py-2 pl-10 pr-3 font-medium
              leading-5 text-gray-900
              placeholder-gray-500 shadow-sm
              focus:outline-none
              focus:ring-secondary-500 dark:bg-gray-800
              sm:text-sm"
            placeholder={'Search ' + marketLabel}
            type="search"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default QuickSearch;
