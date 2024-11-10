import { createContext, useReducer, ReactNode, Dispatch, useContext } from "react";

interface Items {
  id: number;
  title: string;
  price: number;
  description: string;
}

interface CartState {
  cart: Items[];
}

const initialState: CartState = {
  cart: [],
};

type CartAction =
  | { type: "ADD_TO_CART"; payload: Items }
  | { type: "REMOVE_FROM_CART"; payload: number }; 

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
    default:
      return state;
  }
}

interface CartContextProps {
  state: CartState;
  dispatch: Dispatch<CartAction>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { useCart };
export default CartProvider;
export { CartContext };