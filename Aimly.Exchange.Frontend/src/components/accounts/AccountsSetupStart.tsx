import React, { useCallback, useContext, useMemo } from 'react';
import { PrivateContext } from 'components/PrivateContext';
import useCreateAccountForEntityMutation from 'useCreateAccountForEntityMutation';
import { GetPathForPage } from 'components/shared/AppRoutes';

import stripeImage from 'assets/Stripe1.png';
import {
  // GetAboutYouModelInput,
  useCreateAccountForEntityMutation$variables,
  useCreateAccountForEntityMutation$data,
} from '__generated__/useCreateAccountForEntityMutation.graphql';
import Pages from 'components/shared/Pages';
import useLocationQuery from 'components/shared/useLocationQuery';
import { GetCurrentTenant } from 'tenant/TenantValues';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';

// The purpose of this component is to start the setup of the user's account profile
// We call the CreateAccountForEntity mutation
// and then redirect the user to the Account Provider's setup URL
const AccountsSetupStart = () => {
  const { checkedInUser } = useContext(PrivateContext);
  let locationQuery = useLocationQuery();
  const companyProfileId = useMemo(() => {
    return locationQuery.get('companyProfileId');
  }, [locationQuery]);
  const CreateAccountForEntity = useCreateAccountForEntityMutation();
  const currentTenant = useMemo(() => {
    return GetCurrentTenant();
  }, []);
  const navigate = useNavigate();

  const begin = useCallback(
    () => {
      // Get the account link for the account provider
      return CreateAccountForEntity(
        checkedInUser?.userId ?? '',
        companyProfileId,
        GetPathForPage(Pages.AccountsSetupStart),
        GetPathForPage(Pages.AccountsSetupComplete),
        handleBeginCompleted
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [CreateAccountForEntity]

    // Redirect the user to the account provider's setup URL
  );

  // This is called once the SetAboutYou mutation has completed
  const handleBeginCompleted = (response: useCreateAccountForEntityMutation$data): void => {
    if (response.createAccountForEntity?.accountLink) {
      window.location.href = response.createAccountForEntity.accountLink;
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
          <h1>
            <span className="mt-1 block text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
              <span className="block text-secondary-600">Setup with Stripe</span>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            We get you started with Stripe and integrate your Stripe account with the{' '}
            {currentTenant.name} platform so that you can quickly import and invoice customers. Note
            that financial regulations require business and personal details from you to complete
            this process.{' '}
            <a
              className="text-secondary-400 underline"
              target={'_blank'}
              href="https://support.stripe.com/questions/know-your-customer-obligations"
            >
              Details here <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4" />
            </a>
          </p>
          <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
            <button
              aria-label="go back"
              type="submit"
              className="mt-3 w-full rounded-md px-6 py-3 text-base font-medium sm:mt-0 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
              onClick={goBack}
            >
              Back
            </button>
            <button
              type="submit"
              className="mt-3 w-full rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-100 sm:mt-0 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
              onClick={begin}
            >
              Begin
            </button>
          </div>
        </div>
        <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
          <svg
            className="absolute top-0 left-1/2 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
            width={640}
            height={784}
            fill="none"
            viewBox="0 0 640 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                x={118}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200 dark:text-gray-700"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              y={72}
              width={640}
              height={640}
              className="text-primary-100 dark:text-primary-900"
              fill="currentColor"
            />
            <rect
              x={118}
              width={404}
              height={784}
              fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
            />
          </svg>
          <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
            <img className="w-full rounded-lg" src={stripeImage} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AccountsSetupStart;
