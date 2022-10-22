import React, { useMemo } from 'react';
import { LocationMarkerIcon } from '@heroicons/react/solid';

export interface Props {
  addressCity: string | null;
  addressRegion: string | null;
  addressCountry: string;
}

const LocationLinker = ({ addressCity, addressRegion, addressCountry }: Props) => {
  const area = useMemo<string | null>(() => {
    // Pick between city and region
    // Try to use city first

    if (!addressCity && !addressRegion) {
      return null; // Nothing to use
    }

    if (addressCity && addressCity.length > 0) {
      return addressCity;
    }
    if (addressRegion && addressRegion.length > 0) {
      return addressRegion;
    }
    return null; // Nothing to use
  }, [addressCity, addressRegion]);

  const locationDisplay = useMemo(() => {
    if (area && area.length > 0) {
      return `${area}, ${addressCountry}`;
    }
    return addressCountry;
  }, [area, addressCountry]);

  return (
    <a
      className="default-a flex"
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.google.co.nz/maps/search/${encodeURIComponent(locationDisplay)}`}
    >
      <LocationMarkerIcon className="mr-2 h-5 w-5" aria-hidden="true" />
      <span>{locationDisplay}</span>
    </a>
  );
};

export default LocationLinker;
