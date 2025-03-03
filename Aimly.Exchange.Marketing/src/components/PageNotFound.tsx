import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div className="h-screen bg-white dark:bg-gray-800 min-h-full flex flex-col lg:relative">
        <div className="flex-grow flex flex-col">
          <main className="flex-grow flex flex-col bg-white dark:bg-gray-800">
            <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
              <div className="flex-shrink-0 my-auto py-16 sm:py-32">
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">404 error</p>
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-6">
                  <Link to="/" className="text-base font-medium text-primary-600 hover:text-primary-500 dark: dark:text-primary-400 dark:hover:text-primary-600">
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default PageNotFound;
