import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './home/Home';
import Login from 'components/private/Login';
import StartupsHome from './for-startups/StartupsHome';
import MentorsHome from './for-mentors/MentorsHome';
import ExpertsHome from './for-experts/ExpertsHome';
import NavBar from './NavBar';
import PageNotFound from './PageNotFound';
import LoginBridge from 'components/LoginBridge';

const PublicShell = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/for-startups" element={<StartupsHome />} />
        <Route path="/for-startups/profile/edit/AboutYou" element={<LoginBridge />} />
        <Route path="/for-mentors" element={<MentorsHome />} />
        <Route path="/for-experts" element={<ExpertsHome />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default PublicShell;
