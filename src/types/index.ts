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
}

export interface CartItem {
  product: Product;
  quantity: number;
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
