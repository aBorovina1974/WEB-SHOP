import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./fonts/Oswald/Oswald-Regular.ttf";
import "./fonts/Oswald/Oswald-Medium.ttf";
import "./fonts/Oswald/Oswald-SemiBold.ttf";
import "./fonts/Roboto/Roboto-Regular.ttf";
import "./fonts/Roboto/Roboto-Medium.ttf";
import "./index.css";
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
