import React from 'react';
import { EyeSlashIcon } from '@heroicons/react/20/solid';

const NoAccess = () => {
  return (
    <div className="my-2  rounded-lg bg-secondary-600 p-4 text-center text-white">
      <EyeSlashIcon className="h-6 w-6 text-white" aria-hidden="true" /> Note:
      <span className="font-bold"></span>
      <span>
        We cannot display this profile for you. It likely has been deleted or unlisted from the
        market.
      </span>
    </div>
  );
};

export default NoAccess;
