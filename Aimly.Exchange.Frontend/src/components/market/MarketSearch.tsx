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

interface Props {
  // CurrentPage: Pages;
  CurrentProfileType: ProfileTypeOption;
}

const MarketSearch = ({ CurrentProfileType }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  // let test = ProfileTypeOption.MENTOR;
  const variables = useMemo<marketSearchQuery$variables>(() => {
    return {
      marketSearchCommand: {
        searchTerm: searchTerm,
        profileType: CurrentProfileType,
        currentPage: 3,
        pageSize: 3,
        orderByAscending: true,
        orderBy: 'Name',
      },
    };
  }, [searchTerm, CurrentProfileType]);
  const [queryRef, loadQuery] = useQueryLoader<marketSearchQuery>(AppQuery, null);

  const handleSearchRequest = (searchTerm: string) => {
    // Run search here
    console.log('searchTerm: ', searchTerm);
    setSearchTerm(searchTerm);
    refetch();
  };

  const refetch = useCallback(() => {
    // Load the query again using the same original variables.
    // Calling loadQuery will update the value of queryRef.
    // and this will update the usePreloadedQuery value for the MarketSearchResults
    // component which will in-turn trigger that component to rerender.
    loadQuery(variables);
  }, [loadQuery, variables]);

  return (
    <div className="flex-1 pb-8">
      {/* Page header */}
      <div className="mb-8 bg-white shadow dark:bg-gray-700">
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex items-center">
                <div>
                  <div className="flex items-center">
                    <h1 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-50 sm:truncate sm:leading-9">
                      Market
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MarketHeader CurrentProfileType={CurrentProfileType} />
      <MarketSearchInput onChange={handleSearchRequest} />
      <div className="mx-auto mt-8 max-w-6xl">
        {searchTerm && queryRef && <MarketSearchResults queryRef={queryRef} />}
      </div>
    </div>
  );
};

export default MarketSearch;
