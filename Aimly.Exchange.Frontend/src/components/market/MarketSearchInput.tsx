import React, { useEffect, useRef, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import useLocationQuery from 'components/shared/useLocationQuery';
import { type ProfileTypeOption } from '__generated__/marketSearchQuery.graphql';
import { IndustriesAndSkills } from 'components/shared/MarketOptions/IndustriesAndSkills';
import { MarketSearchRequest } from 'components/market/MarketSearchRequest';
import { classNames } from 'utils/classNames';
import { Switch } from '@headlessui/react';

interface Props {
  CurrentProfileType: ProfileTypeOption;
  onChange: (request: MarketSearchRequest) => void;
}

export const MarketSearchInput = ({ CurrentProfileType, onChange }: Props) => {
  const locationQuery = useLocationQuery();
  const searchQueryStringVariable = 's';

  // Populate the defaults using the query string
  // search term
  const [searchTerm, setSearchTerm] = useState(locationQuery.get(searchQueryStringVariable) ?? '');
  // TODO: Add industries and skills from query string
  const [industriesSelected, setIndustriesSelected] = useState<string[]>([]);
  const [skillsSelected, setSkillsSelected] = useState<string[]>([]);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus the input when the component is mounted
  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    bubbleUp();
  };

  const onChangeIndustries = (industries: string[]) => {
    setIndustriesSelected(industries);
    console.log('onChangeIndustries', industries);

    // bubbleUp();

    onChange({
      searchTerm: searchTerm,
      industries: industries ?? [],
      skills: skillsSelected ?? [],
    });
  };

  const onChangeSkills = (skills: string[]) => {
    setSkillsSelected(skills);
    console.log('onChangeSkills', skills);
    // bubbleUp();

    onChange({
      searchTerm: searchTerm,
      industries: industriesSelected ?? [],
      skills: skills ?? [],
    });
  };

  const bubbleUp = () => {
    console.log('bubbleUp', {
      searchTerm: searchTerm,
      industries: industriesSelected ?? [],
      skills: skillsSelected ?? [],
    });

    onChange({
      searchTerm: searchTerm,
      industries: industriesSelected ?? [],
      skills: skillsSelected ?? [],
    });
  };

  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  return (
    <div className="mx-auto mb-3 bg-white dark:bg-gray-800">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
          <div className="pt-10 pb-5 dark:text-white">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                aria-hidden="true"
              >
                <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search-field"
                name="search-field"
                ref={searchInputRef}
                className="block w-full rounded-xl border border-gray-300
                py-3 pl-10 pr-5 font-medium leading-5
                  text-gray-900 placeholder-gray-500
                  focus:border-transparent focus:outline-none
                  focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-900
                  dark:text-gray-200 dark:placeholder-gray-400 dark:focus:bg-gray-800 sm:text-sm"
                placeholder="Search..."
                onChange={(event) => setSearchTerm(event.target.value)}
                value={searchTerm}
                type="search"
              />
            </div>
          </div>
          <div>
            <span className="form-button-link">More</span>
            <Switch
              checked={showAdvanced}
              onChange={setShowAdvanced}
              className={classNames(
                showAdvanced ? 'bg-secondary-500' : 'bg-gray-200',
                'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2'
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  showAdvanced ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                )}
              />
            </Switch>
          </div>
          {showAdvanced && (
            <IndustriesAndSkills
              profileType={CurrentProfileType}
              onChangeIndustries={onChangeIndustries}
              onChangeSkills={onChangeSkills}
            />
          )}
        </div>
      </form>
    </div>
  );
};
