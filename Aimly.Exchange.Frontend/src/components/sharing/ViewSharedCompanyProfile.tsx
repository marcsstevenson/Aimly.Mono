// The purpose of this component is to display a public readonly profile for a startup company

import React, { useMemo } from 'react';
import * as ViewCompanyProfileQuery from '__generated__/getViewCompanyProfileQuery.graphql';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { useParams } from 'react-router-dom';
import { LongFormElement, ViewProfileProps } from 'components/market/view/ViewProfileInterfaces';
import ViewProfile from 'components/market/view/ViewProfile';
import { ProfileTypeOption } from '__generated__/marketSearchQuery.graphql';

const ViewSharedCompanyProfile = () => {
  // Read the Id from the route context
  const { profileId } = useParams();

  const viewCompanyProfileQueryVariables = {
    companyProfileId: profileId,
  };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<ViewCompanyProfileQuery.getViewCompanyProfileQuery>(
    ViewCompanyProfileQuery.default,
    viewCompanyProfileQueryVariables,
    {
      fetchPolicy: 'network-only',
    }
  );

  const model = data.getViewCompanyProfile;

  // Build the long form elements
  const longFormElements = useMemo<LongFormElement[]>(() => {
    let longFormElements: LongFormElement[] = [];

    if (model?.problemDetails && model.problemDetails.length > 0) {
      longFormElements.push({ label: 'The Problem', content: model.problemDetails });
    }

    if (model?.solutionDescription && model.solutionDescription.length > 0) {
      longFormElements.push({ label: 'The Solution', content: model.solutionDescription });
    }

    return longFormElements;
  }, [model?.problemDetails, model?.solutionDescription]);

  // Build the ViewProfileProps
  const viewProfileProps = useMemo<ViewProfileProps>(() => {
    // Copy values from the model to a model for the ViewProfile component
    const viewProfileProps = Object.assign(
      {
        profileId: model?.id ?? '',
        profileType: 'COMPANY' as ProfileTypeOption,
        name: model?.companyName,
        skills: null, // Now skills for company profiles
        title: 'Company Profile',
        subTitle: null,
        // associatedProfilesSets: [],
        associatedProfilesSets: [
          {
            label: 'Their Team',
            profiles: model?.associatedProfiles,
          },
        ],
        longFormElements: longFormElements,
        employmentExperience: null,
        profilePictureRound: false,
        allowContact: false, //Not for company profiles
      },
      model // Copy all other properties that don't need manual mapping
    );

    return viewProfileProps;
  }, [longFormElements, model]);

  return <>{model && <ViewProfile model={viewProfileProps} />}</>;
};

export default ViewSharedCompanyProfile;
