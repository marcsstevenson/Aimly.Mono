// The purpose of this component is to get the matching data for a GetExpertProfileModelInput
// and allow the user to edit it.
// This is so existing mentor profiles can be edited.

import React, { useContext, useMemo } from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { GetExpertProfileModelInput } from '__generated__/useSetExpertProfileMutation.graphql';
import * as GetExpertProfileQuery from '__generated__/getExpertProfileQuery.graphql';
import { PrivateContext } from 'components/PrivateContext';
import useLocationQuery from 'components/shared/useLocationQuery';
import ExpertProfileForm from 'components/profiles/expert/ExpertProfileForm';
import { PopulateInputModel } from 'components/profiles/expert/ExpertProfileHelpers';

const ExpertProfileEdit = () => {
  const { userId } = useContext(PrivateContext);
  let locationQuery = useLocationQuery();
  const profileId = useMemo(() => {
    return locationQuery.get('id');
  }, [locationQuery]);

  const getExpertProfileQueryVariables = {
    userId: userId,
    id: profileId,
  };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<GetExpertProfileQuery.getExpertProfileQuery>(
    GetExpertProfileQuery.default,
    getExpertProfileQueryVariables,
    // Ideally we could use commitLocalUpdate to update the relay cache when setExpertProfileMutation is called
    // However, for now, we'll simply always refresh this query when the component is mounted
    {
      fetchPolicy: 'network-only',
    }
  );

  let model: GetExpertProfileModelInput = PopulateInputModel(profileId, userId, data);

  return <ExpertProfileForm model={model} allowDelete={true} />;
};

export default ExpertProfileEdit;
