import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { CookiesProvider } from "react-cookie";
import rootReducer from "./Store/Reducers/GlobalReducer";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const store = createStore(rootReducer);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
