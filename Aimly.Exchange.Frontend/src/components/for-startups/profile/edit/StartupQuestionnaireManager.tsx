import React, { useRef } from 'react';
import StartupQuestionnaireSteps from './StartupQuestionnaireSteps';
import GetStartedHeader from 'components/for-startups/profile/edit/GetStartedHeader';

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
    path: '/for-startups/profile/edit/AboutYou',
    name: 'About You',
    description: 'Help us to know you',
    status: StepStatusOptions.Complete,
  },
  {
    id: 0,
    path: '/for-startups/profile/edit/TheProblem',
    name: 'The Problem',
    description: 'What problem are you aiming to solve?',
    status: StepStatusOptions.Complete,
  },
  {
    id: 0,
    path: '/for-startups/profile/edit/TheSolution',
    name: 'The Solution',
    description: 'Your solution to the problem',
    status: StepStatusOptions.Complete,
  },
  {
    id: 0,
    path: '/for-startups/profile/edit/Potential',
    name: 'Potential',
    description: 'How big an effect can you have?',
    status: StepStatusOptions.Complete,
  },
  // {
  //   id: 0,
  //   path: '/for-startups/profile/edit/Customise',
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
  const topRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div ref={topRef}>
        <GetStartedHeader title="Startup Profile Builder" />
        <StartupQuestionnaireSteps currentStep={currentStep}></StartupQuestionnaireSteps>
      </div>
      <div></div>
      <div>{children}</div>
    </div>
  );
};

export default StartupQuestionnaireManager;
