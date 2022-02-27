import React, { useMemo } from 'react';
import { classNames } from 'utils/classNames';
import { GetPathForPage } from 'components/shared/AppRoutes';
import { NavLink } from 'react-router-dom';
import Pages from 'components/shared/Pages';

interface Tab {
  name: string;
  page: Pages;
}

const tabs: Tab[] = [
  { name: 'Startups', page: Pages.MarketStartups },
  { name: 'Mentors', page: Pages.MarketMentors },
  { name: 'Experts', page: Pages.MarketExperts },
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
  const currentTab = useMemo<Tab>(() => getTabForPage(props.CurrentPage), [props.CurrentPage]);

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
          className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300"
          defaultValue={currentTab.name}
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
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium'
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
