import React from "react";

interface TestingVariables{
  testValue: string;
}

const GetTestingVariable = () : string | undefined => {
  let processValue = process.env.REACT_APP_EXCHANGE_API_URI;

  // return blah;
  return processValue ? processValue : 'not found';
}

const Testing = () => (
  <div className="text-center my-5">
    <h1 className="mb-4">Testing</h1>
    <p className="lead">Results of testing below </p>
    <p>TestingVariables: { GetTestingVariable()}</p>
  </div>
);

export default Testing;
