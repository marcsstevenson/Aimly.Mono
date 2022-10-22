import React from "react";
import { getConfig } from "config";

const Testing = () => (
  <div className="text-center my-5">
    <h1 className="mb-4">Testing</h1>
    <p className="lead">Results of testing below </p>
    <p>TestingVariables: </p>
    <pre> { JSON.stringify(getConfig()) } </pre>
  </div>
);

export default Testing;
