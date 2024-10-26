'use client';
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  addToCart: (product: Product) => void;
  cart: Product[];
}


const CartContext = createContext<CartContextType | undefined>(undefined);


interface Product {
  id: number;
  name: string;
  price: string;
  src: string;
}

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
