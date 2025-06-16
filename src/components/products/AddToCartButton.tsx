"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity > 0 && quantity <= product.stock) {
      addToCart(product, quantity);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if (isNaN(value) || value < 1) {
      value = 1;
    } else if (value > product.stock) {
      value = product.stock;
    }
    setQuantity(value);
  };

  return (
    <div className="mt-6 flex items-center gap-4">
      <div className="w-24">
        <Input 
          type="number" 
          value={quantity} 
          onChange={handleQuantityChange}
          min="1"
          max={product.stock}
          className="text-center"
          aria-label="Quantity"
        />
      </div>
      <Button 
        size="lg" 
        onClick={handleAddToCart} 
        disabled={product.stock === 0 || quantity > product.stock}
        className="flex-grow sm:flex-grow-0"
      >
        <ShoppingCart className="mr-2 h-5 w-5" />
        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
      </Button>
    </div>
  );
}
