import React from 'react';
import { BuildingOfficeIcon, CreditCardIcon, UserIcon, UsersIcon } from '@heroicons/react/20/solid';

// This is the home page for a company profile
// It allows is a holding page to enable
// * Displaying the company's announcements to team members
// * Displaying the company profile
// * Editing the company profile if admin
// * Editing the company's team members

const tabs = [
  { name: 'Announcements', href: '#', icon: UserIcon, current: true },
  { name: 'Profile', href: '#', icon: BuildingOfficeIcon, current: false },
  { name: 'Team Members', href: '#', icon: UsersIcon, current: false },
];

export interface CompanyProfileTabsProps {
  currentStep: string;
  children: React.ReactNode;
}

const CompanyProfileManager = ({ currentStep, children }: CompanyProfileTabsProps) => {
  return <div>CompanyProfileHome</div>;
};

export default CompanyProfileManager;
