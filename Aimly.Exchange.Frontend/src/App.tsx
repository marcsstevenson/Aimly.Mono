import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import useRelayEnvironment from 'useRelayEnvironment';
import ErrorBoundary from 'ErrorBoundary';
import { LoadingArea } from 'components/shared/LoadingArea';
import { useAuth0, withAuthenticationRequired, User } from '@auth0/auth0-react';
import PrivateShell from 'components/PrivateShell';
import Loading from 'components/Loading';
// import { getConfig } from 'config';
// import ReactGA from 'react-ga';

// const config = getConfig();

// // Initialise Google Analytics if we have a tracking Id
// if (config.analyticsTrackingId) {
//   console.log('Initialising Google Analytics', config.analyticsTrackingId);
//   ReactGA.initialize(config.analyticsTrackingId, {
//     debug: true,
//   });
//   ReactGA.pageview(window.location.pathname + window.location.search);
// }

const App = (): JSX.Element => {
  const { isLoading, error, user } = useAuth0<User>();
  const getRelayEnvironment = useRelayEnvironment();

  if (error) {
    // return <div>Oops... {error.message}</div>;
    console.log(error);
  }

  if (isLoading) {
    return <LoadingArea title="Loading..." fullHeight={true} />;
  }
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div id="app" className="d-flex flex-column min-h-screen">
          <Suspense fallback={<LoadingArea title="Loading..." fullHeight={true} />}>
            <RelayEnvironmentProvider environment={getRelayEnvironment()}>
              {user && <PrivateShell />}
            </RelayEnvironmentProvider>
          </Suspense>
          {error?.message ?? <div>{error?.message}</div>}
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

// NOTE: This app requires authentication for all routes
export default withAuthenticationRequired(App, {
  onRedirecting: () => <Loading />,
});
