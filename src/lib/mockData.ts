
import type { Product, Review, ProductVariant } from '@/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Elegant Smartwatch X1',
    description: 'Stay connected and stylish with the Smartwatch X1. Features heart rate monitoring, GPS, and a vibrant AMOLED display. A perfect blend of technology and fashion.',
    baseDescription: 'A feature-rich smartwatch.',
    price: 199.99,
    images: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    category: 'Accessories',
    rating: 4.5,
    variants: [
      { sku: 'X1-BLK-STD', color: 'Midnight Black', size: 'Standard Strap', stock: 20, image: 'https://placehold.co/100x100.png?text=BLK' },
      { sku: 'X1-SLV-STD', color: 'Silver Steel', size: 'Standard Strap', stock: 15, image: 'https://placehold.co/100x100.png?text=SLV' },
      { sku: 'X1-RGD-STD', color: 'Rose Gold', size: 'Standard Strap', stock: 15, image: 'https://placehold.co/100x100.png?text=RGD' },
    ],
  },
  {
    id: '2',
    name: 'Luxury Silk Scarf',
    description: 'Wrap yourself in luxury with this 100% pure silk scarf. Features a stunning hand-painted design, perfect for elevating any outfit.',
    baseDescription: 'A 100% pure silk scarf.',
    price: 79.50,
    images: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    category: 'Accessories',
    rating: 4.8,
    variants: [
      { sku: 'SCRF-NVYPLS-OS', color: 'Navy Paisley', size: 'One Size', stock: 50, image: 'https://placehold.co/100x100.png?text=NVY' },
      { sku: 'SCRF-RBYFLR-OS', color: 'Ruby Floral', size: 'One Size', stock: 40, image: 'https://placehold.co/100x100.png?text=RED' },
      { sku: 'SCRF-CRMABS-OS', color: 'Cream Abstract', size: 'One Size', stock: 30, image: 'https://placehold.co/100x100.png?text=CRM' },
    ],
  },
  {
    id: '3',
    name: 'Classic Trench Coat',
    description: "A timeless wardrobe staple, this classic trench coat offers sophistication and practicality. Crafted from water-resistant cotton gabardine, it features a double-breasted front, belted waist, and traditional epaulets. Perfect for transitional weather and chic city strolls.",
    baseDescription: 'A classic double-breasted trench coat.',
    price: 189.99,
    images: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    category: 'Outerwear',
    rating: 4.7,
    variants: [
      { sku: 'TRNCH-BGE-S', color: 'Beige', size: 'S', stock: 10, image: 'https://placehold.co/100x100.png?text=BGE' },
      { sku: 'TRNCH-BGE-M', color: 'Beige', size: 'M', stock: 15, image: 'https://placehold.co/100x100.png?text=BGE' },
      { sku: 'TRNCH-BGE-L', color: 'Beige', size: 'L', stock: 12, image: 'https://placehold.co/100x100.png?text=BGE' },
      { sku: 'TRNCH-NVY-M', color: 'Navy', size: 'M', stock: 8, image: 'https://placehold.co/100x100.png?text=NVY' },
    ],
  },
  {
    id: '4',
    name: 'High-Waisted Skinny Jeans',
    description: "Flatter your figure with these high-waisted skinny jeans. Made from premium stretch denim for ultimate comfort and a perfect fit, they are versatile for casual daywear or dressed-up evening looks.",
    baseDescription: 'Comfortable high-waisted stretch skinny jeans.',
    price: 89.00,
    images: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    category: 'Bottoms',
    rating: 4.5,
    variants: [
      { sku: 'JEANS-BLK-26', color: 'Jet Black', size: '26', stock: 20, image: 'https://placehold.co/100x100.png?text=BLK' },
      { sku: 'JEANS-BLK-28', color: 'Jet Black', size: '28', stock: 25, image: 'https://placehold.co/100x100.png?text=BLK' },
      { sku: 'JEANS-BLD-28', color: 'Dark Indigo Wash', size: '28', stock: 22, image: 'https://placehold.co/100x100.png?text=BLU' },
      { sku: 'JEANS-BLD-30', color: 'Dark Indigo Wash', size: '30', stock: 18, image: 'https://placehold.co/100x100.png?text=BLU' },
    ],
  },
  {
    id: '5',
    name: 'Leather Crossbody Bag',
    description: "Chic and practical, this genuine leather crossbody bag is perfect for everyday elegance. Features multiple compartments, gold-tone hardware, and an adjustable strap for comfort and versatility.",
    baseDescription: 'A genuine leather crossbody bag with multiple compartments.',
    price: 120.00,
    images: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    category: 'Accessories',
    rating: 4.9,
    variants: [
      { sku: 'BAG-CRS-BLK', color: 'Classic Black', size: 'One Size', stock: 25, image: 'https://placehold.co/100x100.png?text=BLK' },
      { sku: 'BAG-CRS-TAN', color: 'Cognac Tan', size: 'One Size', stock: 20, image: 'https://placehold.co/100x100.png?text=TAN' },
      { sku: 'BAG-CRS-BRG', color: 'Burgundy Red', size: 'One Size', stock: 15, image: 'https://placehold.co/100x100.png?text=RED' },
    ],
  },
  {
    id: '6',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Immerse yourself in pure sound with these premium wireless headphones. Active noise cancellation, plush earcups, and an impressive 30-hour battery life for uninterrupted listening pleasure.',
    baseDescription: 'Premium headphones with active noise cancelling.',
    price: 249.99,
    images: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    category: 'Accessories',
    rating: 4.7,
    variants: [
      { sku: 'HP-NC-MTBLK', color: 'Matte Black', size: 'Adjustable', stock: 30, image: 'https://placehold.co/100x100.png?text=MBK' },
      { sku: 'HP-NC-ARWHT', color: 'Arctic White', size: 'Adjustable', stock: 25, image: 'https://placehold.co/100x100.png?text=AWT' },
      { sku: 'HP-NC-MDBLU', color: 'Midnight Blue', size: 'Adjustable', stock: 25, image: 'https://placehold.co/100x100.png?text=MBL' },
    ],
  },
  {
    id: '7',
    name: 'Organic Cotton Crewneck T-Shirt',
    description: 'A wardrobe essential, this crewneck t-shirt is crafted from 100% organic cotton for a soft, breathable feel. Ethically sourced and built for everyday comfort and style.',
    baseDescription: 'A basic 100% organic cotton t-shirt.',
    price: 29.95,
    images: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    category: 'Tops',
    rating: 4.4,
    variants: [
      { sku: 'TSHRT-CRW-WHT-S', color: 'Optic White', size: 'S', stock: 50, image: 'https://placehold.co/100x100.png?text=WHT' },
      { sku: 'TSHRT-CRW-WHT-M', color: 'Optic White', size: 'M', stock: 60, image: 'https://placehold.co/100x100.png?text=WHT' },
      { sku: 'TSHRT-CRW-WHT-L', color: 'Optic White', size: 'L', stock: 40, image: 'https://placehold.co/100x100.png?text=WHT' },
      { sku: 'TSHRT-CRW-BLK-M', color: 'Classic Black', size: 'M', stock: 55, image: 'https://placehold.co/100x100.png?text=BLK' },
      { sku: 'TSHRT-CRW-GRY-L', color: 'Heather Grey', size: 'L', stock: 35, image: 'https://placehold.co/100x100.png?text=GRY' },
    ],
  },
  {
    id: '8',
    name: 'Bohemian Floral Maxi Dress',
    description: "Channel effortless chic in this bohemian floral maxi dress. Featuring a flattering V-neck, delicate ruffle details, and a lightweight, flowy fabric, it's perfect for sunny days and special occasions.",
    baseDescription: 'A long, flowy floral print maxi dress.',
    price: 75.50,
    images: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    category: 'Dresses',
    rating: 4.6,
    variants: [
      { sku: 'DRESS-MAXI-BLFL-S', color: 'Azure Blue Floral', size: 'S', stock: 15, image: 'https://placehold.co/100x100.png?text=BFL' },
      { sku: 'DRESS-MAXI-BLFL-M', color: 'Azure Blue Floral', size: 'M', stock: 20, image: 'https://placehold.co/100x100.png?text=BFL' },
      { sku: 'DRESS-MAXI-BLFL-L', color: 'Azure Blue Floral', size: 'L', stock: 18, image: 'https://placehold.co/100x100.png?text=BFL' },
      { sku: 'DRESS-MAXI-PKFL-M', color: 'Dusty Pink Floral', size: 'M', stock: 12, image: 'https://placehold.co/100x100.png?text=PFL' },
    ],
  },
];

