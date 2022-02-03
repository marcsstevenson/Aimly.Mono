import React, { useCallback, useRef } from 'react';
import Loading from 'components/Loading';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import StartupQuestionnaireManager from 'components/for-startups/profile/edit/StartupQuestionnaireManager';
import {
  useLazyLoadQuery,
} from 'react-relay/hooks';
import useSetAboutYouMutation from 'useSetAboutYouMutation'
import {
  GetAboutYouModelInput,
} from "__generated__/useSetAboutYouMutation.graphql";
import * as GetAboutYouQuery from "__generated__/getAboutYouQuery.graphql";
import { Pages } from 'components/shared/AppRoutes';
import useNavigateToPage from "components/shared/useNavigateToPage";


const userId = "57E37CF3-FE25-4B10-93F5-19AAFB9E53E8";
const getAboutYouQueryVariables = { id: userId };
// const queryReference2 = loadQuery<GetAboutYouQuery.getAboutYouQuery>(
//   RelayEnvironment,
//   GetAboutYouQuery.default,
//   getAboutYouQueryVariables,
// );

const AboutYou = () => {
  const navigateToPage = useNavigateToPage();
  // const navigateToPage = useNavigateToPage();
  // const topRef = useRef<HTMLDivElement>(null);
  const currentStep = "AboutYou";

  // const data2 = usePreloadedQuery<GetAboutYouQuery.getAboutYouQuery>(GetAboutYouQuery.default, queryReference2);

  // navigateToPage.

  // Lazy load this query because it is only relevant to this component
  const data2 = useLazyLoadQuery<GetAboutYouQuery.getAboutYouQuery>(GetAboutYouQuery.default, getAboutYouQueryVariables);
  console.log(data2.getAboutYou);

  const [setAboutYouMutation] = useSetAboutYouMutation();

  let model: GetAboutYouModelInput = {
    userId: userId,
    companyName: "ACME",
    givenName: 'Marc',
    familyName: 'Stevenson'
  };

  const handleSave = useCallback(
    (getAboutYouModel: GetAboutYouModelInput) => {
      setAboutYouMutation(getAboutYouModel);
    },
    [setAboutYouMutation, ""]
  );

  const handleSubmit = (event: any) => {
    event.preventDefault();
  }

  const next = () => {
    console.log(model);
    // handleSave(model);
    // if (topRef.current) {
    //   topRef.current.scrollIntoView({ behavior: 'smooth' });
    // }
    // navigate(GetPathForPage(Pages.TheProblem));
    navigateToPage(Pages.TheProblem);
  };

  return (
    <StartupQuestionnaireManager currentStep={ currentStep }>
      <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="pt-8">
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Phone number
                </label>
                <div className="mt-1">
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    autoComplete="tel"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="company-name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Company name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company-name"
                    id="company-name"
                    autoComplete="organization"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="company-url"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Company website
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company-url"
                    id="company-url"
                    autoComplete="url"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="number-of-founders"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Number of founders
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    min="1"
                    name="number-of-founders"
                    id="number-of-founders"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Street address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  State / Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Country
                </label>
                <div className="mt-1">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Done
            </button>
            <button
              type="button"
              onClick={() => next()}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </StartupQuestionnaireManager>
  );
};

export default withAuthenticationRequired(AboutYou, {
  onRedirecting: () => <Loading />,
});
