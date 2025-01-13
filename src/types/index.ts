export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  itemCount: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}