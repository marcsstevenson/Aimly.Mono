// The purpose of this file is to define the routes for the application.
// The context is both private and public routes
// Contained are:
//  constants for mapping paths to components (Note: the should be referenced when creating links to avoid accidental 404s)
//  helper functions for creating React route objects

import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Pages from 'components/shared/Pages';
import { profileId } from 'components/shared/UrlConstants';
import { LoadingArea } from 'components/shared/LoadingArea';

// import ExternalApi from 'components/ExternalApi';
// import GoDashboard from 'components/GoDashboard';

// Always load pages
import DashBoard from 'components/DashBoard';

// General pages
const Help = lazy(() => import('components/Help'));
const Settings = lazy(() => import('components/Settings'));
const PageNotFound = lazy(() => import('components/PageNotFound'));

// Market search
const MarketStartups = lazy(() => import('components/market/MarketStartups'));
const MarketMentor = lazy(() => import('components/market/MarketMentor'));
const MarketExpert = lazy(() => import('components/market/MarketExpert'));
const MarketCommunity = lazy(() => import('components/market/MarketCommunity'));

// View Profiles
const ViewCompanyProfile = lazy(() => import('components/market/ViewCompanyProfile'));
const ViewPersonalProfile = lazy(() => import('components/market/ViewPersonalProfile'));

// Edit Profiles
const Profiles = lazy(() => import('components/profiles/Profiles'));
const PersonalProfileEdit = lazy(() => import('components/profiles/PersonalProfileEdit'));
const MentorProfileNew = lazy(() => import('components/profiles/MentorProfileNew'));
const MentorProfileEdit = lazy(() => import('components/profiles/MentorProfileEdit'));
const ExpertProfileNew = lazy(() => import('components/profiles/ExpertProfileNew'));
const ExpertProfileEdit = lazy(() => import('components/profiles/ExpertProfileEdit'));

// Startup profile builder
const AboutYou = lazy(() => import('components/for-startups/profile/edit/1-AboutYou'));
const TheProblem = lazy(() => import('components/for-startups/profile/edit/2-TheProblem'));
const TheSolution = lazy(() => import('components/for-startups/profile/edit/3-TheSolution'));
const Potential = lazy(() => import('components/for-startups/profile/edit/4-Potential'));
const Customise = lazy(() => import('components/for-startups/profile/edit/5-Customise'));

export interface RouteItem {
  // The relative path for the route
  path: string;
  page: Pages;
  element: JSX.Element;
}

export const PrivateRoutes: RouteItem[] = [
  { path: '/', element: <DashBoard />, page: Pages.DashBoard },
  // { path: '/login', element: <GoDashboard />, page: Pages.Login },

  // Market search
  { path: '/market', element: <MarketStartups />, page: Pages.Market },
  { path: '/market/start-ups', element: <MarketStartups />, page: Pages.MarketStartups },
  { path: '/market/mentors', element: <MarketMentor />, page: Pages.MarketMentors },
  { path: '/market/experts', element: <MarketExpert />, page: Pages.MarketExperts },
  { path: '/market/community', element: <MarketCommunity />, page: Pages.MarketCommunity },

  // View public profiles on market
  {
    path: `/market/company-profile/:${profileId}`,
    element: <ViewCompanyProfile />,
    page: Pages.MarketViewCompanyProfile,
  },

  // View public profiles on market
  {
    path: `/market/personal-profile/:${profileId}`,
    element: <ViewPersonalProfile />,
    page: Pages.MarketViewPersonalProfile,
  },

  { path: '/my-profiles', element: <Profiles />, page: Pages.MyProfiles },
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
  // { path: '/external-api', element: <ExternalApi />, page: Pages.ExternalApi },
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

  // throw new Error(`No path found for page: ${page}`);
  console.log(`No path found for page: ${page}`);
  return '';
};

export const GetPrivateRoutes = (): JSX.Element => {
  return (
    <Suspense fallback={<LoadingArea title={'Loading...'} />}>
      <Routes>
        {PrivateRoutes.map((routeItem) => (
          <Route key={routeItem.path} path={routeItem.path} element={routeItem.element} />
        ))}
      </Routes>
    </Suspense>
  );
};
