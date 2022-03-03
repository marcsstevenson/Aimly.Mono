// The purpose of this component is to display a list long form elements (big label with long form text)

import React from 'react';

interface Props {
  readonly longFormElements: ReadonlyArray<LongFormElement>;
}

export interface LongFormElement {
  readonly label: string;
  readonly content: string;
}

const ViewProfileLongFormElements = ({ longFormElements }: Props) => {
  return (
    <>
      {longFormElements.map((element, index) => (
        <React.Fragment key={index}>
          <div key={index} className="col-span-8 mr-4 lg:col-span-2">
            <span className="text-5xl text-gray-900 dark:text-gray-100">{element.label}</span>
          </div>
          <div className="col-span-8 lg:col-span-4">
            <div className="mt-1 text-gray-800 dark:text-gray-300">{element.content}</div>
          </div>
          <div></div>
        </React.Fragment>
      ))}
    </>
  );
};

export default ViewProfileLongFormElements;
