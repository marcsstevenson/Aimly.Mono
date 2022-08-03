// These are the Tailwind colours that we have imported from
// https://tailwindcss.com/docs/customizing-colors
export type TailwindColourOptions = "gray" | "slate" | "sky" | "indigo" | "purple" | "violet";

export interface TenantType {
  // This is used to match on the tenant-files directory
  name: string;

  // This is used to alter the tailwind.condig.js file
  // Refer to that for a list of possible values
  primaryColour: TailwindColourOptions;

  // This is used to alter the tailwind.condig.js file
  // Refer to that for a list of possible values
  secondaryColour: TailwindColourOptions;

  socialLinks: SocialLink[] | null;

  companyOptions: MarketCornerOptions;

  mentorOptions: MarketCornerOptions;

  expertOptions: MarketCornerOptions;

  supportEmailDetails: EmailDetails;
}

export interface SocialLink {
  type: 'Discord' | 'Facebook' | 'GitHub' | 'Instagram' | 'LinkedIn' | 'Twitter';
  href: string;
}

export interface MarketCornerOptions {
  // This relates to the tab on the market and the profile types that can be created.
  // Eg, Companies
  singularName: string;

  // This relates to the profile types that can be created.
  // Eg, Company
  pluralName: string;
}

export interface EmailDetails {
  fullName: string;
  email: string;
}