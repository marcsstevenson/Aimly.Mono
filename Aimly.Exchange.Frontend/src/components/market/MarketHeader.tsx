import React, { useMemo } from 'react';
import Pages from 'components/shared/Pages';
import { MarketTabs } from 'components/market/MarketTabs';
import { type ProfileTypeOption } from '__generated__/marketSearchQuery.graphql';

interface Props {
  // CurrentPage: Pages;
  CurrentProfileType: ProfileTypeOption;
}

export const MarketHeader = ({ CurrentProfileType }: Props) => {
  const currentPage = useMemo(() => {
    switch (CurrentProfileType) {
      case 'MENTOR':
        return Pages.MarketMentors;
      case 'COMPANY':
        return Pages.MarketCompanies;
      case 'EXPERT':
        return Pages.MarketExperts;
      case 'PERSONAL':
        return Pages.MarketCommunity;
      default:
        return Pages.MarketCompanies;
    }
  }, [CurrentProfileType]);

  // Add context here to store:
  // search params for each tab (term, sort, page, etc)
  // display mode (list, grid, etc)

  return <MarketTabs CurrentPage={currentPage} />;
};
