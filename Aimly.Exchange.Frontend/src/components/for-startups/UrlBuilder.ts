import { companyProfileId, promptDeleteValue } from 'components/shared/UrlConstants';
import { GetPathForPage, Pages } from 'components/shared/AppRoutes';

const getStartupEditUrl = (id: string, name: string | null | undefined): string => {
  return `${GetPathForPage(Pages.AboutYou)}?${companyProfileId}=${id}&context=${name}`;
};

export { getStartupEditUrl }