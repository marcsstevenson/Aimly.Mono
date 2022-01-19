import React, { Fragment } from "react";

import StartupsHero from "./StartupsHero";
import Points from "components/shared/Points";
import startupsPointItems from "./startupsPointItems";

const Home = () => (
  <Fragment>
    <StartupsHero />
    <hr />
    <Points pointData={ startupsPointItems } />
  </Fragment>
);

export default Home;
