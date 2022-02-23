import { GetPathForPage, Pages } from 'components/shared/AppRoutes';
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