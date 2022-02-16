import { ProfileTypeOption } from '__generated__/profileSearchQuery.graphql';
import { getStartupEditUrl } from 'components/for-startups/UrlBuilder';
import { getPersonalProfileEditUrl, getMentorProfileEditUrl } from 'components/private/profiles/UrlBuilder';

export const getUrlForProfileTypeOptionType = (id: string, name: string | null | undefined, type: ProfileTypeOption): string => {
  switch (type) {
    case 'PERSONAL':
      return getPersonalProfileEditUrl();
    case 'STARTUP':
      return getStartupEditUrl(id, name);
    case 'MENTOR':
      return getMentorProfileEditUrl(id);
    case 'EXPERT':
      return getStartupEditUrl(id, name);
    default:
      return '';
  }
};
