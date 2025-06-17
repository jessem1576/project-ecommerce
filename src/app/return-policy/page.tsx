import type { Metadata } from 'next';
import { RotateCcw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Return & Refund Policy',
  description: "Understand Aura Attire's policy on returns, exchanges, and refunds.",
};

export default function ReturnPolicyPage() {
  return (
    <div className="container mx-auto py-12">
      <section className="text-center mb-10">
        <RotateCcw size={48} className="text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">Return & Refund Policy</h1>
        <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
      </section>

      <section className="max-w-3xl mx-auto prose prose-lg text-foreground/80">
        <p>At Aura Attire, we want you to be completely satisfied with your purchase. If you are not entirely happy, we're here to help.</p>

        <h2 className="font-headline">Returns</h2>
        <p>You have 30 calendar days to return an item from the date you received it.</p>
        <p>To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging. Your item needs to have the receipt or proof of purchase.</p>
        
        <h2 className="font-headline">Refunds</h2>
        <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.</p>
        <p>If your return is approved, we will initiate a refund to your original method of payment. You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>

        <h2 className="font-headline">Shipping Costs for Returns</h2>
        <p>You will be responsible for paying for your own shipping costs for returning your item. Original shipping costs are non-refundable. If you receive a refund, the cost of return shipping (if covered by us under special circumstances) will be deducted from your refund.</p>

        <h2 className="font-headline">Exchanges</h2>
        <p>If you need to exchange an item for a different size or color, please contact us first to ensure availability. You may be responsible for return shipping and the shipping of the new item.</p>

        <h2 className="font-headline">Damaged or Incorrect Items</h2>
        <p>If you received a damaged or incorrect item, please contact us immediately so we can resolve the issue. We will cover all shipping costs for returning and replacing damaged or incorrect items.</p>

        <h2 className="font-headline">Contact Us</h2>
        <p>If you have any questions on how to return your item to us, contact us at support@aurattire.com or through our <a href="/contact" className="text-accent hover:underline">contact page</a>.</p>
        <p><em>This policy is a template and may need to be adjusted to fit your specific business needs.</em></p>
      </section>
    </div>
  );
}
