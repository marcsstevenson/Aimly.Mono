import { companyProfileId, promptDeleteValue } from 'components/shared/UrlConstants';
import Pages from 'components/shared/Pages';
import { GetPathForPage } from 'components/shared/AppRoutes';

const getCompanyEditUrl = (id: string, name: string | null | undefined, promptDelete: boolean): string => {
  let qs = `?${companyProfileId}=${id}&context=${name}`

  if (promptDelete) {
    qs += `&${promptDeleteValue}=true`;
  }

  return `${GetPathForPage(Pages.AboutYou)}${qs}`;
};

export { getCompanyEditUrl }