"use client";

import { useCart } from '@/hooks/useCart';
import CartItemCard from './CartItemCard';
import CartSummary from './CartSummary';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const CartClientContent = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingBag size={64} className="mx-auto text-muted-foreground mb-4" />
        <h2 className="text-2xl font-headline font-semibold mb-2">Your Cart is Empty</h2>
        <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild size="lg">
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-2 space-y-4 bg-card p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-headline font-semibold mb-4 border-b pb-2">Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</h2>
        {cartItems.map((item) => (
          <CartItemCard key={item.product.id} item={item} />
        ))}
      </div>
      <div className="md:col-span-1">
        <CartSummary />
      </div>
    </div>
  );
};

export default CartClientContent;
