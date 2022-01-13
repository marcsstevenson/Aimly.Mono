import React, { useRef } from 'react';
import Loading from '../../components/Loading';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import StartupQuestionnaireManager from '../../components/GetStarted/StartupQuestionnaireManager';

const TheSolution = () => {
  const history = useHistory();
  const topRef = useRef<HTMLDivElement>(null);
  const currentStep = 'TheSolution';

  const next = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    history.push('/getStarted/Potential');
  };

  return (
    <StartupQuestionnaireManager currentStep={currentStep}>
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="pt-8">
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="solution-novelty"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Solution novelty
                </label>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Why is your solution the best solution and what makes it unique?
                </p>
                <div className="mt-1">
                  <textarea
                    id="solution-novelty"
                    name="solution-novelty"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="solution-description"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Solution Description
                </label>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Describe your solution
                </p>
                <div className="mt-1">
                  <textarea
                    id="solution-description"
                    name="solution-description"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="state-of-validation"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  State of validation
                </label>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Idea, MVP, generating revenue etc
                </p>
                <div className="mt-1">
                  <textarea
                    id="state-of-validation"
                    name="state-of-validation"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="competition"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Competition
                </label>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  What competitors are trying to solve a similar problem? (Name, location, URL)
                </p>
                <div className="mt-1">
                  <textarea
                    id="competition"
                    name="competition"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="position-vs-competition"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Position vs Competition
                </label>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Why are you better positioned to succeed?
                </p>
                <div className="mt-1">
                  <textarea
                    id="position-vs-competition"
                    name="position-vs-competition"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="business-model"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Business model
                </label>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Tell us about your business model
                </p>
                <div className="mt-1">
                  <textarea
                    id="business-model"
                    name="business-model"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="traction"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Traction
                </label>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Tell us about your plans to attract clients or consumers of your movement
                </p>
                <div className="mt-1">
                  <textarea
                    id="traction"
                    name="traction"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="founders"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Founders
                </label>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Tell us more about the founding members of your team?
                </p>
                <div className="mt-1">
                  <textarea
                    id="founders"
                    name="founders"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="current-annual-revenue"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Current annual revenue
                </label>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Please indicate your current revenue status
                </p>
                <div className="mt-1">
                  <select
                    id="current-annual-revenue"
                    name="current-annual-revenue"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>Pre-Revenue</option>
                    <option>Less than $500K/annum</option>
                    <option>Less than $2 Million/annum</option>
                    <option>Greater than $2 million/annum</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="external-funding"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  External Funding
                </label>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Have you received external funding from government grants, incubation labs, angel
                  investors, ect.?
                </p>
                <div className="mt-1">
                  <textarea
                    id="external-funding"
                    name="external-funding"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
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

export default withAuthenticationRequired(TheSolution, {
  onRedirecting: () => <Loading />,
});
