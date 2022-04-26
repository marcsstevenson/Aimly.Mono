import { NavLink } from 'react-router-dom';
import Pages from 'components/shared/Pages';
import { GetPathForPage } from 'components/shared/AppRoutes';
import React from 'react';

const TopLeftLogo = () => (
  <NavLink to={{ pathname: GetPathForPage(Pages.DashBoard) }}>
    <div className="flex flex-shrink-0 items-center">
      <img
        className="h-24"
        src="https://aimlyappxmantraprod.blob.core.windows.net/images/X%20Mantra.png?sp=r&st=2022-04-26T20:25:38Z&se=3022-04-27T04:25:38Z&sv=2020-08-04&sr=b&sig=OYuYyH0B2oXJQFNcJcEAll2FEaLKKivdHwxtwklzT1w%3D"
      />
    </div>
  </NavLink>
);

export default TopLeftLogo;
