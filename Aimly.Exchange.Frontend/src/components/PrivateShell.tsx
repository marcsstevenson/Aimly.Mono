import React, { Suspense, useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import TopBar from './TopBar';
import { GetPrivateRoutes, GetRouteItemForPath } from 'components/shared/AppRoutes';
import SideBar from './SideBar';
import { PrivateContext, PrivateContextType } from './PrivateContext';
import useCheckInMutation2 from './useCheckInMutation2';
import { LoadingArea } from 'components/shared/LoadingArea';
import { useLocation } from 'react-router-dom';
import Footer from 'components/Footer';

const PrivateShell = (): JSX.Element => {
  const { isLoading, error, user } = useAuth0();

  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [showFooter, setShowFooter] = useState<boolean>(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [publicId, setPublicId] = useState<string | null>(null);

  // const [checkInMutation] = useCheckInMutation();
  const { checkIn, checkedInModel } = useCheckInMutation2();

  const location = useLocation();

  // Scroll to the top of the page if the location changes
  useEffect(() => {
    window.scrollTo(0, 0);

    const routeItem = GetRouteItemForPath(location.pathname);
    if (routeItem) {
      setShowFooter(routeItem.footer);
    }

    console.log(location);
  }, [location]);

  // Instantiate the initial state values
  // Note that userId is stored in browser storage
  const privateContextValue: PrivateContextType = {
    isSidebarOpen: isSidebarOpen,
    setSidebarOpen: setSidebarOpen,
    showFooter: showFooter,
    setShowFooter: setShowFooter,
    user: user,
    userId: userId,
    publicId: publicId,
    checkInUser: setUserId,
  };

  // Check in the user
  useEffect(() => {
    if (user) {
      // Check in the user
      checkIn(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // This needs to be empty or it will trigger and infinite checkin loop

  useEffect(() => {
    if (checkedInModel) {
      setUserId(checkedInModel.userId);
      setPublicId(checkedInModel.publicId);
    }
  }, [checkedInModel]);

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <LoadingArea title="Loading..." fullHeight={true} />;
  }

  const testingCheckIn = false;

  return (
    <PrivateContext.Provider value={privateContextValue}>
      {(!userId || testingCheckIn) && <LoadingArea title="Checking you in..." fullHeight={true} />}
      {!testingCheckIn && userId && (
        <div className="min-h-screen">
          <SideBar />
          <div className="flex min-h-screen flex-1 flex-col lg:pl-64">
            <TopBar />
            <main className="min-h-screen flex-1">
              <Suspense fallback={<LoadingArea title="Loading..." fullHeight={true} />}>
                {GetPrivateRoutes()}
              </Suspense>
            </main>
          </div>
        </div>
      )}
      {showFooter && <Footer />}
    </PrivateContext.Provider>
  );
};

export default PrivateShell;
