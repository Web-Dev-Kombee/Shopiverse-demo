
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Help: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Help Center</h1>
      <p className="text-muted-foreground mb-8">
        We're here to support you. Find answers to common questions.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-secondary p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-4">FAQs</h2>
          <Button asChild variant="outline">
            <Link to="/faq">View FAQs</Link>
          </Button>
        </div>
        <div className="bg-secondary p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
          <Button asChild>
            <Link to="/contact">Get Help</Link>
          </Button>
        </div>
        <div className="bg-secondary p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-4">Shipping Info</h2>
          <Button asChild variant="outline">
            <Link to="/shipping">Shipping Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Help;
