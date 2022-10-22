import { ProfileTypeOption } from '__generated__/myProfilesQuery.graphql';
import { getPersonalProfileEditUrl, getMentorProfileEditUrl, getExpertProfileEditUrl, getCompanyProfileEditUrl } from 'components/profiles/UrlBuilder';

export const getUrlForProfileTypeOptionType = (id: string, name: string | null | undefined, type: ProfileTypeOption, promptDelete: boolean): string => {
  switch (type) {
    case 'PERSONAL':
      return getPersonalProfileEditUrl();
    case 'COMPANY':
      return getCompanyProfileEditUrl(id, promptDelete);
    case 'MENTOR':
      return getMentorProfileEditUrl(id, promptDelete);
    case 'EXPERT':
      return getExpertProfileEditUrl(id, promptDelete);
    default:
      return '';
  }
};