// The purpose of this component is to display a public readonly profile
// for most (or all?) of our profile types.

import React from 'react';

import TopGraphic from 'components/shared/TopGraphic';
import ViewProfileHeader from 'components/market/view/ViewProfileHeader';
import ViewAssociatedProfiles from 'components/market/view/ViewAssociatedProfiles';
import ViewProfileLongFormElements from 'components/market/view/ViewProfileLongFormElements';
import { ViewProfileProps } from 'components/market/view/ViewProfileInterfaces';
import ViewExperienceList from 'components/market/view/ViewExperienceList';
import NotVisibleToOtherUsers from 'components/market/view/NotVisibleToOtherUsers';
import NoAccess from 'components/market/view/NoAccess';

interface props {
  model: ViewProfileProps;
  showNotVisibleToOtherUsers?: boolean | undefined;
}

const ViewProfile = ({ model, showNotVisibleToOtherUsers }: props) => {
  if (showNotVisibleToOtherUsers === undefined) showNotVisibleToOtherUsers = true;

  return (
    <>
      <TopGraphic title={model.title} context={null} showBackButton={true} />

      <main className="relative -mt-32">
        <h1>{showNotVisibleToOtherUsers}</h1>
        <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
          {showNotVisibleToOtherUsers === true &&
            model.userCanAccessProfile &&
            !model.listOnMarket && <NotVisibleToOtherUsers />}
          {!model.userCanAccessProfile && <NoAccess />}
          {model.userCanAccessProfile && (
            <div className="overflow-hidden rounded-lg bg-white drop-shadow-lg dark:bg-gray-800">
              <div className="grid grid-cols-6 space-y-12 p-6">
                <ViewProfileHeader
                  profileId={model.profileId}
                  listOnMarket={model.listOnMarket}
                  userCanAccessProfile={model.userCanAccessProfile}
                  profileUserPublicId={model.profileUserPublicId}
                  profileType={model.profileType}
                  addressCity={model.addressCity}
                  addressRegion={model.addressRegion}
                  addressCountry={model.addressCountry}
                  industries={model.industries}
                  skills={model.skills}
                  name={model.name}
                  subTitle={model.subTitle}
                  profilePictureUrl={model.profilePictureUrl}
                  profilePictureRound={model.profilePictureRound}
                  website={model.website}
                  allowContact={model.allowContact}
                />

                {/* Long form elements */}
                <ViewProfileLongFormElements longFormElements={model.longFormElements} />

                {/* Experience */}
                {model.employmentExperience && model.employmentExperience.length > 0 && (
                  <ViewExperienceList employmentExperience={model?.employmentExperience} />
                )}

                {/* Associated profiles */}
                {model.associatedProfilesSets &&
                  model.associatedProfilesSets.map((set, index) => (
                    <ViewAssociatedProfiles key={index} label={set.label} profiles={set.profiles} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default ViewProfile;
