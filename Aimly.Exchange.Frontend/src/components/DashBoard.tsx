import React, { useContext } from 'react';
import { ScaleIcon, RefreshIcon, BadgeCheckIcon } from '@heroicons/react/outline';
import {
  CashIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/solid';
import { classNames } from 'utils/classNames';
import { PrivateContext } from 'components/PrivateContext';
import CurrencyFormat from 'react-currency-format';
import { NavLink } from 'react-router-dom';

const cards = [
  { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
  { name: 'Pending', href: '#', icon: RefreshIcon, amount: '$19,500.00' },
  { name: 'Processed (last 30 days)', href: '#', icon: CheckCircleIcon, amount: '$45,750.00' },
  // More items...
];

export interface transactionType {
  name: string;
  href: string;
  amount: number;
  currency: string;
  status: StatusType;
  date: string;
  datetime: string;
}

export interface StatusType {
  name: string;
  classNames: string;
}

export const statuses: StatusType[] = [
  { name: 'Success', classNames: 'bg-green-100 text-green-800' },
  { name: 'Processing', classNames: 'bg-yellow-100 text-yellow-800' },
  { name: 'Pending', classNames: 'bg-gray-100 text-gray-800' },
];

const transactions: transactionType[] = [
  {
    name: 'Payment to Molly Sanders',
    href: '#',
    amount: -20000,
    currency: 'USD',
    status: statuses[0],
    date: '11th July, 2020',
    datetime: '2020-07-11',
  },
  {
    name: 'Payment to Jimmy Pike',
    href: '#',
    amount: -8060,
    currency: 'USD',
    status: statuses[1],
    date: '10th July, 2020',
    datetime: '2020-07-10',
  },
  {
    name: 'Payment from Smart Services Ltd.',
    href: '#',
    amount: 14630,
    currency: 'USD',
    status: statuses[0],
    date: '10th July, 2020',
    datetime: '2020-07-10',
  },
  {
    name: 'Payment from Smarter Services Ltd.',
    href: '#',
    amount: 5630,
    currency: 'USD',
    status: statuses[2],
    date: '8th July, 2020',
    datetime: '2020-07-08',
  },
];

const DashBoard = () => {
  // Returns morning, afternoon or evening depending on the time of day
  const getTimeOfDay = (): string => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      return 'morning';
    } else if (hour >= 12 && hour < 18) {
      return 'afternoon';
    } else {
      return 'evening';
    }
  };
  const { user } = useContext(PrivateContext);

  return (
    <div className="flex-1 pb-8">
      {/* This is just to trigger Tailwind to include the statusStyles classes in the output.css*/}
      <span className="hidden bg-green-100 text-green-800"></span>
      <span className="hidden bg-yellow-100 text-yellow-800"></span>
      <span className="hidden bg-gray-100 text-gray-800"></span>
      {/* Page header */}
      <div className="bg-white shadow dark:bg-gray-700">
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              {/* Profile */}
              <div className="flex items-center">
                <img
                  className="hidden h-16 w-16 rounded-full sm:block"
                  src={user?.picture}
                  alt=""
                />
                <div>
                  <div className="flex items-center">
                    <img className="h-16 w-16 rounded-full sm:hidden" src={user?.picture} alt="" />
                    <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 dark:text-gray-50 sm:truncate sm:leading-9">
                      Good {getTimeOfDay()}, {user?.name}
                    </h1>
                  </div>
                  <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Company</dt>
                    <dd className="flex items-center text-sm font-medium capitalize text-gray-500 dark:text-gray-400 sm:mr-6">
                      <OfficeBuildingIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500"
                        aria-hidden="true"
                      />
                      Aimly.io
                    </dd>
                    <dt className="sr-only">Account status</dt>
                    <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 dark:text-gray-400 sm:mr-6 sm:mt-0">
                      <CheckCircleIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                        aria-hidden="true"
                      />
                      Verified account
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
              <button
                type="button"
                className="focus:ring-secondary-500 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-900"
              >
                Add money
              </button>
              <button
                type="button"
                className="bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-500 inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Send money
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 rounded-md bg-green-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <BadgeCheckIcon className="h-12 w-12 text-2xl text-green-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-2xl font-medium text-green-800">
                  Welcome to the Catallyze Exchange!
                </h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>
                    Please note that we are currently in an early access alpha phase so there may be
                    some bugs and issues and there are still many more features to be added in the
                    near future.
                  </p>
                  <p className="mt-4">
                    March 7th 2022 - The{' '}
                    <NavLink className="mr-1 font-medium" to={{ pathname: '/market' }}>
                      Market
                    </NavLink>
                    has been redeveloped and now displays results for startups, mentors, experts and
                    community. Profiles can also be viewed in detail for startups and community.
                  </p>
                  <p className="mt-4">
                    Feb 24th 2022 - At time of writing, the{' '}
                    <NavLink className="mr-1 font-medium" to={{ pathname: '/profiles' }}>
                      Profiles
                    </NavLink>
                    area is the most mature and will allow you to create and manage your own
                    profiles for personal, startups, mentors and experts.
                  </p>
                  <p className="mt-4">
                    For feedback, support and suggestions, please feel free to contact Marc at:
                    <a
                      className="hover:text-primary-500 ml-1 font-medium"
                      href="mailto: marc.stevenson@aimly.io"
                    >
                      marc.stevenson@aimly.io
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-50">
            Overview (Just an example dashboard for now)
          </h2>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            {cards.map((card) => (
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
                      className="text-primary-700 hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-400 font-medium"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 dark:text-gray-50 sm:px-6 lg:px-8">
          Recent activity
        </h2>

        {/* Activity list (smallest breakpoint only) */}
        <div className="shadow sm:hidden">
          <ul
            role="list"
            className="mt-2 divide-y divide-gray-200 overflow-hidden shadow dark:divide-gray-600 sm:hidden"
          >
            {transactions.map((transaction, index) => (
              <li key={index}>
                <a
                  href={transaction.href}
                  className="block bg-white px-4 py-4 hover:bg-gray-50 dark:bg-gray-800"
                >
                  <span className="flex items-center space-x-4">
                    <span className="flex flex-1 space-x-2 truncate">
                      <CashIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="flex flex-col truncate text-sm text-gray-500 dark:text-gray-400">
                        <span className="truncate">{transaction.name}</span>
                        <span>
                          <span className="font-medium text-gray-900 dark:text-gray-50">
                            {transaction.amount}
                          </span>{' '}
                          {transaction.currency}
                        </span>
                        <time dateTime={transaction.datetime}>{transaction.date}</time>
                      </span>
                    </span>
                    <ChevronRightIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <nav
            className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 dark:border-gray-600 dark:bg-gray-800"
            aria-label="Pagination"
          >
            <div className="flex flex-1 justify-between">
              <a
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm
                font-medium text-gray-700 hover:text-gray-500 dark:bg-gray-800 dark:text-gray-200 hover:dark:bg-gray-900"
              >
                Previous
              </a>
              <a
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm
                font-medium text-gray-700 hover:text-gray-500 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-900"
              >
                Next
              </a>
            </div>
          </nav>
        </div>

        {/* Activity table (small breakpoint and up) */}
        <div className="hidden sm:block">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mt-2 flex flex-col">
              <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                  <thead>
                    <tr>
                      <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                        Transaction
                      </th>
                      <th className="bg-gray-50 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                        Amount
                      </th>
                      <th className="hidden bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:bg-gray-800 dark:text-gray-400 md:block">
                        Status
                      </th>
                      <th className="bg-gray-50 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-600 dark:bg-gray-800">
                    {transactions.map((transaction, index) => (
                      <tr key={index} className="bg-white dark:bg-gray-700">
                        <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-50">
                          <div className="flex">
                            <a
                              href={transaction.href}
                              className="group inline-flex space-x-2 truncate text-sm"
                            >
                              <CashIcon
                                className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-gray-500"
                                aria-hidden="true"
                              />
                              <p className="truncate text-gray-500 group-hover:text-gray-900 dark:text-gray-50">
                                {transaction.name}
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500 dark:text-gray-400">
                          {/* <CurrencyFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} /> */}
                          <CurrencyFormat
                            value={transaction.amount}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            className="mr-1 font-medium text-gray-900 dark:text-gray-50"
                          />
                          {transaction.currency}
                        </td>
                        <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400 md:block">
                          <span
                            className={classNames(
                              transaction.status.classNames,
                              'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize'
                            )}
                          >
                            {transaction.status.name}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500 dark:text-gray-400">
                          <time dateTime={transaction.datetime}>{transaction.date}</time>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Pagination */}
                <nav
                  className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 dark:border-gray-600 dark:bg-gray-800 sm:px-6"
                  aria-label="Pagination"
                >
                  <div className="hidden sm:block">
                    <p className="text-sm text-gray-700 dark:text-gray-200">
                      Showing <span className="font-medium">1</span> to{' '}
                      <span className="font-medium">10</span> of{' '}
                      <span className="font-medium">20</span> results
                    </p>
                  </div>
                  <div className="flex flex-1 justify-between sm:justify-end">
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm
                        font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-900"
                    >
                      Previous
                    </a>
                    <a
                      href="#"
                      className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm
                        font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-900"
                    >
                      Next
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
