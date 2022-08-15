import React from 'react';
import { EyeOffIcon } from '@heroicons/react/solid';

const NotVisibleToOtherUsers = () => {
  return (
    <div className="my-2  rounded-lg bg-secondary-600 p-4 text-center text-white">
      <EyeOffIcon className="h-6 w-6 text-white" aria-hidden="true" />
      <span className="font-bold">Note: </span>
      <span>
        This profile needs to be set to list on the market before it is visible to other users.
      </span>
    </div>
  );
};

export default NotVisibleToOtherUsers;
