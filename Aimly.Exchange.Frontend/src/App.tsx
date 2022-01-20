import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import Home from './components/home/Home';
import StartupsHome from './components/for-startups/StartupsHome';
import AboutYou from './components/for-startups/profile/edit/1-AboutYou';
import TheProblem from './components/for-startups/profile/edit/2-TheProblem';
import TheSolution from './components/for-startups/profile/edit/3-TheSolution';
import Potential from './components/for-startups/profile/edit/4-Potential';
import Customise from './components/for-startups/profile/edit/5-Customise';
import MentorsHome from './components/for-mentors/MentorsHome';
import Mentorship from './components/Mentorship';
import Experts from './components/Experts';
import ExpertsHome from './components/for-experts/ExpertsHome';
import Community from './components/Community';
import Market from './components/market/Market';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import ExternalApi from './components/ExternalApi';
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
              <Route path="/for-startups" exact component={StartupsHome} />
              <Route path="/for-mentors" exact component={MentorsHome} />
              <Route path="/for-experts" exact component={ExpertsHome} />
              <Route path="/community" exact component={Community} />
              <Route path="/market" exact component={Market} />
              <Route path="/profile" component={Profile} />
              <Route path="/external-api" component={ExternalApi} />
              <Route path="/testing" component={Testing} />
              <Route path="/videoCall" component={VideoCall} />
              <Route path="/for-startups/profile/edit/AboutYou" component={AboutYou} />
              <Route path="/for-startups/profile/edit/TheProblem" component={TheProblem} />
              <Route path="/for-startups/profile/edit/TheSolution" component={TheSolution} />
              <Route path="/for-startups/profile/edit/Potential" component={Potential} />
              <Route path="/for-startups/profile/edit/Customise" component={Customise} />
            </Switch>
          </Container>
          {error ? <div>Oops... {error?.message}</div> : <Footer />}
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
