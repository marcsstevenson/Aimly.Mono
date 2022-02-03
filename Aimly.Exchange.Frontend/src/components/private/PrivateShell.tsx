import React, { useState } from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from 'RelayEnvironment';

import TopBar from './TopBar';
import Loading from 'components/Loading';
import { GetPrivateRoutes } from 'components/shared/AppRoutes';
import SideBar from './SideBar';
import { PrivateContext, PrivateContextType } from './PrivateContext';

const PrivateShell = (): JSX.Element => {
  const { isLoading, error, user } = useAuth0();

  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // const [privateContextValue, setPrivateContext] = useState<PrivateContextType>({
  //   isSidebarOpen: false,
  //   testValue: 'Hai',
  //   user: user,
  // });

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

  // const ToggleSidebarOpen = () => {
  //   PrivateContextValue.isSidebarOpen = !PrivateContextValue.isSidebarOpen;
  // };


  const privateContextValue: PrivateContextType = {
    isSidebarOpen: isSidebarOpen,
    setSidebarOpen: setSidebarOpen,
    testValue: 'Hai',
    user: user
  };

  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <PrivateContext.Provider value={privateContextValue}>
        <div className="min-h-full">
          <SideBar />

          <div className="lg:pl-64 flex flex-col flex-1">
            <TopBar />
            <main className="flex-1 pb-8">{GetPrivateRoutes()}</main>
          </div>
        </div>
      </PrivateContext.Provider>
    </RelayEnvironmentProvider>
  );
};

export default withAuthenticationRequired(PrivateShell, {
  onRedirecting: () => <Loading />,
});

// export function Main() {
//   const value: PrivateContextType = {
//     isSidebarOpen: false,
//     testValue: "Hai",
//   };

//   return (
//     <PrivateContext.Provider value={value}>
//       <PrivateShell />
//     </PrivateContext.Provider>
//   );
// }
