// The purpose of this component is to receive an array of optionTypes and
// allow the user to select one or more of them within a multi-select input.

import React from 'react';
import { MarketOptionsEditor } from 'components/shared/MarketOptions/MarketOptionsEditor';
import { ProfileTypeOption } from '__generated__/marketOptionsSearchQuery.graphql';

interface Props {
  // The type of meta options to get
  // At time of writing there is only Skill and Industry options
  profileType: ProfileTypeOption;
}

export const IndustrySelector = ({ profileType }: Props) => {
  return <MarketOptionsEditor profileType={profileType} />;
};
