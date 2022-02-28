import { type ProfileTypeOption } from '__generated__/marketSearchQuery.graphql';

export interface MarketSearchResultsProps {
  marketSearchResults: ReadonlyArray<{
    readonly id: any;
    readonly profileId: any;
    readonly name: string | null;
    readonly description: string | null;
    readonly profileUrl: string | null;
    readonly type: ProfileTypeOption;
  } | null> | null | undefined;
}