import { GetCurrentTenant } from 'tenant/TenantValue';
import { TailwindColourOptions } from 'tenant/TenantTypeInterface';
const colors = require('tailwindcss/colors')

interface tailwindColours {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

// These are the Tailwind colours that we have imported from
// https://tailwindcss.com/docs/customizing-colors
// Get values from require('tailwindcss/colors')
const tailwindColourValues: Record<TailwindColourOptions, tailwindColours> = {
  'gray': colors.gray,
  'slate': colors.slate,
  'sky': colors.sky,
  'indigo': colors.indigo,
  'purple': colors.purple,
  'violet': colors.violet,
}

interface sendBirdColours {
  50: string | null;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string | null;
  700: string | null;
}

interface getSendBirdColoursForTailwindColourParams {
  colour: TailwindColourOptions;
  isColour: boolean;
}

const getSendBirdColoursForTailwindColour = ({ colour, isColour }: getSendBirdColoursForTailwindColourParams): sendBirdColours => {
  const tailwindColour = tailwindColourValues[colour];

  if (isColour) {
    // SendBird only has a 100-500 range for colours
    return {
      50: null, // Just white
      100: tailwindColour[200],
      200: tailwindColour[300],
      300: tailwindColour[600],
      400: tailwindColour[700],
      500: tailwindColour[900],
      600: null,
      700: null,
    }
  }
  else {
    return {
      50: '#ffffff', // Just white
      100: tailwindColour[100],
      200: tailwindColour[200],
      300: tailwindColour[300],
      400: tailwindColour[500],
      500: tailwindColour[600],
      600: tailwindColour[800],
      700: tailwindColour[900],
    }
  }
};

// Convert a sendBirdColours to a SendBird colour set
const addSendBirdColourSet = (record: Record<string, string>, sendBirdColours: sendBirdColours, name: string): Record<string, string> => {
  let result: Record<string, string> = {};

  if (sendBirdColours[50] !== null) {
    record[`${name}-50`] = sendBirdColours[50];
  }

  if (sendBirdColours[100] !== null) {
    record[`${name}-100`] = sendBirdColours[100];
  }

  if (sendBirdColours[200] !== null) {
    record[`${name}-200`] = sendBirdColours[200];
  }

  if (sendBirdColours[300] !== null) {
    record[`${name}-300`] = sendBirdColours[300];
  }

  if (sendBirdColours[400] !== null) {
    record[`${name}-400`] = sendBirdColours[400];
  }

  if (sendBirdColours[500] !== null) {
    record[`${name}-500`] = sendBirdColours[500];
  }

  if (sendBirdColours[600] !== null) {
    record[`${name}-600`] = sendBirdColours[600];
  }

  if (sendBirdColours[700] !== null) {
    record[`${name}-700`] = sendBirdColours[700];
  }

  return result;
}

// Builds our SendBird colour set for our current theme
export const buildSendBirdColourSet = (): Record<string, string> => {
  let result: Record<string, string> = {};

  const currentTenant = GetCurrentTenant();

  const tailwindPrimary = currentTenant.primaryColour;

  // Add the backgrounds
  addSendBirdColourSet(result, getSendBirdColoursForTailwindColour({ colour: tailwindPrimary, isColour: false }), '--sendbird-light-background');
  addSendBirdColourSet(result, getSendBirdColoursForTailwindColour({ colour: tailwindPrimary, isColour: false }), '--sendbird-dark-background');

  const tailwindSecondary = currentTenant.secondaryColour;

  // Add the primary colours - both light and dark
  addSendBirdColourSet(result, getSendBirdColoursForTailwindColour({ colour: tailwindSecondary, isColour: true }), '--sendbird-light-primary');
  addSendBirdColourSet(result, getSendBirdColoursForTailwindColour({ colour: tailwindSecondary, isColour: true }), '--sendbird-dark-primary',);

  return result;
};