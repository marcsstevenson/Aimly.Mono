// The purpose of this component is to create a default GetCompanyProfileModelInput
// and allow the user to edit it.
// This is so new company profiles can be created and we are not asking the API
// for a blank model (which is unnecessary traffic and confuses Relay).

import React, { useContext } from 'react';
import { GetCompanyProfileModelInput } from '__generated__/useSetCompanyProfileMutation.graphql';
import { PrivateContext } from 'components/PrivateContext';
import CompanyProfileForm from 'components/profiles/company/CompanyProfileForm';
import { PopulateInputModel } from 'components/profiles/company/CompanyProfileHelpers';

const CompanyProfileNew = () => {
  const { userId } = useContext(PrivateContext);

  // Just new up a model to use with the defaults (no loaded data from the API)
  let model: GetCompanyProfileModelInput = PopulateInputModel(null, userId, null);

  return <CompanyProfileForm model={model} allowDelete={false} />;
};

export default CompanyProfileNew;
