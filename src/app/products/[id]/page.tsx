
import { mockProducts, mockReviews } from '@/lib/mockData';
import type { Product, Review } from '@/types';
import { notFound } from 'next/navigation';
import ProductVariantSelector from '@/components/products/ProductVariantSelector'; // Updated import

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

  // Use a key for ProductVariantSelector if product changes to re-initiate state
  return <ProductVariantSelector product={product} reviews={reviews} key={product.id} />;
}
