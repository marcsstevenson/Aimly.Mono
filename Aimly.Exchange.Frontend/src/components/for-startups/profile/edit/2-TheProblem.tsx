import React, { useRef } from 'react';
import Loading from 'components/Loading';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import StartupQuestionnaireManager from 'components/for-startups/profile/edit/StartupQuestionnaireManager';
import { GetPathForPage, Pages } from 'components/shared/AppRoutes';

const TheProblem = () => {
  const navigate = useNavigate();
  const topRef = useRef<HTMLDivElement>(null);
  const currentStep = 'TheProblem';

  const next = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    navigate(GetPathForPage(Pages.TheSolution));
  };

  return (
    <StartupQuestionnaireManager currentStep={currentStep}>
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="pt-8">
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="your-why"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Your Why
                </label>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Why are you doing this?
                </p>
                <div className="mt-1">
                  <textarea
                    id="your-why"
                    name="your-why"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="the-problem"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  The Problem
                </label>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  What is the problem that you aim to solve?
                </p>
                <div className="mt-1">
                  <textarea
                    id="the-problem"
                    name="the-problem"
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

export default withAuthenticationRequired(TheProblem, {
  onRedirecting: () => <Loading />,
});
