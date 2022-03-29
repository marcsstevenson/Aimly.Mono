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
}