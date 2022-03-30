import React, { useContext, useMemo } from 'react';
import { App as SendbirdApp } from 'sendbird-uikit';
import 'sendbird-uikit/dist/index.css';
import { ThemeContext } from 'components/ThemeContext';
import { buildSendBirdColourSet } from 'components/messaging/SendBirdColourSet';

interface SendBirdAppProps {
  appId: string;
  userId: string;
}

// The purpose of this component is to wrap the standard SendbirdApp with the
// required configuration such as appId, userId, theme, colour set and accessToken
const UncustomisedSendBirdApp = ({ appId, userId }: SendBirdAppProps) => {
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
    <SendbirdApp
      appId={appId}
      userId={userId}
      accessToken={'e894c53f40e52e16bbbc49a8e53b339d7d47aa3d'}
      theme={chatTheme}
      // This is a premium feature
      showSearchIcon={false}
      colorSet={myColorSet}
    />
  );
};

export default UncustomisedSendBirdApp;
