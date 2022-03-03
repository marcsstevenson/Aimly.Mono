import React from 'react';
import * as ViewCompanyProfileQuery from '__generated__/getViewCompanyProfileQuery.graphql';

import { useLazyLoadQuery } from 'react-relay/hooks';
import { useParams } from 'react-router-dom';
import TopGraphic from 'components/shared/TopGraphic';
import ProfilePhotoViewer from 'components/shared/ProfilePhotoViewer';
import ShowBreakPoints from 'components/shared/ShowBreakPoints';
import LocationLinker from 'components/shared/LocationLinker';
import ExternalLink from 'components/shared/ExternalLink';

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
      {/* <ShowBreakPoints /> */}

      {model !== null && model !== undefined && (
        <div>
          <TopGraphic title="Company Profile" context={null} />

          <main className="relative -mt-32">
            <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
              <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
                <div className="grid grid-cols-6 space-y-12 p-6">
                  <div className="col-span-8 mr-4 lg:col-span-2 lg:mt-0">
                    <ProfilePhotoViewer
                      profilePictureUrl={model.profilePictureUrl}
                      imageRoundnessClass="rounded-lg"
                    />
                  </div>
                  <div className="col-span-8 lg:col-span-4">
                    <div className="decoration-primary-500 flex justify-center text-8xl text-gray-800 underline dark:text-gray-100 lg:justify-start">
                      {model.companyName}
                    </div>
                  </div>
                  <div className="col-span-6 space-y-6 md:col-start-3">
                    {/* Website */}
                    {model.website && (
                      <div className="col-span-6 mt-1 flex justify-center md:col-span-3 md:justify-start">
                        <ExternalLink url={model.website} />
                      </div>
                    )}

                    {/* Location */}
                    {model.addressCountry && (
                      <div className="col-span-6 mt-1 flex justify-center md:col-span-3 md:justify-start">
                        <LocationLinker
                          addressCity={model.addressCity}
                          addressRegion={model.addressRegion}
                          addressCountry={model.addressCountry}
                        />
                      </div>
                    )}

                    {/* Industries */}
                    {model.industries && model.industries.length > 0 && (
                      <div className="col-span-6 flex flex-row justify-center gap-x-2 md:justify-start">
                        {model.industries.map((industry, index) => (
                          <div
                            key={index}
                            className="bg-primary-600 rounded-full py-1 px-3 text-center text-white"
                          >
                            {industry}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="col-span-8 border-b border-gray-200 dark:border-gray-500"></div>

                  {/* Long form elements */}

                  <div className="col-span-8 mr-4 lg:col-span-2">
                    <span className="text-5xl text-gray-900 dark:text-gray-100">The Problem</span>
                  </div>
                  <div className="col-span-8 lg:col-span-4">
                    <div className="mt-1 text-gray-800 dark:text-gray-300">
                      {model.problemDetails}
                    </div>
                  </div>
                  <div></div>
                  <div className="col-span-8 mr-4 lg:col-span-2">
                    <span className="text-5xl text-gray-900 dark:text-gray-100">
                      Their Solution
                    </span>
                  </div>
                  <div className="col-span-8 lg:col-span-4">
                    <div className="mt-1 text-gray-800 dark:text-gray-300">
                      {model.solutionDescription}
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
