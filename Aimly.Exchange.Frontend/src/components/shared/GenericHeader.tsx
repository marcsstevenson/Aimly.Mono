import React from 'react';
import useLocationQuery from 'components/shared/useLocationQuery';
import { context } from 'components/shared/UrlConstants';

interface Props {
  title: string;
  contextVal: string | null;
}

const GenericHeader = (props: Props) => {
  let locationQuery = useLocationQuery();
  // Use the provided context value if it is set, otherwise use the value from the URL
  const contextVal = props.contextVal ?? locationQuery.get(context ?? '(New)');

  return (
    <div className="mx-auto max-w-2xl py-6 sm:py-4 lg:max-w-none lg:py-8">
      <h2 className="text-center text-2xl font-extrabold text-gray-900 dark:text-gray-100">
        {props.title}
      </h2>
      <h2 className="dark:text-primary-400 text-primary-700 text-center text-5xl font-extrabold">
        {contextVal}
      </h2>
    </div>
  );
};

export default GenericHeader;
