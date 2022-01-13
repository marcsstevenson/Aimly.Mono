import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import StartupQuestionnaireSteps from './StartupQuestionnaireSteps';
import GetStartedHeader from '../../components/GetStarted/GetStartedHeader';

// export interface StartupQuestionnaireManagerState {
//   test: string;
//   goNextFunction: () => void;
// }

export enum StepStatusOptions {
  Complete,
  Current,
  Upcoming,
}

export interface StartupQuestionnaireSteps {
  id: number;
  path: string;
  name: string;
  description: string;
  status: StepStatusOptions;
}

export const steps: StartupQuestionnaireSteps[] = [
  {
    id: 0,
    path: 'AboutYou',
    name: 'About You',
    description: 'Help us to know you',
    status: StepStatusOptions.Complete,
  },
  {
    id: 0,
    path: 'TheProblem',
    name: 'The Problem',
    description: 'What problem are you aiming to solve?',
    status: StepStatusOptions.Complete,
  },
  {
    id: 0,
    path: 'TheSolution',
    name: 'The Solution',
    description: 'Your solution to the problem',
    status: StepStatusOptions.Complete,
  },
  {
    id: 0,
    path: 'Potential',
    name: 'Potential',
    description: 'How big an effect can you have?',
    status: StepStatusOptions.Complete,
  },
  {
    id: 0,
    path: 'Customise',
    name: 'Customise',
    description: 'Customise your profile',
    status: StepStatusOptions.Complete,
  },
];

export interface StartupQuestionnaireManagerProps {
  currentStep: string;
  children: React.ReactNode;
}

const StartupQuestionnaireManager = ({
  currentStep,
  children,
}: StartupQuestionnaireManagerProps) => {
  // const history = useHistory();
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

  //         history.push('/getStarted/' + steps[index + 1].path);
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
