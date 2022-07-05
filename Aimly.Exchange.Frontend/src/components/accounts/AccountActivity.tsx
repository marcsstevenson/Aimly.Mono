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
import AccountBalances from './AccountBalances';

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

const AccountActivity = () => {
  return (
    <div>
      {/* This is just to trigger Tailwind to include the statusStyles classes in the output.css*/}
      <span className="hidden bg-green-100 text-green-800"></span>
      <span className="hidden bg-yellow-100 text-yellow-800"></span>
      <span className="hidden bg-gray-100 text-gray-800"></span>
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
  );
};

export default AccountActivity;
