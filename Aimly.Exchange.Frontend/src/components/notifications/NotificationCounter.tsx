import React from 'react';

interface Props {
  count: number;
}

const NotificationCounter = ({ count }: Props) => {
  return (
    <span className="bg-validation-600 inline-flex items-center rounded-full px-1.5 py-0.5 text-xs font-medium text-white">
      {count}
    </span>
  );
};

export default NotificationCounter;
