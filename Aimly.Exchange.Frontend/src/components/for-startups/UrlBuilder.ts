import { companyProfileId } from 'components/for-startups/UrlConstants';
import { GetPathForPage, Pages } from 'components/shared/AppRoutes';

const getStartupEditUrl = (id: string): string => {
  return `${GetPathForPage(Pages.AboutYou)}?${companyProfileId}=${id}`;
};

export { getStartupEditUrl }