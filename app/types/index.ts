export interface Product {
  _id?: string;
  id: string;
  name: string;
  subject: string;
  description: string;
  price: number;
  pages: number;
  icon: string;
  features: string[];
  isPopular?: boolean;
  isEnseignant?: boolean;
  videoUrl?: string;
}

export interface OrderStep {
  id: number;
  title: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}
