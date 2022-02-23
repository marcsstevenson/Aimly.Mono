import { companyProfileId, promptDeleteValue } from 'components/shared/UrlConstants';
import { GetPathForPage, Pages } from 'components/shared/AppRoutes';

const getStartupEditUrl = (id: string, name: string | null | undefined, promptDelete: boolean): string => {
  let qs = `?${companyProfileId}=${id}&context=${name}`

  if (promptDelete) {
    qs += `&${promptDeleteValue}=true`;
  }

  return `${GetPathForPage(Pages.AboutYou)}${qs}`;
};

export { getStartupEditUrl }