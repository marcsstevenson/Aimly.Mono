import { MarketSearchRequest } from "components/market/MarketSearchRequest";

// Helper methods for the MarketSearchRequest interface

const searchQueryStringVariable = 's';
const industriesQueryStringVariable = 'in';
const skillsQueryStringVariable = 'sk';
const locationsQueryStringVariable = 'lo';
const timezonesQueryStringVariable = 'tz';

const buildFromQuery = (
  searchQueryValue: string | null,
  skillsQueryValue: string | null,
  industriesQueryValue: string | null,
  locationsQueryValue: string | null,
  timezonesQueryValue: string | null): MarketSearchRequest => {
  return {
    searchTerm: searchQueryValue ?? '',
    skills: skillsQueryValue?.split(',') ?? [],
    industries: industriesQueryValue?.split(',') ?? [],
    locations: locationsQueryValue?.split(',') ?? [],
    timeZones: timezonesQueryValue?.split(',') ?? [],
  };
}

const buildQueryString = (request: MarketSearchRequest) => {
  let parts: string[] = [];

  if (request.searchTerm && request.searchTerm.length > 0) {
    parts.push(`${searchQueryStringVariable}=${encodeURIComponent(request.searchTerm)}`);
  }

  if (request.industries && request.industries.length > 0) {
    parts.push(`${industriesQueryStringVariable}=${encodeURIComponent(request.industries.join(','))}`);
  }

  if (request.skills && request.skills.length > 0) {
    parts.push(`${skillsQueryStringVariable}=${encodeURIComponent(request.skills.join(','))}`);
  }

  if (request.locations && request.locations.length > 0) {
    parts.push(`${locationsQueryStringVariable}=${encodeURIComponent(request.locations.join(','))}`);
  }

  if (request.timeZones && request.timeZones.length > 0) {
    parts.push(`${timezonesQueryStringVariable}=${encodeURIComponent(request.timeZones.join(','))}`);
  }

  if (parts.length === 0) {
    return '';
  }

  return '?' + parts.join('&');
};

/// If the search request is empty of parameters
const isEmpty = (request: MarketSearchRequest): boolean => {
  if (request.searchTerm && request.searchTerm.length > 0) {
    return false;
  }

  if (request.skills && request.skills.length > 0) {
    return false;
  }

  if (request.industries && request.industries.length > 0) {
    return false;
  }

  return true;
};

const areSame = (a: MarketSearchRequest | null, b: MarketSearchRequest | null): boolean => {
  if (!a && !b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }

  if (a.searchTerm !== b.searchTerm) {
    return false;
  }

  if (!listsAreSame(a.industries, b.industries)) {
    return false;
  }

  if (!listsAreSame(a.skills, b.skills)) {
    return false;
  }

  return true;
};

const listsAreSame = (a: string[], b: string[]): boolean => {
  if (!a && !b) {
    return false;
  }

  if (!a || !b) {
    return false;
  }

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

export {
  areSame,
  isEmpty,
  buildFromQuery,
  buildQueryString,
  searchQueryStringVariable,
  skillsQueryStringVariable,
  industriesQueryStringVariable,
  locationsQueryStringVariable,
  timezonesQueryStringVariable,
};