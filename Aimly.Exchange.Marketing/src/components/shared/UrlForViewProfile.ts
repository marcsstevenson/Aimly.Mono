import { type ProfileTypeOption } from '__generated__/marketSearchQuery.graphql';
import Pages from 'components/shared/Pages';
import { GetPathForPage } from 'components/shared/AppRoutes';
import { profileId } from 'components/shared/UrlConstants';

const build = (page: Pages, id: string): string => {
  return GetPathForPage(page).replace(`:${profileId}`, id);
}

// Returns the URL to view a given profile type and id
export const getUrlForViewProfile = (type: ProfileTypeOption, id: string): string => {
  let page: Pages;

  switch (type) {
    case 'PERSONAL':
      page = Pages.MarketViewPersonalProfile;
      break;
    case 'STARTUP':
      page = Pages.MarketViewCompanyProfile;
      break;
    case 'MENTOR':
      page = Pages.MarketViewMentorProfile;
      break;
    case 'EXPERT':
      page = Pages.MarketViewExpertProfile;
      break;
    default:
      page = Pages.MarketViewCompanyProfile;
      break;
  }

  return build(page, id);
};
