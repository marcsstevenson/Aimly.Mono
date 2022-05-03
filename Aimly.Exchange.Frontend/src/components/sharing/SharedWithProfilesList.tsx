import React, { useContext } from 'react';

import { PrivateContext } from 'components/PrivateContext';
import {
  sharedWithCompaniesQuery,
  default as node,
} from '__generated__/sharedWithCompaniesQuery.graphql';
import { useLazyLoadQuery } from 'react-relay/hooks';
import SharedWithProfileItem from 'components/sharing/SharedWithProfileItem';

const SharedWithProfilesList = () => {
  const { userId } = useContext(PrivateContext);

  // NOTE: Just companies at time of writing - other profile types to follow
  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<sharedWithCompaniesQuery>(
    node,
    {
      userId: userId,
    },
    // Ideally we could use commitLocalUpdate to update the relay cache when setAboutYouMutation is called
    // However, for now, we'll simply always refresh this query when the component is mounted
    {
      fetchPolicy: 'network-only',
    }
  );

  return (
    <>
      {data.sharedWithCompanies?.map((item, index) => (
        <SharedWithProfileItem key={index} item={item} />
      ))}
    </>
  );
};

export default SharedWithProfilesList;
