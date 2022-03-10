// The purpose of this component is to receive an array of optionTypes and
// allow the user to select one or more of them within a multi-select input.

import React, { useMemo, useState } from 'react';
import Select from 'react-select';
import { useField } from 'formik';
import { getUsersMonths } from 'components/shared/UsersLanguageHelper';
import { classNames } from 'utils/classNames';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Combobox } from '@headlessui/react';

interface MonthOption {
  id: number;
  name: string;
}

export const MonthSelector = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const options = useMemo<MonthOption[]>(
    () =>
      getUsersMonths().map((m, i) => {
        return { id: i + 1, name: m };
      }),
    []
  );
  const [query, setQuery] = useState('');

  // Our state.initialValue is a number
  // We need to filter our options (optionType[]) to those in the initialValue
  // and set the filtered list as our defaultValue
  // const defaultValue = options.find((option) => state.initialValue === option.value);

  const [field, state, { setValue }] = useField<number>(props.field.name);

  const filteredMonthOptions =
    query === ''
      ? options
      : options.filter((option) => {
          return option.name.toLowerCase().includes(query.toLowerCase());
        });

  const onChange = (monthOption: MonthOption) => {
    // Map from optionType[] to string[]
    setValue(monthOption.id);
  };

  const [selectedMonthOption, setSelectedMonthOption] = useState<MonthOption>(
    options.find((option) => state.initialValue === option.id) ?? options[0]
  );

  return (
    <>
      <Combobox as="div" value={selectedMonthOption} onChange={setSelectedMonthOption}>
        <div className="relative mt-1">
          <Combobox.Input
            className="default-combo"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(monthOption: MonthOption) => monthOption.name}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </Combobox.Button>

          {filteredMonthOptions.length > 0 && (
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-900 sm:text-sm">
              {filteredMonthOptions.map((monthOption) => (
                <Combobox.Option
                  key={monthOption.id}
                  value={monthOption}
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
                      <span
                        className={classNames('block truncate', selected ? 'font-semibold' : '')}
                      >
                        {monthOption.name}
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
              ))}
            </Combobox.Options>
          )}
        </div>
      </Combobox>
      {/* <Select
        {...props}
        isMulti
        className="form-input"
        onChange={onChange}
        options={options}
        defaultValue={defaultValue}
        isSearchable={true}
      /> */}
    </>
  );
};
