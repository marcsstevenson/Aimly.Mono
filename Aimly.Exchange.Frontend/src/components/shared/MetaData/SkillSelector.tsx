import React from 'react';
import { FormikProps } from 'components/shared/FormikProps';
import { MetaDataOptionsEditor } from 'components/shared/MetaData/MetaDataOptionsEditor';

export const SkillSelector = (props: FormikProps<string[]>) => {
  return <MetaDataOptionsEditor {...props} metaDataType={'Skill'} />;
};
