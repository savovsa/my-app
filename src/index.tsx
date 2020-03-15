import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "emotion-theming";
import { ApolloProvider } from "@apollo/react-hooks";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import client from "./graphql/client";
import theme from "./style/themes/main";

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
