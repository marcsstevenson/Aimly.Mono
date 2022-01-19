import React, { Fragment } from "react";

import HomeHero from "./HomeHero";
import HomeContent from "./HomeContent";

const Home = () => (
  <Fragment>
    <HomeHero />
    <hr />
    <HomeContent />
  </Fragment>
);

export default Home;
