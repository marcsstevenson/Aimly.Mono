import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/solid';
import { EmploymentExperience } from 'components/profiles/EmploymentExperience';

interface Props {
  allowEdit: boolean;
  item: EmploymentExperience | null;
  triggerDelete: () => void;
  triggerEdit: () => void;
}

export const PersonalProfileExperienceItem = ({
  allowEdit,
  item,
  triggerDelete,
  triggerEdit,
}: Props) => {
  return (
    <div className="overflow-hidden">
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
                <div className="text-xl font-medium text-gray-900 dark:text-gray-50">
                  {item?.title}
                </div>
              </dd>
              <dt className="truncate text-sm text-gray-900 dark:text-gray-50">
                <span className="font-medium">{item?.organisation}</span>
              </dt>
              <dt className="truncate text-sm text-gray-500 dark:text-gray-400">
                <span>{item?.startYear}</span>
                <span className="ml-1">to</span>
                <span className="ml-1">{item?.endYear ?? 'Present'}</span>
              </dt>
              <dt className="text-sm text-gray-900 dark:text-gray-50">
                <p>{item?.description}</p>
              </dt>
            </dl>
          </div>
        </div>
      </div>
      {allowEdit && (
        <div className="grid grid-cols-1 px-5 py-3">
          <div className="justify-self-end">
            <button
              type="button"
              onClick={triggerDelete}
              className="text-validation-700 hover:text-validation-900 dark:text-validation-400 dark:hover:text-validation-500 mr-2 font-medium"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={triggerEdit}
              className="text-secondary-700 hover:text-secondary-900 dark:text-secondary-300 dark:hover:text-secondary-400 font-medium"
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
