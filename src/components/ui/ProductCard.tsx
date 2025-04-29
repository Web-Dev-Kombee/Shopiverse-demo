
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  return (
    <div className="group relative hover-float slide-up rounded-lg overflow-hidden bg-white shadow-sm">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-medium line-clamp-2">{product.name}</h3>
            <span className="font-semibold">${product.price.toFixed(2)}</span>
          </div>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              ({product.reviews})
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {product.description}
          </p>
        </div>
      </Link>
      
      <button 
        onClick={handleAddToCart}
        className="absolute bottom-4 right-4 bg-primary text-primary-foreground p-2 rounded-full shadow-md transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
        aria-label="Add to cart"
      >
        <ShoppingCart size={18} />
      </button>
    </div>
  );
};

export default ProductCard;
