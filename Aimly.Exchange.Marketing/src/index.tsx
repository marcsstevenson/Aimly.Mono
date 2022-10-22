import React from 'react';
import ReactDOM from 'react-dom';
import './css/output.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import history from './utils/history';
import { ThemeProvider } from './components/ThemeContext';

const onRedirectCallback = (appState: any) => {
  history.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname);
};

// const { user } = useAuth0<User>();

// console.log(user);

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
