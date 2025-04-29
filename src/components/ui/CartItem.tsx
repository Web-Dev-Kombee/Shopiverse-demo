
import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  
  return (
    <div className="flex items-start py-6 scale-in">
      <Link to={`/product/${product.id}`} className="shrink-0">
        <div className="w-24 h-24 rounded-md overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      
      <div className="ml-4 flex-grow">
        <div className="flex justify-between">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-medium hover:underline">{product.name}</h3>
          </Link>
          <button 
            onClick={() => removeFromCart(product.id)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Remove item"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="mt-1 text-sm text-muted-foreground">
          ${product.price.toFixed(2)} each
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <div className="flex items-center border border-border rounded-full">
            <button 
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="p-1 hover:bg-secondary rounded-full transition-colors"
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus size={16} className={quantity <= 1 ? 'text-muted-foreground' : ''} />
            </button>
            
            <span className="px-3 py-1 text-sm">
              {quantity}
            </span>
            
            <button 
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="p-1 hover:bg-secondary rounded-full transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <div className="font-semibold">
            ${(product.price * quantity).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
