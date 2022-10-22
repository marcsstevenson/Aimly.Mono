import { User } from "@auth0/auth0-react";


// Uses the Auth0 user to try and determine the User's linkedin profile URL
// Returns null if the user is not logged in or if the user's profile is not signed in with linkedin
export const getLinkedInProfileFromAuthHelper = (user: User | null | undefined): string | null => {
  if (!user) return null;

  // Is the user using LinkedIn? This can be determined by examining the subject
  if (!user.sub?.startsWith('linkedin|')) return null;

  // Does the auth profile contain a nickname?
  if (!user.nickname) return null;

  // LinkedIn uses the nickname field to store the user's profile name
  return `https://www.linkedin.com/in/${user.nickname}`;
};