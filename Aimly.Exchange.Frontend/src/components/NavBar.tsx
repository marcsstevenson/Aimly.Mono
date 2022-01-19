import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeSelector from './DarkModeSelector';

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

import { useAuth0 } from '@auth0/auth0-react';

const navigation = [
  { name: 'Home', href: '/', AuthenticatedOnly: false },
  { name: 'For Startups', href: '/for-startups', AuthenticatedOnly: false },
  { name: 'For Mentors', href: '/for-mentors', AuthenticatedOnly: false },
  { name: 'For Experts', href: '/for-experts', AuthenticatedOnly: false },
  // { name: 'Community', href: '/Community', AuthenticatedOnly: false },
  { name: 'Marketplace', href: '/Market', AuthenticatedOnly: true },
];

const NavBar = () => {
  const [isOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <Disclosure as="nav" className="z-20 bg-indigo-600">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  key="burgerIcon"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <NavLink to={{ pathname: "/"}}>
                  <div className="flex-shrink-0 flex items-center">
                    <svg version="1.0" width="40.000000" height="35.000000"  viewBox="0 0 100.000000 100.000000" xmlns="http://www.w3.org/2000/svg">
                      <g transform="matrix(0.025534, 0, 0, -0.025534, 3.30197, 98.058701)" stroke="none" fill="#fff">
                        <path d="M3279 3355 c-222 -163 -408 -300 -413 -305 -6 -6 6 -61 34 -150 24 -77 41 -142 39 -144 -2 -1 -152 -110 -334 -241 -718 -519 -1121 -813 -1138 -833 -24 -27 -33 -94 -17 -132 25 -59 111 -88 172 -56 14 8 284 202 600 432 671 489 849 618 865 628 7 4 43 -16 85 -47 40 -30 92 -66 115 -81 l42 -28 413 302 c227 165 414 305 416 310 2 4 -105 34 -238 66 -132 32 -245 61 -251 65 -8 4 -6 67 5 220 9 118 18 231 21 252 3 20 2 37 -3 37 -5 0 -190 -133 -413 -295z"/>
                        <path d="M1470 3009 c-190 -13 -337 -53 -514 -141 -169 -83 -271 -160 -420 -316 -126 -133 -260 -368 -311 -547 -83 -290 -72 -618 31 -891 71 -192 186 -364 343 -517 271 -263 598 -396 974 -397 229 0 415 43 622 144 344 168 592 447 713 801 115 339 101 713 -39 1024 -22 48 -32 61 -41 54 -7 -6 -96 -70 -198 -143 -102 -73 -189 -136 -194 -141 -5 -4 2 -44 15 -91 21 -73 24 -104 24 -248 -1 -189 -11 -237 -88 -395 -113 -232 -330 -409 -587 -477 -71 -19 -109 -23 -230 -22 -128 0 -155 4 -235 28 -115 35 -180 64 -266 122 -178 118 -316 317 -375 540 -28 105 -25 322 4 434 67 248 237 462 462 579 284 148 654 130 914 -45 l66 -44 187 136 c104 75 196 144 206 154 18 16 16 19 -45 70 -75 64 -200 146 -283 187 -138 69 -354 130 -489 139 -39 3 -87 6 -106 7 -19 2 -82 0 -140 -4z"/>
                        <path d="M1451 2175 c-267 -61 -454 -300 -452 -575 1 -157 50 -276 164 -396 115 -122 244 -176 419 -175 115 1 160 12 267 66 209 105 342 362 305 588 -4 20 -9 37 -13 37 -3 0 -103 -71 -221 -157 -286 -207 -316 -221 -426 -188 -157 47 -220 224 -130 363 12 20 114 101 248 198 125 91 230 169 233 174 3 5 -7 16 -22 23 -91 47 -264 66 -372 42z"/>
                      </g>
                    </svg>
                  </div>
                </NavLink>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.filter(i => isAuthenticated || !i.AuthenticatedOnly).map((item) => (
                      <NavLink
                        exact
                        to={{ pathname: item.href }}
                        key={item.name}
                        activeClassName="bg-gray-900 text-white hover:bg-gray-900"
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {
                // Find here a bell icon when/if we add notifications
                /* <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
                <DarkModeSelector />

                {!isAuthenticated && (
                  <div
                      className="ml-3 cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => loginWithRedirect()}
                    >
                      Log in
                  </div>
                )}
                {/* Profile dropdown */}
                {isAuthenticated && (
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={user?.picture} alt={user?.name} />
                      </Menu.Button>
                    </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300 mt-6">
                      <Menu.Item>
                        {({ active }) => (
                            <NavLink
                              to={{pathname: 'profile'}}
                              className="inline-flex w-full px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-600 focus:outline-none"
                          >
                            Your Profile
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to={{pathname: 'settings'}}
                            className="inline-flex w-full px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-600 focus:outline-none"
                          >
                            Settings
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            onClick={() => logoutWithRedirect()}
                            className="inline-flex w-full px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-600 focus:outline-none cursor-pointer"
                          >
                            Sign out
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>

          {/* This is the dropdown menu content of burger menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  className="flex flex-col"
                  key={item.name}>
                  <NavLink
                    exact
                    to={{ pathname: item.href }}
                    activeClassName="bg-gray-900 text-white hover:bg-gray-900"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </NavLink>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
