import { ProfileTypeOption } from '__generated__/myProfilesQuery.graphql';
import { GetCurrentTenant } from 'tenant/TenantValues';

const currentTenant = GetCurrentTenant();
const company = currentTenant.companyOptions.singularName;
const mentor = currentTenant.mentorOptions.singularName;
const expert = currentTenant.expertOptions.singularName;

const GetLabelForType = (profileTypeOption: ProfileTypeOption | undefined, toUpper: boolean = false): string => {
  switch (profileTypeOption) {
    case 'PERSONAL':
      return toUpper ? 'Personal'.toUpperCase() : 'Personal';
    case 'COMPANY':
      return toUpper ? company.toUpperCase() : company;
    case 'MENTOR':
      return toUpper ? mentor.toUpperCase() : mentor;
    case 'EXPERT':
      return toUpper ? expert.toUpperCase() : expert;
    default:
      return '';
  }
}

export { GetLabelForType }