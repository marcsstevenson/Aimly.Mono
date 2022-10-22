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
      {/* less than sm */}
      <div className="mt-1 lg:hidden">
        <div className="flex place-content-center">
          <div
            className={classNames(
              'inline-block h-44 w-44 flex-shrink-0 overflow-hidden sm:h-48 sm:w-48',
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

      <div className={classNames('relative hidden overflow-hidden lg:block', imageRoundnessClass)}>
        <img
          className={classNames('relative h-48 w-48', imageRoundnessClass)}
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
