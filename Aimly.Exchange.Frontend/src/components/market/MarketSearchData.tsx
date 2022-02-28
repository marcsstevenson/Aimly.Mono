import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';

import AppQuery, {
  marketSearchQuery,
  ProfileTypeOption,
  MarketSearchCommandInput,
  marketSearchQuery$variables,
} from '__generated__/marketSearchQuery.graphql';

interface Props {
  queryRef: PreloadedQuery<marketSearchQuery>;
}

export const MarketSearchData = (props: Props) => {
  const { queryRef } = props;

  const data = usePreloadedQuery<marketSearchQuery>(AppQuery, queryRef);

  console.log(data);

  return <span>Data</span>;
};
