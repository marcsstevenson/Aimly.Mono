import React from 'react';
import { FormikProps } from 'components/shared/FormikProps';
import { MetaDataOptionsEditor } from './MetaDataOptionsEditor';

export const SkillSelector = (props: FormikProps<string[]>) => {
  return <MetaDataOptionsEditor {...props} metaDataType={'Skill'} />;
};
