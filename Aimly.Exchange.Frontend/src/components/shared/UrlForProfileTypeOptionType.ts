import { ProfileTypeOption } from '__generated__/profileSearchQuery.graphql';
import { getStartupEditUrl } from 'components/for-startups/UrlBuilder';

export const getUrlForProfileTypeOptionType = (id: string, type: ProfileTypeOption): string => {
  switch (type) {
    case 'PERSONAL':
      return getStartupEditUrl(id);
    case 'STARTUP':
      return getStartupEditUrl(id);
    case 'MENTOR':
      return getStartupEditUrl(id);
    case 'EXPERT':
      return getStartupEditUrl(id);
    default:
      return '';
  }
};
