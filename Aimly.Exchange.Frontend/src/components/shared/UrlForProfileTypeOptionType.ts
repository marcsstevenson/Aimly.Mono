import { ProfileTypeOption } from '__generated__/myProfilesQuery.graphql';
import { getStartupEditUrl } from 'components/for-startups/UrlBuilder';
import { getPersonalProfileEditUrl, getMentorProfileEditUrl, getExpertProfileEditUrl } from 'components/profiles/UrlBuilder';

export const getUrlForProfileTypeOptionType = (id: string, name: string | null | undefined, type: ProfileTypeOption, promptDelete: boolean): string => {
  switch (type) {
    case 'PERSONAL':
      return getPersonalProfileEditUrl();
    case 'COMPANY':
      return getStartupEditUrl(id, name, promptDelete);
    case 'MENTOR':
      return getMentorProfileEditUrl(id, promptDelete);
    case 'EXPERT':
      return getExpertProfileEditUrl(id, promptDelete);
    default:
      return '';
  }
};
