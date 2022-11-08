import { EyeSlashIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface Props {
  text: string;
}

const ToolTip = ({ text }: Props) => {
  return (
    <div className="text-blue-500 group relative inline-block underline duration-300 hover:text-red-500">
      <EyeSlashIcon className="h-4 w-4 text-gray-400 dark:text-gray-600" aria-hidden="true" />
      <span
        className="absolute -left-20 -top-2 hidden w-48 -translate-y-full
          rounded-lg bg-gray-700 px-2 py-1 text-center text-sm text-white
          after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2
          after:border-8 after:border-x-transparent after:border-b-transparent
          after:border-t-gray-700 after:content-[''] group-hover:flex"
      >
        {text}
      </span>
    </div>
  );
};

export default ToolTip;
