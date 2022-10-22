
import Pages from 'components/shared/Pages';
import { GetPathForPage } from 'components/shared/AppRoutes';
import { promptDeleteValue } from 'components/shared/UrlConstants';

export const getPersonalProfileEditUrl = (): string => {
  return `${GetPathForPage(Pages.PersonalProfileEdit)}`;
};

export const getMentorProfileNewUrl = (): string => {
  return `${GetPathForPage(Pages.MentorProfileNew)}`;
};

export const getMentorProfileEditUrl = (id: string, promptDelete: boolean): string => {
  let qs = `?id=${id}`
  if (promptDelete) {
    qs += `&${promptDeleteValue}=true`;
  }
  return `${GetPathForPage(Pages.MentorProfileEdit)}${qs}`;
};

export const getExpertProfileNewUrl = (): string => {
  return `${GetPathForPage(Pages.ExpertProfileNew)}`;
};

export const getExpertProfileEditUrl = (id: string, promptDelete: boolean): string => {
  let qs = `?id=${id}`
  if (promptDelete) {
    qs += `&${promptDeleteValue}=true`;
  }
  return `${GetPathForPage(Pages.ExpertProfileEdit)}${qs}`;
};

export const getCompanyProfileNewUrl = (): string => {
  return `${GetPathForPage(Pages.CompanyProfileNew)}`;
};

export const getCompanyProfileEditUrl = (id: string, promptDelete: boolean): string => {
  let qs = `?id=${id}`
  if (promptDelete) {
    qs += `&${promptDeleteValue}=true`;
  }
  return `${GetPathForPage(Pages.CompanyProfileEdit)}${qs}`;
};