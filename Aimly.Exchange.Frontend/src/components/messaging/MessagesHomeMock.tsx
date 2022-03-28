import React from 'react';

const MessagesHome = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-900 text-gray-200 antialiased">
      <div className="flex flex-1 flex-col">
        <main className="flex min-h-0 flex-grow flex-row">
          <section className="group flex w-24 flex-none flex-col overflow-auto md:w-2/5 lg:max-w-sm">
            <div className="header flex flex-none flex-row items-center justify-between p-4">
              <div
                className="relative flex h-16 w-16 flex-shrink-0"
                style={{ filter: 'invert(100 %)' }}
              >
                <img
                  className="h-full w-full rounded-full object-cover"
                  alt="ravisankarchinnam"
                  src="https://avatars3.githubusercontent.com/u/22351907?s=60"
                />
              </div>
              <p className="text-md hidden font-bold group-hover:block md:block">Messages</p>
              <a
                href="#"
                className="block hidden h-10 w-10 rounded-full bg-gray-800 p-2 hover:bg-gray-700 group-hover:block md:block"
              >
                <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                  <path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" />
                </svg>
              </a>
            </div>
            <div className="search-box flex-none p-4">
              <form>
                <div className="relative">
                  <label>
                    <input
                      className="w-full rounded-full border border-gray-800 bg-gray-800 py-2 pr-6 pl-10 text-gray-200 transition duration-300 ease-in focus:border-gray-700 focus:bg-gray-900 focus:shadow-md focus:outline-none"
                      type="text"
                      value=""
                      placeholder="Search Messages"
                    />
                    <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                      <svg viewBox="0 0 24 24" className="h-6 w-6">
                        <path
                          fill="#bbb"
                          d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                        />
                      </svg>
                    </span>
                  </label>
                </div>
              </form>
            </div>
            <div className="contacts flex-1 overflow-y-scroll p-2">
              <div className="relative flex items-center justify-between rounded-lg p-3 hover:bg-gray-800">
                <div className="relative flex h-16 w-16 flex-shrink-0">
                  <img
                    className="h-full w-full rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/women/61.jpg"
                    alt=""
                  />
                </div>
                <div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                  <p>Angelina Jolie</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="min-w-0">
                      <p className="truncate">Ok, see you at the subway in a bit.</p>
                    </div>
                    <p className="whitespace-no-wrap ml-2">Just now</p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-between rounded-lg p-3 hover:bg-gray-800">
                <div className="relative flex h-16 w-16 flex-shrink-0">
                  <img
                    className="h-full w-full rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/men/97.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-0 right-0 rounded-full bg-gray-900 p-1">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                  <p className="font-bold">Tony Stark</p>
                  <div className="flex items-center text-sm font-bold">
                    <div className="min-w-0">
                      <p className="truncate">Hey, Are you there?</p>
                    </div>
                    <p className="whitespace-no-wrap ml-2">10min</p>
                  </div>
                </div>
                <div className="bg-secondary-700 hidden h-3 w-3 flex-shrink-0 rounded-full group-hover:block md:block"></div>
              </div>
              <div className="relative flex items-center justify-between rounded-lg bg-gray-800 p-3">
                <div className="relative flex h-16 w-16 flex-shrink-0">
                  <img
                    className="h-full w-full rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/women/33.jpg"
                    alt=""
                  />
                </div>
                <div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                  <p>Scarlett Johansson</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="min-w-0">
                      <p className="truncate">You sent a photo.</p>
                    </div>
                    <p className="whitespace-no-wrap ml-2">1h</p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-between rounded-lg p-3 hover:bg-gray-800">
                <div className="relative flex h-16 w-16 flex-shrink-0">
                  <img
                    className="h-full w-full rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                    alt=""
                  />
                </div>
                <div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                  <p>John Snow</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="min-w-0">
                      <p className="truncate">You missed a call John.</p>
                    </div>
                    <p className="whitespace-no-wrap ml-2">4h</p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-between rounded-lg p-3 hover:bg-gray-800">
                <div className="relative flex h-16 w-16 flex-shrink-0">
                  <img
                    className="h-full w-full rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/women/23.jpg"
                    alt="User2"
                  />
                </div>
                <div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                  <p>Emma Watson</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="min-w-0">
                      <p className="truncate">You sent a video.</p>
                    </div>
                    <p className="whitespace-no-wrap ml-2">11 Feb</p>
                  </div>
                </div>
                <div className="hidden h-4 w-4 flex-shrink-0 group-hover:block md:block">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    alt="user2"
                    src="https://randomuser.me/api/portraits/women/23.jpg"
                  />
                </div>
              </div>
              <div className="relative flex items-center justify-between rounded-lg p-3 hover:bg-gray-800">
                <div className="relative flex h-16 w-16 flex-shrink-0">
                  <img
                    className="h-full w-full rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/women/87.jpg"
                    alt="User2"
                  />
                  <div className="absolute bottom-0 right-0 rounded-full bg-gray-900 p-1">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                  <p>Sunny Leone</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="min-w-0">
                      <p className="truncate">Ah, it was an awesome one night stand.</p>
                    </div>
                    <p className="whitespace-no-wrap ml-2">1 Feb</p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-between rounded-lg p-3 hover:bg-gray-800">
                <div className="relative flex h-16 w-16 flex-shrink-0">
                  <img
                    className="h-full w-full rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="User2"
                  />
                </div>
                <div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                  <p>Bruce Lee</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="min-w-0">
                      <p className="truncate">You are a great human being.</p>
                    </div>
                    <p className="whitespace-no-wrap ml-2">23 Jan</p>
                  </div>
                </div>
                <div className="hidden h-4 w-4 flex-shrink-0 group-hover:block md:block">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    alt="user2"
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                  />
                </div>
              </div>
              <div className="relative flex items-center justify-between rounded-lg p-3 hover:bg-gray-800">
                <div className="relative flex h-16 w-16 flex-shrink-0">
                  <img
                    className="absolute ml-6 h-10 w-10 rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/men/22.jpg"
                    alt="User2"
                  />
                  <img
                    className="absolute mt-6 h-10 w-10 rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/men/55.jpg"
                    alt="User2"
                  />
                  <div className="absolute bottom-0 right-0 rounded-full bg-gray-900 p-1">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                  <p>TailwindCSS Group</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="min-w-0">
                      <p className="truncate">Adam: Hurray, Version 2 is out now!!.</p>
                    </div>
                    <p className="whitespace-no-wrap ml-2">23 Jan</p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-between rounded-lg p-3 hover:bg-gray-800">
                <div className="relative flex h-16 w-16 flex-shrink-0">
                  <img
                    className="h-full w-full rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/men/34.jpg"
                    alt="User2"
                  />
                </div>
                <div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                  <p>Will Smith</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="min-w-0">
                      <p className="truncate">Yay!!</p>
                    </div>
                    <p className="whitespace-no-wrap ml-2">13 Dec</p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-between rounded-lg p-3 hover:bg-gray-800">
                <div className="relative flex h-16 w-16 flex-shrink-0">
                  <img
                    className="h-full w-full rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/men/22.jpg"
                    alt="User2"
                  />
                </div>
                <div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                  <p>Brad Pitt</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="min-w-0">
                      <p className="truncate">you called Brad.</p>
                    </div>
                    <p className="whitespace-no-wrap ml-2">31 Dec</p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-between rounded-lg p-3 hover:bg-gray-800">
                <div className="relative flex h-16 w-16 flex-shrink-0">
                  <img
                    className="h-full w-full rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/men/99.jpg"
                    alt="User2"
                  />
                  <div className="absolute bottom-0 right-0 rounded-full bg-gray-900 p-1">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                  <p>Tom Hanks</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="min-w-0">
                      <p className="truncate">Tom called you.</p>
                    </div>
                    <p className="whitespace-no-wrap ml-2">31 Dec</p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-between rounded-lg p-3 hover:bg-gray-800">
                <div className="relative flex h-16 w-16 flex-shrink-0">
                  <img
                    className="h-full w-full rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/men/41.jpg"
                    alt="User2"
                  />
                </div>
                <div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                  <p>Dwayne Johnson</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="min-w-0">
                      <p className="truncate">How can i forget about that man!.</p>
                    </div>
                    <p className="whitespace-no-wrap ml-2">12 Nov</p>
                  </div>
                </div>
                <div className="hidden h-4 w-4 flex-shrink-0 group-hover:block md:block">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    alt="user2"
                    src="https://randomuser.me/api/portraits/men/41.jpg"
                  />
                </div>
              </div>
              <div className="relative flex items-center justify-between rounded-lg p-3 hover:bg-gray-800">
                <div className="relative flex h-16 w-16 flex-shrink-0">
                  <img
                    className="h-full w-full rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/men/70.jpg"
                    alt="User2"
                  />
                </div>
                <div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                  <p>Johnny Depp</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="min-w-0">
                      <p className="truncate">Alright! let's catchup tomorrow!.</p>
                    </div>
                    <p className="whitespace-no-wrap ml-2">4 Nov</p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-between rounded-lg p-3 hover:bg-gray-800">
                <div className="relative flex h-16 w-16 flex-shrink-0">
                  <img
                    className="h-full w-full rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/men/20.jpg"
                    alt="User2"
                  />
                  <div className="absolute bottom-0 right-0 rounded-full bg-gray-900 p-1">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                  <p>Leonardo Dicaprio</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="min-w-0">
                      <p className="truncate">How can you leave Rose dude. I hate you!</p>
                    </div>
                    <p className="whitespace-no-wrap ml-2">26 Oct</p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-between rounded-lg p-3 hover:bg-gray-800">
                <div className="relative flex h-16 w-16 flex-shrink-0">
                  <img
                    className="h-full w-full rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="User2"
                  />
                </div>
                <div className="ml-4 mr-6 hidden min-w-0 flex-auto group-hover:block md:block">
                  <p>Tom Cruise</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="min-w-0">
                      <p className="truncate">Happy birthday to you my friend!</p>
                    </div>
                    <p className="whitespace-no-wrap ml-2">2 Oct</p>
                  </div>
                </div>
                <div className="hidden h-4 w-4 flex-shrink-0 group-hover:block md:block">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    alt="user2"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-auto flex-col border-l border-gray-800">
            <div className="chat-header flex flex-none flex-row items-center justify-between px-6 py-4 shadow">
              <div className="flex">
                <div className="relative mr-4 flex h-12 w-12 flex-shrink-0">
                  <img
                    className="h-full w-full rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/women/33.jpg"
                    alt=""
                  />
                </div>
                <div className="text-sm">
                  <p className="font-bold">Scarlett Johansson</p>
                  <p>Active 1h ago</p>
                </div>
              </div>
              {/* This is where call options would live */}
              {/*
              <div className="flex">
                <a
                  href="#"
                  className="block h-10 w-10 rounded-full bg-gray-800 p-2 hover:bg-gray-700"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="text-secondary-500 h-full w-full fill-current"
                  >
                    <path d="M11.1735916,16.8264084 C7.57463481,15.3079672 4.69203285,12.4253652 3.17359164,8.82640836 L5.29408795,6.70591205 C5.68612671,6.31387329 6,5.55641359 6,5.00922203 L6,0.990777969 C6,0.45097518 5.55237094,3.33066907e-16 5.00019251,3.33066907e-16 L1.65110039,3.33066907e-16 L1.00214643,8.96910337e-16 C0.448676237,1.13735153e-15 -1.05725384e-09,0.445916468 -7.33736e-10,1.00108627 C-7.33736e-10,1.00108627 -3.44283713e-14,1.97634814 -3.44283713e-14,3 C-3.44283713e-14,12.3888407 7.61115925,20 17,20 C18.0236519,20 18.9989137,20 18.9989137,20 C19.5517984,20 20,19.5565264 20,18.9978536 L20,18.3488996 L20,14.9998075 C20,14.4476291 19.5490248,14 19.009222,14 L14.990778,14 C14.4435864,14 13.6861267,14.3138733 13.2940879,14.7059121 L11.1735916,16.8264084 Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="ml-4 block h-10 w-10 rounded-full bg-gray-800 p-2 hover:bg-gray-700"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="text-secondary-500 h-full w-full fill-current"
                  >
                    <path d="M0,3.99406028 C0,2.8927712 0.894513756,2 1.99406028,2 L14.0059397,2 C15.1072288,2 16,2.89451376 16,3.99406028 L16,16.0059397 C16,17.1072288 15.1054862,18 14.0059397,18 L1.99406028,18 C0.892771196,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M8,14 C10.209139,14 12,12.209139 12,10 C12,7.790861 10.209139,6 8,6 C5.790861,6 4,7.790861 4,10 C4,12.209139 5.790861,14 8,14 Z M8,12 C9.1045695,12 10,11.1045695 10,10 C10,8.8954305 9.1045695,8 8,8 C6.8954305,8 6,8.8954305 6,10 C6,11.1045695 6.8954305,12 8,12 Z M16,7 L20,3 L20,17 L16,13 L16,7 Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="ml-4 block h-10 w-10 rounded-full bg-gray-800 p-2 hover:bg-gray-700"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="text-secondary-500 h-full w-full fill-current"
                  >
                    <path d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z" />
                  </svg>
                </a>
              </div> */}
            </div>
            <div className="chat-body flex-1 overflow-y-scroll p-4">
              <div className="flex flex-row justify-start">
                <div className="relative mr-4 flex h-8 w-8 flex-shrink-0">
                  <img
                    className="h-full w-full rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/women/33.jpg"
                    alt=""
                  />
                </div>
                <div className="messages grid grid-flow-row gap-2 text-sm text-gray-700">
                  <div className="group flex items-center">
                    <p className="max-w-xs rounded-t-full rounded-r-full bg-gray-800 px-6 py-3 text-gray-200 lg:max-w-md">
                      Hey! How are you?
                    </p>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path
                          d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="group flex items-center">
                    <p className="max-w-xs rounded-r-full bg-gray-800 px-6 py-3 text-gray-200 lg:max-w-md">
                      Shall we go for Hiking this weekend?
                    </p>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path
                          d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="group flex items-center">
                    <p className="max-w-xs rounded-b-full rounded-r-full bg-gray-800 px-6 py-3 text-gray-200 lg:max-w-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non
                      curabitur gravida.
                    </p>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path
                          d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <p className="p-4 text-center text-sm text-gray-500">FRI 3:04 PM</p>
              <div className="flex flex-row justify-end">
                <div className="messages grid grid-flow-row gap-2 text-sm text-white">
                  <div className="group flex flex-row-reverse items-center">
                    <p className="bg-secondary-700 max-w-xs rounded-t-full rounded-l-full px-6 py-3 lg:max-w-md">
                      Hey! How are you?
                    </p>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path
                          d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
	 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
	C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="group flex flex-row-reverse items-center">
                    <p className="bg-secondary-700 max-w-xs rounded-l-full px-6 py-3 lg:max-w-md">
                      Shall we go for Hiking this weekend?
                    </p>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path
                          d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
	 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
	C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="group flex flex-row-reverse items-center">
                    <p className="bg-secondary-700 max-w-xs rounded-b-full rounded-l-full px-6 py-3 lg:max-w-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non
                      curabitur gravida.
                    </p>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path
                          d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
	 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
	C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <p className="p-4 text-center text-sm text-gray-500">SAT 2:10 PM</p>
              <div className="flex flex-row justify-start">
                <div className="relative mr-4 flex h-8 w-8 flex-shrink-0">
                  <img
                    className="h-full w-full rounded-full object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/women/33.jpg"
                    alt=""
                  />
                </div>
                <div className="messages grid grid-flow-row gap-2 text-sm text-gray-700">
                  <div className="group flex items-center">
                    <p className="max-w-xs rounded-t-full rounded-r-full bg-gray-800 px-6 py-3 text-gray-200 lg:max-w-md">
                      Hey! How are you?
                    </p>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path
                          d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="group flex items-center">
                    <p className="max-w-xs rounded-r-full bg-gray-800 px-6 py-3 text-gray-200 lg:max-w-md">
                      Shall we go for Hiking this weekend?
                    </p>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path
                          d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="group flex items-center">
                    <p className="max-w-xs rounded-b-full rounded-r-full bg-gray-800 px-6 py-3 text-gray-200 lg:max-w-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non
                      curabitur gravida.
                    </p>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path
                          d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <p className="p-4 text-center text-sm text-gray-500">12:40 PM</p>
              <div className="flex flex-row justify-end">
                <div className="messages grid grid-flow-row gap-2 text-sm text-white">
                  <div className="group flex flex-row-reverse items-center">
                    <p className="bg-secondary-700 max-w-xs rounded-t-full rounded-l-full px-6 py-3 lg:max-w-md">
                      Hey! How are you?
                    </p>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path
                          d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
	 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
	C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="group flex flex-row-reverse items-center">
                    <p className="bg-secondary-700 max-w-xs rounded-l-full px-6 py-3 lg:max-w-md">
                      Shall we go for Hiking this weekend?
                    </p>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path
                          d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
	 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
	C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="group flex flex-row-reverse items-center">
                    <a
                      className="relative flex h-64 w-64 max-w-xs flex-shrink-0 lg:max-w-md"
                      href="#"
                    >
                      <img
                        className="absolute h-full w-full rounded-l-lg object-cover shadow-md"
                        src="https://unsplash.com/photos/8--kuxbxuKU/download?force=true&w=640"
                        alt="hiking"
                      />
                    </a>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path
                          d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
	 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
	C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="group flex flex-row-reverse items-center">
                    <p className="bg-secondary-700 max-w-xs rounded-b-full rounded-l-full px-6 py-3 lg:max-w-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non
                      curabitur gravida.
                    </p>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path
                          d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
	 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
	C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="mx-2 hidden h-8 w-8 flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-gray-900 focus:outline-none group-hover:block"
                    >
                      <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-footer flex-none">
              <div className="flex flex-row items-center p-4">
                <button
                  type="button"
                  className="text-secondary-600 hover:text-secondary-700 mx-2 flex h-6 w-6 flex-shrink-0 focus:outline-none"
                >
                  <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                    <path d="M11,13 L8,10 L2,16 L11,16 L18,16 L13,11 L11,13 Z M0,3.99406028 C0,2.8927712 0.898212381,2 1.99079514,2 L18.0092049,2 C19.1086907,2 20,2.89451376 20,3.99406028 L20,16.0059397 C20,17.1072288 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M15,9 C16.1045695,9 17,8.1045695 17,7 C17,5.8954305 16.1045695,5 15,5 C13.8954305,5 13,5.8954305 13,7 C13,8.1045695 13.8954305,9 15,9 Z" />
                  </svg>
                </button>
                <div className="relative flex-grow">
                  <label>
                    <input
                      className="w-full rounded-full border border-gray-800 bg-gray-800 py-2 pl-3 pr-10 text-gray-200 transition duration-300 ease-in focus:border-gray-700 focus:bg-gray-900 focus:shadow-md focus:outline-none"
                      type="text"
                      value=""
                      placeholder="Aa"
                    />
                    <button
                      type="button"
                      className="text-secondary-600 hover:text-secondary-700 absolute top-0 right-0 mt-2 mr-3 flex h-6 w-6 flex-shrink-0 focus:outline-none"
                    >
                      <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                        <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 3a6 6 0 0 1-11.32 0h11.32z" />
                      </svg>
                    </button>
                  </label>
                </div>
                <button
                  type="button"
                  className="text-secondary-600 hover:text-secondary-700 mx-2 flex h-6 w-6 flex-shrink-0 focus:outline-none"
                >
                  <svg viewBox="0 0 20 20" className="h-full w-full fill-current">
                    <path d="M11.0010436,0 C9.89589787,0 9.00000024,0.886706352 9.0000002,1.99810135 L9,8 L1.9973917,8 C0.894262725,8 0,8.88772964 0,10 L0,12 L2.29663334,18.1243554 C2.68509206,19.1602453 3.90195042,20 5.00853025,20 L12.9914698,20 C14.1007504,20 15,19.1125667 15,18.000385 L15,10 L12,3 L12,0 L11.0010436,0 L11.0010436,0 Z M17,10 L20,10 L20,20 L17,20 L17,10 L17,10 Z" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MessagesHome;
