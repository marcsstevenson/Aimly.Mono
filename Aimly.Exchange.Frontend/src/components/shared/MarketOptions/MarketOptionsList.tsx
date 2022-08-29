import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react';

import { Combobox } from '@headlessui/react';
import { MarketSearchOption } from 'components/shared/MarketOptions/MarketSearchOption';
import { classNames } from 'utils/classNames';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

interface MarketOptionsListProps {
  options: MarketSearchOption[];
}

/// Display a list of options and let the use choose
export const MarketOptionsList = ({ options }: MarketOptionsListProps) => {
  return (
    <>
      <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-900 sm:text-sm">
        {options &&
          (options.length === 0 ? (
            <div className="relative cursor-default select-none py-2 px-4 text-gray-700 dark:text-gray-400">
              Nothing found.
            </div>
          ) : (
            options.map((option, i) => (
              <Combobox.Option
                key={i}
                value={option}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-8 pr-4',
                    active
                      ? 'bg-secondary-600 text-white'
                      : 'text-gray-900 dark:bg-gray-900 dark:text-white'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span className={classNames('block truncate', selected ? 'font-semibold' : '')}>
                      {option.name} ({option.count})
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 left-0 flex items-center pl-1.5',
                          active ? 'text-white' : 'text-secondary-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))
          ))}
      </Combobox.Options>
    </>
  );
};