export const mockReviews: Review[] = [
  {
    id: 'review1',
    productId: '1', // Elegant Smartwatch X1
    author: 'Sophie Chen',
    rating: 5,
    comment: 'Absolutely love this smartwatch! The rose gold is beautiful and the features are amazing for tracking my workouts. Battery life is decent too.',
    date: '2024-05-10',
    avatarUrl: 'https://placehold.co/40x40.png?text=SC'
  },
  {
    id: 'review2',
    productId: '1', // Elegant Smartwatch X1
    author: 'Mark Robinson',
    rating: 4,
    comment: 'Great watch, very functional. Sometimes the GPS takes a moment to connect, but overall very satisfied with the Silver Steel version.',
    date: '2024-05-15',
    avatarUrl: 'https://placehold.co/40x40.png?text=MR'
  },
  {
    id: 'review3',
    productId: '2', // Luxury Silk Scarf
    author: 'Isabelle Moreau',
    rating: 5,
    comment: 'The silk scarf is even more beautiful in person. The Navy Paisley design is exquisite and the material feels luxurious.',
    date: '2024-04-20',
    avatarUrl: 'https://placehold.co/40x40.png?text=IM'
  },
  {
    id: 'review4',
    productId: '4', // High-Waisted Skinny Jeans
    author: 'Chloe Davis',
    rating: 5,
    comment: 'Finally, jeans that fit perfectly! The high waist is so flattering and the stretch denim is super comfortable. I got the Dark Indigo Wash.',
    date: '2024-05-01',
    avatarUrl: 'https://placehold.co/40x40.png?text=CD'
  },
  {
    id: 'review5',
    productId: '7', // Organic Cotton Crewneck T-Shirt
    author: 'Liam Smith',
    rating: 5,
    comment: 'Best basic tee I\'ve owned. The Optic White is crisp and the organic cotton feels great. Already ordered more in other colors.',
    date: '2024-05-22',
    avatarUrl: 'https://placehold.co/40x40.png?text=LS'
  },
   {
    id: 'review6',
    productId: '3', // Classic Trench Coat
    author: 'Olivia Brown',
    rating: 4,
    comment: 'A truly classic trench. The Beige color is perfect. It runs a little large, so I might size down next time, but the quality is excellent.',
    date: '2024-06-01',
    avatarUrl: 'https://placehold.co/40x40.png?text=OB'
  },
];
