"use client";

import type { CartItem } from '@/types';
import { useCart } from '@/hooks/useCart';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Plus, Minus } from 'lucide-react';
import { CURRENCY_SYMBOL, DEFAULT_LOCALE } from '@/lib/constants';

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard = ({ item }: CartItemCardProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0 && newQuantity <= item.product.stock) {
      updateQuantity(item.product.id, newQuantity);
    } else if (newQuantity <= 0) {
      updateQuantity(item.product.id, 0); // This will trigger removal in updateQuantity or handle directly
    }
  };
  
  const itemTotal = item.product.price * item.quantity;

  return (
    <div className="flex items-center gap-4 p-4 border-b last:border-b-0 hover:bg-secondary/30 transition-colors duration-200 rounded-md">
      <Link href={`/products/${item.product.id}`} className="shrink-0">
        <Image
          src={item.product.images[0]}
          alt={item.product.name}
          width={100}
          height={100}
          className="rounded-md object-cover aspect-square border"
          data-ai-hint="product item"
        />
      </Link>
      <div className="flex-grow space-y-1">
        <Link href={`/products/${item.product.id}`} className="hover:text-primary transition-colors">
          <h3 className="text-lg font-semibold font-headline">{item.product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground">
          Price: {CURRENCY_SYMBOL}
          {item.product.price.toLocaleString(DEFAULT_LOCALE, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </Button>
          <Input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
            min="1"
            max={item.product.stock}
            className="h-8 w-16 text-center"
            aria-label="Item quantity"
          />
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => handleQuantityChange(item.quantity + 1)}
            disabled={item.quantity >= item.product.stock}
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </Button>
        </div>
      </div>
      <div className="text-right space-y-2">
        <p className="text-lg font-semibold">
          {CURRENCY_SYMBOL}
          {itemTotal.toLocaleString(DEFAULT_LOCALE, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          onClick={() => removeFromCart(item.product.id)}
          aria-label="Remove item from cart"
        >
          <X size={20} />
        </Button>
      </div>
    </div>
  );
};

export default CartItemCard;
