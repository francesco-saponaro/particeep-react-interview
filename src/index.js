import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import Provider to provide the Redux store to the app
import { Provider } from "react-redux";
// Import the Redux store
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Provide the store to the application as prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
