
import React from 'react';
import { Button } from "@/components/ui/button";

const Careers: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Join Our Team</h1>
      <p className="text-muted-foreground mb-8">
        We're always looking for talented individuals to help us grow.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Culture</h2>
          <p>We believe in innovation, teamwork, and personal growth.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Open Positions</h2>
          <p>Currently, we have no open positions. Check back soon!</p>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <Button 
          onClick={() => window.location.href = 'mailto:careers@company.com'}
        >
          Contact HR
        </Button>
      </div>
    </div>
  );
};

export default Careers;
