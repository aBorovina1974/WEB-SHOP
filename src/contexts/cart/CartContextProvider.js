import { createContext, useEffect, useReducer } from "react";

const CartContext = createContext(null);
const initialCart = [];

const reducer = (state = initialCart, action) => {
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
      return initialCart;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialCart, () => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : initialCart;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  const updateCart = (product) => {
    dispatch({ type: "update", payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "remove", payload: product });
  };

  const clearCart = () => {
    dispatch({ type: "clear" });
  };

  const calculateTotal = () => {
    let total = 0;
    if (state) {
      state.forEach((product) => {
        total += product.price * product.quantity;
      });
    }
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart: state,
        updateCart,
        removeFromCart,
        clearCart,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
