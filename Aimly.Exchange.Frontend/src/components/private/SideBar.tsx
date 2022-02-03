import React, { Fragment, useContext } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { classNames } from 'utils/classNames';
import {
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline';
import { PrivateContext } from './PrivateContext';
import { NavLink } from 'react-router-dom';
import { GetPathForPage, Pages } from 'components/shared/AppRoutes';
const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'History', href: '#', icon: ClockIcon, current: false },
  { name: 'Balances', href: '#', icon: ScaleIcon, current: false },
  { name: 'Cards', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Recipients', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Reports', href: '#', icon: DocumentReportIcon, current: false },
];
const secondaryNavigation = [
  { name: 'Settings', href: '#', icon: CogIcon },
  { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
];

const SideBar = (): JSX.Element => {
  const { isSidebarOpen, setSidebarOpen } = useContext(PrivateContext);
  return (
    <>
      <Transition.Root show={isSidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
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
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
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
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/easywire-logo-indigo-300-mark-white-text.svg"
                  alt="Easywire logo"
                />
              </div>
              <nav
                className="mt-5 flex-shrink-0 h-full divide-y divide-indigo-800 overflow-y-auto"
                aria-label="Sidebar"
              >
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-indigo-800 text-white'
                          : 'text-indigo-100 hover:text-white hover:bg-indigo-600',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon
                        className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-200"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 pt-6">
                  <div className="px-2 space-y-1">
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-indigo-100 hover:text-white hover:bg-indigo-600"
                      >
                        <item.icon className="mr-4 h-6 w-6 text-indigo-200" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col flex-grow bg-indigo-700 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <NavLink to={{ pathname: GetPathForPage(Pages.DashBoard) }}>
              <div className="flex-shrink-0 flex items-center">
                <svg
                  version="1.0"
                  width="40.000000"
                  height="35.000000"
                  viewBox="0 0 100.000000 100.000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    transform="matrix(0.025534, 0, 0, -0.025534, 3.30197, 98.058701)"
                    stroke="none"
                    fill="#fff"
                  >
                    <path d="M3279 3355 c-222 -163 -408 -300 -413 -305 -6 -6 6 -61 34 -150 24 -77 41 -142 39 -144 -2 -1 -152 -110 -334 -241 -718 -519 -1121 -813 -1138 -833 -24 -27 -33 -94 -17 -132 25 -59 111 -88 172 -56 14 8 284 202 600 432 671 489 849 618 865 628 7 4 43 -16 85 -47 40 -30 92 -66 115 -81 l42 -28 413 302 c227 165 414 305 416 310 2 4 -105 34 -238 66 -132 32 -245 61 -251 65 -8 4 -6 67 5 220 9 118 18 231 21 252 3 20 2 37 -3 37 -5 0 -190 -133 -413 -295z" />
                    <path d="M1470 3009 c-190 -13 -337 -53 -514 -141 -169 -83 -271 -160 -420 -316 -126 -133 -260 -368 -311 -547 -83 -290 -72 -618 31 -891 71 -192 186 -364 343 -517 271 -263 598 -396 974 -397 229 0 415 43 622 144 344 168 592 447 713 801 115 339 101 713 -39 1024 -22 48 -32 61 -41 54 -7 -6 -96 -70 -198 -143 -102 -73 -189 -136 -194 -141 -5 -4 2 -44 15 -91 21 -73 24 -104 24 -248 -1 -189 -11 -237 -88 -395 -113 -232 -330 -409 -587 -477 -71 -19 -109 -23 -230 -22 -128 0 -155 4 -235 28 -115 35 -180 64 -266 122 -178 118 -316 317 -375 540 -28 105 -25 322 4 434 67 248 237 462 462 579 284 148 654 130 914 -45 l66 -44 187 136 c104 75 196 144 206 154 18 16 16 19 -45 70 -75 64 -200 146 -283 187 -138 69 -354 130 -489 139 -39 3 -87 6 -106 7 -19 2 -82 0 -140 -4z" />
                    <path d="M1451 2175 c-267 -61 -454 -300 -452 -575 1 -157 50 -276 164 -396 115 -122 244 -176 419 -175 115 1 160 12 267 66 209 105 342 362 305 588 -4 20 -9 37 -13 37 -3 0 -103 -71 -221 -157 -286 -207 -316 -221 -426 -188 -157 47 -220 224 -130 363 12 20 114 101 248 198 125 91 230 169 233 174 3 5 -7 16 -22 23 -91 47 -264 66 -372 42z" />
                  </g>
                </svg>
              </div>
            </NavLink>
          </div>
          <nav
            className="mt-5 flex-1 flex flex-col divide-y divide-indigo-800 overflow-y-auto"
            aria-label="Sidebar"
          >
            <div className="px-2 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-indigo-800 text-white'
                      : 'text-indigo-100 hover:text-white hover:bg-indigo-600',
                    'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <item.icon
                    className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-200"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-6 pt-6">
              <div className="px-2 space-y-1">
                {secondaryNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-indigo-100 hover:text-white hover:bg-indigo-600"
                  >
                    <item.icon className="mr-4 h-6 w-6 text-indigo-200" aria-hidden="true" />
                    {item.name}
                  </a>
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
