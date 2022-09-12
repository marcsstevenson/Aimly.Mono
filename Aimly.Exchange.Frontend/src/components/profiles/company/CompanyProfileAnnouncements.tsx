import React from 'react';
import CompanyProfileTabs from './CompanyProfileTabs';
import Pages from 'components/shared/Pages';

const CompanyProfileAnnouncements = () => {
  return (
    <CompanyProfileTabs currentTab={Pages.CompanyProfileAnnouncements}>
      <div>CompanyProfileAnnouncements</div>
    </CompanyProfileTabs>
  );
};

export default CompanyProfileAnnouncements;
