import ContactForm from '@/components/contact/ContactForm';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ShopWave. We are here to help!',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question about our products, an order, or anything else, our team is ready to answer all your questions.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        <div className="space-y-8 bg-accent/10 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-headline text-accent-foreground mb-6">Get in Touch</h2>
          <div className="flex items-start gap-4">
            <MapPin size={24} className="text-accent mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-accent-foreground">Our Address</h3>
              <p className="text-accent-foreground/80">123 ShopWave Avenue, Commerce City, CC 54321</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail size={24} className="text-accent mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-accent-foreground">Email Us</h3>
              <p className="text-accent-foreground/80">support@shopwave.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone size={24} className="text-accent mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-accent-foreground">Call Us</h3>
              <p className="text-accent-foreground/80">(555) 123-4567</p>
            </div>
          </div>
          <p className="text-sm text-accent-foreground/70 pt-4">
            Our support team is available Monday to Friday, 9 AM - 5 PM (EST).
          </p>
        </div>
        
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
