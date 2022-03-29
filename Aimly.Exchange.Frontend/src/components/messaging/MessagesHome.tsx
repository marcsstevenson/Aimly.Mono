import React, { useContext } from 'react';
import 'sendbird-uikit/dist/index.css';
import { PrivateContext } from 'components/PrivateContext';
import { getConfig } from 'config';
import CustomisedSendBirdApp from 'components/messaging/CustomisedSendBirdApp';

const MessagesHome = () => {
  const config = getConfig();
  const { publicId } = useContext(PrivateContext);

  return (
    <>
      {publicId && (
        <div className="h-90v bg-white">
          <CustomisedSendBirdApp appId={config.sendBirdAppId} userId={publicId} />
        </div>
      )}
    </>
  );
};

export default MessagesHome;
