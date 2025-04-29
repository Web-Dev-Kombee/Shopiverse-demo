
import React, { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// FAQ data
const faqItems = [
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 3-5 business days within the continental US. International shipping may take 7-14 business days depending on the destination and customs processing."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items. Products must be in their original condition with all tags and packaging intact. Custom or personalized items are not eligible for return unless defective."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Please note that customers are responsible for any import duties or taxes that may apply."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you will receive a confirmation email with a tracking number. You can use this number to track your package's status and estimated delivery date through our website or the carrier's site."
  },
  {
    question: "Are my payment details secure?",
    answer: "Absolutely. We use industry-standard encryption and secure payment processors to ensure your personal and financial information remains safe. We never store your complete credit card details on our servers."
  },
  {
    question: "Do you offer gift wrapping?",
    answer: "Yes, we offer gift wrapping services for an additional $5 per item. You can select this option during checkout and even include a personalized message for the recipient."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. We currently do not accept checks or money orders."
  },
  {
    question: "How do I care for my products?",
    answer: "Care instructions vary by product type. Detailed care information is included with each item and can also be found on the product page. Following these guidelines will help extend the life of your purchase."
  },
  {
    question: "Do you offer size exchanges?",
    answer: "Yes, we offer free size exchanges on clothing items. Simply initiate an exchange through your account, and we'll send you a return label. Once we receive your original item, we'll ship out the new size."
  },
  {
    question: "Are your products ethically sourced?",
    answer: "We are committed to ethical sourcing and partner only with manufacturers who maintain fair labor practices and safe working conditions. Many of our products are also sustainably produced."
  }
];

// Categories for filtering
const categories = [
  "All",
  "Shipping",
  "Returns",
  "Payment",
  "Products"
];

const FAQ: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  // Map questions to categories for filtering
  const categoryMap = {
    "Shipping": [0, 2, 3],
    "Returns": [1, 8],
    "Payment": [4, 6],
    "Products": [5, 7, 9]
  };
  
  const filteredFaqs = activeFilter === "All" 
    ? faqItems 
    : faqItems.filter((_, index) => categoryMap[activeFilter as keyof typeof categoryMap]?.includes(index));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-3">Frequently Asked Questions</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about our products, shipping, returns, and more
        </p>
      </div>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={activeFilter === category ? "default" : "outline"}
            onClick={() => setActiveFilter(category)}
            className="mb-2"
          >
            {category}
          </Button>
        ))}
      </div>
      
      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-sm p-6">
        <Accordion type="single" collapsible className="w-full">
          {filteredFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      {/* Contact CTA */}
      <div className="text-center mt-16">
        <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
        <p className="text-muted-foreground mb-6">
          Can't find the answer you're looking for? Please reach out to our customer support team.
        </p>
        <Button asChild>
          <Link to="/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  );
};

export default FAQ;
