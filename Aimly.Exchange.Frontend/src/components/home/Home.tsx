import React, { Fragment } from "react";

import HomeHero from "./HomeHero";
import Points from "components/shared/Points";
import HomePointsModel from "./HomePointsModel";

const Home = () => (
  <Fragment>
    <HomeHero />
    <hr />
    <Points pointsModel={ HomePointsModel } />
  </Fragment>
);

export default Home;
