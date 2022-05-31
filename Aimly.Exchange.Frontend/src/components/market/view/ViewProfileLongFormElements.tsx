// The purpose of this component is to display a list long form elements (big label with long form text)

import React from 'react';
import { LongFormElementsProps } from 'components/market/view/ViewProfileInterfaces';
import HtmlDisplay from 'components/shared/HtmlDisplay';

const ViewProfileLongFormElements = ({ longFormElements }: LongFormElementsProps) => {
  return (
    <>
      {longFormElements
        .filter((i) => i !== null && i !== undefined)
        .map((element, index) => (
          <React.Fragment key={index}>
            <div key={index} className="col-span-8 mr-4 lg:col-span-2">
              <span className="text-4xl text-gray-900 dark:text-gray-100">{element.label}</span>
            </div>
            <div className="col-span-8 lg:col-span-4">
              {element.content && (
                <HtmlDisplay
                  className="mt-1 text-gray-800 dark:text-gray-300"
                  content={element.content}
                ></HtmlDisplay>
              )}
            </div>
            <div></div>
          </React.Fragment>
        ))}
    </>
  );
};

export default ViewProfileLongFormElements;
