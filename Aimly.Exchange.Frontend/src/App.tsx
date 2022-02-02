import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loading from './components/Loading';
import Footer from './components/Footer';
import PublicShell from './components/PublicShell';
import ErrorBoundary from './ErrorBoundary';

import { useAuth0, User } from '@auth0/auth0-react';
import PrivateShell from 'components/private/PrivateShell';

const App = (): JSX.Element => {
  const { isLoading, error, user } = useAuth0<User>();

  console.log(user);

  if (error) {
    // return <div>Oops... {error.message}</div>;
    console.log(error);
  }

  if (isLoading) {
    return <Loading />;
  }
  // navigator={history}
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div id="app" className="d-flex flex-column h-100">
          <Suspense fallback={'Loading...'}>
            {!user && <PublicShell />}
            {user && <PrivateShell />}
          </Suspense>
          {error ? <div>Oops... {error?.message}</div> : <Footer />}
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
