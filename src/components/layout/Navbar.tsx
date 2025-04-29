
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 glass shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-semibold tracking-tight">
            Elegance
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/90 hover:text-foreground transition-colors duration-200">
              Home
            </Link>
            <Link to="/products" className="text-foreground/90 hover:text-foreground transition-colors duration-200">
              Shop
            </Link>
            <Link to="/categories" className="text-foreground/90 hover:text-foreground transition-colors duration-200">
              Categories
            </Link>
            <Link to="/about" className="text-foreground/90 hover:text-foreground transition-colors duration-200">
              About
            </Link>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-secondary transition-colors duration-200">
              <Search size={20} />
            </button>
            
            <Link to="/cart" className="p-2 rounded-full hover:bg-secondary transition-colors duration-200 relative">
              <ShoppingCart size={20} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="p-2 md:hidden rounded-full hover:bg-secondary transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 glass py-4 px-4 shadow-md transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-4">
          <Link to="/" className="py-2 text-foreground/90 hover:text-foreground transition-colors duration-200">
            Home
          </Link>
          <Link to="/products" className="py-2 text-foreground/90 hover:text-foreground transition-colors duration-200">
            Shop
          </Link>
          <Link to="/categories" className="py-2 text-foreground/90 hover:text-foreground transition-colors duration-200">
            Categories
          </Link>
          <Link to="/about" className="py-2 text-foreground/90 hover:text-foreground transition-colors duration-200">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
