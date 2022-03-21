// The purpose of this component is to provide a list of month options for the user to select from.

import React, { useState } from 'react';
import { useField } from 'formik';
import { ComboboxOption, GenericCombobox2 } from 'components/shared/GenericCombobox2';
import { FormikProps } from 'components/shared/FormikProps';

interface Props<T> extends FormikProps<T> {
  comboboxOptions: ComboboxOption<T>[];
}

export const GenericComboboxWrapper = <T extends unknown>({ ...props }: Props<T>) => {
  const comboboxOptions = props.comboboxOptions;

  const [field, state, { setValue }] = useField<T>(props.field.name);

  const [selectedOption, setSelectedOption] = useState<ComboboxOption<T>>(
    comboboxOptions.find((option) => state.initialValue === option.value) ?? comboboxOptions[0]
  );

  const onChange = (option: ComboboxOption<T>) => {
    setValue(option.value);
    setSelectedOption(option);
  };

  return (
    <GenericCombobox2
      options={comboboxOptions}
      initiallySelected={selectedOption}
      onChange={onChange}
    />
  );
};
