import React from 'react';
import { MarketSearchResultsProps } from 'components/market/MarketSearchResultsProps';
import MarketGridResult from 'components/market/MarketGridResult';

const MarketGridResults = ({ marketSearchResults }: MarketSearchResultsProps) => {
  return (
    <ul className="grid grid-cols-1 gap-6 bg-gray-50 px-5 pb-5 dark:bg-gray-800 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {marketSearchResults &&
        marketSearchResults.map((result, i) => <MarketGridResult index={i} result={result} />)}
    </ul>
  );
};

export default MarketGridResults;
