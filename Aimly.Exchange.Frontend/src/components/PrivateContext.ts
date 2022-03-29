import { createContext } from "react";
import { User } from '@auth0/auth0-react';

export interface PrivateContextType {
  // If the sidebar is open or not (within mobile port size)
  // (note: this is set in one component and used in another, hence the need for parent state to link)
  isSidebarOpen: boolean;
  // Open or close the sidebar
  setSidebarOpen: (isSidebarOpen: boolean) => void
  // If we are to display the footer
  showFooter: boolean;
  setShowFooter: (showFooter: boolean) => void
  // The auth profile of the user
  user: User | null | undefined;
  // The Id of the user within the backend database
  userId: string | null;
  publicId: string | null;
  // Check in the user with their Id
  checkInUser: (userId: string) => void;
}

export const PrivateContext = createContext<PrivateContextType>({
  isSidebarOpen: false,
  setSidebarOpen: (isSidebarOpen: boolean) => { },
  showFooter: true,
  setShowFooter: (showFooter: boolean) => { },
  user: null,
  userId: null,
  publicId: null,
  checkInUser: (userId: string) => { },
});

// export const PrivateContext = createContext(null);