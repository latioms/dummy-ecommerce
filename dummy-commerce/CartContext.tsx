import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Define the shape of the cart state
interface CartState {
  products: any[];
}

// Define the shape of the cart actions
interface CartAction {
  type: 'add' | 'remove';
  product: any;
}

// Initial state of the cart
const initialState: CartState = {
  products: [],
};

// Cart reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'add':
      return {
        products: [...state.products, action.product],
      };
    case 'remove':
      return {
        products: state.products.filter(p => p.id !== action.product.id),
      };
    default:
      return state;
  }
};

// Create the Cart Context
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Create the Cart Provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
