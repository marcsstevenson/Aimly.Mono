// The purpose of this component is to provide a list of month options for the user to select from.

import React, { useMemo, useState } from 'react';
import { useField } from 'formik';
import { getUsersMonths } from 'components/shared/UsersLanguageHelper';
import { ComboboxOption, GenericCombobox } from 'components/shared/GenericCombobox';
import { FormikProps } from 'components/shared/FormikProps';

export const MonthSelector = ({
  //field,
  // form,
  ...props
}: FormikProps<number>) => {
  const comboboxOptions = useMemo<ComboboxOption[]>(
    () =>
      getUsersMonths().map((m, i) => {
        return { id: i + 1, name: m };
      }),
    []
  );

  const [field, state, { setValue }] = useField<number>(props.field.name);

  const [selectedMonthOption, setSelectedMonthOption] = useState<ComboboxOption>(
    comboboxOptions.find((option) => state.initialValue === option.id) ?? comboboxOptions[0]
  );

  const onChange = (option: ComboboxOption) => {
    setValue(option.id);
    setSelectedMonthOption(option);
  };

  return (
    <GenericCombobox
      options={comboboxOptions}
      initiallySelected={selectedMonthOption}
      onChange={onChange}
    />
  );
};
