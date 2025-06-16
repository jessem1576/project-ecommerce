
export interface ProductVariant {
  sku: string; // Stock Keeping Unit, unique for each variant
  size: string;
  color: string;
  stock: number;
  image?: string; // Optional: specific image for this variant (e.g., color swatch)
}

export interface Product {
  id: string; // Main product ID
  name: string;
  description: string; // Potentially AI-enriched description
  baseDescription: string; // Original, core description
  price: number; // Base price, could be overridden by variant if needed later
  images: string[]; // General product images
  category: string; // Updated fashion categories
  rating: number;
  variants: ProductVariant[];
}

export interface CartItem {
  product: Product; // Reference to the main product
  variant: ProductVariant; // The specific variant added to cart
  quantity: number;
}

export interface Review {
  id: string;
  productId: string; // Links to the main product ID
  author: string;
  avatarUrl?: string;
  rating: number; // Typically 1-5
  comment: string;
  date: string; // ISO date string or formatted date string
}
