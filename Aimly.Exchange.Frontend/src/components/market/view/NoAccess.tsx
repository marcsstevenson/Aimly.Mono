import React from 'react';
import { EyeOffIcon } from '@heroicons/react/solid';

const NoAccess = () => {
  return (
    <div className="bg-secondary-600  my-2 rounded-lg p-4 text-center text-white">
      <EyeOffIcon className="h-6 w-6 text-white" aria-hidden="true" /> Note:
      <span className="font-bold"></span>
      <span>
        We cannot display this profile for you. It likely has been deleted or unlisted from the
        market.
      </span>
    </div>
  );
};

export default NoAccess;
