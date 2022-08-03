import React, { useMemo } from 'react';
import { classNames } from 'utils/classNames';
import { GetPathForPage } from 'components/shared/AppRoutes';
import { NavLink } from 'react-router-dom';
import Pages from 'components/shared/Pages';
import useNavigateToPage from 'components/shared/useNavigateToPage';
import { GetCurrentTenant } from 'tenant/TenantValues';

interface Tab {
  name: string;
  page: Pages;
}

const currentTenant = GetCurrentTenant();

const companies = currentTenant.companyOptions.pluralName;
const mentors = currentTenant.mentorOptions.pluralName;
const experts = currentTenant.expertOptions.pluralName;

const tabs: Tab[] = [
  { name: companies, page: Pages.MarketCompanies },
  { name: mentors, page: Pages.MarketMentors },
  { name: experts, page: Pages.MarketExperts },
  { name: 'Community', page: Pages.MarketCommunity },
];

const getTabForPage = (page: Pages): Tab => {
  const match = tabs.find((tab) => tab.page === page);

  // Return the first tab if there was no match
  return match ?? tabs[0];
};

interface Props {
  CurrentPage: Pages;
}

export const MarketTabs = (props: Props) => {
  const navigateToPage = useNavigateToPage();
  const currentTab = useMemo<Tab>(() => getTabForPage(props.CurrentPage), [props.CurrentPage]);

  const tabSelected = (name: string) => {
    // Get the matching tab
    let match = tabs.find((i) => i.name === name);

    // Navigate to matching page if there is a match
    if (match) {
      navigateToPage(match.page);
    }
  };

  return (
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
          defaultValue={currentTab.name}
          onChange={(e) => {
            tabSelected(e.target.value);
          }}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabs.map((tab, index) => (
              <NavLink
                key={index}
                to={{ pathname: GetPathForPage(tab.page) }}
                className={classNames(
                  tab.page === currentTab.page
                    ? 'border-secondary-500 text-secondary-600 dark:text-secondary-400'
                    : 'dark: border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-400',
                  'text-md w-1/4 border-b-2 py-4 px-1 text-center font-medium'
                )}
                aria-current={tab.page === currentTab.page ? 'page' : undefined}
              >
                {tab.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
