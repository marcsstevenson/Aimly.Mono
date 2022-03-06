import React from 'react';

export interface Props {
  profilePictureUrl: string | null | undefined;
  allowChange: boolean; // default to false
}

const ProfilePhotoSelector = (props: Props) => (
  <>
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200" aria-hidden="true">
      Photo
    </p>
    {/* Small view */}
    <div className="mt-1 lg:hidden">
      <div className="flex items-center">
        <div
          className="inline-block h-20 w-20 flex-shrink-0 overflow-hidden rounded-full"
          aria-hidden="true"
        >
          <img className="h-full w-full rounded-full" src={props.profilePictureUrl ?? ''} alt="" />
        </div>
        {props.allowChange && (
          <div className="ml-5 rounded-md shadow-sm">
            <div className="group focus-within:ring-primary-500 relative flex items-center justify-center rounded-md border border-gray-300 py-2 px-3 focus-within:ring-2 focus-within:ring-offset-2 hover:bg-gray-50">
              <label
                htmlFor="mobile-user-photo"
                className="pointer-events-none relative text-sm font-medium leading-4 text-gray-700 dark:text-gray-200"
              >
                <span>Change</span>
                <span className="sr-only"> user photo</span>
              </label>
              <input
                id="mobile-user-photo"
                name="user-photo"
                type="file"
                className="absolute h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
              />
            </div>
          </div>
        )}
      </div>
    </div>

    {/* Large view */}
    <div className="relative hidden overflow-hidden rounded-full lg:block">
      <img className="relative h-40 w-40 rounded-full" src={props.profilePictureUrl ?? ''} alt="" />
      <label
        htmlFor="desktop-user-photo"
        className={
          (props.allowChange ? 'focus-within:opacity-100 hover:opacity-100 ' : '') +
          'absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0'
        }
      >
        {props.allowChange && (
          <>
            <span>Change</span>
            <span className="sr-only"> user photo</span>
            <input
              type="file"
              id="desktop-user-photo"
              name="user-photo"
              className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
            />
          </>
        )}
      </label>
    </div>
  </>
);

export default ProfilePhotoSelector;
