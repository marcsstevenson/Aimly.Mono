import { ProfileTypeOption } from '__generated__/companiesForAdministrationQuery.graphql';

export interface AccountsOption {
  id: string;

  name: string;

  profilePictureUrl: string,

  type: ProfileTypeOption;
}