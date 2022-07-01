enum Pages {
  // Shared
  Home,
  Login,
  PageNotFound,

  AcceptInvite,
  CompanyInvite,

  // Private
  DashBoard,

  // Market search
  Market,
  MarketCompanies,
  MarketMentors,
  MarketExperts,
  MarketCommunity,

  // View public profiles on market
  MarketViewCompanyProfile,
  MarketViewMentorProfile,
  MarketViewExpertProfile,
  MarketViewPersonalProfile,

  // Sharing
  SharedWithProfiles,
  ViewSharedCompanyProfile,

  // Contact
  // MarketContact,

  // Messaging
  MessagesHome,

  // Accounts
  AccountsHome,
  AccountsSetupStart,
  AccountsSetupComplete,

  MyProfiles, // The place to add, edit, remove profiles for startups, mentors, etc
  Help,
  PersonalProfileEdit,
  MentorProfileNew,
  MentorProfileEdit,
  ExpertProfileNew,
  ExpertProfileEdit,
  CompanyProfileNew,
  CompanyProfileEdit,
  Settings,
  ExternalApi,
  AboutYou,
  TheProblem,
  TheSolution,
  Potential,
  Customise,
  ContentEdit,
}

export default Pages;