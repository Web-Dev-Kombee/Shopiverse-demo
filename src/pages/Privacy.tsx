
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact customer support.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">Data Protection</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
