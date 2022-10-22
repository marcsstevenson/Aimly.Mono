import { ProfileTypeOption } from '__generated__/myProfilesQuery.graphql';
import { UserCircleIcon, BoltIcon, UserGroupIcon, StarIcon } from '@heroicons/react/20/solid';

export const getIconForProfileTypeOptionType = (type: ProfileTypeOption) => {
  switch (type) {
    case 'PERSONAL':
      return UserCircleIcon;
    case 'COMPANY':
      return BoltIcon;
    case 'MENTOR':
      return UserGroupIcon;
    case 'EXPERT':
      return StarIcon;
    default:
      return UserCircleIcon;
  }
};
