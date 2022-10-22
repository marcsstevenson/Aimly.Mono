// The purpose of this component is to provide a list of month options for the user to select from.

import React, { useMemo } from 'react';
import { getUsersMonths } from 'components/shared/UsersLanguageHelper';
import { ComboboxOption } from 'components/shared/GenericCombobox';
import { GenericComboboxWrapper } from 'components/shared/GenericComboboxWrapper';
import { FormikProps } from 'components/shared/FormikProps';

export const MonthSelector = ({
  //field,
  // form,
  ...props
}: FormikProps<number>) => {
  const comboboxOptions = useMemo<ComboboxOption<number>[]>(
    () =>
      getUsersMonths().map((m, i) => {
        return { id: i, value: i + 1, label: m };
      }),
    []
  );

  return <GenericComboboxWrapper comboboxOptions={comboboxOptions} {...props} />;
};
