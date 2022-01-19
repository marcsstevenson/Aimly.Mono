import React from "react";

interface props{
  title: string;
}

const GetStartedHeader = ({ title }: props) => (
  <div className="max-w-2xl mx-auto py-6 sm:py-4 lg:py-8 lg:max-w-none">
    <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 text-center">{ title }</h2>
  </div>
);

export default GetStartedHeader;
