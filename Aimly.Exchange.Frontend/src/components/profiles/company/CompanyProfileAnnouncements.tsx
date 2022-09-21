import React from 'react';
import CompanyProfileTabs from './CompanyProfileTabs';
import Pages from 'components/shared/Pages';

const CompanyProfileAnnouncements = () => {
  return (
    <CompanyProfileTabs
      title="Announcements"
      contextVal="*** Company Name Here ***"
      currentTab={Pages.CompanyProfileAnnouncements}
    >
      <div>Company Profile Announcements</div>
    </CompanyProfileTabs>
  );
};

export default CompanyProfileAnnouncements;
