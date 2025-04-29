
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const NewArrivals: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">New Arrivals</h1>
      <p className="text-muted-foreground mb-8">
        Check out the latest additions to our collection.
      </p>
      
      {/* You can add new arrivals product logic here later */}
      <div className="text-center">
        <p className="mb-4">No new arrivals at the moment.</p>
        <Button asChild>
          <Link to="/products">Browse All Products</Link>
        </Button>
      </div>
    </div>
  );
};

export default NewArrivals;
