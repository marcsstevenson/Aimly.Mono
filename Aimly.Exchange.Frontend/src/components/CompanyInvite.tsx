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
                  <span className="text-secondary-400 block">
                    LET'S SCALE AND GROW YOUR BUSINESS TOGETHER
                  </span>
                </h1>
                <p className="mt-10">
                  Please click CONTINUE to begin your application. Once submitted we will contact
                  you to arrange a time to meet.
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
                  src="https://aimlyappcatallyzeprod.blob.core.windows.net/images/CatallyzeInvite.png?sp=r&st=2022-05-01T19:52:11Z&se=3022-05-02T03:52:11Z&sv=2020-08-04&sr=b&sig=bbmZmTuNj28WO4rd4wMRUik%2B01fGXz9724ha5Xtckyg%3D"
                  alt="Welcome"
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
