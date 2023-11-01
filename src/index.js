import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import 'react-lazy-load-image-component/src/effects/blur.css';

import { BrowserRouter } from "react-router-dom";

import "./_base.scss";

import store from "./redux/store";


ReactDOM.render(
  <Provider store={store}>
        <BrowserRouter >
          <App />
        </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
