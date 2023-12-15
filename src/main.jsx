import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./ReduxStore/store/index.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  //API'den her seferinde iki kez istek atmaması için Strict modu kapattım
  // <React.StrictMode>
  <Provider store={store}>
    <App />
    <ToastContainer autoClose={1500} />
  </Provider>
  // </React.StrictMode>
);
