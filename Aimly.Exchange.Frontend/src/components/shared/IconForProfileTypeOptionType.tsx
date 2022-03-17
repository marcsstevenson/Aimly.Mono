import { ProfileTypeOption } from '__generated__/myProfilesQuery.graphql';
import { UserCircleIcon, LightningBoltIcon, UserGroupIcon, StarIcon } from '@heroicons/react/solid';

export const getIconForProfileTypeOptionType = (type: ProfileTypeOption) => {
  switch (type) {
    case 'PERSONAL':
      return UserCircleIcon;
    case 'STARTUP':
      return LightningBoltIcon;
    case 'MENTOR':
      return UserGroupIcon;
    case 'EXPERT':
      return StarIcon;
    default:
      return UserCircleIcon;
  }
};
