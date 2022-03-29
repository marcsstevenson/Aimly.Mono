import React, { useContext, useMemo } from 'react';
import { App as SendbirdApp } from 'sendbird-uikit';
import 'sendbird-uikit/dist/index.css';
import { PrivateContext } from 'components/PrivateContext';
import { ThemeContext } from 'components/ThemeContext';
import { getConfig } from 'config';
import { buildSendBirdColourSet } from 'components/messaging/SendBirdColourSet';

const MessagesHome = () => {
  const config = getConfig();
  const { publicId } = useContext(PrivateContext);
  const themeContext = useContext(ThemeContext);

  // // Do this once on load
  // useEffect(() => {
  //   setShowFooter(false);
  // }, [setShowFooter]);

  const chatTheme = useMemo<'light' | 'dark'>(() => {
    if (themeContext?.isDark) {
      return 'dark';
    }

    return 'light';
  }, [themeContext?.isDark]);

  const myColorSet = buildSendBirdColourSet();

  return (
    <>
      {publicId && (
        <div className="h-90v bg-white">
          <SendbirdApp
            appId={config.sendBirdAppId}
            userId={publicId}
            theme={chatTheme}
            // This is a premium feature
            showSearchIcon={false}
            colorSet={myColorSet}
          />
        </div>
      )}
    </>
  );
};

export default MessagesHome;
