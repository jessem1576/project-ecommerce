import CartClientContent from '@/components/cart/CartClientContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Review items in your shopping cart.',
};

export default function CartPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl md:text-4xl font-headline font-bold mb-8 text-center">Shopping Cart</h1>
      <CartClientContent />
    </div>
  );
}
