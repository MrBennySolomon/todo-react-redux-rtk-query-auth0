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
    domain="dev-agn53klkwwv8nyi8.us.auth0.com"
    clientId="BF7lM6g42MwzcH8jRW2Spk6qQ45SixZJ"
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
