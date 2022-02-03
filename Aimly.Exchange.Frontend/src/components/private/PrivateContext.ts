import { createContext } from "react";
import { User } from '@auth0/auth0-react';

export interface PrivateContextType {
  isSidebarOpen: boolean;
  setSidebarOpen:(isSidebarOpen: boolean) => void
  testValue: string;
  user: User | null | undefined;
}

export const PrivateContext = createContext<PrivateContextType>({
  isSidebarOpen: false,
  setSidebarOpen: (isSidebarOpen: boolean) => {},
  testValue: "Hai",
  user: null,
});

// export const PrivateContext = createContext(null);