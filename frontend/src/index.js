import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store, history } from "./store";

import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { ThemeProvider } from "styled-components";
import App from "./components/App";
import GlobalStyle from '../src/styles/GlobalStyle';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider>
      <GlobalStyle>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
      </GlobalStyle>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,

  document.getElementById("root")
);
