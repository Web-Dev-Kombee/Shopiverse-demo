
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/ui/CartItem';

const Cart: React.FC = () => {
  const { cart, getTotalItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <div className="inline-flex justify-center items-center w-20 h-20 bg-muted rounded-full mb-6">
          <ShoppingBag size={32} className="text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Link to="/products" className="btn-primary inline-flex items-center">
          Start Shopping
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center pb-4 border-b">
              <h2 className="font-semibold">
                {getTotalItems()} {getTotalItems() === 1 ? 'Item' : 'Items'}
              </h2>
              <button 
                onClick={clearCart}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear Cart
              </button>
            </div>
            
            <div className="divide-y">
              {cart.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Tax</span>
                <span>${(getTotalPrice() * 0.1).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <div className="flex justify-between font-semibold text-lg mb-6">
                <span>Total</span>
                <span>${(getTotalPrice() + getTotalPrice() * 0.1).toFixed(2)}</span>
              </div>
              
              <button 
                onClick={() => navigate('/checkout')}
                className="btn-primary w-full justify-center"
              >
                Proceed to Checkout
              </button>
              
              <div className="mt-4">
                <Link 
                  to="/products" 
                  className="text-center block text-primary hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
