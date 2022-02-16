import { GetPathForPage, Pages } from 'components/shared/AppRoutes';

export const getPersonalProfileEditUrl = (): string => {
  return `${GetPathForPage(Pages.PersonalProfileEdit)}?context=Personal`;
};

export const getMentorProfileNewUrl = (): string => {
  return `${GetPathForPage(Pages.MentorProfileNew)}`;
};

export const getMentorProfileEditUrl = (id: string): string => {
  return `${GetPathForPage(Pages.MentorProfileEdit)}?id=${id}`;
};