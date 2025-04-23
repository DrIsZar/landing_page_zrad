export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  icon: string;
  color: string;
  features: string[];
  pricingTiers: PricingTier[];
  imageUrl?: string;
}

export interface PricingTier {
  id: string;
  duration: string;
  price: string;
  features?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}