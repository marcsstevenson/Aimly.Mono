// The purpose of this component is to display a public readonly profile for a startup company

import * as ViewCompanyProfileQuery from '__generated__/getViewCompanyProfileQuery.graphql';
import { LongFormElement } from 'components/market/view/ViewProfileInterfaces';
import { ProfileTypeOption } from '__generated__/marketSearchQuery.graphql';
import * as ViewTenantCompanyProfileQuery from '__generated__/getViewTenantCompanyProfileQuery.graphql';

interface CompanyProfileProps {
  readonly id: string | null;
  readonly listOnMarket: boolean;
  readonly isUsersProfile: boolean;
  readonly userCanAccessProfile: boolean;
  readonly companyProfileId: any;
  readonly companyName: string | null;
  readonly profilePictureUrl: string | null;
  readonly website: string | null;
  readonly addressCity: string | null;
  readonly addressRegion: string | null;
  readonly addressCountry: string | null;
  readonly industries: ReadonlyArray<string | null> | null;
  readonly problemDetails: string | null;
  readonly solutionDescription: string | null;
  readonly associatedProfiles: ReadonlyArray<{
    readonly id: any;
    readonly profileId: any;
    readonly name: string | null;
    readonly description: string | null;
    readonly profilePictureUrl: string | null;
    readonly type: ProfileTypeOption;
  } | null> | null;
}

const GetCompanyLongFormElements = (model: CompanyProfileProps | null) => {
  let longFormElements: LongFormElement[] = [];

  if (model?.problemDetails && model.problemDetails.length > 0) {
    longFormElements.push({ label: 'The Problem', content: model.problemDetails });
  }

  if (model?.solutionDescription && model.solutionDescription.length > 0) {
    longFormElements.push({ label: 'The Solution', content: model.solutionDescription });
  }

  return longFormElements;
}

const BuildViewProfileProps = (companyLabel: string, model: CompanyProfileProps | null) => {
  // Copy values from the model to a model for the ViewProfile component
  const viewProfileProps = Object.assign(
    {
      profileId: model?.companyProfileId ?? '',
      profileUserPublicId: null,
      profileType: 'COMPANY' as ProfileTypeOption,
      name: model?.companyName,
      skills: null, // Now skills for company profiles
      title: companyLabel + ' Profile',
      subTitle: null,
      // Add "Their Team" if they have any associated profiles
      associatedProfilesSets:
        model?.associatedProfiles && model?.associatedProfiles?.length > 0
          ? [
            {
              label: 'Their Team',
              profiles: model?.associatedProfiles,
            },
          ]
          : [],
      longFormElements: GetCompanyLongFormElements(model),
      employmentExperience: null,
      profilePictureRound: false,
      allowContact: false, //Not for company profiles
    },
    model // Copy all other properties that don't need manual mapping
  );

  return viewProfileProps;
}

export { GetCompanyLongFormElements, BuildViewProfileProps };