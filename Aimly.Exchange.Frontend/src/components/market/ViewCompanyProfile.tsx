// The purpose of this component is to display a public readonly profile for a startup company

import React, { useMemo } from 'react';
import * as ViewCompanyProfileQuery from '__generated__/getViewCompanyProfileQuery.graphql';

import { useLazyLoadQuery } from 'react-relay/hooks';
import { useParams } from 'react-router-dom';
import TopGraphic from 'components/shared/TopGraphic';
import ViewProfileHeader from 'components/market/ViewProfileHeader';
import ViewAssociatedProfiles from 'components/market/ViewAssociatedProfiles';
import ViewProfileLongFormElements, {
  LongFormElement,
} from 'components/market/ViewProfileLongFormElements';

const ViewCompanyProfile = () => {
  // Read the Id from the route context
  const { profileId } = useParams();

  const viewCompanyProfileQueryVariables = {
    companyProfileId: profileId,
  };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<ViewCompanyProfileQuery.getViewCompanyProfileQuery>(
    ViewCompanyProfileQuery.default,
    viewCompanyProfileQueryVariables
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

  return (
    <>
      {model !== null && model !== undefined && (
        <div>
          <TopGraphic title="Company Profile" context={null} />

          <main className="relative -mt-32">
            <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
              <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
                <div className="grid grid-cols-6 space-y-12 p-6">
                  <ViewProfileHeader
                    addressCity={model.addressCity}
                    addressRegion={model.addressRegion}
                    addressCountry={model.addressCountry}
                    industries={model.industries}
                    name={model.companyName}
                    profilePictureUrl={model.profilePictureUrl}
                    skills={null}
                    website={model.website}
                  />

                  {/* Long form elements */}
                  <ViewProfileLongFormElements longFormElements={longFormElements} />

                  {/* Associated admin personal profiles */}
                  {model.associatedProfiles && model.associatedProfiles.length > 0 && (
                    <ViewAssociatedProfiles
                      label="Their Team"
                      profiles={model.associatedProfiles}
                    />
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default ViewCompanyProfile;
