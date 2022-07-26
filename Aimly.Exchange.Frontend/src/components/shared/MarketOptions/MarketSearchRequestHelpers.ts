import { MarketSearchRequest } from "components/market/MarketSearchRequest";

// Helper methods for the MarketSearchRequest interface

const searchQueryStringVariable = 's';
const skillsQueryStringVariable = 'sk';
const industriesQueryStringVariable = 'in';

const buildFromQuery = (
  searchQueryValue: string | null,
  skillsQueryValue: string | null,
  industriesQueryValue: string | null): MarketSearchRequest => {
  return {
    searchTerm: searchQueryValue ?? '',
    skills: skillsQueryValue?.split(',') ?? [],
    industries: industriesQueryValue?.split(',') ?? [],
  };
}

const buildQueryString = (request: MarketSearchRequest) => {
  let parts: string[] = [];

  if (request.searchTerm && request.searchTerm.length > 0) {
    parts.push(`${searchQueryStringVariable}=${request.searchTerm}`);
  }

  if (request.skills && request.skills.length > 0) {
    parts.push(`${skillsQueryStringVariable}=${request.skills.join(',')}`);
  }

  if (request.industries && request.industries.length > 0) {
    parts.push(`${industriesQueryStringVariable}=${request.industries.join(',')}`);
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
};