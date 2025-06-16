"use client";

import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CURRENCY_SYMBOL, DEFAULT_LOCALE } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';

const CartSummary = () => {
  const { cartTotal, clearCart } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    // Mock checkout
    toast({
      title: "Checkout Initiated",
      description: "This is a mock checkout. No payment will be processed.",
    });
    // Optionally clear cart after mock checkout
    // clearCart(); 
  };

  return (
    <Card className="shadow-lg sticky top-24">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between text-lg">
          <span>Subtotal</span>
          <span>
            {CURRENCY_SYMBOL}
            {cartTotal.toLocaleString(DEFAULT_LOCALE, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Shipping</span>
          <span>Calculated at next step</span>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Tax</span>
          <span>Calculated at next step</span>
        </div>
        <Separator />
        <div className="flex justify-between text-xl font-bold text-primary">
          <span>Total</span>
          <span>
            {CURRENCY_SYMBOL}
            {cartTotal.toLocaleString(DEFAULT_LOCALE, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button size="lg" className="w-full" onClick={handleCheckout} disabled={cartTotal === 0}>
          Proceed to Checkout
        </Button>
        <Button variant="outline" className="w-full" onClick={clearCart} disabled={cartTotal === 0}>
          Clear Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartSummary;
