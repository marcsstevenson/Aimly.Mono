// The purpose of this component is to
// * display the experience of the user
// * allow the user to add new experience
// * allow the user to edit existing experience
// * allow the user to delete existing experience
import React from 'react';
import { employmentExperience } from 'components/private/profiles/EmploymentExperience';
import { PersonalProfileExperienceItem } from 'components/private/profiles/PersonalProfileExperienceItem';
import { PlusIcon } from '@heroicons/react/outline';

export interface Props {
  employmentExperience: readonly (employmentExperience | null)[];
}

export const PersonalProfileExperienceList = (prop: Props) => {
  return (
    <>
      <div className="mb-3 grid grid-cols-2">
        <div className="">
          <h2 className="default-h2">Experience</h2>
        </div>
        <div className="ml-auto">
          <button type="button" className="form-button-flat">
            <PlusIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
            Add
          </button>
        </div>
      </div>
      <div>
        <div className="mt-1">
          {prop.employmentExperience.map((item) => (
            <PersonalProfileExperienceItem item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
