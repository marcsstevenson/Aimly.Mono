// The purpose of this component is to receive an array of optionTypes and
// allow the user to select one or more of them within a multi-select input.

import React, { useMemo } from 'react';
import Select from 'react-select';
import { useField } from 'formik';
import { getUsersMonths } from 'components/shared/UsersLanguageHelper';

interface MonthOption {
  value: number;
  label: string;
}

export const MonthSelector = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const options = useMemo<MonthOption[]>(
    () =>
      getUsersMonths().map((m, i) => {
        return { value: i + 1, label: m };
      }),
    []
  );
  const [field, state, { setValue }] = useField<number>(props.field.name);

  console.log(options);

  // Our state.initialValue is a number
  // We need to filter our options (optionType[]) to those in the initialValue
  // and set the filtered list as our defaultValue
  const defaultValue = options.find((option) => state.initialValue === option.value);

  const onChange = (monthOption: MonthOption) => {
    // Map from optionType[] to string[]
    setValue(monthOption.value);
  };

  return (
    <Select
      {...props}
      isMulti
      className="form-input"
      onChange={onChange}
      options={options}
      defaultValue={defaultValue}
      isSearchable={true}
    />
  );
};
