import React from 'react';
import Select, { OnChangeValue } from 'react-select';
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
  const [field, state, { setValue, setTouched }] = useField<string[]>(props.field.name);

  const onChange = (newValue: optionType[]) => {
    setValue(newValue.map((o: optionType) => o.value));
    console.log(newValue);
  };

  return (
    <Select
      {...props}
      isMulti
      className="form-input"
      onChange={onChange}
      options={options}
      // defaultValue={[options[0], options[1]]}
    />
  );
};
