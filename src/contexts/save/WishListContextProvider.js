import {createContext, useReducer} from "react";

const WishListContext = createContext(null);
const initialWishList = [];

const reducer = (state = initialWishList, action) => {
  switch (action.type) {
    case "update":
      const updatedIndex = state.findIndex((item) => item.id === action.payload.id);
      if (updatedIndex === -1) {
        return [...state, action.payload];
      } else {
        const newState = [...state];
        newState[updatedIndex] = {
          ...newState[updatedIndex],
          ...action.payload
        };
        return newState;
      }
    case "reset":
      return initialWishList;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const WishListProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer);

  const updateWishList = (wishList) => {
    dispatch({type: "update", payload: wishList});
  };

  return (
    <WishListContext.Provider value={{wishList: state, updateWishList}}>
      {children}
    </WishListContext.Provider>
  );
};

export {WishListContext, WishListProvider};
