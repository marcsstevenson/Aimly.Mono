import React, { Fragment, useContext, useEffect } from 'react';
import Pages from 'components/shared/Pages';

import { Dialog, Transition } from '@headlessui/react';
import {
  CogIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
  UserGroupIcon,
  XIcon,
  ChatIcon,
  ShareIcon,
} from '@heroicons/react/outline';
import { PrivateContext } from './PrivateContext';
import { NavLink, useLocation } from 'react-router-dom';
import { GetPathForPage } from 'components/shared/AppRoutes';
import TopLeftLogo from 'components/TopLeftLogo';
import NotificationCounter from 'components/notifications/NotificationCounter';
import SideBarButton from './SideBarButton';

import { GetCurrentTenant } from 'tenant/TenantValues';

const currentTenant = GetCurrentTenant();
const marketLabel = currentTenant.marketLabel;

const navigation = [
  { name: 'Home', href: GetPathForPage(Pages.DashBoard), icon: HomeIcon, current: true },
  {
    name: 'My Profiles',
    href: GetPathForPage(Pages.MyProfiles),
    icon: UserCircleIcon,
    current: false,
  },
  {
    name: 'Sharing',
    href: GetPathForPage(Pages.SharedWithProfiles),
    icon: ShareIcon,
    current: false,
  },
  { name: marketLabel, href: GetPathForPage(Pages.Market), icon: UserGroupIcon, current: false },
  { name: 'Messages', href: GetPathForPage(Pages.MessagesHome), icon: ChatIcon, current: false },
  // { name: 'History', href: '#', icon: ClockIcon, current: false },
  // { name: 'Balances', href: '#', icon: ScaleIcon, current: false },
  // { name: 'Cards', href: '#', icon: CreditCardIcon, current: false },
  // { name: 'Reports', href: '#', icon: DocumentReportIcon, current: false },
];
const secondaryNavigation = [
  { name: 'Settings', href: GetPathForPage(Pages.Settings), icon: CogIcon },
  { name: 'Help', href: GetPathForPage(Pages.Help), icon: QuestionMarkCircleIcon },
  // { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
];

const SideBar = (): JSX.Element => {
  const { isSidebarOpen, setSidebarOpen, totalUnreadMessageCount } = useContext(PrivateContext);
  const { pathname } = useLocation();

  // We want to close the sidebar if the user clicks on a link and navigates to a different page
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname, setSidebarOpen]);

  return (
    <>
      {/* Sidebar for mobile */}
      <Transition.Root show={isSidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-40 flex lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-primary-800 pt-5 pb-4">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 items-center px-4">
                <TopLeftLogo />
              </div>
              <nav
                className="mt-5 h-full flex-shrink-0 divide-y divide-primary-900 overflow-y-auto"
                aria-label="Sidebar"
              >
                <div className="space-y-1 px-2">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={{ pathname: item.href }}
                      className={({ isActive }) =>
                        (isActive
                          ? 'bg-primary-700 text-white'
                          : ' text-primary-100 hover:bg-primary-600 hover:text-white') +
                        '  group flex items-center rounded-md px-2 py-2 text-base font-medium'
                      }
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name === 'Messages' && totalUnreadMessageCount > 0 ? (
                        <div className="mr-4">
                          <NotificationCounter count={totalUnreadMessageCount} />
                        </div>
                      ) : (
                        <item.icon
                          className="mr-4 h-6 w-6 flex-shrink-0 text-primary-200"
                          aria-hidden="true"
                        />
                      )}

                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="mt-6 pt-6">
                  <div className="space-y-1 px-2">
                    {secondaryNavigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={{ pathname: item.href }}
                        className={({ isActive }) =>
                          (isActive
                            ? 'bg-primary-700 text-white'
                            : ' text-primary-100 hover:bg-primary-600 hover:text-white') +
                          '  group flex items-center rounded-md px-2 py-2 text-base font-medium'
                        }
                      >
                        <item.icon className="mr-4 h-6 w-6 text-primary-200" aria-hidden="true" />
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-grow flex-col overflow-y-auto border-r border-r-primary-900 bg-primary-800 pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center px-4">
            <TopLeftLogo />
          </div>
          <nav
            className="mt-5 flex flex-1 flex-col divide-y divide-primary-900 overflow-y-auto"
            aria-label="Sidebar"
          >
            <div className="space-y-1 px-2">
              {navigation.map((item) => (
                <SideBarButton key={item.name}>
                  <NavLink
                    to={{ pathname: item.href }}
                    className={({ isActive }) =>
                      (isActive
                        ? 'bg-primary-700 text-white'
                        : ' text-primary-100 hover:bg-primary-600 hover:text-white') +
                      '  group flex items-center rounded-md px-2 py-2 text-base font-medium'
                    }
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <>
                      {item.name === 'Messages' && totalUnreadMessageCount > 0 ? (
                        <div className="mr-4">
                          <NotificationCounter count={totalUnreadMessageCount} />
                        </div>
                      ) : (
                        <item.icon
                          className="mr-4 h-6 w-6 flex-shrink-0 text-primary-200"
                          aria-hidden="true"
                        />
                      )}
                      <span>{item.name}</span>
                    </>
                  </NavLink>
                </SideBarButton>
              ))}
            </div>
            <div className="mt-6 pt-6">
              <div className="space-y-1 px-2">
                {secondaryNavigation.map((item) => (
                  <SideBarButton key={item.name}>
                    <NavLink
                      to={{ pathname: item.href }}
                      className={({ isActive }) =>
                        (isActive
                          ? 'bg-primary-700 text-white'
                          : ' text-primary-100 hover:bg-primary-600 hover:text-white') +
                        '  group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6'
                      }
                    >
                      <item.icon className="mr-4 h-6 w-6 text-primary-200" aria-hidden="true" />
                      {item.name}
                    </NavLink>
                  </SideBarButton>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideBar;
