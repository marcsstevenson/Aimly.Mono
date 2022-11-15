import { TenantType } from "./TenantTypeInterface";
// import { TailwindColourOptions } from "./TenantTypeInterface";
// const colors = require('tailwindcss/colors')

const CurrentTenant: TenantType = {
  name: 'Catallyze',
  primaryColour: 'slate',
  secondaryColour: 'sky',
  socialLinks: [
    { type: 'Facebook', href: 'https://www.facebook.com/catallyze.movement' },
    { type: 'Instagram', href: 'https://www.instagram.com/catallyze.movement/' },
    { type: 'LinkedIn', href: 'https://www.linkedin.com/company/catallyze/mycompany/' },
    { type: 'Twitter', href: 'https://twitter.com/catallyze' },
  ],
  companyOptions: {
    singularName: 'Company',
    pluralName: 'Companies',
  },
  mentorOptions: {
    singularName: 'Coach',
    pluralName: 'Coaches',
  },
  expertOptions: {
    singularName: 'Resource',
    pluralName: 'Resources',
  },
  supportEmailDetails: {
    fullName: 'Kirrilee Sunderland',
    email: 'kirrilee@qualitymindglobal.com',
  },
  marketLabel: 'Members',
}

export const GetCurrentTenant = (): TenantType => {
  return CurrentTenant;
}
