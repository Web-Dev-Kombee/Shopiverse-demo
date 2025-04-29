
import React from 'react';
import { Button } from "@/components/ui/button";

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Company Blog</h1>
      <p className="text-muted-foreground mb-8">
        Stay updated with our latest news, trends, and insights.
      </p>
      
      <div className="text-center">
        <p className="mb-4">No blog posts available at the moment.</p>
        <Button disabled>Coming Soon</Button>
      </div>
    </div>
  );
};

export default Blog;
