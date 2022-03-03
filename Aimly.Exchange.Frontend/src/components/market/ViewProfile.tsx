// The purpose of this component is to display a public readonly profile
// for most (or all?) of our profile types.

import React from 'react';

import TopGraphic from 'components/shared/TopGraphic';
import ViewProfileHeader from 'components/market/ViewProfileHeader';
import ViewAssociatedProfiles from 'components/market/ViewAssociatedProfiles';
import ViewProfileLongFormElements from 'components/market/ViewProfileLongFormElements';
import { ViewProfileProps } from 'components/market/ViewProfileInterfaces';

interface props {
  model: ViewProfileProps;
}

const ViewProfile = ({ model }: props) => {
  return (
    <div>
      <TopGraphic title={model.title} context={null} />

      <main className="relative -mt-32">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
          <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
            <div className="grid grid-cols-6 space-y-12 p-6">
              <ViewProfileHeader
                addressCity={model.addressCity}
                addressRegion={model.addressRegion}
                addressCountry={model.addressCountry}
                industries={model.industries}
                name={model.name}
                profilePictureUrl={model.profilePictureUrl}
                skills={null}
                website={model.website}
              />

              {/* Long form elements */}
              <ViewProfileLongFormElements longFormElements={model.longFormElements} />

              {/* Associated profiles */}
              {model.associatedProfilesSets &&
                model.associatedProfilesSets.map((set, index) => (
                  <ViewAssociatedProfiles key={index} label={set.label} profiles={set.profiles} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewProfile;
