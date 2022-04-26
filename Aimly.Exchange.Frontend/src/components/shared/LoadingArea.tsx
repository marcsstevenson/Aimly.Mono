// The pourpose of this component is to display a large loading area

import React from 'react';
import loadingImage from 'assets/logo-loading.svg';
import { classNames } from 'utils/classNames';

interface Props {
  title: string | null;
  fullHeight: boolean;
}

export const LoadingArea = ({ title, fullHeight }: Props) => (
  <div
    className={classNames(
      fullHeight ? 'min-h-screen' : '',
      ' px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'
    )}
  >
    <div className="mx-auto max-w-max">
      <main className="sm:flex">
        <div>
          {title && (
            <h1 className="text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
              {title}
            </h1>
          )}
          <div className="mt-10 flex justify-center space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <img
              className="h-72"
              src="https://aimlyappxmantraprod.blob.core.windows.net/images/X%20Mantra.png?sp=r&st=2022-04-26T20:25:38Z&se=3022-04-27T04:25:38Z&sv=2020-08-04&sr=b&sig=OYuYyH0B2oXJQFNcJcEAll2FEaLKKivdHwxtwklzT1w%3D"
              alt=""
            ></img>
          </div>
        </div>
      </main>
    </div>
  </div>
);
