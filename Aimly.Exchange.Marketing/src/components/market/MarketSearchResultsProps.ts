import { type ProfileTypeOption } from '__generated__/marketSearchQuery.graphql';

export interface MarketSearchResultsProps {
  marketSearchResults: ReadonlyArray<MarketSearchResult | null> | null | undefined;
}

export interface MarketSearchResult {
  readonly id: any;
  readonly profileId: any;
  readonly name: string | null;
  readonly description: string | null;
  readonly profilePictureUrl: string | null;
  readonly type: ProfileTypeOption;
}