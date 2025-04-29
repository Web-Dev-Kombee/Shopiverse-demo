
import React from 'react';

const Cookies: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <p className="text-muted-foreground mb-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">What Are Cookies</h2>
          <p>Cookies are small text files that are placed on your computer by websites you visit. They are used to remember your preferences and improve your browsing experience.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">Types of Cookies We Use</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Essential Cookies: Necessary for website functionality</li>
            <li>Performance Cookies: Help us understand website usage</li>
            <li>Advertising Cookies: Used for personalized advertising</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">Managing Cookies</h2>
          <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.</p>
        </section>
      </div>
    </div>
  );
};

export default Cookies;
