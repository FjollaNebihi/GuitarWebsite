import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloclient";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Make sure to create this file

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18n}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </I18nextProvider>
);
