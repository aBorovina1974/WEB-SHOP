import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./fonts/Oswald/Oswald-Regular.ttf";
import "./fonts/Oswald/Oswald-Medium.ttf";
import "./fonts/Oswald/Oswald-SemiBold.ttf";
import "./fonts/Oswald/Oswald-Light.ttf";
import "./fonts/Roboto/Roboto-Regular.ttf";
import "./fonts/Roboto/Roboto-Medium.ttf";
import "./fonts/Roboto/Roboto-Light.ttf";
import { UserProvider } from "./contexts/user/UserContextProvider";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
