import React, { useEffect } from 'react';
import { LoadingArea } from 'components/shared/LoadingArea';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import useNavigateToPage from 'components/shared/useNavigateToPage';
import Pages from 'components/shared/Pages';

export const Login = () => {
  // const navigateToPage = useNavigateToPage();
  // useEffect(() => {
  //   navigateToPage(Pages.DashBoard);
  // }, []); // Run this onload

  return <LoadingArea title="Logging in..." />;
  //return <></>;
};

export default withAuthenticationRequired(Login, {
  onRedirecting: () => <LoadingArea title="Logging in..." />,
  //onRedirecting: () => <></>,
});
