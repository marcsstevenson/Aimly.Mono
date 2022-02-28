import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Pages from 'components/shared/Pages';
// import MarketSearchResults from 'components/market/MarketSearchResults';
import { MarketSearchResults } from 'components/market/MarketSearchResultsComponent';

import { MarketHeader } from 'components/market/MarketHeader';
import { MarketSearchInput } from 'components/market/MarketSearchInput';
import AppQuery, {
  marketSearchQuery,
  ProfileTypeOption,
  MarketSearchCommandInput,
  marketSearchQuery$variables,
} from '__generated__/marketSearchQuery.graphql';
import { useQueryLoader } from 'react-relay';
import { MarketSearchData } from 'components/market//MarketSearchData';

const MarketStartups = () => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  // let test = ProfileTypeOption.MENTOR;
  const variables = useMemo<marketSearchQuery$variables>(() => {
    return {
      marketSearchCommand: {
        searchTerm: searchTerm,
        profileType: 'MENTOR',
        currentPage: 3,
        pageSize: 3,
        orderByAscending: true,
        orderBy: 'Name',
      },
    };
  }, [searchTerm]);
  const [queryRef, loadQuery] = useQueryLoader<marketSearchQuery>(AppQuery, null);

  const handleSearchRequest = (searchTerm: string) => {
    // Run search here
    setSearchTerm(searchTerm);
    refetch();
  };

  const refetch = useCallback(() => {
    // Load the query again using the same original variables.
    // Calling loadQuery will update the value of queryRef.
    loadQuery(variables);
  }, [loadQuery, variables]);

  return (
    <MarketHeader CurrentPage={Pages.MarketStartups}>
      <MarketSearchInput onChange={handleSearchRequest} />
      <MarketSearchResults userSearchResults={[]} />
      {/* Display the results if we have a search term */}
      {searchTerm && queryRef && <MarketSearchData queryRef={queryRef} />}
    </MarketHeader>
  );
};

export default MarketStartups;
