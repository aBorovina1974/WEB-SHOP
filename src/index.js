import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
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
