import {createContext, useReducer} from "react";

const CartContext = createContext(null);
const initialCart = [];

const reducer = (state = initialCart, action) => {
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
      return initialCart;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer);

  const updateCart = (product) => {
    dispatch({type: "update", payload: product});
  };

  return (
    <CartContext.Provider value={{cart: state, updateCart}}>
      {children}
    </CartContext.Provider>
  );
};

export {CartContext, CartProvider};
