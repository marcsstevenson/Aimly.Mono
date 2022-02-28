import React, { useEffect, useState } from 'react';
import Pages from 'components/shared/Pages';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from 'components/Loading';
// import MarketSearchResults from 'components/market/MarketSearchResults';

import { MarketSearchResults } from 'components/market/MarketSearchResultsComponent';
import useMarketSearch from 'components/market/useMarketSearch';

import { MarketHeader } from 'components/market/MarketHeader';
import { MarketSearchInput } from 'components/market/MarketSearchInput';

const MarketStartups = () => {
  const { marketSearch, state } = useMarketSearch();

  const handleSearchRequest = (searchTerm: string) => {
    // Run search here
  };

  // Onload
  useEffect(() => {
    marketSearch();
  }, []);

  return (
    <MarketHeader CurrentPage={Pages.MarketStartups}>
      <MarketSearchInput onChange={handleSearchRequest} />
      <MarketSearchResults userSearchResults={[]} />
    </MarketHeader>
  );
};

export default MarketStartups;
