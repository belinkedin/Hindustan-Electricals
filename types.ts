import { LucideIcon } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  description: string;
  priceRange?: string;
  imageUrl: string;
}

export enum ProductCategory {
  SWITCHES = 'Switches & Sockets',
  WIRES = 'Wires & Cables',
  LIGHTING = 'Lights & Fixtures',
  FANS = 'Fans',
  ACCESSORIES = 'Accessories',
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}