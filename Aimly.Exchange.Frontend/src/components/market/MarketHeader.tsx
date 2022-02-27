import React, { useRef } from 'react';
import Pages from 'components/shared/Pages';
import { MarketTabs } from 'components/market/MarketTabs';

interface Props {
  children: React.ReactNode;
  CurrentPage: Pages;
}

export const MarketHeader = ({ children }: Props) => {
  const topRef = useRef<HTMLDivElement>(null);

  // Add context here to store:
  // search params for each tab (term, sort, page, etc)
  // display mode (list, grid, etc)

  return (
    <div>
      <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-6 sm:py-4 lg:max-w-none lg:py-8">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
              Market Search (work in progress)
            </h2>
          </div>
        </div>
      </div>
      <div>
        <MarketTabs CurrentPage={Pages.MarketStartups} />
      </div>
      <div ref={topRef}>{children}</div>
    </div>
  );
};
