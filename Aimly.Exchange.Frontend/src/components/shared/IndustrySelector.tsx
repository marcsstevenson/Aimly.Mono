// The purpose of this component is to receive an array of optionTypes and
// allow the user to select one or more of them within a multi-select input.

import React from 'react';
import Select, { MultiValue } from 'react-select';
import { useField } from 'formik';
import { IndustryOptionsValues, optionType } from 'components/shared/IndustryOptions';
import { FormikProps } from 'components/shared/FormikProps';

const options: optionType[] = IndustryOptionsValues;

export const IndustrySelector = (props: FormikProps<optionType[]>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, state, { setValue }] = useField<string[]>(props.field.name);

  // Our state.initialValue is a string[]
  // We need to filter our options (optionType[]) to those in the initialValue
  // and set the filtered list as our defaultValue
  const defaultValue = options.filter((option) => state.initialValue?.includes(option.value));

  const onChange = (newValue: MultiValue<optionType>) => {
    // Map from optionType[] to string[]
    setValue(newValue.map((o: optionType) => o.value));
  };

  return (
    <Select
      form={ '' }
      // {...props}
      isMulti
      className="form-input"
      onChange={onChange}
      options={options}
      defaultValue={defaultValue}
      isSearchable={true}
    />
  );
};
