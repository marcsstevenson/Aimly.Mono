import React, { useMemo } from 'react';
import { getConfig } from 'config';
import expert from 'assets/hero/Expert.webp';

import { ChevronDoubleRightIcon } from '@heroicons/react/solid';

/* This example requires Tailwind CSS v2.0+ */
const ExpertsHero = () => {
  const config = useMemo(() => getConfig(), []);

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 dark:bg-gray-900 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white dark:text-gray-900 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="pt-6"></div>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Help service a rich ecosystem of</span>{' '}
                <span className="block text-primary-600 xl:inline"> Startups</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                It has never been a better time to startup but they need your help. Provide
                professional services to Startups and help solve impactful problems.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href={config.exchangeAppUri}
                    target="_blank"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Get Started
                    <ChevronDoubleRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={expert}
          alt=""
        />
      </div>
    </div>
  );
};

export default ExpertsHero;
