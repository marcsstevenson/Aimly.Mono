// The purpose of this component is to provide a list of year options for the user to select from.
// Goes back 100 years

import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react';

import AppQuery, {
  metaDataOptionsQuery,
  metaDataOptionsQuery$data,
  metaDataOptionsQuery$variables,
} from '__generated__/metaDataOptionsQuery.graphql';
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from 'react-relay';
import { classNames } from 'utils/classNames';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import debounce from 'lodash.debounce';

interface MetaDataOptionsListProps {
  queryRef: PreloadedQuery<metaDataOptionsQuery>;
  query: string;
}

const MetaDataOptionsList = ({ queryRef, query }: MetaDataOptionsListProps) => {
  const response: metaDataOptionsQuery$data = usePreloadedQuery<metaDataOptionsQuery>(
    AppQuery,
    queryRef
  );
  const options = response.metaDataOptions;

  return (
    <>
      <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-900 sm:text-sm">
        {options &&
          (options.length === 0 && query !== '' ? (
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
                      {option}
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

interface MetaDataOptionsSelectorProps {
  // Fires when the user selects an option
  optionSelected: (option: string) => void;
  // The type of meta options to get
  // At time of writing there is only Skill and Industry options
  metaDataType: string;
  tenantId?: string;
}

export const MetaDataOptionsSelector = ({
  optionSelected,
  metaDataType,
  tenantId,
}: MetaDataOptionsSelectorProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [query, setQuery] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [queryRef, loadQuery] = useQueryLoader<metaDataOptionsQuery>(AppQuery, null);

  // We want to focus on the input onload
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const refetch = useCallback(
    (searchTerm: string) => {
      setQuery(searchTerm);
      const variables: metaDataOptionsQuery$variables = {
        nameStartingWith: searchTerm,
        type: metaDataType,
        tenantId: tenantId,
      };
      // Load the query again using the same original variables.
      // Calling loadQuery will update the value of queryRef.
      // and this will update the usePreloadedQuery value for the MarketSearchResults
      // component which will in-turn trigger that component to rerender.
      loadQuery(variables);
    },
    [loadQuery]
  );

  var debouncedRefetch = debounce((searchTerm: string) => {
    refetch(searchTerm);
  }, 300);

  const handleSearchRequest = useCallback(
    (searchTerm: string) => {
      if (searchTerm.length > 0) {
        debouncedRefetch(searchTerm);
      }
    },
    [debouncedRefetch]
  );

  const onItemSelected = (option: string) => {
    // Map from optionType[] to string[]
    // setValue(option.id);
    setSelectedOption(option);

    // Bubble up
    optionSelected(option);
  };

  return (
    <Combobox as="div" value={selectedOption} onChange={onItemSelected}>
      <div className="relative mt-1">
        <Combobox.Input
          className="default-combo"
          ref={inputRef}
          onChange={(event) => handleSearchRequest(event.target.value)}
          displayValue={(option: string) => option}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>
        <Suspense
          fallback={
            <div className="relative cursor-default select-none py-2 px-4 text-gray-700 dark:text-gray-400">
              Searching...
            </div>
          }
        >
          {queryRef && <MetaDataOptionsList queryRef={queryRef} query={query} />}
        </Suspense>
      </div>
    </Combobox>
  );
};
