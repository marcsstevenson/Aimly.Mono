import jest from 'jest';
import {
  areSame,
  isEmpty,
  buildFromQuery,
  buildQueryString,
  searchQueryStringVariable,
  skillsQueryStringVariable,
  industriesQueryStringVariable,
} from 'components/shared/MarketOptions/MarketSearchRequestHelpers';
import { MarketSearchRequest } from "components/market/MarketSearchRequest";

test('buildQueryString handles +', () => {
  const request: MarketSearchRequest = {
    searchTerm: 'a+b',
    skills: [],
    industries: [],
  };

  const queryString = buildQueryString(request);

  expect(queryString).toEqual('?s=a%2Bb');
});