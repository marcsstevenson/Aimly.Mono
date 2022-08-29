import React, { useMemo } from 'react';
import { ScaleIcon, ArrowPathIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay/hooks';
import Request, {
  getAccountsStatusQuery,
  getAccountsStatusQuery$data,
} from '__generated__/getAccountsStatusQuery.graphql';
import { AccountsOption } from './AccountsOption';
import { Link } from 'react-router-dom';
import { GetPathForPage } from 'components/shared/AppRoutes';
import Pages from 'components/shared/Pages';

const cards = [
  { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
  { name: 'Pending', href: '#', icon: ArrowPathIcon, amount: '$19,500.00' },
  { name: 'Processed (last 30 days)', href: '#', icon: CheckCircleIcon, amount: '$45,750.00' },
  // More items...
];
interface Props {
  getAccountsStatusRef: PreloadedQuery<getAccountsStatusQuery>;
  accountsOption: AccountsOption;
}

const AccountsStatus = ({ accountsOption, getAccountsStatusRef }: Props) => {
  const response: getAccountsStatusQuery$data = usePreloadedQuery<getAccountsStatusQuery>(
    Request,
    getAccountsStatusRef
  );

  const accountDetails = response?.accountsStatus?.getAccountResponse;

  const accountSetupStartUrl = useMemo(() => {
    let path = GetPathForPage(Pages.AccountsSetupStart);

    // Add the Id of the company profile Id if needed
    if (accountsOption.type === 'COMPANY') {
      path += `?companyProfileId=${accountsOption.id}`;
    }

    return path;
  }, []);

  return (
    <div className="mt-2">
      {!accountDetails && (
        <div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-50 sm:truncate sm:leading-9">
            Get Started with Stripe
          </h2>
          <p className="text-l mt-2 text-gray-600 dark:text-gray-300">
            Import customers, create a product catalogue and generate invoices. We guide you through
            creating a Stripe account so that you can give your customers an amazing billing
            solution.
          </p>

          <Link
            to={{ pathname: accountSetupStartUrl }}
            type="button"
            className="mt-4 inline-flex items-center rounded-md border border-transparent bg-secondary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2"
          >
            Continue to setup
            <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      )}

      {accountDetails && !accountDetails.payoutsEnabled && (
        <div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-50 sm:truncate sm:leading-9">
            Finish your Stripe profile to activate payments
          </h2>
          <p className="text-l mt-2 text-gray-600 dark:text-gray-300">
            You're almost there - complete your Stripe profile to start accepting payments.
          </p>

          <Link
            to={{ pathname: accountSetupStartUrl }}
            type="button"
            className="mt-4 inline-flex items-center rounded-md border border-transparent bg-secondary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2"
          >
            Continue activating
            <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      )}

      {accountDetails && (
        <div className="">
          <div className="flex items-center">
            <div>
              <dl className="mt-6 flex">
                <dt className="sr-only">Account status</dt>
                <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 dark:text-gray-400 sm:mr-6 sm:mt-0">
                  {accountDetails.payoutsEnabled && (
                    <div>
                      <span>
                        <CheckCircleIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                          aria-hidden="true"
                        />
                        Verified account
                      </span>
                    </div>
                  )}
                </dd>
              </dl>
            </div>
          </div>

          <div>Stripe Account: {accountDetails.accountId}</div>
        </div>
      )}

      {/* {cards.map((card) => (
        <div
          key={card.name}
          className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-700"
        >
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <card.icon
                  className="h-6 w-6 text-gray-400 dark:text-gray-500"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                    {card.name}
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900 dark:text-gray-50">
                      {card.amount}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
            <div className="text-sm">
              <a
                href={card.href}
                className="font-medium text-primary-700 hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-400"
              >
                View all
              </a>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default AccountsStatus;
