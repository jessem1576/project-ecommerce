
"use client";

import CartContext from '@/context/CartContext';
import { useContext } from 'react';
import type { Product, ProductVariant } from '@/types'; // Ensure ProductVariant is imported if used in type signature

// Define a more specific type for the context value if needed, or rely on CartContextType from CartContext.tsx
// For example, if CartContextType is properly exported and includes the correct signatures.

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  // If you need to expose a modified addToCart (e.g. simplified one), you could wrap it here.
  // But for now, let's assume the direct context value is fine.
  // Example of wrapping/modifying (not strictly necessary based on current changes):
  // const { addToCart: originalAddToCart, ...restOfContext } = context;
  // const simplifiedAddToCart = (product: Product, quantity?: number) => {
  //    // This would be problematic if a variant is always required.
  //    // For the current task, we always need a variant.
  // };

  return context;
};
