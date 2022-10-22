import React from 'react';
import { classNames } from 'utils/classNames';

interface Props {
  selectedOptions: readonly (string | null)[];
  allowEdit: boolean;
  removeTrigger: (value: string) => void;
}
export const SelectedMarketOptions = ({ selectedOptions, allowEdit, removeTrigger }: Props) => {
  return (
    <div>
      {selectedOptions &&
        selectedOptions
          .map((i) => i)
          .sort()
          .map((item, index) => (
            <span
              key={index}
              className="mr-1 mt-2 inline-flex cursor-default items-center rounded-full bg-primary-700 py-1 px-1 text-sm font-medium text-gray-200"
            >
              <span className={classNames(allowEdit ? 'pl-2.5' : 'px-2.5')}>{item}</span>
              {allowEdit && (
                <button
                  type="button"
                  onClick={() => {
                    if (item !== null) removeTrigger(item);
                  }}
                  className="ml-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-primary-400 hover:bg-primary-200 hover:text-primary-500 focus:bg-primary-500 focus:text-white focus:outline-none"
                >
                  <span className="sr-only">Remove</span>
                  <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                    <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                  </svg>
                </button>
              )}
            </span>
          ))}
    </div>
  );
};
