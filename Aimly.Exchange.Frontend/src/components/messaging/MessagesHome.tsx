import React, { useContext, useMemo } from 'react';
import { App as SendbirdApp } from 'sendbird-uikit';
import 'sendbird-uikit/dist/index.css';
import { PrivateContext } from 'components/PrivateContext';
import { ThemeContext } from 'components/ThemeContext';
import { getConfig } from 'config';

const MessagesHome = () => {
  const config = getConfig();
  const { publicId } = useContext(PrivateContext);
  const themeContext = useContext(ThemeContext);

  const chatTheme = useMemo<'light' | 'dark'>(() => {
    if (themeContext?.isDark) {
      return 'dark';
    }

    return 'light';
  }, [themeContext?.isDark]);

  return (
    <>
      {publicId && (
        <div className="min-h-fit" style={{ height: 800 }}>
          <SendbirdApp appId={config.sendBirdAppId} userId={publicId} theme={chatTheme} />
        </div>
      )}
    </>
  );
};

export default MessagesHome;
