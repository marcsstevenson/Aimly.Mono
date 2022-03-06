// The purpose of this component is to
// * display the experience of the user
import React from 'react';
import { EmploymentExperience } from 'components/profiles/EmploymentExperience';
import { PersonalProfileExperienceItem } from 'components/profiles/PersonalProfileExperienceItem';

export interface Props {
  employmentExperience: readonly (EmploymentExperience | null)[] | null;
}

const ViewExperienceList = ({ employmentExperience }: Props) => {
  return (
    <>
      <div className="col-span-8 mr-4 lg:col-span-2">
        <span className="text-4xl text-gray-900 dark:text-gray-100">Experience</span>
      </div>
      <div className="col-span-8 lg:col-span-4">
        <div className="mt-1 text-gray-800 dark:text-gray-300">
          {employmentExperience?.map((item, index) => (
            <PersonalProfileExperienceItem
              allowEdit={false}
              item={item}
              key={index}
              triggerDelete={() => {}} // No need
            />
          ))}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default ViewExperienceList;
