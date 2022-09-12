import React from 'react';
import StartupQuestionnaireSteps from './StartupQuestionnaireSteps';
import GenericHeader from 'components/shared/GenericHeader';
import { GetCurrentTenant } from 'tenant/TenantValues';
import { GetPathForPage } from 'components/shared/AppRoutes';
import Pages from 'components/shared/Pages';

const currentTenant = GetCurrentTenant();
const company = currentTenant.companyOptions.singularName;

// export interface StartupQuestionnaireManagerState {
//   test: string;
//   goNextFunction: () => void;
// }

export enum StepStatusOptions {
  Complete,
  Current,
  Upcoming,
}

export interface StartupQuestionnaireStepOptions {
  id: number;
  path: string;
  name: string;
  description: string;
  status: StepStatusOptions;
}

export const steps: StartupQuestionnaireStepOptions[] = [
  {
    id: 0,
    path: GetPathForPage(Pages.AboutYou),
    name: 'About You',
    description: 'Help us to know you',
    status: StepStatusOptions.Complete,
  },
  {
    id: 0,
    path: GetPathForPage(Pages.TheProblem),
    name: 'The Problem',
    description: 'What problem are you aiming to solve?',
    status: StepStatusOptions.Complete,
  },
  {
    id: 0,
    path: GetPathForPage(Pages.TheSolution),
    name: 'The Solution',
    description: 'Your solution to the problem',
    status: StepStatusOptions.Complete,
  },
  // {
  //   id: 0,
  //   path: GetPathForPage(Pages.Potential),
  //   name: 'Potential',
  //   description: 'How big an effect can you have?',
  //   status: StepStatusOptions.Complete,
  // },
  // {
  //   id: 0,
  //   path: GetPathForPage(Pages.Customise),
  //   name: 'Customise',
  //   description: 'Customise your profile',
  //   status: StepStatusOptions.Complete,
  // },
];

export interface StartupQuestionnaireManagerProps {
  currentStep: string;
  children: React.ReactNode;
}

const StartupQuestionnaireManager = ({
  currentStep,
  children,
}: StartupQuestionnaireManagerProps) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div>
        <GenericHeader title={company + ' Profile Builder'} contextVal={null} />
        <StartupQuestionnaireSteps currentStep={currentStep}></StartupQuestionnaireSteps>
      </div>
      <div></div>
      <div>{children}</div>
    </div>
  );
};

export default StartupQuestionnaireManager;
