
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-3">About Elegance</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Learn more about our story, mission, and the team behind Elegance
        </p>
      </div>
      
      {/* Our Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2020, Elegance began with a simple idea: to create a shopping experience 
            that combines quality, style, and affordability. What started as a small online store 
            has grown into a destination for those who appreciate the finer things in life.
          </p>
          <p className="text-muted-foreground mb-4">
            Our journey has been guided by our commitment to sourcing the best products, 
            supporting ethical manufacturing, and providing exceptional customer service.
          </p>
          <p className="text-muted-foreground">
            Today, we continue to expand our collection while staying true to our founding 
            principles of elegance, quality, and customer satisfaction.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" 
            alt="Our Story" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Mission and Values */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Our Mission & Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quality First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We never compromise on the quality of our products. Each item in our collection 
                is carefully selected and rigorously tested to ensure it meets our high standards.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Sustainable Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We are committed to reducing our environmental impact. From eco-friendly 
                packaging to partnering with sustainable manufacturers, we strive to make 
                responsible choices.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Customer Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your satisfaction is our top priority. We're dedicated to providing exceptional 
                service and ensuring that every interaction with Elegance exceeds your expectations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Meet Our Team</h2>
          <p className="text-muted-foreground mt-2">
            The passionate people behind Elegance
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Alex Morgan",
              position: "Founder & CEO",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
              name: "Jamie Chen",
              position: "Head of Design",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
              name: "Taylor Reed",
              position: "Customer Experience",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
              name: "Jordan Smith",
              position: "Product Specialist",
              image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            }
          ].map((member, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium text-lg">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-secondary rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Want to Know More?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Have questions about our products, company, or want to explore partnership opportunities? 
          We'd love to hear from you.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild>
            <Link to="/contact">
              Contact Us <Mail className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/faq">
              Visit our FAQ <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
