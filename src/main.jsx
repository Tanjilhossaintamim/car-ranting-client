import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.Fragment>
);
