import React, { useContext } from 'react';

import { PrivateContext } from 'components/PrivateContext';
import { myProfilesQuery, default as node } from '__generated__/myProfilesQuery.graphql';
import { useLazyLoadQuery } from 'react-relay/hooks';
import MyProfileItem from 'components/profiles/MyProfileItem';

const MyProfilesList = () => {
  const { userId } = useContext(PrivateContext);

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<myProfilesQuery>(
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
    <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {data.myProfiles?.map((item, index) => (
        <MyProfileItem key={index} item={item} />
      ))}
    </div>
  );
};

export default MyProfilesList;
