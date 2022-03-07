import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
import { useNavigate, useLocation } from 'react-router-dom';
import useLocationQuery from 'components/shared/useLocationQuery';

interface Props {
  // CurrentPage: Pages;
  CurrentProfileType: ProfileTypeOption;
}

const MarketSearch = ({ CurrentProfileType }: Props) => {
  const [haveSearchResults, setHaveSearchResults] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [queryRef, loadQuery] = useQueryLoader<marketSearchQuery>(AppQuery, null);
  const navigate = useNavigate();
  const location = useLocation();
  const locationQuery = useLocationQuery();
  const searchQueryStringVariable = 's';

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

  const refetch = useCallback(
    (variables: marketSearchQuery$variables) => {
      // Load the query again using the same original variables.
      // Calling loadQuery will update the value of queryRef.
      // and this will update the usePreloadedQuery value for the MarketSearchResults
      // component which will in-turn trigger that component to rerender.
      loadQuery(variables, {
        fetchPolicy: 'network-only',
      });
    },
    [loadQuery]
  );

  const requestSearch = useCallback(
    (searchTerm: string) => {
      navigate(`${location.pathname}?s=${searchTerm}`);
    },
    [navigate, location.pathname]
  );

  const handleSearchRequest = useCallback(
    (searchTerm: string) => {
      // Build the updated variables
      var variables = buildVariables(searchTerm, currentPage, CurrentProfileType);

      console.log('searchTerm: ', searchTerm);

      // Remember the search term
      setSearchTerm(searchTerm);

      // Re-run the search
      refetch(variables);

      navigate(`${location.pathname}?s=${searchTerm}`);

      setHaveSearchResults(true);
    },
    [CurrentProfileType, currentPage, refetch, buildVariables, navigate, location.pathname]
  );

  // Just run a full search onload for until the market is too large for this
  useEffect(() => {
    handleSearchRequest('');
  }, []); //locationQuery, handleSearchRequest

  // useEffect(() => {
  //   console.log('MarketSearch.useEffect');
  //   // Do we have a search param? Use it if yes.
  //   const searchQueryStringValue = locationQuery.get(searchQueryStringVariable);

  //   if (searchQueryStringValue) {
  //     handleSearchRequest(searchQueryStringValue);
  //   }
  // }, [locationQuery]); //locationQuery, handleSearchRequest

  return (
    <div className="flex-1 pb-8">
      <PageHeader Title="Market" />
      <MarketHeader CurrentProfileType={CurrentProfileType} />
      <MarketSearchInput onChange={handleSearchRequest} />
      {queryRef && <MarketSearchResults queryRef={queryRef} />}
    </div>
  );
};

export default MarketSearch;
