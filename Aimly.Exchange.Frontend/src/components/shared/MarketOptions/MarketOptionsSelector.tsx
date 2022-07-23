// The purpose of this component is to provide a list of year options for the user to select from.
// Goes back 100 years

import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react';

import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Combobox } from '@headlessui/react';

import { MarketSearchOption } from 'components/shared/MarketOptions/MarketSearchOption';
import { MarketOptionsList } from 'components/shared/MarketOptions/MarketOptionsList';

interface MarketOptionsSelectorProps {
  // Fires when the user selects an option
  optionSelected: (option: string) => void;
  // The type of meta options to get
  // At time of writing there is only Skill and Industry options
  options: ReadonlyArray<MarketSearchOption>;
}

export const MarketOptionsSelector = ({ optionSelected, options }: MarketOptionsSelectorProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [filteredOptions, setFilteredOptions] = useState<MarketSearchOption[] | null>(null);
  const [query, setQuery] = useState<string>(''); // This is the value of the filter
  const inputRef = useRef<HTMLInputElement>(null);

  // We want to focus on the input onload
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filter = useCallback(
    (searchTerm: string) => {
      // Filter by name containing
      const filteredOptions = options.filter((option) =>
        option.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOptions(filteredOptions);
    },
    [options]
  );

  const onItemSelected = (option: string) => {
    // Map from optionType[] to string[]
    // setValue(option.id);
    setSelectedOption(option);

    // Bubble up
    optionSelected(option);

    // Clear the filtered options
    setFilteredOptions(null);
  };

  return (
    <Combobox as="div" value={selectedOption} onChange={onItemSelected}>
      <div className="relative mt-1">
        <Combobox.Input
          className="default-combo"
          ref={inputRef}
          onChange={(event) => filter(event.target.value)}
          displayValue={(option: string) => option}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>
        {filteredOptions && <MarketOptionsList options={filteredOptions} />}
      </div>
    </Combobox>
  );
};
