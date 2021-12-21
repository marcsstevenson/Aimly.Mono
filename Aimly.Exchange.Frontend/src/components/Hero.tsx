import React from "react";

import logo from "../assets/Arrow.svg";

const Hero = () => (
  <div className="text-center hero my-5 glass-box">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">The time to startup is <span className="text-primary now">now</span></h1>

    <p className="lead">
    It has never been a greater time to begin your amazing startup. Get started today and unshackle your abilities with Aimly. Helping startups solve important problems is what we do.
    </p>

    <button type="button" className="btn btn-primary btn-lg mt-3 mb-2">Free sign up</button>
  </div>
);

export default Hero;
