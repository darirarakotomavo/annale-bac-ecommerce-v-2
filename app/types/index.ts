// app/types/index.ts
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

// ✅ Nouveau type pour les leçons
export interface Lesson {
  title: string;
  duration?: number;
  content?: string;
  videoUrl?: string;
  resources?: string[];
  quiz?: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

// ✅ Type pour les cours (extension)
export interface Course {
  _id?: string;
  title: string;
  slug: string;
  category: "informatique" | "mathematiques" | "physique-chimie" | "autre";
  level: "debutant" | "intermediaire" | "avance" | "expert";
  description: string;
  objectives: string[];
  prerequisites: string[];
  price: number;
  discountPrice?: number;
  image?: string;
  videoUrl?: string;
  lessons: Lesson[];
  duration: number;
  studentsCount: number;
  rating: number;
  isPublished: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
