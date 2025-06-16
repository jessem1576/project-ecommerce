import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Users, Globe, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About ShopWave',
  description: 'Learn more about ShopWave, our mission, values, and what makes us special.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 space-y-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6">About ShopWave</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          At ShopWave, we're passionate about bringing you an unparalleled shopping experience. We believe in quality, innovation, and the joy of discovering products that enhance your life.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-headline text-primary mb-4">Our Mission</h2>
          <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
            Our mission is to curate a diverse collection of high-quality products, making them accessible to everyone, everywhere. We strive to create a seamless and enjoyable online shopping journey, powered by cutting-edge technology and a customer-first approach.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            We are committed to sustainability, ethical sourcing, and supporting artisans and small businesses. Every purchase at ShopWave contributes to a larger vision of a more connected and conscious marketplace.
          </p>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
          <Image 
            src="https://placehold.co/600x400.png" 
            alt="ShopWave Team Working" 
            fill 
            className="object-cover"
            data-ai-hint="team collaboration"
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-headline text-primary text-center mb-10">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Award, title: "Quality First", description: "We handpick products that meet our stringent quality standards, ensuring you receive only the best." },
            { icon: Users, title: "Customer Obsession", description: "Our customers are at the heart of everything we do. We aim to exceed your expectations at every turn." },
            { icon: Globe, title: "Global & Inclusive", description: "We embrace diversity and strive to offer products that cater to a wide range of tastes and needs." },
            { icon: ShieldCheck, title: "Trust & Transparency", description: "We believe in honest communication and building lasting relationships based on trust." },
          ].map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                  <value.icon size={32} className="text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center py-8">
        <p className="text-lg text-foreground/80">
          For more details on our operations, please see our {' '}
          <Link href="/terms-conditions" className="text-primary hover:underline">Terms & Conditions</Link> and {' '}
          <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
        </p>
      </section>
    </div>
  );
}
