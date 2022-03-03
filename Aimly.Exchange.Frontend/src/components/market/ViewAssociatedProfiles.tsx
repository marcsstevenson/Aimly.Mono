// The purpose of this component is to display a list of associated profile grid items

import React from 'react';

import MarketGridResult from 'components/market/MarketGridResult';
import { MarketSearchResult } from 'components/market/MarketSearchResultsProps';

interface Props {
  label: string;
  profiles: ReadonlyArray<MarketSearchResult | null>;
}

const ViewAssociatedProfiles = ({ label, profiles }: Props) => {
  return (
    <>
      <div></div>
      <div className="col-span-8 mr-4 lg:col-span-2">
        <span className="text-5xl text-gray-900 dark:text-gray-100">{label}</span>
      </div>
      <div className="col-span-8 lg:col-span-4">
        <ul className="grid grid-cols-1 gap-6 bg-gray-50 pb-5 dark:bg-gray-800 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3">
          {profiles &&
            profiles.map((result, i) => <MarketGridResult key={i} index={i} result={result} />)}
        </ul>
      </div>
    </>
  );
};
export default ViewAssociatedProfiles;
