import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/solid';
import { employmentExperience } from 'components/private/profiles/EmploymentExperience';

interface Props {
  item: employmentExperience | null;
}

export const PersonalProfileExperienceItem = (props: Props) => {
  return (
    <div className="mt-4 overflow-hidden rounded-lg bg-white shadow dark:bg-gray-700">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <BriefcaseIcon
              className="h-6 w-6 text-gray-600 dark:text-gray-300"
              aria-hidden="true"
            />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dd>
                <div className="text-lg font-medium text-gray-900 dark:text-gray-50">
                  {props.item?.title}
                </div>
              </dd>
              <dt className="truncate text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">{props.item?.organisation}</span>
                <span className="ml-2">{props.item?.startYear}</span>
                <span className="ml-1">to</span>
                <span className="ml-1">{props.item?.endYear ?? 'NOW'}</span>
              </dt>
            </dl>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-gray-50 px-5 py-3 dark:bg-gray-800">
        <div className="">
          <button className="text-primary-700 hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-400 font-medium">
            Edit
          </button>
        </div>
        <div className="justify-self-end">
          <button className="text-validation-700 hover:text-validation-900 dark:text-validation-400 dark:hover:text-validation-500 font-medium">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
