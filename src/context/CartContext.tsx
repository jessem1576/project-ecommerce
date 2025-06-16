
"use client";

import type { CartItem, Product, ProductVariant } from '@/types';
import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeFromCart: (productId: string, variantSku: string) => void;
  updateQuantity: (productId: string, variantSku: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const storedCart = localStorage.getItem('aura-attire-cart');
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
        localStorage.removeItem('aura-attire-cart');
      }
    }
  }, []);

  useEffect(() => {
    // Only save to localStorage if cartItems is not empty or if it was previously populated
    // This prevents writing an empty array on initial load if localStorage was empty
    if (cartItems.length > 0 || localStorage.getItem('aura-attire-cart')) {
       localStorage.setItem('aura-attire-cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = useCallback((product: Product, variant: ProductVariant, quantity: number = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id && item.variant.sku === variant.sku
      );
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > variant.stock) {
            toast({
                title: "Stock limit reached",
                description: `Cannot add more than ${variant.stock} units of ${product.name} (${variant.color}, ${variant.size}). You have ${existingItem.quantity} in cart.`,
                variant: "destructive",
            });
            return prevItems; // Do not update if stock limit exceeded
        }
        return prevItems.map((item) =>
          item.product.id === product.id && item.variant.sku === variant.sku
            ? { ...item, quantity: newQuantity }
            : item
        );
      }
      if (quantity > variant.stock) {
        toast({
            title: "Not enough stock",
            description: `Only ${variant.stock} units of ${product.name} (${variant.color}, ${variant.size}) available.`,
            variant: "destructive",
        });
        return prevItems; // Do not add if initial quantity exceeds stock
      }
      return [...prevItems, { product, variant, quantity }];
    });
    toast({
      title: "Added to cart",
      description: `${product.name} (${variant.color}, ${variant.size}) has been added to your cart.`,
    });
  }, [toast]);

  const removeFromCart = useCallback((productId: string, variantSku: string) => {
    setCartItems((prevItems) => 
        prevItems.filter((item) => !(item.product.id === productId && item.variant.sku === variantSku))
    );
    toast({
      title: "Removed from cart",
      description: `Item has been removed from your cart.`,
      variant: "destructive",
    });
  }, [toast]);

  const updateQuantity = useCallback((productId: string, variantSku: string, quantity: number) => {
    const itemToUpdate = cartItems.find(item => item.product.id === productId && item.variant.sku === variantSku);
    if (itemToUpdate && quantity > itemToUpdate.variant.stock) {
        toast({
            title: "Stock limit reached",
            description: `Cannot set quantity above available stock (${itemToUpdate.variant.stock}).`,
            variant: "destructive",
        });
        setCartItems((prevItems) =>
            prevItems.map((item) =>
            item.product.id === productId && item.variant.sku === variantSku ? { ...item, quantity: itemToUpdate.variant.stock } : item
            )
        );
        return;
    }
    
    if (quantity <= 0) {
      removeFromCart(productId, variantSku);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId && item.variant.sku === variantSku ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart, cartItems, toast]);

  const clearCart = useCallback(() => {
    setCartItems([]);
    // Also clear from localStorage
    localStorage.removeItem('aura-attire-cart'); 
    toast({
      title: "Cart cleared",
      description: `Your shopping cart has been emptied.`,
    });
  }, [toast]);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity, // Assuming price is on main product for now
    0
  );

  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
