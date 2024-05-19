// The purpose of this component is to display a list of associated profile grid items

import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { GetPathForPage } from 'components/shared/AppRoutes';
import Pages from 'components/shared/Pages';
import { inviteCodeValue } from 'components/shared/UrlConstants';

interface update {
  readonly title: string | null;
  readonly image: string | null;
  readonly content: string | null;
  readonly created: any;
}

// Create an array of image urls to use
const imageUrls = [
  'https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1527792492728-08d07d011113?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1522881193457-37ae97c905bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1526328828355-69b01701ca6a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1583127812417-7c06e950a432?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1630958234938-4f6a4a9dbf3a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const DashBoardUpdates = () => {
  // Randomly select an image url from the array
  const randomImageUrl = useMemo(() => {
    return imageUrls[Math.floor(Math.random() * imageUrls.length)];
  }, []);

  const updates = useMemo<update[]>(() => {
    return [
      {
        title: 'Aimly Exchange Launched!',
        image: randomImageUrl,
        content: '',
        created: 'March 16th 2022',
      },
    ];
  }, []);

  // const becomeAClientLink = useMemo(() => {
  //   return GetPathForPage(Pages.CompanyInvite) + `?${inviteCodeValue}=smyfivepoagg`;
  // }, []);

  return (
    <div className="overflow-hidden">
      <div className="space-y-6 px-4 py-6 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
        {/* <div className="mb-4">
          <span className="text-4xl text-gray-900 dark:text-gray-100">Updates</span>
        </div> */}
        <div className="col-span-8 lg:col-span-4">
          {updates &&
            updates.map((update, i) => (
              // <div key={i} className="DashBoardUpdateImage flex flex-col space-y-4">
              //   <h2>{update.title}</h2>
              // </div>
              <div key={i} className="relative">
                <div className="absolute inset-x-0 bottom-0 h-1/2" />
                <div className="mx-auto max-w-7xl">
                  <div className="relative sm:overflow-hidden sm:rounded-2xl">
                    <div className="absolute inset-0">
                      <img
                        className="h-full w-full object-cover"
                        src={randomImageUrl}
                        alt="People working on laptops"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700 mix-blend-multiply" />
                    </div>
                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                      <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="block text-white">Welcome to the</span>
                        <span className="block text-secondary-100">Aimly Exchange</span>
                      </h1>
                      {/* <p className="text-secondary-200 mx-auto mt-6 max-w-lg text-center text-xl sm:max-w-3xl">
                        Aimly is the first of what we plan to be many three sided exchanges
                        powered by the Aimly platform. We hope you love it!
                      </p> */}
                      <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                        <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                          <NavLink
                            to={{ pathname: GetPathForPage(Pages.MyProfiles) }}
                            className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-secondary-700 shadow-sm hover:bg-secondary-50 sm:px-8"
                          >
                            Build your profile
                          </NavLink>
                          <NavLink
                            to={{ pathname: GetPathForPage(Pages.Market) }}
                            className="flex items-center justify-center rounded-md border border-transparent bg-secondary-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                          >
                            Search the market
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default DashBoardUpdates;
