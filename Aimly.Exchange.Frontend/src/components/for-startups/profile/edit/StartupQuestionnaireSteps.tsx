/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { steps, StepStatusOptions } from './StartupQuestionnaireManager';
import { classNames } from 'utils/classNames';
import { useSearchParams } from 'react-router-dom';

export interface StartupQuestionnaireStepsProps {
  currentStep: string;
}

export default function StartupQuestionnaireSteps({ currentStep }: StartupQuestionnaireStepsProps) {
  // Set the status of each step
  let workingStepStatusOptions = StepStatusOptions.Complete;
  let stepCounter = 1;
  const [searchParams] = useSearchParams();

  steps.forEach((step) => {
    if (step.path.endsWith(currentStep)) {
      // If the current step is the step we're on, set the status to current
      step.status = StepStatusOptions.Current;

      // All subsequent steps are upcoming
      workingStepStatusOptions = StepStatusOptions.Upcoming;
    } else {
      step.status = workingStepStatusOptions;
    }
    step.id = stepCounter;

    stepCounter++;
  });

  const buildPathForStep = (basePath: string): string => {
    // Do we have a query string? Eg, "?companyProfileId=21f299a9-db01-45a2-13f3-08d9e422a60e"
    // If so then we want to add it to the path
    if (searchParams) {
      return `${basePath}?${searchParams}`;
    }

    return basePath;
  };

  return (
    <div className="lg:border-t lg:border-b lg:border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Progress">
        <ol className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
          {steps.map((step, stepIdx) => (
            <li key={step.id} className="relative overflow-hidden lg:flex-1">
              <div
                className={classNames(
                  stepIdx === 0 ? 'rounded-t-md border-b-0' : '',
                  stepIdx === steps.length - 1 ? 'rounded-b-md border-t-0' : '',
                  'overflow-hidden border border-gray-200 lg:border-0'
                )}
              >
                {step.status === StepStatusOptions.Complete ? (
                  <Link to={{ pathname: buildPathForStep(step.path) }} className="group">
                    <span
                      className="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'flex items-start px-6 py-5 text-sm font-medium'
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-600">
                          <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                        <span className="text-xs font-semibold uppercase tracking-wide">
                          {step.name}
                        </span>
                        <span className="text-sm font-medium text-gray-500">
                          {step.description}
                        </span>
                      </span>
                    </span>
                  </Link>
                ) : step.status === StepStatusOptions.Current ? (
                  <span aria-current="step">
                    <span
                      className="absolute top-0 left-0 h-full w-1 bg-secondary-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'flex items-start px-6 py-5 text-sm font-medium'
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-secondary-600">
                          <span className="text-secondary-600 dark:text-secondary-200">
                            {step.id}
                          </span>
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                        <span className="text-xs font-semibold uppercase tracking-wide text-secondary-600 dark:text-secondary-300">
                          {step.name}
                        </span>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
                          {step.description}
                        </span>
                      </span>
                    </span>
                  </span>
                ) : (
                  <span className="group">
                    <span
                      className="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'flex items-start px-6 py-5 text-sm font-medium'
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
                          <span className="text-gray-500">{step.id}</span>
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                          {step.name}
                        </span>
                        <span className="text-sm font-medium text-gray-500">
                          {step.description}
                        </span>
                      </span>
                    </span>
                  </span>
                )}

                {stepIdx !== 0 ? (
                  <>
                    {/* Separator */}
                    <div
                      className="absolute inset-0 top-0 left-0 hidden w-3 lg:block"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-full w-full text-gray-300"
                        viewBox="0 0 12 82"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0.5 0V31L10.5 41L0.5 51V82"
                          stroke="currentcolor"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </div>
                  </>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
