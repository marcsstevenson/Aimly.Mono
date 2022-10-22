// The purpose of this component is to receive an array of optionTypes and
// allow the user to select one or more of them within a multi-select input.

import React from 'react';
import { useField } from 'formik';
import ContentEdit from 'components/author/ContentEdit';

export const ContentEditWrapper = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, state, { setValue }] = useField<string>(props.field.name);

  return (
    <ContentEdit
      content={field.value}
      onChange={setValue}
      required={props.required == undefined ? false : props.required}
    />
  );
};
