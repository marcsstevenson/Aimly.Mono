// The purpose of this component is to display a list of associated profile grid items

import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { GetPathForPage } from 'components/shared/AppRoutes';
import Pages from 'components/shared/Pages';

interface update {
  readonly title: string | null;
  readonly image: string | null;
  readonly content: string | null;
  readonly created: any;
}

const DashBoardUpdates = () => {
  const updates = useMemo<update[]>(() => {
    return [
      {
        title: 'Catallyze Exchange Launched!',
        image:
          'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        content: '',
        created: 'March 16th 2022',
      },
    ];
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="space-y-6 px-4 py-6 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
        <div className="mb-4">
          <span className="text-4xl text-gray-900 dark:text-gray-100">Updates</span>
        </div>
        <div className="col-span-8 lg:col-span-4">
          {updates &&
            updates.map((update, i) => (
              // <div key={i} className="DashBoardUpdateImage flex flex-col space-y-4">
              //   <h2>{update.title}</h2>
              // </div>
              <div key={i} className="relative">
                <div className="absolute inset-x-0 bottom-0 h-1/2" />
                <div className="mx-auto max-w-7xl">
                  <div className="relative sm:overflow-hidden sm:rounded-2xl">
                    <div className="absolute inset-0">
                      <img
                        className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                        alt="People working on laptops"
                      />
                      <div className="to-secondary-700 from-primary-700 absolute inset-0 bg-gradient-to-r mix-blend-multiply" />
                    </div>
                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                      <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="block text-white">
                          Our first exchange has been launched for
                        </span>
                        <span className="text-secondary-100 block">Catallyze</span>
                      </h1>
                      <p className="text-secondary-200 mx-auto mt-6 max-w-lg text-center text-xl sm:max-w-3xl">
                        Catallyze is the first of what we plan to be many three sided exchanges
                        powered by the Aimly platform. We hope you love it!
                      </p>
                      <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                        <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                          <NavLink
                            to={{ pathname: GetPathForPage(Pages.MyProfiles) }}
                            className="text-secondary-700 hover:bg-secondary-50 flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium shadow-sm sm:px-8"
                          >
                            Build your profiles
                          </NavLink>
                          <NavLink
                            to={{ pathname: GetPathForPage(Pages.Market) }}
                            className="bg-secondary-500 flex items-center justify-center rounded-md border border-transparent bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                          >
                            Search the market
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default DashBoardUpdates;
