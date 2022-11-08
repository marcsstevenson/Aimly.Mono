import React from 'react';
import ToolTip from 'components/shared/ToolTip';

const PrivateUntilShared = () => {
  return (
    <span className="ml-1">
      <ToolTip text="Private unless you share it" />
    </span>
  );
};

export default PrivateUntilShared;
