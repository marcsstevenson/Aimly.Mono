import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
  // const navigate = useNavigate();
  const topRef = useRef<HTMLDivElement>(null);

  // function GoNext() {
  //   for (let index = 0; index < steps.length; index++) {
  //     const step = steps[index];

  //     if (step.path === currentStep) {
  //       // Match found, go to next step
  //       if (index < steps.length - 1) {
  //         // Scroll to top first
  //         if (topRef.current) {
  //           topRef.current.scrollIntoView({ behavior: 'smooth' });
  //         }

  //         navigate('/for-startups/profile/edit/' + steps[index + 1].path);
  //       }
  //     }
  //   }
  // }

  // const [ startupQuestionnaireManagerState ] = useState<StartupQuestionnaireManagerState>(
  //   {
  //     test: 'Hai',
  //     goNextFunction: GoNext,
  //   });

  // startupQuestionnaireManagerState.goNextFunction();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <GetStartedHeader title="Startup Profile Builder" />
      <div ref={topRef}>
        <StartupQuestionnaireSteps currentStep={currentStep}></StartupQuestionnaireSteps>
      </div>
      <div></div>
      <div>{children}</div>
    </div>
  );
};

export default StartupQuestionnaireManager;
