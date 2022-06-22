// The purpose of this component is to
// * display the experience of the user
import React, { useMemo, useState } from 'react';
import { EmploymentExperience } from 'components/profiles/EmploymentExperience';
import { PersonalProfileExperienceItem } from 'components/profiles/PersonalProfileExperienceItem';

export interface Props {
  employmentExperience: readonly (EmploymentExperience | null)[] | null;
}

const ViewExperienceList = ({ employmentExperience }: Props) => {
  const showIndex = 4;

  const employmentExperienceLength = useMemo(() => {
    return employmentExperience?.length ?? 1;
  }, []);
  const [isShowAll, setIsShowAll] = useState(employmentExperienceLength <= showIndex);
  const [displayShowMoreOrLess, setDisplayShowMoreOrLess] = useState(
    employmentExperienceLength > showIndex
  );

  const showLess = () => {
    setIsShowAll(false);
  };

  const showAll = () => {
    setIsShowAll(true);
  };

  return (
    <>
      <div className="col-span-8 mr-4 lg:col-span-2">
        <span className="text-4xl text-gray-900 dark:text-gray-100">Experience</span>
      </div>
      <div className="col-span-8 lg:col-span-4">
        <div className="default-divide mt-1 rounded-lg bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
          {employmentExperience
            ?.filter((item, index) => isShowAll || index < showIndex)
            .map((item, index) => (
              <PersonalProfileExperienceItem
                allowEdit={false}
                item={item}
                key={index}
                triggerDelete={() => {}} // No need
                triggerEdit={() => {}} // No need
              />
            ))}

          {displayShowMoreOrLess && !isShowAll && (
            <div
              className="hover:dark:bg-primary-700 p-5 hover:cursor-pointer hover:bg-gray-100"
              onClick={showAll}
            >
              <div className="flex justify-center">
                Show {employmentExperienceLength - showIndex} more
              </div>
            </div>
          )}

          {displayShowMoreOrLess && isShowAll && (
            <div
              className="hover:dark:bg-primary-700 p-5 hover:cursor-pointer hover:bg-gray-100"
              onClick={showLess}
            >
              <div className="flex justify-center">Show less</div>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default ViewExperienceList;
