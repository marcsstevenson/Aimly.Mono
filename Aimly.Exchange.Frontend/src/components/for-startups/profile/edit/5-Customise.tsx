import React from 'react';
import Pages from 'components/shared/Pages';
import Loading from 'components/Loading';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import StartupQuestionnaireManager from 'components/for-startups/profile/edit/StartupQuestionnaireManager';
import { GetPathForPage } from 'components/shared/AppRoutes';

const Customise = () => {
  const navigate = useNavigate();
  const currentStep = 'Customise';

  const next = () => {
    navigate(GetPathForPage(Pages.DashBoard));
  };

  return (
    <StartupQuestionnaireManager currentStep={currentStep}>
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="pt-8">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                Profile Image
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                Set a public profile image for your account.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Cover photo
                </label>
                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600 dark:text-gray-400">
                      <label
                        htmlFor="file-upload"
                        className="text-primary-600 hover:text-primary-500 focus-within:ring-primary-500 relative cursor-pointer rounded-md bg-white font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-300">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="photo"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Photo
                    </label>
                    <div className="mt-1 flex items-center">
                      <span className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                        <svg
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button
                        type="button"
                        className="focus:ring-primary-500 ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:text-gray-200"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                Notifications
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                We'll always let you know about important changes, but you pick what else you want
                to hear about.
              </p>
            </div>
            <div className="mt-6">
              <fieldset>
                <legend className="text-base font-medium text-gray-900 dark:text-gray-100">
                  By Email
                </legend>
                <div className="mt-4 space-y-4">
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="focus:ring-primary-500 text-primary-600 h-4 w-4 rounded border-gray-300"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-700 dark:text-gray-200"
                      >
                        Comments
                      </label>
                      <p className="text-gray-500 dark:text-gray-300">
                        Get notified when someones posts a comment on a posting.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="focus:ring-primary-500 text-primary-600 h-4 w-4 rounded border-gray-300"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-gray-700 dark:text-gray-200"
                      >
                        Candidates
                      </label>
                      <p className="text-gray-500 dark:text-gray-300">
                        Get notified when a candidate applies for a job.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="focus:ring-primary-500 text-primary-600 h-4 w-4 rounded border-gray-300"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-700 dark:text-gray-200"
                      >
                        Offers
                      </label>
                      <p className="text-gray-500 dark:text-gray-300">
                        Get notified when a candidate accepts or rejects an offer.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="mt-6">
                <div>
                  <legend className="text-base font-medium text-gray-900 dark:text-gray-100">
                    Push Notifications
                  </legend>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    These are delivered via SMS to your mobile phone.
                  </p>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-primary-500 text-primary-600 h-4 w-4 border-gray-300"
                    />
                    <label
                      htmlFor="push-everything"
                      className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Everything
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-primary-500 text-primary-600 h-4 w-4 border-gray-300"
                    />
                    <label
                      htmlFor="push-email"
                      className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Same as email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-primary-500 text-primary-600 h-4 w-4 border-gray-300"
                    />
                    <label
                      htmlFor="push-nothing"
                      className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      No push notifications
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="py-5">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => next()}
              className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 ml-3 inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Done
            </button>
          </div>
        </div>
      </form>
    </StartupQuestionnaireManager>
  );
};

export default withAuthenticationRequired(Customise, {
  onRedirecting: () => <Loading />,
});
