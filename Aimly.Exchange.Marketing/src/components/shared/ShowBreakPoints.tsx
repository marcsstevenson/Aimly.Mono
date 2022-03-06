import React from 'react';

// The purpose of this component is to display the breakpoints that are being used
// Each breakpoint will become visible when the screen size is equal to or greater than the breakpoint
// This component should only be used for development purposes

const ShowBreakPoints = () => (
  <div className="flex flex-row gap-x-2">
    <div className="bg-primary-600 invisible basis-1/4 rounded-full p-3 text-center text-white sm:visible">
      sm+
    </div>
    <div className="bg-primary-600 invisible basis-1/4 rounded-full p-3 text-center text-white md:visible">
      md+
    </div>
    <div className="bg-primary-600 invisible basis-1/4 rounded-full p-3 text-center text-white lg:visible">
      lg+
    </div>
    <div className="bg-primary-600 invisible basis-1/4 rounded-full p-3 text-center text-white xl:visible">
      xl+
    </div>
    <div className="bg-primary-600 invisible basis-1/4 rounded-full p-3 text-center text-white 2xl:visible">
      2xl+
    </div>
  </div>
);
export default ShowBreakPoints;
