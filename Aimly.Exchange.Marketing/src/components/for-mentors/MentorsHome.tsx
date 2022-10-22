import React, { Fragment } from "react";

import StartupsHero from "./MentorsHero";
import Points from "components/shared/Points";
import MentorsPointsModel from "./MentorsPointsModel";

const MentorsHome = () => (
  <Fragment>
    <StartupsHero />
    <hr />
    <Points pointsModel={ MentorsPointsModel } />
  </Fragment>
);

export default MentorsHome;
