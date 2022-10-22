import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from 'components/Footer';
import PublicShell from 'components/PublicShell';
import ErrorBoundary from 'ErrorBoundary';
import { LoadingArea } from 'components/shared/LoadingArea';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div id="app" className="d-flex flex-column min-h-screen">
          <Suspense fallback={<LoadingArea title="Loading..." />}>
            <PublicShell />
          </Suspense>
          <Footer />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
