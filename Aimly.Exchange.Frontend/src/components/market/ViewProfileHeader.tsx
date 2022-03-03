// The purpose of this component is to display header detail for a profile

import React from 'react';
import ProfilePhotoViewer from 'components/shared/ProfilePhotoViewer';
import LocationLinker from 'components/shared/LocationLinker';
import ExternalLink from 'components/shared/ExternalLink';
import { ViewProfileHeaderProps } from 'components/market/ViewProfileInterfaces';

const ViewProfileHeader = (props: ViewProfileHeaderProps) => {
  return (
    <>
      <div className="col-span-8 mr-4 lg:col-span-2 lg:mt-0">
        <ProfilePhotoViewer
          profilePictureUrl={props.profilePictureUrl}
          imageRoundnessClass="rounded-lg"
        />
      </div>
      <div className="col-span-8 lg:col-span-4">
        <div className="decoration-primary-500 flex justify-center text-8xl text-gray-800 underline dark:text-gray-100 lg:justify-start">
          {props.name}
        </div>
      </div>
      <div className="col-span-6 space-y-6 md:col-start-3">
        {/* Website */}
        {props.website && (
          <div className="col-span-6 mt-1 flex justify-center md:col-span-3 md:justify-start">
            <ExternalLink url={props.website} />
          </div>
        )}

        {/* Location */}
        {props.addressCountry && (
          <div className="col-span-6 mt-1 flex justify-center md:col-span-3 md:justify-start">
            <LocationLinker
              addressCity={props.addressCity}
              addressRegion={props.addressRegion}
              addressCountry={props.addressCountry}
            />
          </div>
        )}

        {/* Industries */}
        {props.industries && props.industries.length > 0 && (
          <div className="col-span-6 flex flex-row justify-center gap-x-2 md:justify-start">
            {props.industries.map((industry, index) => (
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
    </>
  );
};

export default ViewProfileHeader;
