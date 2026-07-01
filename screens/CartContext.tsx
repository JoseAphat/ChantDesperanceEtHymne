import React, { createContext, ReactNode, useContext, useState } from "react";

interface CartContextType {
  cart: string[];
  addToCart: (title: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  clearCart: () => {},
});
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (title: string) => {
    if (!cart.includes(title)) setCart([...cart, title]);
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
