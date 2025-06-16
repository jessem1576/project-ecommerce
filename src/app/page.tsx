
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockProducts } from '@/lib/mockData';
import ProductCard from '@/components/products/ProductCard';
import type { Product } from '@/types';
import { ArrowRight, Tag, Sparkles } from 'lucide-react';
import { CATEGORIES } from '@/lib/constants';

// Select a few products as "new arrivals" (e.g., the first 4)
const newArrivals: Product[] = mockProducts.slice(0, 4);

// Select a few categories to feature
const featuredCategories = CATEGORIES.slice(0, 3); // e.g., Electronics, Clothing, Books

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-secondary/20 to-accent/10 py-20 px-4 rounded-lg shadow-xl overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          {/* Optional background image or pattern can be added here */}
          {/* <Image src="https://placehold.co/1200x400.png" alt="Background" layout="fill" objectFit="cover" data-ai-hint="abstract background" /> */}
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary mb-6">
            Welcome to ShopWave
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Discover a world of quality, innovation, and style. Your next favorite find is just a click away.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-6 rounded-full shadow-lg transform hover:scale-105 transition-transform">
            <Link href="/products">
              Shop All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-primary flex items-center justify-center">
            <Tag className="mr-3 h-8 w-8" />
            Featured Categories
          </h2>
          <p className="text-lg text-foreground/70 mt-2">Explore our popular collections.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCategories.map((category) => (
            <Link key={category} href={`/products?category=${encodeURIComponent(category)}`} className="block group">
              <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-primary transform group-hover:-translate-y-1">
                <CardHeader className="p-0 relative aspect-[4/3] bg-secondary/50 flex items-center justify-center">
                  <Image 
                    src={`https://placehold.co/400x300.png`} 
                    alt={category} 
                    width={400}
                    height={300}
                    className="object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                    data-ai-hint={category.toLowerCase().split(' ')[0]}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <CardTitle className="text-2xl font-headline text-primary group-hover:text-accent transition-colors">
                    {category}
                  </CardTitle>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-primary flex items-center justify-center">
            <Sparkles className="mr-3 h-8 w-8" />
            New Arrivals
          </h2>
          <p className="text-lg text-foreground/70 mt-2">Check out the latest additions to our collection.</p>
        </div>
        {newArrivals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newArrivals.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No new arrivals at the moment. Check back soon!</p>
        )}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/products">
              View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
