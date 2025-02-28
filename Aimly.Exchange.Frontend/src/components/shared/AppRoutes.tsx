// The purpose of this file is to define the routes for the application.
// The context is both private and public routes
// Contained are:
//  constants for mapping paths to components (Note: the should be referenced when creating links to avoid accidental 404s)
//  helper functions for creating React route objects

import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Pages from './Pages';
import { profileId } from './UrlConstants';
import { GetCurrentTenant } from '../../tenant/TenantValues';

// Always load pages
import DashBoard from '../dashboard/DashBoard';
import CompanyInvite from '../CompanyInvite';
import AboutUs from '../market/view/AboutUs';
import CompanyProfileAnnouncements from '../profiles/company/CompanyProfileAnnouncements';

// General pages
const Help = lazy(() => import('../Help'));
const SettingsEdit = lazy(() => import('../settings/SettingsEdit'));
const PageNotFound = lazy(() => import('../PageNotFound'));
const AcceptInvite = lazy(() => import('../AcceptInvite'));

// Market search
const MarketCompanies = lazy(() => import('../market/MarketCompanies'));
const MarketMentor = lazy(() => import('../market/MarketMentor'));
const MarketExpert = lazy(() => import('../market/MarketExpert'));
const MarketCommunity = lazy(() => import('../market/MarketCommunity'));

// View Profiles
const ViewCompanyProfile = lazy(() => import('../market/view/ViewCompanyProfile'));
const ViewPersonalProfile = lazy(() => import('../market/view/ViewPersonalProfile'));
const ViewMentorProfile = lazy(() => import('../market/view/ViewMentorProfile'));
const ViewExpertProfile = lazy(() => import('../market/view/ViewExpertProfile'));

// Sharing
const SharedWithProfiles = lazy(() => import('../sharing/SharedWithProfiles'));
const ViewSharedCompanyProfile = lazy(() => import('../sharing/ViewSharedCompanyProfile'));

// Contact
// const MarketContact = lazy(() => import('components/market/MarketContact'));

// Messaging
const MessagesHome = lazy(() => import('../messaging/MessagesHome'));

// Edit Profiles
const Profiles = lazy(() => import('../profiles/MyProfiles'));
const PersonalProfileEdit = lazy(() => import('../profiles/personal/PersonalProfileEdit'));
const MentorProfileNew = lazy(() => import('../profiles/mentor/MentorProfileNew'));
const MentorProfileEdit = lazy(() => import('../profiles/mentor/MentorProfileEdit'));
const ExpertProfileNew = lazy(() => import('../profiles/expert/ExpertProfileNew'));
const ExpertProfileEdit = lazy(() => import('../profiles/expert/ExpertProfileEdit'));
const CompanyProfileNew = lazy(() => import('../profiles/company/CompanyProfileNew'));
const CompanyProfileEdit = lazy(() => import('../profiles/company/CompanyProfileEdit'));

// Startup profile builder
const AboutYou = lazy(() => import('../for-startups/profile/edit/1-AboutYou'));
const TheProblem = lazy(() => import('../for-startups/profile/edit/2-TheProblem'));
const TheSolution = lazy(() => import('../for-startups/profile/edit/3-TheSolution'));
const Potential = lazy(() => import('../for-startups/profile/edit/4-Potential'));
const Customise = lazy(() => import('../for-startups/profile/edit/5-Customise'));

// Author
const ContentEdit = lazy(() => import('../author/ContentEdit'));

// Accounts
const AccountsHome = lazy(() => import('../accounts/AccountsHome'));
const AccountsSetupStart = lazy(() => import('../accounts/AccountsSetupStart'));
const AccountsSetupComplete = lazy(() => import('../accounts/AccountsSetupComplete'));

export interface RouteItem {
  // The relative path for the route
  path: string;
  page: Pages;
  element: JSX.Element;
  footer: boolean;
}

const currentTenant = GetCurrentTenant();
const companiesRoute = currentTenant.companyOptions.pluralName.toLocaleLowerCase();
const companyRoute = currentTenant.companyOptions.singularName.toLocaleLowerCase();

const mentorsRoute = currentTenant.mentorOptions.pluralName.toLocaleLowerCase();
const mentorRoute = currentTenant.mentorOptions.singularName.toLocaleLowerCase();

const expertsRoute = currentTenant.expertOptions.pluralName.toLocaleLowerCase();
const expertRoute = currentTenant.expertOptions.singularName.toLocaleLowerCase();
const market = currentTenant.marketLabel.toLocaleLowerCase();

