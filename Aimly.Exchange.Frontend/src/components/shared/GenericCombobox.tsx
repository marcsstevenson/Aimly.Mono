// The purpose of this component is to provide a generic combo box
// that can be used for any type of single select requirements.

import React, { useMemo, useState } from 'react';
import { classNames } from 'utils/classNames';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';

export interface ComboboxOption<T> {
  // An index for the option. Should be unique.
  id: number;

  // The value to select
  value: T;

  // A human readable label for the option
  label: string;

  imageUrl?: string;
}

export interface Props<T> {
  // A list of options to choose from
  options: ComboboxOption<T>[];

  // An initially selected option
  initiallySelected: ComboboxOption<T> | null;

  onChange?: (option: ComboboxOption<T>) => void;
}

export const GenericCombobox = <T extends unknown>({
  options,
  initiallySelected,
  onChange,
}: Props<T>) => {
  const [query, setQuery] = useState<string>('');

  const filteredComboboxOptions = useMemo<ComboboxOption<T>[]>(() => {
    return query === ''
      ? options
      : options.filter((option) => {
          return option.label.toLowerCase().includes(query.toLowerCase());
        });
  }, [options, query]);

  const onItemSelected = (comboboxOption: ComboboxOption<T>) => {
    // Map from optionType[] to string[]
    // setValue(comboboxOption.id);
    setSelectedComboboxOption(comboboxOption);

    // Bubble up
    if (onChange) onChange(comboboxOption);
  };

  const [selectedComboboxOption, setSelectedComboboxOption] = useState<ComboboxOption<T>>(
    options.find((option) => initiallySelected?.id === option.id) ?? options[0]
  );

  return (
    <Combobox as="div" value={selectedComboboxOption} onChange={onItemSelected}>
      <div className="relative mt-1">
        <Combobox.Input
          className="default-combo"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(comboboxOption: ComboboxOption<T>) => comboboxOption.label}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredComboboxOptions.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-900 sm:text-sm">
            {filteredComboboxOptions.map((comboboxOption) => (
              <Combobox.Option
                key={comboboxOption.id}
                value={comboboxOption}
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
                      {comboboxOption.imageUrl && (
                        <img
                          src="https://media-exp1.licdn.com/dms/image/C5603AQElIHFv1TDw_g/profile-displayphoto-shrink_800_800/0/1571008226920?e=1651708800&v=beta&t=cMucYzgnnS1BGsa2-ndIDEoP6_9_FL5aXDde226wqEs"
                          alt=""
                          className="h-6 w-6 flex-shrink-0 rounded-full"
                        />
                      )}
                      {comboboxOption.label}
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
  );
};
