import React, { useMemo } from 'react';
import { BuildingOfficeIcon, UserIcon, UsersIcon } from '@heroicons/react/20/solid';
import { classNames } from 'utils/classNames';
import { Link, useSearchParams } from 'react-router-dom';
import { GetPathForPage } from 'components/shared/AppRoutes';
import Pages from 'components/shared/Pages';

// This is the tabbing component for the company profile area
// It allows navigation between the following areas
// * Displaying the company's announcements to team members
// * Displaying the company profile
// * Editing the company profile if admin
// * Editing the company team members

interface Tab {
  name: string;
  option:
    | Pages.CompanyProfileAnnouncements
    | Pages.CompanyProfileEdit
    | Pages.CompanyProfileTeamMembers;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
  current: boolean;
  path?: string;
}

const tabs: Tab[] = [
  {
    name: 'Announcements',
    option: Pages.CompanyProfileAnnouncements,
    icon: UserIcon,
    current: false,
  },
  {
    name: 'Profile',
    option: Pages.CompanyProfileEdit,
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: 'Team Members',
    option: Pages.CompanyProfileTeamMembers,
    icon: UsersIcon,
    current: false,
  },
];

export interface CompanyProfileTabsProps {
  children: React.ReactNode;
  currentTab:
    | Pages.CompanyProfileAnnouncements
    | Pages.CompanyProfileEdit
    | Pages.CompanyProfileTeamMembers;
}

const CompanyProfileTabs = ({ children, currentTab }: CompanyProfileTabsProps) => {
  const [searchParams] = useSearchParams();

  const configureTab = (tab: Tab) => {
    tab.path = GetPathForPage(tab.option as Pages);

    tab.current = tab.option === currentTab;

    // Do we have a query string? Eg, "?companyProfileId=21f299a9-db01-45a2-13f3-08d9e422a60e"
    // If so then we want to add it to the path
    if (searchParams) {
      return (tab.path += `?${searchParams}`);
    }
  };
  const configuredTabs = useMemo(() => {
    tabs.forEach((tab) => {
      configureTab(tab);
    });

    return tabs;
  }, [searchParams, currentTab]);

  return (
    <>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-secondary-500 focus:ring-secondary-500"
            defaultValue={tabs.find((tab) => tab.current)?.name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {configuredTabs.map((tab) => (
                <Link
                  key={tab.name}
                  to={{ pathname: tab.path }}
                  className={classNames(
                    tab.current
                      ? 'border-secondary-500 text-secondary-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  <tab.icon
                    className={classNames(
                      tab.current
                        ? 'text-secondary-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      '-ml-0.5 mr-2 h-5 w-5'
                    )}
                    aria-hidden="true"
                  />
                  <span>{tab.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default CompanyProfileTabs;
