// The purpose of this component is to receive an array of optionTypes and
// allow the user to select one or more of them within a multi-select input.

import React from 'react';
import Select from 'react-select';
import { useField } from 'formik';

interface optionType {
  value: string;
  label: string;
}

const options: optionType[] = [
  { value: 'Agriculture / Agtech Artificial', label: 'Agriculture / Agtech Artificial' },
  { value: 'Augmented Reality', label: 'Augmented Reality' },
  { value: 'B2B', label: 'B2B' },
  { value: 'Biomedical', label: 'Biomedical' },
  { value: 'Biotech', label: 'Biotech' },
  { value: 'Blockchain', label: 'Blockchain' },
  { value: 'Community', label: 'Community' },
  { value: 'Consumer', label: 'Consumer' },
  { value: 'Crowdfunding', label: 'Crowdfunding' },
  { value: 'Developer Tools', label: 'Developer Tools' },
  { value: 'Diversity', label: 'Diversity' },
  { value: 'Drones', label: 'Drones' },
  { value: 'E-commerce', label: 'E-commerce' },
  { value: 'Education', label: 'Education' },
  { value: 'Energy', label: 'Energy' },
  { value: 'Enterprise', label: 'Enterprise' },
  { value: 'Entertainment', label: 'Entertainment' },
  { value: 'Esports / Online Gaming', label: 'Esports / Online Gaming' },
  { value: 'Financial / Banking', label: 'Financial / Banking' },
  { value: 'Government', label: 'Government' },
  { value: 'Hardware', label: 'Hardware' },
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'Intelligence', label: 'Intelligence' },
  { value: 'International Market', label: 'International Market' },
  { value: 'Jobs', label: 'Jobs' },
  { value: 'Marketplace', label: 'Marketplace' },
  { value: 'Media / Advertising', label: 'Media / Advertising' },
  { value: 'Moonshots / Hard Tech', label: 'Moonshots / Hard Tech' },
  { value: 'Nonprofit', label: 'Nonprofit' },
  { value: 'Other', label: 'Other' },
  { value: 'Robotics', label: 'Robotics' },
  { value: 'Science', label: 'Science' },
  { value: 'Security', label: 'Security' },
  { value: 'Sport / Fitness', label: 'Sport / Fitness' },
  { value: 'Transportation', label: 'Transportation' },
  { value: 'Travel', label: 'Travel' },
  { value: 'Virtual Reality', label: 'Virtual Reality' },
];

export const IndustrySelector = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, state, { setValue }] = useField<string[]>(props.field.name);

  // Our state.initialValue is a string[]
  // We need to filter our options (optionType[]) to those in the initialValue
  // and set the filtered list as our defaultValue
  const defaultValue = options.filter((option) => state.initialValue?.includes(option.value));

  const onChange = (newValue: optionType[]) => {
    // Map from optionType[] to string[]
    setValue(newValue.map((o: optionType) => o.value));
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
