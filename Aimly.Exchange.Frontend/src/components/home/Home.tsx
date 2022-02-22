import React, { Fragment, useEffect } from 'react';

import HomeHero from './HomeHero';
import Points from 'components/shared/Points';
import HomePointsModel from './HomePointsModel';
import useNavigateToPage from 'components/shared/useNavigateToPage';
import { Pages } from 'components/shared/AppRoutes';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const navigateToPage = useNavigateToPage();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get('login')) {
      navigateToPage(Pages.Login);
    }
  }, []); // Run this onload

  return (
    <Fragment>
      <HomeHero />
      <hr />
      <Points pointsModel={HomePointsModel} />
    </Fragment>
  );
};

export default Home;
