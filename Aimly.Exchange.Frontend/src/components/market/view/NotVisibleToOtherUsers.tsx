import React from 'react';
import { EyeOffIcon } from '@heroicons/react/solid';

const NotVisibleToOtherUsers = () => {
  return (
    <div className="bg-secondary-600  my-2 rounded-lg p-4 text-center text-white">
      <EyeOffIcon className="h-6 w-6 text-white" aria-hidden="true" /> Note:
      <span className="font-bold">Note: </span>
      <span>
        This profile needs to be set to list on the market before it is visible to other users.
      </span>
    </div>
  );
};

export default NotVisibleToOtherUsers;
