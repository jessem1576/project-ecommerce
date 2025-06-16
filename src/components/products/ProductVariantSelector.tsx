
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import type { Product, Review, ProductVariant } from '@/types';
import ProductImageGallery from '@/components/products/ProductImageGallery';
import AddToCartButton from '@/components/products/AddToCartButton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CURRENCY_SYMBOL, DEFAULT_LOCALE } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { Star, CheckCircle, MessageSquare, AlertTriangle } from 'lucide-react';
import ProductReviews from '@/components/products/ProductReviews';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductVariantSelectorProps {
  product: Product;
  reviews: Review[];
}

export default function ProductVariantSelector({ product, reviews }: ProductVariantSelectorProps) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

  const uniqueColors = useMemo(() => {
    const colors = new Set<string>();
    product.variants.forEach(variant => colors.add(variant.color));
    return Array.from(colors);
  }, [product.variants]);

  const allSizesForSelectedColor = useMemo(() => {
    if(!selectedColor) return [];
    const sizes = new Set<string>();
    product.variants
        .filter(variant => variant.color === selectedColor)
        .forEach(variant => sizes.add(variant.size));
    return Array.from(sizes).sort((a,b) => a.localeCompare(b)); // Basic sort for sizes
  }, [product.variants, selectedColor]);


  useEffect(() => {
    // Set default selected color and size
    if (uniqueColors.length > 0) {
      const initialColor = uniqueColors[0];
      setSelectedColor(initialColor);
      
      const sizesForInitialColor = product.variants
        .filter(v => v.color === initialColor && v.stock > 0)
        .map(v => v.size)
        .sort((a,b) => a.localeCompare(b));

      if (sizesForInitialColor.length > 0) {
        setSelectedSize(sizesForInitialColor[0]);
      } else {
        const firstAvailableVariant = product.variants.find(v => v.stock > 0);
        if (firstAvailableVariant) {
            setSelectedColor(firstAvailableVariant.color);
            setSelectedSize(firstAvailableVariant.size);
        } else {
            const firstVariantOverall = product.variants[0];
            if (firstVariantOverall) {
                setSelectedColor(firstVariantOverall.color);
                setSelectedSize(firstVariantOverall.size);
            }
        }
      }
    }
  }, [product.variants, uniqueColors]);

  useEffect(() => {
    if (selectedColor && selectedSize) {
      const variant = product.variants.find(
        v => v.color === selectedColor && v.size === selectedSize
      );
      setSelectedVariant(variant || null);
    } else {
      setSelectedVariant(null);
    }
  }, [selectedColor, selectedSize, product.variants]);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    const sizesForNewColor = product.variants
      .filter(v => v.color === color && v.stock > 0)
      .map(v => v.size)
      .sort((a,b) => a.localeCompare(b));
    if (sizesForNewColor.length > 0) {
      setSelectedSize(sizesForNewColor[0]);
    } else {
       const firstSizeForColor = product.variants.find(v => v.color === color)?.size;
       setSelectedSize(firstSizeForColor || null); 
    }
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };
  
  const getVariantStock = (color: string, size: string): number => {
    const variant = product.variants.find(v => v.color === color && v.size === size);
    return variant ? variant.stock : 0;
  };

  const mainImage = selectedVariant?.image || product.images[0];


  return (
    <div className="container mx-auto py-8 space-y-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div>
          <ProductImageGallery images={product.images} altText={product.name} mainImageOverride={mainImage} />
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
              <CardDescription className="text-base text-foreground/80 leading-relaxed mb-6">
                {product.description}
              </CardDescription>

              {uniqueColors.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-foreground mb-2">Color: <span className="font-semibold">{selectedColor}</span></h3>
                  <div className="flex flex-wrap gap-2">
                    {uniqueColors.map(color => (
                      <Button
                        key={color}
                        variant={selectedColor === color ? 'default' : 'outline'}
                        onClick={() => handleColorSelect(color)}
                        className={cn("px-3 py-1.5 h-auto text-sm", selectedColor === color && "ring-2 ring-primary ring-offset-2")}
                      >
                        {product.variants.find(v => v.color === color)?.image ? (
                          <Image src={product.variants.find(v => v.color === color)!.image!} alt={color} width={20} height={20} className="mr-2 rounded-sm" data-ai-hint="color swatch"/>
                        ) : null}
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {selectedColor && allSizesForSelectedColor.length > 0 && (
                 <div className="mb-6">
                    <h3 className="text-sm font-medium text-foreground mb-2">Size: <span className="font-semibold">{selectedSize}</span></h3>
                    <div className="flex flex-wrap gap-2">
                        {allSizesForSelectedColor.map(size => {
                        const stock = getVariantStock(selectedColor, size);
                        const isAvailable = stock > 0;
                        return (
                            <Button
                            key={size}
                            variant={selectedSize === size ? 'default' : 'outline'}
                            onClick={() => handleSizeSelect(size)}
                            disabled={!isAvailable}
                            className={cn(
                                "px-3 py-1.5 h-auto text-sm relative",
                                selectedSize === size && "ring-2 ring-primary ring-offset-2",
                                !isAvailable && "text-muted-foreground line-through"
                            )}
                            >
                            {size}
                            </Button>
                        );
                        })}
                    </div>
                </div>
              )}
              
              <Separator className="my-6" />
              
              <div className="space-y-2 text-sm mb-6">
                {selectedVariant ? (
                  <div className="flex items-center">
                    {selectedVariant.stock > 0 ? (
                      <CheckCircle size={18} className="text-green-500 mr-2" />
                    ) : (
                      <AlertTriangle size={18} className="text-destructive mr-2" />
                    )}
                    <span>
                      {selectedVariant.stock > 0 ? `${selectedVariant.stock} in stock` : 'Out of stock'}
                      {selectedColor && selectedSize && ` (Color: ${selectedColor}, Size: ${selectedSize})`}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center text-muted-foreground">
                     <AlertTriangle size={18} className="mr-2" />
                    <span>Please select color and size.</span>
                  </div>
                )}
              </div>
              
              <AddToCartButton product={product} selectedVariant={selectedVariant} />
            </CardContent>
          </Card>
        </div>
      </div>
      
      <ProductReviews reviews={reviews} productId={product.id} />
    </div>
  );
}
