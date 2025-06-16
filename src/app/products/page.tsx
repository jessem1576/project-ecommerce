
import type { Metadata } from 'next';
import ProductsPageClientContent from '@/components/products/ProductsPageClientContent';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'All Products',
  description: 'Browse all products available at ShopWave. Filter and sort to find exactly what you need.',
};

// Helper component for Suspense fallback
function LoadingFilters() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-lg shadow-inner">
        <div className="h-10 bg-muted rounded w-1/2 mx-auto mb-4 animate-pulse"></div>
        <div className="h-6 bg-muted rounded w-3/4 mx-auto animate-pulse"></div>
      </section>
      <div className="p-4 md:p-6 shadow-lg rounded-lg bg-card">
        <div className="h-8 bg-muted rounded w-1/4 mb-4 animate-pulse"></div>
        <div className="h-10 bg-muted rounded w-full mb-4 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="h-10 bg-muted rounded w-full animate-pulse"></div>
          <div className="h-10 bg-muted rounded w-full animate-pulse"></div>
          <div className="h-10 bg-muted rounded w-full animate-pulse"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="rounded-lg border bg-card text-card-foreground shadow-sm animate-pulse">
            <div className="aspect-square bg-muted rounded-t-lg"></div>
            <div className="p-4 space-y-2">
              <div className="h-6 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-8 bg-muted rounded w-1/3"></div>
            </div>
            <div className="p-4 pt-0">
              <div className="h-10 bg-muted rounded w-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function ProductsPage() {
  // Wrap client component in Suspense because it uses useSearchParams()
  return (
    <Suspense fallback={<LoadingFilters />}>
      <ProductsPageClientContent />
    </Suspense>
  );
}
