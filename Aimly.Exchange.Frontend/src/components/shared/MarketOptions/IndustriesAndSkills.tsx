import React from 'react';

import {
  marketOptionsSearchQuery,
  default as node,
} from '__generated__/marketOptionsSearchQuery.graphql';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { ProfileTypeOption } from '__generated__/marketOptionsSearchQuery.graphql';
import { MarketOptionsEditor } from 'components/shared/MarketOptions/MarketOptionsEditor';
import { MarketSearchOption } from 'components/shared/MarketOptions/MarketSearchOption';

interface Props {
  profileType: ProfileTypeOption;
}

/// Allows the user to select skills and industries to filter on
/// for a given profile type
const IndustriesAndSkills = ({ profileType }: Props) => {
  // Get a list of options for out profile type

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<marketOptionsSearchQuery>(
    node,
    {
      profileType: profileType,
    },
    // Ideally we could use commitLocalUpdate to update the relay cache when setAboutYouMutation is called
    // However, for now, we'll simply always refresh this query when the component is mounted
    {
      fetchPolicy: 'network-only',
    }
  );

  const marketOptionsSearch = data.marketOptionsSearch;
  data.marketOptionsSearch?.industryOptions;

  if (marketOptionsSearch === null || undefined) {
    return <></>;
  }

  const industryOptions: ReadonlyArray<MarketSearchOption> | undefined =
    marketOptionsSearch.industryOptions?.filter((i): i is MarketSearchOption => i !== null);

  return (
    <div>
      {/* TODO 2022.07.22 - We need a selector for both skills and industries */}
      {/* TODO 2022.07.24 - We need to handle when the selected values change */}
      {/* Industries editor */}
      {marketOptionsSearch?.industryOptions && (
        <MarketOptionsEditor options={industryOptions!} initiallySelected={[]} />
      )}
    </div>
  );
};

export default IndustriesAndSkills;
