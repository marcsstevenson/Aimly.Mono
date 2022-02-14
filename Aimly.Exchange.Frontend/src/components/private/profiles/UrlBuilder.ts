import { GetPathForPage, Pages } from 'components/shared/AppRoutes';

const getPersonalProfileEditUrl = (): string => {
  return `${GetPathForPage(Pages.PersonalProfileEdit)}?context=Personal`;
};

export { getPersonalProfileEditUrl }