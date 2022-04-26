import React, { useContext, useEffect, useState } from 'react';
import { useAcceptInviteMutation$data } from '__generated__/useAcceptInviteMutation.graphql';
import useAcceptInviteMutation from 'useAcceptInviteMutation';
import Pages from 'components/shared/Pages';
import { PrivateContext } from 'components/PrivateContext';
import useLocationQuery from 'components/shared/useLocationQuery';
import { NavLink } from 'react-router-dom';
import { GetPathForPage } from 'components/shared/AppRoutes';

const AcceptInvite = () => {
  const { userId } = useContext(PrivateContext);
  let locationQuery = useLocationQuery();
  const [completed, setCompleted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [companyName, setCompanyName] = useState<string | null>(null);
  const [failedMessage, setFailedMessage] = useState<string | null>(null);
  const AcceptInvite = useAcceptInviteMutation();

  useEffect(() => {
    // Get the invite code and the name from query params
    const inviteCode = locationQuery.get('c');
    const associationName = locationQuery.get('n');

    if (inviteCode && associationName) {
      AcceptInvite(
        { userId: userId, inviteCode: inviteCode, associationName: associationName },
        handleSubmitCompleted
      );
    } else {
      setFailedMessage('Invalid invite code :(');
      setCompleted(true);
    }
  }, [AcceptInvite, locationQuery, userId]);

  // This is called once the SetTheProblem mutation has completed
  const handleSubmitCompleted = (response: useAcceptInviteMutation$data): void => {
    if (response.acceptInvite?.success) {
      setSuccess(true);
      setCompanyName(response.acceptInvite.companyName);
    } else {
      setFailedMessage('Processing failed :(');
    }
    setCompleted(true);
  };

  return (
    <main>
      <div className="pt-10 dark:bg-gray-900 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">
                {!completed && (
                  <>
                    <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">Processing your</span>
                      <span className="text-secondary-400 block">invite</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      ...
                    </p>
                  </>
                )}
                {completed && success && (
                  <>
                    <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">Welcome to</span>
                      <span className="text-secondary-400 block">{companyName}!</span>
                    </h1>
                    <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                      <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                        <NavLink
                          to={{ pathname: GetPathForPage(Pages.MyProfiles) }}
                          className="text-secondary-700 hover:bg-secondary-50 flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium shadow-sm sm:px-8"
                        >
                          Build your profiles
                        </NavLink>
                        <NavLink
                          to={{ pathname: GetPathForPage(Pages.Market) }}
                          className="bg-secondary-500 flex items-center justify-center rounded-md border border-transparent bg-opacity-60 px-4 py-3 text-base font-medium text-gray-800 shadow-sm hover:bg-opacity-70 dark:text-white sm:px-8"
                        >
                          Search the market
                        </NavLink>
                      </div>
                    </div>
                  </>
                )}
                {completed && !success && (
                  <>
                    <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">Oh dear</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      {failedMessage}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <img
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://images.unsplash.com/photo-1460467820054-c87ab43e9b59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1367&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More main page content here... */}
    </main>
  );
};

export default AcceptInvite;
