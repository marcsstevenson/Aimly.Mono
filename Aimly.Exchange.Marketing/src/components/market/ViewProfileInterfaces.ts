// The purpose of this file is to contain interfaces
// relating to the viewing of profiles

import { MarketSearchResult } from 'components/market/MarketSearchResultsProps';
import { EmploymentExperience } from 'components/private/profiles/EmploymentExperience';

export interface ViewProfileHeaderProps {
  readonly name: string | null | undefined;
  readonly profilePictureUrl: string | null;
  readonly website: string | null | undefined;
  readonly addressCity: string | null;
  readonly addressRegion: string | null;
  readonly addressCountry: string | null;
  readonly industries: ReadonlyArray<string | null> | null;
  readonly skills: ReadonlyArray<string | null> | null;
}
export interface LongFormElement {
  readonly label: string;
  readonly content: string;
}

export interface LongFormElementsProps {
  readonly longFormElements: ReadonlyArray<LongFormElement>;
}

export interface AssociatedProfilesSet {
  label: string;
  profiles: ReadonlyArray<MarketSearchResult | null | undefined> | null | undefined;
}

export interface ViewProfileProps
  extends LongFormElementsProps, ViewProfileHeaderProps {
  // The title of the page
  title: string;

  // Groups of associated profiles
  // Eg, startups, mentor profiles, expert profiles, co-workers etc
  associatedProfilesSets: ReadonlyArray<AssociatedProfilesSet>;

  employmentExperience: ReadonlyArray<EmploymentExperience | null> | null;
}