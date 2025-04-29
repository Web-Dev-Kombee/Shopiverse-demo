
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';

// Collection data 
const collections = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Discover our range of high-quality electronics and gadgets',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Electronics'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Enhance your style with our premium accessories',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Accessories'
  }
];

const CollectionCard: React.FC<{ collection: typeof collections[0] }> = ({ collection }) => {
  const navigate = useNavigate();
  const productCount = getProductsByCategory(collection.category).length;
  
  const handleClick = () => {
    navigate('/products', { state: { category: collection.category } });
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={collection.image} 
          alt={collection.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
        <h3 className="text-xl font-bold mb-1">{collection.name}</h3>
        <p className="text-sm opacity-90 mb-2">{collection.description}</p>
        <span className="text-xs bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
          {productCount} Products
        </span>
      </div>
    </div>
  );
};

const Collections: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-3">Our Collections</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse our carefully curated collections of premium products
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map(collection => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {['Electronics', 'Accessories'].map(category => {
            const productCount = getProductsByCategory(category).length;
            return (
              <div 
                key={category}
                className="bg-card hover:bg-card/80 transition-colors rounded-lg shadow-sm p-6 text-center cursor-pointer"
                onClick={() => navigate('/products', { state: { category } })}
              >
                <h3 className="font-medium text-lg mb-1">{category}</h3>
                <p className="text-sm text-muted-foreground">{productCount} Products</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collections;
