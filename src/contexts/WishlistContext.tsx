import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Course } from '../types';
import toast from 'react-hot-toast';

type WishlistContextType = {
  wishlist: Course[];
  addToWishlist: (course: Course) => void;
  removeFromWishlist: (courseId: string) => void;
  isInWishlist: (courseId: string) => boolean;
  clearWishlist: () => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const [wishlist, setWishlist] = useState<Course[]>(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist)); 
  }, [wishlist]);

  const addToWishlist = (course: Course) => {
   
    if (wishlist.some(item => item.id === course.id)) {
      toast.error('Already in your wishlist');
      return;
    }
    
    setWishlist(prev => [...prev, course]);
    toast.success('Added to wishlist');
  };

  const removeFromWishlist = (courseId: string) => {
    setWishlist(prev => prev.filter(course => course.id !== courseId));
    toast.success('Removed from wishlist');
  };

  const isInWishlist = (courseId: string) => {
    return wishlist.some(course => course.id === courseId);
  };

  const clearWishlist = () => {
    setWishlist([]);
    toast.success('Wishlist cleared');
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};




//edulearn-wishlist