import React, { useCallback, useMemo, useState } from 'react';
import { MarketSearchResults } from 'components/market/MarketSearchResultsComponent';
import { MarketHeader } from 'components/market/MarketHeader';
import { MarketSearchInput } from 'components/market/MarketSearchInput';
import AppQuery, {
  marketSearchQuery,
  marketSearchQuery$variables,
} from '__generated__/marketSearchQuery.graphql';
import { useQueryLoader } from 'react-relay';
import { type ProfileTypeOption } from '__generated__/marketSearchQuery.graphql';
import { PageHeader } from 'components/shared/PageHeader';

interface Props {
  // CurrentPage: Pages;
  CurrentProfileType: ProfileTypeOption;
}

const MarketSearch = ({ CurrentProfileType }: Props) => {
  const [haveSearchResults, setHaveSearchResults] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [queryRef, loadQuery] = useQueryLoader<marketSearchQuery>(AppQuery, null);

  const buildVariables = useCallback(
    (searchTerm: string, page: number, profileType: ProfileTypeOption) => {
      return {
        marketSearchCommand: {
          searchTerm: searchTerm,
          profileType: profileType,
          currentPage: page,
          pageSize: 9,
          orderByAscending: true,
          orderBy: 'Name',
        },
      };
    },
    []
  );

  const handleSearchRequest = (searchTerm: string) => {
    // Build the updated variables
    var variables = buildVariables(searchTerm, currentPage, CurrentProfileType);

    console.log('searchTerm: ', searchTerm);

    // Remember the search term
    setSearchTerm(searchTerm);

    // Re-run the search
    refetch(variables);

    setHaveSearchResults(true);
  };

  const refetch = useCallback(
    (variables: marketSearchQuery$variables) => {
      // Load the query again using the same original variables.
      // Calling loadQuery will update the value of queryRef.
      // and this will update the usePreloadedQuery value for the MarketSearchResults
      // component which will in-turn trigger that component to rerender.
      loadQuery(variables);
    },
    [loadQuery]
  );

  return (
    <div className="flex-1 pb-8">
      <PageHeader Title="Market" />
      <MarketHeader CurrentProfileType={CurrentProfileType} />
      <MarketSearchInput onChange={handleSearchRequest} />
      {haveSearchResults && queryRef && <MarketSearchResults queryRef={queryRef} />}
    </div>
  );
};

export default MarketSearch;
