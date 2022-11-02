import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
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
import { LoadingArea } from 'components/shared/LoadingArea';
import { MarketSearchRequest } from 'components/market/MarketSearchRequest';
import {
  areSame,
  isEmpty,
  buildFromQuery,
  buildQueryString,
  searchQueryStringVariable,
  skillsQueryStringVariable,
  industriesQueryStringVariable,
  locationsQueryStringVariable,
  timezonesQueryStringVariable,
} from 'components/shared/MarketOptions/MarketSearchRequestHelpers';

import { GetCurrentTenant } from 'tenant/TenantValues';

const currentTenant = GetCurrentTenant();
const marketLabel = currentTenant.marketLabel;

interface Props {
  // CurrentPage: Pages;
  CurrentProfileType: ProfileTypeOption;
}

const MarketSearch = ({ CurrentProfileType }: Props) => {
  const [haveSearchResults, setHaveSearchResults] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [lastSearchRequest, setLastSearchRequest] = useState<MarketSearchRequest | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [queryRef, loadQuery] = useQueryLoader<marketSearchQuery>(AppQuery, null);
  const navigate = useNavigate();
  const location = useLocation();
  const locationQuery = useLocationQuery();

  const buildVariables = useCallback(
    (request: MarketSearchRequest, page: number, profileType: ProfileTypeOption) => {
      return {
        marketSearchCommand: {
          searchTerm: request.searchTerm,
          industries: request.industries,
          skills: request.skills,
          locations: request.locations,
          timeZones: request.timeZones,
          profileType: profileType,
          currentPage: page,
          pageSize: 200,
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

  const handleSearchRequest = useCallback(
    (request: MarketSearchRequest) => {
      // Build the updated variables
      var variables = buildVariables(request, currentPage, CurrentProfileType);

      // Remember the search term
      setSearchTerm(request.searchTerm);
      setLastSearchRequest(request);

      // Re-run the search
      refetch(variables);

      //navigate(`${location.pathname}?s=${request.searchTerm}`);
      navigate(`${location.pathname}${buildQueryString(request)}`);

      setHaveSearchResults(true);
    },
    [CurrentProfileType, currentPage, refetch, buildVariables, navigate, location.pathname]
  );

  const buildMarketSearchRequest = useCallback(
    (locationQuery: URLSearchParams): MarketSearchRequest => {
      return buildFromQuery(
        locationQuery.get(searchQueryStringVariable),
        locationQuery.get(skillsQueryStringVariable),
        locationQuery.get(industriesQueryStringVariable),
        locationQuery.get(locationsQueryStringVariable),
        locationQuery.get(timezonesQueryStringVariable)
      );
    },
    [locationQuery]
  );

  useEffect(() => {
    // const searchQueryStringValue = locationQuery.get(searchQueryStringVariable);

    // Do we have a search param? Use it if yes.
    const marketSearchRequestFromQuery = buildMarketSearchRequest(locationQuery);

    // Do we need to trigger a search due to the query string containing a
    // different search request that what was last run?
    if (isEmpty(marketSearchRequestFromQuery) && lastSearchRequest === null) {
      console.log('Run a blank search');
      // Run a blank search
      handleSearchRequest(marketSearchRequestFromQuery);
    } else {
      // Does the search from the query string differ from the last run?
      if (!areSame(lastSearchRequest, marketSearchRequestFromQuery)) {
        console.log('Search trigger from onload');

        // TODO: Add skills and industries to the request
        // handleSearchRequest({ searchTerm: searchQueryStringValue });
        handleSearchRequest(marketSearchRequestFromQuery);
      }
    }

    // if (searchQueryStringValue && searchQueryStringValue.length > 0) {
    //   if (searchQueryStringValue !== searchTerm) {
    //     console.log('Search trigger from onload');

    //     // TODO: Add skills and industries to the request
    //     // handleSearchRequest({ searchTerm: searchQueryStringValue });
    //     handleSearchRequest(marketSearchRequestFromQuery);
    //   }
    // } else {
    //   // Run a blank search
    //   handleSearchRequest({ searchTerm: '', industries: [], skills: [] });
    // }
  }, [locationQuery]); //locationQuery, handleSearchRequest

  return (
    <div className="flex-1 pb-8">
      <PageHeader Title={marketLabel} />
      <MarketHeader CurrentProfileType={CurrentProfileType} />
      <MarketSearchInput CurrentProfileType={CurrentProfileType} onChange={handleSearchRequest} />
      <Suspense fallback={<LoadingArea title="Searching..." fullHeight={false} />}>
        {queryRef && <MarketSearchResults queryRef={queryRef} />}
      </Suspense>
    </div>
  );
};

export default MarketSearch;
