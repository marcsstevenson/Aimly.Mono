import React, { useCallback, useContext, useMemo } from 'react';
import DashBoardHeader from 'components/dashboard/DashBoardHeader';
import DashBoardWelcome from 'components/dashboard/DashBoardWelcome';
import DashBoardUpdates from 'components/dashboard/DashBoardUpdates';
import * as DashboardQuery from '__generated__/dashboardQuery.graphql';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { PrivateContext } from 'components/PrivateContext';
import DashboardProfiles from 'components/dashboard/DashboardProfiles';

interface update {
  readonly title: string | null;
  readonly image: string | null;
  readonly content: string | null;
  readonly created: any;
}

const DashBoard = () => {
  const { userId } = useContext(PrivateContext);
  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<DashboardQuery.dashboardQuery>(DashboardQuery.default, {
    userId: userId,
  });

  return (
    <>
      <div className="flex-1 pb-8">
        <DashBoardHeader />
        <div className="mt-8">
          <DashBoardWelcome />
        </div>
        <div className="mt-8">
          <DashBoardUpdates />
        </div>
        <div className="overflow-hidden">
          <div className="space-y-6 px-4 py-6 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
            {data.dashboard?.newPersonalProfiles &&
              data.dashboard?.newPersonalProfiles.length > 0 && (
                <DashboardProfiles
                  label="Newest Personal Profiles"
                  profiles={data.dashboard?.newPersonalProfiles}
                />
              )}
            {data.dashboard?.newPersonalProfiles &&
              data.dashboard?.newPersonalProfiles.length > 0 && (
                <DashboardProfiles
                  label="Newest Company Profiles"
                  profiles={data.dashboard?.newCompanyProfiles}
                />
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
