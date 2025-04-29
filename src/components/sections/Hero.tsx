
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
        <div className="max-w-lg fade-in">
          <h5 className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">Premium Collection</h5>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Discover Our Curated Selection
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Experience unparalleled quality and design. Our products combine elegance, 
            functionality, and innovation to enhance your everyday life.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/products" className="btn-primary inline-flex items-center">
              Shop Now
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/collections" className="btn-outline">
              Explore Collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
