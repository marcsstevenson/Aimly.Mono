// The purpose of this component is to create a default GetMentorProfileModelInput
// and allow the user to edit it.
// This is so new mentor profiles can be created and we are not asking the API
// for a blank model (which is unnecessary traffic and confuses Relay).

import React, { useContext } from 'react';
import { GetMentorProfileModelInput } from '__generated__/useSetMentorProfileMutation.graphql';
import { PrivateContext } from 'components/private/PrivateContext';
import MentorProfileForm from 'components/private/profiles/MentorProfileForm';
import { PopulateInputModel } from 'components/private/profiles/MentorProfileHelpers';

const MentorProfileNew = () => {
  const { userId } = useContext(PrivateContext);

  // Just new up a model to use with the defaults (no loaded data from the API)
  let model: GetMentorProfileModelInput = PopulateInputModel(null, userId, null);

  return <MentorProfileForm model={model} />;
};

export default MentorProfileNew;
