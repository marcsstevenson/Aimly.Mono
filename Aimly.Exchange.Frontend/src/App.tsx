import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import StartupsHome from './components/for-startups/StartupsHome';
import AboutYou from './components/for-startups/profile/edit/1-AboutYou';
import TheProblem from './components/for-startups/profile/edit/2-TheProblem';
import TheSolution from './components/for-startups/profile/edit/3-TheSolution';
import Potential from './components/for-startups/profile/edit/4-Potential';
import Customise from './components/for-startups/profile/edit/5-Customise';
import MentorsHome from './components/for-mentors/MentorsHome';
import ExpertsHome from './components/for-experts/ExpertsHome';
import Community from './components/Community';
import Market from './components/market/Market';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';
import ExternalApi from './components/ExternalApi';
import { useAuth0 } from '@auth0/auth0-react';
import history from './utils/history';
import ErrorBoundary from './ErrorBoundary';
import Testing from './components/Testing';
// import VideoCall from './components/VideoCall.CommentedOut';

import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from 'RelayEnvironment';
// import { Environment, Network, RecordSource, Store } from "relay-runtime";

// fontawesome
import initFontAwesome from './utils/initFontAwesome';
initFontAwesome();

const App = (): JSX.Element => {
  const { isLoading, error } = useAuth0();

  // async function fetchGraphQL(text: any, variables: any) {
  //   const REACT_APP_BACKEND_API = process.env.REACT_APP_EXCHANGE_API_URI;
  //   const graphqlApi = REACT_APP_BACKEND_API + '/api/graphql';
  //   const token = await getAccessTokenSilently();

  //   // Fetch data from GitHub's GraphQL API:
  //   const response = await fetch(graphqlApi, {
  //     method: 'POST',
  //     headers: {
  //       // Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
  //       Authorization: `Bearer ${token}`,
  //       // TODO - Add user's auth token here
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       query: text,
  //       variables,
  //     }),
  //   });

  //   // Get the response as JSON
  //   return await response.json();
  // }

  // async function fetchRelay(params: any, variables: any) {
  //   console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
  //   return fetchGraphQL(params.text, variables);
  // }

  // const modernEnvironment = new Environment({
  //   network: Network.create(fetchRelay),
  //   store: new Store(new RecordSource()),
  // });

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
            <RelayEnvironmentProvider environment={RelayEnvironment}>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/for-startups" element={<StartupsHome />} />
                <Route path="/for-mentors" element={<MentorsHome />} />
                <Route path="/for-experts" element={<ExpertsHome />} />
                <Route path="/community" element={<Community />} />
                <Route path="/market" element={<Market />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/external-api" element={<ExternalApi />} />
                <Route path="/testing" element={<Testing />} />
                <Route path="/for-startups/profile/edit/AboutYou" element={<AboutYou />} />
                <Route path="/for-startups/profile/edit/TheProblem" element={<TheProblem />} />
                <Route path="/for-startups/profile/edit/TheSolution" element={<TheSolution />} />
                <Route path="/for-startups/profile/edit/Potential" element={<Potential />} />
                <Route path="/for-startups/profile/edit/Customise" element={<Customise />} />
                {/* <Route path="/videoCall" component={VideoCall} /> */}
                {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </RelayEnvironmentProvider>
          </Suspense>
          {error ? <div>Oops... {error?.message}</div> : <Footer />}
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
