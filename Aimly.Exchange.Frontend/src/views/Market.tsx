import React, { useEffect } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../components/Loading';
import userIcon from '../assets/abstract-user-flat-4.svg';
import useMarketSearch from '../hooks/useMarketSearch';

export const MarketComponent = () => {

  const { marketSearch, state } = useMarketSearch();

    // Onload
    useEffect(() => {
      marketSearch();
    }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-6 sm:py-4 lg:py-8 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">Market Search</h2>
        </div>
      </div>
      <div className="mb-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form action="#" method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <fieldset>
                <legend className="text-base font-medium text-gray-900">Filter by role</legend>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="mentors"
                        name="mentors"
                        type="checkbox"
                        checked={true}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="mentors" className="font-medium text-gray-700">
                        Mentors
                      </label>
                      <p className="text-gray-500">
                        Find people that provide mentorship for startups.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="startUps"
                        name="startUps"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="startUps" className="font-medium text-gray-700">
                        Start-ups
                      </label>
                      <p className="text-gray-500">Search for start-ups.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="experts"
                        name="experts"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="experts" className="font-medium text-gray-700">
                        Experts
                      </label>
                      <p className="text-gray-500">Search for subject matter experts.</p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <div>
                  <legend className="text-base font-medium text-gray-900">
                    Filter Options
                  </legend>
                  <p className="text-sm text-gray-500">
                    Choose how to filter your search
                  </p>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="name-contains"
                      name="name-filter-type"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="name-contains"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Name contains
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="name-starts-with"
                      name="name-filter-type"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="name-starts-with"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Name starts with
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="name-exact"
                      name="name-filter-type"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="name-exact"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Name exact
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="z-50 flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Role
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {state.showResult &&
                      state.userSearchResults.map((user, i) => (
                        <tr key={i}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={user.pictureUrl ?? userIcon}
                                  alt={user.fullName}
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {user.fullName}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Mentor
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Follow
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuthenticationRequired(MarketComponent, {
  onRedirecting: () => <Loading />,
});
