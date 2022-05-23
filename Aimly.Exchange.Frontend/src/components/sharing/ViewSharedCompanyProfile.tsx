// The purpose of this component is to display a public readonly profile for a startup company

import React, { useContext } from 'react';
import * as ViewFullCompanyProfileQuery from '__generated__/viewFullCompanyProfileQuery.graphql';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { useParams } from 'react-router-dom';
import { PrivateContext } from 'components/PrivateContext';
import TopGraphic from 'components/shared/TopGraphic';
import ViewProfileHeader from 'components/market/view/ViewProfileHeader';

const ViewSharedCompanyProfile = () => {
  // Read the Id from the route context
  const { profileId } = useParams();
  const { userId } = useContext(PrivateContext);

  const viewFullCompanyProfileQueryVariables = {
    companyProfileId: profileId,
    userId: userId,
  };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<ViewFullCompanyProfileQuery.viewFullCompanyProfileQuery>(
    ViewFullCompanyProfileQuery.default,
    viewFullCompanyProfileQueryVariables,
    {
      fetchPolicy: 'network-only',
    }
  );

  const model = data.viewFullCompanyProfile;

  return (
    <>
      {model && (
        <>
          <TopGraphic title="Shared Company Profile" context={null} showBackButton={true} />

          <main className="relative -mt-32">
            <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
              <div className="overflow-hidden rounded-lg bg-white pb-8 drop-shadow-lg dark:bg-gray-800">
                <div className="grid grid-cols-6 space-y-12 p-6">
                  <ViewProfileHeader
                    profileId={model.companyProfileId}
                    listOnMarket={true} // Not needed here
                    userCanAccessProfile={true} // Not needed here
                    profileUserPublicId={null}
                    profileType="COMPANY"
                    addressCity={model.addressCity}
                    addressRegion={model.addressRegion}
                    addressCountry={model.addressCountry}
                    industries={model.industries}
                    skills={null}
                    name={model.companyName}
                    subTitle="subTitle"
                    profilePictureUrl={model.profilePictureUrl}
                    profilePictureRound={false}
                    website={model.website}
                    allowContact={true}
                  />

                  {/* About You */}
                  <div className="col-span-6 mr-4 lg:col-span-2">
                    <span className="text-4xl text-gray-900 dark:text-gray-100">About You</span>
                  </div>
                  <div className="col-span-6 lg:col-span-4">
                    <div className="grid gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label className="form-label">Company stage</label>
                        <div className="mt-1">{model.type}</div>
                      </div>
                      <div className="sm:col-span-3">
                        <label className="form-label">Number of founders</label>
                        <div className="mt-1">{model.numberOfFounders}</div>
                      </div>
                      <div className="sm:col-span-6">
                        <label className="form-label">Company Street address</label>
                        <div className="mt-1">{model.streetName}</div>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="form-label">Company City</label>
                        <div className="mt-1">{model.addressCity}</div>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="form-label">State / Province</label>
                        <div className="mt-1">{model.addressRegion}</div>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="form-label">ZIP / Postal code</label>
                        <div className="mt-1">{model.postalCode}</div>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="form-label">Country</label>
                        <div className="mt-1">{model.addressCountry}</div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                  {/* The Problem */}
                  <div className="col-span-6 mr-4 lg:col-span-2">
                    <span className="text-4xl text-gray-900 dark:text-gray-100">The Problem</span>
                  </div>
                  <div className="col-span-6 lg:col-span-4">
                    <div className="grid gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-6">
                        <label className="form-label">Your Why (Why are you doing this?)</label>
                        <div className="mt-1">{model.purposeDetails}</div>
                      </div>
                      <div className="sm:col-span-6">
                        <label className="form-label">
                          The Problem (What is the problem that you aim to solve?)
                        </label>
                        <div className="mt-1">{model.problemDetails}</div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                  {/* The Solution */}
                  <div className="col-span-6 mr-4 lg:col-span-2">
                    <span className="text-4xl text-gray-900 dark:text-gray-100">The Solution</span>
                  </div>
                  <div className="col-span-6 lg:col-span-4">
                    <div className="grid gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-6">
                        <label className="form-label">
                          Solution novelty (Why is your solution the best solution and what makes it
                          unique?)
                        </label>
                        <div className="mt-1">{model.solutionNovelty}</div>
                      </div>
                      <div className="sm:col-span-6">
                        <label className="form-label">
                          Solution description (Describe your solution)
                        </label>
                        <div className="mt-1">{model.solutionDescription}</div>
                      </div>
                      <div className="sm:col-span-6">
                        <label className="form-label">
                          State of validation (Idea, MVP, generating revenue etc)
                        </label>
                        <div className="mt-1">{model.stateOfValidation}</div>
                      </div>
                      <div className="sm:col-span-6">
                        <label className="form-label">
                          Competition (What competitors are trying to solve a similar problem?
                          (Name, location, URL))
                        </label>
                        <div className="mt-1">{model.competition}</div>
                      </div>
                      <div className="sm:col-span-6">
                        <label className="form-label">
                          Position vs Competition (Why are you better positioned to succeed?)
                        </label>
                        <div className="mt-1">{model.positionVsCompetition}</div>
                      </div>
                      <div className="sm:col-span-6">
                        <label className="form-label">
                          Business model (Tell us about your business model)
                        </label>
                        <div className="mt-1">{model.businessModel}</div>
                      </div>
                      <div className="sm:col-span-6">
                        <label className="form-label">
                          Traction (Tell us about your plans to attract clients or consumers of your
                          movement)
                        </label>
                        <div className="mt-1">{model.traction}</div>
                      </div>
                      <div className="sm:col-span-6">
                        <label className="form-label">
                          Founders (Tell us more about the founding members of your team?)
                        </label>
                        <div className="mt-1">{model.founders}</div>
                      </div>
                      <div className="sm:col-span-6">
                        <label className="form-label">
                          Current annual revenue (Please indicate your current revenue status)
                        </label>
                        <div className="mt-1">{model.currentAnnualRevenue}</div>
                      </div>
                      <div className="sm:col-span-6">
                        <label className="form-label">
                          External Funding (Have you received external funding from government
                          grants, incubation labs, angel investors, ect.?)
                        </label>
                        <div className="mt-1">{model.externalFunding}</div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default ViewSharedCompanyProfile;
