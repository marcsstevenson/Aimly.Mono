export interface MarketSearchResultsProps {
  userSearchResults: ReadonlyArray<{
    readonly id: any;
    readonly fullName: string | null;
    readonly pictureUrl: string | null;
  } | null> | null;
}