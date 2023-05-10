import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./Redux/store.js";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Auth0Provider
    domain="dev-lfta5odk5t76lsjd.us.auth0.com"
    clientId="85G2g0C9s46gSnjru2UTcSQ2RNRDtPl4"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <Provider store={store}>
      <App />
    </Provider>
    </Auth0Provider>

  </React.StrictMode>
);
