import { createContext, useEffect, useReducer } from "react";

const WishListContext = createContext(null);
const initialWishList = [];

const reducer = (state = initialWishList, action) => {
  switch (action.type) {
    case "update":
      const updatedIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedIndex === -1) {
        return [...state, action.payload];
      } else {
        const newState = [...state];
        newState[updatedIndex] = {
          ...newState[updatedIndex],
          ...action.payload,
        };
        return newState;
      }
    case "remove":
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        const newState = [...state];
        newState.splice(itemIndex, 1);
        return newState;
      } else {
        return state;
      }
    case "clear":
      return initialWishList;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const WishListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialWishList, () => {
    const localData = localStorage.getItem("wishList");
    return localData ? JSON.parse(localData) : initialWishList;
  });

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(state));
  }, [state]);

  const updateWishList = (wishList) => {
    dispatch({ type: "update", payload: wishList });
  };

  const removeWishList = (wishList) => {
    dispatch({ type: "remove", payload: wishList });
  };

  const clearWishList = () => {
    dispatch({ type: "clear" });
  };

  return (
    <WishListContext.Provider
      value={{ wishList: state, updateWishList, removeWishList, clearWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export { WishListContext, WishListProvider };
