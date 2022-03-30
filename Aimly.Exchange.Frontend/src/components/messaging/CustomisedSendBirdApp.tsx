import React, { useContext, useMemo, useState } from 'react';
import {
  App as SendbirdApp,
  SendBirdProvider,
  ChannelList,
  Channel,
  GroupChannelType,
} from 'sendbird-uikit';
import 'sendbird-uikit/dist/index.css';
import { ThemeContext } from 'components/ThemeContext';
import { buildSendBirdColourSet } from 'components/messaging/SendBirdColourSet';
import ChatHeader from './ChatHeader';
import ChannelPreview from './ChannelPreview';
import './SendBirdStyles.css';

interface SendBirdAppProps {
  appId: string;
  userId: string;
}

// The purpose of this component is to destructure the standard SendbirdApp
// because it is not responsive.
// The following is supplied from external sources: appId, userId, theme, colour set and accessToken
const CustomisedSendBirdApp = ({ appId, userId }: SendBirdAppProps) => {
  const [channel, setChannel] = useState<GroupChannelType | null>(null);

  const onChannelSelect = (_channel: GroupChannelType) => {
    setChannel(_channel);
    // window.history.pushState({}, _channel.name, '/' + _channel.url);
  };

  const onBack = () => {
    setChannel(null);
    // window.history.pushState({}, document.title, '/');
  };

  const themeContext = useContext(ThemeContext);

  const chatTheme = useMemo<'light' | 'dark'>(() => {
    if (themeContext?.isDark) {
      return 'dark';
    }

    return 'light';
  }, [themeContext?.isDark]);

  const myColorSet = buildSendBirdColourSet();

  // Testing
  // appId = '60E4E56A-BE80-443A-815A-0FC074E2EEB9'; // Catallyze Exchange
  // userId = '1e783564-bb5a-45f9-bef0-2eb3b47e5234'; // Marc LinkedIn

  return (
    <div className="App">
      <SendBirdProvider userId={userId} appId={appId} colorSet={myColorSet} theme={chatTheme}>
        {channel ? (
          <Channel
            channelUrl={channel.url}
            renderChatHeader={({ channel, user }) => (
              <ChatHeader channel={channel} user={user} onBack={onBack} />
            )}
          />
        ) : (
          <ChannelList
            renderChannelPreview={({ channel }) => (
              <ChannelPreview channel={channel} onChannelSelect={onChannelSelect} />
            )}
          />
        )}
      </SendBirdProvider>
    </div>
  );
};

export default CustomisedSendBirdApp;
