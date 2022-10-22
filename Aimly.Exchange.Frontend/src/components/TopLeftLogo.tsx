import { NavLink } from 'react-router-dom';
import Pages from 'components/shared/Pages';
import { GetPathForPage } from 'components/shared/AppRoutes';
import React from 'react';

const TopLeftLogo = () => (
  <NavLink to={{ pathname: GetPathForPage(Pages.DashBoard) }}>
    <div className="flex flex-shrink-0 items-center">
      <img
        src="https://catallyze.com/wp-content/uploads/2022/06/CATALLYZE_Logo_FA2_White-Logo-1.png"
        alt="logo"
      />
    </div>
  </NavLink>
);

export default TopLeftLogo;
