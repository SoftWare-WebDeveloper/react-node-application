import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store";

import App from "./App";

// @ts-ignore
const root: HTMLElement = document.getElementById('root');
render(
  <Provider store={store} >
    <App/>
  </Provider>
, root);
