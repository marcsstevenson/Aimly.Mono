import React, { useEffect } from 'react';
import { LoadingArea } from 'components/shared/LoadingArea';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import useNavigateToPage from 'components/shared/useNavigateToPage';
import { Pages } from 'components/shared/AppRoutes';

export const GoDashboard = () => {
  const navigateToPage = useNavigateToPage();
  useEffect(() => {
    navigateToPage(Pages.DashBoard);
  }, []); // Run this onload

  return <LoadingArea title="Logging in..." />;
};

export default withAuthenticationRequired(GoDashboard, {
  onRedirecting: () => <LoadingArea title="Logging in..." />,
  //onRedirecting: () => <></>,
});
