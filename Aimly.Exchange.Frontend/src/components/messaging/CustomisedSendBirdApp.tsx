import React, { useContext, useMemo } from 'react';
import { App as SendbirdApp } from 'sendbird-uikit';
import 'sendbird-uikit/dist/index.css';
import { ThemeContext } from 'components/ThemeContext';
import { buildSendBirdColourSet } from 'components/messaging/SendBirdColourSet';

interface SendBirdAppProps {
  appId: string;
  userId: string;
}

const CustomisedSendBirdApp = ({ appId, userId }: SendBirdAppProps) => {
  const themeContext = useContext(ThemeContext);

  const chatTheme = useMemo<'light' | 'dark'>(() => {
    if (themeContext?.isDark) {
      return 'dark';
    }

    return 'light';
  }, [themeContext?.isDark]);

  const myColorSet = buildSendBirdColourSet();

  return (
    <>
      <SendbirdApp
        appId={appId}
        userId={userId}
        theme={chatTheme}
        // This is a premium feature
        showSearchIcon={false}
        colorSet={myColorSet}
      />
    </>
  );
};

export default CustomisedSendBirdApp;
