import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import Home from './views/Home';
import AboutYou from './views/GetStarted/1-AboutYou';
import TheProblem from './views/GetStarted/2-TheProblem';
import TheSolution from './views/GetStarted/3-TheSolution';
import Potential from './views/GetStarted/4-Potential';
import Customise from './views/GetStarted/5-Customise';
import Mentorship from './views/Mentorship';
import Experts from './views/Experts';
import Community from './views/Community';
import Market from './views/Market';
import Loading from './components/Loading';
import NavBar from './components/NavBar2';
import Footer from './components/Footer';
import Profile from './views/Profile';
import ExternalApi from './views/ExternalApi';
import { useAuth0 } from '@auth0/auth0-react';
import history from './utils/history';
import ErrorBoundary from './ErrorBoundary';
import Testing from './components/Testing';
import VideoCall from './components/VideoCall';

// fontawesome
import initFontAwesome from './utils/initFontAwesome';
initFontAwesome();

const App = (): JSX.Element => {
  const { isLoading, error } = useAuth0();

  if (error) {
    // return <div>Oops... {error.message}</div>;
    console.log(error);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <ErrorBoundary>
        <div id="app" className="d-flex flex-column h-100">
          <NavBar />
          <Container className="flex-grow-1">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/mentorship" exact component={Mentorship} />
              <Route path="/experts" exact component={Experts} />
              <Route path="/community" exact component={Community} />
              <Route path="/market" exact component={Market} />
              <Route path="/profile" component={Profile} />
              <Route path="/external-api" component={ExternalApi} />
              <Route path="/testing" component={Testing} />
              <Route path="/videoCall" component={VideoCall} />
              <Route path="/getStarted/AboutYou" component={AboutYou} />
              <Route path="/getStarted/TheProblem" component={TheProblem} />
              <Route path="/getStarted/TheSolution" component={TheSolution} />
              <Route path="/getStarted/Potential" component={Potential} />
              <Route path="/getStarted/Customise" component={Customise} />
            </Switch>
          </Container>
          {error ? <div>Oops... {error?.message}</div> : <Footer />}
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
