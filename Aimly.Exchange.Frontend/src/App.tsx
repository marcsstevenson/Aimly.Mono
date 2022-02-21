import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import useRelayEnvironment from 'useRelayEnvironment';
import Footer from 'components/Footer';
import PublicShell from 'components/PublicShell';
import ErrorBoundary from 'ErrorBoundary';
import { LoadingArea } from 'components/shared/LoadingArea';

import { useAuth0, User } from '@auth0/auth0-react';
import PrivateShell from 'components/private/PrivateShell';

const App = (): JSX.Element => {
  const { isLoading, error, user } = useAuth0<User>();
  const getRelayEnvironment = useRelayEnvironment();

  if (error) {
    // return <div>Oops... {error.message}</div>;
    console.log(error);
  }

  if (isLoading) {
    return <LoadingArea title="Loading..." />;
  }
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div id="app" className="d-flex flex-column min-h-screen">
          <Suspense fallback={<LoadingArea title="Loading..." />}>
            <RelayEnvironmentProvider environment={getRelayEnvironment()}>
              {!user && <PublicShell />}
              {user && <PrivateShell />}
            </RelayEnvironmentProvider>
          </Suspense>
          {error ? <div>Oops... {error?.message}</div> : <Footer />}
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
