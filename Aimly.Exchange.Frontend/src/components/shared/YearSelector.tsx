// The purpose of this component is to provide a list of year options for the user to select from.
// Goes back 100 years

import React, { useMemo } from 'react';
import { ComboboxOption } from 'components/shared/GenericCombobox';
import { FormikProps } from 'components/shared/FormikProps';
import { GenericComboboxWrapper } from 'components/shared/GenericComboboxWrapper';

const endYear = new Date().getFullYear() + 1; // Allow a little editing for anticipated experience (eg, during late December)
const startYear = endYear - 101; // Goes back 100 years

export const YearSelector = ({
  //field,
  // form,
  ...props
}: FormikProps<number>) => {
  const comboboxOptions = useMemo<ComboboxOption<number>[]>(() => {
    let workingYear = endYear;
    var years = [];
    while (workingYear >= startYear) {
      years.push(workingYear--);
    }

    return years.map((y, i) => {
      return { id: i, value: y, label: y.toString() };
    });
  }, []);

  return <GenericComboboxWrapper comboboxOptions={comboboxOptions} {...props} />;
};
