// The purpose of this component is to receive an array of optionTypes and
// allow the user to select one or more of them within a multi-select input.

import React from 'react';
// import Select from 'react-select';
// import Creatable from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import { useField } from 'formik';
import * as GetSkillOptionsQuery from '__generated__/getSkillOptionsQuery.graphql';
import { fetchQuery, useLazyLoadQuery, useQueryLoader, useRelayEnvironment } from 'react-relay/hooks';

export interface optionType {
  value: string;
  label: string;
}

export const SkillSelector = (props: any) => {
  // Lazy load this query because it is only relevant to this component
  const [queryRef, loadQuery] = useQueryLoader<GetSkillOptionsQuery.getSkillOptionsQuery>(
    GetSkillOptionsQuery.default
  );
  const environment = useRelayEnvironment();

  const SkillOptionsValues: optionType[] = [
    { value: 'Agriculture / Agtech Artificial', label: 'Agriculture / Agtech Artificial' },
    { value: 'Augmented Reality', label: 'Augmented Reality' },
    { value: 'B2B', label: 'B2B' },
    { value: 'Biomedical', label: 'Biomedical' },
    { value: 'Biotech', label: 'Biotech' },
    { value: 'Blockchain', label: 'Blockchain' },
  ];

  const options: optionType[] = SkillOptionsValues;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, state, { setValue }] = useField<string[]>(props.field.name);

  // Our state.initialValue is a string[]
  // We need to filter our options (optionType[]) to those in the initialValue
  // and set the filtered list as our defaultValue
  const defaultValue = options.filter((option) => state.initialValue?.includes(option.value));


  const filterColors = (inputValue: string) => {
    if (inputValue.length > 2) {
      const getSkillOptionsQueryVariables = {
        nameStartingWith: inputValue,
      };

      const data = loadQuery(getSkillOptionsQueryVariables);

      console.log(data);

      fetchQuery(environment, GetSkillOptionsQuery.default, getSkillOptionsQueryVariables)
        .subscribe({
          complete: () => {
            // setIsRefreshing(false);

            // *After* the query has been fetched, we call
            // loadQuery again to re-render with a new
            // queryRef.
            // At this point the data for the query should
            // be cached, so we use the 'store-only'
            // fetchPolicy to avoid suspending.
            loadQuery(getSkillOptionsQueryVariables);
          },
          error: () => {
            // setIsRefreshing(false);
          }
        });

    }

    return options.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<optionType[]>((resolve) => {
      setTimeout(() => {
        resolve(filterColors(inputValue));
      }, 1000);
    });

  const onChange = (newValue: optionType[]) => {
    // Map from optionType[] to string[]
    setValue(newValue.map((o: optionType) => o.value));
  };

  return (
    <AsyncSelect
      {...props}
      isMulti
      className="form-input"
      cacheOptions
      onChange={onChange}
      options={options}
      defaultValue={defaultValue}
      loadOptions={promiseOptions}
      isSearchable={true}
    />
  );
};
