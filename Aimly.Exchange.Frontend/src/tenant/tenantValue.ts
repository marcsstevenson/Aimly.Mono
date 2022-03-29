import { TenantType } from "./tenantType";
import { TailwindColourOptions } from "./tenantType";
const colors = require('tailwindcss/colors')

const CurrentTenant: TenantType = {
  name: 'Catallyze',
  primaryColour: 'slate',
  secondaryColour: 'sky',
}

export const GetCurrentTenant = (): TenantType => {
  return CurrentTenant;
}
