import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Course } from '../types';

type CartItem = {
  course: Course;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
  isInCart: (courseId: string) => boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (course: Course) => {
    // console.log("course", course)
    setItems((prevItems) => {
      
      const existingItemIndex = prevItems.findIndex(
        (item) => item.course.id === course.id
      );
// console.log("existingItemIndex", existingItemIndex)
      if (existingItemIndex >= 0) {
        
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      } else {
        // Add new course to cart
        return [...prevItems, { course, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (courseId: string) => {
    setItems((prevItems) => 
      prevItems.filter((item) => item.course.id !== courseId)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce(
      (total, item) => total + item.course.price * item.quantity,
      0
    );
  };

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  const isInCart = (courseId: string) => {
    return items.some((item) => item.course.id === courseId); 
  }
  // console.log("isInCart", isInCart)     

  console.log("items", items)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
        getItemCount,
        isInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};