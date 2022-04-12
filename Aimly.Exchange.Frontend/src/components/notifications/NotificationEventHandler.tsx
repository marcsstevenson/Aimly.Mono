import React, { useState, useEffect, useContext } from 'react';

import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { useAuth0 } from '@auth0/auth0-react';
import { PrivateContext } from 'components/PrivateContext';

const NotificationEventHandler = () => {
  const [connection, setConnection] = useState<null | HubConnection>(null);
  const { getAccessTokenSilently } = useAuth0();
  const { checkedInUser, setTotalUnreadMessageCount } = useContext(PrivateContext);

  useEffect(() => {
    const apiUri = process.env.REACT_APP_EXCHANGE_API_URI + '/api/';
    const publicId = checkedInUser?.publicId;
    console.log('publicId', publicId);

    if (apiUri && publicId) {
      const connect = new HubConnectionBuilder()
        .withUrl(apiUri, {
          accessTokenFactory: () => getAccessTokenSilently(),
          // This header sets the userId on the server
          headers: { publicId: publicId },
          withCredentials: false, // No credentials is the CORS policy on the server is *
        })
        .withAutomaticReconnect()
        .build();

      setConnection(connect);
    }
  }, [checkedInUser?.publicId, getAccessTokenSilently]);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          connection.on('setTotalUnreadMessageCount', (message) => {
            console.log('message', message);

            const totalUnreadMessageCount = parseInt(message);

            setTotalUnreadMessageCount(totalUnreadMessageCount);
          });
        })
        .catch((error) => console.log(error));
    }
  }, [connection, setTotalUnreadMessageCount]);

  return <></>;
};

export default NotificationEventHandler;
