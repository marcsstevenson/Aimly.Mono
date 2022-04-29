import React, { useMemo } from 'react';
import Pages from 'components/shared/Pages';
import { NavLink, useSearchParams } from 'react-router-dom';
import { GetPathForPage } from 'components/shared/AppRoutes';
import { ChevronRightIcon } from '@heroicons/react/solid';

const CompanyInvite = () => {
  const [searchParams] = useSearchParams();

  const nextUrl = useMemo(() => {
    // Simply pass along any query string that we have in our URL
    // This is needed to relay an invite code to AboutYou
    let queryString = '';

    if (searchParams) {
      queryString += `?${searchParams}`;
    }

    return GetPathForPage(Pages.AboutYou) + queryString;
  }, []);

  return (
    <main>
      <div className="pt-10 dark:bg-gray-900 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="text-secondary-400 block">Welcome!</span>
                </h1>
                <p className="mt-10">
                  You have been invited to create a company profile on the Catallyze exchange.
                  Please click here to continue.
                </p>
                <div className="mx-auto mt-10">
                  <div className="space-y-4 sm:mx-auto">
                    <NavLink
                      to={{ pathname: nextUrl }}
                      className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 inline-flex items-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                      Continue
                      <ChevronRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <img
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://images.unsplash.com/photo-1460467820054-c87ab43e9b59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1367&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanyInvite;
