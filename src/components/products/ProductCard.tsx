import type { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CURRENCY_SYMBOL, DEFAULT_LOCALE } from '@/lib/constants';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl flex flex-col h-full group">
      <Link href={`/products/${product.id}`} className="block">
        <CardHeader className="p-0 relative aspect-square overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            data-ai-hint="product photo"
          />
        </CardHeader>
      </Link>
      <CardContent className="p-4 flex-grow">
        <Link href={`/products/${product.id}`} className="block">
          <CardTitle className="text-lg font-headline mb-1 leading-tight group-hover:text-primary transition-colors">{product.name}</CardTitle>
        </Link>
        <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
        <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className={i < Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/50"} />
            ))}
            <span className="text-xs text-muted-foreground ml-1">({product.rating.toFixed(1)})</span>
        </div>
        <p className="text-xl font-semibold text-primary">
          {CURRENCY_SYMBOL}
          {product.price.toLocaleString(DEFAULT_LOCALE, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full" variant="outline">
          <Link href={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
