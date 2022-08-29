// The purpose of this component is to receive an array of optionTypes and
// allow the user to select one or more of them within a multi-select input.

import React, { useState } from 'react';

import { MarketSearchOption } from 'components/shared/MarketOptions/MarketSearchOption';
import { MarketOptionsSelector } from 'components/shared/MarketOptions/MarketOptionsSelector';
import { SelectedMarketOptions } from 'components/shared/MarketOptions/SelectedMarketOptions';
import { PlusIcon } from '@heroicons/react/24/outline';

interface Props {
  initiallySelected: string[];
  options: ReadonlyArray<MarketSearchOption>;
  title: string;
  onChange(selected: string[]): void;
}

export const MarketOptionsEditor = ({ initiallySelected, options, title, onChange }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selected, setSelected] = useState<string[]>(initiallySelected ?? []);
  const [isAdding, setIsAdding] = React.useState(false);

  const optionSelected = (selectedOption: MarketSearchOption) => {
    // Add option to current list if not already included
    const matchingOptions: string[] = options
      .filter((option) => option.name == selectedOption.name)
      .map((i) => i.name)
      .filter((i): i is string => i !== null);

    // Combine and sort
    const newValues = [...matchingOptions, ...selected].sort();

    setSelected(newValues);
    setIsAdding(false);

    // Bubble the change up to the parent
    onChange(newValues);
  };

  const onRemoveTrigger = (option: string) => {
    // Just option out of current list
    const newValues = selected.filter((i) => i != option);

    setSelected(newValues);

    // Bubble the change up to the parent
    onChange(newValues);
  };

  return (
    <>
      <button
        type="button"
        className="form-button-link"
        onClick={() => {
          setIsAdding(true);
        }}
      >
        <PlusIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
        {title} Filter
      </button>
      {isAdding && (
        <MarketOptionsSelector
          options={options}
          optionSelected={optionSelected}
          selectedOptions={selected}
        />
      )}
      <SelectedMarketOptions
        selectedOptions={selected}
        allowEdit={true}
        removeTrigger={onRemoveTrigger}
      />
    </>
  );
};
