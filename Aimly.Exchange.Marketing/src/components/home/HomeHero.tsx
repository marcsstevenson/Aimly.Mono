import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';

/* This example requires Tailwind CSS v2.0+ */
const HomeHero = () => (
  <div className="relative">
    <main className="lg:relative">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">The ultimate platform for</span>{' '}
            <span className="block text-primary-600 xl:inline"> Startups</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 dark:text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
            Starting up to solve a big problem? Wanting to mentor startups? Looking for a mentor? Wanting gig work within the exciting startup space? We’re here to help.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                to={{ pathname: '/for-startups' }}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
              >
                Startups
                <ChevronDoubleRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                to={{ pathname: '/for-mentors' }}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Mentors
                <ChevronDoubleRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                to={{ pathname: '/for-experts' }}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 text-primary-700 bg-primary-100 hover:bg-primary-200"
              >
                Experts
                <ChevronDoubleRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
          alt=""
        />
      </div>
    </main>
  </div>
);

export default HomeHero;
