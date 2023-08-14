import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.jsx";
import { StateProvider } from "./store/index.jsx";
import reducer from "./store/reducer";
import state from "./store/state";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={state}>
      <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>
);
