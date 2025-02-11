import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import "./CSS/Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./Store.jsx";
import { Provider } from "react-redux";
import "antd/dist/reset.css"; // For newer versions


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
