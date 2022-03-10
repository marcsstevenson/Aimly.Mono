// The purpose of this component is to display header detail for a profile

import React from 'react';
import ProfilePhotoViewer from 'components/shared/ProfilePhotoViewer';
import LocationLinker from 'components/shared/LocationLinker';
import ExternalLink from 'components/shared/ExternalLink';
import { ViewProfileHeaderProps } from 'components/market/ViewProfileInterfaces';
import ShowBreakPoints from 'components/shared/ShowBreakPoints';

const ViewProfileHeader = (props: ViewProfileHeaderProps) => {
  return (
    <>
      {/* <ShowBreakPoints /> */}
      <div className="col-span-8 mr-4 lg:col-span-2 lg:mt-0">
        <ProfilePhotoViewer
          profilePictureUrl={props.profilePictureUrl}
          imageRoundnessClass={props.profilePictureRound ? 'rounded-full' : 'rounded-lg'}
        />
      </div>
      <div className="col-span-8 lg:col-span-4">
        <div className="decoration-secondary-500 flex justify-center text-6xl text-gray-800 underline dark:text-gray-100 lg:justify-start">
          {props.name}
        </div>
      </div>
      <div className="col-span-6 space-y-6 lg:col-start-3">
        {/* Website */}
        {props.website && (
          <div className="col-span-6 mt-1 flex justify-center text-gray-900 dark:text-gray-100 md:col-span-3 lg:justify-start">
            <ExternalLink url={props.website} />
          </div>
        )}

        {/* Location */}
        {props.addressCountry && (
          <div className="col-span-6 mt-1 flex justify-center text-gray-900 dark:text-gray-100 md:col-span-3 lg:justify-start">
            <LocationLinker
              addressCity={props.addressCity}
              addressRegion={props.addressRegion}
              addressCountry={props.addressCountry}
            />
          </div>
        )}

        {/* Industries */}
        {props.industries && props.industries.length > 0 && (
          <div className="col-span-6 flex flex-row justify-center gap-x-2 lg:justify-start">
            {props.industries.map((industry, index) => (
              <div
                key={index}
                className="bg-secondary-600 rounded-full py-1 px-3 text-center text-white"
              >
                {industry}
              </div>
            ))}
          </div>
        )}

        {/* skills */}
        {props.skills && props.skills.length > 0 && (
          <div className="col-span-6 flex flex-row justify-center gap-x-2 lg:justify-start">
            {props.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-secondary-600 rounded-full py-1 px-3 text-center text-white"
              >
                {skill}
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
