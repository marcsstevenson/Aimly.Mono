// The purpose of this component is to display a public readonly profile for a startup mentor

import React, { useMemo } from 'react';
import * as ViewMentorProfileQuery from '__generated__/getViewMentorProfileQuery.graphql';
import { type ProfileTypeOption } from '__generated__/marketSearchQuery.graphql';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { useParams } from 'react-router-dom';
import {
  AssociatedProfilesSet,
  LongFormElement,
  ViewProfileProps,
} from 'components/market/view/ViewProfileInterfaces';
import ViewProfile from 'components/market/view/ViewProfile';
import { MarketSearchResult } from 'components/market/MarketSearchResultsProps';

const ViewMentorProfile = () => {
  // Read the Id from the route context
  const { profileId } = useParams();

  const viewMentorProfileQueryVariables = {
    profileId: profileId,
  };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<ViewMentorProfileQuery.getViewMentorProfileQuery>(
    ViewMentorProfileQuery.default,
    viewMentorProfileQueryVariables,
    {
      fetchPolicy: 'network-only',
    }
  );

  const model = data.getViewMentorProfile;

  // Build the long form elements
  const longFormElements = useMemo<LongFormElement[]>(() => {
    let longFormElements: LongFormElement[] = [];

    if (model?.about && model.about.length > 0) {
      longFormElements.push({ label: 'Mentor', content: model.about });

      if (model.parentProfile?.about && model.parentProfile.about.length > 0) {
        longFormElements.push({
          label: `About ${model.parentProfile?.givenName}`,
          content: model.parentProfile?.about,
        });
      }
    }

    return longFormElements;
  }, [model?.about, model?.parentProfile?.about, model?.parentProfile?.givenName]);

  // Build the long form elements
  const associatedProfilesSets = useMemo<AssociatedProfilesSet[]>(() => {
    let value: AssociatedProfilesSet[] = [];

    const profileTypeOption: ProfileTypeOption = 'PERSONAL';

    const personalProfile: MarketSearchResult = {
      id: model?.parentProfile?.id,
      profileId: model?.parentProfile?.personalProfileId,
      profilePictureUrl: model?.parentProfile?.profilePictureUrl,
      name: model?.parentProfile?.fullName,
      description: '',
      type: profileTypeOption,
    };

    // Mentors
    if (model?.parentProfile) {
      value.push({ label: 'Personal profile', profiles: [personalProfile] }); //TODO
    }

    return value;
  }, [model?.parentProfile]);

  // Build the ViewProfileProps
  const viewProfileProps = useMemo<ViewProfileProps>(() => {
    // Copy values from the model to a model for the ViewProfile component
    const viewProfileProps = Object.assign(
      {
        profileId: model?.id ?? '',
        profileType: 'MENTOR' as ProfileTypeOption,
        name: model?.name,
        subTitle: model?.name,
        title: 'Mentor Profile',
        associatedProfilesSets: associatedProfilesSets,
        longFormElements: longFormElements,
        addressCity: null,
        addressRegion: null,
        addressCountry: null,
        website: model?.parentProfile?.linkedInProfile,
        profilePictureUrl: model?.parentProfile?.profilePictureUrl,
        profilePictureRound: true,
        employmentExperience: model?.parentProfile?.employmentExperience,
      },
      model // Copy all other properties that don't need manual mapping
    );

    return viewProfileProps;
  }, [associatedProfilesSets, longFormElements, model]);

  return <>{model && <ViewProfile model={viewProfileProps} />}</>;
};

export default ViewMentorProfile;
