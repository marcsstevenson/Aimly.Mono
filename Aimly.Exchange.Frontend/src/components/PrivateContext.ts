import { createContext } from "react";
import { User } from '@auth0/auth0-react';

export interface CheckedInUserModel {
  readonly userId: string;
  readonly publicId: string;
  readonly fullName: string | null;
  readonly pictureUrl: string | null;
}

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
  checkedInUser: CheckedInUserModel | null;
  publicId: string | null;
  // Check in the user with their Id
  // checkInUserId: (userId: string) => void;
  checkInUser: (checkedInUser: CheckedInUserModel) => void;
  messagingAccessToken: string | null;
  loginToMessaging: (accessToken: string) => void;

  totalUnreadMessageCount: number;
  setTotalUnreadMessageCount: (newValue: number) => void;
}

export const PrivateContext = createContext<PrivateContextType>({
  isSidebarOpen: false,
  setSidebarOpen: (isSidebarOpen: boolean) => { },
  showFooter: true,
  setShowFooter: (showFooter: boolean) => { },
  user: null,
  userId: null,
  checkedInUser: null,
  publicId: null,
  checkInUser: (checkedInUser: CheckedInUserModel) => { },
  messagingAccessToken: null,
  loginToMessaging: (userId: string) => { },
  totalUnreadMessageCount: 0,
  setTotalUnreadMessageCount: (userId: number) => { },
});

// export const PrivateContext = createContext(null);