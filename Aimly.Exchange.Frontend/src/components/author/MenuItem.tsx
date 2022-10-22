import React, { useCallback } from 'react';
import './MenuItem.scss';
import remixicons from 'assets/remixicon.symbol.svg';

export default ({ icon, title, action, isActive = null }: any) => {
  const getButtonCss = useCallback((isActive: boolean) => {
    const bgActive =
      'bg-primary-300 hover:text-primary-600 dark:bg-primary-600 dark:hover:text-primary-300';
    const bgInactive = ' hover:bg-primary-200 hover:dark:bg-primary-700';
    return (
      (isActive ? bgActive : bgInactive) +
      ' menu-item h-8 w-8 mr-1 inline-flex justify-center py-1 px-2 text-primary-700 dark:text-primary-200'
    );
  }, []);

  return (
    <button
      type="button"
      // className={`menu-item${isActive && isActive() ? ' is-active' : ''} `}
      className={getButtonCss(isActive && isActive())}
      onClick={action}
      title={title}
    >
      <svg className="remix">
        <use xlinkHref={`${remixicons}#ri-${icon}`} />
      </svg>
    </button>
  );
};
