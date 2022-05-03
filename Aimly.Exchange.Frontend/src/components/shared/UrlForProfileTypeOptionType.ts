import { ProfileTypeOption } from '__generated__/myProfilesQuery.graphql';
import { getCompanyEditUrl } from 'components/for-startups/UrlBuilder';
import { getPersonalProfileEditUrl, getMentorProfileEditUrl, getExpertProfileEditUrl } from 'components/profiles/UrlBuilder';
import Pages from 'components/shared/Pages';
import { GetPathForPage } from 'components/shared/AppRoutes';

export const getUrlForProfileTypeOptionType = (id: string, name: string | null | undefined, type: ProfileTypeOption, promptDelete: boolean): string => {
  switch (type) {
    case 'PERSONAL':
      return getPersonalProfileEditUrl();
    case 'COMPANY':
      return getCompanyEditUrl(id, name, promptDelete);
    case 'MENTOR':
      return getMentorProfileEditUrl(id, promptDelete);
    case 'EXPERT':
      return getExpertProfileEditUrl(id, promptDelete);
    default:
      return '';
  }
};