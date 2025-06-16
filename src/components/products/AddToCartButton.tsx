
"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import type { Product, ProductVariant } from "@/types";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface AddToCartButtonProps {
  product: Product;
  selectedVariant: ProductVariant | null;
}

export default function AddToCartButton({ product, selectedVariant }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Reset quantity when selected variant changes or becomes null
    setQuantity(1);
  }, [selectedVariant]);

  const handleAddToCart = () => {
    if (!selectedVariant) {
      toast({
        title: "Selection Required",
        description: "Please select a color and size.",
        variant: "destructive",
      });
      return;
    }
    if (quantity > 0 && quantity <= selectedVariant.stock) {
      addToCart(product, selectedVariant, quantity);
    } else if (quantity > selectedVariant.stock) {
        toast({
            title: "Not enough stock",
            description: `Only ${selectedVariant.stock} available.`,
            variant: "destructive",
        });
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    const maxStock = selectedVariant ? selectedVariant.stock : product.variants.reduce((sum, v) => sum + v.stock, 0);

    if (isNaN(value) || value < 1) {
      value = 1;
    } else if (value > maxStock && maxStock > 0) {
      value = maxStock;
    } else if (maxStock === 0) {
        value = 1; // Allow setting to 1 even if stock is 0, button will be disabled
    }
    setQuantity(value);
  };

  const isButtonDisabled = !selectedVariant || selectedVariant.stock === 0 || quantity > (selectedVariant?.stock || 0);

  return (
    <div className="mt-6 flex items-center gap-4">
      <div className="w-24">
        <Input 
          type="number" 
          value={quantity} 
          onChange={handleQuantityChange}
          min="1"
          max={selectedVariant?.stock || 1} // Fallback to 1 if no variant or stock 0
          className="text-center"
          aria-label="Quantity"
          disabled={!selectedVariant || (selectedVariant && selectedVariant.stock === 0)}
        />
      </div>
      <Button 
        size="lg" 
        onClick={handleAddToCart} 
        disabled={isButtonDisabled}
        className="flex-grow sm:flex-grow-0"
      >
        <ShoppingCart className="mr-2 h-5 w-5" />
        {!selectedVariant ? 'Select Variant' : selectedVariant.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
      </Button>
    </div>
  );
}
