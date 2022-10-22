import React from 'react';
import { GroupChannelType } from 'sendbird-uikit';
import IconArrowLeft from './icon-arrow-left.svg';

interface ChatHeaderProps {
  channel: GroupChannelType; // TODO - type
  user: any; // TODO - type. Seems to be Sendbird.User but not exported :/
  onBack: () => void;
}

const ChatHeader = ({ channel, user, onBack }: ChatHeaderProps) => {
  return (
    <div className="custom-channel-header">
      <button onClick={onBack}>
        <img width={20} height={20} src={IconArrowLeft} alt="Back button" />
      </button>
      <span>{channel.name}</span>
      <span>{user.nickname}</span>
    </div>
  );
};

export default ChatHeader;
