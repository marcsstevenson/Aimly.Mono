import React, { Fragment } from "react";

import HomeHero from "./HomeHero";
import Points from "components/shared/Points";
import homePointItems from "./homePointItems";

const Home = () => (
  <Fragment>
    <HomeHero />
    <hr />
    <Points pointData={ homePointItems } />
  </Fragment>
);

export default Home;
