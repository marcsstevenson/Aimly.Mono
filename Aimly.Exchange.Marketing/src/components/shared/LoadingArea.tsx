// The pourpose of this component is to display a large loading area

import React from 'react';
import loadingImage from 'assets/logo-loading.svg';

interface Props {
  title: string | null;
}

export const LoadingArea = (props: Props) => (
  <div className="min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
    <div className="mx-auto max-w-max">
      <main className="sm:flex">
        <div>
          {props.title && (
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
              {props.title}
            </h1>
          )}
          <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <img src={loadingImage} alt=""></img>{' '}
          </div>
        </div>
      </main>
    </div>
  </div>
);
