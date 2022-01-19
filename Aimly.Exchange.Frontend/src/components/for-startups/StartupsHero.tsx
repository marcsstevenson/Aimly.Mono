import React from 'react';
import { Link } from 'react-router-dom';

import office1 from 'assets/hero/Office-1.png';
import office2 from 'assets/hero/Office-2.png';
import office3 from 'assets/hero/Office-3.png';
import office4 from 'assets/hero/Office-4.png';
import office5 from 'assets/hero/Office-5.jpg';
import office6 from 'assets/hero/Office-6.png';
import office7 from 'assets/hero/Office-7.png';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';

/* This example requires Tailwind CSS v2.0+ */
const StartupsHero = () => (
  <div className="relative overflow-hidden">
    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <div className="sm:max-w-lg">
          <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
            The time to startup is{' '}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block">
              <span className="relative text-white">NOW</span>
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            It has never been a greater time to begin your amazing startup. Get started today and
            unshackle your abilities with Aimly. Helping startups solve important problems is what
            we do.
          </p>
        </div>
        <div className="mt-10">
          {/* Decorative image grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
          >
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                    <img
                      src={office1}
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img
                      src={office2}
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img
                      src={office4}
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img
                      src={office3}
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img
                      src={office5}
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img
                      src={office6}
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img
                      src={office7}
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            to={{ pathname: '/for-startups/profile/edit/AboutYou' }}
            className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Get started NOW
            <ChevronDoubleRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>

        </div>
      </div>
    </div>
  </div>
);

export default StartupsHero;
