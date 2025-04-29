
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Featured: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
      <p className="text-muted-foreground mb-8">
        Discover our handpicked selection of top-rated and most popular items.
      </p>
      
      {/* You can add featured product logic here later */}
      <div className="text-center">
        <p className="mb-4">No featured products at the moment.</p>
        <Button asChild>
          <Link to="/products">Browse All Products</Link>
        </Button>
      </div>
    </div>
  );
};

export default Featured;
