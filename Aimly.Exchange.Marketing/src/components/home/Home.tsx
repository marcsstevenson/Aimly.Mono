import React, { Fragment, useEffect } from 'react';

import HomeHero from './HomeHero';
import Points from 'components/shared/Points';
import HomePointsModel from './HomePointsModel';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get('login')) {
      navigate('/login');
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
