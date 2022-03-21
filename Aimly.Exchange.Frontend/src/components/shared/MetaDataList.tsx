import React from 'react';
import { classNames } from 'utils/classNames';

interface Props {
  dataList: readonly (string | null)[];
  allowEdit: boolean;
  deleteTrigger: (value: string) => void;
}
export const MetaDataList = ({ dataList, allowEdit, deleteTrigger }: Props) => {
  return (
    <div>
      {dataList &&
        dataList
          .map((i) => i)
          .sort()
          .map((item, index) => (
            <span
              key={index}
              className="bg-primary-700 mr-1 mt-2 inline-flex cursor-default items-center rounded-full py-1 px-1 text-sm font-medium text-gray-200"
            >
              <span className={classNames(allowEdit ? 'pl-2.5' : 'px-2.5')}>{item}</span>
              {allowEdit && (
                <button
                  type="button"
                  onClick={() => {
                    if (item !== null) deleteTrigger(item);
                  }}
                  className="text-primary-400 hover:bg-primary-200 hover:text-primary-500 focus:bg-primary-500 ml-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full focus:text-white focus:outline-none"
                >
                  <span className="sr-only">Remove</span>
                  <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                    <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                  </svg>
                </button>
              )}
            </span>
            // <div
            //   key={index}
            //   className="bg-primary-600 mt-2 rounded-full py-1 px-3 text-center text-white"
            // >
            //   {item}
            // </div>
          ))}
    </div>
  );
};
