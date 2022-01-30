import React from "react";
import ReactDOM from "react-dom";
import "./css/output.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";
import { getProviderConfig } from "./config";
import { ThemeProvider } from "./components/ThemeContext";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const providerConfig = getProviderConfig(onRedirectCallback);

ReactDOM.render(
  <ThemeProvider>
    <Auth0Provider {...providerConfig}>
      <App />
      {/* <div>Wut</div> */}
    </Auth0Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
