import React from 'react';
import { Disclosure } from '@headlessui/react';
import { classNames } from 'utils/classNames';

interface Props {
  title: string;
}

const TopGraphic = (props: Props) => {
  return (
    <Disclosure as="div" className="bg-primary-700 relative overflow-hidden pb-32">
      {({ open }) => (
        <>
          <div
            aria-hidden="true"
            className={classNames(
              open ? 'bottom-0' : 'inset-y-0',
              'absolute inset-x-0 left-1/2 w-full -translate-x-1/2 transform overflow-hidden lg:inset-y-0'
            )}
          >
            <div className="relative flex justify-center">
              <svg
                className="flex-shrink-0"
                width={1750}
                height={308}
                viewBox="0 0 1750 308"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M284.161 308H1465.84L875.001 182.413 284.161 308z"
                  className="fill-primary-600"
                />
                <path d="M1465.84 308L16.816 0H1750v308h-284.16z" className="fill-primary-700" />
                <path d="M1733.19 0L284.161 308H0V0h1733.19z" className="fill-primary-800" />
                <path
                  d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z"
                  className="fill-primary-900"
                />
              </svg>
            </div>
          </div>
          <header className="relative py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white">{props.title}</h1>
            </div>
          </header>
        </>
      )}
    </Disclosure>
  );
};

export default TopGraphic;
