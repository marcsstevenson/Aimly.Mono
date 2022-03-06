import React, { useContext } from 'react';

import { PrivateContext } from 'components/PrivateContext';
import { myProfilesQuery, default as node } from '__generated__/myProfilesQuery.graphql';
import { useLazyLoadQuery } from 'react-relay/hooks';
import MyProfileItem from './MyProfileItem';

const MyProfilesList = () => {
  const { userId } = useContext(PrivateContext);

  const myProfilesVariables = {
    userId: userId,
  };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<myProfilesQuery>(
    node,
    myProfilesVariables,
    // Ideally we could use commitLocalUpdate to update the relay cache when setAboutYouMutation is called
    // However, for now, we'll simply always refresh this query when the component is mounted
    {
      fetchPolicy: 'network-only',
    }
  );

  return (
    <>
      {data.myProfiles?.map((item, index) => (
        <MyProfileItem key={index} item={item} />
      ))}
    </>
  );
};

export default MyProfilesList;
