import React, { useEffect } from 'react';
import { LoadingArea } from 'components/shared/LoadingArea';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

export const GoDashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Navigating onload seems to be cause WebPack to crash
    // Add a small timeout to allow the loading area to render
    new Promise(() => {
      setTimeout(() => {
        navigate('/');
      }, 100);
    });
  }, []); // Run this onload

  return <LoadingArea title="Logging in..." />;
};

export default withAuthenticationRequired(GoDashboard, {
  onRedirecting: () => <LoadingArea title="Logging in..." />,
  //onRedirecting: () => <></>,
});
