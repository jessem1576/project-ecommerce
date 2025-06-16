
"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ProductImageGalleryProps {
  images: string[];
  altText: string;
  mainImageOverride?: string | null;
}

const ProductImageGallery = ({ images, altText, mainImageOverride }: ProductImageGalleryProps) => {
  const [currentMainImage, setCurrentMainImage] = useState(mainImageOverride || images[0] || "https://placehold.co/600x400.png");

  useEffect(() => {
    setCurrentMainImage(mainImageOverride || images[0] || "https://placehold.co/600x400.png");
  }, [mainImageOverride, images]);

  if (!images || images.length === 0) {
    return (
      <Card className="aspect-square flex items-center justify-center bg-muted">
        <p className="text-muted-foreground">No image available</p>
      </Card>
    );
  }

  return (
    <div className="grid gap-4">
      <Card className="overflow-hidden shadow-lg rounded-lg">
        <CardContent className="p-0">
          <div className="aspect-square relative">
            <Image
              src={currentMainImage}
              alt={`${altText} - Main View`}
              fill
              className="object-cover transition-opacity duration-300 ease-in-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              data-ai-hint="product detail"
            />
          </div>
        </CardContent>
      </Card>
      {images.length > 1 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentMainImage(image)}
              className={cn(
                "aspect-square relative overflow-hidden rounded-md border-2 transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                currentMainImage === image ? "border-primary ring-2 ring-primary" : "border-transparent hover:border-muted-foreground/50"
              )}
              aria-label={`View image ${index + 1} of ${altText}`}
            >
              <Image
                src={image}
                alt={`${altText} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="10vw"
                data-ai-hint="product thumbnail"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;
