
import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import { getFeaturedProducts } from '../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <div>
      <Hero />
      
      <FeaturedProducts products={featuredProducts} />
      
      {/* Categories Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h5 className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">
              Browse By
            </h5>
            <h2 className="text-3xl font-bold">Categories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-sm bg-white">
              <img 
                src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Electronics" 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Electronics</h3>
                  <p className="text-muted-foreground mb-4">
                    Discover the latest tech innovations.
                  </p>
                  <Link 
                    to="/products" 
                    state={{ category: "Electronics" }}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Shop Electronics
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-sm bg-white">
              <img 
                src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Accessories" 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Accessories</h3>
                  <p className="text-muted-foreground mb-4">
                    Elevate your style with our premium accessories.
                  </p>
                  <Link 
                    to="/products" 
                    state={{ category: "Accessories" }}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Shop Accessories
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to receive updates on new products, special offers, and more.
            </p>
            <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
