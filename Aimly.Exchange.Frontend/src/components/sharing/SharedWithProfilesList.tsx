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
    <div>
      <div>
        {data.sharedWithCompanies?.length} Profile
        {data.sharedWithCompanies?.length !== 1 ? 's' : ''}
      </div>

      <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.sharedWithCompanies?.map((item, index) => (
          <SharedWithProfileItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SharedWithProfilesList;
