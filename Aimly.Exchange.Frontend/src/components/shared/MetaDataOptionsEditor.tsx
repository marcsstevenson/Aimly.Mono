// The purpose of this component is to receive an array of optionTypes and
// allow the user to select one or more of them within a multi-select input.

import React from 'react';
import { useField } from 'formik';
import { FormikProps } from 'components/shared/FormikProps';
import { MetaDataOptionsSelector } from 'components/shared/MetaDataOptionsSelector';
import { MetaDataList } from 'components/shared/MetaDataList';
import { PlusIcon } from '@heroicons/react/outline';

interface Props extends FormikProps<string[]> {
  // The type of meta options to get
  // At time of writing there is only Skill and Industry options
  metaDataType: string;
  tenantId?: string;
}

export const MetaDataOptionsEditor = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, state, { setValue }] = useField<string[]>(props.field.name);
  const [isAdding, setIsAdding] = React.useState(false);

  const optionSelected = (option: string) => {
    // Add option to current list if not already included
    const currentValues = state.value.filter((value) => value !== option);
    const newValues = [...currentValues, option].sort();

    setValue(newValues);
    setIsAdding(false);
  };

  const onDeleteTrigger = (option: string) => {
    // Just option out of current list
    const newValues = state.value.filter((value) => value !== option);

    setValue(newValues);
  };

  return (
    <>
      {!isAdding && (
        <button
          type="button"
          className="form-button-link"
          onClick={() => {
            setIsAdding(true);
          }}
        >
          <PlusIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
          Add
        </button>
      )}
      {isAdding && (
        <MetaDataOptionsSelector
          optionSelected={optionSelected}
          metaDataType={props.metaDataType}
          tenantId={props.tenantId}
        />
      )}
      <MetaDataList dataList={state.value} allowEdit={true} deleteTrigger={onDeleteTrigger} />
    </>
  );
};
