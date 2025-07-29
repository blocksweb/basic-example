export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  color: string;
  size: string;
  lowStock?: boolean;
  stockLimit?: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  onSale?: boolean;
  rating: number;
  reviews: number;
  category: string;
  description?: string;
  features?: string[];
  material?: string;
  care?: string;
  images: string[];
  colors?: {
    name: string;
    value: string;
    inStock: boolean;
  }[];
  sizes?: {
    name: string;
    inStock: boolean;
  }[];
  lowStock?: boolean;
  stockCount?: number;
  relatedProducts?: RelatedProduct[];
}

export interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}