// The purpose of this component is to provide a list meta data options to filter by within the market.
// Industry, Skill, etc.

import React, { useEffect, useMemo, useRef, useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import { MarketSearchOption } from 'components/shared/MarketOptions/MarketSearchOption';
import { MarketOptionsList } from 'components/shared/MarketOptions/MarketOptionsList';

interface MarketOptionsSelectorProps {
  // Fires when the user selects an option
  optionSelected: (option: MarketSearchOption) => void;
  // The type of meta options to get
  // At time of writing there is only Skill and Industry options
  options: ReadonlyArray<MarketSearchOption>;
  selectedOptions: string[];
}

export const MarketOptionsSelector = ({
  optionSelected,
  options,
  selectedOptions,
}: MarketOptionsSelectorProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const availableOptions = useMemo<MarketSearchOption[]>(() => {
    return options.filter((option) => !selectedOptions.find((so) => so === option.name));
  }, [selectedOptions]);
  const [filteredOptions, setFilteredOptions] = useState<MarketSearchOption[] | null>(
    availableOptions
  );

  // We want to focus on the input onload
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filter = (searchTerm: string) => {
    // Filter by name containing
    const filteredOptions = availableOptions.filter((option) =>
      option.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
  };

  const onItemSelected = (option: any) => {
    option = option as MarketSearchOption;

    // Map from optionType[] to string[]
    // setValue(option.id);
    setSelectedOption(option.name);

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
          <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>
        {filteredOptions && <MarketOptionsList options={filteredOptions} />}
      </div>
    </Combobox>
  );
};
