import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Users, Globe, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

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

      <section className="bg-secondary/50 p-8 md:p-12 rounded-lg shadow-md">
        <h2 className="text-3xl font-headline text-primary text-center mb-6">Terms & Conditions</h2>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <p>Welcome to ShopWave! These terms and conditions outline the rules and regulations for the use of ShopWave's Website, located at shopwave.com.</p>
          <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use ShopWave if you do not agree to take all of the terms and conditions stated on this page.</p>
          <h3 className="font-headline">Cookies</h3>
          <p>We employ the use of cookies. By accessing ShopWave, you agreed to use cookies in agreement with the ShopWave's Privacy Policy.</p>
          <h3 className="font-headline">License</h3>
          <p>Unless otherwise stated, ShopWave and/or its licensors own the intellectual property rights for all material on ShopWave. All intellectual property rights are reserved. You may access this from ShopWave for your own personal use subjected to restrictions set in these terms and conditions.</p>
          <p><em>This is a summary. For full terms, please refer to a dedicated legal page (not implemented in this demo).</em></p>
        </div>
      </section>
    </div>
  );
}
