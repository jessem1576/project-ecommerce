import { mockProducts, mockReviews } from '@/lib/mockData';
import type { Product, Review } from '@/types';
import ProductImageGallery from '@/components/products/ProductImageGallery';
import AddToCartButton from '@/components/products/AddToCartButton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CURRENCY_SYMBOL, DEFAULT_LOCALE } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { Star, CheckCircle, MessageSquare } from 'lucide-react';
import { notFound } from 'next/navigation';
import ProductReviews from '@/components/products/ProductReviews';

interface ProductPageParams {
  params: { id: string };
}

export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: product.id,
  }));
}

const getProductById = (id: string): Product | undefined => {
  return mockProducts.find((p) => p.id === id);
};

const getReviewsByProductId = (productId: string): Review[] => {
  return mockReviews.filter(review => review.productId === productId);
}

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
  const reviews = getReviewsByProductId(params.id);

  return (
    <div className="container mx-auto py-8 space-y-12">
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
                <span className="text-sm text-muted-foreground mx-1">|</span>
                <MessageSquare size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{reviews.length} review{reviews.length !== 1 ? 's' : ''}</span>
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
              </div>

              {product.stock > 0 && (
                <AddToCartButton product={product} />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      <ProductReviews reviews={reviews} productId={product.id} />
    </div>
  );
}
