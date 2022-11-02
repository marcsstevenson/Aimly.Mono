import React, { useMemo } from 'react';

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
  onChangeIndustries(industries: string[]): void;
  onChangeSkills(skills: string[]): void;
  onChangeLocations(locations: string[]): void;
  onChangeTimezones(timezones: string[]): void;
}

/// Allows the user to select skills and industries to filter on
/// for a given profile type
export const SearchOptions = ({
  profileType,
  onChangeIndustries,
  onChangeSkills,
  onChangeLocations,
  onChangeTimezones,
}: Props) => {
  // Get a list of options for out profile type

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<marketOptionsSearchQuery>(node, {
    profileType: profileType,
  });

  const marketOptionsSearch = data.marketOptionsSearch;

  const industryOptions = useMemo((): ReadonlyArray<MarketSearchOption> | undefined => {
    return marketOptionsSearch?.industryOptions?.filter((i): i is MarketSearchOption => i !== null);
  }, [marketOptionsSearch]);

  const skillOptions = useMemo((): ReadonlyArray<MarketSearchOption> | undefined => {
    return marketOptionsSearch?.skillOptions?.filter((i): i is MarketSearchOption => i !== null);
  }, [marketOptionsSearch]);

  const locationOptions = useMemo((): ReadonlyArray<MarketSearchOption> | undefined => {
    return marketOptionsSearch?.locationOptions?.filter((i): i is MarketSearchOption => i !== null);
  }, [marketOptionsSearch]);

  const timezoneOptions = useMemo((): ReadonlyArray<MarketSearchOption> | undefined => {
    return marketOptionsSearch?.timezoneOptions?.filter((i): i is MarketSearchOption => i !== null);
  }, [marketOptionsSearch]);

  return (
    <div>
      {/* Industries editor */}
      {industryOptions && (
        <MarketOptionsEditor
          initiallySelected={[]}
          options={industryOptions!}
          title="Industry"
          onChange={onChangeIndustries}
        />
      )}
      {/* Skills editor */}
      {skillOptions && (
        <MarketOptionsEditor
          initiallySelected={[]}
          options={skillOptions!}
          title="Skill"
          onChange={onChangeSkills}
        />
      )}
      {/* Locations editor */}
      {locationOptions && (
        <MarketOptionsEditor
          initiallySelected={[]}
          options={locationOptions!}
          title="Location"
          onChange={onChangeLocations}
        />
      )}
      {/* Timezones editor */}
      {timezoneOptions && (
        <MarketOptionsEditor
          initiallySelected={[]}
          options={timezoneOptions!}
          title="Timezone"
          onChange={onChangeTimezones}
        />
      )}
    </div>
  );
};
