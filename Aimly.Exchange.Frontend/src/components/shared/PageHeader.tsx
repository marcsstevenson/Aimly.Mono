import React from 'react';

interface Props {
  Title: string;
}

export const PageHeader = ({ Title }: Props) => {
  return (
    <div className="mb-8 bg-white shadow dark:bg-gray-700">
      <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
        <div className="py-6 md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex items-center">
              <div>
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-50 sm:truncate sm:leading-9">
                    {Title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
