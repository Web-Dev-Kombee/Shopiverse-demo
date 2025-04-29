
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Elegance</h3>
            <p className="text-muted-foreground">
              Bringing you the finest products with uncompromising quality and design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Links - Shop */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/featured" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Featured
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Links - Company */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Links - Support */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Elegance. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Terms
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Privacy
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
