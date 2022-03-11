// The purpose of this component is to provide a generic combo box
// that can be used for any type of single select requirements.

import React, { useMemo, useState } from 'react';
import { classNames } from 'utils/classNames';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Combobox } from '@headlessui/react';

export interface ComboboxOption {
  id: number;
  name: string;
}

export interface Props {
  // A list of options to choose from
  options: ComboboxOption[];

  // An initially selected option
  initiallySelected: ComboboxOption | null;

  onChange: (option: ComboboxOption) => void;
}

export const GenericCombobox = ({ options, initiallySelected, onChange }: Props) => {
  const [query, setQuery] = useState<string>('');

  const filteredComboboxOptions = useMemo<ComboboxOption[]>(() => {
    return query === ''
      ? options
      : options.filter((option) => {
          return option.name.toLowerCase().includes(query.toLowerCase());
        });
  }, [options, query]);

  const onItemSelected = (comboboxOption: ComboboxOption) => {
    // Map from optionType[] to string[]
    // setValue(comboboxOption.id);
    setSelectedComboboxOption(comboboxOption);

    // Bubble up
    onChange(comboboxOption);
  };

  const [selectedComboboxOption, setSelectedComboboxOption] = useState<ComboboxOption>(
    options.find((option) => initiallySelected?.id === option.id) ?? options[0]
  );

  return (
    <Combobox as="div" value={selectedComboboxOption} onChange={onItemSelected}>
      <div className="relative mt-1">
        <Combobox.Input
          className="default-combo"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(comboboxOption: ComboboxOption) => comboboxOption.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
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
                      {comboboxOption.name}
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
