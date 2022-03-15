// The purpose of this component is to receive an array of optionTypes and
// allow the user to select one or more of them within a multi-select input.

import React from 'react';
import { FormikProps } from 'components/shared/FormikProps';
import { MetaDataOptionsEditor } from './MetaDataOptionsEditor';

export const IndustrySelector = (props: FormikProps<string[]>) => {
  return <MetaDataOptionsEditor {...props} metaDataType={'Industry'} />;
};
