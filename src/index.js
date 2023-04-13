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
import "./index.scss";
import { UserProvider } from "./contexts/user/UserContextProvider";
import { CartProvider } from "./contexts/cart/CartContextProvider";
import { WishListProvider } from "./contexts/save/WishListContextProvider";
import { SearchProvider } from "./contexts/search/SearchContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <WishListProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </WishListProvider>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>
);
