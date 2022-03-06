import React, { useState, useEffect } from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import TopBar from './TopBar';
import Loading from 'components/Loading';
import { GetPrivateRoutes } from 'components/shared/AppRoutes';
import SideBar from './SideBar';
import { PrivateContext, PrivateContextType } from './PrivateContext';
import useCheckInMutation2 from './useCheckInMutation2';
import { LoadingArea } from 'components/shared/LoadingArea';

const PrivateShell = (): JSX.Element => {
  const { isLoading, error, user } = useAuth0();

  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);

  // const [checkInMutation] = useCheckInMutation();
  const { checkIn, checkedInUserId } = useCheckInMutation2();

  // Instantiate the initial state values
  // Note that userId is stored in browser storage
  const privateContextValue: PrivateContextType = {
    isSidebarOpen: isSidebarOpen,
    setSidebarOpen: setSidebarOpen,
    user: user,
    userId: userId,
    checkInUser: setUserId,
  };

  useEffect(() => {
    if (user) {
      // Check in the user
      checkIn(user);
    }
  }, []);

  useEffect(() => {
    console.log(checkedInUserId);
    setUserId(checkedInUserId);
  }, [checkedInUserId]);

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <LoadingArea title="Loading..." />;
  }

  const testingCheckIn = false;

  return (
    <PrivateContext.Provider value={privateContextValue}>
      {!userId || (testingCheckIn && <LoadingArea title="Checking you in..." />)}
      {!testingCheckIn && userId && (
        <div className="min-h-full">
          <SideBar />
          <div className="flex flex-1 flex-col lg:pl-64">
            <TopBar />
            <main className="flex-1 pb-8">{GetPrivateRoutes()}</main>
          </div>
        </div>
      )}
    </PrivateContext.Provider>
  );
};

export default withAuthenticationRequired(PrivateShell, {
  onRedirecting: () => <Loading />,
});
