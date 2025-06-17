import type { Metadata } from 'next';
import { Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shipping Policy',
  description: "Learn about Aura Attire's shipping methods, costs, processing times, and delivery estimates.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="container mx-auto py-12">
      <section className="text-center mb-10">
        <Truck size={48} className="text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">Shipping Policy</h1>
        <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
      </section>

      <section className="max-w-3xl mx-auto prose prose-lg text-foreground/80">
        <p>Thank you for shopping at Aura Attire! We are committed to delivering your order accurately, in good condition, and on time.</p>

        <h2 className="font-headline">Order Processing Time</h2>
        <p>All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.</p>
        <p>During peak seasons or sales events, processing times may be slightly longer. We appreciate your patience.</p>

        <h2 className="font-headline">Shipping Rates and Delivery Estimates</h2>
        <p>Shipping charges for your order will be calculated and displayed at checkout. We offer several shipping options to meet your needs.</p>
        
        <h3 className="font-headline">Domestic Shipping (USA)</h3>
        <ul>
          <li><strong>Standard Shipping:</strong> Estimated delivery within 3-5 business days. Costs typically range from $5 - $10.</li>
          <li><strong>Expedited Shipping:</strong> Estimated delivery within 1-3 business days. Costs typically range from $15 - $25.</li>
          <li><strong>Free Shipping:</strong> We offer free standard shipping on orders over $75 (before taxes and after discounts) within the continental USA.</li>
        </ul>

        <h3 className="font-headline">International Shipping</h3>
        <p>We offer international shipping to select countries. Shipping charges and delivery times vary significantly based on destination.</p>
        <p>Your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country. Aura Attire is not responsible for these charges if they are applied and are your responsibility as the customer.</p>

        <h2 className="font-headline">How do I check the status of my order?</h2>
        <p>When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.</p>
        <p>If you haven’t received your order within 10 days of receiving your shipping confirmation email, please contact us at support@aurattire.com with your name and order number, and we will look into it for you.</p>

        <h2 className="font-headline">Shipping to P.O. Boxes</h2>
        <p>Some carriers have limitations regarding P.O. Boxes. If we are unable to ship to your P.O. Box, we will contact you for an alternative address.</p>
        
        <h2 className="font-headline">Damages and Issues</h2>
        <p>Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>

        <h2 className="font-headline">Contact Us</h2>
        <p>If you have any further questions or concerns about your order's shipping, please do not hesitate to contact us at support@aurattire.com.</p>
        <p><em>This policy is a template and should be customized to reflect your actual shipping practices.</em></p>
      </section>
    </div>
  );
}
