// The purpose of this component is to display a public readonly profile for a startup personal

import React, { useContext, useMemo } from 'react';
import * as ViewPersonalProfileQuery from '__generated__/getViewPersonalProfileQuery.graphql';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { useParams } from 'react-router-dom';
import {
  AssociatedProfilesSet,
  LongFormElement,
  ViewProfileProps,
} from 'components/market/view/ViewProfileInterfaces';
import ViewProfile from 'components/market/view/ViewProfile';
import { type ProfileTypeOption } from '__generated__/marketSearchQuery.graphql';
import { PrivateContext } from 'components/PrivateContext';
import { GetCurrentTenant } from 'tenant/TenantValues';

const currentTenant = GetCurrentTenant();

const mentor = currentTenant.mentorOptions.singularName;
const expert = currentTenant.expertOptions.singularName;

const ViewPersonalProfile = () => {
  // Read the Id from the route context
  const { profileId } = useParams();
  const { checkedInUser } = useContext(PrivateContext);

  const viewPersonalProfileQueryVariables = {
    personalProfileId: profileId,
    userId: checkedInUser?.userId,
  };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<ViewPersonalProfileQuery.getViewPersonalProfileQuery>(
    ViewPersonalProfileQuery.default,
    viewPersonalProfileQueryVariables,
    {
      fetchPolicy: 'network-only',
    }
  );

  const model = data.getViewPersonalProfile;

  // Build the long form elements
  const longFormElements = useMemo<LongFormElement[]>(() => {
    let longFormElements: LongFormElement[] = [];

    if (model?.about && model.about.length > 0) {
      longFormElements.push({ label: 'About', content: model.about });
    }

    return longFormElements;
  }, [model?.about]);

  // Build the long form elements
  const associatedProfilesSets = useMemo<AssociatedProfilesSet[]>(() => {
    let value: AssociatedProfilesSet[] = [];

    // Mentors
    if (model?.associatedMentorProfiles && model.associatedMentorProfiles.length > 0) {
      value.push({ label: mentor + ' Profiles', profiles: model?.associatedMentorProfiles });
    }

    // Experts
    if (model?.associatedExpertProfiles && model.associatedExpertProfiles.length > 0) {
      value.push({ label: expert + ' Profiles', profiles: model?.associatedExpertProfiles });
    }

    // Startups
    if (model?.associatedStartupProfiles && model.associatedStartupProfiles.length > 0) {
      value.push({ label: 'Associations', profiles: model?.associatedStartupProfiles });
    }

    return value;
  }, [
    model?.associatedExpertProfiles,
    model?.associatedMentorProfiles,
    model?.associatedStartupProfiles,
  ]);

  // Build the ViewProfileProps
  const viewProfileProps = useMemo<ViewProfileProps>(() => {
    // Copy values from the model to a model for the ViewProfile component
    const viewProfileProps = Object.assign(
      {
        profileId: model?.personalProfileId ?? '',
        profileUserPublicId: model?.userPublicId,
        profileType: 'PERSONAL' as ProfileTypeOption,
        name: model?.fullName,
        title: 'Personal Profile',
        subTitle: null,
        associatedProfilesSets: associatedProfilesSets,
        longFormElements: longFormElements,
        addressCity: model?.addressCity,
        addressRegion: model?.addressRegion,
        addressCountry: model?.addressCountry,
        website: model?.linkedInProfile,
        profilePictureRound: true,
        allowContact: true,
        // employmentExperiences: model?.employmentExperience,
      },
      model // Copy all other properties that don't need manual mapping
    );

    return viewProfileProps;
  }, [associatedProfilesSets, longFormElements, model]);

  return <>{model && <ViewProfile model={viewProfileProps} />}</>;
};

export default ViewPersonalProfile;
