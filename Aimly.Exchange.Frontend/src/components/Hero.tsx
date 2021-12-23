import React from 'react';

import logo from '../assets/logo.svg';

/* This example requires Tailwind CSS v2.0+ */
const Hero = () => (
  <div className="relative overflow-hidden">
    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <div className="sm:max-w-lg">
          <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
            The time to startup is{' '}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
              <span className="relative text-white">NOW</span>
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            It has never been a greater time to begin your amazing startup. Get started today and
            unshackle your abilities with Aimly. Helping startups solve important problems is what
            we do.
          </p>
        </div>
        <div>
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
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="inline-block text-center bg-pink-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-pink-700"
            >
              Free sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
