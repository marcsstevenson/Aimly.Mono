import React, { useState, useEffect } from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import TopBar from './TopBar';
import Loading from 'components/Loading';
import { GetPrivateRoutes } from 'components/shared/AppRoutes';
import SideBar from './SideBar';
import { PrivateContext, PrivateContextType } from './PrivateContext';
// import useCheckInMutation from './useCheckInMutation';
import useCheckInMutation2 from './useCheckInMutation2';

const PrivateShell = (): JSX.Element => {
  const { isLoading, error, user } = useAuth0();

  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);

  // const [checkInMutation] = useCheckInMutation();
  const { checkIn, checkedInUserId } = useCheckInMutation2();

  // Instantiate the initial state values
  // Note that userId is stored in browser storage
  const privateContextValue: PrivateContextType = {
    isSidebarOpen: isSidebarOpen,
    setSidebarOpen: setSidebarOpen,
    user: user,
    userId: userId,
    checkInUser: setUserId,
  };

  useEffect(() => {
    if (user) {
      // Check in the user
      checkIn(user);
    }
  }, []);

  useEffect(() => {
    console.log(checkedInUserId);
    setUserId(checkedInUserId);
  }, [checkedInUserId]);

  // if (user) {
  //   // Check in the user
  //   var userId = checkInMutation(user);
  //   console.log(userId);
  // }

  // async function fetchGraphQL(text: any, variables: any) {
  //   const REACT_APP_BACKEND_API = process.env.REACT_APP_EXCHANGE_API_URI;
  //   const graphqlApi = REACT_APP_BACKEND_API + '/api/graphql';
  //   const token = await getAccessTokenSilently();

  //   // Fetch data from GitHub's GraphQL API:
  //   const response = await fetch(graphqlApi, {
  //     method: 'POST',
  //     headers: {
  //       // Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
  //       Authorization: `Bearer ${token}`,
  //       // TODO - Add user's auth token here
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       query: text,
  //       variables,
  //     }),
  //   });

  //   // Get the response as JSON
  //   return await response.json();
  // }

  // async function fetchRelay(params: any, variables: any) {
  //   console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
  //   return fetchGraphQL(params.text, variables);
  // }

  // const modernEnvironment = new Environment({
  //   network: Network.create(fetchRelay),
  //   store: new Store(new RecordSource()),
  // });

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PrivateContext.Provider value={privateContextValue}>
      {!userId && <span>Checking you in...</span>}
      {userId && (
        <div className="min-h-full">
          <SideBar />
          <div className="lg:pl-64 flex flex-col flex-1">
            {/* <span> state: { userId }</span> */}
            <TopBar />
            <main className="flex-1 pb-8">{GetPrivateRoutes()}</main>
          </div>
        </div>
      )}
    </PrivateContext.Provider>
  );
};

export default withAuthenticationRequired(PrivateShell, {
  onRedirecting: () => <Loading />,
});