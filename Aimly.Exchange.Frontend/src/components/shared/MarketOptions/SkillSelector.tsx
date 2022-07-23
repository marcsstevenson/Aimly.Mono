import React from 'react';
import { FormikProps } from 'components/shared/FormikProps';
import { MarketOptionsEditor } from 'components/shared/MarketOptions/MarketOptionsEditor';
import { ProfileTypeOption } from '__generated__/marketOptionsSearchQuery.graphql';

export interface Props {
  ProfileType: ProfileTypeOption;
}

export const SkillSelector = (props: Props) => {
  return <MarketOptionsEditor {...props} profileType={props.ProfileType} />;
};
