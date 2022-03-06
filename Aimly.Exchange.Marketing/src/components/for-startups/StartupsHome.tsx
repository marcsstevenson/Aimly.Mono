import React, { Fragment } from "react";

import StartupsHero from "./StartupsHero";
import Points from "components/shared/Points";
import StartupsPointsModel from "./StartupsPointsModel";

const Home = () => (
  <Fragment>
    <StartupsHero />
    <hr />
    <Points pointsModel={ StartupsPointsModel } />
  </Fragment>
);

export default Home;
