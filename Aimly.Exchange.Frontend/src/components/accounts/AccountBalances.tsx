import React from 'react';
import { ScaleIcon, RefreshIcon } from '@heroicons/react/outline';
import { CheckCircleIcon } from '@heroicons/react/solid';

const cards = [
  { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
  { name: 'Pending', href: '#', icon: RefreshIcon, amount: '$19,500.00' },
  { name: 'Processed (last 30 days)', href: '#', icon: CheckCircleIcon, amount: '$45,750.00' },
  // More items...
];

const AccountBalances = () => {
  return (
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
                className="font-medium text-primary-700 hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-400"
              >
                View all
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountBalances;
