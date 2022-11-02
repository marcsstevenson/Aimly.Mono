import jest from 'jest';
import {
  buildQueryString,
} from 'components/shared/MarketOptions/MarketSearchRequestHelpers';
import { MarketSearchRequest } from "components/market/MarketSearchRequest";

test('buildQueryString handles +', () => {
  const request: MarketSearchRequest = {
    searchTerm: 'a+b',
    skills: [],
    industries: [],
    locations: [],
    timeZones: [],
  };

  const queryString = buildQueryString(request);

  expect(queryString).toEqual('?s=a%2Bb');
});