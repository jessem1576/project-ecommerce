import type { Metadata } from 'next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Find answers to common questions about ShopWave products, orders, shipping, and more.',
};

const faqItems = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and ShopWave Gift Cards.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order has shipped, you will receive an email with a tracking number. You can also track your order directly from your account page if you are logged in.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items. Please visit our [Return Policy](/return-policy) page for full details and conditions.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping times vary depending on your location and the shipping method selected. Standard shipping typically takes 3-5 business days within the continental US. Please see our [Shipping Policy](/shipping-policy) for more information.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to many international destinations. Shipping costs and times will vary. Please check our [Shipping Policy](/shipping-policy) or proceed to checkout to see options for your country.",
  },
  {
    question: "How do I create an account?",
    answer: "You can create an account by clicking the 'Sign Up' link in the header or during the checkout process. It's quick, easy, and allows you to track orders and save your preferences.",
  }
];

export default function FaqPage() {
  return (
    <div className="container mx-auto py-12">
      <section className="text-center mb-12">
        <HelpCircle size={48} className="text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Have questions? We've got answers! If you can't find what you're looking for, please don't hesitate to <a href="/contact" className="text-accent hover:underline">contact us</a>.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
