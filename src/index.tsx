import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./store/store";
import { App } from "./App";

import "./index.css";

//eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- need
const container = document.querySelector("#root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
