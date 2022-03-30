import React, { useContext } from 'react';
import 'sendbird-uikit/dist/index.css';
import { PrivateContext } from 'components/PrivateContext';
import { getConfig } from 'config';
// import CustomisedSendBirdApp from 'components/messaging/CustomisedSendBirdApp';
import UncustomisedSendBirdApp from 'components/messaging/UncustomisedSendBirdApp';

const MessagesHome = () => {
  const config = getConfig();
  const { publicId } = useContext(PrivateContext);

  return (
    <>
      {publicId && (
        <div className="h-80v">
          <UncustomisedSendBirdApp appId={config.sendBirdAppId} userId={publicId} />
          {/* <CustomisedSendBirdApp appId={config.sendBirdAppId} userId={publicId} /> */}
        </div>
      )}
    </>
  );
};

export default MessagesHome;
