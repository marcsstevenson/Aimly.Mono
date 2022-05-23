import React, { useState } from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import MarketGridResults from 'components/market/MarketGridResults';
import { ViewListIcon, ViewGridIcon } from '@heroicons/react/solid';
import { classNames } from 'utils/classNames';
import AppQuery, {
  marketSearchQuery,
  marketSearchQuery$data,
} from '__generated__/marketSearchQuery.graphql';

enum DisplayModeOptions {
  grid,
  list,
}
interface Props {
  queryRef: PreloadedQuery<marketSearchQuery>;
}

export const MarketSearchResults = ({ queryRef }: Props) => {
  const response: marketSearchQuery$data = usePreloadedQuery<marketSearchQuery>(AppQuery, queryRef);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="z-50 flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-6 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden sm:rounded-lg">
              <div className="ml-auto flex items-center space-x-5 bg-gray-50 px-6 py-3 dark:bg-gray-800"></div>
              {response.marketSearch?.results && response.marketSearch?.results?.length > 0 ? (
                <MarketGridResults marketSearchResults={response.marketSearch?.results} />
              ) : (
                <div className="text-secondary-500 bg-gray-50 px-5 pb-5 dark:bg-gray-800">
                  No results.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
