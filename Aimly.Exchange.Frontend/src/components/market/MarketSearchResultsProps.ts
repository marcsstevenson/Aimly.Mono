import { type ProfileTypeOption } from '__generated__/marketSearchQuery.graphql';

export interface MarketSearchResultsProps {
  marketSearchResults: ReadonlyArray<MarketSearchResult | null> | null | undefined;
}

export interface MarketSearchResult {
  readonly id: any;
  readonly profileId: any;
  readonly name: string | null | undefined;
  readonly description: string | null;
  readonly profilePictureUrl: string | null | undefined;
  readonly type: ProfileTypeOption;
}