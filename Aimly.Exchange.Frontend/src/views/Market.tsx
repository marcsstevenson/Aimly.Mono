import React, { useEffect, useState } from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { getConfig } from '../config';
import Loading from '../components/Loading';
import { Button, Input, Form, FormGroup } from 'reactstrap';
import userIcon from '../assets/abstract-user-flat-4.svg';

export interface UserSearchResult {
  id: string;
  fullName: string;
  pictureUrl: string;
}

export interface MarketState {
  showResult: boolean;
  apiMessage: string;
  error: any;
  userSearchResults: UserSearchResult[];
}

export const MarketComponent = () => {
  const config = getConfig();
  const apiOrigin = config.exchangeApiUri;

  const [state, setState] = useState<MarketState>({
    showResult: false,
    apiMessage: '',
    error: null,
    userSearchResults: [],
  });

  // Onload
  useEffect(() => {
    userSearch();
  }, []);

  const { getAccessTokenSilently } = useAuth0();

  const userSearch = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(`${apiOrigin}/api/graphql`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          query: `{
            userSearch{
              id
              fullName
              pictureUrl
            }
        }`,
        }),
      });

      const responseData = await response.json();

      setState({
        ...state,
        showResult: true,
        apiMessage: responseData,
        userSearchResults: responseData.data.userSearch,
      });
    } catch (error) {
      setState({
        ...state,
        // error: error.error,
      });
    }
  };

  return (
    <div className="light-page">
      <h2>Market</h2>
      <p>Search for start-ups, mentors, experts, applications and investors.</p>
      <Form className="d-flex">
        <Input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <Button color="primary" onClick={userSearch}>
          Search
        </Button>
      </Form>

      <div className="result-block-container">
        {state.showResult &&
          state.userSearchResults.map((user, i) => (
              <div key={user.id} className="d-flex pt-3 text-muted">
                <img
                  className="rounded-circle user-icon-image"
                  src={user.pictureUrl ?? userIcon}
                  alt={user.fullName}
                />

                <div className="ms-1 pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div className="d-flex justify-content-between">
                    <strong className="text-gray-dark">Full Name</strong>
                    <a href="#">Follow</a>
                  </div>
                  <span className="d-block">{user.fullName}</span>
                </div>
              </div>
          ))}
      </div>
    </div>
  );
};

export default withAuthenticationRequired(MarketComponent, {
  onRedirecting: () => <Loading />,
});
