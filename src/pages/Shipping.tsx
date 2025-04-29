
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Shipping: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Shipping & Returns</h1>
      <p className="text-muted-foreground mb-8">
        Comprehensive information about our shipping and return policies.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping Policy</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Standard shipping: 3-5 business days</li>
            <li>Express shipping available</li>
            <li>Free shipping on orders over $100</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Return Policy</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>30-day return window</li>
            <li>Items must be unworn and with tags</li>
            <li>Refund processed within 5-7 business days</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <Button asChild>
          <Link to="/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  );
};

export default Shipping;
