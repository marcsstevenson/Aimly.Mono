// The purpose of this file is to define the routes for the application.
// The context is both private and public routes
// Contained are:
//  constants for mapping paths to components (Note: the should be referenced when creating links to avoid accidental 404s)
//  helper functions for creating React route objects

import { Route, Routes } from 'react-router-dom';
import React from 'react';

import DashBoard from 'components/DashBoard';
import GoDashboard from 'components/private/GoDashboard';
import Profiles from 'components/private/Profiles';
import AboutYou from 'components/for-startups/profile/edit/1-AboutYou';
import TheProblem from 'components/for-startups/profile/edit/2-TheProblem';
import TheSolution from 'components/for-startups/profile/edit/3-TheSolution';
import Potential from 'components/for-startups/profile/edit/4-Potential';
import Customise from 'components/for-startups/profile/edit/5-Customise';
import Market from 'components/market/Market';
import Help from 'components/private/Help';
import PersonalProfileEdit from 'components/private/profiles/PersonalProfileEdit';
import MentorProfileNew from 'components/private/profiles/MentorProfileNew';
import MentorProfileEdit from 'components/private/profiles/MentorProfileEdit';
import ExpertProfileNew from 'components/private/profiles/ExpertProfileNew';
import ExpertProfileEdit from 'components/private/profiles/ExpertProfileEdit';
import Settings from 'components/Settings';
import PageNotFound from 'components/PageNotFound';
import ExternalApi from 'components/ExternalApi';

export interface RouteItem {
  // The relative path for the route
  path: string;
  page: Pages;
  element: JSX.Element;
}

export enum Pages {
  // Shared
  Home,
  Login,
  PageNotFound,

  // Private
  DashBoard,
  Market,
  Profiles, // The place to add, edit, remove profiles for startups, mentors, etc
  Help,
  PersonalProfileEdit,
  MentorProfileNew,
  MentorProfileEdit,
  ExpertProfileNew,
  ExpertProfileEdit,
  Settings,
  ExternalApi,
  AboutYou,
  TheProblem,
  TheSolution,
  Potential,
  Customise,
}

export const PublicRoutes: RouteItem[] = [
  // { path: '/', element: <DashBoard />, page: Pages.DashBoard },
  // { path: '/login', element: <Login />, page: Pages.Login },
];

export const PrivateRoutes: RouteItem[] = [
  { path: '/', element: <DashBoard />, page: Pages.DashBoard },
  { path: '/login', element: <GoDashboard />, page: Pages.Login },
  { path: '/market', element: <Market />, page: Pages.Market },
  { path: '/profiles', element: <Profiles />, page: Pages.Profiles },
  { path: '/help', element: <Help />, page: Pages.Help },
  {
    path: '/profiles/personal-profile-edit',
    element: <PersonalProfileEdit />,
    page: Pages.PersonalProfileEdit,
  },
  {
    path: '/profiles/mentor-profile-new',
    element: <MentorProfileNew />,
    page: Pages.MentorProfileNew,
  },
  {
    path: '/profiles/mentor-profile-edit',
    element: <MentorProfileEdit />,
    page: Pages.MentorProfileEdit,
  },
  {
    path: '/profiles/expert-profile-new',
    element: <ExpertProfileNew />,
    page: Pages.ExpertProfileNew,
  },
  {
    path: '/profiles/expert-profile-edit',
    element: <ExpertProfileEdit />,
    page: Pages.ExpertProfileEdit,
  },
  { path: '/settings', element: <Settings />, page: Pages.Settings },
  { path: '/external-api', element: <ExternalApi />, page: Pages.ExternalApi },
  { path: '/for-startups/profile/edit/AboutYou', element: <AboutYou />, page: Pages.AboutYou },
  {
    path: '/for-startups/profile/edit/TheProblem',
    element: <TheProblem />,
    page: Pages.TheProblem,
  },
  {
    path: '/for-startups/profile/edit/TheSolution',
    element: <TheSolution />,
    page: Pages.TheSolution,
  },
  { path: '/for-startups/profile/edit/Potential', element: <Potential />, page: Pages.Potential },
  { path: '/for-startups/profile/edit/Customise', element: <Customise />, page: Pages.Customise },

  { path: '*', element: <PageNotFound />, page: Pages.PageNotFound },
];

// Returns the path for a given
export const GetPathForPage = (page: Pages): string => {
  let match: RouteItem | null | undefined = null;

  // Try the private routes first
  match = PrivateRoutes.find((route) => route.page === page);

  if (match) return match.path;

  // Try the public routes next
  match = PublicRoutes.find((route) => route.page === page);

  if (match) return match.path;

  // throw new Error(`No path found for page: ${page}`);
  console.log(`No path found for page: ${page}`);
  return '';
};

export const GetPrivateRoutes = (): JSX.Element => {
  return (
    <Routes>
      {PrivateRoutes.map((routeItem) => (
        <Route key={routeItem.path} path={routeItem.path} element={routeItem.element} />
      ))}
    </Routes>
  );
};
