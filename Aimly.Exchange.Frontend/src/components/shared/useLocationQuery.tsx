// The purpose of this hook to allow us to obtain query params from the current location
// using http://localhost:3000/for-startups/profile/edit/TheProblem?companyProfileId=abc
// useLocationQuery("companyProfileId") returns abc

import React from "react";
import {
  useLocation
} from "react-router-dom";

const useLocationQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default useLocationQuery;