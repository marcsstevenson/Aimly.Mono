import { GetPathForPage, Pages } from 'components/shared/AppRoutes';

const getPersonalProfileEditUrl = (): string => {
  return `${GetPathForPage(Pages.PersonalProfileEdit)}?context=Personal`;
};

const getMentorProfileEditUrl = (id: string, name: string | null | undefined): string => {
  return `${GetPathForPage(Pages.MentorProfileEdit)}?id=${id}&context=${name}`;
};

export { getPersonalProfileEditUrl, getMentorProfileEditUrl }