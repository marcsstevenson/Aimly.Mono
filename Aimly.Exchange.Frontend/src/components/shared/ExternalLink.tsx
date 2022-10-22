import React, { useMemo } from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export interface Props {
  url: string;
}

const ExternalLink = ({ url }: Props) => {
  const href = useMemo<string>(() => {
    // Pick between city and region
    // Try to use city first
    if (url.toLowerCase().startsWith('http')) {
      return url; // good use this
    }

    return `https://${url}`; // Nothing to use
  }, [url]);

  return (
    <a
      className="default-a ... flex overflow-hidden text-ellipsis"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" aria-hidden="true" />
      <p className="">{url}</p>
    </a>
  );
};

export default ExternalLink;
