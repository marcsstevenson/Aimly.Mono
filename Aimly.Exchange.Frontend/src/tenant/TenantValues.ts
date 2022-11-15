import { TenantType } from "./TenantTypeInterface";
// import { TailwindColourOptions } from "./TenantTypeInterface";
// const colors = require('tailwindcss/colors')

const CurrentTenant: TenantType = {
  name: 'Catallyze',
  primaryColour: 'slate',
  secondaryColour: 'sky',
  socialLinks: [
    { type: 'Facebook', href: '' },
    { type: 'Instagram', href: '' },
    { type: 'LinkedIn', href: 'https://www.linkedin.com/company/catallyze/mycompany/' },
    { type: 'Twitter', href: '' },
  ],
  companyOptions: {
    singularName: 'Company',
    pluralName: 'Companies',
  },
  mentorOptions: {
    singularName: 'Mentor',
    pluralName: 'Mentors',
  },
  expertOptions: {
    singularName: 'Experts',
    pluralName: 'Experts',
  },
  supportEmailDetails: {
    fullName: 'Marc Stevenson',
    email: 'marc.stevenson@aimly.io',
  },
  marketLabel: 'Market',
}

export const GetCurrentTenant = (): TenantType => {
  return CurrentTenant;
}
