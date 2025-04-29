
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';

// Categories derived from product data
const categories = Array.from(new Set(products.map(product => product.category)));

const Products: React.FC = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Set category from location state if available
  useEffect(() => {
    if (location.state && location.state.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  // Filter products by category
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'featured':
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Products</h1>
        <p className="text-muted-foreground">Discover our collection of premium products</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile filter toggle */}
        <button 
          className="lg:hidden flex items-center space-x-2 mb-4 p-2 border rounded"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal size={18} />
          <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
        </button>

        {/* Filters sidebar */}
        <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-card rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <div className="space-y-2">
              <button
                className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                  selectedCategory === null ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
                onClick={() => setSelectedCategory(null)}
              >
                All Categories
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                    selectedCategory === category ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4">Sort By</h2>
              <select
                className="w-full p-2 border rounded"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4">View</h2>
              <div className="flex space-x-2">
                <button
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                >
                  <Grid size={20} />
                </button>
                <button
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
                  onClick={() => setViewMode('list')}
                  aria-label="List view"
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="lg:w-3/4">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No products found</h3>
              <p className="text-muted-foreground mt-2">Try changing your filters</p>
            </div>
          ) : (
            <div className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-6"
            }>
              {sortedProducts.map(product => (
                <div key={product.id} className={viewMode === 'list' ? "bg-card rounded-lg shadow-sm overflow-hidden" : ""}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
