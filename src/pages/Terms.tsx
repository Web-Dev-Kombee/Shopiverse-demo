
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-muted-foreground mb-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
          <p>By accessing and using our website, you accept and agree to be bound by the terms and provisions of this agreement.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">Use of Website</h2>
          <p>You agree to use the website for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and images, is the property of our company and protected by copyright laws.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
