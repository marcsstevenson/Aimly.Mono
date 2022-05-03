import React from 'react';

import SharedWithProfilesList from 'components/sharing/SharedWithProfilesList';
import { PageHeader } from 'components/shared/PageHeader';

const SharedWithProfiles = () => {
  return (
    <div className="flex-1 pb-8">
      <PageHeader Title="Sharing" />
      <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-50">
          Profiles shared with me
        </h2>
        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <SharedWithProfilesList />
        </div>
      </div>
    </div>
  );
};

export default SharedWithProfiles;
