// The purpose of this component is to receive an array of optionTypes and
// allow the user to select one or more of them within a multi-select input.

import React from 'react';
import { Switch } from '@headlessui/react';
import { useField } from 'formik';
import { classNames } from 'utils/classNames';

export const SwitchWrapper = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, state, { setValue }] = useField<boolean>(props.field.name);

  return (
    <Switch
      checked={field.value}
      onChange={setValue}
      className={classNames(
        field.value ? 'bg-primary-500' : 'bg-gray-200',
        'focus:ring-primary-500 relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2'
      )}
    >
      <span
        aria-hidden="true"
        className={classNames(
          field.value ? 'translate-x-5' : 'translate-x-0',
          'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      />
    </Switch>
  );
};
