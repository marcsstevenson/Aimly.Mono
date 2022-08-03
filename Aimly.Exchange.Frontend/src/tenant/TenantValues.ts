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
    singularName: 'Venture',
    pluralName: 'Ventures',
  },
  mentorOptions: {
    singularName: 'Advisor',
    pluralName: 'Advisors',
  },
  expertOptions: {
    singularName: 'Expert',
    pluralName: 'Experts',
  }
}

export const GetCurrentTenant = (): TenantType => {
  return CurrentTenant;
}
