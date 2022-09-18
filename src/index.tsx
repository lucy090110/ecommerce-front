import React from 'react';
import ReactDOM from 'react-dom/client';
import {API} from './config';
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import {Provider} from "react-redux";
import store from "./store";
import {ConnectedRouter} from "connected-react-router";

console.log(API)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <ConnectedRouter history={history}>
              <BrowserRouter>
                  <Routes/>
              </BrowserRouter>
          </ConnectedRouter>
      </Provider>
  </React.StrictMode>
);
