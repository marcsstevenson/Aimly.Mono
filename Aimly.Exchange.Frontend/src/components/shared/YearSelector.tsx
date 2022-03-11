// The purpose of this component is to provide a list of year options for the user to select from.
// Goes back 100 years

import React, { useMemo, useState } from 'react';
import { useField } from 'formik';
import { ComboboxOption, GenericCombobox } from 'components/shared/GenericCombobox';
import { FormikProps } from 'components/shared/FormikProps';

const endYear = new Date().getFullYear() + 1; // Allow a little editing for anticipated experience (eg, during late December)
const startYear = endYear - 101; // Goes back 100 years

export const YearSelector = ({
  //field,
  // form,
  ...props
}: FormikProps<number>) => {
  const comboboxOptions = useMemo<ComboboxOption[]>(() => {
    let workingYear = endYear;
    var years = [];
    while (workingYear >= startYear) {
      years.push(workingYear--);
    }

    return years.map((m) => {
      return { id: m, name: m.toString() };
    });
  }, []);

  const [field, state, { setValue }] = useField<number>(props.field.name);

  const [selectedOption, setSelectedOption] = useState<ComboboxOption>(
    comboboxOptions.find((option) => state.initialValue === option.id) ?? comboboxOptions[0]
  );

  const onChange = (option: ComboboxOption) => {
    setValue(option.id);
    setSelectedOption(option);
  };

  return (
    <GenericCombobox
      options={comboboxOptions}
      initiallySelected={selectedOption}
      onChange={onChange}
    />
  );
};
