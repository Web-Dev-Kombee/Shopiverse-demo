
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Truck, Shield, RotateCcw, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductById } from '../data/products';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = getProductById(id ? parseInt(id) : 0);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <button 
          onClick={() => navigate('/products')}
          className="btn-primary"
        >
          Back to Products
        </button>
      </div>
    );
  }
  
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain aspect-square fade-in"
          />
        </div>
        
        {/* Product Info */}
        <div className="slide-up">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          
          <div className="flex items-center mt-4">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="ml-2 text-muted-foreground">
              {product.rating.toFixed(1)} ({product.reviews} reviews)
            </span>
          </div>
          
          <div className="mt-6">
            <h2 className="text-3xl font-bold">${product.price.toFixed(2)}</h2>
          </div>
          
          <div className="mt-6 text-muted-foreground">
            <p>{product.description}</p>
          </div>
          
          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center border border-border rounded-full">
                <button 
                  onClick={decreaseQuantity}
                  className="p-2 hover:bg-secondary rounded-full transition-colors"
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} className={quantity <= 1 ? 'text-muted-foreground' : ''} />
                </button>
                
                <span className="px-4 py-1">
                  {quantity}
                </span>
                
                <button 
                  onClick={increaseQuantity}
                  className="p-2 hover:bg-secondary rounded-full transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="btn-primary flex items-center"
              >
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
          
          <div className="mt-10 space-y-4">
            <div className="flex items-start">
              <div className="mt-1 mr-3 text-primary">
                <Truck size={20} />
              </div>
              <div>
                <h4 className="font-medium">Free Shipping</h4>
                <p className="text-sm text-muted-foreground">Free shipping on all orders over $50</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-3 text-primary">
                <Shield size={20} />
              </div>
              <div>
                <h4 className="font-medium">2-Year Warranty</h4>
                <p className="text-sm text-muted-foreground">Full coverage for peace of mind</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-3 text-primary">
                <RotateCcw size={20} />
              </div>
              <div>
                <h4 className="font-medium">30-Day Returns</h4>
                <p className="text-sm text-muted-foreground">Hassle-free return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
