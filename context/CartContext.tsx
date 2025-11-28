import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, CartItem, CartState } from '../types';
import { parsePrice } from '../utils/helpers';

interface CartContextType extends CartState {
  addToCart: (item: MenuItem, quantity?: number, variant?: string) => void;
  removeFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  isCartOpen: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('jalwa-cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('jalwa-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (item: MenuItem, quantity = 1, variant?: string) => {
    const parsedPrice = parsePrice(item.price);
    
    setItems(current => {
      // Check if same item (and variant) exists
      const existingIdx = current.findIndex(i => i.id === item.id && i.variant === variant);
      
      if (existingIdx > -1) {
        const newItems = [...current];
        newItems[existingIdx].quantity += quantity;
        return newItems;
      }

      return [...current, {
        ...item,
        cartId: `${item.id}-${Date.now()}`,
        quantity,
        parsedPrice,
        variant
      }];
    });
    
    // Optional: Open cart on add
    // setIsCartOpen(true);
  };

  const removeFromCart = (cartId: string) => {
    setItems(current => current.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(cartId);
      return;
    }
    setItems(current => 
      current.map(item => 
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleCart = () => setIsCartOpen(prev => !prev);

  // Derived state
  const subtotal = items.reduce((sum, item) => sum + (item.parsedPrice * item.quantity), 0);
  const tax = subtotal * 0.06625; // NJ Tax Rate approx
  const total = subtotal + tax;

  return (
    <CartContext.Provider value={{
      items,
      subtotal,
      tax,
      total,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleCart,
      isCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
