import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import { GetCurrentTenant } from 'tenant/TenantValues';

const currentTenant = GetCurrentTenant();

const DashBoardWelcome = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mb-4 rounded-md bg-green-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckBadgeIcon className="h-12 w-12 text-2xl text-green-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            {/* <h3 className="text-2xl font-medium text-green-800">
              Welcome to the Catallyze Exchange!
            </h3> */}
            <div className="mt-2 text-sm text-green-700">
              <p className="mt-4">
                For feedback, support and suggestions, please feel free to contact{' '}
                {currentTenant.supportEmailDetails.fullName} at:
                <a
                  className="ml-1 font-medium hover:text-primary-500"
                  href={'mailto:' + currentTenant.supportEmailDetails.email}
                >
                  {currentTenant.supportEmailDetails.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardWelcome;
