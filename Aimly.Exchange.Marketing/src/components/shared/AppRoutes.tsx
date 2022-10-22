// The purpose of this file is to define the routes for the application.
// The context is both private and public routes
// Contained are:
//  constants for mapping paths to components (Note: the should be referenced when creating links to avoid accidental 404s)
//  helper functions for creating React route objects

import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Pages from 'components/shared/Pages';
import { profileId } from 'components/shared/UrlConstants';

import PageNotFound from 'components/PageNotFound';

export interface RouteItem {
  // The relative path for the route
  path: string;
  page: Pages;
  element: JSX.Element;
}

export const PublicRoutes: RouteItem[] = [
  // { path: '/', element: <DashBoard />, page: Pages.DashBoard },
  // { path: '/login', element: <Login />, page: Pages.Login },
];

// Returns the path for a given
export const GetPathForPage = (page: Pages): string => {
  let match: RouteItem | null | undefined = null;

  // Try the public routes
  match = PublicRoutes.find((route) => route.page === page);

  if (match) return match.path;

  // throw new Error(`No path found for page: ${page}`);
  console.log(`No path found for page: ${page}`);
  return '';
};

export const GetPrivateRoutes = (): JSX.Element => {
  return (
    <Routes>
      {PublicRoutes.map((routeItem) => (
        <Route key={routeItem.path} path={routeItem.path} element={routeItem.element} />
      ))}
    </Routes>
  );
};
