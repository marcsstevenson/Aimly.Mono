import React from 'react';
import useLocationQuery from 'components/shared/useLocationQuery';
import { context } from 'components/shared/UrlConstants';
import { XIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  contextVal: string | null;
}

const GenericHeader = (props: Props) => {
  const locationQuery = useLocationQuery();
  const navigate = useNavigate();
  // Use the provided context value if it is set, otherwise use the value from the URL
  const contextVal = props.contextVal ?? locationQuery.get(context ?? '(New)');

  const goBack = () => {
    navigate(-1);
  };

  const showBackButton = true;

  return (
    <header className="relative py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-6">
          <div className="col-span-4 col-start-2">
            <h1 className="text-center text-2xl font-extrabold text-gray-800 dark:text-gray-100">
              {props.title}
            </h1>
            {contextVal && (
              <h1 className="dark:text-secondary-400 text-secondary-700 text-center text-5xl font-extrabold">
                {contextVal}
              </h1>
            )}
          </div>
          {showBackButton && (
            <div className="col-span-1 justify-self-end">
              <button
                type="button"
                onClick={goBack}
                className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 inline-flex items-center rounded-full border border-transparent p-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                <XIcon className="h-6 w-6" aria-hidden="true" aria-label="go back" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default GenericHeader;
