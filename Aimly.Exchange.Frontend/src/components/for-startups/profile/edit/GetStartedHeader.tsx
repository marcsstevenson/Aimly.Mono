import React from 'react';
import useLocationQuery from 'components/shared/useLocationQuery';
import { context } from 'components/for-startups/UrlConstants';

interface props {
  title: string;
}

const GetStartedHeader = ({ title }: props) => {
  let locationQuery = useLocationQuery();
  const contextVal = locationQuery.get(context ?? '(New)');

  return (
    <div className="mx-auto max-w-2xl py-6 sm:py-4 lg:max-w-none lg:py-8">
      <h2 className="text-center text-2xl font-extrabold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <h2 className="dark:text-primary-400 text-primary-700 text-center text-5xl font-extrabold">
        {contextVal}
      </h2>
    </div>
  );
};

export default GetStartedHeader;
