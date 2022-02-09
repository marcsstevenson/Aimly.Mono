import React, { useContext } from 'react';
import { ScaleIcon, RefreshIcon } from '@heroicons/react/outline';
import {
  CashIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/solid';
import { classNames } from 'utils/classNames';
import { PrivateContext } from 'components/private/PrivateContext';
import CurrencyFormat from 'react-currency-format';

const cards = [
  { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
  { name: 'Pending', href: '#', icon: RefreshIcon, amount: '$19,500.00' },
  { name: 'Processed (last 30 days)', href: '#', icon: CheckCircleIcon, amount: '$45,750.00' },
  // More items...
];

export interface transactionType {
  name: string,
  href: string,
  amount: number,
  currency: string,
  status: StatusType,
  date: string,
  datetime: string,
}

export interface StatusType{
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
  }
  const { user } = useContext(PrivateContext);

  return (
    <div className="flex-1 pb-8">
      {/* This is just to trigger Tailwind to include the statusStyles classes in the output.css*/}
      <span className="hidden bg-green-100 text-green-800"></span>
      <span className="hidden bg-yellow-100 text-yellow-800"></span>
      <span className="hidden bg-gray-100 text-gray-800"></span>
      {/* Page header */}
      <div className="bg-white dark:bg-gray-700 shadow">
        <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              {/* Profile */}
              <div className="flex items-center">
                <img
                  className="hidden h-16 w-16 rounded-full sm:block"
                  src={ user?.picture }
                  alt=""
                />
                <div>
                  <div className="flex items-center">
                    <img
                      className="h-16 w-16 rounded-full sm:hidden"
                      src={ user?.picture }
                      alt=""
                    />
                    <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 dark:text-gray-50 sm:leading-9 sm:truncate">
                      Good { getTimeOfDay() }, { user?.name }
                    </h1>
                  </div>
                  <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Company</dt>
                    <dd className="flex items-center text-sm text-gray-500 dark:text-gray-400 font-medium capitalize sm:mr-6">
                      <OfficeBuildingIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500"
                        aria-hidden="true"
                      />
                      Aimly.io
                    </dd>
                    <dt className="sr-only">Account status</dt>
                    <dd className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-400 font-medium sm:mr-6 sm:mt-0 capitalize">
                      <CheckCircleIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
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
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Add money
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Send money
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50">(Just an example dashboard for now)</h2>
          <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50">Overview</h2>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            {cards.map((card) => (
              <div key={card.name} className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <card.icon className="h-6 w-6 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{card.name}</dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900 dark:text-gray-50">{card.amount}</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3">
                  <div className="text-sm">
                    <a href={card.href} className="font-medium text-primary-700 hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-400">
                      View all
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 dark:text-gray-50 sm:px-6 lg:px-8">
          Recent activity
        </h2>

        {/* Activity list (smallest breakpoint only) */}
        <div className="shadow sm:hidden">
          <ul role="list" className="mt-2 divide-y divide-gray-200 dark:divide-gray-600 overflow-hidden shadow sm:hidden">
            {transactions.map((transaction, index) => (
              <li key={index}>
                <a href={transaction.href} className="block px-4 py-4 bg-white hover:bg-gray-50 dark:bg-gray-800">
                  <span className="flex items-center space-x-4">
                    <span className="flex-1 flex space-x-2 truncate">
                      <CashIcon className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                      <span className="flex flex-col text-gray-500 dark:text-gray-400 text-sm truncate">
                        <span className="truncate">{transaction.name}</span>
                        <span>
                          <span className="text-gray-900 dark:text-gray-50 font-medium">{transaction.amount}</span>{' '}
                          {transaction.currency}
                        </span>
                        <time dateTime={transaction.datetime}>{transaction.date}</time>
                      </span>
                    </span>
                    <ChevronRightIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-500"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <nav
            className="bg-white dark:bg-gray-800 px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-600"
            aria-label="Pagination"
          >
            <div className="flex-1 flex justify-between">
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md
                text-gray-700 bg-white dark:bg-gray-800 hover:dark:bg-gray-900 hover:text-gray-500 dark:text-gray-200"
              >
                Previous
              </a>
              <a
                href="#"
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md
                text-gray-700 bg-white dark:bg-gray-800 dark:hover:bg-gray-900 hover:text-gray-500 dark:text-gray-200"
              >
                Next
              </a>
            </div>
          </nav>
        </div>

        {/* Activity table (small breakpoint and up) */}
        <div className="hidden sm:block">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col mt-2">
              <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Transaction
                      </th>
                      <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="hidden px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider md:block">
                        Status
                      </th>
                      <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-600">
                    {transactions.map((transaction, index) => (
                      <tr key={index} className="bg-white dark:bg-gray-700">
                        <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-50">
                          <div className="flex">
                            <a
                              href={transaction.href}
                              className="group inline-flex space-x-2 truncate text-sm"
                            >
                              <CashIcon
                                className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              <p className="text-gray-500 truncate group-hover:text-gray-900 dark:text-gray-50">
                                {transaction.name}
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {/* <CurrencyFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} /> */}
                          <CurrencyFormat value={transaction.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} className="text-gray-900 dark:text-gray-50 font-medium mr-1" />
                          {transaction.currency}
                        </td>
                        <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 md:block">
                          <span
                            className={classNames(
                              transaction.status.classNames,
                              'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                            )}
                          >
                            {transaction.status.name}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          <time dateTime={transaction.datetime}>{transaction.date}</time>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Pagination */}
                <nav
                  className="bg-white dark:bg-gray-800 px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-600 sm:px-6"
                  aria-label="Pagination"
                >
                  <div className="hidden sm:block">
                    <p className="text-sm text-gray-700 dark:text-gray-200">
                      Showing <span className="font-medium">1</span> to{' '}
                      <span className="font-medium">10</span> of{' '}
                      <span className="font-medium">20</span> results
                    </p>
                  </div>
                  <div className="flex-1 flex justify-between sm:justify-end">
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md
                        text-gray-700 dark:text-gray-200 bg-white hover:bg-gray-50 dark:hover:bg-gray-900 dark:bg-gray-800"
                    >
                      Previous
                    </a>
                    <a
                      href="#"
                      className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md
                        text-gray-700 dark:text-gray-200 bg-white hover:bg-gray-50 dark:hover:bg-gray-900 dark:bg-gray-800"
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
}

export default DashBoard;