export const PrivateRoutes: RouteItem[] = [
  { path: '/', element: <DashBoard />, page: Pages.DashBoard, footer: true },
  // { path: '/login', element: <GoDashboard />, page: Pages.Login },

  // General pages
  { path: '/help', element: <Help />, page: Pages.Help, footer: true },
  { path: '/settings', element: <SettingsEdit />, page: Pages.Settings, footer: true },
  { path: '/accept-invite', element: <AcceptInvite />, page: Pages.AcceptInvite, footer: true },
  { path: '/company-invite', element: <CompanyInvite />, page: Pages.CompanyInvite, footer: true },
  { path: '*', element: <PageNotFound />, page: Pages.PageNotFound, footer: true },

  // Market search
  { path: `/${market}`, element: <MarketCompanies />, page: Pages.Market, footer: true },
  {
    path: `/${market}/` + companiesRoute,
    element: <MarketCompanies />,
    page: Pages.MarketCompanies,
    footer: true,
  },
  {
    path: `/${market}/` + mentorsRoute,
    element: <MarketMentor />,
    page: Pages.MarketMentors,
    footer: true,
  },
  {
    path: `/${market}/` + expertsRoute,
    element: <MarketExpert />,
    page: Pages.MarketExperts,
    footer: true,
  },
  {
    path: `/${market}/community`,
    element: <MarketCommunity />,
    page: Pages.MarketCommunity,
    footer: true,
  },

  // View public profiles on market
  {
    path: `/${market}/${companyRoute}-profile/:${profileId}`,
    element: <ViewCompanyProfile />,
    page: Pages.MarketViewCompanyProfile,
    footer: true,
  },
  {
    path: `/${market}/personal-profile/:${profileId}`,
    element: <ViewPersonalProfile />,
    page: Pages.MarketViewPersonalProfile,
    footer: true,
  },
  {
    path: `/${market}/${mentorRoute}-profile/:${profileId}`,
    element: <ViewMentorProfile />,
    page: Pages.MarketViewMentorProfile,
    footer: true,
  },
  {
    path: `/${market}/${expertRoute}-profile/:${profileId}`,
    element: <ViewExpertProfile />,
    page: Pages.MarketViewExpertProfile,
    footer: true,
  },

  {
    path: `/AboutUs`,
    element: <AboutUs />,
    page: Pages.AboutUs,
    footer: true,
  },

  // Sharing
  {
    path: `/sharing/shared-with`,
    element: <SharedWithProfiles />,
    page: Pages.SharedWithProfiles,
    footer: true,
  },
  {
    path: `/sharing/view-${companyRoute}-profile/:${profileId}`,
    element: <ViewSharedCompanyProfile />,
    page: Pages.ViewSharedCompanyProfile,
    footer: true,
  },

  // Contact
  // {
  //   path: `/market/market-contact/:${profileType}/:${profileId}`,
  //   element: <MarketContact />,
  //   page: Pages.MarketContact,
  // },

  // Messaging - NOTE: No footer
  { path: '/messages', element: <MessagesHome />, page: Pages.MessagesHome, footer: false },

  // My profiles
  { path: '/my-profiles', element: <Profiles />, page: Pages.MyProfiles, footer: true },
  {
    path: '/my-profiles/personal-profile-edit',
    element: <PersonalProfileEdit />,
    page: Pages.PersonalProfileEdit,
    footer: true,
  },
  {
    path: `/my-profiles/${mentorRoute}-profile-new`,
    element: <MentorProfileNew />,
    page: Pages.MentorProfileNew,
    footer: true,
  },
  {
    path: `/my-profiles/${mentorRoute}-profile-edit`,
    element: <MentorProfileEdit />,
    page: Pages.MentorProfileEdit,
    footer: true,
  },
  {
    path: `/my-profiles/${expertRoute}-profile-new`,
    element: <ExpertProfileNew />,
    page: Pages.ExpertProfileNew,
    footer: true,
  },
  {
    path: `/my-profiles/${expertRoute}-profile-edit`,
    element: <ExpertProfileEdit />,
    page: Pages.ExpertProfileEdit,
    footer: true,
  },
  {
    path: `/my-profiles/${companyRoute}-profile-new`,
    element: <CompanyProfileNew />,
    page: Pages.CompanyProfileNew,
    footer: true,
  },
  {
    path: `/my-profiles/${companyRoute}-profile-announcements`,
    element: <CompanyProfileAnnouncements />,
    page: Pages.CompanyProfileAnnouncements,
    footer: true,
  },
  {
    path: `/my-profiles/${companyRoute}-profile-team-members`,
    element: <CompanyProfileEdit />,
    page: Pages.CompanyProfileTeamMembers,
    footer: true,
  },
  {
    path: `/my-profiles/${companyRoute}-profile-edit`,
    element: <CompanyProfileEdit />,
    page: Pages.CompanyProfileEdit,
    footer: true,
  },
  // { path: '/external-api', element: <ExternalApi />, page: Pages.ExternalApi },
  {
    path: '/for-startups/profile/edit/AboutYou',
    element: <AboutYou />,
    page: Pages.AboutYou,
    footer: true,
  },
  {
    path: '/for-startups/profile/edit/TheProblem',
    element: <TheProblem />,
    page: Pages.TheProblem,
    footer: true,
  },
  {
    path: '/for-startups/profile/edit/TheSolution',
    element: <TheSolution />,
    page: Pages.TheSolution,
    footer: true,
  },
  {
    path: '/for-startups/profile/edit/Potential',
    element: <Potential />,
    page: Pages.Potential,
    footer: true,
  },
  {
    path: '/for-startups/profile/edit/Customise',
    element: <Customise />,
    page: Pages.Customise,
    footer: true,
  },

  // Author
  { path: '/author/edit', element: <ContentEdit />, page: Pages.ContentEdit, footer: true },

  // Accounts
  {
    path: '/accounts/home',
    element: <AccountsHome />,
    page: Pages.AccountsHome,
    footer: true,
  },
  {
    path: `/accounts/home/:${profileId}`,
    element: <AccountsHome />,
    page: Pages.AccountsHome,
    footer: true,
  },
  {
    path: '/accounts/setup-start',
    element: <AccountsSetupStart />,
    page: Pages.AccountsSetupStart,
    footer: true,
  },
  {
    path: '/accounts/setup-complete',
    element: <AccountsSetupComplete />,
    page: Pages.AccountsSetupComplete,
    footer: true,
  },
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
    <Routes>
      {PrivateRoutes.map((routeItem) => (
        <Route key={routeItem.path} path={routeItem.path} element={routeItem.element} />
      ))}
    </Routes>
  );
};

export const GetRouteItemForPath = (path: string): RouteItem | null => {
  let match: RouteItem | null | undefined = null;

  // Try the private routes first
  match = PrivateRoutes.find((route) => route.path === path);

  if (match) return match;

  // throw new Error(`No path found for page: ${page}`);
  // console.log(`No RouteItem found for path: ${path}`);
  return null;
};
