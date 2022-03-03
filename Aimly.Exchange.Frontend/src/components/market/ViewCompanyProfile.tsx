import React from 'react';
import * as ViewCompanyProfileQuery from '__generated__/getViewCompanyProfileQuery.graphql';

import { useLazyLoadQuery } from 'react-relay/hooks';
import { useParams } from 'react-router-dom';
import TopGraphic from 'components/shared/TopGraphic';
import ProfilePhotoViewer from 'components/shared/ProfilePhotoViewer';
import ShowBreakPoints from 'components/shared/ShowBreakPoints';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import { ExternalLinkIcon } from '@heroicons/react/outline';

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
      <ShowBreakPoints />

      {model !== null && model !== undefined && (
        <div>
          <TopGraphic title="Company Profile (work in progress)" context={null} />

          <main className="relative -mt-32">
            <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
              <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
                <div className="grid space-y-12 p-6 sm:grid-cols-6">
                  <div className="col-span-6 sm:col-span-6">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex-grow lg:mt-0 lg:flex-shrink-0 lg:flex-grow-0">
                        <ProfilePhotoViewer
                          profilePictureUrl={model.profilePictureUrl}
                          imageRoundnessClass="rounded-lg"
                        />
                      </div>
                      <div className="flex-grow space-y-6">
                        <div className="decoration-primary-500 mt-1 text-center text-8xl text-gray-800 underline dark:text-gray-100 md:text-left lg:ml-14">
                          {model.companyName}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-2"></div>
                  <div className="md:justify-left col-span-6 mt-1 flex justify-center sm:col-span-2">
                    <ExternalLinkIcon className="mr-3 h-5 w-5" aria-hidden="true" />
                    {model.website}
                  </div>
                  <div className="md:justify-left col-span-6 mt-1 flex justify-center sm:col-span-2">
                    <LocationMarkerIcon className="mr-3 h-5 w-5" aria-hidden="true" />
                    {model.addressCity && model.addressCity.length > 0 && (
                      <span>{model.addressCity}, </span>
                    )}{' '}
                    {model.addressCountry}
                  </div>

                  {/* Long form elements */}

                  <div className="col-span-6 lg:col-span-2">
                    <span className="text-5xl">The Problem</span>
                  </div>
                  <div className="col-span-6 lg:col-span-4">
                    <div className="mt-1">{model.problemDetails}</div>
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
