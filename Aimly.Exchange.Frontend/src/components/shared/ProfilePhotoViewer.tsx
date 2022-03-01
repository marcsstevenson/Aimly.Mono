import React from 'react';
import { classNames } from 'utils/classNames';
import resultIcon from 'assets/user-flat.svg';

export interface Props {
  profilePictureUrl: string | null | undefined;
  imageRoundnessClass: string;
}

const ProfilePhotoViewer = ({ profilePictureUrl, imageRoundnessClass }: Props) => {
  const onImageError = (ev: any) => {
    ev.target.src = resultIcon;
  };

  return (
    <>
      {/* Small view */}
      <div className="mt-1 lg:hidden">
        <div className="flex items-center">
          <div
            className={classNames(
              'inline-block h-20 w-20 flex-shrink-0 overflow-hidden',
              imageRoundnessClass
            )}
            aria-hidden="true"
          >
            <img
              className={classNames('h-full w-full', imageRoundnessClass)}
              src={profilePictureUrl ?? ''}
              alt=""
              onError={onImageError}
            />
          </div>
        </div>
      </div>

      {/* Large view */}
      <div className={classNames('relative hidden overflow-hidden lg:block', imageRoundnessClass)}>
        <img
          className={classNames('relative h-40 w-40', imageRoundnessClass)}
          src={profilePictureUrl ?? ''}
          alt=""
          onError={onImageError}
        />
        <label
          htmlFor="desktop-user-photo"
          className={
            'absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0'
          }
        ></label>
      </div>
    </>
  );
};

export default ProfilePhotoViewer;
