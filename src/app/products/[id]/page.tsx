import { mockProducts } from '@/lib/mockData';
import type { Product } from '@/types';
import ProductImageGallery from '@/components/products/ProductImageGallery';
import EnrichmentSection from '@/components/products/EnrichmentSection';
import AddToCartButton from '@/components/products/AddToCartButton'; // Will create this
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CURRENCY_SYMBOL, DEFAULT_LOCALE } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { Star, CheckCircle } from 'lucide-react';
import { notFound } from 'next/navigation';

interface ProductPageParams {
  params: { id: string };
}

// This function can be used if you are using dynamic rendering with generateStaticParams
// For this mock data setup, it's not strictly necessary but good for demonstration.
export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: product.id,
  }));
}

const getProductById = (id: string): Product | undefined => {
  return mockProducts.find((p) => p.id === id);
};

export async function generateMetadata({ params }: ProductPageParams) {
  const product = getProductById(params.id);
  if (!product) {
    return { title: 'Product Not Found' };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: ProductPageParams) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div>
          <ProductImageGallery images={product.images} altText={product.name} />
        </div>
        <div className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2">{product.category}</Badge>
              <CardTitle className="text-3xl lg:text-4xl font-headline text-primary">{product.name}</CardTitle>
              <div className="flex items-center gap-2 pt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={20} className={i < Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/50"} />
                ))}
                <span className="text-sm text-muted-foreground">({product.rating.toFixed(1)} rating)</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-foreground mb-4">
                {CURRENCY_SYMBOL}
                {product.price.toLocaleString(DEFAULT_LOCALE, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <CardDescription className="text-base text-foreground/80 leading-relaxed">
                {product.description}
              </CardDescription>
              
              <Separator className="my-6" />
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span>{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</span>
                </div>
                {/* Add more product details here if needed */}
              </div>

              {product.stock > 0 && (
                <AddToCartButton product={product} />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      <EnrichmentSection 
        initialProductName={product.name} 
        initialBaseDescription={product.baseDescription} 
      />
    </div>
  );
}
