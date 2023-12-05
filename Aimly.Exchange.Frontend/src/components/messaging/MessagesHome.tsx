// import React from 'react';

// const MessagesHome = () => {
//   return <></>;
// };

import React, { Suspense, useContext, useEffect } from 'react';
// import 'sendbird-uikit/dist/index.css';
import { PrivateContext } from 'components/PrivateContext';
import { getConfig } from 'config';
// import CustomisedSendBirdApp from 'components/messaging/CustomisedSendBirdApp';
import UncustomisedSendBirdApp from 'components/messaging/UncustomisedSendBirdApp';
import { LoadingArea } from 'components/shared/LoadingArea';
import useLoginToMessagingMutation from 'useLoginToMessagingMutation';
import {
  UserLoginModelInput,
  useLoginToMessagingMutation$data,
} from '__generated__/useLoginToMessagingMutation.graphql';

const MessagesHome = () => {
  const { checkedInUser, userId, messagingAccessToken, loginToMessaging } =
    useContext(PrivateContext);
  // const [accessToken, setAccessToken] = useState<string | null>(messagingAccessToken);
  const config = getConfig();
  const LoginToMessaging = useLoginToMessagingMutation();

  // Run this once on mount
  useEffect(() => {
    if (checkedInUser?.publicId && checkedInUser?.fullName && !messagingAccessToken) {
      const model: UserLoginModelInput = {
        publicId: checkedInUser.publicId,
        fullName: checkedInUser.fullName ?? '',
        pictureUrl: checkedInUser.pictureUrl ?? '',
      };
      LoginToMessaging(userId ?? '', model, handleLoginCompleted);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // This is called once the SetMentorProfile mutation has completed
  const handleLoginCompleted = (
    loginToMessagingModel: UserLoginModelInput,
    response: useLoginToMessagingMutation$data
  ): void => {
    if (response.loginToMessaging?.accessToken) {
      console.log(response.loginToMessaging.accessToken);
      // setAccessToken(response.loginToMessaging.accessToken);
      loginToMessaging(response.loginToMessaging.accessToken);
    }
  };

  return (
    <Suspense fallback={<LoadingArea title="Securing your messages..." fullHeight={false} />}>
      {checkedInUser?.publicId && messagingAccessToken && (
        <div className="h-90v">
          <UncustomisedSendBirdApp
            appId={config.sendBirdAppId}
            userId={checkedInUser.publicId}
            accessToken={messagingAccessToken}
          />
          {/* <CustomisedSendBirdApp appId={config.sendBirdAppId} userId={publicId} /> */}
        </div>
      )}
      {!messagingAccessToken && (
        <LoadingArea title="Securing your messages..." fullHeight={false} />
      )}
    </Suspense>
  );
};

export default MessagesHome;
