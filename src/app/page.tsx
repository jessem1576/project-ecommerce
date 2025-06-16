"use client";

import React, { useState, useMemo } from 'react';
import ProductCard from '@/components/products/ProductCard';
import { mockProducts } from '@/lib/mockData';
import type { Product } from '@/types';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CATEGORIES } from '@/lib/constants';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { XIcon, ListFilter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortOption, setSortOption] = useState<string>('name-asc');

  const minPrice = useMemo(() => Math.min(...mockProducts.map(p => p.price), 0), [mockProducts]);
  const maxPrice = useMemo(() => Math.max(...mockProducts.map(p => p.price), 500), [mockProducts]);
  
  React.useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...mockProducts];

    if (searchTerm) {
      products = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      products = products.filter((product) => product.category === selectedCategory);
    }

    products = products.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    switch (sortOption) {
      case 'name-asc':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-asc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        products.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return products;
  }, [searchTerm, selectedCategory, priceRange, sortOption, mockProducts]);
  
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setPriceRange([minPrice, maxPrice]);
    setSortOption('name-asc');
  };

  return (
    <div className="space-y-8">
      <section className="text-center py-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-lg shadow-inner">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">Discover Our Collection</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Browse through a wide range of high-quality products. Find what you love at ShopWave.
        </p>
      </section>

      <Card className="p-4 md:p-6 shadow-lg">
        <CardContent className="p-0 space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-headline text-primary flex items-center">
              <ListFilter className="mr-2 h-6 w-6" />
              Filters
            </h2>
          </div>
          <Input
            type="text"
            placeholder="Search products by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-base"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label htmlFor="category-select" className="block text-sm font-medium text-foreground mb-1">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger id="category-select" className="w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="md:col-span-1"> {/* Changed from md:col-span-2 */}
              <label className="block text-sm font-medium text-foreground mb-1">
                Price Range: ${priceRange[0].toFixed(0)} - ${priceRange[1].toFixed(0)}
              </label>
              <Slider
                min={minPrice}
                max={maxPrice}
                step={1}
                value={[priceRange[0], priceRange[1]]}
                onValueChange={(value) => setPriceRange(value as [number, number])}
                className="mt-2"
              />
            </div>
            
            <div>
              <label htmlFor="sort-select" className="block text-sm font-medium text-foreground mb-1">Sort by</label>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger id="sort-select" className="w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                  <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end mt-4">
              <Button onClick={resetFilters} variant="outline" size="sm">
                  <XIcon className="mr-2 h-4 w-4" /> Reset Filters
              </Button>
          </div>
        </CardContent>
      </Card>

      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No products match your criteria.</p>
          <p className="text-sm text-muted-foreground mt-2">Try adjusting your filters or search term.</p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
