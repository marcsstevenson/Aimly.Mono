// The purpose of this component is to get the matching data for a GetMentorProfileModelInput
// and allow the user to edit it.
// This is so existing mentor profiles can be edited.

import React, { useContext, useMemo } from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { GetMentorProfileModelInput } from '__generated__/useSetMentorProfileMutation.graphql';
import * as GetMentorProfileQuery from '__generated__/getMentorProfileQuery.graphql';
import { PrivateContext } from 'components/private/PrivateContext';
import useLocationQuery from 'components/shared/useLocationQuery';
import MentorProfileForm from 'components/private/profiles/MentorProfileForm';
import { PopulateInputModel } from 'components/private/profiles/MentorProfileHelpers';

const MentorProfileEdit = () => {
  const { userId } = useContext(PrivateContext);
  let locationQuery = useLocationQuery();
  const mentorProfileId = useMemo(() => {
    return locationQuery.get('id');
  }, [locationQuery]);

  const getMentorProfileQueryVariables = {
    userId: userId,
    id: mentorProfileId,
  };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<GetMentorProfileQuery.getMentorProfileQuery>(
    GetMentorProfileQuery.default,
    getMentorProfileQueryVariables,
    // Ideally we could use commitLocalUpdate to update the relay cache when setMentorProfileMutation is called
    // However, for now, we'll simply always refresh this query when the component is mounted
    {
      fetchPolicy: 'network-only',
    }
  );

  let model: GetMentorProfileModelInput = PopulateInputModel(mentorProfileId, userId, data);

  return <MentorProfileForm model={model} />;
};

export default MentorProfileEdit;
