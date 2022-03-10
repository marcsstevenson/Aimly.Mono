import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ThemeContext, ThemeOption } from './ThemeContext';

const DarkModeSelector = () => {
  const themeContext = React.useContext(ThemeContext);

  const theme = themeContext?.theme;

  const setTheme = (themeOption: ThemeOption) => {
    themeContext?.requestThemeChange(themeOption);
  };

  // Explicitly require light mode
  const setLightMode = () => {
    setTheme(ThemeOption.light);
  };

  // Explicitly require dark mode
  const setDarkMode = () => {
    setTheme(ThemeOption.dark);
  };

  // Let the user's system nominate dark mode or light mode
  const setSystemMode = () => {
    setTheme(ThemeOption.system);
  };

  return (
    <Disclosure as="nav">
      {() => (
        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="bg-white: rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-white focus:ring-offset-gray-800 dark:bg-gray-800">
              <span className="sr-only">Open user menu</span>
              <span className="dark:hidden">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    className="stroke-gray-400 dark:stroke-gray-500"
                  ></path>
                  <path
                    d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                    className="stroke-gray-400 dark:stroke-gray-500"
                  ></path>
                </svg>
              </span>
              <span className="hidden dark:inline">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                    className="fill-transparent"
                  ></path>
                  <path
                    d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                    className="fill-gray-400 dark:fill-gray-500"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                    className="fill-gray-400 dark:fill-gray-500"
                  ></path>
                </svg>
              </span>
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
            <Menu.Items className="dark:highlight-white/5 absolute top-full right-0 z-50 mt-3 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-gray-700 shadow-lg ring-1 ring-gray-900/10 dark:bg-gray-700 dark:text-gray-300 dark:ring-0">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setLightMode()}
                    className="hover:bg-secondary-50 inline-flex w-full px-2 py-2 text-sm font-medium text-gray-700 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    <span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-6 w-6"
                      >
                        <path
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          className={`${
                            theme === ThemeOption.light
                              ? 'fill-secondary-400/20 stroke-secondary-500'
                              : 'stroke-gray-400 dark:stroke-gray-500'
                          } `}
                        ></path>
                        <path
                          d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                          className={`${
                            theme === ThemeOption.light
                              ? 'stroke-secondary-500'
                              : 'stroke-gray-400 dark:stroke-gray-500'
                          } `}
                        ></path>
                      </svg>
                    </span>
                    <span>Light</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setDarkMode()}
                    className="hover:bg-secondary-50 inline-flex w-full px-2 py-2 text-sm font-medium text-gray-700 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="mr-2 h-6 w-6">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                        className="fill-transparent"
                      ></path>
                      <path
                        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                        className={`${
                          theme === ThemeOption.dark
                            ? 'stroke-secondary-500 fill-secondary-400/20'
                            : 'fill-gray-400 dark:fill-gray-500'
                        } `}
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                        className={`${
                          theme === ThemeOption.dark
                            ? 'stroke-secondary-500'
                            : 'fill-gray-400 dark:fill-gray-500'
                        } `}
                      ></path>
                    </svg>
                    Dark
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setSystemMode()}
                    className="hover:bg-secondary-50 inline-flex w-full px-2 py-2 text-sm font-medium text-gray-700 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="mr-2 h-6 w-6">
                      <path
                        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        className={`${
                          theme === ThemeOption.system
                            ? 'stroke-secondary-500 fill-secondary-400/20'
                            : 'stroke-gray-400 dark:stroke-gray-500'
                        } `}
                      ></path>
                      <path
                        d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`${
                          theme === ThemeOption.system
                            ? 'stroke-secondary-500'
                            : 'stroke-gray-400 dark:stroke-gray-500'
                        } `}
                      ></path>
                    </svg>
                    System
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </Disclosure>
  );
};

export default DarkModeSelector;
