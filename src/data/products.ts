
import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    description: "Experience crystal clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable design for extended listening sessions.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviews: 452,
    featured: true
  },
  {
    id: 2,
    name: "Minimalist Watch",
    price: 149.99,
    description: "A sleek, minimalist watch with a genuine leather strap and stainless steel case. Water-resistant up to 30 meters with Japanese quartz movement.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    reviews: 201,
    featured: true
  },
  {
    id: 3,
    name: "Smart Home Speaker",
    price: 199.99,
    description: "Transform your home with our intelligent speaker system. Voice-controlled with multi-room audio capabilities and crystal-clear sound quality.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    reviews: 329,
    featured: false
  },
  {
    id: 4,
    name: "Premium Backpack",
    price: 89.99,
    description: "Made from water-resistant material with multiple compartments, laptop sleeve, and hidden anti-theft pocket. Perfect for commuters and travelers.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    reviews: 175,
    featured: true
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    price: 49.99,
    description: "Fast-charging wireless pad compatible with all Qi-enabled devices. Sleek design with LED indicator and anti-slip surface.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1582807129843-8a00296ccb37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.3,
    reviews: 98,
    featured: false
  },
  {
    id: 6,
    name: "Leather Wallet",
    price: 59.99,
    description: "Handcrafted genuine leather wallet with RFID protection. Features multiple card slots, ID window, and bill compartments.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123437161-456c5f0087ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviews: 305,
    featured: false
  },
  {
    id: 7,
    name: "Smart Fitness Tracker",
    price: 129.99,
    description: "Track your health and fitness with this advanced wearable. Monitors heart rate, sleep, steps, and workouts with a 7-day battery life.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.4,
    reviews: 268,
    featured: true
  },
  {
    id: 8,
    name: "Portable Power Bank",
    price: 39.99,
    description: "High-capacity 20,000mAh power bank with fast charging capabilities. Charge multiple devices simultaneously with dual USB ports.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.2,
    reviews: 147,
    featured: false
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
