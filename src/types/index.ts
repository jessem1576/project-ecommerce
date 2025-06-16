export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  rating: number;
  stock: number;
  baseDescription: string; // Original description before AI enrichment
  keywords?: string[]; // From AI
  qualities?: string[]; // From AI
  enrichedDescription?: string; // From AI
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface EnrichedProductInfo {
  enrichedDescription: string;
  suggestedKeywords: string;
  importantQualities: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  avatarUrl?: string;
  rating: number; // Typically 1-5
  comment: string;
  date: string; // ISO date string or formatted date string
}
