import React from 'react';
import * as ViewCompanyProfileQuery from '__generated__/getViewCompanyProfileQuery.graphql';

import { useLazyLoadQuery } from 'react-relay/hooks';
import { useParams } from 'react-router-dom';
import TopGraphic from 'components/shared/TopGraphic';
import ProfilePhotoViewer from 'components/shared/ProfilePhotoViewer';

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

  // console.log(loadedData);

  return (
    <>
      {model !== null && model !== undefined && (
        <div>
          <TopGraphic title="Company Profile" context={model.companyName} />

          <main className="relative -mt-32">
            <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
              <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
                <div className="default-divide lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
                  <div className="default-divide lg:col-span-12">
                    <div className="default-divide p-6">
                      <div className="sm:col-span-6">
                        <div className="flex flex-col lg:flex-row">
                          <div className="flex-grow space-y-6">
                            <div>
                              <label htmlFor="about" className="form-label">
                                The Problem
                              </label>
                              <p className="form-input-description">{model.problemDetails}</p>
                            </div>
                          </div>

                          <div className="flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0">
                            <ProfilePhotoViewer
                              profilePictureUrl={model.profilePictureUrl}
                              imageRoundnessClass="rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
