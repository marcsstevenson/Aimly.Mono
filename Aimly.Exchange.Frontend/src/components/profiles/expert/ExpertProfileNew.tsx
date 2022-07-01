// The purpose of this component is to create a default GetExpertProfileModelInput
// and allow the user to edit it.
// This is so new mentor profiles can be created and we are not asking the API
// for a blank model (which is unnecessary traffic and confuses Relay).

import React, { useContext } from 'react';
import { GetExpertProfileModelInput } from '__generated__/useSetExpertProfileMutation.graphql';
import { PrivateContext } from 'components/PrivateContext';
import ExpertProfileForm from 'components/profiles/expert/ExpertProfileForm';
import { PopulateInputModel } from 'components/profiles/expert/ExpertProfileHelpers';

const ExpertProfileNew = () => {
  const { userId } = useContext(PrivateContext);

  // Just new up a model to use with the defaults (no loaded data from the API)
  let model: GetExpertProfileModelInput = PopulateInputModel(null, userId, null);

  return <ExpertProfileForm model={model} allowDelete={false} />;
};

export default ExpertProfileNew;
