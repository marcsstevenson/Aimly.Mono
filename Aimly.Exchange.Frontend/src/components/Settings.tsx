import React from 'react';
import Loading from './Loading';
import { withAuthenticationRequired } from '@auth0/auth0-react';

export const Settings = () => {
  return (
    <div className="mb-5">
      <h1 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-5xl">
        Your Settings - Work in progress!
      </h1>
    </div>
  );
};

//export default ProfileComponent;

export default withAuthenticationRequired(Settings, {
  onRedirecting: () => <Loading />,
});
