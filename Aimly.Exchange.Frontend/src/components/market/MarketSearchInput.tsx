import React, { useState } from 'react';

interface Props {
  onChange: (value: string) => void;
}

export const MarketSearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="mx-auto mb-3 max-w-7xl px-4 sm:px-6 lg:px-8">
      <form action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="space-y-6 bg-white px-4 py-5 dark:bg-gray-700 dark:text-white sm:p-6">
            <fieldset>
              <legend className="text-base font-medium text-gray-900 dark:text-white">
                Filter by role
              </legend>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="mentors"
                      name="mentors"
                      type="checkbox"
                      checked={true}
                      className="focus:ring-primary-500 text-primary-600 h-4 w-4 rounded border-gray-300"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="mentors"
                      className="font-medium text-gray-700 dark:text-gray-100"
                    >
                      Mentors
                    </label>
                    <p className="text-gray-500">
                      Find people that provide mentorship for startups.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="startUps"
                      name="startUps"
                      type="checkbox"
                      className="focus:ring-primary-500 text-primary-600 h-4 w-4 rounded border-gray-300"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="startUps"
                      className="font-medium text-gray-700 dark:text-gray-100"
                    >
                      Startups
                    </label>
                    <p className="text-gray-500">Search for startups.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="experts"
                      name="experts"
                      type="checkbox"
                      className="focus:ring-primary-500 text-primary-600 h-4 w-4 rounded border-gray-300"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="experts"
                      className="font-medium text-gray-700 dark:text-gray-100"
                    >
                      Experts
                    </label>
                    <p className="text-gray-500">Search for subject matter experts.</p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right dark:bg-gray-800 sm:px-6">
            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
