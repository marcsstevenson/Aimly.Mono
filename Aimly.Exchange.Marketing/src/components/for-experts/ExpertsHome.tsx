import React, { Fragment } from "react";

import StartupsHero from "./ExpertsHero";
import Points from "components/shared/Points";
import ExpertsPointsModel from "./ExpertsPointsModel";

const ExpertsHome = () => (
  <Fragment>
    <StartupsHero />
    <hr />
    <Points pointsModel={ ExpertsPointsModel } />
  </Fragment>
);

export default ExpertsHome;
