// The purpose of this component is to display header detail for a profile

import React, { useState } from 'react';
import ProfilePhotoViewer from 'components/shared/ProfilePhotoViewer';
import LocationLinker from 'components/shared/LocationLinker';
import ExternalLink from 'components/shared/ExternalLink';
import { ViewProfileHeaderProps } from 'components/market/view/ViewProfileInterfaces';
import { MetaDataList } from 'components/shared/MetaDataList';
import { ChatIcon } from '@heroicons/react/outline';
// import { getUrlForContactProfile } from 'components/market/view/UrlForViewProfile';
import MarketContact from 'components/market/MarketContact';

const ViewProfileHeader = (props: ViewProfileHeaderProps) => {
  const [showContact, setShowContact] = useState(false);
  // const urlForContactProfile = useMemo(
  //   () => getUrlForContactProfile(props.profileType, props.profileId),
  //   [props.profileId, props.profileType]
  // );

  return (
    <>
      <MarketContact
        profileId={props.profileId}
        profileType={props.profileType}
        show={showContact}
        onDone={() => setShowContact(false)}
      />

      {/* <ShowBreakPoints /> */}
      <div className="col-span-8 mr-4 lg:col-span-2 lg:mt-0">
        <ProfilePhotoViewer
          profilePictureUrl={props.profilePictureUrl}
          imageRoundnessClass={props.profilePictureRound ? 'rounded-full' : 'rounded-lg'}
        />
      </div>
      <div className="col-span-8 lg:col-span-4">
        <div className="decoration-secondary-500 flex justify-center text-4xl text-gray-800 underline dark:text-gray-100 sm:text-6xl lg:justify-start">
          <p className="... overflow-hidden text-ellipsis"> {props.name}</p>
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
          <div className="col-span-6 flex flex-row flex-wrap justify-center gap-x-2 lg:justify-start">
            <span className="mr-1 mt-2 inline-flex rounded-full py-1 pr-1 text-sm font-medium text-gray-800 dark:text-gray-200">
              Industries
            </span>
            <MetaDataList dataList={props.industries} allowEdit={false} deleteTrigger={() => {}} />
          </div>
        )}

        {/* Skills */}
        {props.skills && props.skills.length > 0 && (
          <div className="col-span-6 flex flex-row flex-wrap justify-center gap-x-2 lg:justify-start">
            <span className="mr-1 mt-2 inline-flex rounded-full py-1 pr-1 text-sm font-medium text-gray-800 dark:text-gray-200">
              Skills
            </span>
            <MetaDataList dataList={props.skills} allowEdit={false} deleteTrigger={() => {}} />
          </div>
        )}
        {props.allowContact && (
          <div className="col-span-6 flex flex-row flex-wrap justify-center gap-x-2 lg:justify-start">
            <button
              onClick={() => setShowContact(true)}
              className="bg-secondary-600 hover:bg-secondary-700 inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white md:text-lg"
            >
              Contact
              <ChatIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      <div className="col-span-8 border-b border-gray-200 dark:border-gray-500"></div>
    </>
  );
};

export default ViewProfileHeader;
