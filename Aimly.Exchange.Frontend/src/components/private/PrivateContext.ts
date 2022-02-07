import { createContext } from "react";
import { User } from '@auth0/auth0-react';

export interface PrivateContextType {
  // If the sidebar is open or not (within mobile port size)
  // (note: this is set in one component and used in another, hence the need for parent state to link)
  isSidebarOpen: boolean;
  // Open or close the sidebar
  setSidebarOpen:(isSidebarOpen: boolean) => void
  // The auth profile of the user
  user: User | null | undefined;
  // The Id of the user within the backend database
  userId: string | null
}

export const PrivateContext = createContext<PrivateContextType>({
  isSidebarOpen: false,
  setSidebarOpen: (isSidebarOpen: boolean) => {},
  user: null,
  userId: null,
});

// export const PrivateContext = createContext(null);