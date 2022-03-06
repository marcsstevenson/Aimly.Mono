import React, { useMemo, useRef } from 'react';
import Pages from 'components/shared/Pages';
import { MarketTabs } from 'components/market/MarketTabs';
import { type ProfileTypeOption } from '__generated__/marketSearchQuery.graphql';

interface Props {
  // CurrentPage: Pages;
  CurrentProfileType: ProfileTypeOption;
}

export const MarketHeader = ({ CurrentProfileType }: Props) => {
  const topRef = useRef<HTMLDivElement>(null);

  const currentPage = useMemo(() => {
    switch (CurrentProfileType) {
      case 'MENTOR':
        return Pages.MarketMentors;
      case 'STARTUP':
        return Pages.MarketStartups;
      case 'EXPERT':
        return Pages.MarketExperts;
      case 'PERSONAL':
        return Pages.MarketCommunity;
      default:
        return Pages.MarketStartups;
    }
  }, [CurrentProfileType]);

  // Add context here to store:
  // search params for each tab (term, sort, page, etc)
  // display mode (list, grid, etc)

  return (
    <div>
      <div>
        <MarketTabs CurrentPage={currentPage} />
      </div>
      <div ref={topRef}></div>
    </div>
  );
};
